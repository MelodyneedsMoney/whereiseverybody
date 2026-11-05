// Three.js r179 and rendering passes, retained from the credited reference bundle.
const id="179",PS=0,lf=1,LS=2,eg=1,DS=2,Pi=3,ur=0,Rn=1,Ui=2,Oi=0,Ma=1,cf=2,uf=3,df=4,IS=5,Ir=100,US=101,kS=102,NS=103,FS=104,OS=200,BS=201,zS=202,VS=203,Oc=204,Bc=205,HS=206,GS=207,WS=208,XS=209,qS=210,$S=211,YS=212,jS=213,ZS=214,zc=0,Vc=1,Hc=2,Ca=3,Gc=4,Wc=5,Xc=6,qc=7,tg=0,KS=1,JS=2,or=0,QS=1,ew=2,tw=3,nw=4,iw=5,rw=6,aw=7,ng=300,Ra=301,Pa=302,$c=303,Yc=304,dl=306,jc=1e3,Nr=1001,Zc=1002,ei=1003,sw=1004,Zs=1005,ui=1006,Hl=1007,Fr=1008,zi=1009,ig=1010,rg=1011,vs=1012,rd=1013,Gr=1014,ki=1015,ka=1016,ad=1017,sd=1018,_s=1020,ag=35902,sg=1021,og=1022,Zn=1023,xs=1026,ys=1027,lg=1028,od=1029,cg=1030,ld=1031,cd=1033,Lo=33776,Do=33777,Io=33778,Uo=33779,Kc=35840,Jc=35841,Qc=35842,eu=35843,tu=36196,nu=37492,iu=37496,ru=37808,au=37809,su=37810,ou=37811,lu=37812,cu=37813,uu=37814,du=37815,hu=37816,fu=37817,pu=37818,mu=37819,gu=37820,vu=37821,ko=36492,_u=36494,xu=36495,ug=36283,yu=36284,bu=36285,Su=36286,ow=3200,lw=3201,ud=0,cw=1,ar="",zn="srgb",La="srgb-linear",qo="linear",Pt="srgb",Qr=7680,hf=519,uw=512,dw=513,hw=514,dg=515,fw=516,pw=517,mw=518,gw=519,ff=35044,pf="300 es",di=2e3,$o=2001;class Na{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mf=1234567;const as=Math.PI/180,bs=180/Math.PI;function Xr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function ft(n,e,t){return Math.max(e,Math.min(t,n))}function dd(n,e){return(n%e+e)%e}function vw(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function _w(n,e,t){return n!==e?(t-n)/(e-n):0}function ss(n,e,t){return(1-t)*n+t*e}function xw(n,e,t,i){return ss(n,e,1-Math.exp(-t*i))}function yw(n,e=1){return e-Math.abs(dd(n,e*2)-e)}function bw(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Sw(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function ww(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Mw(n,e){return n+Math.random()*(e-n)}function Ew(n){return n*(.5-Math.random())}function Tw(n){n!==void 0&&(mf=n);let e=mf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Aw(n){return n*as}function Cw(n){return n*bs}function Rw(n){return(n&n-1)===0&&n!==0}function Pw(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Lw(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Dw(n,e,t,i,r){const a=Math.cos,s=Math.sin,o=a(t/2),c=s(t/2),l=a((e+i)/2),u=s((e+i)/2),d=a((e-i)/2),h=s((e-i)/2),f=a((i-e)/2),g=s((i-e)/2);switch(r){case"XYX":n.set(o*u,c*d,c*h,o*l);break;case"YZY":n.set(c*h,o*u,c*d,o*l);break;case"ZXZ":n.set(c*d,c*h,o*u,o*l);break;case"XZX":n.set(o*u,c*g,c*f,o*l);break;case"YXY":n.set(c*f,o*u,c*g,o*l);break;case"ZYZ":n.set(c*g,c*f,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ma(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Sn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const VC={DEG2RAD:as,RAD2DEG:bs,generateUUID:Xr,clamp:ft,euclideanModulo:dd,mapLinear:vw,inverseLerp:_w,lerp:ss,damp:xw,pingpong:yw,smoothstep:bw,smootherstep:Sw,randInt:ww,randFloat:Mw,randFloatSpread:Ew,seededRandom:Tw,degToRad:Aw,radToDeg:Cw,isPowerOfTwo:Rw,ceilPowerOfTwo:Pw,floorPowerOfTwo:Lw,setQuaternionFromProperEuler:Dw,normalize:Sn,denormalize:ma};class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ls{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,s,o){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3];const h=a[s+0],f=a[s+1],g=a[s+2],v=a[s+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(d!==v||c!==h||l!==f||u!==g){let m=1-o;const p=c*h+l*f+u*g+d*v,T=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const A=Math.sqrt(w),D=Math.atan2(A,p*T);m=Math.sin(m*D)/A,o=Math.sin(o*D)/A}const _=o*T;if(c=c*m+h*_,l=l*m+f*_,u=u*m+g*_,d=d*m+v*_,m===1-o){const A=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=A,l*=A,u*=A,d*=A}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,a,s){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=a[s],h=a[s+1],f=a[s+2],g=a[s+3];return e[t]=o*g+u*d+c*f-l*h,e[t+1]=c*g+u*h+l*d-o*f,e[t+2]=l*g+u*f+o*h-c*d,e[t+3]=u*g-o*d-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),d=o(a/2),h=c(i/2),f=c(r/2),g=c(a/2);switch(s){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],s=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(a-l)*f,this._z=(s-r)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(u-c)/f,this._x=.25*f,this._y=(r+s)/f,this._z=(a+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(a-l)/f,this._x=(r+s)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(s-r)/f,this._x=(a+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,s=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+s*o+r*l-a*c,this._y=r*u+s*c+a*o-i*l,this._z=a*u+s*l+i*c-r*o,this._w=s*u-i*o-r*c-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+i*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=r,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*s+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*a+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=s*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=a*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,c=e.w,l=2*(s*r-o*i),u=2*(o*t-a*r),d=2*(a*i-s*t);return this.x=t+c*l+s*d-o*u,this.y=i+c*u+o*l-a*d,this.z=r+c*d+a*u-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,s=t.x,o=t.y,c=t.z;return this.x=r*c-a*o,this.y=a*s-i*c,this.z=i*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Gl.copy(this).projectOnVector(e),this.sub(Gl)}reflect(e){return this.sub(Gl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gl=new j,gf=new Ls;class ct{constructor(e,t,i,r,a,s,o,c,l){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,c,l)}set(e,t,i,r,a,s,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=a,u[5]=c,u[6]=i,u[7]=s,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],v=r[0],m=r[3],p=r[6],T=r[1],w=r[4],_=r[7],A=r[2],D=r[5],R=r[8];return a[0]=s*v+o*T+c*A,a[3]=s*m+o*w+c*D,a[6]=s*p+o*_+c*R,a[1]=l*v+u*T+d*A,a[4]=l*m+u*w+d*D,a[7]=l*p+u*_+d*R,a[2]=h*v+f*T+g*A,a[5]=h*m+f*w+g*D,a[8]=h*p+f*_+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*s*u-t*o*l-i*a*u+i*o*c+r*a*l-r*s*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*s-o*l,h=o*c-u*a,f=l*a-s*c,g=t*d+i*h+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(r*l-u*i)*v,e[2]=(o*i-r*s)*v,e[3]=h*v,e[4]=(u*t-r*c)*v,e[5]=(r*a-o*t)*v,e[6]=f*v,e[7]=(i*c-l*t)*v,e[8]=(s*t-i*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,s,o){const c=Math.cos(a),l=Math.sin(a);return this.set(i*c,i*l,-i*(c*s+l*o)+s+e,-r*l,r*c,-r*(-l*s+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Wl.makeScale(e,t)),this}rotate(e){return this.premultiply(Wl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wl=new ct;function hg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Yo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Iw(){const n=Yo("canvas");return n.style.display="block",n}const vf={};function Ea(n){n in vf||(vf[n]=!0,console.warn(n))}function Uw(n,e,t){return new Promise(function(i,r){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const _f=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xf=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kw(){const n={enabled:!0,workingColorSpace:La,spaces:{},convert:function(r,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===Pt&&(r.r=Bi(r.r),r.g=Bi(r.g),r.b=Bi(r.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Pt&&(r.r=Ta(r.r),r.g=Ta(r.g),r.b=Ta(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ar?qo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,s){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return Ea("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return Ea("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[La]:{primaries:e,whitePoint:i,transfer:qo,toXYZ:_f,fromXYZ:xf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zn},outputColorSpaceConfig:{drawingBufferColorSpace:zn}},[zn]:{primaries:e,whitePoint:i,transfer:Pt,toXYZ:_f,fromXYZ:xf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zn}}}),n}const xt=kw();function Bi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ta(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ea;class Nw{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ea===void 0&&(ea=Yo("canvas")),ea.width=e.width,ea.height=e.height;const r=ea.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ea}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Bi(a[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Bi(t[i]/255)*255):t[i]=Bi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fw=0;class hd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fw++}),this.uuid=Xr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(Xl(r[s].image)):a.push(Xl(r[s]))}else a=Xl(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function Xl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Nw.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ow=0;const ql=new j;class Tn extends Na{constructor(e=Tn.DEFAULT_IMAGE,t=Tn.DEFAULT_MAPPING,i=Nr,r=Nr,a=ui,s=Fr,o=Zn,c=zi,l=Tn.DEFAULT_ANISOTROPY,u=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ow++}),this.uuid=Xr(),this.name="",this.source=new hd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ql).x}get height(){return this.source.getSize(ql).y}get depth(){return this.source.getSize(ql).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ng)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jc:e.x=e.x-Math.floor(e.x);break;case Nr:e.x=e.x<0?0:1;break;case Zc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jc:e.y=e.y-Math.floor(e.y);break;case Nr:e.y=e.y<0?0:1;break;case Zc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=ng;Tn.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,t=0,i=0,r=1){Wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,_=(f+1)/2,A=(p+1)/2,D=(u+h)/4,R=(d+v)/4,I=(g+m)/4;return w>_&&w>A?w<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(w),r=D/i,a=R/i):_>A?_<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(_),i=D/r,a=I/r):A<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(A),i=R/a,r=I/a),this.set(i,r,a,t),this}let T=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(d-v)/T,this.z=(h-u)/T,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bw extends Na{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);const r={width:e,height:t,depth:i.depth},a=new Tn(r);this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:ui,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new hd(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dr extends Bw{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class fg extends Tn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ei,this.minFilter=ei,this.wrapR=Nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zw extends Tn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ei,this.minFilter=ei,this.wrapR=Nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ds{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Wn):Wn.fromBufferAttribute(a,s),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ks.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ks.copy(i.boundingBox)),Ks.applyMatrix4(e.matrixWorld),this.union(Ks)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qa),Js.subVectors(this.max,qa),ta.subVectors(e.a,qa),na.subVectors(e.b,qa),ia.subVectors(e.c,qa),$i.subVectors(na,ta),Yi.subVectors(ia,na),wr.subVectors(ta,ia);let t=[0,-$i.z,$i.y,0,-Yi.z,Yi.y,0,-wr.z,wr.y,$i.z,0,-$i.x,Yi.z,0,-Yi.x,wr.z,0,-wr.x,-$i.y,$i.x,0,-Yi.y,Yi.x,0,-wr.y,wr.x,0];return!$l(t,ta,na,ia,Js)||(t=[1,0,0,0,1,0,0,0,1],!$l(t,ta,na,ia,Js))?!1:(Qs.crossVectors($i,Yi),t=[Qs.x,Qs.y,Qs.z],$l(t,ta,na,ia,Js))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Si=[new j,new j,new j,new j,new j,new j,new j,new j],Wn=new j,Ks=new Ds,ta=new j,na=new j,ia=new j,$i=new j,Yi=new j,wr=new j,qa=new j,Js=new j,Qs=new j,Mr=new j;function $l(n,e,t,i,r){for(let a=0,s=n.length-3;a<=s;a+=3){Mr.fromArray(n,a);const o=r.x*Math.abs(Mr.x)+r.y*Math.abs(Mr.y)+r.z*Math.abs(Mr.z),c=e.dot(Mr),l=t.dot(Mr),u=i.dot(Mr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Vw=new Ds,$a=new j,Yl=new j;class hl{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Vw.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$a.subVectors(e,this.center);const t=$a.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector($a,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($a.copy(e.center).add(Yl)),this.expandByPoint($a.copy(e.center).sub(Yl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const wi=new j,jl=new j,eo=new j,ji=new j,Zl=new j,to=new j,Kl=new j;class fd{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){jl.copy(e).add(t).multiplyScalar(.5),eo.copy(t).sub(e).normalize(),ji.copy(this.origin).sub(jl);const a=e.distanceTo(t)*.5,s=-this.direction.dot(eo),o=ji.dot(this.direction),c=-ji.dot(eo),l=ji.lengthSq(),u=Math.abs(1-s*s);let d,h,f,g;if(u>0)if(d=s*c-o,h=s*o-c,g=a*u,d>=0)if(h>=-g)if(h<=g){const v=1/u;d*=v,h*=v,f=d*(d+s*h+2*o)+h*(s*d+h+2*c)+l}else h=a,d=Math.max(0,-(s*h+o)),f=-d*d+h*(h+2*c)+l;else h=-a,d=Math.max(0,-(s*h+o)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-s*a+o)),h=d>0?-a:Math.min(Math.max(-a,-c),a),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-a,-c),a),f=h*(h+2*c)+l):(d=Math.max(0,-(s*a+o)),h=d>0?a:Math.min(Math.max(-a,-c),a),f=-d*d+h*(h+2*c)+l);else h=s>0?-a:a,d=Math.max(0,-(s*h+o)),f=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(jl).addScaledVector(eo,h),f}intersectSphere(e,t){wi.subVectors(e.center,this.origin);const i=wi.dot(this.direction),r=wi.dot(wi)-i*i,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,c=i+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,s,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(a=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(a=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),d>=0?(o=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,i,r,a){Zl.subVectors(t,e),to.subVectors(i,e),Kl.crossVectors(Zl,to);let s=this.direction.dot(Kl),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;ji.subVectors(this.origin,e);const c=o*this.direction.dot(to.crossVectors(ji,to));if(c<0)return null;const l=o*this.direction.dot(Zl.cross(ji));if(l<0||c+l>s)return null;const u=-o*ji.dot(Kl);return u<0?null:this.at(u/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,t,i,r,a,s,o,c,l,u,d,h,f,g,v,m){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,c,l,u,d,h,f,g,v,m)}set(e,t,i,r,a,s,o,c,l,u,d,h,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=a,p[5]=s,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ra.setFromMatrixColumn(e,0).length(),a=1/ra.setFromMatrixColumn(e,1).length(),s=1/ra.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const h=s*u,f=s*d,g=o*u,v=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=h-v*l,t[9]=-o*c,t[2]=v-h*l,t[6]=g+f*l,t[10]=s*c}else if(e.order==="YXZ"){const h=c*u,f=c*d,g=l*u,v=l*d;t[0]=h+v*o,t[4]=g*o-f,t[8]=s*l,t[1]=s*d,t[5]=s*u,t[9]=-o,t[2]=f*o-g,t[6]=v+h*o,t[10]=s*c}else if(e.order==="ZXY"){const h=c*u,f=c*d,g=l*u,v=l*d;t[0]=h-v*o,t[4]=-s*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=s*u,t[9]=v-h*o,t[2]=-s*l,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){const h=s*u,f=s*d,g=o*u,v=o*d;t[0]=c*u,t[4]=g*l-f,t[8]=h*l+v,t[1]=c*d,t[5]=v*l+h,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){const h=s*c,f=s*l,g=o*c,v=o*l;t[0]=c*u,t[4]=v-h*d,t[8]=g*d+f,t[1]=d,t[5]=s*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*d+g,t[10]=h-v*d}else if(e.order==="XZY"){const h=s*c,f=s*l,g=o*c,v=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+v,t[5]=s*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hw,e,Gw)}lookAt(e,t,i){const r=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Zi.crossVectors(i,Dn),Zi.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Zi.crossVectors(i,Dn)),Zi.normalize(),no.crossVectors(Dn,Zi),r[0]=Zi.x,r[4]=no.x,r[8]=Dn.x,r[1]=Zi.y,r[5]=no.y,r[9]=Dn.y,r[2]=Zi.z,r[6]=no.z,r[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],T=i[3],w=i[7],_=i[11],A=i[15],D=r[0],R=r[4],I=r[8],S=r[12],b=r[1],P=r[5],O=r[9],V=r[13],H=r[2],Z=r[6],W=r[10],oe=r[14],Q=r[3],ve=r[7],we=r[11],Ce=r[15];return a[0]=s*D+o*b+c*H+l*Q,a[4]=s*R+o*P+c*Z+l*ve,a[8]=s*I+o*O+c*W+l*we,a[12]=s*S+o*V+c*oe+l*Ce,a[1]=u*D+d*b+h*H+f*Q,a[5]=u*R+d*P+h*Z+f*ve,a[9]=u*I+d*O+h*W+f*we,a[13]=u*S+d*V+h*oe+f*Ce,a[2]=g*D+v*b+m*H+p*Q,a[6]=g*R+v*P+m*Z+p*ve,a[10]=g*I+v*O+m*W+p*we,a[14]=g*S+v*V+m*oe+p*Ce,a[3]=T*D+w*b+_*H+A*Q,a[7]=T*R+w*P+_*Z+A*ve,a[11]=T*I+w*O+_*W+A*we,a[15]=T*S+w*V+_*oe+A*Ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+a*c*d-r*l*d-a*o*h+i*l*h+r*o*f-i*c*f)+v*(+t*c*f-t*l*h+a*s*h-r*s*f+r*l*u-a*c*u)+m*(+t*l*d-t*o*f-a*s*d+i*s*f+a*o*u-i*l*u)+p*(-r*o*u-t*c*d+t*o*h+r*s*d-i*s*h+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],T=d*m*l-v*h*l+v*c*f-o*m*f-d*c*p+o*h*p,w=g*h*l-u*m*l-g*c*f+s*m*f+u*c*p-s*h*p,_=u*v*l-g*d*l+g*o*f-s*v*f-u*o*p+s*d*p,A=g*d*c-u*v*c-g*o*h+s*v*h+u*o*m-s*d*m,D=t*T+i*w+r*_+a*A;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/D;return e[0]=T*R,e[1]=(v*h*a-d*m*a-v*r*f+i*m*f+d*r*p-i*h*p)*R,e[2]=(o*m*a-v*c*a+v*r*l-i*m*l-o*r*p+i*c*p)*R,e[3]=(d*c*a-o*h*a-d*r*l+i*h*l+o*r*f-i*c*f)*R,e[4]=w*R,e[5]=(u*m*a-g*h*a+g*r*f-t*m*f-u*r*p+t*h*p)*R,e[6]=(g*c*a-s*m*a-g*r*l+t*m*l+s*r*p-t*c*p)*R,e[7]=(s*h*a-u*c*a+u*r*l-t*h*l-s*r*f+t*c*f)*R,e[8]=_*R,e[9]=(g*d*a-u*v*a-g*i*f+t*v*f+u*i*p-t*d*p)*R,e[10]=(s*v*a-g*o*a+g*i*l-t*v*l-s*i*p+t*o*p)*R,e[11]=(u*o*a-s*d*a-u*i*l+t*d*l+s*i*f-t*o*f)*R,e[12]=A*R,e[13]=(u*v*r-g*d*r+g*i*h-t*v*h-u*i*m+t*d*m)*R,e[14]=(g*o*r-s*v*r-g*i*c+t*v*c+s*i*m-t*o*m)*R,e[15]=(s*d*r-u*o*r+u*i*c-t*d*c-s*i*h+t*o*h)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,s=e.x,o=e.y,c=e.z,l=a*s,u=a*o;return this.set(l*s+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*s,0,l*c-r*o,u*c+r*s,a*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,s=t._y,o=t._z,c=t._w,l=a+a,u=s+s,d=o+o,h=a*l,f=a*u,g=a*d,v=s*u,m=s*d,p=o*d,T=c*l,w=c*u,_=c*d,A=i.x,D=i.y,R=i.z;return r[0]=(1-(v+p))*A,r[1]=(f+_)*A,r[2]=(g-w)*A,r[3]=0,r[4]=(f-_)*D,r[5]=(1-(h+p))*D,r[6]=(m+T)*D,r[7]=0,r[8]=(g+w)*R,r[9]=(m-T)*R,r[10]=(1-(h+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=ra.set(r[0],r[1],r[2]).length();const s=ra.set(r[4],r[5],r[6]).length(),o=ra.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Xn.copy(this);const l=1/a,u=1/s,d=1/o;return Xn.elements[0]*=l,Xn.elements[1]*=l,Xn.elements[2]*=l,Xn.elements[4]*=u,Xn.elements[5]*=u,Xn.elements[6]*=u,Xn.elements[8]*=d,Xn.elements[9]*=d,Xn.elements[10]*=d,t.setFromRotationMatrix(Xn),i.x=a,i.y=s,i.z=o,this}makePerspective(e,t,i,r,a,s,o=di,c=!1){const l=this.elements,u=2*a/(t-e),d=2*a/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let g,v;if(c)g=a/(s-a),v=s*a/(s-a);else if(o===di)g=-(s+a)/(s-a),v=-2*s*a/(s-a);else if(o===$o)g=-s/(s-a),v=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,a,s,o=di,c=!1){const l=this.elements,u=2/(t-e),d=2/(i-r),h=-(t+e)/(t-e),f=-(i+r)/(i-r);let g,v;if(c)g=1/(s-a),v=s/(s-a);else if(o===di)g=-2/(s-a),v=-(s+a)/(s-a);else if(o===$o)g=-1/(s-a),v=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ra=new j,Xn=new Ht,Hw=new j(0,0,0),Gw=new j(1,1,1),Zi=new j,no=new j,Dn=new j,yf=new Ht,bf=new Ls;class gi{constructor(e=0,t=0,i=0,r=gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],c=r[1],l=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-ft(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ft(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return yf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bf.setFromEuler(this),this.setFromQuaternion(bf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gi.DEFAULT_ORDER="XYZ";class pd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ww=0;const Sf=new j,aa=new Ls,Mi=new Ht,io=new j,Ya=new j,Xw=new j,qw=new Ls,wf=new j(1,0,0),Mf=new j(0,1,0),Ef=new j(0,0,1),Tf={type:"added"},$w={type:"removed"},sa={type:"childadded",child:null},Jl={type:"childremoved",child:null};class Pn extends Na{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ww++}),this.uuid=Xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const e=new j,t=new gi,i=new Ls,r=new j(1,1,1);function a(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ht},normalMatrix:{value:new ct}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return aa.setFromAxisAngle(e,t),this.quaternion.multiply(aa),this}rotateOnWorldAxis(e,t){return aa.setFromAxisAngle(e,t),this.quaternion.premultiply(aa),this}rotateX(e){return this.rotateOnAxis(wf,e)}rotateY(e){return this.rotateOnAxis(Mf,e)}rotateZ(e){return this.rotateOnAxis(Ef,e)}translateOnAxis(e,t){return Sf.copy(e).applyQuaternion(this.quaternion),this.position.add(Sf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wf,e)}translateY(e){return this.translateOnAxis(Mf,e)}translateZ(e){return this.translateOnAxis(Ef,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?io.copy(e):io.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ya.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Ya,io,this.up):Mi.lookAt(io,Ya,this.up),this.quaternion.setFromRotationMatrix(Mi),r&&(Mi.extractRotation(r.matrixWorld),aa.setFromRotationMatrix(Mi),this.quaternion.premultiply(aa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tf),sa.child=e,this.dispatchEvent(sa),sa.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($w),Jl.child=e,this.dispatchEvent(Jl),Jl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tf),sa.child=e,this.dispatchEvent(sa),sa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ya,e,Xw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ya,qw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];a(e.shapes,d)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(a(e.animations,c))}}if(t){const o=s(e.geometries),c=s(e.materials),l=s(e.textures),u=s(e.images),d=s(e.shapes),h=s(e.skeletons),f=s(e.animations),g=s(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function s(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Pn.DEFAULT_UP=new j(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qn=new j,Ei=new j,Ql=new j,Ti=new j,oa=new j,la=new j,Af=new j,ec=new j,tc=new j,nc=new j,ic=new Wt,rc=new Wt,ac=new Wt;class Yn{constructor(e=new j,t=new j,i=new j){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),qn.subVectors(e,t),r.cross(qn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){qn.subVectors(r,t),Ei.subVectors(i,t),Ql.subVectors(e,t);const s=qn.dot(qn),o=qn.dot(Ei),c=qn.dot(Ql),l=Ei.dot(Ei),u=Ei.dot(Ql),d=s*l-o*o;if(d===0)return a.set(0,0,0),null;const h=1/d,f=(l*c-o*u)*h,g=(s*u-o*c)*h;return a.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,i,r,a,s,o,c){return this.getBarycoord(e,t,i,r,Ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,Ti.x),c.addScaledVector(s,Ti.y),c.addScaledVector(o,Ti.z),c)}static getInterpolatedAttribute(e,t,i,r,a,s){return ic.setScalar(0),rc.setScalar(0),ac.setScalar(0),ic.fromBufferAttribute(e,t),rc.fromBufferAttribute(e,i),ac.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(ic,a.x),s.addScaledVector(rc,a.y),s.addScaledVector(ac,a.z),s}static isFrontFacing(e,t,i,r){return qn.subVectors(i,t),Ei.subVectors(e,t),qn.cross(Ei).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),qn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,a){return Yn.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let s,o;oa.subVectors(r,i),la.subVectors(a,i),ec.subVectors(e,i);const c=oa.dot(ec),l=la.dot(ec);if(c<=0&&l<=0)return t.copy(i);tc.subVectors(e,r);const u=oa.dot(tc),d=la.dot(tc);if(u>=0&&d<=u)return t.copy(r);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return s=c/(c-u),t.copy(i).addScaledVector(oa,s);nc.subVectors(e,a);const f=oa.dot(nc),g=la.dot(nc);if(g>=0&&f<=g)return t.copy(a);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(la,o);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Af.subVectors(a,r),o=(d-u)/(d-u+(f-g)),t.copy(r).addScaledVector(Af,o);const p=1/(m+v+h);return s=v*p,o=h*p,t.copy(i).addScaledVector(oa,s).addScaledVector(la,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},ro={h:0,s:0,l:0};function sc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class pt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,xt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=xt.workingColorSpace){if(e=dd(e,1),t=ft(t,0,1),i=ft(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=sc(s,a,e+1/3),this.g=sc(s,a,e),this.b=sc(s,a,e-1/3)}return xt.colorSpaceToWorking(this,r),this}setStyle(e,t=zn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zn){const i=pg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=Ta(e.r),this.g=Ta(e.g),this.b=Ta(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zn){return xt.workingToColorSpace(fn.copy(this),e),Math.round(ft(fn.r*255,0,255))*65536+Math.round(ft(fn.g*255,0,255))*256+Math.round(ft(fn.b*255,0,255))}getHexString(e=zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(fn.copy(this),t);const i=fn.r,r=fn.g,a=fn.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let c,l;const u=(o+s)/2;if(o===s)c=0,l=0;else{const d=s-o;switch(l=u<=.5?d/(s+o):d/(2-s-o),s){case i:c=(r-a)/d+(r<a?6:0);break;case r:c=(a-i)/d+2;break;case a:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=zn){xt.workingToColorSpace(fn.copy(this),e);const t=fn.r,i=fn.g,r=fn.b;return e!==zn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+t,Ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ki),e.getHSL(ro);const i=ss(Ki.h,ro.h,t),r=ss(Ki.s,ro.s,t),a=ss(Ki.l,ro.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new pt;pt.NAMES=pg;let Yw=0;class qr extends Na{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yw++}),this.uuid=Xr(),this.name="",this.type="Material",this.blending=Ma,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oc,this.blendDst=Bc,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=Ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ma&&(i.blending=this.blending),this.side!==ur&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Oc&&(i.blendSrc=this.blendSrc),this.blendDst!==Bc&&(i.blendDst=this.blendDst),this.blendEquation!==Ir&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ca&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const c=a[o];delete c.metadata,s.push(c)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class mg extends qr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=tg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new j,ao=new Le;let jw=0;class mi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jw++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ff,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ao.fromBufferAttribute(this,t),ao.applyMatrix3(e),this.setXY(t,ao.x,ao.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ma(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Sn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ma(t,this.array)),t}setX(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ma(t,this.array)),t}setY(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ma(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ma(t,this.array)),t}setW(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),i=Sn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),i=Sn(i,this.array),r=Sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),i=Sn(i,this.array),r=Sn(r,this.array),a=Sn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ff&&(e.usage=this.usage),e}}class gg extends mi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class vg extends mi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ot extends mi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Zw=0;const Bn=new Ht,oc=new Pn,ca=new j,In=new Ds,ja=new Ds,Jt=new j;class Ln extends Na{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zw++}),this.uuid=Xr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hg(e)?vg:gg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new ct().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,i){return Bn.makeTranslation(e,t,i),this.applyMatrix4(Bn),this}scale(e,t,i){return Bn.makeScale(e,t,i),this.applyMatrix4(Bn),this}lookAt(e){return oc.lookAt(e),oc.updateMatrix(),this.applyMatrix4(oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ca).negate(),this.translate(ca.x,ca.y,ca.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ot(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];In.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];ja.setFromBufferAttribute(o),this.morphTargetsRelative?(Jt.addVectors(In.min,ja.min),In.expandByPoint(Jt),Jt.addVectors(In.max,ja.max),In.expandByPoint(Jt)):(In.expandByPoint(ja.min),In.expandByPoint(ja.max))}In.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)Jt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(Jt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Jt.fromBufferAttribute(o,l),c&&(ca.fromBufferAttribute(e,l),Jt.add(ca)),r=Math.max(r,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mi(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<i.count;I++)o[I]=new j,c[I]=new j;const l=new j,u=new j,d=new j,h=new Le,f=new Le,g=new Le,v=new j,m=new j;function p(I,S,b){l.fromBufferAttribute(i,I),u.fromBufferAttribute(i,S),d.fromBufferAttribute(i,b),h.fromBufferAttribute(a,I),f.fromBufferAttribute(a,S),g.fromBufferAttribute(a,b),u.sub(l),d.sub(l),f.sub(h),g.sub(h);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(P),o[I].add(v),o[S].add(v),o[b].add(v),c[I].add(m),c[S].add(m),c[b].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let I=0,S=T.length;I<S;++I){const b=T[I],P=b.start,O=b.count;for(let V=P,H=P+O;V<H;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const w=new j,_=new j,A=new j,D=new j;function R(I){A.fromBufferAttribute(r,I),D.copy(A);const S=o[I];w.copy(S),w.sub(A.multiplyScalar(A.dot(S))).normalize(),_.crossVectors(D,S);const P=_.dot(c[I])<0?-1:1;s.setXYZW(I,w.x,w.y,w.z,P)}for(let I=0,S=T.length;I<S;++I){const b=T[I],P=b.start,O=b.count;for(let V=P,H=P+O;V<H;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const r=new j,a=new j,s=new j,o=new j,c=new j,l=new j,u=new j,d=new j;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),s.fromBufferAttribute(t,m),u.subVectors(s,a),d.subVectors(r,a),u.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),a.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),u.subVectors(s,a),d.subVectors(r,a),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*u;for(let p=0;p<u;p++)h[g++]=l[f++]}return new mi(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ln,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=e(h,i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const a=e.morphAttributes;for(const l in a){const u=[],d=a[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,u=s.length;l<u;l++){const d=s[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cf=new Ht,Er=new fd,so=new hl,Rf=new j,oo=new j,lo=new j,co=new j,lc=new j,uo=new j,Pf=new j,ho=new j;class hi extends Pn{constructor(e=new Ln,t=new mg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){uo.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const u=o[c],d=a[c];u!==0&&(lc.fromBufferAttribute(d,e),s?uo.addScaledVector(lc,u):uo.addScaledVector(lc.sub(t),u))}t.add(uo)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),so.copy(i.boundingSphere),so.applyMatrix4(a),Er.copy(e.ray).recast(e.near),!(so.containsPoint(Er.origin)===!1&&(Er.intersectSphere(so,Rf)===null||Er.origin.distanceToSquared(Rf)>(e.far-e.near)**2))&&(Cf.copy(a).invert(),Er.copy(e.ray).applyMatrix4(Cf),!(i.boundingBox!==null&&Er.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Er)))}_computeIntersections(e,t,i){let r;const a=this.geometry,s=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,u=a.attributes.uv1,d=a.attributes.normal,h=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=s[m.materialIndex],T=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=T,A=w;_<A;_+=3){const D=o.getX(_),R=o.getX(_+1),I=o.getX(_+2);r=fo(this,p,e,i,l,u,d,D,R,I),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const T=o.getX(m),w=o.getX(m+1),_=o.getX(m+2);r=fo(this,s,e,i,l,u,d,T,w,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(s))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=s[m.materialIndex],T=Math.max(m.start,f.start),w=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=T,A=w;_<A;_+=3){const D=_,R=_+1,I=_+2;r=fo(this,p,e,i,l,u,d,D,R,I),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const T=m,w=m+1,_=m+2;r=fo(this,s,e,i,l,u,d,T,w,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Kw(n,e,t,i,r,a,s,o){let c;if(e.side===Rn?c=i.intersectTriangle(s,a,r,!0,o):c=i.intersectTriangle(r,a,s,e.side===ur,o),c===null)return null;ho.copy(o),ho.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(ho);return l<t.near||l>t.far?null:{distance:l,point:ho.clone(),object:n}}function fo(n,e,t,i,r,a,s,o,c,l){n.getVertexPosition(o,oo),n.getVertexPosition(c,lo),n.getVertexPosition(l,co);const u=Kw(n,e,t,i,oo,lo,co,Pf);if(u){const d=new j;Yn.getBarycoord(Pf,oo,lo,co,d),r&&(u.uv=Yn.getInterpolatedAttribute(r,o,c,l,d,new Le)),a&&(u.uv1=Yn.getInterpolatedAttribute(a,o,c,l,d,new Le)),s&&(u.normal=Yn.getInterpolatedAttribute(s,o,c,l,d,new j),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new j,materialIndex:0};Yn.getNormal(oo,lo,co,h.normal),u.face=h,u.barycoord=d}return u}class Is extends Ln{constructor(e=1,t=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const c=[],l=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,i,t,e,s,a,0),g("z","y","x",1,-1,i,t,-e,s,a,1),g("x","z","y",1,1,e,i,t,r,s,2),g("x","z","y",1,-1,e,i,-t,r,s,3),g("x","y","z",1,-1,e,t,i,r,a,4),g("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(c),this.setAttribute("position",new Ot(l,3)),this.setAttribute("normal",new Ot(u,3)),this.setAttribute("uv",new Ot(d,2));function g(v,m,p,T,w,_,A,D,R,I,S){const b=_/R,P=A/I,O=_/2,V=A/2,H=D/2,Z=R+1,W=I+1;let oe=0,Q=0;const ve=new j;for(let we=0;we<W;we++){const Ce=we*P-V;for(let ze=0;ze<Z;ze++){const et=ze*b-O;ve[v]=et*T,ve[m]=Ce*w,ve[p]=H,l.push(ve.x,ve.y,ve.z),ve[v]=0,ve[m]=0,ve[p]=D>0?1:-1,u.push(ve.x,ve.y,ve.z),d.push(ze/R),d.push(1-we/I),oe+=1}}for(let we=0;we<I;we++)for(let Ce=0;Ce<R;Ce++){const ze=h+Ce+Z*we,et=h+Ce+Z*(we+1),Je=h+(Ce+1)+Z*(we+1),le=h+(Ce+1)+Z*we;c.push(ze,et,le),c.push(et,Je,le),Q+=6}o.addGroup(f,Q,S),f+=Q,h+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Is(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Da(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function wn(n){const e={};for(let t=0;t<n.length;t++){const i=Da(n[t]);for(const r in i)e[r]=i[r]}return e}function Jw(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function _g(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const xg={clone:Da,merge:wn};var Qw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends qr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qw,this.fragmentShader=eM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Da(e.uniforms),this.uniformsGroups=Jw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class yg extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ji=new j,Lf=new Le,Df=new Le;class $n extends yg{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(as*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(as*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z)}getViewSize(e,t){return this.getViewBounds(e,Lf,Df),t.subVectors(Df,Lf)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(as*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;a+=s.offsetX*r/c,t-=s.offsetY*i/l,r*=s.width/c,i*=s.height/l}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ua=-90,da=1;class tM extends Pn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $n(ua,da,e,t);r.layers=this.layers,this.add(r);const a=new $n(ua,da,e,t);a.layers=this.layers,this.add(a);const s=new $n(ua,da,e,t);s.layers=this.layers,this.add(s);const o=new $n(ua,da,e,t);o.layers=this.layers,this.add(o);const c=new $n(ua,da,e,t);c.layers=this.layers,this.add(c);const l=new $n(ua,da,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,s,o,c]=t;for(const l of t)this.remove(l);if(e===di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===$o)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class bg extends Tn{constructor(e=[],t=Ra,i,r,a,s,o,c,l,u){super(e,t,i,r,a,s,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nM extends dr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new bg(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Is(5,5,5),a=new ni({name:"CubemapFromEquirect",uniforms:Da(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rn,blending:Oi});a.uniforms.tEquirect.value=t;const s=new hi(r,a),o=t.minFilter;return t.minFilter===Fr&&(t.minFilter=ui),new tM(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(a)}}class po extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iM={type:"move"};class cc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new po,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new po,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new po,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(iM)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new po;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class HC extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const uc=new j,rM=new j,aM=new ct;class Pr{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=uc.subVectors(i,t).cross(rM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(uc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||aM.getNormalMatrix(e),r=this.coplanarPoint(uc).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new hl,sM=new Le(.5,.5),mo=new j;class Sg{constructor(e=new Pr,t=new Pr,i=new Pr,r=new Pr,a=new Pr,s=new Pr){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=di,i=!1){const r=this.planes,a=e.elements,s=a[0],o=a[1],c=a[2],l=a[3],u=a[4],d=a[5],h=a[6],f=a[7],g=a[8],v=a[9],m=a[10],p=a[11],T=a[12],w=a[13],_=a[14],A=a[15];if(r[0].setComponents(l-s,f-u,p-g,A-T).normalize(),r[1].setComponents(l+s,f+u,p+g,A+T).normalize(),r[2].setComponents(l+o,f+d,p+v,A+w).normalize(),r[3].setComponents(l-o,f-d,p-v,A-w).normalize(),i)r[4].setComponents(c,h,m,_).normalize(),r[5].setComponents(l-c,f-h,p-m,A-_).normalize();else if(r[4].setComponents(l-c,f-h,p-m,A-_).normalize(),t===di)r[5].setComponents(l+c,f+h,p+m,A+_).normalize();else if(t===$o)r[5].setComponents(c,h,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Tr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){Tr.center.set(0,0,0);const t=sM.distanceTo(e.center);return Tr.radius=.7071067811865476+t,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(mo.x=r.normal.x>0?e.max.x:e.min.x,mo.y=r.normal.y>0?e.max.y:e.min.y,mo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(mo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wg extends qr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jo=new j,Zo=new j,If=new Ht,Za=new fd,go=new hl,dc=new j,Uf=new j;class oM extends Pn{constructor(e=new Ln,t=new wg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)jo.fromBufferAttribute(t,r-1),Zo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=jo.distanceTo(Zo);e.setAttribute("lineDistance",new Ot(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),go.copy(i.boundingSphere),go.applyMatrix4(r),go.radius+=a,e.ray.intersectsSphere(go)===!1)return;If.copy(r).invert(),Za.copy(e.ray).applyMatrix4(If);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,s.start),g=Math.min(u.count,s.start+s.count);for(let v=f,m=g-1;v<m;v+=l){const p=u.getX(v),T=u.getX(v+1),w=vo(this,e,Za,c,p,T,v);w&&t.push(w)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(f),p=vo(this,e,Za,c,v,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,s.start),g=Math.min(h.count,s.start+s.count);for(let v=f,m=g-1;v<m;v+=l){const p=vo(this,e,Za,c,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=vo(this,e,Za,c,g-1,f,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function vo(n,e,t,i,r,a,s){const o=n.geometry.attributes.position;if(jo.fromBufferAttribute(o,r),Zo.fromBufferAttribute(o,a),t.distanceSqToSegment(jo,Zo,dc,Uf)>i)return;dc.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(dc);if(!(l<e.near||l>e.far))return{distance:l,point:Uf.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const kf=new j,Nf=new j;class lM extends oM{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)kf.fromBufferAttribute(t,r),Nf.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+kf.distanceTo(Nf);e.setAttribute("lineDistance",new Ot(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class GC extends Tn{constructor(e,t,i,r,a,s,o,c,l){super(e,t,i,r,a,s,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mg extends Tn{constructor(e,t,i=Gr,r,a,s,o=ei,c=ei,l,u=xs,d=1){if(u!==xs&&u!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,r,a,s,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Eg extends Ln{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const a=[],s=[],o=[],c=[],l=new j,u=new Le;s.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const f=i+d/t*r;l.x=e*Math.cos(f),l.y=e*Math.sin(f),s.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(s[h]/e+1)/2,u.y=(s[h+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)a.push(d,d+1,0);this.setIndex(a),this.setAttribute("position",new Ot(s,3)),this.setAttribute("normal",new Ot(o,3)),this.setAttribute("uv",new Ot(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eg(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class vi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),a=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const a=i.length;let s;t?s=t:s=e*i[a-1];let o=0,c=a-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=i[r]-s,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===s)return r/(a-1);const u=i[r],h=i[r+1]-u,f=(s-u)/h;return(r+f)/(a-1)}getTangent(e,t){let r=e-1e-4,a=e+1e-4;r<0&&(r=0),a>1&&(a=1);const s=this.getPoint(r),o=this.getPoint(a),c=t||(s.isVector2?new Le:new j);return c.copy(o).sub(s).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new j,r=[],a=[],s=[],o=new j,c=new Ht;for(let f=0;f<=e;f++){const g=f/e;r[f]=this.getTangentAt(g,new j)}a[0]=new j,s[0]=new j;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),h<=l&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],o),s[0].crossVectors(r[0],a[0]);for(let f=1;f<=e;f++){if(a[f]=a[f-1].clone(),s[f]=s[f-1].clone(),o.crossVectors(r[f-1],r[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(ft(r[f-1].dot(r[f]),-1,1));a[f].applyMatrix4(c.makeRotationAxis(o,g))}s[f].crossVectors(r[f],a[f])}if(t===!0){let f=Math.acos(ft(a[0].dot(a[e]),-1,1));f/=e,r[0].dot(o.crossVectors(a[0],a[e]))>0&&(f=-f);for(let g=1;g<=e;g++)a[g].applyMatrix4(c.makeRotationAxis(r[g],f*g)),s[g].crossVectors(r[g],a[g])}return{tangents:r,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class md extends vi{constructor(e=0,t=0,i=1,r=1,a=0,s=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Le){const i=t,r=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const s=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(s?a=0:a=r),this.aClockwise===!0&&!s&&(a===r?a=-r:a=a-r);const o=this.aStartAngle+e*a;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class cM extends md{constructor(e,t,i,r,a,s){super(e,t,i,i,r,a,s),this.isArcCurve=!0,this.type="ArcCurve"}}function gd(){let n=0,e=0,t=0,i=0;function r(a,s,o,c){n=a,e=o,t=-3*a+3*s-2*o-c,i=2*a-2*s+o+c}return{initCatmullRom:function(a,s,o,c,l){r(s,o,l*(o-a),l*(c-s))},initNonuniformCatmullRom:function(a,s,o,c,l,u,d){let h=(s-a)/l-(o-a)/(l+u)+(o-s)/u,f=(o-s)/u-(c-s)/(u+d)+(c-o)/d;h*=u,f*=u,r(s,o,h,f)},calc:function(a){const s=a*a,o=s*a;return n+e*a+t*s+i*o}}}const _o=new j,hc=new gd,fc=new gd,pc=new gd;class uM extends vi{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new j){const i=t,r=this.points,a=r.length,s=(a-(this.closed?0:1))*e;let o=Math.floor(s),c=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:c===0&&o===a-1&&(o=a-2,c=1);let l,u;this.closed||o>0?l=r[(o-1)%a]:(_o.subVectors(r[0],r[1]).add(r[0]),l=_o);const d=r[o%a],h=r[(o+1)%a];if(this.closed||o+2<a?u=r[(o+2)%a]:(_o.subVectors(r[a-1],r[a-2]).add(r[a-1]),u=_o),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),hc.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,g,v,m),fc.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,g,v,m),pc.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(hc.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),fc.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),pc.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return i.set(hc.calc(c),fc.calc(c),pc.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new j().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ff(n,e,t,i,r){const a=(i-e)*.5,s=(r-t)*.5,o=n*n,c=n*o;return(2*t-2*i+a+s)*c+(-3*t+3*i-2*a-s)*o+a*n+t}function dM(n,e){const t=1-n;return t*t*e}function hM(n,e){return 2*(1-n)*n*e}function fM(n,e){return n*n*e}function os(n,e,t,i){return dM(n,e)+hM(n,t)+fM(n,i)}function pM(n,e){const t=1-n;return t*t*t*e}function mM(n,e){const t=1-n;return 3*t*t*n*e}function gM(n,e){return 3*(1-n)*n*n*e}function vM(n,e){return n*n*n*e}function ls(n,e,t,i,r){return pM(n,e)+mM(n,t)+gM(n,i)+vM(n,r)}class Tg extends vi{constructor(e=new Le,t=new Le,i=new Le,r=new Le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Le){const i=t,r=this.v0,a=this.v1,s=this.v2,o=this.v3;return i.set(ls(e,r.x,a.x,s.x,o.x),ls(e,r.y,a.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class _M extends vi{constructor(e=new j,t=new j,i=new j,r=new j){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new j){const i=t,r=this.v0,a=this.v1,s=this.v2,o=this.v3;return i.set(ls(e,r.x,a.x,s.x,o.x),ls(e,r.y,a.y,s.y,o.y),ls(e,r.z,a.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ag extends vi{constructor(e=new Le,t=new Le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Le){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xM extends vi{constructor(e=new j,t=new j){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new j){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new j){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cg extends vi{constructor(e=new Le,t=new Le,i=new Le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Le){const i=t,r=this.v0,a=this.v1,s=this.v2;return i.set(os(e,r.x,a.x,s.x),os(e,r.y,a.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yM extends vi{constructor(e=new j,t=new j,i=new j){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new j){const i=t,r=this.v0,a=this.v1,s=this.v2;return i.set(os(e,r.x,a.x,s.x),os(e,r.y,a.y,s.y),os(e,r.z,a.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rg extends vi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Le){const i=t,r=this.points,a=(r.length-1)*e,s=Math.floor(a),o=a-s,c=r[s===0?s:s-1],l=r[s],u=r[s>r.length-2?r.length-1:s+1],d=r[s>r.length-3?r.length-1:s+2];return i.set(Ff(o,c.x,l.x,u.x,d.x),Ff(o,c.y,l.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Le().fromArray(r))}return this}}var wu=Object.freeze({__proto__:null,ArcCurve:cM,CatmullRomCurve3:uM,CubicBezierCurve:Tg,CubicBezierCurve3:_M,EllipseCurve:md,LineCurve:Ag,LineCurve3:xM,QuadraticBezierCurve:Cg,QuadraticBezierCurve3:yM,SplineCurve:Rg});class bM extends vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wu[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let a=0;for(;a<r.length;){if(r[a]>=i){const s=r[a]-i,o=this.curves[a],c=o.getLength(),l=c===0?0:1-s/c;return o.getPointAt(l,t)}a++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,a=this.curves;r<a.length;r++){const s=a[r],o=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,c=s.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new wu[r.type]().fromJSON(r))}return this}}class Mu extends bM{constructor(e){super(),this.type="Path",this.currentPoint=new Le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Ag(this.currentPoint.clone(),new Le(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const a=new Cg(this.currentPoint.clone(),new Le(e,t),new Le(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,a,s){const o=new Tg(this.currentPoint.clone(),new Le(e,t),new Le(i,r),new Le(a,s));return this.curves.push(o),this.currentPoint.set(a,s),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Rg(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,a,s){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,r,a,s),this}absarc(e,t,i,r,a,s){return this.absellipse(e,t,i,i,r,a,s),this}ellipse(e,t,i,r,a,s,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,r,a,s,o,c),this}absellipse(e,t,i,r,a,s,o,c){const l=new md(e,t,i,r,a,s,o,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class cs extends Mu{constructor(e){super(e),this.uuid=Xr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Mu().fromJSON(r))}return this}}function SM(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let a=Pg(n,0,r,t,!0);const s=[];if(!a||a.next===a.prev)return s;let o,c,l;if(i&&(a=AM(n,e,a,t)),n.length>80*t){o=1/0,c=1/0;let u=-1/0,d=-1/0;for(let h=t;h<r;h+=t){const f=n[h],g=n[h+1];f<o&&(o=f),g<c&&(c=g),f>u&&(u=f),g>d&&(d=g)}l=Math.max(u-o,d-c),l=l!==0?32767/l:0}return Ss(a,s,t,o,c,l,0),s}function Pg(n,e,t,i,r){let a;if(r===OM(n,e,t,i)>0)for(let s=e;s<t;s+=i)a=Of(s/i|0,n[s],n[s+1],a);else for(let s=t-i;s>=e;s-=i)a=Of(s/i|0,n[s],n[s+1],a);return a&&Ia(a,a.next)&&(Ms(a),a=a.next),a}function Wr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ia(t,t.next)||zt(t.prev,t,t.next)===0)){if(Ms(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ss(n,e,t,i,r,a,s){if(!n)return;!s&&a&&DM(n,i,r,a);let o=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(a?MM(n,i,r,a):wM(n)){e.push(c.i,n.i,l.i),Ms(n),n=l.next,o=l.next;continue}if(n=l,n===o){s?s===1?(n=EM(Wr(n),e),Ss(n,e,t,i,r,a,2)):s===2&&TM(n,e,t,i,r,a):Ss(Wr(n),e,t,i,r,a,1);break}}}function wM(n){const e=n.prev,t=n,i=n.next;if(zt(e,t,i)>=0)return!1;const r=e.x,a=t.x,s=i.x,o=e.y,c=t.y,l=i.y,u=Math.min(r,a,s),d=Math.min(o,c,l),h=Math.max(r,a,s),f=Math.max(o,c,l);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&Qa(r,o,a,c,s,l,g.x,g.y)&&zt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function MM(n,e,t,i){const r=n.prev,a=n,s=n.next;if(zt(r,a,s)>=0)return!1;const o=r.x,c=a.x,l=s.x,u=r.y,d=a.y,h=s.y,f=Math.min(o,c,l),g=Math.min(u,d,h),v=Math.max(o,c,l),m=Math.max(u,d,h),p=Eu(f,g,e,t,i),T=Eu(v,m,e,t,i);let w=n.prevZ,_=n.nextZ;for(;w&&w.z>=p&&_&&_.z<=T;){if(w.x>=f&&w.x<=v&&w.y>=g&&w.y<=m&&w!==r&&w!==s&&Qa(o,u,c,d,l,h,w.x,w.y)&&zt(w.prev,w,w.next)>=0||(w=w.prevZ,_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==r&&_!==s&&Qa(o,u,c,d,l,h,_.x,_.y)&&zt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;w&&w.z>=p;){if(w.x>=f&&w.x<=v&&w.y>=g&&w.y<=m&&w!==r&&w!==s&&Qa(o,u,c,d,l,h,w.x,w.y)&&zt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;_&&_.z<=T;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==r&&_!==s&&Qa(o,u,c,d,l,h,_.x,_.y)&&zt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function EM(n,e){let t=n;do{const i=t.prev,r=t.next.next;!Ia(i,r)&&Dg(i,t,t.next,r)&&ws(i,r)&&ws(r,i)&&(e.push(i.i,t.i,r.i),Ms(t),Ms(t.next),t=n=r),t=t.next}while(t!==n);return Wr(t)}function TM(n,e,t,i,r,a){let s=n;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&kM(s,o)){let c=Ig(s,o);s=Wr(s,s.next),c=Wr(c,c.next),Ss(s,e,t,i,r,a,0),Ss(c,e,t,i,r,a,0);return}o=o.next}s=s.next}while(s!==n)}function AM(n,e,t,i){const r=[];for(let a=0,s=e.length;a<s;a++){const o=e[a]*i,c=a<s-1?e[a+1]*i:n.length,l=Pg(n,o,c,i,!1);l===l.next&&(l.steiner=!0),r.push(UM(l))}r.sort(CM);for(let a=0;a<r.length;a++)t=RM(r[a],t);return t}function CM(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function RM(n,e){const t=PM(n,e);if(!t)return e;const i=Ig(t,n);return Wr(i,i.next),Wr(t,t.next)}function PM(n,e){let t=e;const i=n.x,r=n.y;let a=-1/0,s;if(Ia(n,t))return t;do{if(Ia(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>a&&(a=d,s=t.x<t.next.x?t:t.next,d===i))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,c=s.x,l=s.y;let u=1/0;t=s;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Lg(r<l?i:a,r,c,l,r<l?a:i,r,t.x,t.y)){const d=Math.abs(r-t.y)/(i-t.x);ws(t,n)&&(d<u||d===u&&(t.x>s.x||t.x===s.x&&LM(s,t)))&&(s=t,u=d)}t=t.next}while(t!==o);return s}function LM(n,e){return zt(n.prev,n,e.prev)<0&&zt(e.next,n,n.next)<0}function DM(n,e,t,i){let r=n;do r.z===0&&(r.z=Eu(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,IM(r)}function IM(n){let e,t=1;do{let i=n,r;n=null;let a=null;for(e=0;i;){e++;let s=i,o=0;for(let l=0;l<t&&(o++,s=s.nextZ,!!s);l++);let c=t;for(;o>0||c>0&&s;)o!==0&&(c===0||!s||i.z<=s.z)?(r=i,i=i.nextZ,o--):(r=s,s=s.nextZ,c--),a?a.nextZ=r:n=r,r.prevZ=a,a=r;i=s}a.nextZ=null,t*=2}while(e>1);return n}function Eu(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function UM(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Lg(n,e,t,i,r,a,s,o){return(r-s)*(e-o)>=(n-s)*(a-o)&&(n-s)*(i-o)>=(t-s)*(e-o)&&(t-s)*(a-o)>=(r-s)*(i-o)}function Qa(n,e,t,i,r,a,s,o){return!(n===s&&e===o)&&Lg(n,e,t,i,r,a,s,o)}function kM(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!NM(n,e)&&(ws(n,e)&&ws(e,n)&&FM(n,e)&&(zt(n.prev,n,e.prev)||zt(n,e.prev,e))||Ia(n,e)&&zt(n.prev,n,n.next)>0&&zt(e.prev,e,e.next)>0)}function zt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ia(n,e){return n.x===e.x&&n.y===e.y}function Dg(n,e,t,i){const r=yo(zt(n,e,t)),a=yo(zt(n,e,i)),s=yo(zt(t,i,n)),o=yo(zt(t,i,e));return!!(r!==a&&s!==o||r===0&&xo(n,t,e)||a===0&&xo(n,i,e)||s===0&&xo(t,n,i)||o===0&&xo(t,e,i))}function xo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function yo(n){return n>0?1:n<0?-1:0}function NM(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Dg(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ws(n,e){return zt(n.prev,n,n.next)<0?zt(n,e,n.next)>=0&&zt(n,n.prev,e)>=0:zt(n,e,n.prev)<0||zt(n,n.next,e)<0}function FM(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,a=(n.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&r<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Ig(n,e){const t=Tu(n.i,n.x,n.y),i=Tu(e.i,e.x,e.y),r=n.next,a=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,a.next=i,i.prev=a,i}function Of(n,e,t,i){const r=Tu(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Ms(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Tu(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function OM(n,e,t,i){let r=0;for(let a=e,s=t-i;a<t;a+=i)r+=(n[s]-n[a])*(n[a+1]+n[s+1]),s=a;return r}class BM{static triangulate(e,t,i=2){return SM(e,t,i)}}class fi{static area(e){const t=e.length;let i=0;for(let r=t-1,a=0;a<t;r=a++)i+=e[r].x*e[a].y-e[a].x*e[r].y;return i*.5}static isClockWise(e){return fi.area(e)<0}static triangulateShape(e,t){const i=[],r=[],a=[];Bf(e),zf(i,e);let s=e.length;t.forEach(Bf);for(let c=0;c<t.length;c++)r.push(s),s+=t[c].length,zf(i,t[c]);const o=BM.triangulate(i,r);for(let c=0;c<o.length;c+=3)a.push(o.slice(c,c+3));return a}}function Bf(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function zf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Ug extends Ln{constructor(e=new cs([new Le(.5,.5),new Le(-.5,.5),new Le(-.5,-.5),new Le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];s(l)}this.setAttribute("position",new Ot(r,3)),this.setAttribute("uv",new Ot(a,2)),this.computeVertexNormals();function s(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:zM;let w,_=!1,A,D,R,I;p&&(w=p.getSpacedPoints(u),_=!0,h=!1,A=p.computeFrenetFrames(u,!1),D=new j,R=new j,I=new j),h||(m=0,f=0,g=0,v=0);const S=o.extractPoints(l);let b=S.shape;const P=S.holes;if(!fi.isClockWise(b)){b=b.reverse();for(let C=0,U=P.length;C<U;C++){const z=P[C];fi.isClockWise(z)&&(P[C]=z.reverse())}}function V(C){const z=10000000000000001e-36;let N=C[0];for(let $=1;$<=C.length;$++){const Y=$%C.length,K=C[Y],ce=K.x-N.x,se=K.y-N.y,M=ce*ce+se*se,x=Math.max(Math.abs(K.x),Math.abs(K.y),Math.abs(N.x),Math.abs(N.y)),k=z*x*x;if(M<=k){C.splice(Y,1),$--;continue}N=K}}V(b),P.forEach(V);const H=P.length,Z=b;for(let C=0;C<H;C++){const U=P[C];b=b.concat(U)}function W(C,U,z){return U||console.error("THREE.ExtrudeGeometry: vec does not exist"),C.clone().addScaledVector(U,z)}const oe=b.length;function Q(C,U,z){let N,$,Y;const K=C.x-U.x,ce=C.y-U.y,se=z.x-C.x,M=z.y-C.y,x=K*K+ce*ce,k=K*M-ce*se;if(Math.abs(k)>Number.EPSILON){const X=Math.sqrt(x),re=Math.sqrt(se*se+M*M),ee=U.x-ce/X,xe=U.y+K/X,pe=z.x-M/re,Re=z.y+se/re,De=((pe-ee)*M-(Re-xe)*se)/(K*M-ce*se);N=ee+K*De-C.x,$=xe+ce*De-C.y;const me=N*N+$*$;if(me<=2)return new Le(N,$);Y=Math.sqrt(me/2)}else{let X=!1;K>Number.EPSILON?se>Number.EPSILON&&(X=!0):K<-Number.EPSILON?se<-Number.EPSILON&&(X=!0):Math.sign(ce)===Math.sign(M)&&(X=!0),X?(N=-ce,$=K,Y=Math.sqrt(x)):(N=K,$=ce,Y=Math.sqrt(x/2))}return new Le(N/Y,$/Y)}const ve=[];for(let C=0,U=Z.length,z=U-1,N=C+1;C<U;C++,z++,N++)z===U&&(z=0),N===U&&(N=0),ve[C]=Q(Z[C],Z[z],Z[N]);const we=[];let Ce,ze=ve.concat();for(let C=0,U=H;C<U;C++){const z=P[C];Ce=[];for(let N=0,$=z.length,Y=$-1,K=N+1;N<$;N++,Y++,K++)Y===$&&(Y=0),K===$&&(K=0),Ce[N]=Q(z[N],z[Y],z[K]);we.push(Ce),ze=ze.concat(Ce)}let et;if(m===0)et=fi.triangulateShape(Z,P);else{const C=[],U=[];for(let z=0;z<m;z++){const N=z/m,$=f*Math.cos(N*Math.PI/2),Y=g*Math.sin(N*Math.PI/2)+v;for(let K=0,ce=Z.length;K<ce;K++){const se=W(Z[K],ve[K],Y);Oe(se.x,se.y,-$),N===0&&C.push(se)}for(let K=0,ce=H;K<ce;K++){const se=P[K];Ce=we[K];const M=[];for(let x=0,k=se.length;x<k;x++){const X=W(se[x],Ce[x],Y);Oe(X.x,X.y,-$),N===0&&M.push(X)}N===0&&U.push(M)}}et=fi.triangulateShape(C,U)}const Je=et.length,le=g+v;for(let C=0;C<oe;C++){const U=h?W(b[C],ze[C],le):b[C];_?(R.copy(A.normals[0]).multiplyScalar(U.x),D.copy(A.binormals[0]).multiplyScalar(U.y),I.copy(w[0]).add(R).add(D),Oe(I.x,I.y,I.z)):Oe(U.x,U.y,0)}for(let C=1;C<=u;C++)for(let U=0;U<oe;U++){const z=h?W(b[U],ze[U],le):b[U];_?(R.copy(A.normals[C]).multiplyScalar(z.x),D.copy(A.binormals[C]).multiplyScalar(z.y),I.copy(w[C]).add(R).add(D),Oe(I.x,I.y,I.z)):Oe(z.x,z.y,d/u*C)}for(let C=m-1;C>=0;C--){const U=C/m,z=f*Math.cos(U*Math.PI/2),N=g*Math.sin(U*Math.PI/2)+v;for(let $=0,Y=Z.length;$<Y;$++){const K=W(Z[$],ve[$],N);Oe(K.x,K.y,d+z)}for(let $=0,Y=P.length;$<Y;$++){const K=P[$];Ce=we[$];for(let ce=0,se=K.length;ce<se;ce++){const M=W(K[ce],Ce[ce],N);_?Oe(M.x,M.y+w[u-1].y,w[u-1].x+z):Oe(M.x,M.y,d+z)}}}Me(),_e();function Me(){const C=r.length/3;if(h){let U=0,z=oe*U;for(let N=0;N<Je;N++){const $=et[N];We($[2]+z,$[1]+z,$[0]+z)}U=u+m*2,z=oe*U;for(let N=0;N<Je;N++){const $=et[N];We($[0]+z,$[1]+z,$[2]+z)}}else{for(let U=0;U<Je;U++){const z=et[U];We(z[2],z[1],z[0])}for(let U=0;U<Je;U++){const z=et[U];We(z[0]+oe*u,z[1]+oe*u,z[2]+oe*u)}}i.addGroup(C,r.length/3-C,0)}function _e(){const C=r.length/3;let U=0;Ne(Z,U),U+=Z.length;for(let z=0,N=P.length;z<N;z++){const $=P[z];Ne($,U),U+=$.length}i.addGroup(C,r.length/3-C,1)}function Ne(C,U){let z=C.length;for(;--z>=0;){const N=z;let $=z-1;$<0&&($=C.length-1);for(let Y=0,K=u+m*2;Y<K;Y++){const ce=oe*Y,se=oe*(Y+1),M=U+N+ce,x=U+$+ce,k=U+$+se,X=U+N+se;St(M,x,k,X)}}}function Oe(C,U,z){c.push(C),c.push(U),c.push(z)}function We(C,U,z){Qe(C),Qe(U),Qe(z);const N=r.length/3,$=T.generateTopUV(i,r,N-3,N-2,N-1);y($[0]),y($[1]),y($[2])}function St(C,U,z,N){Qe(C),Qe(U),Qe(N),Qe(U),Qe(z),Qe(N);const $=r.length/3,Y=T.generateSideWallUV(i,r,$-6,$-3,$-2,$-1);y(Y[0]),y(Y[1]),y(Y[3]),y(Y[1]),y(Y[2]),y(Y[3])}function Qe(C){r.push(c[C*3+0]),r.push(c[C*3+1]),r.push(c[C*3+2])}function y(C){a.push(C.x),a.push(C.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return VM(t,i,e)}static fromJSON(e,t){const i=[];for(let a=0,s=e.shapes.length;a<s;a++){const o=t[e.shapes[a]];i.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new wu[r.type]().fromJSON(r)),new Ug(i,e.options)}}const zM={generateTopUV:function(n,e,t,i,r){const a=e[t*3],s=e[t*3+1],o=e[i*3],c=e[i*3+1],l=e[r*3],u=e[r*3+1];return[new Le(a,s),new Le(o,c),new Le(l,u)]},generateSideWallUV:function(n,e,t,i,r,a){const s=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],d=e[i*3+2],h=e[r*3],f=e[r*3+1],g=e[r*3+2],v=e[a*3],m=e[a*3+1],p=e[a*3+2];return Math.abs(o-u)<Math.abs(s-l)?[new Le(s,1-c),new Le(l,1-d),new Le(h,1-g),new Le(v,1-p)]:[new Le(o,1-c),new Le(u,1-d),new Le(f,1-g),new Le(m,1-p)]}};function VM(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const a=n[i];t.shapes.push(a.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class fl extends Ln{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,d=e/o,h=t/c,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const T=p*h-s;for(let w=0;w<l;w++){const _=w*d-a;g.push(_,-T,0),v.push(0,0,1),m.push(w/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<o;T++){const w=T+l*p,_=T+l*(p+1),A=T+1+l*(p+1),D=T+1+l*p;f.push(w,_,D),f.push(_,A,D)}this.setIndex(f),this.setAttribute("position",new Ot(g,3)),this.setAttribute("normal",new Ot(v,3)),this.setAttribute("uv",new Ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.width,e.height,e.widthSegments,e.heightSegments)}}class kg extends Ln{constructor(e=new cs([new Le(0,.5),new Le(-.5,-.5),new Le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],a=[],s=[];let o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(i),this.setAttribute("position",new Ot(r,3)),this.setAttribute("normal",new Ot(a,3)),this.setAttribute("uv",new Ot(s,2));function l(u){const d=r.length/3,h=u.extractPoints(t);let f=h.shape;const g=h.holes;fi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const T=g[m];fi.isClockWise(T)===!0&&(g[m]=T.reverse())}const v=fi.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const T=g[m];f=f.concat(T)}for(let m=0,p=f.length;m<p;m++){const T=f[m];r.push(T.x,T.y,0),a.push(0,0,1),s.push(T.x,T.y)}for(let m=0,p=v.length;m<p;m++){const T=v[m],w=T[0]+d,_=T[1]+d,A=T[2]+d;i.push(w,_,A),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return HM(t,e)}static fromJSON(e,t){const i=[];for(let r=0,a=e.shapes.length;r<a;r++){const s=t[e.shapes[r]];i.push(s)}return new kg(i,e.curveSegments)}}function HM(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class Ng extends Ln{constructor(e=1,t=32,i=16,r=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(s+o,Math.PI);let l=0;const u=[],d=new j,h=new j,f=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const T=[],w=p/i;let _=0;p===0&&s===0?_=.5/t:p===i&&c===Math.PI&&(_=-.5/t);for(let A=0;A<=t;A++){const D=A/t;d.x=-e*Math.cos(r+D*a)*Math.sin(s+w*o),d.y=e*Math.cos(s+w*o),d.z=e*Math.sin(r+D*a)*Math.sin(s+w*o),g.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),m.push(D+_,1-w),T.push(l++)}u.push(T)}for(let p=0;p<i;p++)for(let T=0;T<t;T++){const w=u[p][T+1],_=u[p][T],A=u[p+1][T],D=u[p+1][T+1];(p!==0||s>0)&&f.push(w,_,D),(p!==i-1||c<Math.PI)&&f.push(_,A,D)}this.setIndex(f),this.setAttribute("position",new Ot(g,3)),this.setAttribute("normal",new Ot(v,3)),this.setAttribute("uv",new Ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ng(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class WC extends ni{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class GM extends qr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ud,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class XC extends GM{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class qC extends qr{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ud,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class WM extends qr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ow,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class XM extends qr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Vf={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class qM{constructor(e,t,i){const r=this;let a=!1,s=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){o++,a===!1&&r.onStart!==void 0&&r.onStart(u,s,o),a=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,o),s===o&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){const f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const $M=new qM;class Fg{constructor(e){this.manager=e!==void 0?e:$M,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Fg.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ai={};class YM extends Error{constructor(e,t){super(e),this.response=t}}class $C extends Fg{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=Vf.get(`file:${e}`);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Ai[e]!==void 0){Ai[e].push({onLoad:t,onProgress:i,onError:r});return}Ai[e]=[],Ai[e].push({onLoad:t,onProgress:i,onError:r});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(s).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Ai[e],d=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=h?parseInt(h):0,g=f!==0;let v=0;const m=new ReadableStream({start(p){T();function T(){d.read().then(({done:w,value:_})=>{if(w)p.close();else{v+=_.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let D=0,R=u.length;D<R;D++){const I=u[D];I.onProgress&&I.onProgress(A)}p.enqueue(_),T()}},w=>{p.error(w)})}}});return new Response(m)}else throw new YM(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Vf.add(`file:${e}`,l);const u=Ai[e];delete Ai[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=Ai[e];if(u===void 0)throw this.manager.itemError(e),l;delete Ai[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Og extends yg{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,s=a+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class jM extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ZM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Hf=new Ht;class YC{constructor(e,t,i=0,r=1/0){this.ray=new fd(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new pd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Hf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hf),this}intersectObject(e,t=!0,i=[]){return Au(e,this,i,t),i.sort(Gf),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)Au(e[r],this,i,t);return i.sort(Gf),i}}function Gf(n,e){return n.distance-e.distance}function Au(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const a=n.children;for(let s=0,o=a.length;s<o;s++)Au(a[s],e,t,!0)}}class jC extends lM{constructor(e=10,t=16,i=8,r=64,a=4473924,s=8947848){a=new pt(a),s=new pt(s);const o=[],c=[];if(t>1)for(let d=0;d<t;d++){const h=d/t*(Math.PI*2),f=Math.sin(h)*e,g=Math.cos(h)*e;o.push(0,0,0),o.push(f,0,g);const v=d&1?a:s;c.push(v.r,v.g,v.b),c.push(v.r,v.g,v.b)}for(let d=0;d<i;d++){const h=d&1?a:s,f=e-e/i*d;for(let g=0;g<r;g++){let v=g/r*(Math.PI*2),m=Math.sin(v)*f,p=Math.cos(v)*f;o.push(m,0,p),c.push(h.r,h.g,h.b),v=(g+1)/r*(Math.PI*2),m=Math.sin(v)*f,p=Math.cos(v)*f,o.push(m,0,p),c.push(h.r,h.g,h.b)}}const l=new Ln;l.setAttribute("position",new Ot(o,3)),l.setAttribute("color",new Ot(c,3));const u=new wg({vertexColors:!0,toneMapped:!1});super(l,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class ZC{constructor(){this.type="ShapePath",this.color=new pt,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Mu,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,a,s){return this.currentPath.bezierCurveTo(e,t,i,r,a,s),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const T=[];for(let w=0,_=p.length;w<_;w++){const A=p[w],D=new cs;D.curves=A.curves,T.push(D)}return T}function i(p,T){const w=T.length;let _=!1;for(let A=w-1,D=0;D<w;A=D++){let R=T[A],I=T[D],S=I.x-R.x,b=I.y-R.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(R=T[D],S=-S,I=T[A],b=-b),p.y<R.y||p.y>I.y)continue;if(p.y===R.y){if(p.x===R.x)return!0}else{const P=b*(p.x-R.x)-S*(p.y-R.y);if(P===0)return!0;if(P<0)continue;_=!_}}else{if(p.y!==R.y)continue;if(I.x<=p.x&&p.x<=R.x||R.x<=p.x&&p.x<=I.x)return!0}}return _}const r=fi.isClockWise,a=this.subPaths;if(a.length===0)return[];let s,o,c;const l=[];if(a.length===1)return o=a[0],c=new cs,c.curves=o.curves,l.push(c),l;let u=!r(a[0].getPoints());u=e?!u:u;const d=[],h=[];let f=[],g=0,v;h[g]=void 0,f[g]=[];for(let p=0,T=a.length;p<T;p++)o=a[p],v=o.getPoints(),s=r(v),s=e?!s:s,s?(!u&&h[g]&&g++,h[g]={s:new cs,p:v},h[g].s.curves=o.curves,u&&g++,f[g]=[]):f[g].push({h:o,p:v[0]});if(!h[0])return t(a);if(h.length>1){let p=!1,T=0;for(let w=0,_=h.length;w<_;w++)d[w]=[];for(let w=0,_=h.length;w<_;w++){const A=f[w];for(let D=0;D<A.length;D++){const R=A[D];let I=!0;for(let S=0;S<h.length;S++)i(R.p,h[S].p)&&(w!==S&&T++,I?(I=!1,d[S].push(R)):p=!0);I&&d[w].push(R)}}T>0&&p===!1&&(f=d)}let m;for(let p=0,T=h.length;p<T;p++){c=h[p].s,l.push(c),m=f[p];for(let w=0,_=m.length;w<_;w++)c.holes.push(m[w].h)}return l}}function Wf(n,e,t,i){const r=KM(i);switch(t){case sg:return n*e;case lg:return n*e/r.components*r.byteLength;case od:return n*e/r.components*r.byteLength;case cg:return n*e*2/r.components*r.byteLength;case ld:return n*e*2/r.components*r.byteLength;case og:return n*e*3/r.components*r.byteLength;case Zn:return n*e*4/r.components*r.byteLength;case cd:return n*e*4/r.components*r.byteLength;case Lo:case Do:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Io:case Uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jc:case eu:return Math.max(n,16)*Math.max(e,8)/4;case Kc:case Qc:return Math.max(n,8)*Math.max(e,8)/2;case tu:case nu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case iu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ru:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case au:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case su:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ou:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case lu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case cu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case uu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case du:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case hu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case fu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case pu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case mu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case gu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case vu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ko:case _u:case xu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ug:case yu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case bu:case Su:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function KM(n){switch(n){case zi:case ig:return{byteLength:1,components:1};case vs:case rg:case ka:return{byteLength:2,components:1};case ad:case sd:return{byteLength:2,components:4};case Gr:case rd:case ki:return{byteLength:4,components:1};case ag:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:id}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=id);function Bg(){let n=null,e=!1,t=null,i=null;function r(a,s){t(a,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function JM(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,o),d.length===0)n.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,d[h]=v)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:a,update:s}}var QM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_E=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,SE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ME=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,EE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,TE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,AE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RE="gl_FragColor = linearToOutputTexel( gl_FragColor );",PE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,DE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,IE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,UE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,NE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,VE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,HE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,XE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$E=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,KE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,JE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,QE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_T=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ST=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,MT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ET=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,AT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,CT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,UT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,kT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,NT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,FT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,OT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,HT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$T=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,YT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ZT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,KT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const JT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,a2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,s2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,o2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,l2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,d2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,h2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,f2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,v2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,x2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,y2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,w2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,A2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,C2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,P2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,L2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:QM,alphahash_pars_fragment:eE,alphamap_fragment:tE,alphamap_pars_fragment:nE,alphatest_fragment:iE,alphatest_pars_fragment:rE,aomap_fragment:aE,aomap_pars_fragment:sE,batching_pars_vertex:oE,batching_vertex:lE,begin_vertex:cE,beginnormal_vertex:uE,bsdfs:dE,iridescence_fragment:hE,bumpmap_pars_fragment:fE,clipping_planes_fragment:pE,clipping_planes_pars_fragment:mE,clipping_planes_pars_vertex:gE,clipping_planes_vertex:vE,color_fragment:_E,color_pars_fragment:xE,color_pars_vertex:yE,color_vertex:bE,common:SE,cube_uv_reflection_fragment:wE,defaultnormal_vertex:ME,displacementmap_pars_vertex:EE,displacementmap_vertex:TE,emissivemap_fragment:AE,emissivemap_pars_fragment:CE,colorspace_fragment:RE,colorspace_pars_fragment:PE,envmap_fragment:LE,envmap_common_pars_fragment:DE,envmap_pars_fragment:IE,envmap_pars_vertex:UE,envmap_physical_pars_fragment:XE,envmap_vertex:kE,fog_vertex:NE,fog_pars_vertex:FE,fog_fragment:OE,fog_pars_fragment:BE,gradientmap_pars_fragment:zE,lightmap_pars_fragment:VE,lights_lambert_fragment:HE,lights_lambert_pars_fragment:GE,lights_pars_begin:WE,lights_toon_fragment:qE,lights_toon_pars_fragment:$E,lights_phong_fragment:YE,lights_phong_pars_fragment:jE,lights_physical_fragment:ZE,lights_physical_pars_fragment:KE,lights_fragment_begin:JE,lights_fragment_maps:QE,lights_fragment_end:eT,logdepthbuf_fragment:tT,logdepthbuf_pars_fragment:nT,logdepthbuf_pars_vertex:iT,logdepthbuf_vertex:rT,map_fragment:aT,map_pars_fragment:sT,map_particle_fragment:oT,map_particle_pars_fragment:lT,metalnessmap_fragment:cT,metalnessmap_pars_fragment:uT,morphinstance_vertex:dT,morphcolor_vertex:hT,morphnormal_vertex:fT,morphtarget_pars_vertex:pT,morphtarget_vertex:mT,normal_fragment_begin:gT,normal_fragment_maps:vT,normal_pars_fragment:_T,normal_pars_vertex:xT,normal_vertex:yT,normalmap_pars_fragment:bT,clearcoat_normal_fragment_begin:ST,clearcoat_normal_fragment_maps:wT,clearcoat_pars_fragment:MT,iridescence_pars_fragment:ET,opaque_fragment:TT,packing:AT,premultiplied_alpha_fragment:CT,project_vertex:RT,dithering_fragment:PT,dithering_pars_fragment:LT,roughnessmap_fragment:DT,roughnessmap_pars_fragment:IT,shadowmap_pars_fragment:UT,shadowmap_pars_vertex:kT,shadowmap_vertex:NT,shadowmask_pars_fragment:FT,skinbase_vertex:OT,skinning_pars_vertex:BT,skinning_vertex:zT,skinnormal_vertex:VT,specularmap_fragment:HT,specularmap_pars_fragment:GT,tonemapping_fragment:WT,tonemapping_pars_fragment:XT,transmission_fragment:qT,transmission_pars_fragment:$T,uv_pars_fragment:YT,uv_pars_vertex:jT,uv_vertex:ZT,worldpos_vertex:KT,background_vert:JT,background_frag:QT,backgroundCube_vert:e2,backgroundCube_frag:t2,cube_vert:n2,cube_frag:i2,depth_vert:r2,depth_frag:a2,distanceRGBA_vert:s2,distanceRGBA_frag:o2,equirect_vert:l2,equirect_frag:c2,linedashed_vert:u2,linedashed_frag:d2,meshbasic_vert:h2,meshbasic_frag:f2,meshlambert_vert:p2,meshlambert_frag:m2,meshmatcap_vert:g2,meshmatcap_frag:v2,meshnormal_vert:_2,meshnormal_frag:x2,meshphong_vert:y2,meshphong_frag:b2,meshphysical_vert:S2,meshphysical_frag:w2,meshtoon_vert:M2,meshtoon_frag:E2,points_vert:T2,points_frag:A2,shadow_vert:C2,shadow_frag:R2,sprite_vert:P2,sprite_frag:L2},Ie={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},ci={basic:{uniforms:wn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:wn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new pt(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:wn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:wn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:wn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new pt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:wn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:wn([Ie.points,Ie.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:wn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:wn([Ie.common,Ie.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:wn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:wn([Ie.sprite,Ie.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:wn([Ie.common,Ie.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:wn([Ie.lights,Ie.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};ci.physical={uniforms:wn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const bo={r:0,b:0,g:0},Ar=new gi,D2=new Ht;function I2(n,e,t,i,r,a,s){const o=new pt(0);let c=a===!0?0:1,l,u,d=null,h=0,f=null;function g(w){let _=w.isScene===!0?w.background:null;return _&&_.isTexture&&(_=(w.backgroundBlurriness>0?t:e).get(_)),_}function v(w){let _=!1;const A=g(w);A===null?p(o,c):A&&A.isColor&&(p(A,1),_=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,s):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,_){const A=g(_);A&&(A.isCubeTexture||A.mapping===dl)?(u===void 0&&(u=new hi(new Is(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:Da(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ar.copy(_.backgroundRotation),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(D2.makeRotationFromEuler(Ar)),u.material.toneMapped=xt.getTransfer(A.colorSpace)!==Pt,(d!==A||h!==A.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=A,h=A.version,f=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new hi(new fl(2,2),new ni({name:"BackgroundMaterial",uniforms:Da(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=xt.getTransfer(A.colorSpace)!==Pt,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||h!==A.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=A,h=A.version,f=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,_){w.getRGB(bo,_g(n)),i.buffers.color.setClear(bo.r,bo.g,bo.b,_,s)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,_=1){o.set(w),c=_,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,p(o,c)},render:v,addToRenderList:m,dispose:T}}function U2(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let a=r,s=!1;function o(b,P,O,V,H){let Z=!1;const W=d(V,O,P);a!==W&&(a=W,l(a.object)),Z=f(b,V,O,H),Z&&g(b,V,O,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(Z||s)&&(s=!1,_(b,P,O,V),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return n.createVertexArray()}function l(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function d(b,P,O){const V=O.wireframe===!0;let H=i[b.id];H===void 0&&(H={},i[b.id]=H);let Z=H[P.id];Z===void 0&&(Z={},H[P.id]=Z);let W=Z[V];return W===void 0&&(W=h(c()),Z[V]=W),W}function h(b){const P=[],O=[],V=[];for(let H=0;H<t;H++)P[H]=0,O[H]=0,V[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:V,object:b,attributes:{},index:null}}function f(b,P,O,V){const H=a.attributes,Z=P.attributes;let W=0;const oe=O.getAttributes();for(const Q in oe)if(oe[Q].location>=0){const we=H[Q];let Ce=Z[Q];if(Ce===void 0&&(Q==="instanceMatrix"&&b.instanceMatrix&&(Ce=b.instanceMatrix),Q==="instanceColor"&&b.instanceColor&&(Ce=b.instanceColor)),we===void 0||we.attribute!==Ce||Ce&&we.data!==Ce.data)return!0;W++}return a.attributesNum!==W||a.index!==V}function g(b,P,O,V){const H={},Z=P.attributes;let W=0;const oe=O.getAttributes();for(const Q in oe)if(oe[Q].location>=0){let we=Z[Q];we===void 0&&(Q==="instanceMatrix"&&b.instanceMatrix&&(we=b.instanceMatrix),Q==="instanceColor"&&b.instanceColor&&(we=b.instanceColor));const Ce={};Ce.attribute=we,we&&we.data&&(Ce.data=we.data),H[Q]=Ce,W++}a.attributes=H,a.attributesNum=W,a.index=V}function v(){const b=a.newAttributes;for(let P=0,O=b.length;P<O;P++)b[P]=0}function m(b){p(b,0)}function p(b,P){const O=a.newAttributes,V=a.enabledAttributes,H=a.attributeDivisors;O[b]=1,V[b]===0&&(n.enableVertexAttribArray(b),V[b]=1),H[b]!==P&&(n.vertexAttribDivisor(b,P),H[b]=P)}function T(){const b=a.newAttributes,P=a.enabledAttributes;for(let O=0,V=P.length;O<V;O++)P[O]!==b[O]&&(n.disableVertexAttribArray(O),P[O]=0)}function w(b,P,O,V,H,Z,W){W===!0?n.vertexAttribIPointer(b,P,O,H,Z):n.vertexAttribPointer(b,P,O,V,H,Z)}function _(b,P,O,V){v();const H=V.attributes,Z=O.getAttributes(),W=P.defaultAttributeValues;for(const oe in Z){const Q=Z[oe];if(Q.location>=0){let ve=H[oe];if(ve===void 0&&(oe==="instanceMatrix"&&b.instanceMatrix&&(ve=b.instanceMatrix),oe==="instanceColor"&&b.instanceColor&&(ve=b.instanceColor)),ve!==void 0){const we=ve.normalized,Ce=ve.itemSize,ze=e.get(ve);if(ze===void 0)continue;const et=ze.buffer,Je=ze.type,le=ze.bytesPerElement,Me=Je===n.INT||Je===n.UNSIGNED_INT||ve.gpuType===rd;if(ve.isInterleavedBufferAttribute){const _e=ve.data,Ne=_e.stride,Oe=ve.offset;if(_e.isInstancedInterleavedBuffer){for(let We=0;We<Q.locationSize;We++)p(Q.location+We,_e.meshPerAttribute);b.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let We=0;We<Q.locationSize;We++)m(Q.location+We);n.bindBuffer(n.ARRAY_BUFFER,et);for(let We=0;We<Q.locationSize;We++)w(Q.location+We,Ce/Q.locationSize,Je,we,Ne*le,(Oe+Ce/Q.locationSize*We)*le,Me)}else{if(ve.isInstancedBufferAttribute){for(let _e=0;_e<Q.locationSize;_e++)p(Q.location+_e,ve.meshPerAttribute);b.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let _e=0;_e<Q.locationSize;_e++)m(Q.location+_e);n.bindBuffer(n.ARRAY_BUFFER,et);for(let _e=0;_e<Q.locationSize;_e++)w(Q.location+_e,Ce/Q.locationSize,Je,we,Ce*le,Ce/Q.locationSize*_e*le,Me)}}else if(W!==void 0){const we=W[oe];if(we!==void 0)switch(we.length){case 2:n.vertexAttrib2fv(Q.location,we);break;case 3:n.vertexAttrib3fv(Q.location,we);break;case 4:n.vertexAttrib4fv(Q.location,we);break;default:n.vertexAttrib1fv(Q.location,we)}}}}T()}function A(){I();for(const b in i){const P=i[b];for(const O in P){const V=P[O];for(const H in V)u(V[H].object),delete V[H];delete P[O]}delete i[b]}}function D(b){if(i[b.id]===void 0)return;const P=i[b.id];for(const O in P){const V=P[O];for(const H in V)u(V[H].object),delete V[H];delete P[O]}delete i[b.id]}function R(b){for(const P in i){const O=i[P];if(O[b.id]===void 0)continue;const V=O[b.id];for(const H in V)u(V[H].object),delete V[H];delete O[b.id]}}function I(){S(),s=!0,a!==r&&(a=r,l(a.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:I,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:D,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function k2(n,e,t){let i;function r(l){i=l}function a(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function s(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function o(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];t.update(f,i,1)}function c(l,u,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)s(l[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,h,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*h[v];t.update(g,i,1)}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function N2(n,e,t,i){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(R){return!(R!==Zn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const I=R===ka&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==zi&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ki&&!I)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:_,vertexTextures:A,maxSamples:D}}function F2(n){const e=this;let t=null,i=0,r=!1,a=!1;const s=new Pr,o=new ct,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||r;return r=h,i=d.length,f},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||a&&!m)a?u(null):l();else{const T=a?0:i,w=T*4;let _=p.clippingState||null;c.value=_,_=u(g,h,w,f);for(let A=0;A!==w;++A)_[A]=t[A];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,_=f;w!==v;++w,_+=4)s.copy(d[w]).applyMatrix4(T,o),s.normal.toArray(m,_),m[_+3]=s.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function O2(n){let e=new WeakMap;function t(s,o){return o===$c?s.mapping=Ra:o===Yc&&(s.mapping=Pa),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===$c||o===Yc)if(e.has(s)){const c=e.get(s).texture;return t(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const l=new nM(c.height);return l.fromEquirectangularTexture(n,s),e.set(s,l),s.addEventListener("dispose",r),t(l.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const va=4,Xf=[.125,.215,.35,.446,.526,.582],Ur=20,mc=new Og,qf=new pt;let gc=null,vc=0,_c=0,xc=!1;const Lr=(1+Math.sqrt(5))/2,ha=1/Lr,$f=[new j(-Lr,ha,0),new j(Lr,ha,0),new j(-ha,0,Lr),new j(ha,0,Lr),new j(0,Lr,-ha),new j(0,Lr,ha),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)],B2=new j;class Yf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,a={}){const{size:s=256,position:o=B2}=a;gc=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gc,vc,_c),this._renderer.xr.enabled=xc,e.scissorTest=!1,So(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ra||e.mapping===Pa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gc=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ui,minFilter:ui,generateMipmaps:!1,type:ka,format:Zn,colorSpace:La,depthBuffer:!1},r=jf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jf(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=z2(a)),this._blurMaterial=V2(a,e,t)}return r}_compileMaterial(e){const t=new hi(this._lodPlanes[0],e);this._renderer.compile(t,mc)}_sceneToCubeUV(e,t,i,r,a){const c=new $n(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(qf),d.toneMapping=or,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const v=new mg({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),m=new hi(new Is,v);let p=!1;const T=e.background;T?T.isColor&&(v.color.copy(T),e.background=null,p=!0):(v.color.copy(qf),p=!0);for(let w=0;w<6;w++){const _=w%3;_===0?(c.up.set(0,l[w],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x+u[w],a.y,a.z)):_===1?(c.up.set(0,0,l[w]),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y+u[w],a.z)):(c.up.set(0,l[w],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y,a.z+u[w]));const A=this._cubeSize;So(r,_*A,w>2?A:0,A,A),d.setRenderTarget(r),p&&d.render(m,c),d.render(e,c)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ra||e.mapping===Pa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zf());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new hi(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;So(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(s,mc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=$f[(r-a-1)%$f.length];this._blur(e,a-1,a,s,o)}t.autoClear=i}_blur(e,t,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,s,o){const c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new hi(this._lodPlanes[r],l),h=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*Ur-1),v=a/g,m=isFinite(a)?1+Math.floor(u*v):Ur;m>Ur&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ur}`);const p=[];let T=0;for(let R=0;R<Ur;++R){const I=R/v,S=Math.exp(-I*I/2);p.push(S),R===0?T+=S:R<m&&(T+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/T;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:w}=this;h.dTheta.value=g,h.mipInt.value=w-i;const _=this._sizeLods[r],A=3*_*(r>w-va?r-w+va:0),D=4*(this._cubeSize-_);So(t,A,D,3*_,2*_),c.setRenderTarget(t),c.render(d,mc)}}function z2(n){const e=[],t=[],i=[];let r=n;const a=n-va+1+Xf.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let c=1/o;s>n-va?c=Xf[s-n+va-1]:s===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,v=3,m=2,p=1,T=new Float32Array(v*g*f),w=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let D=0;D<f;D++){const R=D%3*2/3-1,I=D>2?0:-1,S=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];T.set(S,v*g*D),w.set(h,m*g*D);const b=[D,D,D,D,D,D];_.set(b,p*g*D)}const A=new Ln;A.setAttribute("position",new mi(T,v)),A.setAttribute("uv",new mi(w,m)),A.setAttribute("faceIndex",new mi(_,p)),e.push(A),r>va&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function jf(n,e,t){const i=new dr(n,e,t);return i.texture.mapping=dl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function So(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function V2(n,e,t){const i=new Float32Array(Ur),r=new j(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Zf(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Kf(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function vd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function H2(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===$c||c===Yc,u=c===Ra||c===Pa;if(l||u){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Yf(n)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return l&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new Yf(n)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function a(o){const c=o.target;c.removeEventListener("dispose",a);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function G2(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ea("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function W2(n,e,t,i){const r={},a=new WeakMap;function s(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",s),delete r[h.id];const f=a.get(h);f&&(e.remove(f),a.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const f in h)e.update(h[f],n.ARRAY_BUFFER)}function l(d){const h=[],f=d.index,g=d.attributes.position;let v=0;if(f!==null){const T=f.array;v=f.version;for(let w=0,_=T.length;w<_;w+=3){const A=T[w+0],D=T[w+1],R=T[w+2];h.push(A,D,D,R,R,A)}}else if(g!==void 0){const T=g.array;v=g.version;for(let w=0,_=T.length/3-1;w<_;w+=3){const A=w+0,D=w+1,R=w+2;h.push(A,D,D,R,R,A)}}else return;const m=new(hg(h)?vg:gg)(h,1);m.version=v;const p=a.get(d);p&&e.remove(p),a.set(d,m)}function u(d){const h=a.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return a.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function X2(n,e,t){let i;function r(h){i=h}let a,s;function o(h){a=h.type,s=h.bytesPerElement}function c(h,f){n.drawElements(i,f,a,h*s),t.update(f,i,1)}function l(h,f,g){g!==0&&(n.drawElementsInstanced(i,f,a,h*s,g),t.update(f,i,g))}function u(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,a,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function d(h,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)l(h[p]/s,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,a,h,0,v,0,g);let p=0;for(let T=0;T<g;T++)p+=f[T]*v[T];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function q2(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function $2(n,e,t){const i=new WeakMap,r=new Wt;function a(s,o,c){const l=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let S=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let w=0;f===!0&&(w=1),g===!0&&(w=2),v===!0&&(w=3);let _=o.attributes.position.count*w,A=1;_>e.maxTextureSize&&(A=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const D=new Float32Array(_*A*4*d),R=new fg(D,_,A,d);R.type=ki,R.needsUpdate=!0;const I=w*4;for(let b=0;b<d;b++){const P=m[b],O=p[b],V=T[b],H=_*A*4*b;for(let Z=0;Z<P.count;Z++){const W=Z*I;f===!0&&(r.fromBufferAttribute(P,Z),D[H+W+0]=r.x,D[H+W+1]=r.y,D[H+W+2]=r.z,D[H+W+3]=0),g===!0&&(r.fromBufferAttribute(O,Z),D[H+W+4]=r.x,D[H+W+5]=r.y,D[H+W+6]=r.z,D[H+W+7]=0),v===!0&&(r.fromBufferAttribute(V,Z),D[H+W+8]=r.x,D[H+W+9]=r.y,D[H+W+10]=r.z,D[H+W+11]=V.itemSize===4?r.w:1)}}h={count:d,texture:R,size:new Le(_,A)},i.set(o,h),o.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];const g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:a}}function Y2(n,e,t,i){let r=new WeakMap;function a(c){const l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return d}function s(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:s}}const zg=new Tn,Jf=new Mg(1,1),Vg=new fg,Hg=new zw,Gg=new bg,Qf=[],ep=[],tp=new Float32Array(16),np=new Float32Array(9),ip=new Float32Array(4);function Fa(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=Qf[r];if(a===void 0&&(a=new Float32Array(r),Qf[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(a,o)}return a}function Yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function pl(n,e){let t=ep[e];t===void 0&&(t=new Int32Array(e),ep[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function j2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Z2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2fv(this.addr,e),jt(t,e)}}function K2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;n.uniform3fv(this.addr,e),jt(t,e)}}function J2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4fv(this.addr,e),jt(t,e)}}function Q2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(Yt(t,i))return;ip.set(i),n.uniformMatrix2fv(this.addr,!1,ip),jt(t,i)}}function eA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(Yt(t,i))return;np.set(i),n.uniformMatrix3fv(this.addr,!1,np),jt(t,i)}}function tA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(Yt(t,i))return;tp.set(i),n.uniformMatrix4fv(this.addr,!1,tp),jt(t,i)}}function nA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function iA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2iv(this.addr,e),jt(t,e)}}function rA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;n.uniform3iv(this.addr,e),jt(t,e)}}function aA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4iv(this.addr,e),jt(t,e)}}function sA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function oA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2uiv(this.addr,e),jt(t,e)}}function lA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;n.uniform3uiv(this.addr,e),jt(t,e)}}function cA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4uiv(this.addr,e),jt(t,e)}}function uA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let a;this.type===n.SAMPLER_2D_SHADOW?(Jf.compareFunction=dg,a=Jf):a=zg,t.setTexture2D(e||a,r)}function dA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Hg,r)}function hA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Gg,r)}function fA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Vg,r)}function pA(n){switch(n){case 5126:return j2;case 35664:return Z2;case 35665:return K2;case 35666:return J2;case 35674:return Q2;case 35675:return eA;case 35676:return tA;case 5124:case 35670:return nA;case 35667:case 35671:return iA;case 35668:case 35672:return rA;case 35669:case 35673:return aA;case 5125:return sA;case 36294:return oA;case 36295:return lA;case 36296:return cA;case 35678:case 36198:case 36298:case 36306:case 35682:return uA;case 35679:case 36299:case 36307:return dA;case 35680:case 36300:case 36308:case 36293:return hA;case 36289:case 36303:case 36311:case 36292:return fA}}function mA(n,e){n.uniform1fv(this.addr,e)}function gA(n,e){const t=Fa(e,this.size,2);n.uniform2fv(this.addr,t)}function vA(n,e){const t=Fa(e,this.size,3);n.uniform3fv(this.addr,t)}function _A(n,e){const t=Fa(e,this.size,4);n.uniform4fv(this.addr,t)}function xA(n,e){const t=Fa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function yA(n,e){const t=Fa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function bA(n,e){const t=Fa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function SA(n,e){n.uniform1iv(this.addr,e)}function wA(n,e){n.uniform2iv(this.addr,e)}function MA(n,e){n.uniform3iv(this.addr,e)}function EA(n,e){n.uniform4iv(this.addr,e)}function TA(n,e){n.uniform1uiv(this.addr,e)}function AA(n,e){n.uniform2uiv(this.addr,e)}function CA(n,e){n.uniform3uiv(this.addr,e)}function RA(n,e){n.uniform4uiv(this.addr,e)}function PA(n,e,t){const i=this.cache,r=e.length,a=pl(t,r);Yt(i,a)||(n.uniform1iv(this.addr,a),jt(i,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||zg,a[s])}function LA(n,e,t){const i=this.cache,r=e.length,a=pl(t,r);Yt(i,a)||(n.uniform1iv(this.addr,a),jt(i,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Hg,a[s])}function DA(n,e,t){const i=this.cache,r=e.length,a=pl(t,r);Yt(i,a)||(n.uniform1iv(this.addr,a),jt(i,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Gg,a[s])}function IA(n,e,t){const i=this.cache,r=e.length,a=pl(t,r);Yt(i,a)||(n.uniform1iv(this.addr,a),jt(i,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Vg,a[s])}function UA(n){switch(n){case 5126:return mA;case 35664:return gA;case 35665:return vA;case 35666:return _A;case 35674:return xA;case 35675:return yA;case 35676:return bA;case 5124:case 35670:return SA;case 35667:case 35671:return wA;case 35668:case 35672:return MA;case 35669:case 35673:return EA;case 5125:return TA;case 36294:return AA;case 36295:return CA;case 36296:return RA;case 35678:case 36198:case 36298:case 36306:case 35682:return PA;case 35679:case 36299:case 36307:return LA;case 35680:case 36300:case 36308:case 36293:return DA;case 36289:case 36303:case 36311:case 36292:return IA}}class kA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=pA(t.type)}}class NA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=UA(t.type)}}class FA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],i)}}}const yc=/(\w+)(\])?(\[|\.)?/g;function rp(n,e){n.seq.push(e),n.map[e.id]=e}function OA(n,e,t){const i=n.name,r=i.length;for(yc.lastIndex=0;;){const a=yc.exec(i),s=yc.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&s+2===r){rp(t,l===void 0?new kA(o,n,e):new NA(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new FA(o),rp(t,d)),t=d}}}class No{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);OA(a,s,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function ap(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const BA=37297;let zA=0;function VA(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const sp=new ct;function HA(n){xt._getMatrix(sp,xt.workingColorSpace,n);const e=`mat3( ${sp.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(n)){case qo:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function op(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+VA(n.getShaderSource(e),o)}else return a}function GA(n,e){const t=HA(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function WA(n,e){let t;switch(e){case QS:t="Linear";break;case ew:t="Reinhard";break;case tw:t="Cineon";break;case nw:t="ACESFilmic";break;case rw:t="AgX";break;case aw:t="Neutral";break;case iw:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const wo=new j;function XA(){xt.getLuminanceCoefficients(wo);const n=wo.x.toFixed(4),e=wo.y.toFixed(4),t=wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(es).join(`
`)}function $A(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function YA(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),s=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function es(n){return n!==""}function lp(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cu(n){return n.replace(jA,KA)}const ZA=new Map;function KA(n,e){let t=dt[e];if(t===void 0){const i=ZA.get(e);if(i!==void 0)t=dt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Cu(t)}const JA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function up(n){return n.replace(JA,QA)}function QA(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function dp(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function eC(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===eg?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===DS?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function tC(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ra:case Pa:e="ENVMAP_TYPE_CUBE";break;case dl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nC(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Pa&&(e="ENVMAP_MODE_REFRACTION"),e}function iC(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case tg:e="ENVMAP_BLENDING_MULTIPLY";break;case KS:e="ENVMAP_BLENDING_MIX";break;case JS:e="ENVMAP_BLENDING_ADD";break}return e}function rC(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function aC(n,e,t,i){const r=n.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const c=eC(t),l=tC(t),u=nC(t),d=iC(t),h=rC(t),f=qA(t),g=$A(a),v=r.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(es).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(es).join(`
`),p.length>0&&(p+=`
`)):(m=[dp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),p=[dp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==or?"#define TONE_MAPPING":"",t.toneMapping!==or?dt.tonemapping_pars_fragment:"",t.toneMapping!==or?WA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,GA("linearToOutputTexel",t.outputColorSpace),XA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(es).join(`
`)),s=Cu(s),s=lp(s,t),s=cp(s,t),o=Cu(o),o=lp(o,t),o=cp(o,t),s=up(s),o=up(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===pf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=T+m+s,_=T+p+o,A=ap(r,r.VERTEX_SHADER,w),D=ap(r,r.FRAGMENT_SHADER,_);r.attachShader(v,A),r.attachShader(v,D),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function R(P){if(n.debug.checkShaderErrors){const O=r.getProgramInfoLog(v)||"",V=r.getShaderInfoLog(A)||"",H=r.getShaderInfoLog(D)||"",Z=O.trim(),W=V.trim(),oe=H.trim();let Q=!0,ve=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,A,D);else{const we=op(r,A,"vertex"),Ce=op(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+Z+`
`+we+`
`+Ce)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(W===""||oe==="")&&(ve=!1);ve&&(P.diagnostics={runnable:Q,programLog:Z,vertexShader:{log:W,prefix:m},fragmentShader:{log:oe,prefix:p}})}r.deleteShader(A),r.deleteShader(D),I=new No(r,v),S=YA(r,v)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(v,BA)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zA++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=D,this}let sC=0;class oC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new lC(e),t.set(e,i)),i}}class lC{constructor(e){this.id=sC++,this.code=e,this.usedTimes=0}}function cC(n,e,t,i,r,a,s){const o=new pd,c=new oC,l=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,b,P,O,V){const H=O.fog,Z=V.geometry,W=S.isMeshStandardMaterial?O.environment:null,oe=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),Q=oe&&oe.mapping===dl?oe.image.height:null,ve=g[S.type];S.precision!==null&&(f=r.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const we=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ce=we!==void 0?we.length:0;let ze=0;Z.morphAttributes.position!==void 0&&(ze=1),Z.morphAttributes.normal!==void 0&&(ze=2),Z.morphAttributes.color!==void 0&&(ze=3);let et,Je,le,Me;if(ve){const vt=ci[ve];et=vt.vertexShader,Je=vt.fragmentShader}else et=S.vertexShader,Je=S.fragmentShader,c.update(S),le=c.getVertexShaderID(S),Me=c.getFragmentShaderID(S);const _e=n.getRenderTarget(),Ne=n.state.buffers.depth.getReversed(),Oe=V.isInstancedMesh===!0,We=V.isBatchedMesh===!0,St=!!S.map,Qe=!!S.matcap,y=!!oe,C=!!S.aoMap,U=!!S.lightMap,z=!!S.bumpMap,N=!!S.normalMap,$=!!S.displacementMap,Y=!!S.emissiveMap,K=!!S.metalnessMap,ce=!!S.roughnessMap,se=S.anisotropy>0,M=S.clearcoat>0,x=S.dispersion>0,k=S.iridescence>0,X=S.sheen>0,re=S.transmission>0,ee=se&&!!S.anisotropyMap,xe=M&&!!S.clearcoatMap,pe=M&&!!S.clearcoatNormalMap,Re=M&&!!S.clearcoatRoughnessMap,De=k&&!!S.iridescenceMap,me=k&&!!S.iridescenceThicknessMap,Pe=X&&!!S.sheenColorMap,qe=X&&!!S.sheenRoughnessMap,te=!!S.specularMap,Te=!!S.specularColorMap,rt=!!S.specularIntensityMap,B=re&&!!S.transmissionMap,be=re&&!!S.thicknessMap,Ae=!!S.gradientMap,Ve=!!S.alphaMap,Se=S.alphaTest>0,he=!!S.alphaHash,Ge=!!S.extensions;let nt=or;S.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(nt=n.toneMapping);const wt={shaderID:ve,shaderType:S.type,shaderName:S.name,vertexShader:et,fragmentShader:Je,defines:S.defines,customVertexShaderID:le,customFragmentShaderID:Me,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:We,batchingColor:We&&V._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&V.instanceColor!==null,instancingMorph:Oe&&V.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:_e===null?n.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:La,alphaToCoverage:!!S.alphaToCoverage,map:St,matcap:Qe,envMap:y,envMapMode:y&&oe.mapping,envMapCubeUVHeight:Q,aoMap:C,lightMap:U,bumpMap:z,normalMap:N,displacementMap:h&&$,emissiveMap:Y,normalMapObjectSpace:N&&S.normalMapType===cw,normalMapTangentSpace:N&&S.normalMapType===ud,metalnessMap:K,roughnessMap:ce,anisotropy:se,anisotropyMap:ee,clearcoat:M,clearcoatMap:xe,clearcoatNormalMap:pe,clearcoatRoughnessMap:Re,dispersion:x,iridescence:k,iridescenceMap:De,iridescenceThicknessMap:me,sheen:X,sheenColorMap:Pe,sheenRoughnessMap:qe,specularMap:te,specularColorMap:Te,specularIntensityMap:rt,transmission:re,transmissionMap:B,thicknessMap:be,gradientMap:Ae,opaque:S.transparent===!1&&S.blending===Ma&&S.alphaToCoverage===!1,alphaMap:Ve,alphaTest:Se,alphaHash:he,combine:S.combine,mapUv:St&&v(S.map.channel),aoMapUv:C&&v(S.aoMap.channel),lightMapUv:U&&v(S.lightMap.channel),bumpMapUv:z&&v(S.bumpMap.channel),normalMapUv:N&&v(S.normalMap.channel),displacementMapUv:$&&v(S.displacementMap.channel),emissiveMapUv:Y&&v(S.emissiveMap.channel),metalnessMapUv:K&&v(S.metalnessMap.channel),roughnessMapUv:ce&&v(S.roughnessMap.channel),anisotropyMapUv:ee&&v(S.anisotropyMap.channel),clearcoatMapUv:xe&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:pe&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:me&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:qe&&v(S.sheenRoughnessMap.channel),specularMapUv:te&&v(S.specularMap.channel),specularColorMapUv:Te&&v(S.specularColorMap.channel),specularIntensityMapUv:rt&&v(S.specularIntensityMap.channel),transmissionMapUv:B&&v(S.transmissionMap.channel),thicknessMapUv:be&&v(S.thicknessMap.channel),alphaMapUv:Ve&&v(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(N||se),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Z.attributes.uv&&(St||Ve),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ne,skinning:V.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:ze,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:nt,decodeVideoTexture:St&&S.map.isVideoTexture===!0&&xt.getTransfer(S.map.colorSpace)===Pt,decodeVideoTextureEmissive:Y&&S.emissiveMap.isVideoTexture===!0&&xt.getTransfer(S.emissiveMap.colorSpace)===Pt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ui,flipSided:S.side===Rn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ge&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&S.extensions.multiDraw===!0||We)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return wt.vertexUv1s=l.has(1),wt.vertexUv2s=l.has(2),wt.vertexUv3s=l.has(3),l.clear(),wt}function p(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)b.push(P),b.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(T(b,S),w(b,S),b.push(n.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function T(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function w(S,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),S.push(o.mask)}function _(S){const b=g[S.type];let P;if(b){const O=ci[b];P=xg.clone(O.uniforms)}else P=S.uniforms;return P}function A(S,b){let P;for(let O=0,V=u.length;O<V;O++){const H=u[O];if(H.cacheKey===b){P=H,++P.usedTimes;break}}return P===void 0&&(P=new aC(n,b,S,a),u.push(P)),P}function D(S){if(--S.usedTimes===0){const b=u.indexOf(S);u[b]=u[u.length-1],u.pop(),S.destroy()}}function R(S){c.remove(S)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:A,releaseProgram:D,releaseShaderCache:R,programs:u,dispose:I}}function uC(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function i(s){n.delete(s)}function r(s,o,c){n.get(s)[o]=c}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:a}}function dC(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function hp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function fp(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function s(d,h,f,g,v,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),e++,p}function o(d,h,f,g,v,m){const p=s(d,h,f,g,v,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function c(d,h,f,g,v,m){const p=s(d,h,f,g,v,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function l(d,h){t.length>1&&t.sort(d||dC),i.length>1&&i.sort(h||hp),r.length>1&&r.sort(h||hp)}function u(){for(let d=e,h=n.length;d<h;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:o,unshift:c,finish:u,sort:l}}function hC(){let n=new WeakMap;function e(i,r){const a=n.get(i);let s;return a===void 0?(s=new fp,n.set(i,[s])):r>=a.length?(s=new fp,a.push(s)):s=a[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function fC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new pt};break;case"SpotLight":t={position:new j,direction:new j,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new j,halfWidth:new j,halfHeight:new j};break}return n[e.id]=t,t}}}function pC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let mC=0;function gC(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function vC(n){const e=new fC,t=pC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new j);const r=new j,a=new Ht,s=new Ht;function o(l){let u=0,d=0,h=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,T=0,w=0,_=0,A=0,D=0,R=0;l.sort(gC);for(let S=0,b=l.length;S<b;S++){const P=l[S],O=P.color,V=P.intensity,H=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=O.r*V,d+=O.g*V,h+=O.b*V;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],V);R++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const oe=P.shadow,Q=t.get(P);Q.shadowIntensity=oe.intensity,Q.shadowBias=oe.bias,Q.shadowNormalBias=oe.normalBias,Q.shadowRadius=oe.radius,Q.shadowMapSize=oe.mapSize,i.directionalShadow[f]=Q,i.directionalShadowMap[f]=Z,i.directionalShadowMatrix[f]=P.shadow.matrix,T++}i.directional[f]=W,f++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(O).multiplyScalar(V),W.distance=H,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[v]=W;const oe=P.shadow;if(P.map&&(i.spotLightMap[A]=P.map,A++,oe.updateMatrices(P),P.castShadow&&D++),i.spotLightMatrix[v]=oe.matrix,P.castShadow){const Q=t.get(P);Q.shadowIntensity=oe.intensity,Q.shadowBias=oe.bias,Q.shadowNormalBias=oe.normalBias,Q.shadowRadius=oe.radius,Q.shadowMapSize=oe.mapSize,i.spotShadow[v]=Q,i.spotShadowMap[v]=Z,_++}v++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(O).multiplyScalar(V),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=W,m++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const oe=P.shadow,Q=t.get(P);Q.shadowIntensity=oe.intensity,Q.shadowBias=oe.bias,Q.shadowNormalBias=oe.normalBias,Q.shadowRadius=oe.radius,Q.shadowMapSize=oe.mapSize,Q.shadowCameraNear=oe.camera.near,Q.shadowCameraFar=oe.camera.far,i.pointShadow[g]=Q,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=P.shadow.matrix,w++}i.point[g]=W,g++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(V),W.groundColor.copy(P.groundColor).multiplyScalar(V),i.hemi[p]=W,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ie.LTC_FLOAT_1,i.rectAreaLTC2=Ie.LTC_FLOAT_2):(i.rectAreaLTC1=Ie.LTC_HALF_1,i.rectAreaLTC2=Ie.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const I=i.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==T||I.numPointShadows!==w||I.numSpotShadows!==_||I.numSpotMaps!==A||I.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=_+A-D,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=R,I.directionalLength=f,I.pointLength=g,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=T,I.numPointShadows=w,I.numSpotShadows=_,I.numSpotMaps=A,I.numLightProbes=R,i.version=mC++)}function c(l,u){let d=0,h=0,f=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,T=l.length;p<T;p++){const w=l[p];if(w.isDirectionalLight){const _=i.directional[d];_.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),d++}else if(w.isSpotLight){const _=i.spot[f];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),f++}else if(w.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),s.identity(),a.copy(w.matrixWorld),a.premultiply(m),s.extractRotation(a),_.halfWidth.set(w.width*.5,0,0),_.halfHeight.set(0,w.height*.5,0),_.halfWidth.applyMatrix4(s),_.halfHeight.applyMatrix4(s),g++}else if(w.isPointLight){const _=i.point[h];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),h++}else if(w.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(w.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:i}}function pp(n){const e=new vC(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function a(u){t.push(u)}function s(u){i.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:s}}function _C(n){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new pp(n),e.set(r,[o])):a>=s.length?(o=new pp(n),s.push(o)):o=s[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const xC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bC(n,e,t){let i=new Sg;const r=new Le,a=new Le,s=new Wt,o=new WM({depthPacking:lw}),c=new XM,l={},u=t.maxTextureSize,d={[ur]:Rn,[Rn]:ur,[Ui]:Ui},h=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:xC,fragmentShader:yC}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ln;g.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new hi(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eg;let p=this.type;this.render=function(D,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;const S=n.getRenderTarget(),b=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Oi),O.buffers.depth.getReversed()?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const V=p!==Pi&&this.type===Pi,H=p===Pi&&this.type!==Pi;for(let Z=0,W=D.length;Z<W;Z++){const oe=D[Z],Q=oe.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;r.copy(Q.mapSize);const ve=Q.getFrameExtents();if(r.multiply(ve),a.copy(Q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/ve.x),r.x=a.x*ve.x,Q.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/ve.y),r.y=a.y*ve.y,Q.mapSize.y=a.y)),Q.map===null||V===!0||H===!0){const Ce=this.type!==Pi?{minFilter:ei,magFilter:ei}:{};Q.map!==null&&Q.map.dispose(),Q.map=new dr(r.x,r.y,Ce),Q.map.texture.name=oe.name+".shadowMap",Q.camera.updateProjectionMatrix()}n.setRenderTarget(Q.map),n.clear();const we=Q.getViewportCount();for(let Ce=0;Ce<we;Ce++){const ze=Q.getViewport(Ce);s.set(a.x*ze.x,a.y*ze.y,a.x*ze.z,a.y*ze.w),O.viewport(s),Q.updateMatrices(oe,Ce),i=Q.getFrustum(),_(R,I,Q.camera,oe,this.type)}Q.isPointLightShadow!==!0&&this.type===Pi&&T(Q,I),Q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,b,P)};function T(D,R){const I=e.update(v);h.defines.VSM_SAMPLES!==D.blurSamples&&(h.defines.VSM_SAMPLES=D.blurSamples,f.defines.VSM_SAMPLES=D.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new dr(r.x,r.y)),h.uniforms.shadow_pass.value=D.map.texture,h.uniforms.resolution.value=D.mapSize,h.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(R,null,I,h,v,null),f.uniforms.shadow_pass.value=D.mapPass.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(R,null,I,f,v,null)}function w(D,R,I,S){let b=null;const P=I.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(P!==void 0)b=P;else if(b=I.isPointLight===!0?c:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const O=b.uuid,V=R.uuid;let H=l[O];H===void 0&&(H={},l[O]=H);let Z=H[V];Z===void 0&&(Z=b.clone(),H[V]=Z,R.addEventListener("dispose",A)),b=Z}if(b.visible=R.visible,b.wireframe=R.wireframe,S===Pi?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:d[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const O=n.properties.get(b);O.light=I}return b}function _(D,R,I,S,b){if(D.visible===!1)return;if(D.layers.test(R.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&b===Pi)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,D.matrixWorld);const V=e.update(D),H=D.material;if(Array.isArray(H)){const Z=V.groups;for(let W=0,oe=Z.length;W<oe;W++){const Q=Z[W],ve=H[Q.materialIndex];if(ve&&ve.visible){const we=w(D,ve,S,b);D.onBeforeShadow(n,D,R,I,V,we,Q),n.renderBufferDirect(I,null,V,we,D,Q),D.onAfterShadow(n,D,R,I,V,we,Q)}}}else if(H.visible){const Z=w(D,H,S,b);D.onBeforeShadow(n,D,R,I,V,Z,null),n.renderBufferDirect(I,null,V,Z,D,null),D.onAfterShadow(n,D,R,I,V,Z,null)}}const O=D.children;for(let V=0,H=O.length;V<H;V++)_(O[V],R,I,S,b)}function A(D){D.target.removeEventListener("dispose",A);for(const I in l){const S=l[I],b=D.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}const SC={[zc]:Vc,[Hc]:Xc,[Gc]:qc,[Ca]:Wc,[Vc]:zc,[Xc]:Hc,[qc]:Gc,[Wc]:Ca};function wC(n,e){function t(){let B=!1;const be=new Wt;let Ae=null;const Ve=new Wt(0,0,0,0);return{setMask:function(Se){Ae!==Se&&!B&&(n.colorMask(Se,Se,Se,Se),Ae=Se)},setLocked:function(Se){B=Se},setClear:function(Se,he,Ge,nt,wt){wt===!0&&(Se*=nt,he*=nt,Ge*=nt),be.set(Se,he,Ge,nt),Ve.equals(be)===!1&&(n.clearColor(Se,he,Ge,nt),Ve.copy(be))},reset:function(){B=!1,Ae=null,Ve.set(-1,0,0,0)}}}function i(){let B=!1,be=!1,Ae=null,Ve=null,Se=null;return{setReversed:function(he){if(be!==he){const Ge=e.get("EXT_clip_control");he?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),be=he;const nt=Se;Se=null,this.setClear(nt)}},getReversed:function(){return be},setTest:function(he){he?_e(n.DEPTH_TEST):Ne(n.DEPTH_TEST)},setMask:function(he){Ae!==he&&!B&&(n.depthMask(he),Ae=he)},setFunc:function(he){if(be&&(he=SC[he]),Ve!==he){switch(he){case zc:n.depthFunc(n.NEVER);break;case Vc:n.depthFunc(n.ALWAYS);break;case Hc:n.depthFunc(n.LESS);break;case Ca:n.depthFunc(n.LEQUAL);break;case Gc:n.depthFunc(n.EQUAL);break;case Wc:n.depthFunc(n.GEQUAL);break;case Xc:n.depthFunc(n.GREATER);break;case qc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ve=he}},setLocked:function(he){B=he},setClear:function(he){Se!==he&&(be&&(he=1-he),n.clearDepth(he),Se=he)},reset:function(){B=!1,Ae=null,Ve=null,Se=null,be=!1}}}function r(){let B=!1,be=null,Ae=null,Ve=null,Se=null,he=null,Ge=null,nt=null,wt=null;return{setTest:function(vt){B||(vt?_e(n.STENCIL_TEST):Ne(n.STENCIL_TEST))},setMask:function(vt){be!==vt&&!B&&(n.stencilMask(vt),be=vt)},setFunc:function(vt,Bt,Vt){(Ae!==vt||Ve!==Bt||Se!==Vt)&&(n.stencilFunc(vt,Bt,Vt),Ae=vt,Ve=Bt,Se=Vt)},setOp:function(vt,Bt,Vt){(he!==vt||Ge!==Bt||nt!==Vt)&&(n.stencilOp(vt,Bt,Vt),he=vt,Ge=Bt,nt=Vt)},setLocked:function(vt){B=vt},setClear:function(vt){wt!==vt&&(n.clearStencil(vt),wt=vt)},reset:function(){B=!1,be=null,Ae=null,Ve=null,Se=null,he=null,Ge=null,nt=null,wt=null}}}const a=new t,s=new i,o=new r,c=new WeakMap,l=new WeakMap;let u={},d={},h=new WeakMap,f=[],g=null,v=!1,m=null,p=null,T=null,w=null,_=null,A=null,D=null,R=new pt(0,0,0),I=0,S=!1,b=null,P=null,O=null,V=null,H=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,oe=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(Q)[1]),W=oe>=1):Q.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),W=oe>=2);let ve=null,we={};const Ce=n.getParameter(n.SCISSOR_BOX),ze=n.getParameter(n.VIEWPORT),et=new Wt().fromArray(Ce),Je=new Wt().fromArray(ze);function le(B,be,Ae,Ve){const Se=new Uint8Array(4),he=n.createTexture();n.bindTexture(B,he),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<Ae;Ge++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(be,0,n.RGBA,1,1,Ve,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(be+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return he}const Me={};Me[n.TEXTURE_2D]=le(n.TEXTURE_2D,n.TEXTURE_2D,1),Me[n.TEXTURE_CUBE_MAP]=le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[n.TEXTURE_2D_ARRAY]=le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Me[n.TEXTURE_3D]=le(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),_e(n.DEPTH_TEST),s.setFunc(Ca),z(!1),N(lf),_e(n.CULL_FACE),C(Oi);function _e(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function Ne(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function Oe(B,be){return d[B]!==be?(n.bindFramebuffer(B,be),d[B]=be,B===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=be),B===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=be),!0):!1}function We(B,be){let Ae=f,Ve=!1;if(B){Ae=h.get(be),Ae===void 0&&(Ae=[],h.set(be,Ae));const Se=B.textures;if(Ae.length!==Se.length||Ae[0]!==n.COLOR_ATTACHMENT0){for(let he=0,Ge=Se.length;he<Ge;he++)Ae[he]=n.COLOR_ATTACHMENT0+he;Ae.length=Se.length,Ve=!0}}else Ae[0]!==n.BACK&&(Ae[0]=n.BACK,Ve=!0);Ve&&n.drawBuffers(Ae)}function St(B){return g!==B?(n.useProgram(B),g=B,!0):!1}const Qe={[Ir]:n.FUNC_ADD,[US]:n.FUNC_SUBTRACT,[kS]:n.FUNC_REVERSE_SUBTRACT};Qe[NS]=n.MIN,Qe[FS]=n.MAX;const y={[OS]:n.ZERO,[BS]:n.ONE,[zS]:n.SRC_COLOR,[Oc]:n.SRC_ALPHA,[qS]:n.SRC_ALPHA_SATURATE,[WS]:n.DST_COLOR,[HS]:n.DST_ALPHA,[VS]:n.ONE_MINUS_SRC_COLOR,[Bc]:n.ONE_MINUS_SRC_ALPHA,[XS]:n.ONE_MINUS_DST_COLOR,[GS]:n.ONE_MINUS_DST_ALPHA,[$S]:n.CONSTANT_COLOR,[YS]:n.ONE_MINUS_CONSTANT_COLOR,[jS]:n.CONSTANT_ALPHA,[ZS]:n.ONE_MINUS_CONSTANT_ALPHA};function C(B,be,Ae,Ve,Se,he,Ge,nt,wt,vt){if(B===Oi){v===!0&&(Ne(n.BLEND),v=!1);return}if(v===!1&&(_e(n.BLEND),v=!0),B!==IS){if(B!==m||vt!==S){if((p!==Ir||_!==Ir)&&(n.blendEquation(n.FUNC_ADD),p=Ir,_=Ir),vt)switch(B){case Ma:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cf:n.blendFunc(n.ONE,n.ONE);break;case uf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case df:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ma:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cf:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case uf:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case df:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}T=null,w=null,A=null,D=null,R.set(0,0,0),I=0,m=B,S=vt}return}Se=Se||be,he=he||Ae,Ge=Ge||Ve,(be!==p||Se!==_)&&(n.blendEquationSeparate(Qe[be],Qe[Se]),p=be,_=Se),(Ae!==T||Ve!==w||he!==A||Ge!==D)&&(n.blendFuncSeparate(y[Ae],y[Ve],y[he],y[Ge]),T=Ae,w=Ve,A=he,D=Ge),(nt.equals(R)===!1||wt!==I)&&(n.blendColor(nt.r,nt.g,nt.b,wt),R.copy(nt),I=wt),m=B,S=!1}function U(B,be){B.side===Ui?Ne(n.CULL_FACE):_e(n.CULL_FACE);let Ae=B.side===Rn;be&&(Ae=!Ae),z(Ae),B.blending===Ma&&B.transparent===!1?C(Oi):C(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),s.setFunc(B.depthFunc),s.setTest(B.depthTest),s.setMask(B.depthWrite),a.setMask(B.colorWrite);const Ve=B.stencilWrite;o.setTest(Ve),Ve&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Y(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?_e(n.SAMPLE_ALPHA_TO_COVERAGE):Ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function z(B){b!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),b=B)}function N(B){B!==PS?(_e(n.CULL_FACE),B!==P&&(B===lf?n.cullFace(n.BACK):B===LS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ne(n.CULL_FACE),P=B}function $(B){B!==O&&(W&&n.lineWidth(B),O=B)}function Y(B,be,Ae){B?(_e(n.POLYGON_OFFSET_FILL),(V!==be||H!==Ae)&&(n.polygonOffset(be,Ae),V=be,H=Ae)):Ne(n.POLYGON_OFFSET_FILL)}function K(B){B?_e(n.SCISSOR_TEST):Ne(n.SCISSOR_TEST)}function ce(B){B===void 0&&(B=n.TEXTURE0+Z-1),ve!==B&&(n.activeTexture(B),ve=B)}function se(B,be,Ae){Ae===void 0&&(ve===null?Ae=n.TEXTURE0+Z-1:Ae=ve);let Ve=we[Ae];Ve===void 0&&(Ve={type:void 0,texture:void 0},we[Ae]=Ve),(Ve.type!==B||Ve.texture!==be)&&(ve!==Ae&&(n.activeTexture(Ae),ve=Ae),n.bindTexture(B,be||Me[B]),Ve.type=B,Ve.texture=be)}function M(){const B=we[ve];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function k(){try{n.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function X(){try{n.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function re(){try{n.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ee(){try{n.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xe(){try{n.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pe(){try{n.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Re(){try{n.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function De(){try{n.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{n.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pe(B){et.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),et.copy(B))}function qe(B){Je.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),Je.copy(B))}function te(B,be){let Ae=l.get(be);Ae===void 0&&(Ae=new WeakMap,l.set(be,Ae));let Ve=Ae.get(B);Ve===void 0&&(Ve=n.getUniformBlockIndex(be,B.name),Ae.set(B,Ve))}function Te(B,be){const Ve=l.get(be).get(B);c.get(be)!==Ve&&(n.uniformBlockBinding(be,Ve,B.__bindingPointIndex),c.set(be,Ve))}function rt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ve=null,we={},d={},h=new WeakMap,f=[],g=null,v=!1,m=null,p=null,T=null,w=null,_=null,A=null,D=null,R=new pt(0,0,0),I=0,S=!1,b=null,P=null,O=null,V=null,H=null,et.set(0,0,n.canvas.width,n.canvas.height),Je.set(0,0,n.canvas.width,n.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:_e,disable:Ne,bindFramebuffer:Oe,drawBuffers:We,useProgram:St,setBlending:C,setMaterial:U,setFlipSided:z,setCullFace:N,setLineWidth:$,setPolygonOffset:Y,setScissorTest:K,activeTexture:ce,bindTexture:se,unbindTexture:M,compressedTexImage2D:x,compressedTexImage3D:k,texImage2D:De,texImage3D:me,updateUBOMapping:te,uniformBlockBinding:Te,texStorage2D:pe,texStorage3D:Re,texSubImage2D:X,texSubImage3D:re,compressedTexSubImage2D:ee,compressedTexSubImage3D:xe,scissor:Pe,viewport:qe,reset:rt}}function MC(n,e,t,i,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Le,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,x){return f?new OffscreenCanvas(M,x):Yo("canvas")}function v(M,x,k){let X=1;const re=se(M);if((re.width>k||re.height>k)&&(X=k/Math.max(re.width,re.height)),X<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const ee=Math.floor(X*re.width),xe=Math.floor(X*re.height);d===void 0&&(d=g(ee,xe));const pe=x?g(ee,xe):d;return pe.width=ee,pe.height=xe,pe.getContext("2d").drawImage(M,0,0,ee,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ee+"x"+xe+")."),pe}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),M;return M}function m(M){return M.generateMipmaps}function p(M){n.generateMipmap(M)}function T(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(M,x,k,X,re=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ee=x;if(x===n.RED&&(k===n.FLOAT&&(ee=n.R32F),k===n.HALF_FLOAT&&(ee=n.R16F),k===n.UNSIGNED_BYTE&&(ee=n.R8)),x===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(ee=n.R8UI),k===n.UNSIGNED_SHORT&&(ee=n.R16UI),k===n.UNSIGNED_INT&&(ee=n.R32UI),k===n.BYTE&&(ee=n.R8I),k===n.SHORT&&(ee=n.R16I),k===n.INT&&(ee=n.R32I)),x===n.RG&&(k===n.FLOAT&&(ee=n.RG32F),k===n.HALF_FLOAT&&(ee=n.RG16F),k===n.UNSIGNED_BYTE&&(ee=n.RG8)),x===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(ee=n.RG8UI),k===n.UNSIGNED_SHORT&&(ee=n.RG16UI),k===n.UNSIGNED_INT&&(ee=n.RG32UI),k===n.BYTE&&(ee=n.RG8I),k===n.SHORT&&(ee=n.RG16I),k===n.INT&&(ee=n.RG32I)),x===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(ee=n.RGB8UI),k===n.UNSIGNED_SHORT&&(ee=n.RGB16UI),k===n.UNSIGNED_INT&&(ee=n.RGB32UI),k===n.BYTE&&(ee=n.RGB8I),k===n.SHORT&&(ee=n.RGB16I),k===n.INT&&(ee=n.RGB32I)),x===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(ee=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(ee=n.RGBA16UI),k===n.UNSIGNED_INT&&(ee=n.RGBA32UI),k===n.BYTE&&(ee=n.RGBA8I),k===n.SHORT&&(ee=n.RGBA16I),k===n.INT&&(ee=n.RGBA32I)),x===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(ee=n.RGB9_E5),x===n.RGBA){const xe=re?qo:xt.getTransfer(X);k===n.FLOAT&&(ee=n.RGBA32F),k===n.HALF_FLOAT&&(ee=n.RGBA16F),k===n.UNSIGNED_BYTE&&(ee=xe===Pt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function _(M,x){let k;return M?x===null||x===Gr||x===_s?k=n.DEPTH24_STENCIL8:x===ki?k=n.DEPTH32F_STENCIL8:x===vs&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Gr||x===_s?k=n.DEPTH_COMPONENT24:x===ki?k=n.DEPTH_COMPONENT32F:x===vs&&(k=n.DEPTH_COMPONENT16),k}function A(M,x){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==ei&&M.minFilter!==ui?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function D(M){const x=M.target;x.removeEventListener("dispose",D),I(x),x.isVideoTexture&&u.delete(x)}function R(M){const x=M.target;x.removeEventListener("dispose",R),b(x)}function I(M){const x=i.get(M);if(x.__webglInit===void 0)return;const k=M.source,X=h.get(k);if(X){const re=X[x.__cacheKey];re.usedTimes--,re.usedTimes===0&&S(M),Object.keys(X).length===0&&h.delete(k)}i.remove(M)}function S(M){const x=i.get(M);n.deleteTexture(x.__webglTexture);const k=M.source,X=h.get(k);delete X[x.__cacheKey],s.memory.textures--}function b(M){const x=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let re=0;re<x.__webglFramebuffer[X].length;re++)n.deleteFramebuffer(x.__webglFramebuffer[X][re]);else n.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)n.deleteFramebuffer(x.__webglFramebuffer[X]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const k=M.textures;for(let X=0,re=k.length;X<re;X++){const ee=i.get(k[X]);ee.__webglTexture&&(n.deleteTexture(ee.__webglTexture),s.memory.textures--),i.remove(k[X])}i.remove(M)}let P=0;function O(){P=0}function V(){const M=P;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),P+=1,M}function H(M){const x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function Z(M,x){const k=i.get(M);if(M.isVideoTexture&&K(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&k.__version!==M.version){const X=M.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(k,M,x);return}}else M.isExternalTexture&&(k.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+x)}function W(M,x){const k=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&k.__version!==M.version){Me(k,M,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+x)}function oe(M,x){const k=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&k.__version!==M.version){Me(k,M,x);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+x)}function Q(M,x){const k=i.get(M);if(M.version>0&&k.__version!==M.version){_e(k,M,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+x)}const ve={[jc]:n.REPEAT,[Nr]:n.CLAMP_TO_EDGE,[Zc]:n.MIRRORED_REPEAT},we={[ei]:n.NEAREST,[sw]:n.NEAREST_MIPMAP_NEAREST,[Zs]:n.NEAREST_MIPMAP_LINEAR,[ui]:n.LINEAR,[Hl]:n.LINEAR_MIPMAP_NEAREST,[Fr]:n.LINEAR_MIPMAP_LINEAR},Ce={[uw]:n.NEVER,[gw]:n.ALWAYS,[dw]:n.LESS,[dg]:n.LEQUAL,[hw]:n.EQUAL,[mw]:n.GEQUAL,[fw]:n.GREATER,[pw]:n.NOTEQUAL};function ze(M,x){if(x.type===ki&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===ui||x.magFilter===Hl||x.magFilter===Zs||x.magFilter===Fr||x.minFilter===ui||x.minFilter===Hl||x.minFilter===Zs||x.minFilter===Fr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,ve[x.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,ve[x.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,ve[x.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,we[x.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,we[x.minFilter]),x.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,Ce[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ei||x.minFilter!==Zs&&x.minFilter!==Fr||x.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function et(M,x){let k=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",D));const X=x.source;let re=h.get(X);re===void 0&&(re={},h.set(X,re));const ee=H(x);if(ee!==M.__cacheKey){re[ee]===void 0&&(re[ee]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,k=!0),re[ee].usedTimes++;const xe=re[M.__cacheKey];xe!==void 0&&(re[M.__cacheKey].usedTimes--,xe.usedTimes===0&&S(x)),M.__cacheKey=ee,M.__webglTexture=re[ee].texture}return k}function Je(M,x,k){return Math.floor(Math.floor(M/k)/x)}function le(M,x,k,X){const ee=M.updateRanges;if(ee.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,k,X,x.data);else{ee.sort((me,Pe)=>me.start-Pe.start);let xe=0;for(let me=1;me<ee.length;me++){const Pe=ee[xe],qe=ee[me],te=Pe.start+Pe.count,Te=Je(qe.start,x.width,4),rt=Je(Pe.start,x.width,4);qe.start<=te+1&&Te===rt&&Je(qe.start+qe.count-1,x.width,4)===Te?Pe.count=Math.max(Pe.count,qe.start+qe.count-Pe.start):(++xe,ee[xe]=qe)}ee.length=xe+1;const pe=n.getParameter(n.UNPACK_ROW_LENGTH),Re=n.getParameter(n.UNPACK_SKIP_PIXELS),De=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let me=0,Pe=ee.length;me<Pe;me++){const qe=ee[me],te=Math.floor(qe.start/4),Te=Math.ceil(qe.count/4),rt=te%x.width,B=Math.floor(te/x.width),be=Te,Ae=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,rt),n.pixelStorei(n.UNPACK_SKIP_ROWS,B),t.texSubImage2D(n.TEXTURE_2D,0,rt,B,be,Ae,k,X,x.data)}M.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,pe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Re),n.pixelStorei(n.UNPACK_SKIP_ROWS,De)}}function Me(M,x,k){let X=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=n.TEXTURE_3D);const re=et(M,x),ee=x.source;t.bindTexture(X,M.__webglTexture,n.TEXTURE0+k);const xe=i.get(ee);if(ee.version!==xe.__version||re===!0){t.activeTexture(n.TEXTURE0+k);const pe=xt.getPrimaries(xt.workingColorSpace),Re=x.colorSpace===ar?null:xt.getPrimaries(x.colorSpace),De=x.colorSpace===ar||pe===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let me=v(x.image,!1,r.maxTextureSize);me=ce(x,me);const Pe=a.convert(x.format,x.colorSpace),qe=a.convert(x.type);let te=w(x.internalFormat,Pe,qe,x.colorSpace,x.isVideoTexture);ze(X,x);let Te;const rt=x.mipmaps,B=x.isVideoTexture!==!0,be=xe.__version===void 0||re===!0,Ae=ee.dataReady,Ve=A(x,me);if(x.isDepthTexture)te=_(x.format===ys,x.type),be&&(B?t.texStorage2D(n.TEXTURE_2D,1,te,me.width,me.height):t.texImage2D(n.TEXTURE_2D,0,te,me.width,me.height,0,Pe,qe,null));else if(x.isDataTexture)if(rt.length>0){B&&be&&t.texStorage2D(n.TEXTURE_2D,Ve,te,rt[0].width,rt[0].height);for(let Se=0,he=rt.length;Se<he;Se++)Te=rt[Se],B?Ae&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,Te.width,Te.height,Pe,qe,Te.data):t.texImage2D(n.TEXTURE_2D,Se,te,Te.width,Te.height,0,Pe,qe,Te.data);x.generateMipmaps=!1}else B?(be&&t.texStorage2D(n.TEXTURE_2D,Ve,te,me.width,me.height),Ae&&le(x,me,Pe,qe)):t.texImage2D(n.TEXTURE_2D,0,te,me.width,me.height,0,Pe,qe,me.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){B&&be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ve,te,rt[0].width,rt[0].height,me.depth);for(let Se=0,he=rt.length;Se<he;Se++)if(Te=rt[Se],x.format!==Zn)if(Pe!==null)if(B){if(Ae)if(x.layerUpdates.size>0){const Ge=Wf(Te.width,Te.height,x.format,x.type);for(const nt of x.layerUpdates){const wt=Te.data.subarray(nt*Ge/Te.data.BYTES_PER_ELEMENT,(nt+1)*Ge/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,nt,Te.width,Te.height,1,Pe,wt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,0,Te.width,Te.height,me.depth,Pe,Te.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Se,te,Te.width,Te.height,me.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?Ae&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,0,Te.width,Te.height,me.depth,Pe,qe,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Se,te,Te.width,Te.height,me.depth,0,Pe,qe,Te.data)}else{B&&be&&t.texStorage2D(n.TEXTURE_2D,Ve,te,rt[0].width,rt[0].height);for(let Se=0,he=rt.length;Se<he;Se++)Te=rt[Se],x.format!==Zn?Pe!==null?B?Ae&&t.compressedTexSubImage2D(n.TEXTURE_2D,Se,0,0,Te.width,Te.height,Pe,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,Se,te,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?Ae&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,Te.width,Te.height,Pe,qe,Te.data):t.texImage2D(n.TEXTURE_2D,Se,te,Te.width,Te.height,0,Pe,qe,Te.data)}else if(x.isDataArrayTexture)if(B){if(be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ve,te,me.width,me.height,me.depth),Ae)if(x.layerUpdates.size>0){const Se=Wf(me.width,me.height,x.format,x.type);for(const he of x.layerUpdates){const Ge=me.data.subarray(he*Se/me.data.BYTES_PER_ELEMENT,(he+1)*Se/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,he,me.width,me.height,1,Pe,qe,Ge)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Pe,qe,me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,te,me.width,me.height,me.depth,0,Pe,qe,me.data);else if(x.isData3DTexture)B?(be&&t.texStorage3D(n.TEXTURE_3D,Ve,te,me.width,me.height,me.depth),Ae&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Pe,qe,me.data)):t.texImage3D(n.TEXTURE_3D,0,te,me.width,me.height,me.depth,0,Pe,qe,me.data);else if(x.isFramebufferTexture){if(be)if(B)t.texStorage2D(n.TEXTURE_2D,Ve,te,me.width,me.height);else{let Se=me.width,he=me.height;for(let Ge=0;Ge<Ve;Ge++)t.texImage2D(n.TEXTURE_2D,Ge,te,Se,he,0,Pe,qe,null),Se>>=1,he>>=1}}else if(rt.length>0){if(B&&be){const Se=se(rt[0]);t.texStorage2D(n.TEXTURE_2D,Ve,te,Se.width,Se.height)}for(let Se=0,he=rt.length;Se<he;Se++)Te=rt[Se],B?Ae&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,Pe,qe,Te):t.texImage2D(n.TEXTURE_2D,Se,te,Pe,qe,Te);x.generateMipmaps=!1}else if(B){if(be){const Se=se(me);t.texStorage2D(n.TEXTURE_2D,Ve,te,Se.width,Se.height)}Ae&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe,qe,me)}else t.texImage2D(n.TEXTURE_2D,0,te,Pe,qe,me);m(x)&&p(X),xe.__version=ee.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function _e(M,x,k){if(x.image.length!==6)return;const X=et(M,x),re=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+k);const ee=i.get(re);if(re.version!==ee.__version||X===!0){t.activeTexture(n.TEXTURE0+k);const xe=xt.getPrimaries(xt.workingColorSpace),pe=x.colorSpace===ar?null:xt.getPrimaries(x.colorSpace),Re=x.colorSpace===ar||xe===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const De=x.isCompressedTexture||x.image[0].isCompressedTexture,me=x.image[0]&&x.image[0].isDataTexture,Pe=[];for(let he=0;he<6;he++)!De&&!me?Pe[he]=v(x.image[he],!0,r.maxCubemapSize):Pe[he]=me?x.image[he].image:x.image[he],Pe[he]=ce(x,Pe[he]);const qe=Pe[0],te=a.convert(x.format,x.colorSpace),Te=a.convert(x.type),rt=w(x.internalFormat,te,Te,x.colorSpace),B=x.isVideoTexture!==!0,be=ee.__version===void 0||X===!0,Ae=re.dataReady;let Ve=A(x,qe);ze(n.TEXTURE_CUBE_MAP,x);let Se;if(De){B&&be&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ve,rt,qe.width,qe.height);for(let he=0;he<6;he++){Se=Pe[he].mipmaps;for(let Ge=0;Ge<Se.length;Ge++){const nt=Se[Ge];x.format!==Zn?te!==null?B?Ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ge,0,0,nt.width,nt.height,te,nt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ge,rt,nt.width,nt.height,0,nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?Ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ge,0,0,nt.width,nt.height,te,Te,nt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ge,rt,nt.width,nt.height,0,te,Te,nt.data)}}}else{if(Se=x.mipmaps,B&&be){Se.length>0&&Ve++;const he=se(Pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ve,rt,he.width,he.height)}for(let he=0;he<6;he++)if(me){B?Ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Pe[he].width,Pe[he].height,te,Te,Pe[he].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,rt,Pe[he].width,Pe[he].height,0,te,Te,Pe[he].data);for(let Ge=0;Ge<Se.length;Ge++){const wt=Se[Ge].image[he].image;B?Ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ge+1,0,0,wt.width,wt.height,te,Te,wt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ge+1,rt,wt.width,wt.height,0,te,Te,wt.data)}}else{B?Ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,te,Te,Pe[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,rt,te,Te,Pe[he]);for(let Ge=0;Ge<Se.length;Ge++){const nt=Se[Ge];B?Ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ge+1,0,0,te,Te,nt.image[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ge+1,rt,te,Te,nt.image[he])}}}m(x)&&p(n.TEXTURE_CUBE_MAP),ee.__version=re.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function Ne(M,x,k,X,re,ee){const xe=a.convert(k.format,k.colorSpace),pe=a.convert(k.type),Re=w(k.internalFormat,xe,pe,k.colorSpace),De=i.get(x),me=i.get(k);if(me.__renderTarget=x,!De.__hasExternalTextures){const Pe=Math.max(1,x.width>>ee),qe=Math.max(1,x.height>>ee);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,ee,Re,Pe,qe,x.depth,0,xe,pe,null):t.texImage2D(re,ee,Re,Pe,qe,0,xe,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),Y(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,re,me.__webglTexture,0,$(x)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,re,me.__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(M,x,k){if(n.bindRenderbuffer(n.RENDERBUFFER,M),x.depthBuffer){const X=x.depthTexture,re=X&&X.isDepthTexture?X.type:null,ee=_(x.stencilBuffer,re),xe=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=$(x);Y(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,ee,x.width,x.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,ee,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ee,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,M)}else{const X=x.textures;for(let re=0;re<X.length;re++){const ee=X[re],xe=a.convert(ee.format,ee.colorSpace),pe=a.convert(ee.type),Re=w(ee.internalFormat,xe,pe,ee.colorSpace),De=$(x);k&&Y(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,De,Re,x.width,x.height):Y(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De,Re,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Re,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function We(M,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=i.get(x.depthTexture);X.__renderTarget=x,(!X.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Z(x.depthTexture,0);const re=X.__webglTexture,ee=$(x);if(x.depthTexture.format===xs)Y(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0);else if(x.depthTexture.format===ys)Y(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function St(M){const x=i.get(M),k=M.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==M.depthTexture){const X=M.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){const re=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",re)};X.addEventListener("dispose",re),x.__depthDisposeCallback=re}x.__boundDepthTexture=X}if(M.depthTexture&&!x.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const X=M.texture.mipmaps;X&&X.length>0?We(x.__webglFramebuffer[0],M):We(x.__webglFramebuffer,M)}else if(k){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=n.createRenderbuffer(),Oe(x.__webglDepthbuffer[X],M,!1);else{const re=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=x.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,ee)}}else{const X=M.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Oe(x.__webglDepthbuffer,M,!1);else{const re=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,ee)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Qe(M,x,k){const X=i.get(M);x!==void 0&&Ne(X.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&St(M)}function y(M){const x=M.texture,k=i.get(M),X=i.get(x);M.addEventListener("dispose",R);const re=M.textures,ee=M.isWebGLCubeRenderTarget===!0,xe=re.length>1;if(xe||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=x.version,s.memory.textures++),ee){k.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[pe]=[];for(let Re=0;Re<x.mipmaps.length;Re++)k.__webglFramebuffer[pe][Re]=n.createFramebuffer()}else k.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let pe=0;pe<x.mipmaps.length;pe++)k.__webglFramebuffer[pe]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(xe)for(let pe=0,Re=re.length;pe<Re;pe++){const De=i.get(re[pe]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),s.memory.textures++)}if(M.samples>0&&Y(M)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let pe=0;pe<re.length;pe++){const Re=re[pe];k.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[pe]);const De=a.convert(Re.format,Re.colorSpace),me=a.convert(Re.type),Pe=w(Re.internalFormat,De,me,Re.colorSpace,M.isXRRenderTarget===!0),qe=$(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,qe,Pe,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,k.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Oe(k.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),ze(n.TEXTURE_CUBE_MAP,x);for(let pe=0;pe<6;pe++)if(x.mipmaps&&x.mipmaps.length>0)for(let Re=0;Re<x.mipmaps.length;Re++)Ne(k.__webglFramebuffer[pe][Re],M,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re);else Ne(k.__webglFramebuffer[pe],M,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let pe=0,Re=re.length;pe<Re;pe++){const De=re[pe],me=i.get(De);let Pe=n.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(Pe=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Pe,me.__webglTexture),ze(Pe,De),Ne(k.__webglFramebuffer,M,De,n.COLOR_ATTACHMENT0+pe,Pe,0),m(De)&&p(Pe)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(pe=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,X.__webglTexture),ze(pe,x),x.mipmaps&&x.mipmaps.length>0)for(let Re=0;Re<x.mipmaps.length;Re++)Ne(k.__webglFramebuffer[Re],M,x,n.COLOR_ATTACHMENT0,pe,Re);else Ne(k.__webglFramebuffer,M,x,n.COLOR_ATTACHMENT0,pe,0);m(x)&&p(pe),t.unbindTexture()}M.depthBuffer&&St(M)}function C(M){const x=M.textures;for(let k=0,X=x.length;k<X;k++){const re=x[k];if(m(re)){const ee=T(M),xe=i.get(re).__webglTexture;t.bindTexture(ee,xe),p(ee),t.unbindTexture()}}}const U=[],z=[];function N(M){if(M.samples>0){if(Y(M)===!1){const x=M.textures,k=M.width,X=M.height;let re=n.COLOR_BUFFER_BIT;const ee=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(M),pe=x.length>1;if(pe)for(let De=0;De<x.length;De++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const Re=M.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let De=0;De<x.length;De++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[De]);const me=i.get(x[De]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,me,0)}n.blitFramebuffer(0,0,k,X,0,0,k,X,re,n.NEAREST),c===!0&&(U.length=0,z.length=0,U.push(n.COLOR_ATTACHMENT0+De),M.depthBuffer&&M.resolveDepthBuffer===!1&&(U.push(ee),z.push(ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,U))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let De=0;De<x.length;De++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,xe.__webglColorRenderbuffer[De]);const me=i.get(x[De]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,me,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){const x=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function $(M){return Math.min(r.maxSamples,M.samples)}function Y(M){const x=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function K(M){const x=s.render.frame;u.get(M)!==x&&(u.set(M,x),M.update())}function ce(M,x){const k=M.colorSpace,X=M.format,re=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||k!==La&&k!==ar&&(xt.getTransfer(k)===Pt?(X!==Zn||re!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),x}function se(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=O,this.setTexture2D=Z,this.setTexture2DArray=W,this.setTexture3D=oe,this.setTextureCube=Q,this.rebindTextures=Qe,this.setupRenderTarget=y,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=Y}function EC(n,e){function t(i,r=ar){let a;const s=xt.getTransfer(r);if(i===zi)return n.UNSIGNED_BYTE;if(i===ad)return n.UNSIGNED_SHORT_4_4_4_4;if(i===sd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ag)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ig)return n.BYTE;if(i===rg)return n.SHORT;if(i===vs)return n.UNSIGNED_SHORT;if(i===rd)return n.INT;if(i===Gr)return n.UNSIGNED_INT;if(i===ki)return n.FLOAT;if(i===ka)return n.HALF_FLOAT;if(i===sg)return n.ALPHA;if(i===og)return n.RGB;if(i===Zn)return n.RGBA;if(i===xs)return n.DEPTH_COMPONENT;if(i===ys)return n.DEPTH_STENCIL;if(i===lg)return n.RED;if(i===od)return n.RED_INTEGER;if(i===cg)return n.RG;if(i===ld)return n.RG_INTEGER;if(i===cd)return n.RGBA_INTEGER;if(i===Lo||i===Do||i===Io||i===Uo)if(s===Pt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Lo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Do)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Io)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Uo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Lo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Do)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Io)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Uo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Kc||i===Jc||i===Qc||i===eu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Kc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===eu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===tu||i===nu||i===iu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===tu||i===nu)return s===Pt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===iu)return s===Pt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ru||i===au||i===su||i===ou||i===lu||i===cu||i===uu||i===du||i===hu||i===fu||i===pu||i===mu||i===gu||i===vu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===ru)return s===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===au)return s===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===su)return s===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ou)return s===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lu)return s===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cu)return s===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===uu)return s===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===du)return s===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===hu)return s===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fu)return s===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pu)return s===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===mu)return s===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gu)return s===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vu)return s===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ko||i===_u||i===xu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===ko)return s===Pt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_u)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ug||i===yu||i===bu||i===Su)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===ko)return a.COMPRESSED_RED_RGTC1_EXT;if(i===yu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===bu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Su)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_s?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Wg extends Tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const TC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class CC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Wg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ni({vertexShader:TC,fragmentShader:AC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new hi(new fl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RC extends Na{constructor(e,t){super();const i=this;let r=null,a=1,s=null,o="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null;const v=new CC,m={},p=t.getContextAttributes();let T=null,w=null;const _=[],A=[],D=new Le;let R=null;const I=new $n;I.viewport=new Wt;const S=new $n;S.viewport=new Wt;const b=[I,S],P=new jM;let O=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let Me=_[le];return Me===void 0&&(Me=new cc,_[le]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(le){let Me=_[le];return Me===void 0&&(Me=new cc,_[le]=Me),Me.getGripSpace()},this.getHand=function(le){let Me=_[le];return Me===void 0&&(Me=new cc,_[le]=Me),Me.getHandSpace()};function H(le){const Me=A.indexOf(le.inputSource);if(Me===-1)return;const _e=_[Me];_e!==void 0&&(_e.update(le.inputSource,le.frame,l||s),_e.dispatchEvent({type:le.type,data:le.inputSource}))}function Z(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",W);for(let le=0;le<_.length;le++){const Me=A[le];Me!==null&&(A[le]=null,_[le].disconnect(Me))}O=null,V=null,v.reset();for(const le in m)delete m[le];e.setRenderTarget(T),f=null,h=null,d=null,r=null,w=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){a=le,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){o=le,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(le){l=le},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(le){if(r=le,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",W),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(D),typeof XRWebGLBinding<"u"&&(d=new XRWebGLBinding(r,t)),d!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Ne=null,Oe=null;p.depth&&(Oe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=p.stencil?ys:xs,Ne=p.stencil?_s:Gr);const We={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:a};h=d.createProjectionLayer(We),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),w=new dr(h.textureWidth,h.textureHeight,{format:Zn,type:zi,depthTexture:new Mg(h.textureWidth,h.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const _e={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(r,t,_e),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new dr(f.framebufferWidth,f.framebufferHeight,{format:Zn,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await r.requestReferenceSpace(o),Je.setContext(r),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function W(le){for(let Me=0;Me<le.removed.length;Me++){const _e=le.removed[Me],Ne=A.indexOf(_e);Ne>=0&&(A[Ne]=null,_[Ne].disconnect(_e))}for(let Me=0;Me<le.added.length;Me++){const _e=le.added[Me];let Ne=A.indexOf(_e);if(Ne===-1){for(let We=0;We<_.length;We++)if(We>=A.length){A.push(_e),Ne=We;break}else if(A[We]===null){A[We]=_e,Ne=We;break}if(Ne===-1)break}const Oe=_[Ne];Oe&&Oe.connect(_e)}}const oe=new j,Q=new j;function ve(le,Me,_e){oe.setFromMatrixPosition(Me.matrixWorld),Q.setFromMatrixPosition(_e.matrixWorld);const Ne=oe.distanceTo(Q),Oe=Me.projectionMatrix.elements,We=_e.projectionMatrix.elements,St=Oe[14]/(Oe[10]-1),Qe=Oe[14]/(Oe[10]+1),y=(Oe[9]+1)/Oe[5],C=(Oe[9]-1)/Oe[5],U=(Oe[8]-1)/Oe[0],z=(We[8]+1)/We[0],N=St*U,$=St*z,Y=Ne/(-U+z),K=Y*-U;if(Me.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(K),le.translateZ(Y),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),Oe[10]===-1)le.projectionMatrix.copy(Me.projectionMatrix),le.projectionMatrixInverse.copy(Me.projectionMatrixInverse);else{const ce=St+Y,se=Qe+Y,M=N-K,x=$+(Ne-K),k=y*Qe/se*ce,X=C*Qe/se*ce;le.projectionMatrix.makePerspective(M,x,k,X,ce,se),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function we(le,Me){Me===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(Me.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(r===null)return;let Me=le.near,_e=le.far;v.texture!==null&&(v.depthNear>0&&(Me=v.depthNear),v.depthFar>0&&(_e=v.depthFar)),P.near=S.near=I.near=Me,P.far=S.far=I.far=_e,(O!==P.near||V!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),O=P.near,V=P.far),P.layers.mask=le.layers.mask|6,I.layers.mask=P.layers.mask&3,S.layers.mask=P.layers.mask&5;const Ne=le.parent,Oe=P.cameras;we(P,Ne);for(let We=0;We<Oe.length;We++)we(Oe[We],Ne);Oe.length===2?ve(P,I,S):P.projectionMatrix.copy(I.projectionMatrix),Ce(le,P,Ne)};function Ce(le,Me,_e){_e===null?le.matrix.copy(Me.matrixWorld):(le.matrix.copy(_e.matrixWorld),le.matrix.invert(),le.matrix.multiply(Me.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(Me.projectionMatrix),le.projectionMatrixInverse.copy(Me.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=bs*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(le){c=le,h!==null&&(h.fixedFoveation=le),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=le)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(P)},this.getCameraTexture=function(le){return m[le]};let ze=null;function et(le,Me){if(u=Me.getViewerPose(l||s),g=Me,u!==null){const _e=u.views;f!==null&&(e.setRenderTargetFramebuffer(w,f.framebuffer),e.setRenderTarget(w));let Ne=!1;_e.length!==P.cameras.length&&(P.cameras.length=0,Ne=!0);for(let Qe=0;Qe<_e.length;Qe++){const y=_e[Qe];let C=null;if(f!==null)C=f.getViewport(y);else{const z=d.getViewSubImage(h,y);C=z.viewport,Qe===0&&(e.setRenderTargetTextures(w,z.colorTexture,z.depthStencilTexture),e.setRenderTarget(w))}let U=b[Qe];U===void 0&&(U=new $n,U.layers.enable(Qe),U.viewport=new Wt,b[Qe]=U),U.matrix.fromArray(y.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(y.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(C.x,C.y,C.width,C.height),Qe===0&&(P.matrix.copy(U.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Ne===!0&&P.cameras.push(U)}const Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const Qe=d.getDepthInformation(_e[0]);Qe&&Qe.isValid&&Qe.texture&&v.init(Qe,r.renderState)}if(Oe&&Oe.includes("camera-access")&&(e.state.unbindTexture(),d))for(let Qe=0;Qe<_e.length;Qe++){const y=_e[Qe].camera;if(y){let C=m[y];C||(C=new Wg,m[y]=C);const U=d.getCameraImage(y);C.sourceTexture=U}}}for(let _e=0;_e<_.length;_e++){const Ne=A[_e],Oe=_[_e];Ne!==null&&Oe!==void 0&&Oe.update(Ne,Me,l||s)}ze&&ze(le,Me),Me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Me}),g=null}const Je=new Bg;Je.setAnimationLoop(et),this.setAnimationLoop=function(le){ze=le},this.dispose=function(){}}}const Cr=new gi,PC=new Ht;function LC(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,_g(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,T,w,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(m,p):p.isMeshToonMaterial?(a(m,p),d(m,p)):p.isMeshPhongMaterial?(a(m,p),u(m,p)):p.isMeshStandardMaterial?(a(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(a(m,p),g(m,p)):p.isMeshDepthMaterial?a(m,p):p.isMeshDistanceMaterial?(a(m,p),v(m,p)):p.isMeshNormalMaterial?a(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,T,w):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),w=T.envMap,_=T.envMapRotation;w&&(m.envMap.value=w,Cr.copy(_),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),m.envMapRotation.value.setFromMatrix4(PC.makeRotationFromEuler(Cr)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function DC(n,e,t,i){let r={},a={},s=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,w){const _=w.program;i.uniformBlockBinding(T,_)}function l(T,w){let _=r[T.id];_===void 0&&(g(T),_=u(T),r[T.id]=_,T.addEventListener("dispose",m));const A=w.program;i.updateUBOMapping(T,A);const D=e.render.frame;a[T.id]!==D&&(h(T),a[T.id]=D)}function u(T){const w=d();T.__bindingPointIndex=w;const _=n.createBuffer(),A=T.__size,D=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,A,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,_),_}function d(){for(let T=0;T<o;T++)if(s.indexOf(T)===-1)return s.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const w=r[T.id],_=T.uniforms,A=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let D=0,R=_.length;D<R;D++){const I=Array.isArray(_[D])?_[D]:[_[D]];for(let S=0,b=I.length;S<b;S++){const P=I[S];if(f(P,D,S,A)===!0){const O=P.__offset,V=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let Z=0;Z<V.length;Z++){const W=V[Z],oe=v(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,O+H,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,H),H+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(T,w,_,A){const D=T.value,R=w+"_"+_;if(A[R]===void 0)return typeof D=="number"||typeof D=="boolean"?A[R]=D:A[R]=D.clone(),!0;{const I=A[R];if(typeof D=="number"||typeof D=="boolean"){if(I!==D)return A[R]=D,!0}else if(I.equals(D)===!1)return I.copy(D),!0}return!1}function g(T){const w=T.uniforms;let _=0;const A=16;for(let R=0,I=w.length;R<I;R++){const S=Array.isArray(w[R])?w[R]:[w[R]];for(let b=0,P=S.length;b<P;b++){const O=S[b],V=Array.isArray(O.value)?O.value:[O.value];for(let H=0,Z=V.length;H<Z;H++){const W=V[H],oe=v(W),Q=_%A,ve=Q%oe.boundary,we=Q+ve;_+=ve,we!==0&&A-we<oe.storage&&(_+=A-we),O.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=_,_+=oe.storage}}}const D=_%A;return D>0&&(_+=A-D),T.__size=_,T.__cache={},this}function v(T){const w={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(w.boundary=4,w.storage=4):T.isVector2?(w.boundary=8,w.storage=8):T.isVector3||T.isColor?(w.boundary=16,w.storage=12):T.isVector4?(w.boundary=16,w.storage=16):T.isMatrix3?(w.boundary=48,w.storage=48):T.isMatrix4?(w.boundary=64,w.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),w}function m(T){const w=T.target;w.removeEventListener("dispose",m);const _=s.indexOf(w.__bindingPointIndex);s.splice(_,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete a[w.id]}function p(){for(const T in r)n.deleteBuffer(r[T]);s=[],r={},a={}}return{bind:c,update:l,dispose:p}}class KC{constructor(e={}){const{canvas:t=Iw(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=s;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const T=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=or,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let A=!1;this._outputColorSpace=zn;let D=0,R=0,I=null,S=-1,b=null;const P=new Wt,O=new Wt;let V=null;const H=new pt(0);let Z=0,W=t.width,oe=t.height,Q=1,ve=null,we=null;const Ce=new Wt(0,0,W,oe),ze=new Wt(0,0,W,oe);let et=!1;const Je=new Sg;let le=!1,Me=!1;const _e=new Ht,Ne=new j,Oe=new Wt,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function Qe(){return I===null?Q:1}let y=i;function C(E,G){return t.getContext(E,G)}try{const E={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${id}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",Ve,!1),t.addEventListener("webglcontextcreationerror",Se,!1),y===null){const G="webgl2";if(y=C(G,E),y===null)throw C(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let U,z,N,$,Y,K,ce,se,M,x,k,X,re,ee,xe,pe,Re,De,me,Pe,qe,te,Te,rt;function B(){U=new G2(y),U.init(),te=new EC(y,U),z=new N2(y,U,e,te),N=new wC(y,U),z.reversedDepthBuffer&&h&&N.buffers.depth.setReversed(!0),$=new q2(y),Y=new uC,K=new MC(y,U,N,Y,z,te,$),ce=new O2(_),se=new H2(_),M=new JM(y),Te=new U2(y,M),x=new W2(y,M,$,Te),k=new Y2(y,x,M,$),me=new $2(y,z,K),pe=new F2(Y),X=new cC(_,ce,se,U,z,Te,pe),re=new LC(_,Y),ee=new hC,xe=new _C(U),De=new I2(_,ce,se,N,k,f,c),Re=new bC(_,k,z),rt=new DC(y,$,z,N),Pe=new k2(y,U,$),qe=new X2(y,U,$),$.programs=X.programs,_.capabilities=z,_.extensions=U,_.properties=Y,_.renderLists=ee,_.shadowMap=Re,_.state=N,_.info=$}B();const be=new RC(_,y);this.xr=be,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const E=U.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=U.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(E){E!==void 0&&(Q=E,this.setSize(W,oe,!1))},this.getSize=function(E){return E.set(W,oe)},this.setSize=function(E,G,ne=!0){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,oe=G,t.width=Math.floor(E*Q),t.height=Math.floor(G*Q),ne===!0&&(t.style.width=E+"px",t.style.height=G+"px"),this.setViewport(0,0,E,G)},this.getDrawingBufferSize=function(E){return E.set(W*Q,oe*Q).floor()},this.setDrawingBufferSize=function(E,G,ne){W=E,oe=G,Q=ne,t.width=Math.floor(E*ne),t.height=Math.floor(G*ne),this.setViewport(0,0,E,G)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(Ce)},this.setViewport=function(E,G,ne,ie){E.isVector4?Ce.set(E.x,E.y,E.z,E.w):Ce.set(E,G,ne,ie),N.viewport(P.copy(Ce).multiplyScalar(Q).round())},this.getScissor=function(E){return E.copy(ze)},this.setScissor=function(E,G,ne,ie){E.isVector4?ze.set(E.x,E.y,E.z,E.w):ze.set(E,G,ne,ie),N.scissor(O.copy(ze).multiplyScalar(Q).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(E){N.setScissorTest(et=E)},this.setOpaqueSort=function(E){ve=E},this.setTransparentSort=function(E){we=E},this.getClearColor=function(E){return E.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(E=!0,G=!0,ne=!0){let ie=0;if(E){let q=!1;if(I!==null){const ye=I.texture.format;q=ye===cd||ye===ld||ye===od}if(q){const ye=I.texture.type,Ue=ye===zi||ye===Gr||ye===vs||ye===_s||ye===ad||ye===sd,Fe=De.getClearColor(),ke=De.getClearAlpha(),$e=Fe.r,je=Fe.g,Xe=Fe.b;Ue?(g[0]=$e,g[1]=je,g[2]=Xe,g[3]=ke,y.clearBufferuiv(y.COLOR,0,g)):(v[0]=$e,v[1]=je,v[2]=Xe,v[3]=ke,y.clearBufferiv(y.COLOR,0,v))}else ie|=y.COLOR_BUFFER_BIT}G&&(ie|=y.DEPTH_BUFFER_BIT),ne&&(ie|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),De.dispose(),ee.dispose(),xe.dispose(),Y.dispose(),ce.dispose(),se.dispose(),k.dispose(),Te.dispose(),rt.dispose(),X.dispose(),be.dispose(),be.removeEventListener("sessionstart",Vt),be.removeEventListener("sessionend",$t),ln.stop()};function Ae(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Ve(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const E=$.autoReset,G=Re.enabled,ne=Re.autoUpdate,ie=Re.needsUpdate,q=Re.type;B(),$.autoReset=E,Re.enabled=G,Re.autoUpdate=ne,Re.needsUpdate=ie,Re.type=q}function Se(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function he(E){const G=E.target;G.removeEventListener("dispose",he),Ge(G)}function Ge(E){nt(E),Y.remove(E)}function nt(E){const G=Y.get(E).programs;G!==void 0&&(G.forEach(function(ne){X.releaseProgram(ne)}),E.isShaderMaterial&&X.releaseShaderCache(E))}this.renderBufferDirect=function(E,G,ne,ie,q,ye){G===null&&(G=We);const Ue=q.isMesh&&q.matrixWorld.determinant()<0,Fe=xr(E,G,ne,ie,q);N.setMaterial(ie,Ue);let ke=ne.index,$e=1;if(ie.wireframe===!0){if(ke=x.getWireframeAttribute(ne),ke===void 0)return;$e=2}const je=ne.drawRange,Xe=ne.attributes.position;let ut=je.start*$e,_t=(je.start+je.count)*$e;ye!==null&&(ut=Math.max(ut,ye.start*$e),_t=Math.min(_t,(ye.start+ye.count)*$e)),ke!==null?(ut=Math.max(ut,0),_t=Math.min(_t,ke.count)):Xe!=null&&(ut=Math.max(ut,0),_t=Math.min(_t,Xe.count));const Ut=_t-ut;if(Ut<0||Ut===1/0)return;Te.setup(q,ie,Fe,ne,ke);let Lt,Tt=Pe;if(ke!==null&&(Lt=M.get(ke),Tt=qe,Tt.setIndex(Lt)),q.isMesh)ie.wireframe===!0?(N.setLineWidth(ie.wireframeLinewidth*Qe()),Tt.setMode(y.LINES)):Tt.setMode(y.TRIANGLES);else if(q.isLine){let Ye=ie.linewidth;Ye===void 0&&(Ye=1),N.setLineWidth(Ye*Qe()),q.isLineSegments?Tt.setMode(y.LINES):q.isLineLoop?Tt.setMode(y.LINE_LOOP):Tt.setMode(y.LINE_STRIP)}else q.isPoints?Tt.setMode(y.POINTS):q.isSprite&&Tt.setMode(y.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Ea("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Tt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(U.get("WEBGL_multi_draw"))Tt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ye=q._multiDrawStarts,kt=q._multiDrawCounts,mt=q._multiDrawCount,un=ke?M.get(ke).bytesPerElement:1,Gi=Y.get(ie).currentProgram.getUniforms();for(let xn=0;xn<mt;xn++)Gi.setValue(y,"_gl_DrawID",xn),Tt.render(Ye[xn]/un,kt[xn])}else if(q.isInstancedMesh)Tt.renderInstances(ut,Ut,q.count);else if(ne.isInstancedBufferGeometry){const Ye=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,kt=Math.min(ne.instanceCount,Ye);Tt.renderInstances(ut,Ut,kt)}else Tt.render(ut,Ut)};function wt(E,G,ne){E.transparent===!0&&E.side===Ui&&E.forceSinglePass===!1?(E.side=Rn,E.needsUpdate=!0,vr(E,G,ne),E.side=ur,E.needsUpdate=!0,vr(E,G,ne),E.side=Ui):vr(E,G,ne)}this.compile=function(E,G,ne=null){ne===null&&(ne=E),p=xe.get(ne),p.init(G),w.push(p),ne.traverseVisible(function(q){q.isLight&&q.layers.test(G.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),E!==ne&&E.traverseVisible(function(q){q.isLight&&q.layers.test(G.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();const ie=new Set;return E.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const ye=q.material;if(ye)if(Array.isArray(ye))for(let Ue=0;Ue<ye.length;Ue++){const Fe=ye[Ue];wt(Fe,ne,q),ie.add(Fe)}else wt(ye,ne,q),ie.add(ye)}),p=w.pop(),ie},this.compileAsync=function(E,G,ne=null){const ie=this.compile(E,G,ne);return new Promise(q=>{function ye(){if(ie.forEach(function(Ue){Y.get(Ue).currentProgram.isReady()&&ie.delete(Ue)}),ie.size===0){q(E);return}setTimeout(ye,10)}U.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let vt=null;function Bt(E){vt&&vt(E)}function Vt(){ln.stop()}function $t(){ln.start()}const ln=new Bg;ln.setAnimationLoop(Bt),typeof self<"u"&&ln.setContext(self),this.setAnimationLoop=function(E){vt=E,be.setAnimationLoop(E),E===null?ln.stop():ln.start()},be.addEventListener("sessionstart",Vt),be.addEventListener("sessionend",$t),this.render=function(E,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(G),G=be.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,G,I),p=xe.get(E,w.length),p.init(G),w.push(p),_e.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Je.setFromProjectionMatrix(_e,di,G.reversedDepth),Me=this.localClippingEnabled,le=pe.init(this.clippingPlanes,Me),m=ee.get(E,T.length),m.init(),T.push(m),be.enabled===!0&&be.isPresenting===!0){const ye=_.xr.getDepthSensingMesh();ye!==null&&mr(ye,G,-1/0,_.sortObjects)}mr(E,G,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ve,we),St=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,St&&De.addToRenderList(m,E),this.info.render.frame++,le===!0&&pe.beginShadows();const ne=p.state.shadowsArray;Re.render(ne,E,G),le===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=m.opaque,q=m.transmissive;if(p.setupLights(),G.isArrayCamera){const ye=G.cameras;if(q.length>0)for(let Ue=0,Fe=ye.length;Ue<Fe;Ue++){const ke=ye[Ue];$r(ie,q,E,ke)}St&&De.render(E);for(let Ue=0,Fe=ye.length;Ue<Fe;Ue++){const ke=ye[Ue];Hi(m,E,ke,ke.viewport)}}else q.length>0&&$r(ie,q,E,G),St&&De.render(E),Hi(m,E,G);I!==null&&R===0&&(K.updateMultisampleRenderTarget(I),K.updateRenderTargetMipmap(I)),E.isScene===!0&&E.onAfterRender(_,E,G),Te.resetDefaultState(),S=-1,b=null,w.pop(),w.length>0?(p=w[w.length-1],le===!0&&pe.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function mr(E,G,ne,ie){if(E.visible===!1)return;if(E.layers.test(G.layers)){if(E.isGroup)ne=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(G);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Je.intersectsSprite(E)){ie&&Oe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(_e);const Ue=k.update(E),Fe=E.material;Fe.visible&&m.push(E,Ue,Fe,ne,Oe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Je.intersectsObject(E))){const Ue=k.update(E),Fe=E.material;if(ie&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Oe.copy(E.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Oe.copy(Ue.boundingSphere.center)),Oe.applyMatrix4(E.matrixWorld).applyMatrix4(_e)),Array.isArray(Fe)){const ke=Ue.groups;for(let $e=0,je=ke.length;$e<je;$e++){const Xe=ke[$e],ut=Fe[Xe.materialIndex];ut&&ut.visible&&m.push(E,Ue,ut,ne,Oe.z,Xe)}}else Fe.visible&&m.push(E,Ue,Fe,ne,Oe.z,null)}}const ye=E.children;for(let Ue=0,Fe=ye.length;Ue<Fe;Ue++)mr(ye[Ue],G,ne,ie)}function Hi(E,G,ne,ie){const q=E.opaque,ye=E.transmissive,Ue=E.transparent;p.setupLightsView(ne),le===!0&&pe.setGlobalState(_.clippingPlanes,ne),ie&&N.viewport(P.copy(ie)),q.length>0&&ii(q,G,ne),ye.length>0&&ii(ye,G,ne),Ue.length>0&&ii(Ue,G,ne),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function $r(E,G,ne,ie){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ie.id]===void 0&&(p.state.transmissionRenderTarget[ie.id]=new dr(1,1,{generateMipmaps:!0,type:U.has("EXT_color_buffer_half_float")||U.has("EXT_color_buffer_float")?ka:zi,minFilter:Fr,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace}));const ye=p.state.transmissionRenderTarget[ie.id],Ue=ie.viewport||P;ye.setSize(Ue.z*_.transmissionResolutionScale,Ue.w*_.transmissionResolutionScale);const Fe=_.getRenderTarget(),ke=_.getActiveCubeFace(),$e=_.getActiveMipmapLevel();_.setRenderTarget(ye),_.getClearColor(H),Z=_.getClearAlpha(),Z<1&&_.setClearColor(16777215,.5),_.clear(),St&&De.render(ne);const je=_.toneMapping;_.toneMapping=or;const Xe=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),p.setupLightsView(ie),le===!0&&pe.setGlobalState(_.clippingPlanes,ie),ii(E,ne,ie),K.updateMultisampleRenderTarget(ye),K.updateRenderTargetMipmap(ye),U.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let _t=0,Ut=G.length;_t<Ut;_t++){const Lt=G[_t],Tt=Lt.object,Ye=Lt.geometry,kt=Lt.material,mt=Lt.group;if(kt.side===Ui&&Tt.layers.test(ie.layers)){const un=kt.side;kt.side=Rn,kt.needsUpdate=!0,gr(Tt,ne,ie,Ye,kt,mt),kt.side=un,kt.needsUpdate=!0,ut=!0}}ut===!0&&(K.updateMultisampleRenderTarget(ye),K.updateRenderTargetMipmap(ye))}_.setRenderTarget(Fe,ke,$e),_.setClearColor(H,Z),Xe!==void 0&&(ie.viewport=Xe),_.toneMapping=je}function ii(E,G,ne){const ie=G.isScene===!0?G.overrideMaterial:null;for(let q=0,ye=E.length;q<ye;q++){const Ue=E[q],Fe=Ue.object,ke=Ue.geometry,$e=Ue.group;let je=Ue.material;je.allowOverride===!0&&ie!==null&&(je=ie),Fe.layers.test(ne.layers)&&gr(Fe,G,ne,ke,je,$e)}}function gr(E,G,ne,ie,q,ye){E.onBeforeRender(_,G,ne,ie,q,ye),E.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(_,G,ne,ie,E,ye),q.transparent===!0&&q.side===Ui&&q.forceSinglePass===!1?(q.side=Rn,q.needsUpdate=!0,_.renderBufferDirect(ne,G,ie,q,E,ye),q.side=ur,q.needsUpdate=!0,_.renderBufferDirect(ne,G,ie,q,E,ye),q.side=Ui):_.renderBufferDirect(ne,G,ie,q,E,ye),E.onAfterRender(_,G,ne,ie,q,ye)}function vr(E,G,ne){G.isScene!==!0&&(G=We);const ie=Y.get(E),q=p.state.lights,ye=p.state.shadowsArray,Ue=q.state.version,Fe=X.getParameters(E,q.state,ye,G,ne),ke=X.getProgramCacheKey(Fe);let $e=ie.programs;ie.environment=E.isMeshStandardMaterial?G.environment:null,ie.fog=G.fog,ie.envMap=(E.isMeshStandardMaterial?se:ce).get(E.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&E.envMap===null?G.environmentRotation:E.envMapRotation,$e===void 0&&(E.addEventListener("dispose",he),$e=new Map,ie.programs=$e);let je=$e.get(ke);if(je!==void 0){if(ie.currentProgram===je&&ie.lightsStateVersion===Ue)return Yr(E,Fe),je}else Fe.uniforms=X.getUniforms(E),E.onBeforeCompile(Fe,_),je=X.acquireProgram(Fe,ke),$e.set(ke,je),ie.uniforms=Fe.uniforms;const Xe=ie.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Xe.clippingPlanes=pe.uniform),Yr(E,Fe),ie.needsLights=cn(E),ie.lightsStateVersion=Ue,ie.needsLights&&(Xe.ambientLightColor.value=q.state.ambient,Xe.lightProbe.value=q.state.probe,Xe.directionalLights.value=q.state.directional,Xe.directionalLightShadows.value=q.state.directionalShadow,Xe.spotLights.value=q.state.spot,Xe.spotLightShadows.value=q.state.spotShadow,Xe.rectAreaLights.value=q.state.rectArea,Xe.ltc_1.value=q.state.rectAreaLTC1,Xe.ltc_2.value=q.state.rectAreaLTC2,Xe.pointLights.value=q.state.point,Xe.pointLightShadows.value=q.state.pointShadow,Xe.hemisphereLights.value=q.state.hemi,Xe.directionalShadowMap.value=q.state.directionalShadowMap,Xe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Xe.spotShadowMap.value=q.state.spotShadowMap,Xe.spotLightMatrix.value=q.state.spotLightMatrix,Xe.spotLightMap.value=q.state.spotLightMap,Xe.pointShadowMap.value=q.state.pointShadowMap,Xe.pointShadowMatrix.value=q.state.pointShadowMatrix),ie.currentProgram=je,ie.uniformsList=null,je}function _r(E){if(E.uniformsList===null){const G=E.currentProgram.getUniforms();E.uniformsList=No.seqWithValue(G.seq,E.uniforms)}return E.uniformsList}function Yr(E,G){const ne=Y.get(E);ne.outputColorSpace=G.outputColorSpace,ne.batching=G.batching,ne.batchingColor=G.batchingColor,ne.instancing=G.instancing,ne.instancingColor=G.instancingColor,ne.instancingMorph=G.instancingMorph,ne.skinning=G.skinning,ne.morphTargets=G.morphTargets,ne.morphNormals=G.morphNormals,ne.morphColors=G.morphColors,ne.morphTargetsCount=G.morphTargetsCount,ne.numClippingPlanes=G.numClippingPlanes,ne.numIntersection=G.numClipIntersection,ne.vertexAlphas=G.vertexAlphas,ne.vertexTangents=G.vertexTangents,ne.toneMapping=G.toneMapping}function xr(E,G,ne,ie,q){G.isScene!==!0&&(G=We),K.resetTextureUnits();const ye=G.fog,Ue=ie.isMeshStandardMaterial?G.environment:null,Fe=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:La,ke=(ie.isMeshStandardMaterial?se:ce).get(ie.envMap||Ue),$e=ie.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,je=!!ne.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Xe=!!ne.morphAttributes.position,ut=!!ne.morphAttributes.normal,_t=!!ne.morphAttributes.color;let Ut=or;ie.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ut=_.toneMapping);const Lt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Tt=Lt!==void 0?Lt.length:0,Ye=Y.get(ie),kt=p.state.lights;if(le===!0&&(Me===!0||E!==b)){const Mt=E===b&&ie.id===S;pe.setState(ie,E,Mt)}let mt=!1;ie.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==kt.state.version||Ye.outputColorSpace!==Fe||q.isBatchedMesh&&Ye.batching===!1||!q.isBatchedMesh&&Ye.batching===!0||q.isBatchedMesh&&Ye.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ye.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ye.instancing===!1||!q.isInstancedMesh&&Ye.instancing===!0||q.isSkinnedMesh&&Ye.skinning===!1||!q.isSkinnedMesh&&Ye.skinning===!0||q.isInstancedMesh&&Ye.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ye.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ye.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ye.instancingMorph===!1&&q.morphTexture!==null||Ye.envMap!==ke||ie.fog===!0&&Ye.fog!==ye||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==pe.numPlanes||Ye.numIntersection!==pe.numIntersection)||Ye.vertexAlphas!==$e||Ye.vertexTangents!==je||Ye.morphTargets!==Xe||Ye.morphNormals!==ut||Ye.morphColors!==_t||Ye.toneMapping!==Ut||Ye.morphTargetsCount!==Tt)&&(mt=!0):(mt=!0,Ye.__version=ie.version);let un=Ye.currentProgram;mt===!0&&(un=vr(ie,G,q));let Gi=!1,xn=!1,_i=!1;const Nt=un.getUniforms(),An=Ye.uniforms;if(N.useProgram(un.program)&&(Gi=!0,xn=!0,_i=!0),ie.id!==S&&(S=ie.id,xn=!0),Gi||b!==E){N.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Nt.setValue(y,"projectionMatrix",E.projectionMatrix),Nt.setValue(y,"viewMatrix",E.matrixWorldInverse);const rn=Nt.map.cameraPosition;rn!==void 0&&rn.setValue(y,Ne.setFromMatrixPosition(E.matrixWorld)),z.logarithmicDepthBuffer&&Nt.setValue(y,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Nt.setValue(y,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,xn=!0,_i=!0)}if(q.isSkinnedMesh){Nt.setOptional(y,q,"bindMatrix"),Nt.setOptional(y,q,"bindMatrixInverse");const Mt=q.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),Nt.setValue(y,"boneTexture",Mt.boneTexture,K))}q.isBatchedMesh&&(Nt.setOptional(y,q,"batchingTexture"),Nt.setValue(y,"batchingTexture",q._matricesTexture,K),Nt.setOptional(y,q,"batchingIdTexture"),Nt.setValue(y,"batchingIdTexture",q._indirectTexture,K),Nt.setOptional(y,q,"batchingColorTexture"),q._colorsTexture!==null&&Nt.setValue(y,"batchingColorTexture",q._colorsTexture,K));const At=ne.morphAttributes;if((At.position!==void 0||At.normal!==void 0||At.color!==void 0)&&me.update(q,ne,un),(xn||Ye.receiveShadow!==q.receiveShadow)&&(Ye.receiveShadow=q.receiveShadow,Nt.setValue(y,"receiveShadow",q.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(An.envMap.value=ke,An.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&G.environment!==null&&(An.envMapIntensity.value=G.environmentIntensity),xn&&(Nt.setValue(y,"toneMappingExposure",_.toneMappingExposure),Ye.needsLights&&Et(An,_i),ye&&ie.fog===!0&&re.refreshFogUniforms(An,ye),re.refreshMaterialUniforms(An,ie,Q,oe,p.state.transmissionRenderTarget[E.id]),No.upload(y,_r(Ye),An,K)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(No.upload(y,_r(Ye),An,K),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Nt.setValue(y,"center",q.center),Nt.setValue(y,"modelViewMatrix",q.modelViewMatrix),Nt.setValue(y,"normalMatrix",q.normalMatrix),Nt.setValue(y,"modelMatrix",q.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const Mt=ie.uniformsGroups;for(let rn=0,jr=Mt.length;rn<jr;rn++){const ri=Mt[rn];rt.update(ri,un),rt.bind(ri,un)}}return un}function Et(E,G){E.ambientLightColor.needsUpdate=G,E.lightProbe.needsUpdate=G,E.directionalLights.needsUpdate=G,E.directionalLightShadows.needsUpdate=G,E.pointLights.needsUpdate=G,E.pointLightShadows.needsUpdate=G,E.spotLights.needsUpdate=G,E.spotLightShadows.needsUpdate=G,E.rectAreaLights.needsUpdate=G,E.hemisphereLights.needsUpdate=G}function cn(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,G,ne){const ie=Y.get(E);ie.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),Y.get(E.texture).__webglTexture=G,Y.get(E.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:ne,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,G){const ne=Y.get(E);ne.__webglFramebuffer=G,ne.__useDefaultFramebuffer=G===void 0};const nn=y.createFramebuffer();this.setRenderTarget=function(E,G=0,ne=0){I=E,D=G,R=ne;let ie=!0,q=null,ye=!1,Ue=!1;if(E){const ke=Y.get(E);if(ke.__useDefaultFramebuffer!==void 0)N.bindFramebuffer(y.FRAMEBUFFER,null),ie=!1;else if(ke.__webglFramebuffer===void 0)K.setupRenderTarget(E);else if(ke.__hasExternalTextures)K.rebindTextures(E,Y.get(E.texture).__webglTexture,Y.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Xe=E.depthTexture;if(ke.__boundDepthTexture!==Xe){if(Xe!==null&&Y.has(Xe)&&(E.width!==Xe.image.width||E.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(E)}}const $e=E.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ue=!0);const je=Y.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(je[G])?q=je[G][ne]:q=je[G],ye=!0):E.samples>0&&K.useMultisampledRTT(E)===!1?q=Y.get(E).__webglMultisampledFramebuffer:Array.isArray(je)?q=je[ne]:q=je,P.copy(E.viewport),O.copy(E.scissor),V=E.scissorTest}else P.copy(Ce).multiplyScalar(Q).floor(),O.copy(ze).multiplyScalar(Q).floor(),V=et;if(ne!==0&&(q=nn),N.bindFramebuffer(y.FRAMEBUFFER,q)&&ie&&N.drawBuffers(E,q),N.viewport(P),N.scissor(O),N.setScissorTest(V),ye){const ke=Y.get(E.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+G,ke.__webglTexture,ne)}else if(Ue){const ke=G;for(let $e=0;$e<E.textures.length;$e++){const je=Y.get(E.textures[$e]);y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0+$e,je.__webglTexture,ne,ke)}}else if(E!==null&&ne!==0){const ke=Y.get(E.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,ke.__webglTexture,ne)}S=-1},this.readRenderTargetPixels=function(E,G,ne,ie,q,ye,Ue,Fe=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=Y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ue!==void 0&&(ke=ke[Ue]),ke){N.bindFramebuffer(y.FRAMEBUFFER,ke);try{const $e=E.textures[Fe],je=$e.format,Xe=$e.type;if(!z.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!z.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=E.width-ie&&ne>=0&&ne<=E.height-q&&(E.textures.length>1&&y.readBuffer(y.COLOR_ATTACHMENT0+Fe),y.readPixels(G,ne,ie,q,te.convert(je),te.convert(Xe),ye))}finally{const $e=I!==null?Y.get(I).__webglFramebuffer:null;N.bindFramebuffer(y.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(E,G,ne,ie,q,ye,Ue,Fe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=Y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ue!==void 0&&(ke=ke[Ue]),ke)if(G>=0&&G<=E.width-ie&&ne>=0&&ne<=E.height-q){N.bindFramebuffer(y.FRAMEBUFFER,ke);const $e=E.textures[Fe],je=$e.format,Xe=$e.type;if(!z.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!z.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,ut),y.bufferData(y.PIXEL_PACK_BUFFER,ye.byteLength,y.STREAM_READ),E.textures.length>1&&y.readBuffer(y.COLOR_ATTACHMENT0+Fe),y.readPixels(G,ne,ie,q,te.convert(je),te.convert(Xe),0);const _t=I!==null?Y.get(I).__webglFramebuffer:null;N.bindFramebuffer(y.FRAMEBUFFER,_t);const Ut=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await Uw(y,Ut,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,ut),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,ye),y.deleteBuffer(ut),y.deleteSync(Ut),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,G=null,ne=0){const ie=Math.pow(2,-ne),q=Math.floor(E.image.width*ie),ye=Math.floor(E.image.height*ie),Ue=G!==null?G.x:0,Fe=G!==null?G.y:0;K.setTexture2D(E,0),y.copyTexSubImage2D(y.TEXTURE_2D,ne,0,0,Ue,Fe,q,ye),N.unbindTexture()};const gl=y.createFramebuffer(),vl=y.createFramebuffer();this.copyTextureToTexture=function(E,G,ne=null,ie=null,q=0,ye=null){ye===null&&(q!==0?(Ea("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=q,q=0):ye=0);let Ue,Fe,ke,$e,je,Xe,ut,_t,Ut;const Lt=E.isCompressedTexture?E.mipmaps[ye]:E.image;if(ne!==null)Ue=ne.max.x-ne.min.x,Fe=ne.max.y-ne.min.y,ke=ne.isBox3?ne.max.z-ne.min.z:1,$e=ne.min.x,je=ne.min.y,Xe=ne.isBox3?ne.min.z:0;else{const At=Math.pow(2,-q);Ue=Math.floor(Lt.width*At),Fe=Math.floor(Lt.height*At),E.isDataArrayTexture?ke=Lt.depth:E.isData3DTexture?ke=Math.floor(Lt.depth*At):ke=1,$e=0,je=0,Xe=0}ie!==null?(ut=ie.x,_t=ie.y,Ut=ie.z):(ut=0,_t=0,Ut=0);const Tt=te.convert(G.format),Ye=te.convert(G.type);let kt;G.isData3DTexture?(K.setTexture3D(G,0),kt=y.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(K.setTexture2DArray(G,0),kt=y.TEXTURE_2D_ARRAY):(K.setTexture2D(G,0),kt=y.TEXTURE_2D),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,G.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,G.unpackAlignment);const mt=y.getParameter(y.UNPACK_ROW_LENGTH),un=y.getParameter(y.UNPACK_IMAGE_HEIGHT),Gi=y.getParameter(y.UNPACK_SKIP_PIXELS),xn=y.getParameter(y.UNPACK_SKIP_ROWS),_i=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,Lt.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,Lt.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,$e),y.pixelStorei(y.UNPACK_SKIP_ROWS,je),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Xe);const Nt=E.isDataArrayTexture||E.isData3DTexture,An=G.isDataArrayTexture||G.isData3DTexture;if(E.isDepthTexture){const At=Y.get(E),Mt=Y.get(G),rn=Y.get(At.__renderTarget),jr=Y.get(Mt.__renderTarget);N.bindFramebuffer(y.READ_FRAMEBUFFER,rn.__webglFramebuffer),N.bindFramebuffer(y.DRAW_FRAMEBUFFER,jr.__webglFramebuffer);for(let ri=0;ri<ke;ri++)Nt&&(y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Y.get(E).__webglTexture,q,Xe+ri),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Y.get(G).__webglTexture,ye,Ut+ri)),y.blitFramebuffer($e,je,Ue,Fe,ut,_t,Ue,Fe,y.DEPTH_BUFFER_BIT,y.NEAREST);N.bindFramebuffer(y.READ_FRAMEBUFFER,null),N.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(q!==0||E.isRenderTargetTexture||Y.has(E)){const At=Y.get(E),Mt=Y.get(G);N.bindFramebuffer(y.READ_FRAMEBUFFER,gl),N.bindFramebuffer(y.DRAW_FRAMEBUFFER,vl);for(let rn=0;rn<ke;rn++)Nt?y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,At.__webglTexture,q,Xe+rn):y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,At.__webglTexture,q),An?y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Mt.__webglTexture,ye,Ut+rn):y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Mt.__webglTexture,ye),q!==0?y.blitFramebuffer($e,je,Ue,Fe,ut,_t,Ue,Fe,y.COLOR_BUFFER_BIT,y.NEAREST):An?y.copyTexSubImage3D(kt,ye,ut,_t,Ut+rn,$e,je,Ue,Fe):y.copyTexSubImage2D(kt,ye,ut,_t,$e,je,Ue,Fe);N.bindFramebuffer(y.READ_FRAMEBUFFER,null),N.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else An?E.isDataTexture||E.isData3DTexture?y.texSubImage3D(kt,ye,ut,_t,Ut,Ue,Fe,ke,Tt,Ye,Lt.data):G.isCompressedArrayTexture?y.compressedTexSubImage3D(kt,ye,ut,_t,Ut,Ue,Fe,ke,Tt,Lt.data):y.texSubImage3D(kt,ye,ut,_t,Ut,Ue,Fe,ke,Tt,Ye,Lt):E.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,ye,ut,_t,Ue,Fe,Tt,Ye,Lt.data):E.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,ye,ut,_t,Lt.width,Lt.height,Tt,Lt.data):y.texSubImage2D(y.TEXTURE_2D,ye,ut,_t,Ue,Fe,Tt,Ye,Lt);y.pixelStorei(y.UNPACK_ROW_LENGTH,mt),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,un),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Gi),y.pixelStorei(y.UNPACK_SKIP_ROWS,xn),y.pixelStorei(y.UNPACK_SKIP_IMAGES,_i),ye===0&&G.generateMipmaps&&y.generateMipmap(kt),N.unbindTexture()},this.copyTextureToTexture3D=function(E,G,ne=null,ie=null,q=0){return Ea('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,G,ne,ie,q)},this.initRenderTarget=function(E){Y.get(E).__webglFramebuffer===void 0&&K.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?K.setTextureCube(E,0):E.isData3DTexture?K.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?K.setTexture2DArray(E,0):K.setTexture2D(E,0),N.unbindTexture()},this.resetState=function(){D=0,R=0,I=null,N.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}}const IC={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ml{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const UC=new Og(-1,1,1,-1,0,1);class kC extends Ln{constructor(){super(),this.setAttribute("position",new Ot([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ot([0,2,0,0,2,0],2))}}const NC=new kC;class FC{constructor(e){this._mesh=new hi(NC,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,UC)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class OC extends ml{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ni?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=xg.clone(e.uniforms),this.material=new ni({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new FC(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class mp extends ml{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,s,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}}class BC extends ml{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class JC{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Le);this._width=i.width,this._height=i.height,t=new dr(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ka}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new OC(IC),this.copyPass.material.blending=Oi,this.clock=new ZM}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,a=this.passes.length;r<a;r++){const s=this.passes[r];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}mp!==void 0&&(s instanceof mp?i=!0:s instanceof BC&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class QC extends ml{constructor(e,t,i=null,r=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new pt}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let a,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=r}}export{zi as $,dr as A,Rn as B,GC as C,zw as D,JC as E,ei as F,pf as G,ka as H,FC as I,qC as J,Mg as K,ui as L,VC as M,Oi as N,Og as O,$n as P,Ls as Q,lg as R,zn as S,Wt as T,xg as U,j as V,KC as W,cf as X,OC as Z,Fg as _,HC as a,$C as a0,Nr as a1,ZC as a2,Ug as a3,Eg as a4,hi as b,Ng as c,mg as d,QC as e,pt as f,Le as g,XC as h,jC as i,wg as j,Ln as k,oM as l,YC as m,fl as n,ZM as o,cs as p,kg as q,mi as r,Is as s,WC as t,po as u,gi as v,Ui as w,ml as x,ni as y,IC as z};
