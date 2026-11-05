import {x as Pass, y as ShaderMaterial, I as FullScreenQuad} from "./vendor/three.js";

// Shared signal tearing for the foreground and upper layers.
export class SignalBreakPass extends Pass {
 constructor(){
  super();
  this.uniforms={tDiffuse:{value:null},clock:{value:0},strength:{value:0},direction:{value:1},imageRect:{value:new Float32Array([0,0,1,1])}};
  this.material=new ShaderMaterial({uniforms:this.uniforms,depthTest:false,depthWrite:false,
   vertexShader:`varying vec2 uvSignal;void main(){uvSignal=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
   fragmentShader:`precision highp float;
    uniform sampler2D tDiffuse;uniform float clock,strength,direction;uniform vec4 imageRect;varying vec2 uvSignal;
    vec2 screenUV(vec2 p){return imageRect.xy+p*imageRect.zw;}
    float hash(float x){return fract(sin(x*127.1+311.7)*43758.5453);}
    void main(){
     vec2 p=(uvSignal-imageRect.xy)/imageRect.zw;
     float tick=floor(clock*19.);
     float band=floor(p.y*83.);
     float seed=hash(band+tick*3.);
     float tear=step(.76,seed)*strength;
     float offset=(hash(band*7.+tick)-.5)*tear*.37;
     float fine=sin(p.y*1700.+clock*11.)*.002*strength;
     vec2 q=vec2(fract(p.x+offset+fine),p.y);
     q.y=clamp(q.y+direction*(hash(band+41.)-.5)*tear*.025,0.,1.);
     vec4 color=texture2D(tDiffuse,screenUV(q));
     float block=floor(p.x*27.);
     float dropout=step(.975,hash(block+band*37.+tick*7.))*strength;
     float alternate=texture2D(tDiffuse,screenUV(vec2(fract(q.x+.19),q.y))).r;
     color.rgb=mix(color.rgb,vec3(alternate),dropout*.85);
     // Narrow reversed slivers and duplicated edges, never full-frame flashes.
     float reverse=step(.94,hash(band+tick*2.))*strength*.7;
     color.rgb=mix(color.rgb,vec3(1.)-color.rgb,reverse);
     vec3 ghost=texture2D(tDiffuse,screenUV(vec2(fract(q.x+.018*strength),q.y))).rgb;
     color.rgb=mix(color.rgb,max(color.rgb,ghost*.8),tear*.45);
     gl_FragColor=vec4(color.rgb,color.a);
    }`});
  this.quad=new FullScreenQuad(this.material);
 }
 render(renderer,write,read){
  this.uniforms.tDiffuse.value=read.texture;
  renderer.setRenderTarget(this.renderToScreen?null:write);
  if(this.clear)renderer.clear();
  this.quad.render(renderer);
 }
 dispose(){this.material.dispose();this.quad.dispose();}
}
