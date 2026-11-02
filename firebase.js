var FB=(()=>{var $s=Object.defineProperty;var $f=Object.getOwnPropertyDescriptor;var Hf=Object.getOwnPropertyNames;var Wf=Object.prototype.hasOwnProperty;var Qf=(n,e)=>{for(var t in e)$s(n,t,{get:e[t],enumerable:!0})},Jf=(n,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Hf(e))!Wf.call(n,i)&&i!==t&&$s(n,i,{get:()=>e[i],enumerable:!(r=$f(e,i))||r.enumerable});return n};var Yf=n=>Jf($s({},"__esModule",{value:!0}),n);var iv={};Qf(iv,{collection:()=>Wd,deleteDoc:()=>uf,doc:()=>Qd,getAuth:()=>Wo,getDocs:()=>af,getFirestore:()=>Jd,initializeApp:()=>go,onAuthStateChanged:()=>Go,onSnapshot:()=>lf,sendPasswordResetEmail:()=>jo,setDoc:()=>cf,signInWithEmailAndPassword:()=>zo,signOut:()=>Ko});var el=function(n){let e=[],t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Xf=function(n){let e=[],t=0,r=0;for(;t<n.length;){let i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){let o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){let o=n[t++],a=n[t++],u=n[t++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{let o=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},tl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();let t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){let o=n[i],a=i+1<n.length,u=a?n[i+1]:0,h=i+2<n.length,d=h?n[i+2]:0,p=o>>2,E=(o&3)<<4|u>>4,b=(u&15)<<2|d>>6,S=d&63;h||(S=64,a||(b=64)),r.push(t[p],t[E],t[b],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(el(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Xf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();let t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){let o=t[n.charAt(i++)],u=i<n.length?t[n.charAt(i)]:0;++i;let d=i<n.length?t[n.charAt(i)]:64;++i;let E=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||u==null||d==null||E==null)throw new Ws;let b=o<<2|u>>4;if(r.push(b),d!==64){let S=u<<4&240|d>>2;if(r.push(S),E!==64){let N=d<<6&192|E;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Ws=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},Zf=function(n){let e=el(n);return tl.encodeByteArray(e,!0)},Gn=function(n){return Zf(n).replace(/\./g,"")},Js=function(n){try{return tl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function ep(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}var tp=()=>ep().__FIREBASE_DEFAULTS__,np=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;let n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},rp=()=>{if(typeof document=="undefined")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=n&&Js(n[1]);return e&&JSON.parse(e)},Jr=()=>{try{return tp()||np()||rp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ys=n=>{var e,t;return(t=(e=Jr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},nl=n=>{let e=Ys(n);if(!e)return;let t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);let r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Xs=()=>{var n;return(n=Jr())===null||n===void 0?void 0:n.config},Zs=n=>{var e;return(e=Jr())===null||e===void 0?void 0:e[`_${n}`]};var Qr=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}};function rl(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Gn(JSON.stringify(t)),Gn(JSON.stringify(a)),""].join(".")}function se(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function il(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(se())}function ip(){var n;let e=(n=Jr())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function sl(){let n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ol(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function al(){let n=se();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function cl(){return!ip()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function eo(){try{return typeof indexedDB=="object"}catch{return!1}}function ul(){return new Promise((n,e)=>{try{let t=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}var sp="FirebaseError",Ae=class n extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=sp,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qe.prototype.create)}},Qe=class{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?op(o,r):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new Ae(i,u,r)}};function op(n,e){return n.replace(ap,(t,r)=>{let i=e[r];return i!=null?String(i):`<${r}?>`})}var ap=/\{\$([^}]+)}/g;function ll(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function St(n,e){if(n===e)return!0;let t=Object.keys(n),r=Object.keys(e);for(let i of t){if(!r.includes(i))return!1;let o=n[i],a=e[i];if(Zu(o)&&Zu(a)){if(!St(o,a))return!1}else if(o!==a)return!1}for(let i of r)if(!t.includes(i))return!1;return!0}function Zu(n){return n!==null&&typeof n=="object"}function Jt(n){let e=[];for(let[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Yt(n){let e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){let[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function Xt(n){let e=n.indexOf("?");if(!e)return"";let t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function hl(n,e){let t=new Qs(n,e);return t.subscribe.bind(t)}var Qs=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");cp(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Hs),i.error===void 0&&(i.error=Hs),i.complete===void 0&&(i.complete=Hs);let o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function cp(n,e){if(typeof n!="object"||n===null)return!1;for(let t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Hs(){}var ov=4*60*60*1e3;function ce(n){return n&&n._delegate?n._delegate:n}var Re=class{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var Rt="[DEFAULT]";var to=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let r=new Qr;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lp(e))try{this.getOrInitializeService({instanceIdentifier:Rt})}catch{}for(let[t,r]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(t);try{let o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Rt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rt){return this.instances.has(e)}getOptions(e=Rt){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[o,a]of this.instancesDeferred.entries()){let u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(i)}return i}onInit(e,t){var r;let i=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);let a=this.instances.get(i);return a&&e(a,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:up(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Rt){return this.component?this.component.multipleInstances?e:Rt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function up(n){return n===Rt?void 0:n}function lp(n){return n.instantiationMode==="EAGER"}var Yr=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new to(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};var hp=[],B;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(B||(B={}));var dp={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},fp=B.INFO,pp={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},mp=(n,e,...t)=>{if(e<n.logLevel)return;let r=new Date().toISOString(),i=pp[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},ct=class{constructor(e){this.name=e,this._logLevel=fp,this._logHandler=mp,this._userLogHandler=null,hp.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in B))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...e),this._logHandler(this,B.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...e),this._logHandler(this,B.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,B.INFO,...e),this._logHandler(this,B.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,B.WARN,...e),this._logHandler(this,B.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...e),this._logHandler(this,B.ERROR,...e)}};var gp=(n,e)=>e.some(t=>n instanceof t),dl,fl;function _p(){return dl||(dl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yp(){return fl||(fl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var pl=new WeakMap,ro=new WeakMap,ml=new WeakMap,no=new WeakMap,so=new WeakMap;function vp(n){let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(Oe(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&pl.set(t,n)}).catch(()=>{}),so.set(e,n),e}function Ip(n){if(ro.has(n))return;let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});ro.set(n,e)}var io={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ro.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ml.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Oe(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function gl(n){io=n(io)}function wp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){let r=n.call(Xr(this),e,...t);return ml.set(r,e.sort?e.sort():[e]),Oe(r)}:yp().includes(n)?function(...e){return n.apply(Xr(this),e),Oe(pl.get(this))}:function(...e){return Oe(n.apply(Xr(this),e))}}function Ep(n){return typeof n=="function"?wp(n):(n instanceof IDBTransaction&&Ip(n),gp(n,_p())?new Proxy(n,io):n)}function Oe(n){if(n instanceof IDBRequest)return vp(n);if(no.has(n))return no.get(n);let e=Ep(n);return e!==n&&(no.set(n,e),so.set(e,n)),e}var Xr=n=>so.get(n);function yl(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){let a=indexedDB.open(n,e),u=Oe(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Oe(a.result),h.oldVersion,h.newVersion,Oe(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}var Tp=["get","getKey","getAll","getAllKeys","count"],Ap=["put","add","delete","clear"],oo=new Map;function _l(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(oo.get(e))return oo.get(e);let t=e.replace(/FromIndex$/,""),r=e!==t,i=Ap.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Tp.includes(t)))return;let o=async function(a,...u){let h=this.transaction(a,i?"readwrite":"readonly"),d=h.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[t](...u),i&&h.done]))[0]};return oo.set(e,o),o}gl(n=>({...n,get:(e,t,r)=>_l(e,t)||n.get(e,t,r),has:(e,t)=>!!_l(e,t)||n.has(e,t)}));var co=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(bp(t)){let r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}};function bp(n){let e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}var uo="@firebase/app",vl="0.10.5";var Pt=new ct("@firebase/app"),Sp="@firebase/app-compat",Rp="@firebase/analytics-compat",Pp="@firebase/analytics",Cp="@firebase/app-check-compat",Dp="@firebase/app-check",Np="@firebase/auth",kp="@firebase/auth-compat",Op="@firebase/database",xp="@firebase/database-compat",Vp="@firebase/functions",Lp="@firebase/functions-compat",Mp="@firebase/installations",Fp="@firebase/installations-compat",Up="@firebase/messaging",qp="@firebase/messaging-compat",Bp="@firebase/performance",jp="@firebase/performance-compat",zp="@firebase/remote-config",Gp="@firebase/remote-config-compat",Kp="@firebase/storage",$p="@firebase/storage-compat",Hp="@firebase/firestore",Wp="@firebase/vertexai-preview",Qp="@firebase/firestore-compat",Jp="firebase",Yp="10.12.2";var lo="[DEFAULT]",Xp={[uo]:"fire-core",[Sp]:"fire-core-compat",[Pp]:"fire-analytics",[Rp]:"fire-analytics-compat",[Dp]:"fire-app-check",[Cp]:"fire-app-check-compat",[Np]:"fire-auth",[kp]:"fire-auth-compat",[Op]:"fire-rtdb",[xp]:"fire-rtdb-compat",[Vp]:"fire-fn",[Lp]:"fire-fn-compat",[Mp]:"fire-iid",[Fp]:"fire-iid-compat",[Up]:"fire-fcm",[qp]:"fire-fcm-compat",[Bp]:"fire-perf",[jp]:"fire-perf-compat",[zp]:"fire-rc",[Gp]:"fire-rc-compat",[Kp]:"fire-gcs",[$p]:"fire-gcs-compat",[Hp]:"fire-fst",[Qp]:"fire-fst-compat",[Wp]:"fire-vertex","fire-js":"fire-js",[Jp]:"fire-js-all"};var Zr=new Map,Zp=new Map,ho=new Map;function Il(n,e){try{n.container.addComponent(e)}catch(t){Pt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function lt(n){let e=n.name;if(ho.has(e))return Pt.debug(`There were multiple attempts to register component ${e}.`),!1;ho.set(e,n);for(let t of Zr.values())Il(t,n);for(let t of Zp.values())Il(t,n);return!0}function $n(n,e){let t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function xe(n){return n.settings!==void 0}var em={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ut=new Qe("app","Firebase",em);var fo=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Re("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ut.create("app-deleted",{appName:this._name})}};var ht=Yp;function go(n,e={}){let t=n;typeof e!="object"&&(e={name:e});let r=Object.assign({name:lo,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ut.create("bad-app-name",{appName:String(i)});if(t||(t=Xs()),!t)throw ut.create("no-options");let o=Zr.get(i);if(o){if(St(t,o.options)&&St(r,o.config))return o;throw ut.create("duplicate-app",{appName:i})}let a=new Yr(i);for(let h of ho.values())a.addComponent(h);let u=new fo(t,r,a);return Zr.set(i,u),u}function ei(n=lo){let e=Zr.get(n);if(!e&&n===lo&&Xs())return go();if(!e)throw ut.create("no-app",{appName:n});return e}function Ce(n,e,t){var r;let i=(r=Xp[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);let o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){let u=[`Unable to register library "${i}" with version "${e}":`];o&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pt.warn(u.join(" "));return}lt(new Re(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}var tm="firebase-heartbeat-database",nm=1,Kn="firebase-heartbeat-store",ao=null;function Al(){return ao||(ao=yl(tm,nm,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Kn)}catch(t){console.warn(t)}}}}).catch(n=>{throw ut.create("idb-open",{originalErrorMessage:n.message})})),ao}async function rm(n){try{let t=(await Al()).transaction(Kn),r=await t.objectStore(Kn).get(bl(n));return await t.done,r}catch(e){if(e instanceof Ae)Pt.warn(e.message);else{let t=ut.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pt.warn(t.message)}}}async function wl(n,e){try{let r=(await Al()).transaction(Kn,"readwrite");await r.objectStore(Kn).put(e,bl(n)),await r.done}catch(t){if(t instanceof Ae)Pt.warn(t.message);else{let r=ut.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Pt.warn(r.message)}}}function bl(n){return`${n.name}!${n.options.appId}`}var im=1024,sm=30*24*60*60*1e3,po=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new mo(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;let i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=El();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{let u=new Date(a.date).valueOf();return Date.now()-u<=sm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";let t=El(),{heartbeatsToSend:r,unsentEntries:i}=om(this._heartbeatsCache.heartbeats),o=Gn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}};function El(){return new Date().toISOString().substring(0,10)}function om(n,e=im){let t=[],r=n.slice();for(let i of n){let o=t.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Tl(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Tl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}var mo=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eo()?ul().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let t=await rm(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return wl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return wl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}};function Tl(n){return Gn(JSON.stringify({version:2,heartbeats:n})).length}function am(n){lt(new Re("platform-logger",e=>new co(e),"PRIVATE")),lt(new Re("heartbeat",e=>new po(e),"PRIVATE")),Ce(uo,vl,n),Ce(uo,vl,"esm2017"),Ce("fire-js","")}am("");var cm="firebase",um="10.12.2";Ce(cm,um,"app");function ti(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function jl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var zl=jl,Gl=new Qe("auth","Firebase",jl());var ai=new ct("@firebase/auth");function lm(n,...e){ai.logLevel<=B.WARN&&ai.warn(`Auth (${ht}): ${n}`,...e)}function ri(n,...e){ai.logLevel<=B.ERROR&&ai.error(`Auth (${ht}): ${n}`,...e)}function De(n,...e){throw Fo(n,...e)}function Le(n,...e){return Fo(n,...e)}function Kl(n,e,t){let r=Object.assign(Object.assign({},zl()),{[e]:t});return new Qe("auth","Firebase",r).create(e,{appName:n.name})}function ft(n){return Kl(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Fo(n,...e){if(typeof n!="string"){let t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Gl.create(n,...e)}function O(n,e,...t){if(!n)throw Fo(e,...t)}function Ve(n){let e="INTERNAL ASSERTION FAILED: "+n;throw ri(e),new Error(e)}function Ye(n,e){n||Ve(e)}function vo(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function hm(){return Sl()==="http:"||Sl()==="https:"}function Sl(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}function dm(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hm()||sl()||"connection"in navigator)?navigator.onLine:!0}function fm(){if(typeof navigator=="undefined")return null;let n=navigator;return n.languages&&n.languages[0]||n.language||null}var Ct=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ye(t>e,"Short delay should be less than long delay!"),this.isMobile=il()||ol()}get(){return dm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function Uo(n,e){Ye(n.emulator,"Emulator should always be set here");let{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}var ci=class{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;Ve("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;Ve("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;Ve("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var pm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var mm=new Ct(3e4,6e4);function oe(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function he(n,e,t,r,i={}){return $l(n,i,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});let u=Jt(Object.assign({key:n.config.apiKey},a)).slice(1),h=await n._getAdditionalHeaders();return h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode),ci.fetch()(Hl(n,n.config.apiHost,t,u),Object.assign({method:e,headers:h,referrerPolicy:"no-referrer"},o))})}async function $l(n,e,t){n._canInitEmulator=!1;let r=Object.assign(Object.assign({},pm),e);try{let i=new Io(n),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();let a=await o.json();if("needConfirmation"in a)throw Hn(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{let u=o.ok?a.errorMessage:a.error.message,[h,d]=u.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hn(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw Hn(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw Hn(n,"user-disabled",a);let p=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Kl(n,p,d);De(n,p)}}catch(i){if(i instanceof Ae)throw i;De(n,"network-request-failed",{message:String(i)})}}async function Vt(n,e,t,r,i={}){let o=await he(n,e,t,r,i);return"mfaPendingCredential"in o&&De(n,"multi-factor-auth-required",{_serverResponse:o}),o}function Hl(n,e,t,r){let i=`${e}${t}?${r}`;return n.config.emulator?Uo(n.config,i):`${n.config.apiScheme}://${i}`}function gm(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var Io=class{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Le(this.auth,"network-request-failed")),mm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}};function Hn(n,e,t){let r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);let i=Le(n,e,r);return i.customData._tokenResponse=t,i}function Rl(n){return n!==void 0&&n.enterprise!==void 0}var wo=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return gm(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}};async function _m(n,e){return he(n,"GET","/v2/recaptchaConfig",oe(n,e))}async function ym(n,e){return he(n,"POST","/v1/accounts:delete",e)}async function Wl(n,e){return he(n,"POST","/v1/accounts:lookup",e)}function Wn(n){if(n)try{let e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ql(n,e=!1){let t=ce(n),r=await t.getIdToken(e),i=qo(r);O(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");let o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Wn(_o(i.auth_time)),issuedAtTime:Wn(_o(i.iat)),expirationTime:Wn(_o(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function _o(n){return Number(n)*1e3}function qo(n){let[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ri("JWT malformed, contained fewer than 3 sections"),null;try{let i=Js(t);return i?JSON.parse(i):(ri("Failed to decode base64 JWT payload"),null)}catch(i){return ri("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Pl(n){let e=qo(n);return O(e,"internal-error"),O(typeof e.exp!="undefined","internal-error"),O(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}async function Jn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ae&&vm(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function vm({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}var Eo=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;let i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var Yn=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wn(this.lastLoginAt),this.creationTime=Wn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function ui(n){var e;let t=n.auth,r=await n.getIdToken(),i=await Jn(n,Wl(t,{idToken:r}));O(i==null?void 0:i.users.length,t,"internal-error");let o=i.users[0];n._notifyReloadListener(o);let a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Yl(o.providerUserInfo):[],u=Im(n.providerData,a),h=n.isAnonymous,d=!(n.email&&o.passwordHash)&&!(u!=null&&u.length),p=h?d:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Yn(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(n,E)}async function Jl(n){let e=ce(n);await ui(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Im(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Yl(n){return n.map(e=>{var{providerId:t}=e,r=ti(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}async function wm(n,e){let t=await $l(n,{},async()=>{let r=Jt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,a=Hl(n,i,"/v1/token",`key=${o}`),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",ci.fetch()(a,{method:"POST",headers:u,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Em(n,e){return he(n,"POST","/v2/accounts:revokeToken",oe(n,e))}var Qn=class n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken!="undefined","internal-error"),O(typeof e.refreshToken!="undefined","internal-error");let t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Pl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){O(e.length!==0,"internal-error");let t=Pl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:i,expiresIn:o}=await wm(e,t);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){let{refreshToken:r,accessToken:i,expirationTime:o}=t,a=new n;return r&&(O(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(O(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new n,this.toJSON())}_performRefresh(){return Ve("not implemented")}};function dt(n,e){O(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}var en=class n{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,o=ti(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Eo(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Yn(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){let t=await Jn(this,this.stsTokenManager.getToken(this.auth,e));return O(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ql(this,e)}reload(){return Jl(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ui(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xe(this.auth.app))return Promise.reject(ft(this.auth));let e=await this.getIdToken();return await Jn(this,ym(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,o,a,u,h,d,p;let E=(r=t.displayName)!==null&&r!==void 0?r:void 0,b=(i=t.email)!==null&&i!==void 0?i:void 0,S=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,N=(a=t.photoURL)!==null&&a!==void 0?a:void 0,x=(u=t.tenantId)!==null&&u!==void 0?u:void 0,D=(h=t._redirectEventId)!==null&&h!==void 0?h:void 0,q=(d=t.createdAt)!==null&&d!==void 0?d:void 0,z=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:G,emailVerified:Y,isAnonymous:ve,providerData:W,stsTokenManager:v}=t;O(G&&v,e,"internal-error");let m=Qn.fromJSON(this.name,v);O(typeof G=="string",e,"internal-error"),dt(E,e.name),dt(b,e.name),O(typeof Y=="boolean",e,"internal-error"),O(typeof ve=="boolean",e,"internal-error"),dt(S,e.name),dt(N,e.name),dt(x,e.name),dt(D,e.name),dt(q,e.name),dt(z,e.name);let _=new n({uid:G,auth:e,email:b,emailVerified:Y,displayName:E,isAnonymous:ve,photoURL:N,phoneNumber:S,tenantId:x,stsTokenManager:m,createdAt:q,lastLoginAt:z});return W&&Array.isArray(W)&&(_.providerData=W.map(y=>Object.assign({},y))),D&&(_._redirectEventId=D),_}static async _fromIdTokenResponse(e,t,r=!1){let i=new Qn;i.updateFromServerResponse(t);let o=new n({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ui(o),o}static async _fromGetAccountInfoResponse(e,t,r){let i=t.users[0];O(i.localId!==void 0,"internal-error");let o=i.providerUserInfo!==void 0?Yl(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),u=new Qn;u.updateFromIdToken(r);let h=new n({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Yn(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,d),h}};var Cl=new Map;function Je(n){Ye(n instanceof Function,"Expected a class definition");let e=Cl.get(n);return e?(Ye(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Cl.set(n,e),e)}var li=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};li.type="NONE";var To=li;function ii(n,e,t){return`firebase:${n}:${e}:${t}`}var hi=class n{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:i,name:o}=this.auth;this.fullUserKey=ii(this.userKey,i.apiKey,o),this.fullPersistenceKey=ii("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?en._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new n(Je(To),e,r);let i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d),o=i[0]||Je(To),a=ii(r,e.config.apiKey,e.name),u=null;for(let d of t)try{let p=await d._get(a);if(p){let E=en._fromJSON(e,p);d!==o&&(u=E),o=d;break}}catch{}let h=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new n(o,e,r):(o=h[0],u&&await o._set(a,u.toJSON()),await Promise.all(t.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new n(o,e,r))}};function Dl(n){let e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(eh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nh(e))return"Blackberry";if(rh(e))return"Webos";if(Bo(e))return"Safari";if((e.includes("chrome/")||Zl(e))&&!e.includes("edge/"))return"Chrome";if(th(e))return"Android";{let t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Xl(n=se()){return/firefox\//i.test(n)}function Bo(n=se()){let e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zl(n=se()){return/crios\//i.test(n)}function eh(n=se()){return/iemobile/i.test(n)}function th(n=se()){return/android/i.test(n)}function nh(n=se()){return/blackberry/i.test(n)}function rh(n=se()){return/webos/i.test(n)}function Ci(n=se()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Tm(n=se()){var e;return Ci(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Am(){return al()&&document.documentMode===10}function ih(n=se()){return Ci(n)||th(n)||rh(n)||nh(n)||/windows phone/i.test(n)||eh(n)}function bm(){try{return!!(window&&window!==window.top)}catch{return!1}}function sh(n,e=[]){let t;switch(n){case"Browser":t=Dl(se());break;case"Worker":t=`${Dl(se())}-${n}`;break;default:t=n}let r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ht}/${r}`}var Ao=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=o=>new Promise((a,u)=>{try{let h=e(o);a(h)}catch(h){u(h)}});r.onAbort=t,this.queue.push(r);let i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(let i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}};async function Sm(n,e={}){return he(n,"GET","/v2/passwordPolicy",oe(n,e))}var Rm=6,bo=class{constructor(e){var t,r,i,o;let a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Rm,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,o,a,u;let h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(t=h.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),h.isValid&&(h.isValid=(r=h.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(i=h.containsLowercaseLetter)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(a=h.containsNumericCharacter)!==null&&a!==void 0?a:!0),h.isValid&&(h.isValid=(u=h.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),h}validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}};var So=class{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new di(this),this.idTokenSubscription=new di(this),this.beforeStateQueue=new Ao(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Je(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await hi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await Wl(this,{idToken:e}),r=await en._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(xe(this.app)){let a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}let r=await this.assertedPersistence.getCurrentUser(),i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=i==null?void 0:i._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===u)&&(h!=null&&h.user)&&(i=h.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ui(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xe(this.app))return Promise.reject(ft(this));let t=e?ce(e):null;return t&&O(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xe(this.app)?Promise.reject(ft(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xe(this.app)?Promise.reject(ft(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Je(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await Sm(this),t=new bo(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qe("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Em(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&Je(e)||this._popupRedirectResolver;O(t,this,"argument-error"),this.redirectPersistenceManager=await hi.create(this,[Je(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};let o=typeof t=="function"?t:t.next.bind(t),a=!1,u=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(u,this,"internal-error"),u.then(()=>{a||o(this.currentUser)}),typeof t=="function"){let h=e.addObserver(t,r,i);return()=>{a=!0,h()}}else{let h=e.addObserver(t);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);let i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;let t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&lm(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}};function pt(n){return ce(n)}var di=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=hl(t=>this.observer=t)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var Di={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Pm(n){Di=n}function oh(n){return Di.loadJS(n)}function Cm(){return Di.recaptchaEnterpriseScript}function Dm(){return Di.gapiScript}function ah(n){return`__${n}${Math.floor(Math.random()*1e6)}`}var Nm="recaptcha-enterprise",km="NO_RECAPTCHA",Ro=class{constructor(e){this.type=Nm,this.auth=pt(e)}async verify(e="verify",t=!1){async function r(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,u)=>{_m(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{let d=new wo(h);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,a(d.siteKey)}}).catch(h=>{u(h)})})}function i(o,a,u){let h=window.grecaptcha;Rl(h)?h.enterprise.ready(()=>{h.enterprise.execute(o,{action:e}).then(d=>{a(d)}).catch(()=>{a(km)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,a)=>{r(this.auth).then(u=>{if(!t&&Rl(window.grecaptcha))i(u,o,a);else{if(typeof window=="undefined"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let h=Cm();h.length!==0&&(h+=u),oh(h).then(()=>{i(u,o,a)}).catch(d=>{a(d)})}}).catch(u=>{a(u)})})}};async function Nl(n,e,t,r=!1){let i=new Ro(n),o;try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}let a=Object.assign({},e);return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Po(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let o=await Nl(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let a=await Nl(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(o)})}function ch(n,e){let t=$n(n,"auth");if(t.isInitialized()){let i=t.getImmediate(),o=t.getOptions();if(St(o,e!=null?e:{}))return i;De(i,"already-initialized")}return t.initialize({options:e})}function Om(n,e){let t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Je);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function uh(n,e,t){let r=pt(n);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");let i=!!(t!=null&&t.disableWarnings),o=lh(e),{host:a,port:u}=xm(e),h=u===null?"":`:${u}`;r.config.emulator={url:`${o}//${a}${h}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Vm()}function lh(n){let e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function xm(n){let e=lh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};let r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){let o=i[1];return{host:o,port:kl(r.substr(o.length+1))}}else{let[o,a]=r.split(":");return{host:o,port:kl(a)}}}function kl(n){if(!n)return null;let e=Number(n);return isNaN(e)?null:e}function Vm(){function n(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}var Dt=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ve("not implemented")}_getIdTokenResponse(e){return Ve("not implemented")}_linkToIdToken(e,t){return Ve("not implemented")}_getReauthenticationResolver(e){return Ve("not implemented")}};async function Lm(n,e){return he(n,"POST","/v1/accounts:signUp",e)}async function Mm(n,e){return Vt(n,"POST","/v1/accounts:signInWithPassword",oe(n,e))}async function Fm(n,e){return he(n,"POST","/v1/accounts:sendOobCode",oe(n,e))}async function Um(n,e){return Fm(n,e)}async function qm(n,e){return Vt(n,"POST","/v1/accounts:signInWithEmailLink",oe(n,e))}async function Bm(n,e){return Vt(n,"POST","/v1/accounts:signInWithEmailLink",oe(n,e))}var Xn=class n extends Dt{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new n(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new n(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Po(e,t,"signInWithPassword",Mm);case"emailLink":return qm(e,{email:this._email,oobCode:this._password});default:De(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":let r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Po(e,r,"signUpPassword",Lm);case"emailLink":return Bm(e,{idToken:t,email:this._email,oobCode:this._password});default:De(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function Zt(n,e){return Vt(n,"POST","/v1/accounts:signInWithIdp",oe(n,e))}var jm="http://localhost",Nt=class n extends Dt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):De("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,o=ti(t,["providerId","signInMethod"]);if(!r||!i)return null;let a=new n(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){let t=this.buildRequest();return Zt(e,t)}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,Zt(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,Zt(e,t)}buildRequest(){let e={requestUri:jm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Jt(t)}return e}};async function zm(n,e){return he(n,"POST","/v1/accounts:sendVerificationCode",oe(n,e))}async function Gm(n,e){return Vt(n,"POST","/v1/accounts:signInWithPhoneNumber",oe(n,e))}async function Km(n,e){let t=await Vt(n,"POST","/v1/accounts:signInWithPhoneNumber",oe(n,e));if(t.temporaryProof)throw Hn(n,"account-exists-with-different-credential",t);return t}var $m={USER_NOT_FOUND:"user-not-found"};async function Hm(n,e){let t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Vt(n,"POST","/v1/accounts:signInWithPhoneNumber",oe(n,t),$m)}var Zn=class n extends Dt{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new n({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new n({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Gm(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Km(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Hm(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:o}=e;return!r&&!t&&!i&&!o?null:new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:o})}};function Wm(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Qm(n){let e=Yt(Xt(n)).link,t=e?Yt(Xt(e)).deep_link_id:null,r=Yt(Xt(n)).deep_link_id;return(r?Yt(Xt(r)).link:null)||r||t||e||n}var fi=class n{constructor(e){var t,r,i,o,a,u;let h=Yt(Xt(e)),d=(t=h.apiKey)!==null&&t!==void 0?t:null,p=(r=h.oobCode)!==null&&r!==void 0?r:null,E=Wm((i=h.mode)!==null&&i!==void 0?i:null);O(d&&p&&E,"argument-error"),this.apiKey=d,this.operation=E,this.code=p,this.continueUrl=(o=h.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(a=h.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(u=h.tenantId)!==null&&u!==void 0?u:null}static parseLink(e){let t=Qm(e);try{return new n(t)}catch{return null}}};var kt=class n{constructor(){this.providerId=n.PROVIDER_ID}static credential(e,t){return Xn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=fi.parseLink(t);return O(r,"argument-error"),Xn._fromEmailAndCode(e,r.code,r.tenantId)}};kt.PROVIDER_ID="password";kt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";kt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";var pi=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};var Ot=class extends pi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};var er=class n extends Ot{constructor(){super("facebook.com")}static credential(e){return Nt._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};er.FACEBOOK_SIGN_IN_METHOD="facebook.com";er.PROVIDER_ID="facebook.com";var tr=class n extends Ot{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Nt._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return n.credential(t,r)}catch{return null}}};tr.GOOGLE_SIGN_IN_METHOD="google.com";tr.PROVIDER_ID="google.com";var nr=class n extends Ot{constructor(){super("github.com")}static credential(e){return Nt._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};nr.GITHUB_SIGN_IN_METHOD="github.com";nr.PROVIDER_ID="github.com";var rr=class n extends Ot{constructor(){super("twitter.com")}static credential(e,t){return Nt._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return n.credential(t,r)}catch{return null}}};rr.TWITTER_SIGN_IN_METHOD="twitter.com";rr.PROVIDER_ID="twitter.com";var ir=class n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){let o=await en._fromIdTokenResponse(e,r,i),a=Ol(r);return new n({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);let i=Ol(r);return new n({user:e,providerId:i,_tokenResponse:r,operationType:t})}};function Ol(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}var Co=class n extends Ae{constructor(e,t,r,i){var o;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,n.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new n(e,t,r,i)}};function hh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Co._fromErrorAndOperation(n,o,e,r):o})}async function Jm(n,e,t=!1){let r=await Jn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ir._forOperation(n,"link",r)}async function Ym(n,e,t=!1){let{auth:r}=n;if(xe(r.app))return Promise.reject(ft(r));let i="reauthenticate";try{let o=await Jn(n,hh(r,i,e,n),t);O(o.idToken,r,"internal-error");let a=qo(o.idToken);O(a,r,"internal-error");let{sub:u}=a;return O(n.uid===u,r,"user-mismatch"),ir._forOperation(n,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&De(r,"user-mismatch"),o}}async function dh(n,e,t=!1){if(xe(n.app))return Promise.reject(ft(n));let r="signIn",i=await hh(n,r,e),o=await ir._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(o.user),o}async function fh(n,e){return dh(pt(n),e)}function Xm(n,e,t){var r;O(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),O(typeof t.dynamicLinkDomain=="undefined"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(O(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(O(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}async function Zm(n){let e=pt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function jo(n,e,t){let r=pt(n),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&Xm(r,i,t),await Po(r,i,"getOobCode",Um)}function zo(n,e,t){return xe(n.app)?Promise.reject(ft(n)):fh(ce(n),kt.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Zm(n),r})}function ph(n,e,t,r){return ce(n).onIdTokenChanged(e,t,r)}function mh(n,e,t){return ce(n).beforeAuthStateChanged(e,t)}function Go(n,e,t,r){return ce(n).onAuthStateChanged(e,t,r)}function Ko(n){return ce(n).signOut()}function eg(n,e){return he(n,"POST","/v2/accounts/mfaEnrollment:start",oe(n,e))}function tg(n,e){return he(n,"POST","/v2/accounts/mfaEnrollment:finalize",oe(n,e))}function ng(n,e){return he(n,"POST","/v2/accounts/mfaEnrollment:start",oe(n,e))}function rg(n,e){return he(n,"POST","/v2/accounts/mfaEnrollment:finalize",oe(n,e))}var mi="__sak";var gi=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(mi,"1"),this.storage.removeItem(mi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};function ig(){let n=se();return Bo(n)||Ci(n)}var sg=1e3,og=10,_i=class extends gi{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ig()&&bm(),this.fallbackToPolling=ih(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,h)=>{this.notifyListeners(a,h)});return}let r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let a=this.storage.getItem(r);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}let i=()=>{let a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);Am()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,og):i()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},sg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};_i.type="LOCAL";var gh=_i;var yi=class extends gi{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}};yi.type="SESSION";var $o=yi;function ag(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}var vi=class n{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;let r=new n(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let t=e,{eventId:r,eventType:i,data:o}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});let u=Array.from(a).map(async d=>d(t.origin,o)),h=await ag(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};vi.receivers=[];function Ho(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}var Do=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((u,h)=>{let d=Ho("",20);i.port1.start();let p=setTimeout(()=>{h(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(E){let b=E;if(b.data.eventId===d)switch(b.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),u(b.data.response);break;default:clearTimeout(p),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}};function Me(){return window}function cg(n){Me().location.href=n}function _h(){return typeof Me().WorkerGlobalScope!="undefined"&&typeof Me().importScripts=="function"}async function ug(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lg(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function hg(){return _h()?self:null}var yh="firebaseLocalStorageDb",dg=1,Ii="firebaseLocalStorage",vh="fbase_key",xt=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function Ni(n,e){return n.transaction([Ii],e?"readwrite":"readonly").objectStore(Ii)}function fg(){let n=indexedDB.deleteDatabase(yh);return new xt(n).toPromise()}function No(){let n=indexedDB.open(yh,dg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{let r=n.result;try{r.createObjectStore(Ii,{keyPath:vh})}catch(i){t(i)}}),n.addEventListener("success",async()=>{let r=n.result;r.objectStoreNames.contains(Ii)?e(r):(r.close(),await fg(),e(await No()))})})}async function xl(n,e,t){let r=Ni(n,!0).put({[vh]:e,value:t});return new xt(r).toPromise()}async function pg(n,e){let t=Ni(n,!1).get(e),r=await new xt(t).toPromise();return r===void 0?null:r.value}function Vl(n,e){let t=Ni(n,!0).delete(e);return new xt(t).toPromise()}var mg=800,gg=3,wi=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await No(),this.db)}async _withRetries(e){let t=0;for(;;)try{let r=await this._openDb();return await e(r)}catch(r){if(t++>gg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _h()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vi._getInstance(hg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ug(),!this.activeServiceWorker)return;this.sender=new Do(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await No();return await xl(e,mi,"1"),await Vl(e,mi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>xl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(r=>pg(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Vl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(i=>{let o=Ni(i,!1).getAll();return new xt(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];let t=[],r=new Set;if(e.length!==0)for(let{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(let i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};wi.type="LOCAL";var Ih=wi;function _g(n,e){return he(n,"POST","/v2/accounts/mfaSignIn:start",oe(n,e))}function yg(n,e){return he(n,"POST","/v2/accounts/mfaSignIn:finalize",oe(n,e))}function vg(n,e){return he(n,"POST","/v2/accounts/mfaSignIn:finalize",oe(n,e))}var Ov=ah("rcb"),xv=new Ct(3e4,6e4);var Ig="recaptcha";async function wg(n,e,t){var r;let i=await t.verify();try{O(typeof i=="string",n,"argument-error"),O(t.type===Ig,n,"argument-error");let o;if(typeof e=="string"?o={phoneNumber:e}:o=e,"session"in o){let a=o.session;if("phoneNumber"in o)return O(a.type==="enroll",n,"internal-error"),(await eg(n,{idToken:a.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{O(a.type==="signin",n,"internal-error");let u=((r=o.multiFactorHint)===null||r===void 0?void 0:r.uid)||o.multiFactorUid;return O(u,n,"missing-multi-factor-info"),(await _g(n,{mfaPendingCredential:a.credential,mfaEnrollmentId:u,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{let{sessionInfo:a}=await zm(n,{phoneNumber:o.phoneNumber,recaptchaToken:i});return a}}finally{t._reset()}}var sr=class n{constructor(e){this.providerId=n.PROVIDER_ID,this.auth=pt(e)}verifyPhoneNumber(e,t){return wg(this.auth,e,ce(t))}static credential(e,t){return Zn._fromVerification(e,t)}static credentialFromResult(e){let t=e;return n.credentialFromTaggedObject(t)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?Zn._fromTokenResponse(t,r):null}};sr.PROVIDER_ID="phone";sr.PHONE_SIGN_IN_METHOD="phone";function Eg(n,e){return e?Je(e):(O(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}var or=class extends Dt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Zt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Zt(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function Tg(n){return dh(n.auth,new or(n),n.bypassAuthState)}function Ag(n){let{auth:e,user:t}=n;return O(t,e,"internal-error"),Ym(t,new or(n),n.bypassAuthState)}async function bg(n){let{auth:e,user:t}=n;return O(t,e,"internal-error"),Jm(t,new or(n),n.bypassAuthState)}var Ei=class{constructor(e,t,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:i,tenantId:o,error:a,type:u}=e;if(a){this.reject(a);return}let h={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Tg;case"linkViaPopup":case"linkViaRedirect":return bg;case"reauthViaPopup":case"reauthViaRedirect":return Ag;default:De(this.auth,"internal-error")}}resolve(e){Ye(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ye(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};var Sg=new Ct(2e3,1e4);var ko=class n extends Ei{constructor(e,t,r,i,o){super(e,t,i,o),this.provider=r,this.authWindow=null,this.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){Ye(this.filter.length===1,"Popup operations only handle one event");let e=Ho();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Le(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Le(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Le(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Sg.get())};e()}};ko.currentPopupAction=null;var Rg="pendingRedirect",si=new Map,Oo=class extends Ei{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=si.get(this.auth._key());if(!e){try{let r=await Pg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}si.set(this.auth._key(),e)}return this.bypassAuthState||si.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function Pg(n,e){let t=Ng(e),r=Dg(n);if(!await r._isAvailable())return!1;let i=await r._get(t)==="true";return await r._remove(t),i}function Cg(n,e){si.set(n._key(),e)}function Dg(n){return Je(n._redirectPersistence)}function Ng(n){return ii(Rg,n.config.apiKey,n.name)}async function kg(n,e,t=!1){if(xe(n.app))return Promise.reject(ft(n));let r=pt(n),i=Eg(r,e),a=await new Oo(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}var Og=10*60*1e3,xo=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xg(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!wh(e)){let i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Le(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Og&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ll(e))}saveEventToCache(e){this.cachedEventUids.add(Ll(e)),this.lastProcessedEventTime=Date.now()}};function Ll(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function wh({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xg(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wh(n);default:return!1}}async function Vg(n,e={}){return he(n,"GET","/v1/projects",e)}var Lg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Mg=/^https?/;async function Fg(n){if(n.config.emulator)return;let{authorizedDomains:e}=await Vg(n);for(let t of e)try{if(Ug(t))return}catch{}De(n,"unauthorized-domain")}function Ug(n){let e=vo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){let a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Mg.test(t))return!1;if(Lg.test(n))return r===n;let i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}var qg=new Ct(3e4,6e4);function Ml(){let n=Me().___jsl;if(n!=null&&n.H){for(let e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Bg(n){return new Promise((e,t)=>{var r,i,o;function a(){Ml(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ml(),t(Le(n,"network-request-failed"))},timeout:qg.get()})}if(!((i=(r=Me().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Me().gapi)===null||o===void 0)&&o.load)a();else{let u=ah("iframefcb");return Me()[u]=()=>{gapi.load?a():t(Le(n,"network-request-failed"))},oh(`${Dm()}?onload=${u}`).catch(h=>t(h))}}).catch(e=>{throw oi=null,e})}var oi=null;function jg(n){return oi=oi||Bg(n),oi}var zg=new Ct(5e3,15e3),Gg="__/auth/iframe",Kg="emulator/auth/iframe",$g={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Hg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Wg(n){let e=n.config;O(e.authDomain,n,"auth-domain-config-required");let t=e.emulator?Uo(e,Kg):`https://${n.config.authDomain}/${Gg}`,r={apiKey:e.apiKey,appName:n.name,v:ht},i=Hg.get(n.config.apiHost);i&&(r.eid=i);let o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${Jt(r).slice(1)}`}async function Qg(n){let e=await jg(n),t=Me().gapi;return O(t,n,"internal-error"),e.open({where:document.body,url:Wg(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$g,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});let a=Le(n,"network-request-failed"),u=Me().setTimeout(()=>{o(a)},zg.get());function h(){Me().clearTimeout(u),i(r)}r.ping(h).then(h,()=>{o(a)})}))}var Jg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Yg=500,Xg=600,Zg="_blank",e_="http://localhost",Ti=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function t_(n,e,t,r=Yg,i=Xg){let o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString(),u="",h=Object.assign(Object.assign({},Jg),{width:r.toString(),height:i.toString(),top:o,left:a}),d=se().toLowerCase();t&&(u=Zl(d)?Zg:t),Xl(d)&&(e=e||e_,h.scrollbars="yes");let p=Object.entries(h).reduce((b,[S,N])=>`${b}${S}=${N},`,"");if(Tm(d)&&u!=="_self")return n_(e||"",u),new Ti(null);let E=window.open(e||"",u,p);O(E,n,"popup-blocked");try{E.focus()}catch{}return new Ti(E)}function n_(n,e){let t=document.createElement("a");t.href=n,t.target=e;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}var r_="__/auth/handler",i_="emulator/auth/handler",s_=encodeURIComponent("fac");async function Fl(n,e,t,r,i,o){O(n.config.authDomain,n,"auth-domain-config-required"),O(n.config.apiKey,n,"invalid-api-key");let a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ht,eventId:i};if(e instanceof pi){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",ll(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(let[p,E]of Object.entries(o||{}))a[p]=E}if(e instanceof Ot){let p=e.getScopes().filter(E=>E!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);let u=a;for(let p of Object.keys(u))u[p]===void 0&&delete u[p];let h=await n._getAppCheckToken(),d=h?`#${s_}=${encodeURIComponent(h)}`:"";return`${o_(n)}?${Jt(u).slice(1)}${d}`}function o_({config:n}){return n.emulator?Uo(n,i_):`https://${n.authDomain}/${r_}`}var yo="webStorageSupport",Vo=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$o,this._completeRedirectFn=kg,this._overrideRedirectResult=Cg}async _openPopup(e,t,r,i){var o;Ye((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");let a=await Fl(e,t,r,vo(),i);return t_(e,a,Ho())}async _openRedirect(e,t,r,i){await this._originValidation(e);let o=await Fl(e,t,r,vo(),i);return cg(o),new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(Ye(o,"If manager is not set, promise should be"),o)}let r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){let t=await Qg(e),r=new xo(e);return t.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(yo,{type:yo},i=>{var o;let a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[yo];a!==void 0&&t(!!a),De(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Fg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ih()||Bo()||Ci()}},Eh=Vo,Ai=class{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return Ve("unexpected MultiFactorSessionType")}}},Lo=class n extends Ai{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new n(e)}_finalizeEnroll(e,t,r){return tg(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return yg(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},bi=class{constructor(){}static assertion(e){return Lo._fromCredential(e)}};bi.FACTOR_ID="phone";var Si=class{static assertionForEnrollment(e,t){return Ri._fromSecret(e,t)}static assertionForSignIn(e,t){return Ri._fromEnrollmentId(e,t)}static async generateSecret(e){var t;let r=e;O(typeof((t=r.user)===null||t===void 0?void 0:t.auth)!="undefined","internal-error");let i=await ng(r.user.auth,{idToken:r.credential,totpEnrollmentInfo:{}});return Pi._fromStartTotpMfaEnrollmentResponse(i,r.user.auth)}};Si.FACTOR_ID="totp";var Ri=class n extends Ai{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new n(t,void 0,e)}static _fromEnrollmentId(e,t){return new n(t,e)}async _finalizeEnroll(e,t,r){return O(typeof this.secret!="undefined",e,"argument-error"),rg(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){O(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");let r={verificationCode:this.otp};return vg(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}},Pi=class n{constructor(e,t,r,i,o,a,u){this.sessionInfo=a,this.auth=u,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=o}static _fromStartTotpMfaEnrollmentResponse(e,t){return new n(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let i=!1;return(ni(e)||ni(t))&&(i=!0),i&&(ni(e)&&(e=((r=this.auth.currentUser)===null||r===void 0?void 0:r.email)||"unknownuser"),ni(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function ni(n){return typeof n=="undefined"||(n==null?void 0:n.length)===0}var Ul="@firebase/auth",ql="1.7.4";var Mo=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function a_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function c_(n){lt(new Re("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;O(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});let h={apiKey:a,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sh(n)},d=new So(r,i,o,h);return Om(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),lt(new Re("auth-internal",e=>{let t=pt(e.getProvider("auth").getImmediate());return(r=>new Mo(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ce(Ul,ql,a_(n)),Ce(Ul,ql,"esm2017")}var u_=5*60,l_=Zs("authIdTokenMaxAge")||u_,Bl=null,h_=n=>async e=>{let t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>l_)return;let i=t==null?void 0:t.token;Bl!==i&&(Bl=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Wo(n=ei()){let e=$n(n,"auth");if(e.isInitialized())return e.getImmediate();let t=ch(n,{popupRedirectResolver:Eh,persistence:[Ih,gh,$o]}),r=Zs("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){let o=new URL(r,location.origin);if(location.origin===o.origin){let a=h_(o.toString());mh(t,a,()=>a(t.currentUser)),ph(t,u=>a(u))}}let i=Ys("auth");return i&&uh(t,`http://${i}`),t}function d_(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Pm({loadJS(n){return new Promise((e,t)=>{let r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{let o=Le("internal-error");o.customData=i,t(o)},r.type="text/javascript",r.charset="UTF-8",d_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});c_("Browser");var Th=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Ah={};var mt,Qo;(function(){var n;function e(v,m){function _(){}_.prototype=m.prototype,v.D=m.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(y,I,T){for(var g=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)g[$e-2]=arguments[$e];return m.prototype[I].apply(y,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,m,_){_||(_=0);var y=Array(16);if(typeof m=="string")for(var I=0;16>I;++I)y[I]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(I=0;16>I;++I)y[I]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=v.g[0],_=v.g[1],I=v.g[2];var T=v.g[3],g=m+(T^_&(I^T))+y[0]+3614090360&4294967295;m=_+(g<<7&4294967295|g>>>25),g=T+(I^m&(_^I))+y[1]+3905402710&4294967295,T=m+(g<<12&4294967295|g>>>20),g=I+(_^T&(m^_))+y[2]+606105819&4294967295,I=T+(g<<17&4294967295|g>>>15),g=_+(m^I&(T^m))+y[3]+3250441966&4294967295,_=I+(g<<22&4294967295|g>>>10),g=m+(T^_&(I^T))+y[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=T+(I^m&(_^I))+y[5]+1200080426&4294967295,T=m+(g<<12&4294967295|g>>>20),g=I+(_^T&(m^_))+y[6]+2821735955&4294967295,I=T+(g<<17&4294967295|g>>>15),g=_+(m^I&(T^m))+y[7]+4249261313&4294967295,_=I+(g<<22&4294967295|g>>>10),g=m+(T^_&(I^T))+y[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=T+(I^m&(_^I))+y[9]+2336552879&4294967295,T=m+(g<<12&4294967295|g>>>20),g=I+(_^T&(m^_))+y[10]+4294925233&4294967295,I=T+(g<<17&4294967295|g>>>15),g=_+(m^I&(T^m))+y[11]+2304563134&4294967295,_=I+(g<<22&4294967295|g>>>10),g=m+(T^_&(I^T))+y[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=T+(I^m&(_^I))+y[13]+4254626195&4294967295,T=m+(g<<12&4294967295|g>>>20),g=I+(_^T&(m^_))+y[14]+2792965006&4294967295,I=T+(g<<17&4294967295|g>>>15),g=_+(m^I&(T^m))+y[15]+1236535329&4294967295,_=I+(g<<22&4294967295|g>>>10),g=m+(I^T&(_^I))+y[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=T+(_^I&(m^_))+y[6]+3225465664&4294967295,T=m+(g<<9&4294967295|g>>>23),g=I+(m^_&(T^m))+y[11]+643717713&4294967295,I=T+(g<<14&4294967295|g>>>18),g=_+(T^m&(I^T))+y[0]+3921069994&4294967295,_=I+(g<<20&4294967295|g>>>12),g=m+(I^T&(_^I))+y[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=T+(_^I&(m^_))+y[10]+38016083&4294967295,T=m+(g<<9&4294967295|g>>>23),g=I+(m^_&(T^m))+y[15]+3634488961&4294967295,I=T+(g<<14&4294967295|g>>>18),g=_+(T^m&(I^T))+y[4]+3889429448&4294967295,_=I+(g<<20&4294967295|g>>>12),g=m+(I^T&(_^I))+y[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=T+(_^I&(m^_))+y[14]+3275163606&4294967295,T=m+(g<<9&4294967295|g>>>23),g=I+(m^_&(T^m))+y[3]+4107603335&4294967295,I=T+(g<<14&4294967295|g>>>18),g=_+(T^m&(I^T))+y[8]+1163531501&4294967295,_=I+(g<<20&4294967295|g>>>12),g=m+(I^T&(_^I))+y[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=T+(_^I&(m^_))+y[2]+4243563512&4294967295,T=m+(g<<9&4294967295|g>>>23),g=I+(m^_&(T^m))+y[7]+1735328473&4294967295,I=T+(g<<14&4294967295|g>>>18),g=_+(T^m&(I^T))+y[12]+2368359562&4294967295,_=I+(g<<20&4294967295|g>>>12),g=m+(_^I^T)+y[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=T+(m^_^I)+y[8]+2272392833&4294967295,T=m+(g<<11&4294967295|g>>>21),g=I+(T^m^_)+y[11]+1839030562&4294967295,I=T+(g<<16&4294967295|g>>>16),g=_+(I^T^m)+y[14]+4259657740&4294967295,_=I+(g<<23&4294967295|g>>>9),g=m+(_^I^T)+y[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=T+(m^_^I)+y[4]+1272893353&4294967295,T=m+(g<<11&4294967295|g>>>21),g=I+(T^m^_)+y[7]+4139469664&4294967295,I=T+(g<<16&4294967295|g>>>16),g=_+(I^T^m)+y[10]+3200236656&4294967295,_=I+(g<<23&4294967295|g>>>9),g=m+(_^I^T)+y[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=T+(m^_^I)+y[0]+3936430074&4294967295,T=m+(g<<11&4294967295|g>>>21),g=I+(T^m^_)+y[3]+3572445317&4294967295,I=T+(g<<16&4294967295|g>>>16),g=_+(I^T^m)+y[6]+76029189&4294967295,_=I+(g<<23&4294967295|g>>>9),g=m+(_^I^T)+y[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=T+(m^_^I)+y[12]+3873151461&4294967295,T=m+(g<<11&4294967295|g>>>21),g=I+(T^m^_)+y[15]+530742520&4294967295,I=T+(g<<16&4294967295|g>>>16),g=_+(I^T^m)+y[2]+3299628645&4294967295,_=I+(g<<23&4294967295|g>>>9),g=m+(I^(_|~T))+y[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=T+(_^(m|~I))+y[7]+1126891415&4294967295,T=m+(g<<10&4294967295|g>>>22),g=I+(m^(T|~_))+y[14]+2878612391&4294967295,I=T+(g<<15&4294967295|g>>>17),g=_+(T^(I|~m))+y[5]+4237533241&4294967295,_=I+(g<<21&4294967295|g>>>11),g=m+(I^(_|~T))+y[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=T+(_^(m|~I))+y[3]+2399980690&4294967295,T=m+(g<<10&4294967295|g>>>22),g=I+(m^(T|~_))+y[10]+4293915773&4294967295,I=T+(g<<15&4294967295|g>>>17),g=_+(T^(I|~m))+y[1]+2240044497&4294967295,_=I+(g<<21&4294967295|g>>>11),g=m+(I^(_|~T))+y[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=T+(_^(m|~I))+y[15]+4264355552&4294967295,T=m+(g<<10&4294967295|g>>>22),g=I+(m^(T|~_))+y[6]+2734768916&4294967295,I=T+(g<<15&4294967295|g>>>17),g=_+(T^(I|~m))+y[13]+1309151649&4294967295,_=I+(g<<21&4294967295|g>>>11),g=m+(I^(_|~T))+y[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=T+(_^(m|~I))+y[11]+3174756917&4294967295,T=m+(g<<10&4294967295|g>>>22),g=I+(m^(T|~_))+y[2]+718787259&4294967295,I=T+(g<<15&4294967295|g>>>17),g=_+(T^(I|~m))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+m&4294967295,v.g[1]=v.g[1]+(I+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+I&4294967295,v.g[3]=v.g[3]+T&4294967295}r.prototype.u=function(v,m){m===void 0&&(m=v.length);for(var _=m-this.blockSize,y=this.B,I=this.h,T=0;T<m;){if(I==0)for(;T<=_;)i(this,v,T),T+=this.blockSize;if(typeof v=="string"){for(;T<m;)if(y[I++]=v.charCodeAt(T++),I==this.blockSize){i(this,y),I=0;break}}else for(;T<m;)if(y[I++]=v[T++],I==this.blockSize){i(this,y),I=0;break}}this.h=I,this.o+=m},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var m=1;m<v.length-8;++m)v[m]=0;var _=8*this.o;for(m=v.length-8;m<v.length;++m)v[m]=_&255,_/=256;for(this.u(v),v=Array(16),m=_=0;4>m;++m)for(var y=0;32>y;y+=8)v[_++]=this.g[m]>>>y&255;return v};function o(v,m){var _=u;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=m(v)}function a(v,m){this.h=m;for(var _=[],y=!0,I=v.length-1;0<=I;I--){var T=v[I]|0;y&&T==m||(_[I]=T,y=!1)}this.g=_}var u={};function h(v){return-128<=v&&128>v?o(v,function(m){return new a([m|0],0>m?-1:0)}):new a([v|0],0>v?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return E;if(0>v)return D(d(-v));for(var m=[],_=1,y=0;v>=_;y++)m[y]=v/_|0,_*=4294967296;return new a(m,0)}function p(v,m){if(v.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(v.charAt(0)=="-")return D(p(v.substring(1),m));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),y=E,I=0;I<v.length;I+=8){var T=Math.min(8,v.length-I),g=parseInt(v.substring(I,I+T),m);8>T?(T=d(Math.pow(m,T)),y=y.j(T).add(d(g))):(y=y.j(_),y=y.add(d(g)))}return y}var E=h(0),b=h(1),S=h(16777216);n=a.prototype,n.m=function(){if(x(this))return-D(this).m();for(var v=0,m=1,_=0;_<this.g.length;_++){var y=this.i(_);v+=(0<=y?y:4294967296+y)*m,m*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(N(this))return"0";if(x(this))return"-"+D(this).toString(v);for(var m=d(Math.pow(v,6)),_=this,y="";;){var I=Y(_,m).g;_=q(_,I.j(m));var T=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=I,N(_))return T+y;for(;6>T.length;)T="0"+T;y=T+y}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function N(v){if(v.h!=0)return!1;for(var m=0;m<v.g.length;m++)if(v.g[m]!=0)return!1;return!0}function x(v){return v.h==-1}n.l=function(v){return v=q(this,v),x(v)?-1:N(v)?0:1};function D(v){for(var m=v.g.length,_=[],y=0;y<m;y++)_[y]=~v.g[y];return new a(_,~v.h).add(b)}n.abs=function(){return x(this)?D(this):this},n.add=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],y=0,I=0;I<=m;I++){var T=y+(this.i(I)&65535)+(v.i(I)&65535),g=(T>>>16)+(this.i(I)>>>16)+(v.i(I)>>>16);y=g>>>16,T&=65535,g&=65535,_[I]=g<<16|T}return new a(_,_[_.length-1]&-2147483648?-1:0)};function q(v,m){return v.add(D(m))}n.j=function(v){if(N(this)||N(v))return E;if(x(this))return x(v)?D(this).j(D(v)):D(D(this).j(v));if(x(v))return D(this.j(D(v)));if(0>this.l(S)&&0>v.l(S))return d(this.m()*v.m());for(var m=this.g.length+v.g.length,_=[],y=0;y<2*m;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var I=0;I<v.g.length;I++){var T=this.i(y)>>>16,g=this.i(y)&65535,$e=v.i(I)>>>16,bn=v.i(I)&65535;_[2*y+2*I]+=g*bn,z(_,2*y+2*I),_[2*y+2*I+1]+=T*bn,z(_,2*y+2*I+1),_[2*y+2*I+1]+=g*$e,z(_,2*y+2*I+1),_[2*y+2*I+2]+=T*$e,z(_,2*y+2*I+2)}for(y=0;y<m;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=m;y<2*m;y++)_[y]=0;return new a(_,0)};function z(v,m){for(;(v[m]&65535)!=v[m];)v[m+1]+=v[m]>>>16,v[m]&=65535,m++}function G(v,m){this.g=v,this.h=m}function Y(v,m){if(N(m))throw Error("division by zero");if(N(v))return new G(E,E);if(x(v))return m=Y(D(v),m),new G(D(m.g),D(m.h));if(x(m))return m=Y(v,D(m)),new G(D(m.g),m.h);if(30<v.g.length){if(x(v)||x(m))throw Error("slowDivide_ only works with positive integers.");for(var _=b,y=m;0>=y.l(v);)_=ve(_),y=ve(y);var I=W(_,1),T=W(y,1);for(y=W(y,2),_=W(_,2);!N(y);){var g=T.add(y);0>=g.l(v)&&(I=I.add(_),T=g),y=W(y,1),_=W(_,1)}return m=q(v,I.j(m)),new G(I,m)}for(I=E;0<=v.l(m);){for(_=Math.max(1,Math.floor(v.m()/m.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),T=d(_),g=T.j(m);x(g)||0<g.l(v);)_-=y,T=d(_),g=T.j(m);N(T)&&(T=b),I=I.add(T),v=q(v,g)}return new G(I,v)}n.A=function(v){return Y(this,v).h},n.and=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)&v.i(y);return new a(_,this.h&v.h)},n.or=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)|v.i(y);return new a(_,this.h|v.h)},n.xor=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)^v.i(y);return new a(_,this.h^v.h)};function ve(v){for(var m=v.g.length+1,_=[],y=0;y<m;y++)_[y]=v.i(y)<<1|v.i(y-1)>>>31;return new a(_,v.h)}function W(v,m){var _=m>>5;m%=32;for(var y=v.g.length-_,I=[],T=0;T<y;T++)I[T]=0<m?v.i(T+_)>>>m|v.i(T+_+1)<<32-m:v.i(T+_);return new a(I,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Qo=Ah.Md5=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,mt=Ah.Integer=a}).apply(typeof Th!="undefined"?Th:typeof self!="undefined"?self:typeof window!="undefined"?window:{});var ki=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Xe={};var Jo,Yo,tn,Xo,ar,Oi,Zo,ea,ta;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,c,l){return s==Array.prototype||s==Object.prototype||(s[c]=l.value),s};function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof ki=="object"&&ki];for(var c=0;c<s.length;++c){var l=s[c];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=t(this);function i(s,c){if(c)e:{var l=r;s=s.split(".");for(var f=0;f<s.length-1;f++){var w=s[f];if(!(w in l))break e;l=l[w]}s=s[s.length-1],f=l[s],c=c(f),c!=f&&c!=null&&e(l,s,{configurable:!0,writable:!0,value:c})}}function o(s,c){s instanceof String&&(s+="");var l=0,f=!1,w={next:function(){if(!f&&l<s.length){var A=l++;return{value:c(A,s[A]),done:!1}}return f=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}i("Array.prototype.values",function(s){return s||function(){return o(this,function(c,l){return l})}});var a=a||{},u=this||self;function h(s){var c=typeof s;return c=c!="object"?c:s?Array.isArray(s)?"array":c:"null",c=="array"||c=="object"&&typeof s.length=="number"}function d(s){var c=typeof s;return c=="object"&&s!=null||c=="function"}function p(s,c,l){return s.call.apply(s.bind,arguments)}function E(s,c,l){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,f),s.apply(c,w)}}return function(){return s.apply(c,arguments)}}function b(s,c,l){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:E,b.apply(null,arguments)}function S(s,c){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function N(s,c){function l(){}l.prototype=c.prototype,s.aa=c.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(f,w,A){for(var C=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)C[Q-2]=arguments[Q];return c.prototype[w].apply(f,C)}}function x(s){let c=s.length;if(0<c){let l=Array(c);for(let f=0;f<c;f++)l[f]=s[f];return l}return[]}function D(s,c){for(let l=1;l<arguments.length;l++){let f=arguments[l];if(h(f)){let w=s.length||0,A=f.length||0;s.length=w+A;for(let C=0;C<A;C++)s[w+C]=f[C]}else s.push(f)}}class q{constructor(c,l){this.i=c,this.j=l,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function z(s){return/^[\s\xa0]*$/.test(s)}function G(){var s=u.navigator;return s&&(s=s.userAgent)?s:""}function Y(s){return Y[" "](s),s}Y[" "]=function(){};var ve=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function W(s,c,l){for(let f in s)c.call(l,s[f],f,s)}function v(s,c){for(let l in s)c.call(void 0,s[l],l,s)}function m(s){let c={};for(let l in s)c[l]=s[l];return c}let _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,c){let l,f;for(let w=1;w<arguments.length;w++){f=arguments[w];for(l in f)s[l]=f[l];for(let A=0;A<_.length;A++)l=_[A],Object.prototype.hasOwnProperty.call(f,l)&&(s[l]=f[l])}}function I(s){var c=1;s=s.split(":");let l=[];for(;0<c&&s.length;)l.push(s.shift()),c--;return s.length&&l.push(s.join(":")),l}function T(s){u.setTimeout(()=>{throw s},0)}function g(){var s=ws;let c=null;return s.g&&(c=s.g,s.g=s.g.next,s.g||(s.h=null),c.next=null),c}class $e{constructor(){this.h=this.g=null}add(c,l){let f=bn.get();f.set(c,l),this.h?this.h.next=f:this.g=f,this.h=f}}var bn=new q(()=>new df,s=>s.reset());class df{constructor(){this.next=this.g=this.h=null}set(c,l){this.h=c,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Sn,Rn=!1,ws=new $e,Xc=()=>{let s=u.Promise.resolve(void 0);Sn=()=>{s.then(ff)}};var ff=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(l){T(l)}var c=bn;c.j(s),100>c.h&&(c.h++,s.next=c.g,c.g=s)}Rn=!1};function it(){this.s=this.s,this.C=this.C}it.prototype.s=!1,it.prototype.ma=function(){this.s||(this.s=!0,this.N())},it.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(s,c){this.type=s,this.g=this.target=c,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var pf=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var s=!1,c=Object.defineProperty({},"passive",{get:function(){s=!0}});try{let l=()=>{};u.addEventListener("test",l,c),u.removeEventListener("test",l,c)}catch{}return s}();function Pn(s,c){if(fe.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=c,c=s.relatedTarget){if(ve){e:{try{Y(c.nodeName);var w=!0;break e}catch{}w=!1}w||(c=null)}}else l=="mouseover"?c=s.fromElement:l=="mouseout"&&(c=s.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:mf[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Pn.aa.h.call(this)}}N(Pn,fe);var mf={2:"touch",3:"pen",4:"mouse"};Pn.prototype.h=function(){Pn.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Cn="closure_listenable_"+(1e6*Math.random()|0),gf=0;function _f(s,c,l,f,w){this.listener=s,this.proxy=null,this.src=c,this.type=l,this.capture=!!f,this.ha=w,this.key=++gf,this.da=this.fa=!1}function kr(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Or(s){this.src=s,this.g={},this.h=0}Or.prototype.add=function(s,c,l,f,w){var A=s.toString();s=this.g[A],s||(s=this.g[A]=[],this.h++);var C=Ts(s,c,f,w);return-1<C?(c=s[C],l||(c.fa=!1)):(c=new _f(c,this.src,A,!!f,w),c.fa=l,s.push(c)),c};function Es(s,c){var l=c.type;if(l in s.g){var f=s.g[l],w=Array.prototype.indexOf.call(f,c,void 0),A;(A=0<=w)&&Array.prototype.splice.call(f,w,1),A&&(kr(c),s.g[l].length==0&&(delete s.g[l],s.h--))}}function Ts(s,c,l,f){for(var w=0;w<s.length;++w){var A=s[w];if(!A.da&&A.listener==c&&A.capture==!!l&&A.ha==f)return w}return-1}var As="closure_lm_"+(1e6*Math.random()|0),bs={};function Zc(s,c,l,f,w){if(f&&f.once)return tu(s,c,l,f,w);if(Array.isArray(c)){for(var A=0;A<c.length;A++)Zc(s,c[A],l,f,w);return null}return l=Cs(l),s&&s[Cn]?s.K(c,l,d(f)?!!f.capture:!!f,w):eu(s,c,l,!1,f,w)}function eu(s,c,l,f,w,A){if(!c)throw Error("Invalid event type");var C=d(w)?!!w.capture:!!w,Q=Rs(s);if(Q||(s[As]=Q=new Or(s)),l=Q.add(c,l,f,C,A),l.proxy)return l;if(f=yf(),l.proxy=f,f.src=s,f.listener=l,s.addEventListener)pf||(w=C),w===void 0&&(w=!1),s.addEventListener(c.toString(),f,w);else if(s.attachEvent)s.attachEvent(ru(c.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function yf(){function s(l){return c.call(s.src,s.listener,l)}let c=vf;return s}function tu(s,c,l,f,w){if(Array.isArray(c)){for(var A=0;A<c.length;A++)tu(s,c[A],l,f,w);return null}return l=Cs(l),s&&s[Cn]?s.L(c,l,d(f)?!!f.capture:!!f,w):eu(s,c,l,!0,f,w)}function nu(s,c,l,f,w){if(Array.isArray(c))for(var A=0;A<c.length;A++)nu(s,c[A],l,f,w);else f=d(f)?!!f.capture:!!f,l=Cs(l),s&&s[Cn]?(s=s.i,c=String(c).toString(),c in s.g&&(A=s.g[c],l=Ts(A,l,f,w),-1<l&&(kr(A[l]),Array.prototype.splice.call(A,l,1),A.length==0&&(delete s.g[c],s.h--)))):s&&(s=Rs(s))&&(c=s.g[c.toString()],s=-1,c&&(s=Ts(c,l,f,w)),(l=-1<s?c[s]:null)&&Ss(l))}function Ss(s){if(typeof s!="number"&&s&&!s.da){var c=s.src;if(c&&c[Cn])Es(c.i,s);else{var l=s.type,f=s.proxy;c.removeEventListener?c.removeEventListener(l,f,s.capture):c.detachEvent?c.detachEvent(ru(l),f):c.addListener&&c.removeListener&&c.removeListener(f),(l=Rs(c))?(Es(l,s),l.h==0&&(l.src=null,c[As]=null)):kr(s)}}}function ru(s){return s in bs?bs[s]:bs[s]="on"+s}function vf(s,c){if(s.da)s=!0;else{c=new Pn(c,this);var l=s.listener,f=s.ha||s.src;s.fa&&Ss(s),s=l.call(f,c)}return s}function Rs(s){return s=s[As],s instanceof Or?s:null}var Ps="__closure_events_fn_"+(1e9*Math.random()>>>0);function Cs(s){return typeof s=="function"?s:(s[Ps]||(s[Ps]=function(c){return s.handleEvent(c)}),s[Ps])}function pe(){it.call(this),this.i=new Or(this),this.M=this,this.F=null}N(pe,it),pe.prototype[Cn]=!0,pe.prototype.removeEventListener=function(s,c,l,f){nu(this,s,c,l,f)};function Ie(s,c){var l,f=s.F;if(f)for(l=[];f;f=f.F)l.push(f);if(s=s.M,f=c.type||c,typeof c=="string")c=new fe(c,s);else if(c instanceof fe)c.target=c.target||s;else{var w=c;c=new fe(f,s),y(c,w)}if(w=!0,l)for(var A=l.length-1;0<=A;A--){var C=c.g=l[A];w=xr(C,f,!0,c)&&w}if(C=c.g=s,w=xr(C,f,!0,c)&&w,w=xr(C,f,!1,c)&&w,l)for(A=0;A<l.length;A++)C=c.g=l[A],w=xr(C,f,!1,c)&&w}pe.prototype.N=function(){if(pe.aa.N.call(this),this.i){var s=this.i,c;for(c in s.g){for(var l=s.g[c],f=0;f<l.length;f++)kr(l[f]);delete s.g[c],s.h--}}this.F=null},pe.prototype.K=function(s,c,l,f){return this.i.add(String(s),c,!1,l,f)},pe.prototype.L=function(s,c,l,f){return this.i.add(String(s),c,!0,l,f)};function xr(s,c,l,f){if(c=s.i.g[String(c)],!c)return!0;c=c.concat();for(var w=!0,A=0;A<c.length;++A){var C=c[A];if(C&&!C.da&&C.capture==l){var Q=C.listener,le=C.ha||C.src;C.fa&&Es(s.i,C),w=Q.call(le,f)!==!1&&w}}return w&&!f.defaultPrevented}function iu(s,c,l){if(typeof s=="function")l&&(s=b(s,l));else if(s&&typeof s.handleEvent=="function")s=b(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(s,c||0)}function su(s){s.g=iu(()=>{s.g=null,s.i&&(s.i=!1,su(s))},s.l);let c=s.h;s.h=null,s.m.apply(null,c)}class If extends it{constructor(c,l){super(),this.m=c,this.l=l,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:su(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Dn(s){it.call(this),this.h=s,this.g={}}N(Dn,it);var ou=[];function au(s){W(s.g,function(c,l){this.g.hasOwnProperty(l)&&Ss(c)},s),s.g={}}Dn.prototype.N=function(){Dn.aa.N.call(this),au(this)},Dn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ds=u.JSON.stringify,wf=u.JSON.parse,Ef=class{stringify(s){return u.JSON.stringify(s,void 0)}parse(s){return u.JSON.parse(s,void 0)}};function Ns(){}Ns.prototype.h=null;function cu(s){return s.h||(s.h=s.i())}function uu(){}var Nn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ks(){fe.call(this,"d")}N(ks,fe);function Os(){fe.call(this,"c")}N(Os,fe);var Et={},lu=null;function Vr(){return lu=lu||new pe}Et.La="serverreachability";function hu(s){fe.call(this,Et.La,s)}N(hu,fe);function kn(s){let c=Vr();Ie(c,new hu(c))}Et.STAT_EVENT="statevent";function du(s,c){fe.call(this,Et.STAT_EVENT,s),this.stat=c}N(du,fe);function we(s){let c=Vr();Ie(c,new du(c,s))}Et.Ma="timingevent";function fu(s,c){fe.call(this,Et.Ma,s),this.size=c}N(fu,fe);function On(s,c){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){s()},c)}function xn(){this.g=!0}xn.prototype.xa=function(){this.g=!1};function Tf(s,c,l,f,w,A){s.info(function(){if(s.g)if(A)for(var C="",Q=A.split("&"),le=0;le<Q.length;le++){var $=Q[le].split("=");if(1<$.length){var me=$[0];$=$[1];var ge=me.split("_");C=2<=ge.length&&ge[1]=="type"?C+(me+"="+$+"&"):C+(me+"=redacted&")}}else C=null;else C=A;return"XMLHTTP REQ ("+f+") [attempt "+w+"]: "+c+`
`+l+`
`+C})}function Af(s,c,l,f,w,A,C){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+w+"]: "+c+`
`+l+`
`+A+" "+C})}function $t(s,c,l,f){s.info(function(){return"XMLHTTP TEXT ("+c+"): "+Sf(s,l)+(f?" "+f:"")})}function bf(s,c){s.info(function(){return"TIMEOUT: "+c})}xn.prototype.info=function(){};function Sf(s,c){if(!s.g)return c;if(!c)return null;try{var l=JSON.parse(c);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var f=l[s];if(!(2>f.length)){var w=f[1];if(Array.isArray(w)&&!(1>w.length)){var A=w[0];if(A!="noop"&&A!="stop"&&A!="close")for(var C=1;C<w.length;C++)w[C]=""}}}}return Ds(l)}catch{return c}}var Lr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},pu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},xs;function Mr(){}N(Mr,Ns),Mr.prototype.g=function(){return new XMLHttpRequest},Mr.prototype.i=function(){return{}},xs=new Mr;function st(s,c,l,f){this.j=s,this.i=c,this.l=l,this.R=f||1,this.U=new Dn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new mu}function mu(){this.i=null,this.g="",this.h=!1}var gu={},Vs={};function Ls(s,c,l){s.L=1,s.v=Br(He(c)),s.m=l,s.P=!0,_u(s,null)}function _u(s,c){s.F=Date.now(),Fr(s),s.A=He(s.v);var l=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),Nu(l.i,"t",f),s.C=0,l=s.j.J,s.h=new mu,s.g=Qu(s.j,l?c:null,!s.m),0<s.O&&(s.M=new If(b(s.Y,s,s.g),s.O)),c=s.U,l=s.g,f=s.ca;var w="readystatechange";Array.isArray(w)||(w&&(ou[0]=w.toString()),w=ou);for(var A=0;A<w.length;A++){var C=Zc(l,w[A],f||c.handleEvent,!1,c.h||c);if(!C)break;c.g[C.key]=C}c=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,c)):(s.u="GET",s.g.ea(s.A,s.u,null,c)),kn(),Tf(s.i,s.u,s.A,s.l,s.R,s.m)}st.prototype.ca=function(s){s=s.target;let c=this.M;c&&We(s)==3?c.j():this.Y(s)},st.prototype.Y=function(s){try{if(s==this.g)e:{let ge=We(this.g);var c=this.g.Ba();let Qt=this.g.Z();if(!(3>ge)&&(ge!=3||this.g&&(this.h.h||this.g.oa()||Fu(this.g)))){this.J||ge!=4||c==7||(c==8||0>=Qt?kn(3):kn(2)),Ms(this);var l=this.g.Z();this.X=l;t:if(yu(this)){var f=Fu(this.g);s="";var w=f.length,A=We(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Tt(this),Vn(this);var C="";break t}this.h.i=new u.TextDecoder}for(c=0;c<w;c++)this.h.h=!0,s+=this.h.i.decode(f[c],{stream:!(A&&c==w-1)});f.length=0,this.h.g+=s,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=l==200,Af(this.i,this.u,this.A,this.l,this.R,ge,l),this.o){if(this.T&&!this.K){t:{if(this.g){var Q,le=this.g;if((Q=le.g?le.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!z(Q)){var $=Q;break t}}$=null}if(l=$)$t(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fs(this,l);else{this.o=!1,this.s=3,we(12),Tt(this),Vn(this);break e}}if(this.P){l=!0;let Pe;for(;!this.J&&this.C<C.length;)if(Pe=Rf(this,C),Pe==Vs){ge==4&&(this.s=4,we(14),l=!1),$t(this.i,this.l,null,"[Incomplete Response]");break}else if(Pe==gu){this.s=4,we(15),$t(this.i,this.l,C,"[Invalid Chunk]"),l=!1;break}else $t(this.i,this.l,Pe,null),Fs(this,Pe);if(yu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ge!=4||C.length!=0||this.h.h||(this.s=1,we(16),l=!1),this.o=this.o&&l,!l)$t(this.i,this.l,C,"[Invalid Chunked Response]"),Tt(this),Vn(this);else if(0<C.length&&!this.W){this.W=!0;var me=this.j;me.g==this&&me.ba&&!me.M&&(me.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),Gs(me),me.M=!0,we(11))}}else $t(this.i,this.l,C,null),Fs(this,C);ge==4&&Tt(this),this.o&&!this.J&&(ge==4?Ku(this.j,this):(this.o=!1,Fr(this)))}else Gf(this.g),l==400&&0<C.indexOf("Unknown SID")?(this.s=3,we(12)):(this.s=0,we(13)),Tt(this),Vn(this)}}}catch{}finally{}};function yu(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Rf(s,c){var l=s.C,f=c.indexOf(`
`,l);return f==-1?Vs:(l=Number(c.substring(l,f)),isNaN(l)?gu:(f+=1,f+l>c.length?Vs:(c=c.slice(f,f+l),s.C=f+l,c)))}st.prototype.cancel=function(){this.J=!0,Tt(this)};function Fr(s){s.S=Date.now()+s.I,vu(s,s.I)}function vu(s,c){if(s.B!=null)throw Error("WatchDog timer not null");s.B=On(b(s.ba,s),c)}function Ms(s){s.B&&(u.clearTimeout(s.B),s.B=null)}st.prototype.ba=function(){this.B=null;let s=Date.now();0<=s-this.S?(bf(this.i,this.A),this.L!=2&&(kn(),we(17)),Tt(this),this.s=2,Vn(this)):vu(this,this.S-s)};function Vn(s){s.j.G==0||s.J||Ku(s.j,s)}function Tt(s){Ms(s);var c=s.M;c&&typeof c.ma=="function"&&c.ma(),s.M=null,au(s.U),s.g&&(c=s.g,s.g=null,c.abort(),c.ma())}function Fs(s,c){try{var l=s.j;if(l.G!=0&&(l.g==s||Us(l.h,s))){if(!s.K&&Us(l.h,s)&&l.G==3){try{var f=l.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var w=f;if(w[0]==0){e:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)$r(l),Gr(l);else break e;zs(l),we(18)}}else l.za=w[1],0<l.za-l.T&&37500>w[2]&&l.F&&l.v==0&&!l.C&&(l.C=On(b(l.Za,l),6e3));if(1>=Eu(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else bt(l,11)}else if((s.K||l.g==s)&&$r(l),!z(c))for(w=l.Da.g.parse(c),c=0;c<w.length;c++){let $=w[c];if(l.T=$[0],$=$[1],l.G==2)if($[0]=="c"){l.K=$[1],l.ia=$[2];let me=$[3];me!=null&&(l.la=me,l.j.info("VER="+l.la));let ge=$[4];ge!=null&&(l.Aa=ge,l.j.info("SVER="+l.Aa));let Qt=$[5];Qt!=null&&typeof Qt=="number"&&0<Qt&&(f=1.5*Qt,l.L=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;let Pe=s.g;if(Pe){let Wr=Pe.g?Pe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Wr){var A=f.h;A.g||Wr.indexOf("spdy")==-1&&Wr.indexOf("quic")==-1&&Wr.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(qs(A,A.h),A.h=null))}if(f.D){let Ks=Pe.g?Pe.g.getResponseHeader("X-HTTP-Session-Id"):null;Ks&&(f.ya=Ks,X(f.I,f.D,Ks))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),f=l;var C=s;if(f.qa=Wu(f,f.J?f.ia:null,f.W),C.K){Tu(f.h,C);var Q=C,le=f.L;le&&(Q.I=le),Q.B&&(Ms(Q),Fr(Q)),f.g=C}else zu(f);0<l.i.length&&Kr(l)}else $[0]!="stop"&&$[0]!="close"||bt(l,7);else l.G==3&&($[0]=="stop"||$[0]=="close"?$[0]=="stop"?bt(l,7):js(l):$[0]!="noop"&&l.l&&l.l.ta($),l.v=0)}}kn(4)}catch{}}var Pf=class{constructor(s,c){this.g=s,this.map=c}};function Iu(s){this.l=s||10,u.PerformanceNavigationTiming?(s=u.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function wu(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Eu(s){return s.h?1:s.g?s.g.size:0}function Us(s,c){return s.h?s.h==c:s.g?s.g.has(c):!1}function qs(s,c){s.g?s.g.add(c):s.h=c}function Tu(s,c){s.h&&s.h==c?s.h=null:s.g&&s.g.has(c)&&s.g.delete(c)}Iu.prototype.cancel=function(){if(this.i=Au(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(let s of this.g.values())s.cancel();this.g.clear()}};function Au(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let c=s.i;for(let l of s.g.values())c=c.concat(l.D);return c}return x(s.i)}function Cf(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map!="undefined"&&s instanceof Map||typeof Set!="undefined"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var c=[],l=s.length,f=0;f<l;f++)c.push(s[f]);return c}c=[],l=0;for(f in s)c[l++]=s[f];return c}function Df(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map!="undefined"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set!="undefined"&&s instanceof Set)){if(h(s)||typeof s=="string"){var c=[];s=s.length;for(var l=0;l<s;l++)c.push(l);return c}c=[],l=0;for(let f in s)c[l++]=f;return c}}}function bu(s,c){if(s.forEach&&typeof s.forEach=="function")s.forEach(c,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,c,void 0);else for(var l=Df(s),f=Cf(s),w=f.length,A=0;A<w;A++)c.call(void 0,f[A],l&&l[A],s)}var Su=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Nf(s,c){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var f=s[l].indexOf("="),w=null;if(0<=f){var A=s[l].substring(0,f);w=s[l].substring(f+1)}else A=s[l];c(A,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function At(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof At){this.h=s.h,Ur(this,s.j),this.o=s.o,this.g=s.g,qr(this,s.s),this.l=s.l;var c=s.i,l=new Fn;l.i=c.i,c.g&&(l.g=new Map(c.g),l.h=c.h),Ru(this,l),this.m=s.m}else s&&(c=String(s).match(Su))?(this.h=!1,Ur(this,c[1]||"",!0),this.o=Ln(c[2]||""),this.g=Ln(c[3]||"",!0),qr(this,c[4]),this.l=Ln(c[5]||"",!0),Ru(this,c[6]||"",!0),this.m=Ln(c[7]||"")):(this.h=!1,this.i=new Fn(null,this.h))}At.prototype.toString=function(){var s=[],c=this.j;c&&s.push(Mn(c,Pu,!0),":");var l=this.g;return(l||c=="file")&&(s.push("//"),(c=this.o)&&s.push(Mn(c,Pu,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(Mn(l,l.charAt(0)=="/"?xf:Of,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",Mn(l,Lf)),s.join("")};function He(s){return new At(s)}function Ur(s,c,l){s.j=l?Ln(c,!0):c,s.j&&(s.j=s.j.replace(/:$/,""))}function qr(s,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);s.s=c}else s.s=null}function Ru(s,c,l){c instanceof Fn?(s.i=c,Mf(s.i,s.h)):(l||(c=Mn(c,Vf)),s.i=new Fn(c,s.h))}function X(s,c,l){s.i.set(c,l)}function Br(s){return X(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Ln(s,c){return s?c?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Mn(s,c,l){return typeof s=="string"?(s=encodeURI(s).replace(c,kf),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function kf(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Pu=/[#\/\?@]/g,Of=/[#\?:]/g,xf=/[#\?]/g,Vf=/[#\?@]/g,Lf=/#/g;function Fn(s,c){this.h=this.g=null,this.i=s||null,this.j=!!c}function ot(s){s.g||(s.g=new Map,s.h=0,s.i&&Nf(s.i,function(c,l){s.add(decodeURIComponent(c.replace(/\+/g," ")),l)}))}n=Fn.prototype,n.add=function(s,c){ot(this),this.i=null,s=Ht(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(c),this.h+=1,this};function Cu(s,c){ot(s),c=Ht(s,c),s.g.has(c)&&(s.i=null,s.h-=s.g.get(c).length,s.g.delete(c))}function Du(s,c){return ot(s),c=Ht(s,c),s.g.has(c)}n.forEach=function(s,c){ot(this),this.g.forEach(function(l,f){l.forEach(function(w){s.call(c,w,f,this)},this)},this)},n.na=function(){ot(this);let s=Array.from(this.g.values()),c=Array.from(this.g.keys()),l=[];for(let f=0;f<c.length;f++){let w=s[f];for(let A=0;A<w.length;A++)l.push(c[f])}return l},n.V=function(s){ot(this);let c=[];if(typeof s=="string")Du(this,s)&&(c=c.concat(this.g.get(Ht(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)c=c.concat(s[l])}return c},n.set=function(s,c){return ot(this),this.i=null,s=Ht(this,s),Du(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[c]),this.h+=1,this},n.get=function(s,c){return s?(s=this.V(s),0<s.length?String(s[0]):c):c};function Nu(s,c,l){Cu(s,c),0<l.length&&(s.i=null,s.g.set(Ht(s,c),x(l)),s.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";let s=[],c=Array.from(this.g.keys());for(var l=0;l<c.length;l++){var f=c[l];let A=encodeURIComponent(String(f)),C=this.V(f);for(f=0;f<C.length;f++){var w=A;C[f]!==""&&(w+="="+encodeURIComponent(String(C[f]))),s.push(w)}}return this.i=s.join("&")};function Ht(s,c){return c=String(c),s.j&&(c=c.toLowerCase()),c}function Mf(s,c){c&&!s.j&&(ot(s),s.i=null,s.g.forEach(function(l,f){var w=f.toLowerCase();f!=w&&(Cu(this,f),Nu(this,w,l))},s)),s.j=c}function Ff(s,c){let l=new xn;if(u.Image){let f=new Image;f.onload=S(at,l,"TestLoadImage: loaded",!0,c,f),f.onerror=S(at,l,"TestLoadImage: error",!1,c,f),f.onabort=S(at,l,"TestLoadImage: abort",!1,c,f),f.ontimeout=S(at,l,"TestLoadImage: timeout",!1,c,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else c(!1)}function Uf(s,c){let l=new xn,f=new AbortController,w=setTimeout(()=>{f.abort(),at(l,"TestPingServer: timeout",!1,c)},1e4);fetch(s,{signal:f.signal}).then(A=>{clearTimeout(w),A.ok?at(l,"TestPingServer: ok",!0,c):at(l,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(w),at(l,"TestPingServer: error",!1,c)})}function at(s,c,l,f,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),f(l)}catch{}}function qf(){this.g=new Ef}function Bf(s,c,l){let f=l||"";try{bu(s,function(w,A){let C=w;d(w)&&(C=Ds(w)),c.push(f+A+"="+encodeURIComponent(C))})}catch(w){throw c.push(f+"type="+encodeURIComponent("_badmap")),w}}function Un(s){this.l=s.Ub||null,this.j=s.eb||!1}N(Un,Ns),Un.prototype.g=function(){return new jr(this.l,this.j)},Un.prototype.i=function(s){return function(){return s}}({});function jr(s,c){pe.call(this),this.D=s,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(jr,pe),n=jr.prototype,n.open=function(s,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=c,this.readyState=1,Bn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;let c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(c.body=s),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qn(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Bn(this)),this.g&&(this.readyState=3,Bn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream!="undefined"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ku(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function ku(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var c=s.value?s.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!s.done}))&&(this.response=this.responseText+=c)}s.done?qn(this):Bn(this),this.readyState==3&&ku(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,qn(this))},n.Qa=function(s){this.g&&(this.response=s,qn(this))},n.ga=function(){this.g&&qn(this)};function qn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Bn(s)}n.setRequestHeader=function(s,c){this.u.append(s,c)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";let s=[],c=this.h.entries();for(var l=c.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=c.next();return s.join(`\r
`)};function Bn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(jr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Ou(s){let c="";return W(s,function(l,f){c+=f,c+=":",c+=l,c+=`\r
`}),c}function Bs(s,c,l){e:{for(f in l){var f=!1;break e}f=!0}f||(l=Ou(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):X(s,c,l))}function Z(s){pe.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(Z,pe);var jf=/^https?$/i,zf=["POST","PUT"];n=Z.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,c,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);c=c?c.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():xs.g(),this.v=this.o?cu(this.o):cu(xs),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(c,String(s),!0),this.B=!1}catch(A){xu(this,A);return}if(s=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var w in f)l.set(w,f[w]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(let A of f.keys())l.set(A,f.get(A));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(A=>A.toLowerCase()=="content-type"),w=u.FormData&&s instanceof u.FormData,!(0<=Array.prototype.indexOf.call(zf,c,void 0))||f||w||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(let[A,C]of l)this.g.setRequestHeader(A,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Mu(this),this.u=!0,this.g.send(s),this.u=!1}catch(A){xu(this,A)}};function xu(s,c){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=c,s.m=5,Vu(s),zr(s)}function Vu(s){s.A||(s.A=!0,Ie(s,"complete"),Ie(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Ie(this,"complete"),Ie(this,"abort"),zr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zr(this,!0)),Z.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Lu(this):this.bb())},n.bb=function(){Lu(this)};function Lu(s){if(s.h&&typeof a!="undefined"&&(!s.v[1]||We(s)!=4||s.Z()!=2)){if(s.u&&We(s)==4)iu(s.Ea,0,s);else if(Ie(s,"readystatechange"),We(s)==4){s.h=!1;try{let C=s.Z();e:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var l;if(!(l=c)){var f;if(f=C===0){var w=String(s.D).match(Su)[1]||null;!w&&u.self&&u.self.location&&(w=u.self.location.protocol.slice(0,-1)),f=!jf.test(w?w.toLowerCase():"")}l=f}if(l)Ie(s,"complete"),Ie(s,"success");else{s.m=6;try{var A=2<We(s)?s.g.statusText:""}catch{A=""}s.l=A+" ["+s.Z()+"]",Vu(s)}}finally{zr(s)}}}}function zr(s,c){if(s.g){Mu(s);let l=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,c||Ie(s,"ready");try{l.onreadystatechange=f}catch{}}}function Mu(s){s.I&&(u.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function We(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<We(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var c=this.g.responseText;return s&&c.indexOf(s)==0&&(c=c.substring(s.length)),wf(c)}};function Fu(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Gf(s){let c={};s=(s.g&&2<=We(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(z(s[f]))continue;var l=I(s[f]);let w=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();let A=c[w]||[];c[w]=A,A.push(l)}v(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function jn(s,c,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||c}function Uu(s){this.Aa=0,this.i=[],this.j=new xn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=jn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=jn("baseRetryDelayMs",5e3,s),this.cb=jn("retryDelaySeedMs",1e4,s),this.Wa=jn("forwardChannelMaxRetries",2,s),this.wa=jn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Iu(s&&s.concurrentRequestLimit),this.Da=new qf,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Uu.prototype,n.la=8,n.G=1,n.connect=function(s,c,l,f){we(0),this.W=s,this.H=c||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.I=Wu(this,null,this.W),Kr(this)};function js(s){if(qu(s),s.G==3){var c=s.U++,l=He(s.I);if(X(l,"SID",s.K),X(l,"RID",c),X(l,"TYPE","terminate"),zn(s,l),c=new st(s,s.j,c),c.L=2,c.v=Br(He(l)),l=!1,u.navigator&&u.navigator.sendBeacon)try{l=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!l&&u.Image&&(new Image().src=c.v,l=!0),l||(c.g=Qu(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Fr(c)}Hu(s)}function Gr(s){s.g&&(Gs(s),s.g.cancel(),s.g=null)}function qu(s){Gr(s),s.u&&(u.clearTimeout(s.u),s.u=null),$r(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&u.clearTimeout(s.s),s.s=null)}function Kr(s){if(!wu(s.h)&&!s.s){s.s=!0;var c=s.Ga;Sn||Xc(),Rn||(Sn(),Rn=!0),ws.add(c,s),s.B=0}}function Kf(s,c){return Eu(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=c.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=On(b(s.Ga,s,c),$u(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;let w=new st(this,this.j,s),A=this.o;if(this.S&&(A?(A=m(A),y(A,this.S)):A=this.S),this.m!==null||this.O||(w.H=A,A=null),this.P)e:{for(var c=0,l=0;l<this.i.length;l++){t:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=l;break e}if(c===4096||l===this.i.length-1){c=l+1;break e}}c=1e3}else c=1e3;c=ju(this,w,c),l=He(this.I),X(l,"RID",s),X(l,"CVER",22),this.D&&X(l,"X-HTTP-Session-Id",this.D),zn(this,l),A&&(this.O?c="headers="+encodeURIComponent(String(Ou(A)))+"&"+c:this.m&&Bs(l,this.m,A)),qs(this.h,w),this.Ua&&X(l,"TYPE","init"),this.P?(X(l,"$req",c),X(l,"SID","null"),w.T=!0,Ls(w,l,null)):Ls(w,l,c),this.G=2}}else this.G==3&&(s?Bu(this,s):this.i.length==0||wu(this.h)||Bu(this))};function Bu(s,c){var l;c?l=c.l:l=s.U++;let f=He(s.I);X(f,"SID",s.K),X(f,"RID",l),X(f,"AID",s.T),zn(s,f),s.m&&s.o&&Bs(f,s.m,s.o),l=new st(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),c&&(s.i=c.D.concat(s.i)),c=ju(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),qs(s.h,l),Ls(l,f,c)}function zn(s,c){s.H&&W(s.H,function(l,f){X(c,f,l)}),s.l&&bu({},function(l,f){X(c,f,l)})}function ju(s,c,l){l=Math.min(s.i.length,l);var f=s.l?b(s.l.Na,s.l,s):null;e:{var w=s.i;let A=-1;for(;;){let C=["count="+l];A==-1?0<l?(A=w[0].g,C.push("ofs="+A)):A=0:C.push("ofs="+A);let Q=!0;for(let le=0;le<l;le++){let $=w[le].g,me=w[le].map;if($-=A,0>$)A=Math.max(0,w[le].g-100),Q=!1;else try{Bf(me,C,"req"+$+"_")}catch{f&&f(me)}}if(Q){f=C.join("&");break e}}}return s=s.i.splice(0,l),c.D=s,f}function zu(s){if(!s.g&&!s.u){s.Y=1;var c=s.Fa;Sn||Xc(),Rn||(Sn(),Rn=!0),ws.add(c,s),s.v=0}}function zs(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=On(b(s.Fa,s),$u(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Gu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=On(b(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,we(10),Gr(this),Gu(this))};function Gs(s){s.A!=null&&(u.clearTimeout(s.A),s.A=null)}function Gu(s){s.g=new st(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var c=He(s.qa);X(c,"RID","rpc"),X(c,"SID",s.K),X(c,"AID",s.T),X(c,"CI",s.F?"0":"1"),!s.F&&s.ja&&X(c,"TO",s.ja),X(c,"TYPE","xmlhttp"),zn(s,c),s.m&&s.o&&Bs(c,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=Br(He(c)),l.m=null,l.P=!0,_u(l,s)}n.Za=function(){this.C!=null&&(this.C=null,Gr(this),zs(this),we(19))};function $r(s){s.C!=null&&(u.clearTimeout(s.C),s.C=null)}function Ku(s,c){var l=null;if(s.g==c){$r(s),Gs(s),s.g=null;var f=2}else if(Us(s.h,c))l=c.D,Tu(s.h,c),f=1;else return;if(s.G!=0){if(c.o)if(f==1){l=c.m?c.m.length:0,c=Date.now()-c.F;var w=s.B;f=Vr(),Ie(f,new fu(f,l)),Kr(s)}else zu(s);else if(w=c.s,w==3||w==0&&0<c.X||!(f==1&&Kf(s,c)||f==2&&zs(s)))switch(l&&0<l.length&&(c=s.h,c.i=c.i.concat(l)),w){case 1:bt(s,5);break;case 4:bt(s,10);break;case 3:bt(s,6);break;default:bt(s,2)}}}function $u(s,c){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*c}function bt(s,c){if(s.j.info("Error code "+c),c==2){var l=b(s.fb,s),f=s.Xa;let w=!f;f=new At(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Ur(f,"https"),Br(f),w?Ff(f.toString(),l):Uf(f.toString(),l)}else we(2);s.G=0,s.l&&s.l.sa(c),Hu(s),qu(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),we(2)):(this.j.info("Failed to ping google.com"),we(1))};function Hu(s){if(s.G=0,s.ka=[],s.l){let c=Au(s.h);(c.length!=0||s.i.length!=0)&&(D(s.ka,c),D(s.ka,s.i),s.h.i.length=0,x(s.i),s.i.length=0),s.l.ra()}}function Wu(s,c,l){var f=l instanceof At?He(l):new At(l);if(f.g!="")c&&(f.g=c+"."+f.g),qr(f,f.s);else{var w=u.location;f=w.protocol,c=c?c+"."+w.hostname:w.hostname,w=+w.port;var A=new At(null);f&&Ur(A,f),c&&(A.g=c),w&&qr(A,w),l&&(A.l=l),f=A}return l=s.D,c=s.ya,l&&c&&X(f,l,c),X(f,"VER",s.la),zn(s,f),f}function Qu(s,c,l){if(c&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=s.Ca&&!s.pa?new Z(new Un({eb:l})):new Z(s.pa),c.Ha(s.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ju(){}n=Ju.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Hr(){}Hr.prototype.g=function(s,c){return new Te(s,c)};function Te(s,c){pe.call(this),this.g=new Uu(c),this.l=s,this.h=c&&c.messageUrlParams||null,s=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(s?s["X-WebChannel-Content-Type"]=c.messageContentType:s={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(s?s["X-WebChannel-Client-Profile"]=c.va:s={"X-WebChannel-Client-Profile":c.va}),this.g.S=s,(s=c&&c.Sb)&&!z(s)&&(this.g.m=s),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!z(c)&&(this.g.D=c,s=this.h,s!==null&&c in s&&(s=this.h,c in s&&delete s[c])),this.j=new Wt(this)}N(Te,pe),Te.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Te.prototype.close=function(){js(this.g)},Te.prototype.o=function(s){var c=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=Ds(s),s=l);c.i.push(new Pf(c.Ya++,s)),c.G==3&&Kr(c)},Te.prototype.N=function(){this.g.l=null,delete this.j,js(this.g),delete this.g,Te.aa.N.call(this)};function Yu(s){ks.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var c=s.__sm__;if(c){e:{for(let l in c){s=l;break e}s=void 0}(this.i=s)&&(s=this.i,c=c!==null&&s in c?c[s]:void 0),this.data=c}else this.data=s}N(Yu,ks);function Xu(){Os.call(this),this.status=1}N(Xu,Os);function Wt(s){this.g=s}N(Wt,Ju),Wt.prototype.ua=function(){Ie(this.g,"a")},Wt.prototype.ta=function(s){Ie(this.g,new Yu(s))},Wt.prototype.sa=function(s){Ie(this.g,new Xu)},Wt.prototype.ra=function(){Ie(this.g,"b")},Hr.prototype.createWebChannel=Hr.prototype.g,Te.prototype.send=Te.prototype.o,Te.prototype.open=Te.prototype.m,Te.prototype.close=Te.prototype.close,ta=Xe.createWebChannelTransport=function(){return new Hr},ea=Xe.getStatEventTarget=function(){return Vr()},Zo=Xe.Event=Et,Oi=Xe.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Lr.NO_ERROR=0,Lr.TIMEOUT=8,Lr.HTTP_ERROR=6,ar=Xe.ErrorCode=Lr,pu.COMPLETE="complete",Xo=Xe.EventType=pu,uu.EventType=Nn,Nn.OPEN="a",Nn.CLOSE="b",Nn.ERROR="c",Nn.MESSAGE="d",pe.prototype.listen=pe.prototype.K,tn=Xe.WebChannel=uu,Yo=Xe.FetchXmlHttpFactory=Un,Z.prototype.listenOnce=Z.prototype.L,Z.prototype.getLastError=Z.prototype.Ka,Z.prototype.getLastErrorCode=Z.prototype.Ba,Z.prototype.getStatus=Z.prototype.Z,Z.prototype.getResponseJson=Z.prototype.Oa,Z.prototype.getResponseText=Z.prototype.oa,Z.prototype.send=Z.prototype.ea,Z.prototype.setWithCredentials=Z.prototype.Ha,Jo=Xe.XhrIo=Z}).apply(typeof ki!="undefined"?ki:typeof self!="undefined"?self:typeof window!="undefined"?window:{});var bh="@firebase/firestore";var ue=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};ue.UNAUTHENTICATED=new ue(null),ue.GOOGLE_CREDENTIALS=new ue("google-credentials-uid"),ue.FIRST_PARTY=new ue("first-party-uid"),ue.MOCK_USER=new ue("mock-user");var En="10.12.1";var Ut=new ct("@firebase/firestore");function cr(){return Ut.logLevel}function k(n,...e){if(Ut.logLevel<=B.DEBUG){let t=e.map(Vc);Ut.debug(`Firestore (${En}): ${n}`,...t)}}function et(n,...e){if(Ut.logLevel<=B.ERROR){let t=e.map(Vc);Ut.error(`Firestore (${En}): ${n}`,...t)}}function un(n,...e){if(Ut.logLevel<=B.WARN){let t=e.map(Vc);Ut.warn(`Firestore (${En}): ${n}`,...t)}}function Vc(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}function M(n="Unexpected state"){let e=`FIRESTORE (${En}) INTERNAL ASSERTION FAILED: `+n;throw et(e),new Error(e)}function J(n,e){n||M()}function F(n,e){return n}var R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},V=class extends Ae{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var qe=class{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};var Fi=class{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},oa=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ue.UNAUTHENTICATED))}shutdown(){}},aa=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}},ca=class{constructor(e){this.t=e,this.currentUser=ue.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i,i=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve(),o=new qe;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new qe,e.enqueueRetryable(()=>i(this.currentUser))};let a=()=>{let h=o;e.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},u=h=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){let h=this.t.getImmediate({optional:!0});h?u(h):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new qe)}},0),a()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string"),new Fi(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string"),new ue(e)}},ua=class{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=ue.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}},la=class{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new ua(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(ue.FIRST_PARTY))}shutdown(){}invalidateToken(){}},ha=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},da=class{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){let r=o=>{o.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);let a=o.token!==this.R;return this.R=o.token,k("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};let i=o=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){let o=this.A.getImmediate({optional:!0});o?i(o):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(J(typeof t.token=="string"),this.R=t.token,new ha(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}};function f_(n){let e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}var Ui=class{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let i=f_(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%e.length))}return r}};function H(n,e){return n<e?-1:n>e?1:0}function ln(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}var de=class n{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new V(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return n.fromMillis(Date.now())}static fromDate(e){return n.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new n(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};var U=class n{constructor(e){this.timestamp=e}static fromTimestamp(e){return new n(e)}static min(){return new n(new de(0,0))}static max(){return new n(new de(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var qi=class n{constructor(e,t,r){t===void 0?t=0:t>e.length&&M(),r===void 0?r=e.length-t:r>e.length-t&&M(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return n.comparator(this,e)===0}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof n?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let i=0;i<r;i++){let o=e.get(i),a=t.get(i);if(o<a)return-1;if(o>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}},te=class n extends qi{construct(e,t,r){return new n(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new V(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new n(t)}static emptyPath(){return new n([])}},p_=/^[_a-zA-Z][_a-zA-Z0-9]*$/,be=class n extends qi{construct(e,t,r){return new n(e,t,r)}static isValidIdentifier(e){return p_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),n.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new n(["__name__"])}static fromServerFormat(e){let t=[],r="",i=0,o=()=>{if(r.length===0)throw new V(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},a=!1;for(;i<e.length;){let u=e[i];if(u==="\\"){if(i+1===e.length)throw new V(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new V(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(r+=u,i++):(o(),i++)}if(o(),a)throw new V(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new n(t)}static emptyPath(){return new n([])}};var L=class n{constructor(e){this.path=e}static fromPath(e){return new n(te.fromString(e))}static fromName(e){return new n(te.fromString(e).popFirst(5))}static empty(){return new n(te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return te.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new n(new te(e.slice()))}};var fa=class{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}};fa.UNKNOWN_ID=-1;function m_(n,e){let t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=U.fromTimestamp(r===1e9?new de(t+1,0):new de(t,r));return new qt(i,L.empty(),e)}function g_(n){return new qt(n.readTime,n.key,-1)}var qt=class n{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new n(U.min(),L.empty(),-1)}static max(){return new n(U.max(),L.empty(),-1)}};function __(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(n.documentKey,e.documentKey),t!==0?t:H(n.largestBatchId,e.largestBatchId))}var y_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",pa=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};async function Pr(n){if(n.code!==R.FAILED_PRECONDITION||n.message!==y_)throw n;k("LocalStore","Unexpectedly lost primary lease")}var P=class n{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new n((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof n?t:n.resolve(t)}catch(t){return n.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):n.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):n.reject(t)}static resolve(e){return new n((t,r)=>{t(e)})}static reject(e){return new n((t,r)=>{r(e)})}static waitFor(e){return new n((t,r)=>{let i=0,o=0,a=!1;e.forEach(u=>{++i,u.next(()=>{++o,a&&o===i&&t()},h=>r(h))}),a=!0,o===i&&t()})}static or(e){let t=n.resolve(!1);for(let r of e)t=t.next(i=>i?n.resolve(i):r());return t}static forEach(e,t){let r=[];return e.forEach((i,o)=>{r.push(t.call(this,i,o))}),this.waitFor(r)}static mapArray(e,t){return new n((r,i)=>{let o=e.length,a=new Array(o),u=0;for(let h=0;h<o;h++){let d=h;t(e[d]).next(p=>{a[d]=p,++u,u===o&&r(a)},p=>i(p))}})}static doWhile(e,t){return new n((r,i)=>{let o=()=>{e()===!0?t().next(()=>{o()},i):r()};o()})}};function v_(n){let e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Cr(n){return n.name==="IndexedDbTransactionError"}var pr=class{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.se&&this.se(e),e}};pr.oe=-1;function ms(n){return n==null}function mr(n){return n===0&&1/n==-1/0}function I_(n){return typeof n=="number"&&Number.isInteger(n)&&!mr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}var w_=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ZI=[...w_,"documentOverlays"],E_=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],T_=E_,ew=[...T_,"indexConfiguration","indexState","indexEntries"];function Sh(n){let e=0;for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Tn(n,e){for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function ed(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}var ne=class n{constructor(e,t){this.comparator=e,this.root=t||Be.EMPTY}insert(e,t){return new n(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new n(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new on(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new on(this.root,e,this.comparator,!1)}getReverseIterator(){return new on(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new on(this.root,e,this.comparator,!0)}},on=class{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Be=class n{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r!=null?r:n.RED,this.left=i!=null?i:n.EMPTY,this.right=o!=null?o:n.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new n(e!=null?e:this.key,t!=null?t:this.value,r!=null?r:this.color,i!=null?i:this.left,o!=null?o:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this,o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return n.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return n.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){let e=this.copy(null,null,n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();let e=this.left.check();if(e!==this.right.check())throw M();return e+(this.isRed()?0:1)}};Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(e,t,r,i,o){return this}insert(e,t,r){return new Be(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var ye=class n{constructor(e){this.comparator=e,this.data=new ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Bi(this.data.getIterator())}getIteratorFrom(e){return new Bi(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let i=t.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new n(this.comparator);return t.data=e,t}},Bi=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};var Ue=class n{constructor(e){this.fields=e,e.sort(be.comparator)}static empty(){return new n([])}unionWith(e){let t=new ye(be.comparator);for(let r of this.fields)t=t.add(r);for(let r of e)t=t.add(r);return new n(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ln(this.fields,e.fields,(t,r)=>t.isEqual(r))}};var ji=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var Ee=class n{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(i){try{return atob(i)}catch(o){throw typeof DOMException!="undefined"&&o instanceof DOMException?new ji("Invalid base64 string: "+o):o}}(e);return new n(t)}static fromUint8Array(e){let t=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(e);return new n(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){let r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};Ee.EMPTY_BYTE_STRING=new Ee("");var A_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function tt(n){if(J(!!n),typeof n=="string"){let e=0,t=A_.exec(n);if(J(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}let r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ee(n.seconds),nanos:ee(n.nanos)}}function ee(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function yt(n){return typeof n=="string"?Ee.fromBase64String(n):Ee.fromUint8Array(n)}function Lc(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Mc(n){let e=n.mapValue.fields.__previous_value__;return Lc(e)?Mc(e):e}function gr(n){let e=tt(n.mapValue.fields.__local_write_time__.timestampValue);return new de(e.seconds,e.nanos)}var ma=class{constructor(e,t,r,i,o,a,u,h,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d}},zi=class n{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new n("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof n&&e.projectId===this.projectId&&e.database===this.database}};var xi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Bt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Lc(n)?4:td(n)?9007199254740991:10:M()}function Ge(n,e){if(n===e)return!0;let t=Bt(n);if(t!==Bt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return gr(n).isEqual(gr(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;let a=tt(i.timestampValue),u=tt(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return yt(i.bytesValue).isEqual(yt(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return ee(i.geoPointValue.latitude)===ee(o.geoPointValue.latitude)&&ee(i.geoPointValue.longitude)===ee(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return ee(i.integerValue)===ee(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){let a=ee(i.doubleValue),u=ee(o.doubleValue);return a===u?mr(a)===mr(u):isNaN(a)&&isNaN(u)}return!1}(n,e);case 9:return ln(n.arrayValue.values||[],e.arrayValue.values||[],Ge);case 10:return function(i,o){let a=i.mapValue.fields||{},u=o.mapValue.fields||{};if(Sh(a)!==Sh(u))return!1;for(let h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!Ge(a[h],u[h])))return!1;return!0}(n,e);default:return M()}}function _r(n,e){return(n.values||[]).find(t=>Ge(t,e))!==void 0}function hn(n,e){if(n===e)return 0;let t=Bt(n),r=Bt(e);if(t!==r)return H(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return H(n.booleanValue,e.booleanValue);case 2:return function(o,a){let u=ee(o.integerValue||o.doubleValue),h=ee(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,e);case 3:return Rh(n.timestampValue,e.timestampValue);case 4:return Rh(gr(n),gr(e));case 5:return H(n.stringValue,e.stringValue);case 6:return function(o,a){let u=yt(o),h=yt(a);return u.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){let u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){let p=H(u[d],h[d]);if(p!==0)return p}return H(u.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){let u=H(ee(o.latitude),ee(a.latitude));return u!==0?u:H(ee(o.longitude),ee(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(o,a){let u=o.values||[],h=a.values||[];for(let d=0;d<u.length&&d<h.length;++d){let p=hn(u[d],h[d]);if(p)return p}return H(u.length,h.length)}(n.arrayValue,e.arrayValue);case 10:return function(o,a){if(o===xi.mapValue&&a===xi.mapValue)return 0;if(o===xi.mapValue)return 1;if(a===xi.mapValue)return-1;let u=o.fields||{},h=Object.keys(u),d=a.fields||{},p=Object.keys(d);h.sort(),p.sort();for(let E=0;E<h.length&&E<p.length;++E){let b=H(h[E],p[E]);if(b!==0)return b;let S=hn(u[h[E]],d[p[E]]);if(S!==0)return S}return H(h.length,p.length)}(n.mapValue,e.mapValue);default:throw M()}}function Rh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return H(n,e);let t=tt(n),r=tt(e),i=H(t.seconds,r.seconds);return i!==0?i:H(t.nanos,r.nanos)}function dn(n){return ga(n)}function ga(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){let r=tt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return yt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return L.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(let o of t.values||[])i?i=!1:r+=",",r+=ga(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){let r=Object.keys(t.fields||{}).sort(),i="{",o=!0;for(let a of r)o?o=!1:i+=",",i+=`${a}:${ga(t.fields[a])}`;return i+"}"}(n.mapValue):M()}function _a(n){return!!n&&"integerValue"in n}function Fc(n){return!!n&&"arrayValue"in n}function Ph(n){return!!n&&"nullValue"in n}function Ch(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Li(n){return!!n&&"mapValue"in n}function lr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){let e={mapValue:{fields:{}}};return Tn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=lr(r)),e}if(n.arrayValue){let e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=lr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function td(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}var Ne=class n{constructor(e){this.value=e}static empty(){return new n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Li(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=lr(t)}setAll(e){let t=be.emptyPath(),r={},i=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){let h=this.getFieldsMap(t);this.applyChanges(h,r,i),r={},i=[],t=u.popLast()}a?r[u.lastSegment()]=lr(a):i.push(u.lastSegment())});let o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){let t=this.field(e.popLast());Li(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ge(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Li(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Tn(t,(i,o)=>e[i]=o);for(let i of r)delete e[i]}clone(){return new n(lr(this.value))}};function nd(n){let e=[];return Tn(n.fields,(t,r)=>{let i=new be([t]);if(Li(r)){let o=nd(r.mapValue).fields;if(o.length===0)e.push(i);else for(let a of o)e.push(i.child(a))}else e.push(i)}),new Ue(e)}var ke=class n{constructor(e,t,r,i,o,a,u){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(e){return new n(e,0,U.min(),U.min(),U.min(),Ne.empty(),0)}static newFoundDocument(e,t,r,i){return new n(e,1,t,U.min(),r,i,0)}static newNoDocument(e,t){return new n(e,2,t,U.min(),U.min(),Ne.empty(),0)}static newUnknownDocument(e,t){return new n(e,3,t,U.min(),U.min(),Ne.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ne.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ne.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof n&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new n(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var fn=class{constructor(e,t){this.position=e,this.inclusive=t}};function Dh(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){let o=e[i],a=n.position[i];if(o.field.isKeyField()?r=L.comparator(L.fromName(a.referenceValue),t.key):r=hn(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Nh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ge(n.position[t],e.position[t]))return!1;return!0}var pn=class{constructor(e,t="asc"){this.field=e,this.dir=t}};function b_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}var Gi=class{},ae=class n extends Gi{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new va(e,t,r):t==="array-contains"?new Ea(e,r):t==="in"?new Ta(e,r):t==="not-in"?new Aa(e,r):t==="array-contains-any"?new ba(e,r):new n(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Ia(e,r):new wa(e,r)}matches(e){let t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(hn(t,this.value)):t!==null&&Bt(this.value)===Bt(t)&&this.matchesComparison(hn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},Ke=class n extends Gi{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new n(e,t)}matches(e){return rd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}};function rd(n){return n.op==="and"}function id(n){return S_(n)&&rd(n)}function S_(n){for(let e of n.filters)if(e instanceof Ke)return!1;return!0}function ya(n){if(n instanceof ae)return n.field.canonicalString()+n.op.toString()+dn(n.value);if(id(n))return n.filters.map(e=>ya(e)).join(",");{let e=n.filters.map(t=>ya(t)).join(",");return`${n.op}(${e})`}}function sd(n,e){return n instanceof ae?function(r,i){return i instanceof ae&&r.op===i.op&&r.field.isEqual(i.field)&&Ge(r.value,i.value)}(n,e):n instanceof Ke?function(r,i){return i instanceof Ke&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,u)=>o&&sd(a,i.filters[u]),!0):!1}(n,e):void M()}function od(n){return n instanceof ae?function(t){return`${t.field.canonicalString()} ${t.op} ${dn(t.value)}`}(n):n instanceof Ke?function(t){return t.op.toString()+" {"+t.getFilters().map(od).join(" ,")+"}"}(n):"Filter"}var va=class extends ae{constructor(e,t,r){super(e,t,r),this.key=L.fromName(r.referenceValue)}matches(e){let t=L.comparator(e.key,this.key);return this.matchesComparison(t)}},Ia=class extends ae{constructor(e,t){super(e,"in",t),this.keys=ad("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}},wa=class extends ae{constructor(e,t){super(e,"not-in",t),this.keys=ad("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}};function ad(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>L.fromName(r.referenceValue))}var Ea=class extends ae{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return Fc(t)&&_r(t.arrayValue,this.value)}},Ta=class extends ae{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return t!==null&&_r(this.value.arrayValue,t)}},Aa=class extends ae{constructor(e,t){super(e,"not-in",t)}matches(e){if(_r(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return t!==null&&!_r(this.value.arrayValue,t)}},ba=class extends ae{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!Fc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>_r(this.value.arrayValue,r))}};var Sa=class{constructor(e,t=null,r=[],i=[],o=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=u,this.ue=null}};function kh(n,e=null,t=[],r=[],i=null,o=null,a=null){return new Sa(n,e,t,r,i,o,a)}function Uc(n){let e=F(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ya(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),ms(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>dn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>dn(r)).join(",")),e.ue=t}return e.ue}function qc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!b_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!sd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Nh(n.startAt,e.startAt)&&Nh(n.endAt,e.endAt)}function Ra(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}var mn=class{constructor(e,t=null,r=[],i=[],o=null,a="F",u=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}};function R_(n,e,t,r,i,o,a,u){return new mn(n,e,t,r,i,o,a,u)}function Bc(n){return new mn(n)}function Oh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function P_(n){return n.collectionGroup!==null}function hr(n){let e=F(n);if(e.ce===null){e.ce=[];let t=new Set;for(let o of e.explicitOrderBy)e.ce.push(o),t.add(o.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new ye(be.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.ce.push(new pn(o,r))}),t.has(be.keyField().canonicalString())||e.ce.push(new pn(be.keyField(),r))}return e.ce}function je(n){let e=F(n);return e.le||(e.le=C_(e,hr(n))),e.le}function C_(n,e){if(n.limitType==="F")return kh(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{let o=i.dir==="desc"?"asc":"desc";return new pn(i.field,o)});let t=n.endAt?new fn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new fn(n.startAt.position,n.startAt.inclusive):null;return kh(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Pa(n,e,t){return new mn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function gs(n,e){return qc(je(n),je(e))&&n.limitType===e.limitType}function cd(n){return`${Uc(je(n))}|lt:${n.limitType}`}function nn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>od(i)).join(", ")}]`),ms(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>dn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>dn(i)).join(",")),`Target(${r})`}(je(n))}; limitType=${n.limitType})`}function _s(n,e){return e.isFoundDocument()&&function(r,i){let o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):L.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,i){for(let o of hr(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,i){for(let o of r.filters)if(!o.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,u,h){let d=Dh(a,u,h);return a.inclusive?d<=0:d<0}(r.startAt,hr(r),i)||r.endAt&&!function(a,u,h){let d=Dh(a,u,h);return a.inclusive?d>=0:d>0}(r.endAt,hr(r),i))}(n,e)}function D_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ud(n){return(e,t)=>{let r=!1;for(let i of hr(n)){let o=N_(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function N_(n,e,t){let r=n.field.isKeyField()?L.comparator(e.key,t.key):function(o,a,u){let h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?hn(h,d):M()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M()}}var vt=class{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(let[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){let r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Tn(this.inner,(t,r)=>{for(let[i,o]of r)e(i,o)})}isEmpty(){return ed(this.inner)}size(){return this.innerSize}};var k_=new ne(L.comparator);function nt(){return k_}var ld=new ne(L.comparator);function ur(...n){let e=ld;for(let t of n)e=e.insert(t.key,t);return e}function hd(n){let e=ld;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Lt(){return dr()}function dd(){return dr()}function dr(){return new vt(n=>n.toString(),(n,e)=>n.isEqual(e))}var O_=new ne(L.comparator),x_=new ye(L.comparator);function j(...n){let e=x_;for(let t of n)e=e.add(t);return e}var V_=new ye(H);function L_(){return V_}function fd(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mr(e)?"-0":e}}function pd(n){return{integerValue:""+n}}function M_(n,e){return I_(e)?pd(e):fd(n,e)}var gn=class{constructor(){this._=void 0}};function F_(n,e,t){return n instanceof _n?function(i,o){let a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Lc(o)&&(o=Mc(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(t,e):n instanceof jt?gd(n,e):n instanceof zt?_d(n,e):function(i,o){let a=md(i,o),u=xh(a)+xh(i.Pe);return _a(a)&&_a(i.Pe)?pd(u):fd(i.serializer,u)}(n,e)}function U_(n,e,t){return n instanceof jt?gd(n,e):n instanceof zt?_d(n,e):t}function md(n,e){return n instanceof yn?function(r){return _a(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}var _n=class extends gn{},jt=class extends gn{constructor(e){super(),this.elements=e}};function gd(n,e){let t=yd(e);for(let r of n.elements)t.some(i=>Ge(i,r))||t.push(r);return{arrayValue:{values:t}}}var zt=class extends gn{constructor(e){super(),this.elements=e}};function _d(n,e){let t=yd(e);for(let r of n.elements)t=t.filter(i=>!Ge(i,r));return{arrayValue:{values:t}}}var yn=class extends gn{constructor(e,t){super(),this.serializer=e,this.Pe=t}};function xh(n){return ee(n.integerValue||n.doubleValue)}function yd(n){return Fc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function q_(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof jt&&i instanceof jt||r instanceof zt&&i instanceof zt?ln(r.elements,i.elements,Ge):r instanceof yn&&i instanceof yn?Ge(r.Pe,i.Pe):r instanceof _n&&i instanceof _n}(n.transform,e.transform)}var Ca=class{constructor(e,t){this.version=e,this.transformResults=t}},gt=class n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new n}static exists(e){return new n(void 0,e)}static updateTime(e){return new n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function Mi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}var vn=class{};function vd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new yr(n.key,gt.none()):new Gt(n.key,n.data,gt.none());{let t=n.data,r=Ne.empty(),i=new ye(be.comparator);for(let o of e.fields)if(!i.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new rt(n.key,r,new Ue(i.toArray()),gt.none())}}function B_(n,e,t){n instanceof Gt?function(i,o,a){let u=i.value.clone(),h=Lh(i.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):n instanceof rt?function(i,o,a){if(!Mi(i.precondition,o))return void o.convertToUnknownDocument(a.version);let u=Lh(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Id(i)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,e,t):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function fr(n,e,t,r){return n instanceof Gt?function(o,a,u,h){if(!Mi(o.precondition,a))return u;let d=o.value.clone(),p=Mh(o.fieldTransforms,h,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof rt?function(o,a,u,h){if(!Mi(o.precondition,a))return u;let d=Mh(o.fieldTransforms,h,a),p=a.data;return p.setAll(Id(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(E=>E.field))}(n,e,t,r):function(o,a,u){return Mi(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,e,t)}function j_(n,e){let t=null;for(let r of n.fieldTransforms){let i=e.data.field(r.field),o=md(r.transform,i||null);o!=null&&(t===null&&(t=Ne.empty()),t.set(r.field,o))}return t||null}function Vh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ln(r,i,(o,a)=>q_(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}var Gt=class extends vn{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}},rt=class extends vn{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}};function Id(n){let e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){let r=n.data.field(t);e.set(t,r)}}),e}function Lh(n,e,t){let r=new Map;J(n.length===t.length);for(let i=0;i<t.length;i++){let o=n[i],a=o.transform,u=e.data.field(o.field);r.set(o.field,U_(a,u,t[i]))}return r}function Mh(n,e,t){let r=new Map;for(let i of n){let o=i.transform,a=t.data.field(i.field);r.set(i.field,F_(o,a,e))}return r}var yr=class extends vn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},Da=class extends vn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var Na=class{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){let o=this.mutations[i];o.key.isEqual(e.key)&&B_(o,e,r[i])}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=fr(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=fr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=dd();return this.mutations.forEach(i=>{let o=e.get(i.key),a=o.overlayedDocument,u=this.applyToLocalView(a,o.mutatedFields);u=t.has(i.key)?null:u;let h=vd(a,u);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),j())}isEqual(e){return this.batchId===e.batchId&&ln(this.mutations,e.mutations,(t,r)=>Vh(t,r))&&ln(this.baseMutations,e.baseMutations,(t,r)=>Vh(t,r))}},ka=class n{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){J(e.mutations.length===r.length);let i=function(){return O_}(),o=e.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new n(e,t,r,i)}};var Oa=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};var xa=class{constructor(e,t){this.count=e,this.unchangedNames=t}};var re,K;function z_(n){switch(n){default:return M();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function wd(n){if(n===void 0)return et("GRPC error has no .code"),R.UNKNOWN;switch(n){case re.OK:return R.OK;case re.CANCELLED:return R.CANCELLED;case re.UNKNOWN:return R.UNKNOWN;case re.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case re.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case re.INTERNAL:return R.INTERNAL;case re.UNAVAILABLE:return R.UNAVAILABLE;case re.UNAUTHENTICATED:return R.UNAUTHENTICATED;case re.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case re.NOT_FOUND:return R.NOT_FOUND;case re.ALREADY_EXISTS:return R.ALREADY_EXISTS;case re.PERMISSION_DENIED:return R.PERMISSION_DENIED;case re.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case re.ABORTED:return R.ABORTED;case re.OUT_OF_RANGE:return R.OUT_OF_RANGE;case re.UNIMPLEMENTED:return R.UNIMPLEMENTED;case re.DATA_LOSS:return R.DATA_LOSS;default:return M()}}(K=re||(re={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";var Fh=null;function G_(){return new TextEncoder}var K_=new mt([4294967295,4294967295],0);function Uh(n){let e=G_().encode(n),t=new Qo;return t.update(e),new Uint8Array(t.digest())}function qh(n){let e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new mt([t,r],0),new mt([i,o],0)]}var Va=class n{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Mt(`Invalid padding: ${t}`);if(r<0)throw new Mt(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Mt(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Mt(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=mt.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(mt.fromNumber(r)));return i.compare(K_)===1&&(i=new mt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;let t=Uh(e),[r,i]=qh(t);for(let o=0;o<this.hashCount;o++){let a=this.Ee(r,i,o);if(!this.de(a))return!1}return!0}static create(e,t,r){let i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new n(o,i,t);return r.forEach(u=>a.insert(u)),a}insert(e){if(this.Ie===0)return;let t=Uh(e),[r,i]=qh(t);for(let o=0;o<this.hashCount;o++){let a=this.Ee(r,i,o);this.Ae(a)}}Ae(e){let t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}},Mt=class extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};var Ki=class n{constructor(e,t,r,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let i=new Map;return i.set(e,vr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new n(U.min(),i,new ne(H),nt(),j())}},vr=class n{constructor(e,t,r,i,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new n(r,t,j(),j(),j())}};var an=class{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}},$i=class{constructor(e,t){this.targetId=e,this.me=t}},Hi=class{constructor(e,t,r=Ee.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}},Wi=class{constructor(){this.fe=0,this.ge=jh(),this.pe=Ee.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=j(),t=j(),r=j();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:M()}}),new vr(this.pe,this.ye,e,t,r)}ve(){this.we=!1,this.ge=jh()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,J(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}},La=class{constructor(e){this.Le=e,this.Be=new Map,this.ke=nt(),this.qe=Bh(),this.Qe=new ne(H)}Ke(e){for(let t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(let t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{let r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:M()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){let t=e.targetId,r=e.me.count,i=this.Je(t);if(i){let o=i.target;if(Ra(o))if(r===0){let a=new L(o.path);this.Ue(t,a,ke.newNoDocument(a,U.min()))}else J(r===1);else{let a=this.Ye(t);if(a!==r){let u=this.Ze(e),h=u?this.Xe(u,e,a):1;if(h!==0){this.je(t);let d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}Fh==null||Fh.et(function(p,E,b,S,N){var x,D,q,z,G,Y;let ve={localCacheCount:p,existenceFilterCount:E.count,databaseId:b.database,projectId:b.projectId},W=E.unchangedNames;return W&&(ve.bloomFilter={applied:N===0,hashCount:(x=W==null?void 0:W.hashCount)!==null&&x!==void 0?x:0,bitmapLength:(z=(q=(D=W==null?void 0:W.bits)===null||D===void 0?void 0:D.bitmap)===null||q===void 0?void 0:q.length)!==null&&z!==void 0?z:0,padding:(Y=(G=W==null?void 0:W.bits)===null||G===void 0?void 0:G.padding)!==null&&Y!==void 0?Y:0,mightContain:v=>{var m;return(m=S==null?void 0:S.mightContain(v))!==null&&m!==void 0&&m}}),ve}(a,e.me,this.Le.tt(),u,h))}}}}Ze(e){let t=e.me.unchangedNames;if(!t||!t.bits)return null;let{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=t,a,u;try{a=yt(r).toUint8Array()}catch(h){if(h instanceof ji)return un("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new Va(a,i,o)}catch(h){return un(h instanceof Mt?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.Ie===0?null:u}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){let r=this.Le.getRemoteKeysForTarget(t),i=0;return r.forEach(o=>{let a=this.Le.tt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(u)||(this.Ue(t,o,null),i++)}),i}rt(e){let t=new Map;this.Be.forEach((o,a)=>{let u=this.Je(a);if(u){if(o.current&&Ra(u.target)){let h=new L(u.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,ke.newNoDocument(h,e))}o.be&&(t.set(a,o.Ce()),o.ve())}});let r=j();this.qe.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{let d=this.Je(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(e));let i=new Ki(e,t,this.Qe,this.ke,r);return this.ke=nt(),this.qe=Bh(),this.Qe=new ne(H),i}$e(e,t){if(!this.ze(e))return;let r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;let i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){let t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Wi,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ye(H),this.qe=this.qe.insert(e,t)),t}ze(e){let t=this.Je(e)!==null;return t||k("WatchChangeAggregator","Detected inactive target",e),t}Je(e){let t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Wi),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}};function Bh(){return new ne(L.comparator)}function jh(){return new ne(L.comparator)}var $_={asc:"ASCENDING",desc:"DESCENDING"},H_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},W_={and:"AND",or:"OR"},Ma=class{constructor(e,t){this.databaseId=e,this.useProto3Json=t}};function Fa(n,e){return n.useProto3Json||ms(e)?e:{value:e}}function Qi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ed(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Q_(n,e){return Qi(n,e.toTimestamp())}function ze(n){return J(!!n),U.fromTimestamp(function(t){let r=tt(t);return new de(r.seconds,r.nanos)}(n))}function jc(n,e){return Ua(n,e).canonicalString()}function Ua(n,e){let t=function(i){return new te(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Td(n){let e=te.fromString(n);return J(Pd(e)),e}function qa(n,e){return jc(n.databaseId,e.path)}function na(n,e){let t=Td(e);if(t.get(1)!==n.databaseId.projectId)throw new V(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new V(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new L(bd(t))}function Ad(n,e){return jc(n.databaseId,e)}function J_(n){let e=Td(n);return e.length===4?te.emptyPath():bd(e)}function Ba(n){return new te(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function bd(n){return J(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function zh(n,e,t){return{name:qa(n,e),fields:t.value.mapValue.fields}}function Y_(n,e){let t;if("targetChange"in e){e.targetChange;let r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:M()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(J(p===void 0||typeof p=="string"),Ee.fromBase64String(p||"")):(J(p===void 0||p instanceof Buffer||p instanceof Uint8Array),Ee.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(d){let p=d.code===void 0?R.UNKNOWN:wd(d.code);return new V(p,d.message||"")}(a);t=new Hi(r,i,o,u||null)}else if("documentChange"in e){e.documentChange;let r=e.documentChange;r.document,r.document.name,r.document.updateTime;let i=na(n,r.document.name),o=ze(r.document.updateTime),a=r.document.createTime?ze(r.document.createTime):U.min(),u=new Ne({mapValue:{fields:r.document.fields}}),h=ke.newFoundDocument(i,o,a,u),d=r.targetIds||[],p=r.removedTargetIds||[];t=new an(d,p,h.key,h)}else if("documentDelete"in e){e.documentDelete;let r=e.documentDelete;r.document;let i=na(n,r.document),o=r.readTime?ze(r.readTime):U.min(),a=ke.newNoDocument(i,o),u=r.removedTargetIds||[];t=new an([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;let r=e.documentRemove;r.document;let i=na(n,r.document),o=r.removedTargetIds||[];t=new an([],o,i,null)}else{if(!("filter"in e))return M();{e.filter;let r=e.filter;r.targetId;let{count:i=0,unchangedNames:o}=r,a=new xa(i,o),u=r.targetId;t=new $i(u,a)}}return t}function X_(n,e){let t;if(e instanceof Gt)t={update:zh(n,e.key,e.value)};else if(e instanceof yr)t={delete:qa(n,e.key)};else if(e instanceof rt)t={update:zh(n,e.key,e.data),updateMask:ay(e.fieldMask)};else{if(!(e instanceof Da))return M();t={verify:qa(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,a){let u=a.transform;if(u instanceof _n)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof jt)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof zt)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof yn)return{fieldPath:a.field.canonicalString(),increment:u.Pe};throw M()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:Q_(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M()}(n,e.precondition)),t}function Z_(n,e){return n&&n.length>0?(J(e!==void 0),n.map(t=>function(i,o){let a=i.updateTime?ze(i.updateTime):ze(o);return a.isEqual(U.min())&&(a=ze(o)),new Ca(a,i.transformResults||[])}(t,e))):[]}function ey(n,e){return{documents:[Ad(n,e.path)]}}function ty(n,e){let t={structuredQuery:{}},r=e.path,i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Ad(n,i);let o=function(d){if(d.length!==0)return Rd(Ke.create(d,"and"))}(e.filters);o&&(t.structuredQuery.where=o);let a=function(d){if(d.length!==0)return d.map(p=>function(b){return{field:rn(b.field),direction:iy(b.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);let u=Fa(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:i}}function ny(n){let e=J_(n.parent),t=n.structuredQuery,r=t.from?t.from.length:0,i=null;if(r>0){J(r===1);let p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let o=[];t.where&&(o=function(E){let b=Sd(E);return b instanceof Ke&&id(b)?b.getFilters():[b]}(t.where));let a=[];t.orderBy&&(a=function(E){return E.map(b=>function(N){return new pn(sn(N.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(b))}(t.orderBy));let u=null;t.limit&&(u=function(E){let b;return b=typeof E=="object"?E.value:E,ms(b)?null:b}(t.limit));let h=null;t.startAt&&(h=function(E){let b=!!E.before,S=E.values||[];return new fn(S,b)}(t.startAt));let d=null;return t.endAt&&(d=function(E){let b=!E.before,S=E.values||[];return new fn(S,b)}(t.endAt)),R_(e,i,a,o,u,"F",h,d)}function ry(n,e){let t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Sd(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":let r=sn(t.unaryFilter.field);return ae.create(r,"==",{doubleValue:NaN});case"IS_NULL":let i=sn(t.unaryFilter.field);return ae.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let o=sn(t.unaryFilter.field);return ae.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let a=sn(t.unaryFilter.field);return ae.create(a,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(n):n.fieldFilter!==void 0?function(t){return ae.create(sn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ke.create(t.compositeFilter.filters.map(r=>Sd(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M()}}(t.compositeFilter.op))}(n):M()}function iy(n){return $_[n]}function sy(n){return H_[n]}function oy(n){return W_[n]}function rn(n){return{fieldPath:n.canonicalString()}}function sn(n){return be.fromServerFormat(n.fieldPath)}function Rd(n){return n instanceof ae?function(t){if(t.op==="=="){if(Ch(t.value))return{unaryFilter:{field:rn(t.field),op:"IS_NAN"}};if(Ph(t.value))return{unaryFilter:{field:rn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ch(t.value))return{unaryFilter:{field:rn(t.field),op:"IS_NOT_NAN"}};if(Ph(t.value))return{unaryFilter:{field:rn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rn(t.field),op:sy(t.op),value:t.value}}}(n):n instanceof Ke?function(t){let r=t.getFilters().map(i=>Rd(i));return r.length===1?r[0]:{compositeFilter:{op:oy(t.op),filters:r}}}(n):M()}function ay(n){let e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Pd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}var Ir=class n{constructor(e,t,r,i,o=U.min(),a=U.min(),u=Ee.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(e){return new n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}};var ja=class{constructor(e){this.ct=e}};function cy(n){let e=ny({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Pa(e,e.limit,"L"):e}var Ji=class{constructor(){}Pt(e,t){this.It(e,t),t.Tt()}It(e,t){if("nullValue"in e)this.Et(t,5);else if("booleanValue"in e)this.Et(t,10),t.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(t,15),t.dt(ee(e.integerValue));else if("doubleValue"in e){let r=ee(e.doubleValue);isNaN(r)?this.Et(t,13):(this.Et(t,15),mr(r)?t.dt(0):t.dt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Et(t,20),typeof r=="string"&&(r=tt(r)),t.At(`${r.seconds||""}`),t.dt(r.nanos||0)}else if("stringValue"in e)this.Rt(e.stringValue,t),this.Vt(t);else if("bytesValue"in e)this.Et(t,30),t.ft(yt(e.bytesValue)),this.Vt(t);else if("referenceValue"in e)this.gt(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.Et(t,45),t.dt(r.latitude||0),t.dt(r.longitude||0)}else"mapValue"in e?td(e)?this.Et(t,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,t),this.Vt(t)):"arrayValue"in e?(this.wt(e.arrayValue,t),this.Vt(t)):M()}Rt(e,t){this.Et(t,25),this.St(e,t)}St(e,t){t.At(e)}yt(e,t){let r=e.fields||{};this.Et(t,55);for(let i of Object.keys(r))this.Rt(i,t),this.It(r[i],t)}wt(e,t){let r=e.values||[];this.Et(t,50);for(let i of r)this.It(i,t)}gt(e,t){this.Et(t,37),L.fromName(e).path.forEach(r=>{this.Et(t,60),this.St(r,t)})}Et(e,t){e.dt(t)}Vt(e){e.dt(2)}};Ji.bt=new Ji;var za=class{constructor(){this._n=new Ga}addToCollectionParentIndex(e,t){return this._n.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(qt.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(qt.min())}updateCollectionGroup(e,t,r){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}},Ga=class{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new ye(te.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ye(te.comparator)).toArray()}};var nw=new Uint8Array(0);var Fe=class n{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new n(e,n.DEFAULT_COLLECTION_PERCENTILE,n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}};Fe.DEFAULT_COLLECTION_PERCENTILE=10,Fe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Fe.DEFAULT=new Fe(41943040,Fe.DEFAULT_COLLECTION_PERCENTILE,Fe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Fe.DISABLED=new Fe(-1,0,0);var wr=class n{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new n(0)}static Ln(){return new n(-1)}};var Ka=class{constructor(){this.changes=new vt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ke.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return r!==void 0?P.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}};var $a=class{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}};var Ha=class{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&fr(r.mutation,i,Ue.empty(),de.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,j()).next(()=>r))}getLocalViewOfDocuments(e,t,r=j()){let i=Lt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(o=>{let a=ur();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){let r=Lt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,j()))}populateOverlays(e,t,r){let i=[];return r.forEach(o=>{t.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,r,i){let o=nt(),a=dr(),u=function(){return dr()}();return t.forEach((h,d)=>{let p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof rt)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),fr(p.mutation,d,p.mutation.getFieldMask(),de.now())):a.set(d.key,Ue.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var E;return u.set(d,new $a(p,(E=a.get(d))!==null&&E!==void 0?E:null))}),u))}recalculateAndSaveOverlays(e,t){let r=dr(),i=new ne((a,u)=>a-u),o=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(let u of a)u.keys().forEach(h=>{let d=t.get(h);if(d===null)return;let p=r.get(h)||Ue.empty();p=u.applyToLocalView(d,p),r.set(h,p);let E=(i.get(u.batchId)||j()).add(h);i=i.insert(u.batchId,E)})}).next(()=>{let a=[],u=i.getReverseIterator();for(;u.hasNext();){let h=u.getNext(),d=h.key,p=h.value,E=dd();p.forEach(b=>{if(!o.has(b)){let S=vd(t.get(b),r.get(b));S!==null&&E.set(b,S),o=o.add(b)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,E))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return L.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):P_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(o=>{let a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):P.resolve(Lt()),u=-1,h=o;return a.next(d=>P.forEach(d,(p,E)=>(u<E.largestBatchId&&(u=E.largestBatchId),o.get(p)?P.resolve():this.remoteDocumentCache.getEntry(e,p).next(b=>{h=h.insert(p,b)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,h,d,j())).next(p=>({batchId:u,changes:hd(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next(r=>{let i=ur();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){let o=t.collectionGroup,a=ur();return this.indexManager.getCollectionParents(e,o).next(u=>P.forEach(u,h=>{let d=function(E,b){return new mn(b,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(p=>{p.forEach((E,b)=>{a=a.insert(E,b)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i))).next(a=>{o.forEach((h,d)=>{let p=d.getKey();a.get(p)===null&&(a=a.insert(p,ke.newInvalidDocument(p)))});let u=ur();return a.forEach((h,d)=>{let p=o.get(h);p!==void 0&&fr(p.mutation,d,Ue.empty(),de.now()),_s(t,d)&&(u=u.insert(h,d))}),u})}};var Wa=class{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return P.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:ze(i.createTime)}}(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(i){return{name:i.name,query:cy(i.bundledQuery),readTime:ze(i.readTime)}}(t)),P.resolve()}};var Qa=class{constructor(){this.overlays=new ne(L.comparator),this.hr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){let r=Lt();return P.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,o)=>{this.ht(e,t,o)}),P.resolve()}removeOverlaysForBatchId(e,t,r){let i=this.hr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),P.resolve()}getOverlaysForCollection(e,t,r){let i=Lt(),o=t.length+1,a=new L(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){let h=u.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return P.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new ne((d,p)=>d-p),a=this.overlays.getIterator();for(;a.hasNext();){let d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=o.get(d.largestBatchId);p===null&&(p=Lt(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}let u=Lt(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,p)=>u.set(d,p)),!(u.size()>=i)););return P.resolve(u)}ht(e,t,r){let i=this.overlays.get(r.key);if(i!==null){let a=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Oa(t,r));let o=this.hr.get(t);o===void 0&&(o=j(),this.hr.set(t,o)),this.hr.set(t,o.add(r.key))}};var Er=class{constructor(){this.Pr=new ye(ie.Ir),this.Tr=new ye(ie.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){let r=new ie(e,t);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Ar(new ie(e,t))}Rr(e,t){e.forEach(r=>this.removeReference(r,t))}Vr(e){let t=new L(new te([])),r=new ie(t,e),i=new ie(t,e+1),o=[];return this.Tr.forEachInRange([r,i],a=>{this.Ar(a),o.push(a.key)}),o}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){let t=new L(new te([])),r=new ie(t,e),i=new ie(t,e+1),o=j();return this.Tr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(e){let t=new ie(e,0),r=this.Pr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}},ie=class{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return L.comparator(e.key,t.key)||H(e.pr,t.pr)}static Er(e,t){return H(e.pr,t.pr)||L.comparator(e.key,t.key)}};var Ja=class{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new ye(ie.Ir)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){let o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let a=new Na(o,t,r,i);this.mutationQueue.push(a);for(let u of i)this.wr=this.wr.add(new ie(u.key,o)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return P.resolve(a)}lookupMutationBatch(e,t){return P.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){let r=t+1,i=this.br(r),o=i<0?0:i;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new ie(t,0),i=new ie(t,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,i],a=>{let u=this.Sr(a.pr);o.push(u)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ye(H);return t.forEach(i=>{let o=new ie(i,0),a=new ie(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,a],u=>{r=r.add(u.pr)})}),P.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,i=r.length+1,o=r;L.isDocumentKey(o)||(o=o.child(""));let a=new ie(new L(o),0),u=new ye(H);return this.wr.forEachWhile(h=>{let d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(u=u.add(h.pr)),!0)},a),P.resolve(this.Dr(u))}Dr(e){let t=[];return e.forEach(r=>{let i=this.Sr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){J(this.Cr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return P.forEach(t.mutations,i=>{let o=new ie(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,t){let r=new ie(t,0),i=this.wr.firstAfterOrEqual(r);return P.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Cr(e,t){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){let t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}};var Ya=class{constructor(e){this.vr=e,this.docs=function(){return new ne(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,i=this.docs.get(r),o=i?i.size:0,a=this.vr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return P.resolve(r?r.document.mutableCopy():ke.newInvalidDocument(t))}getEntries(e,t){let r=nt();return t.forEach(i=>{let o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():ke.newInvalidDocument(i))}),P.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=nt(),a=t.path,u=new L(a.child("")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){let{key:d,value:{document:p}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||__(g_(p),r)<=0||(i.has(p.key)||_s(t,p))&&(o=o.insert(p.key,p.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(e,t,r,i){M()}Fr(e,t){return P.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Xa(this)}getSize(e){return P.resolve(this.size)}},Xa=class extends Ka{constructor(e){super(),this.ar=e}applyChanges(e){let t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),P.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}};var Za=class{constructor(e){this.persistence=e,this.Mr=new vt(t=>Uc(t),qc),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Er,this.targetCount=0,this.Lr=wr.Nn()}forEachTarget(e,t){return this.Mr.forEach((r,i)=>t(i)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Or&&(this.Or=t),P.resolve()}qn(e){this.Mr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Lr=new wr(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.qn(t),P.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,r){let i=0,o=[];return this.Mr.forEach((a,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.Mr.delete(a),o.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),P.waitFor(o).next(()=>i)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){let r=this.Mr.get(t)||null;return P.resolve(r)}addMatchingKeys(e,t,r){return this.Nr.dr(t,r),P.resolve()}removeMatchingKeys(e,t,r){this.Nr.Rr(t,r);let i=this.persistence.referenceDelegate,o=[];return i&&t.forEach(a=>{o.push(i.markPotentiallyOrphaned(e,a))}),P.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),P.resolve()}getMatchingKeysForTargetId(e,t){let r=this.Nr.gr(t);return P.resolve(r)}containsKey(e,t){return P.resolve(this.Nr.containsKey(t))}};var ec=class{constructor(e,t){this.Br={},this.overlays={},this.kr=new pr(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new Za(this),this.indexManager=new za,this.remoteDocumentCache=function(i){return new Ya(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new ja(t),this.$r=new Wa(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Qa,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Br[e.toKey()];return r||(r=new Ja(t,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,r){k("MemoryPersistence","Starting transaction:",e);let i=new tc(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(o=>this.referenceDelegate.Wr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Gr(e,t){return P.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,t)))}},tc=class extends pa{constructor(e){super(),this.currentSequenceNumber=e}},nc=class n{constructor(e){this.persistence=e,this.zr=new Er,this.jr=null}static Hr(e){return new n(e)}get Jr(){if(this.jr)return this.jr;throw M()}addReference(e,t,r){return this.zr.addReference(r,t),this.Jr.delete(r.toString()),P.resolve()}removeReference(e,t,r){return this.zr.removeReference(r,t),this.Jr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),P.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(i=>this.Jr.add(i.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Jr,r=>{let i=L.fromPath(r);return this.Yr(e,i).next(o=>{o||t.removeEntry(i,U.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(r=>{r?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return P.or([()=>P.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}};var rc=class n{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.qi=r,this.Qi=i}static Ki(e,t){let r=j(),i=j();for(let o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new n(e,t.fromCache,r,i)}};var ic=class{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}};var sc=class{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return cl()?8:v_(se())>0?6:4}()}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,r,i){let o={result:null};return this.ji(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Hi(e,t,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;let a=new ic;return this.Ji(e,t,a).next(u=>{if(o.result=u,this.Ui)return this.Yi(e,t,a,u.size)})}).next(()=>o.result)}Yi(e,t,r,i){return r.documentReadCount<this.Wi?(cr()<=B.DEBUG&&k("QueryEngine","SDK will not create cache indexes for query:",nn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),P.resolve()):(cr()<=B.DEBUG&&k("QueryEngine","Query:",nn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(cr()<=B.DEBUG&&k("QueryEngine","The SDK decides to create cache indexes for query:",nn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,je(t))):P.resolve())}ji(e,t){if(Oh(t))return P.resolve(null);let r=je(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Pa(t,null,"F"),r=je(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{let a=j(...o);return this.zi.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,r).next(h=>{let d=this.Zi(t,u);return this.Xi(t,d,a,h.readTime)?this.ji(e,Pa(t,null,"F")):this.es(e,d,t,h)}))})))}Hi(e,t,r,i){return Oh(t)||i.isEqual(U.min())?P.resolve(null):this.zi.getDocuments(e,r).next(o=>{let a=this.Zi(t,o);return this.Xi(t,a,r,i)?P.resolve(null):(cr()<=B.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),nn(t)),this.es(e,a,t,m_(i,-1)).next(u=>u))})}Zi(e,t){let r=new ye(ud(e));return t.forEach((i,o)=>{_s(e,o)&&(r=r.add(o))}),r}Xi(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;let o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ji(e,t,r){return cr()<=B.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",nn(t)),this.zi.getDocumentsMatchingQuery(e,t,qt.min(),r)}es(e,t,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}};var oc=class{constructor(e,t,r,i){this.persistence=e,this.ts=t,this.serializer=i,this.ns=new ne(H),this.rs=new vt(o=>Uc(o),qc),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ha(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}};function uy(n,e,t,r){return new oc(n,e,t,r)}async function Cd(n,e){let t=F(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,t._s(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{let a=[],u=[],h=j();for(let d of i){a.push(d.batchId);for(let p of d.mutations)h=h.add(p.key)}for(let d of o){u.push(d.batchId);for(let p of d.mutations)h=h.add(p.key)}return t.localDocuments.getDocuments(r,h).next(d=>({us:d,removedBatchIds:a,addedBatchIds:u}))})})}function ly(n,e){let t=F(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{let i=e.batch.keys(),o=t.os.newChangeBuffer({trackRemovals:!0});return function(u,h,d,p){let E=d.batch,b=E.keys(),S=P.resolve();return b.forEach(N=>{S=S.next(()=>p.getEntry(h,N)).next(x=>{let D=d.docVersions.get(N);J(D!==null),x.version.compareTo(D)<0&&(E.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),p.addEntry(x)))})}),S.next(()=>u.mutationQueue.removeMutationBatch(h,E))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=j();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(h=h.add(u.batch.mutations[d].key));return h}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Dd(n){let e=F(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}function hy(n,e){let t=F(n),r=e.snapshotVersion,i=t.ns;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{let a=t.os.newChangeBuffer({trackRemovals:!0});i=t.ns;let u=[];e.targetChanges.forEach((p,E)=>{let b=i.get(E);if(!b)return;u.push(t.Qr.removeMatchingKeys(o,p.removedDocuments,E).next(()=>t.Qr.addMatchingKeys(o,p.addedDocuments,E)));let S=b.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(E)!==null?S=S.withResumeToken(Ee.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,r)),i=i.insert(E,S),function(x,D,q){return x.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(b,S,p)&&u.push(t.Qr.updateTargetData(o,S))});let h=nt(),d=j();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(o,p))}),u.push(dy(o,a,e.documentUpdates).next(p=>{h=p.cs,d=p.ls})),!r.isEqual(U.min())){let p=t.Qr.getLastRemoteSnapshotVersion(o).next(E=>t.Qr.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(p)}return P.waitFor(u).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(t.ns=i,o))}function dy(n,e,t){let r=j(),i=j();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let a=nt();return t.forEach((u,h)=>{let d=o.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(u)),h.isNoDocument()&&h.version.isEqual(U.min())?(e.removeEntry(u,h.readTime),a=a.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(h),a=a.insert(u,h)):k("LocalStore","Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)}),{cs:a,ls:i}})}function fy(n,e){let t=F(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function py(n,e){let t=F(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Qr.getTargetData(r,e).next(o=>o?(i=o,P.resolve(i)):t.Qr.allocateTargetId(r).next(a=>(i=new Ir(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{let i=t.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.ns=t.ns.insert(r.targetId,r),t.rs.set(e,r.targetId)),r})}async function ac(n,e,t){let r=F(n),i=r.ns.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Cr(a))throw a;k("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function Gh(n,e,t){let r=F(n),i=U.min(),o=j();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,p){let E=F(h),b=E.rs.get(p);return b!==void 0?P.resolve(E.ns.get(b)):E.Qr.getTargetData(d,p)}(r,a,je(e)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r.ts.getDocumentsMatchingQuery(a,e,t?i:U.min(),t?o:j())).next(u=>(my(r,D_(e),u),{documents:u,hs:o})))}function my(n,e,t){let r=n.ss.get(e)||U.min();t.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.ss.set(e,r)}var Yi=class{constructor(){this.activeTargetIds=L_()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}};var cc=class{constructor(){this.no=new Yi,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,r){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Yi,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}};var uc=class{io(e){}shutdown(){}};var Xi=class{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){k("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(let e of this.uo)e(0)}ao(){k("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(let e of this.uo)e(1)}static D(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}};var Vi=null;function ra(){return Vi===null?Vi=function(){return 268435456+Math.round(2147483648*Math.random())}():Vi++,"0x"+Vi.toString(16)}var gy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};var lc=class{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}};var _e="WebChannelConnection",hc=class extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;let r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+t.host,this.So=`projects/${i}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Do(){return!1}Co(t,r,i,o,a){let u=ra(),h=this.vo(t,r.toUriEncodedString());k("RestConnection",`Sending RPC '${t}' ${u}:`,h,i);let d={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(d,o,a),this.Mo(t,h,d,i).then(p=>(k("RestConnection",`Received RPC '${t}' ${u}: `,p),p),p=>{throw un("RestConnection",`RPC '${t}' ${u} failed with error: `,p,"url: ",h,"request:",i),p})}xo(t,r,i,o,a,u){return this.Co(t,r,i,o,a)}Fo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+En}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>t[a]=o),i&&i.headers.forEach((o,a)=>t[a]=o)}vo(t,r){let i=gy[t];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,t,r,i){let o=ra();return new Promise((a,u)=>{let h=new Jo;h.setWithCredentials(!0),h.listenOnce(Xo.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case ar.NO_ERROR:let p=h.getResponseJson();k(_e,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),a(p);break;case ar.TIMEOUT:k(_e,`RPC '${e}' ${o} timed out`),u(new V(R.DEADLINE_EXCEEDED,"Request time out"));break;case ar.HTTP_ERROR:let E=h.getStatus();if(k(_e,`RPC '${e}' ${o} failed with status:`,E,"response text:",h.getResponseText()),E>0){let b=h.getResponseJson();Array.isArray(b)&&(b=b[0]);let S=b==null?void 0:b.error;if(S&&S.status&&S.message){let N=function(D){let q=D.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(q)>=0?q:R.UNKNOWN}(S.status);u(new V(N,S.message))}else u(new V(R.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new V(R.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{k(_e,`RPC '${e}' ${o} completed.`)}});let d=JSON.stringify(i);k(_e,`RPC '${e}' ${o} sending request:`,i),h.send(t,"POST",d,r,15)})}Oo(e,t,r){let i=ra(),o=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=ta(),u=ea(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.xmlHttpFactory=new Yo({})),this.Fo(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;let p=o.join("");k(_e,`Creating RPC '${e}' stream ${i}: ${p}`,h);let E=a.createWebChannel(p,h),b=!1,S=!1,N=new lc({lo:D=>{S?k(_e,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(b||(k(_e,`Opening RPC '${e}' stream ${i} transport.`),E.open(),b=!0),k(_e,`RPC '${e}' stream ${i} sending:`,D),E.send(D))},ho:()=>E.close()}),x=(D,q,z)=>{D.listen(q,G=>{try{z(G)}catch(Y){setTimeout(()=>{throw Y},0)}})};return x(E,tn.EventType.OPEN,()=>{S||(k(_e,`RPC '${e}' stream ${i} transport opened.`),N.mo())}),x(E,tn.EventType.CLOSE,()=>{S||(S=!0,k(_e,`RPC '${e}' stream ${i} transport closed`),N.po())}),x(E,tn.EventType.ERROR,D=>{S||(S=!0,un(_e,`RPC '${e}' stream ${i} transport errored:`,D),N.po(new V(R.UNAVAILABLE,"The operation could not be completed")))}),x(E,tn.EventType.MESSAGE,D=>{var q;if(!S){let z=D.data[0];J(!!z);let G=z,Y=G.error||((q=G[0])===null||q===void 0?void 0:q.error);if(Y){k(_e,`RPC '${e}' stream ${i} received error:`,Y);let ve=Y.status,W=function(_){let y=re[_];if(y!==void 0)return wd(y)}(ve),v=Y.message;W===void 0&&(W=R.INTERNAL,v="Unknown error status: "+ve+" with message "+Y.message),S=!0,N.po(new V(W,v)),E.close()}else k(_e,`RPC '${e}' stream ${i} received:`,z),N.yo(z)}}),x(u,Zo.STAT_EVENT,D=>{D.stat===Oi.PROXY?k(_e,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===Oi.NOPROXY&&k(_e,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.fo()},0),N}};function ia(){return typeof document!="undefined"?document:null}function ys(n){return new Ma(n,!0)}var Zi=class{constructor(e,t,r=1e3,i=1.5,o=6e4){this.oi=e,this.timerId=t,this.No=r,this.Lo=i,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();let t=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,t-r);i>0&&k("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}};var es=class{constructor(e,t,r,i,o,a,u,h){this.oi=e,this.Go=r,this.zo=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Zi(e,t)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,t){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():t&&t.code===R.RESOURCE_EXHAUSTED?(et(t.toString()),et("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):t&&t.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(t)}__(){}auth(){this.state=1;let e=this.a_(this.jo),t=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===t&&this.u_(r,i)},r=>{e(()=>{let i=new V(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,t){let r=this.a_(this.jo);this.stream=this.l_(e,t),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return k("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return t=>{this.oi.enqueueAndForget(()=>this.jo===e?t():(k("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}},dc=class extends es{constructor(e,t,r,i,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}l_(e,t){return this.connection.Oo("Listen",e,t)}onMessage(e){this.Yo.reset();let t=Y_(this.serializer,e),r=function(o){if(!("targetChange"in o))return U.min();let a=o.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?ze(a.readTime):U.min()}(e);return this.listener.h_(t,r)}P_(e){let t={};t.database=Ba(this.serializer),t.addTarget=function(o,a){let u,h=a.target;if(u=Ra(h)?{documents:ey(o,h)}:{query:ty(o,h)._t},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Ed(o,a.resumeToken);let d=Fa(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){u.readTime=Qi(o,a.snapshotVersion.toTimestamp());let d=Fa(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,e);let r=ry(this.serializer,e);r&&(t.labels=r),this.i_(t)}I_(e){let t={};t.database=Ba(this.serializer),t.removeTarget=e,this.i_(t)}},fc=class extends es{constructor(e,t,r,i,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,t){return this.connection.Oo("Write",e,t)}onMessage(e){if(J(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();let t=Z_(e.writeResults,e.commitTime),r=ze(e.commitTime);return this.listener.A_(r,t)}return J(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){let e={};e.database=Ba(this.serializer),this.i_(e)}d_(e){let t={streamToken:this.lastStreamToken,writes:e.map(r=>X_(this.serializer,r))};this.i_(t)}};var pc=class extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new V(R.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,t,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Co(e,Ua(t,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new V(R.UNKNOWN,o.toString())})}xo(e,t,r,i,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.xo(e,Ua(t,r),i,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new V(R.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}},mc=class{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(et(t),this.y_=!1):k("OnlineStateTracker",t)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}};var gc=class{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(a=>{r.enqueueAndForget(async()=>{Kt(this)&&(k("RemoteStore","Restarting streams for network reachability change."),await async function(h){let d=F(h);d.M_.add(4),await Dr(d),d.N_.set("Unknown"),d.M_.delete(4),await vs(d)}(this))})}),this.N_=new mc(r,i)}};async function vs(n){if(Kt(n))for(let e of n.x_)await e(!0)}async function Dr(n){for(let e of n.x_)await e(!1)}function Nd(n,e){let t=F(n);t.F_.has(e.targetId)||(t.F_.set(e.targetId,e),$c(t)?Kc(t):An(t).Xo()&&Gc(t,e))}function zc(n,e){let t=F(n),r=An(t);t.F_.delete(e),r.Xo()&&kd(t,e),t.F_.size===0&&(r.Xo()?r.n_():Kt(t)&&t.N_.set("Unknown"))}function Gc(n,e){if(n.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){let t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}An(n).P_(e)}function kd(n,e){n.L_.xe(e),An(n).I_(e)}function Kc(n){n.L_=new La({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.F_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),An(n).start(),n.N_.w_()}function $c(n){return Kt(n)&&!An(n).Zo()&&n.F_.size>0}function Kt(n){return F(n).M_.size===0}function Od(n){n.L_=void 0}async function _y(n){n.N_.set("Online")}async function yy(n){n.F_.forEach((e,t)=>{Gc(n,e)})}async function vy(n,e){Od(n),$c(n)?(n.N_.D_(e),Kc(n)):n.N_.set("Unknown")}async function Iy(n,e,t){if(n.N_.set("Online"),e instanceof Hi&&e.state===2&&e.cause)try{await async function(i,o){let a=o.cause;for(let u of o.targetIds)i.F_.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.F_.delete(u),i.L_.removeTarget(u))}(n,e)}catch(r){k("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ts(n,r)}else if(e instanceof an?n.L_.Ke(e):e instanceof $i?n.L_.He(e):n.L_.We(e),!t.isEqual(U.min()))try{let r=await Dd(n.localStore);t.compareTo(r)>=0&&await function(o,a){let u=o.L_.rt(a);return u.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){let p=o.F_.get(d);p&&o.F_.set(d,p.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,d)=>{let p=o.F_.get(h);if(!p)return;o.F_.set(h,p.withResumeToken(Ee.EMPTY_BYTE_STRING,p.snapshotVersion)),kd(o,h);let E=new Ir(p.target,h,d,p.sequenceNumber);Gc(o,E)}),o.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){k("RemoteStore","Failed to raise snapshot:",r),await ts(n,r)}}async function ts(n,e,t){if(!Cr(e))throw e;n.M_.add(1),await Dr(n),n.N_.set("Offline"),t||(t=()=>Dd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{k("RemoteStore","Retrying IndexedDB access"),await t(),n.M_.delete(1),await vs(n)})}function xd(n,e){return e().catch(t=>ts(n,t,e))}async function Is(n){let e=F(n),t=It(e),r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;wy(e);)try{let i=await fy(e.localStore,r);if(i===null){e.v_.length===0&&t.n_();break}r=i.batchId,Ey(e,i)}catch(i){await ts(e,i)}Vd(e)&&Ld(e)}function wy(n){return Kt(n)&&n.v_.length<10}function Ey(n,e){n.v_.push(e);let t=It(n);t.Xo()&&t.E_&&t.d_(e.mutations)}function Vd(n){return Kt(n)&&!It(n).Zo()&&n.v_.length>0}function Ld(n){It(n).start()}async function Ty(n){It(n).V_()}async function Ay(n){let e=It(n);for(let t of n.v_)e.d_(t.mutations)}async function by(n,e,t){let r=n.v_.shift(),i=ka.from(r,e,t);await xd(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Is(n)}async function Sy(n,e){e&&It(n).E_&&await async function(r,i){if(function(a){return z_(a)&&a!==R.ABORTED}(i.code)){let o=r.v_.shift();It(r).t_(),await xd(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Is(r)}}(n,e),Vd(n)&&Ld(n)}async function Kh(n,e){let t=F(n);t.asyncQueue.verifyOperationInProgress(),k("RemoteStore","RemoteStore received new credentials");let r=Kt(t);t.M_.add(3),await Dr(t),r&&t.N_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.M_.delete(3),await vs(t)}async function Ry(n,e){let t=F(n);e?(t.M_.delete(2),await vs(t)):e||(t.M_.add(2),await Dr(t),t.N_.set("Unknown"))}function An(n){return n.B_||(n.B_=function(t,r,i){let o=F(t);return o.f_(),new dc(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Po:_y.bind(null,n),To:yy.bind(null,n),Ao:vy.bind(null,n),h_:Iy.bind(null,n)}),n.x_.push(async e=>{e?(n.B_.t_(),$c(n)?Kc(n):n.N_.set("Unknown")):(await n.B_.stop(),Od(n))})),n.B_}function It(n){return n.k_||(n.k_=function(t,r,i){let o=F(t);return o.f_(),new fc(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:Ty.bind(null,n),Ao:Sy.bind(null,n),R_:Ay.bind(null,n),A_:by.bind(null,n)}),n.x_.push(async e=>{e?(n.k_.t_(),await Is(n)):(await n.k_.stop(),n.v_.length>0&&(k("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}var _c=class n{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new qe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){let a=Date.now()+r,u=new n(e,t,a,i,o);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function Hc(n,e){if(et("AsyncQueue",`${e}: ${n}`),Cr(n))return new V(R.UNAVAILABLE,`${e}: ${n}`);throw n}var ns=class n{constructor(e){this.comparator=e?(t,r)=>e(t,r)||L.comparator(t.key,r.key):(t,r)=>L.comparator(t.key,r.key),this.keyedMap=ur(),this.sortedSet=new ne(this.comparator)}static emptySet(e){return new n(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let i=t.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){let r=new n;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}};var rs=class{constructor(){this.q_=new ne(L.comparator)}track(e){let t=e.doc.key,r=this.q_.get(t);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(t,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(t):e.type===1&&r.type===2?this.q_=this.q_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):M():this.q_=this.q_.insert(t,e)}Q_(){let e=[];return this.q_.inorderTraversal((t,r)=>{e.push(r)}),e}},In=class n{constructor(e,t,r,i,o,a,u,h,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,o){let a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new n(e,t,ns.emptySet(t),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&gs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}};var yc=class{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}},vc=class{constructor(){this.queries=new vt(e=>cd(e),gs),this.onlineState="Unknown",this.z_=new Set}};async function Md(n,e){let t=F(n),r=3,i=e.query,o=t.queries.get(i);o?!o.W_()&&e.G_()&&(r=2):(o=new yc,r=e.G_()?0:1);try{switch(r){case 0:o.K_=await t.onListen(i,!0);break;case 1:o.K_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){let u=Hc(a,`Initialization of query '${nn(e.query)}' failed`);return void e.onError(u)}t.queries.set(i,o),o.U_.push(e),e.j_(t.onlineState),o.K_&&e.H_(o.K_)&&Wc(t)}async function Fd(n,e){let t=F(n),r=e.query,i=3,o=t.queries.get(r);if(o){let a=o.U_.indexOf(e);a>=0&&(o.U_.splice(a,1),o.U_.length===0?i=e.G_()?0:1:!o.W_()&&e.G_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Py(n,e){let t=F(n),r=!1;for(let i of e){let o=i.query,a=t.queries.get(o);if(a){for(let u of a.U_)u.H_(i)&&(r=!0);a.K_=i}}r&&Wc(t)}function Cy(n,e,t){let r=F(n),i=r.queries.get(e);if(i)for(let o of i.U_)o.onError(t);r.queries.delete(e)}function Wc(n){n.z_.forEach(e=>{e.next()})}var Ic,$h;($h=Ic||(Ic={})).J_="default",$h.Cache="cache";var is=class{constructor(e,t,r){this.query=e,this.Y_=t,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){let r=[];for(let i of e.docChanges)i.type!==3&&r.push(i);e=new In(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),t=!0):this.ta(e,this.onlineState)&&(this.na(e),t=!0),this.X_=e,t}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let t=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),t=!0),t}ta(e,t){if(!e.fromCache||!this.G_())return!0;let r=t!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ea(e){if(e.docChanges.length>0)return!0;let t=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}na(e){e=In.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Ic.Cache}};var ss=class{constructor(e){this.key=e}},os=class{constructor(e){this.key=e}},wc=class{constructor(e,t){this.query=e,this.la=t,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=j(),this.mutatedKeys=j(),this.Ia=ud(e),this.Ta=new ns(this.Ia)}get Ea(){return this.la}da(e,t){let r=t?t.Aa:new rs,i=t?t.Ta:this.Ta,o=t?t.mutatedKeys:this.mutatedKeys,a=i,u=!1,h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,E)=>{let b=i.get(p),S=_s(this.query,E)?E:null,N=!!b&&this.mutatedKeys.has(b.key),x=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations),D=!1;b&&S?b.data.isEqual(S.data)?N!==x&&(r.track({type:3,doc:S}),D=!0):this.Ra(b,S)||(r.track({type:2,doc:S}),D=!0,(h&&this.Ia(S,h)>0||d&&this.Ia(S,d)<0)&&(u=!0)):!b&&S?(r.track({type:0,doc:S}),D=!0):b&&!S&&(r.track({type:1,doc:b}),D=!0,(h||d)&&(u=!0)),D&&(S?(a=a.add(S),o=x?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){let p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{Ta:a,Aa:r,Xi:u,mutatedKeys:o}}Ra(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){let o=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;let a=e.Aa.Q_();a.sort((p,E)=>function(S,N){let x=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return x(S)-x(N)}(p.type,E.type)||this.Ia(p.doc,E.doc)),this.Va(r),i=i!=null&&i;let u=t&&!i?this.ma():[],h=this.Pa.size===0&&this.current&&!i?1:0,d=h!==this.ha;return this.ha=h,a.length!==0||d?{snapshot:new In(this.query,e.Ta,o,a,e.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:u}:{fa:u}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new rs,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(t=>this.la=this.la.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.la=this.la.delete(t)),this.current=e.current)}ma(){if(!this.current)return[];let e=this.Pa;this.Pa=j(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});let t=[];return e.forEach(r=>{this.Pa.has(r)||t.push(new os(r))}),this.Pa.forEach(r=>{e.has(r)||t.push(new ss(r))}),t}pa(e){this.la=e.hs,this.Pa=j();let t=this.da(e.documents);return this.applyChanges(t,!0)}ya(){return In.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}},Ec=class{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}},Tc=class{constructor(e){this.key=e,this.wa=!1}},Ac=class{constructor(e,t,r,i,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new vt(u=>cd(u),gs),this.Da=new Map,this.Ca=new Set,this.va=new ne(L.comparator),this.Fa=new Map,this.Ma=new Er,this.xa={},this.Oa=new Map,this.Na=wr.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}};async function Dy(n,e,t=!0){let r=Gd(n),i,o=r.ba.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.ya()):i=await Ud(r,e,t,!0),i}async function Ny(n,e){let t=Gd(n);await Ud(t,e,!0,!1)}async function Ud(n,e,t,r){let i=await py(n.localStore,je(e)),o=i.targetId,a=t?n.sharedClientState.addLocalQueryTarget(o):"not-current",u;return r&&(u=await ky(n,e,o,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&Nd(n.remoteStore,i),u}async function ky(n,e,t,r,i){n.Ba=(E,b,S)=>async function(x,D,q,z){let G=D.view.da(q);G.Xi&&(G=await Gh(x.localStore,D.query,!1).then(({documents:v})=>D.view.da(v,G)));let Y=z&&z.targetChanges.get(D.targetId),ve=z&&z.targetMismatches.get(D.targetId)!=null,W=D.view.applyChanges(G,x.isPrimaryClient,Y,ve);return Wh(x,D.targetId,W.fa),W.snapshot}(n,E,b,S);let o=await Gh(n.localStore,e,!0),a=new wc(e,o.hs),u=a.da(o.documents),h=vr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(u,n.isPrimaryClient,h);Wh(n,t,d.fa);let p=new Ec(e,t,a);return n.ba.set(e,p),n.Da.has(t)?n.Da.get(t).push(e):n.Da.set(t,[e]),d.snapshot}async function Oy(n,e,t){let r=F(n),i=r.ba.get(e),o=r.Da.get(i.targetId);if(o.length>1)return r.Da.set(i.targetId,o.filter(a=>!gs(a,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ac(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&zc(r.remoteStore,i.targetId),bc(r,i.targetId)}).catch(Pr)):(bc(r,i.targetId),await ac(r.localStore,i.targetId,!0))}async function xy(n,e){let t=F(n),r=t.ba.get(e),i=t.Da.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),zc(t.remoteStore,r.targetId))}async function Vy(n,e,t){let r=jy(n);try{let i=await function(a,u){let h=F(a),d=de.now(),p=u.reduce((S,N)=>S.add(N.key),j()),E,b;return h.persistence.runTransaction("Locally write mutations","readwrite",S=>{let N=nt(),x=j();return h.os.getEntries(S,p).next(D=>{N=D,N.forEach((q,z)=>{z.isValidDocument()||(x=x.add(q))})}).next(()=>h.localDocuments.getOverlayedDocuments(S,N)).next(D=>{E=D;let q=[];for(let z of u){let G=j_(z,E.get(z.key).overlayedDocument);G!=null&&q.push(new rt(z.key,G,nd(G.value.mapValue),gt.exists(!0)))}return h.mutationQueue.addMutationBatch(S,d,q,u)}).next(D=>{b=D;let q=D.applyToLocalDocumentSet(E,x);return h.documentOverlayCache.saveOverlays(S,D.batchId,q)})}).then(()=>({batchId:b.batchId,changes:hd(E)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,u,h){let d=a.xa[a.currentUser.toKey()];d||(d=new ne(H)),d=d.insert(u,h),a.xa[a.currentUser.toKey()]=d}(r,i.batchId,t),await Nr(r,i.changes),await Is(r.remoteStore)}catch(i){let o=Hc(i,"Failed to persist write");t.reject(o)}}async function qd(n,e){let t=F(n);try{let r=await hy(t.localStore,e);e.targetChanges.forEach((i,o)=>{let a=t.Fa.get(o);a&&(J(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.wa=!0:i.modifiedDocuments.size>0?J(a.wa):i.removedDocuments.size>0&&(J(a.wa),a.wa=!1))}),await Nr(t,r,e)}catch(r){await Pr(r)}}function Hh(n,e,t){let r=F(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){let i=[];r.ba.forEach((o,a)=>{let u=a.view.j_(e);u.snapshot&&i.push(u.snapshot)}),function(a,u){let h=F(a);h.onlineState=u;let d=!1;h.queries.forEach((p,E)=>{for(let b of E.U_)b.j_(u)&&(d=!0)}),d&&Wc(h)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Ly(n,e,t){let r=F(n);r.sharedClientState.updateQueryState(e,"rejected",t);let i=r.Fa.get(e),o=i&&i.key;if(o){let a=new ne(L.comparator);a=a.insert(o,ke.newNoDocument(o,U.min()));let u=j().add(o),h=new Ki(U.min(),new Map,new ne(H),a,u);await qd(r,h),r.va=r.va.remove(o),r.Fa.delete(e),Qc(r)}else await ac(r.localStore,e,!1).then(()=>bc(r,e,t)).catch(Pr)}async function My(n,e){let t=F(n),r=e.batch.batchId;try{let i=await ly(t.localStore,e);jd(t,r,null),Bd(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Nr(t,i)}catch(i){await Pr(i)}}async function Fy(n,e,t){let r=F(n);try{let i=await function(a,u){let h=F(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return h.mutationQueue.lookupMutationBatch(d,u).next(E=>(J(E!==null),p=E.keys(),h.mutationQueue.removeMutationBatch(d,E))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,p,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>h.localDocuments.getDocuments(d,p))})}(r.localStore,e);jd(r,e,t),Bd(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Nr(r,i)}catch(i){await Pr(i)}}function Bd(n,e){(n.Oa.get(e)||[]).forEach(t=>{t.resolve()}),n.Oa.delete(e)}function jd(n,e,t){let r=F(n),i=r.xa[r.currentUser.toKey()];if(i){let o=i.get(e);o&&(t?o.reject(t):o.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function bc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(let r of n.Da.get(e))n.ba.delete(r),t&&n.Sa.ka(r,t);n.Da.delete(e),n.isPrimaryClient&&n.Ma.Vr(e).forEach(r=>{n.Ma.containsKey(r)||zd(n,r)})}function zd(n,e){n.Ca.delete(e.path.canonicalString());let t=n.va.get(e);t!==null&&(zc(n.remoteStore,t),n.va=n.va.remove(e),n.Fa.delete(t),Qc(n))}function Wh(n,e,t){for(let r of t)r instanceof ss?(n.Ma.addReference(r.key,e),Uy(n,r)):r instanceof os?(k("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,e),n.Ma.containsKey(r.key)||zd(n,r.key)):M()}function Uy(n,e){let t=e.key,r=t.path.canonicalString();n.va.get(t)||n.Ca.has(r)||(k("SyncEngine","New document in limbo: "+t),n.Ca.add(r),Qc(n))}function Qc(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){let e=n.Ca.values().next().value;n.Ca.delete(e);let t=new L(te.fromString(e)),r=n.Na.next();n.Fa.set(r,new Tc(t)),n.va=n.va.insert(t,r),Nd(n.remoteStore,new Ir(je(Bc(t.path)),r,"TargetPurposeLimboResolution",pr.oe))}}async function Nr(n,e,t){let r=F(n),i=[],o=[],a=[];r.ba.isEmpty()||(r.ba.forEach((u,h)=>{a.push(r.Ba(h,e,t).then(d=>{if((d||t)&&r.isPrimaryClient){let p=d&&!d.fromCache;r.sharedClientState.updateQueryState(h.targetId,p?"current":"not-current")}if(d){i.push(d);let p=rc.Ki(h.targetId,d);o.push(p)}}))}),await Promise.all(a),r.Sa.h_(i),await async function(h,d){let p=F(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>P.forEach(d,b=>P.forEach(b.qi,S=>p.persistence.referenceDelegate.addReference(E,b.targetId,S)).next(()=>P.forEach(b.Qi,S=>p.persistence.referenceDelegate.removeReference(E,b.targetId,S)))))}catch(E){if(!Cr(E))throw E;k("LocalStore","Failed to update sequence numbers: "+E)}for(let E of d){let b=E.targetId;if(!E.fromCache){let S=p.ns.get(b),N=S.snapshotVersion,x=S.withLastLimboFreeSnapshotVersion(N);p.ns=p.ns.insert(b,x)}}}(r.localStore,o))}async function qy(n,e){let t=F(n);if(!t.currentUser.isEqual(e)){k("SyncEngine","User change. New user:",e.toKey());let r=await Cd(t.localStore,e);t.currentUser=e,function(o,a){o.Oa.forEach(u=>{u.forEach(h=>{h.reject(new V(R.CANCELLED,a))})}),o.Oa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Nr(t,r.us)}}function By(n,e){let t=F(n),r=t.Fa.get(e);if(r&&r.wa)return j().add(r.key);{let i=j(),o=t.Da.get(e);if(!o)return i;for(let a of o){let u=t.ba.get(a);i=i.unionWith(u.view.Ea)}return i}}function Gd(n){let e=F(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=qd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=By.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ly.bind(null,e),e.Sa.h_=Py.bind(null,e.eventManager),e.Sa.ka=Cy.bind(null,e.eventManager),e}function jy(n){let e=F(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=My.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Fy.bind(null,e),e}var as=class{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ys(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return uy(this.persistence,new sc,e.initialUser,this.serializer)}createPersistence(e){return new ec(nc.Hr,this.serializer)}createSharedClientState(e){return new cc}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};var Sc=class{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Hh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=qy.bind(null,this.syncEngine),await Ry(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new vc}()}createDatastore(e){let t=ys(e.databaseInfo.databaseId),r=function(o){return new hc(o)}(e.databaseInfo);return function(o,a,u,h){return new pc(o,a,u,h)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,o,a,u){return new gc(r,i,o,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>Hh(this.syncEngine,t,0),function(){return Xi.D()?new Xi:new uc}())}createSyncEngine(e,t){return function(i,o,a,u,h,d,p){let E=new Ac(i,o,a,u,h,d);return p&&(E.La=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(r){let i=F(r);k("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Dr(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}};var cs=class{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):et("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}};var Rc=class{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=ue.UNAUTHENTICATED,this.clientId=Ui.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{k("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(k("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new V(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new qe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){let r=Hc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}};async function sa(n,e){n.asyncQueue.verifyOperationInProgress(),k("FirestoreClient","Initializing OfflineComponentProvider");let t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Cd(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Qh(n,e){n.asyncQueue.verifyOperationInProgress();let t=await Gy(n);k("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Kh(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Kh(e.remoteStore,i)),n._onlineComponents=e}function zy(n){return n.name==="FirebaseError"?n.code===R.FAILED_PRECONDITION||n.code===R.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Gy(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){k("FirestoreClient","Using user provided OfflineComponentProvider");try{await sa(n,n._uninitializedComponentsProvider._offline)}catch(e){let t=e;if(!zy(t))throw t;un("Error using user provided cache. Falling back to memory cache: "+t),await sa(n,new as)}}else k("FirestoreClient","Using default OfflineComponentProvider"),await sa(n,new as);return n._offlineComponents}async function Kd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(k("FirestoreClient","Using user provided OnlineComponentProvider"),await Qh(n,n._uninitializedComponentsProvider._online)):(k("FirestoreClient","Using default OnlineComponentProvider"),await Qh(n,new Sc))),n._onlineComponents}function Ky(n){return Kd(n).then(e=>e.syncEngine)}async function Pc(n){let e=await Kd(n),t=e.eventManager;return t.onListen=Dy.bind(null,e.syncEngine),t.onUnlisten=Oy.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Ny.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=xy.bind(null,e.syncEngine),t}function $y(n,e,t={}){let r=new qe;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){let p=new cs({next:b=>{a.enqueueAndForget(()=>Fd(o,E)),b.fromCache&&h.source==="server"?d.reject(new V(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(b)},error:b=>d.reject(b)}),E=new is(u,p,{includeMetadataChanges:!0,ra:!0});return Md(o,E)}(await Pc(n),n.asyncQueue,e,t,r)),r.promise}function $d(n){let e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}var Jh=new Map;function Hd(n,e,t){if(!t)throw new V(R.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Hy(n,e,t,r){if(e===!0&&r===!0)throw new V(R.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Yh(n){if(!L.isDocumentKey(n))throw new V(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Xh(n){if(L.isDocumentKey(n))throw new V(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Jc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{let e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":M()}function Ze(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new V(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let t=Jc(n);throw new V(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}var us=class{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new V(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Hy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$d((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new V(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new V(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new V(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}},wn=class{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new us({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new V(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new V(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new us(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new oa;switch(r.type){case"firstParty":return new la(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){let r=Jh.get(t);r&&(k("ComponentProvider","Removing Datastore"),Jh.delete(t),r.terminate())}(this),Promise.resolve()}};function Wy(n,e,t,r={}){var i;let o=(n=Ze(n,wn))._getSettings(),a=`${e}:${t}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&un("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let u,h;if(typeof r.mockUserToken=="string")u=r.mockUserToken,h=ue.MOCK_USER;else{u=rl(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);let d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new V(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new ue(d)}n._authCredentials=new aa(new Fi(u,h))}}var Tr=class n{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new n(this.firestore,e,this._query)}},Se=class n{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _t(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new n(this.firestore,e,this._key)}},_t=class n extends Tr{constructor(e,t,r){super(e,t,Bc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new Se(this.firestore,null,new L(e))}withConverter(e){return new n(this.firestore,e,this._path)}};function Wd(n,e,...t){if(n=ce(n),Hd("collection","path",e),n instanceof wn){let r=te.fromString(e,...t);return Xh(r),new _t(n,null,r)}{if(!(n instanceof Se||n instanceof _t))throw new V(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(te.fromString(e,...t));return Xh(r),new _t(n.firestore,null,r)}}function Qd(n,e,...t){if(n=ce(n),arguments.length===1&&(e=Ui.newId()),Hd("doc","path",e),n instanceof wn){let r=te.fromString(e,...t);return Yh(r),new Se(n,null,new L(r))}{if(!(n instanceof Se||n instanceof _t))throw new V(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(te.fromString(e,...t));return Yh(r),new Se(n.firestore,n instanceof _t?n.converter:null,new L(r))}}var Cc=class{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Zi(this,"async_queue_retry"),this.hu=()=>{let t=ia();t&&k("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Yo.Wo()};let e=ia();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;let t=ia();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});let t=new qe;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Cr(e))throw e;k("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){let t=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;let i=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw et("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=t,t}enqueueAfterDelay(e,t,r){this.Pu(),this.lu.indexOf(e)>-1&&(t=0);let i=_c.createAndSchedule(this,e,t,r,o=>this.Eu(o));return this._u.push(i),i}Pu(){this.au&&M()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(let t of this._u)if(t.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(let t of this._u)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){let t=this._u.indexOf(e);this._u.splice(t,1)}};function Zh(n){return function(t,r){if(typeof t!="object"||t===null)return!1;let i=t;for(let o of r)if(o in i&&typeof i[o]=="function")return!0;return!1}(n,["next","error","complete"])}var wt=class extends wn{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new Cc}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Yd(this),this._firestoreClient.terminate()}};function Jd(n,e){let t=typeof n=="object"?n:ei(),r=typeof n=="string"?n:e||"(default)",i=$n(t,"firestore").getImmediate({identifier:r});if(!i._initialized){let o=nl("firestore");o&&Wy(i,...o)}return i}function Yc(n){return n._firestoreClient||Yd(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Yd(n){var e,t,r;let i=n._freezeSettings(),o=function(u,h,d,p){return new ma(u,h,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,$d(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new Rc(n._authCredentials,n._appCheckCredentials,n._queue,o),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}var Ar=class n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new n(Ee.fromBase64String(e))}catch(t){throw new V(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new n(Ee.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}};var br=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};var ls=class{constructor(e){this._methodName=e}};var Sr=class{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}};var Qy=/^__.*__$/,Dc=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new rt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Gt(e,this.data,t,this.fieldTransforms)}};function Xd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}var Nc=class n{constructor(e,t,r,i,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new n(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return hs(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(Xd(this.fu)&&Qy.test(e))throw this.Du('Document fields cannot begin and end with "__"')}},kc=class{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ys(e)}Fu(e,t,r,i=!1){return new Nc({fu:e,methodName:t,vu:r,path:be.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function Jy(n){let e=n._freezeSettings(),t=ys(n._databaseId);return new kc(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Yy(n,e,t,r,i,o={}){let a=n.Fu(o.merge||o.mergeFields?2:0,e,t,i);nf("Data must be an object, but it was:",a,r);let u=ef(r,a),h,d;if(o.merge)h=new Ue(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){let p=[];for(let E of o.mergeFields){let b=Xy(e,E,t);if(!a.contains(b))throw new V(R.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);ev(p,b)||p.push(b)}h=new Ue(p),d=a.fieldTransforms.filter(E=>h.covers(E.field))}else h=null,d=a.fieldTransforms;return new Dc(new Ne(u),h,d)}function Zd(n,e){if(tf(n=ce(n)))return nf("Unsupported field value:",e,n),ef(n,e);if(n instanceof ls)return function(r,i){if(!Xd(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);let o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){let o=[],a=0;for(let u of r){let h=Zd(u,i.bu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,e)}return function(r,i){if((r=ce(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return M_(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){let o=de.fromDate(r);return{timestampValue:Qi(i.serializer,o)}}if(r instanceof de){let o=new de(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Qi(i.serializer,o)}}if(r instanceof Sr)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ar)return{bytesValue:Ed(i.serializer,r._byteString)};if(r instanceof Se){let o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:jc(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Jc(r)}`)}(n,e)}function ef(n,e){let t={};return ed(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Tn(n,(r,i)=>{let o=Zd(i,e.pu(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function tf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof de||n instanceof Sr||n instanceof Ar||n instanceof Se||n instanceof ls)}function nf(n,e,t){if(!tf(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){let r=Jc(t);throw r==="an object"?e.Du(n+" a custom object"):e.Du(n+" "+r)}}function Xy(n,e,t){if((e=ce(e))instanceof br)return e._internalPath;if(typeof e=="string")return rf(n,e);throw hs("Field path arguments must be of type string or ",n,!1,void 0,t)}var Zy=new RegExp("[~\\*/\\[\\]]");function rf(n,e,t){if(e.search(Zy)>=0)throw hs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new br(...e.split("."))._internalPath}catch{throw hs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function hs(n,e,t,r,i){let o=r&&!r.isEmpty(),a=i!==void 0,u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${i}`),h+=")"),new V(R.INVALID_ARGUMENT,u+n+h)}function ev(n,e){return n.some(t=>t.isEqual(e))}var ds=class{constructor(e,t,r,i,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Se(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let e=new Oc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(sf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},Oc=class extends ds{data(){return super.data()}};function sf(n,e){return typeof e=="string"?rf(n,e):e instanceof br?e._internalPath:e._delegate._internalPath}function of(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new V(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var xc=class{convertValue(e,t="none"){switch(Bt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(yt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw M()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return Tn(e,(i,o)=>{r[i]=this.convertValue(o,t)}),r}convertGeoPoint(e){return new Sr(ee(e.latitude),ee(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=Mc(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(gr(e));default:return null}}convertTimestamp(e){let t=tt(e);return new de(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=te.fromString(e);J(Pd(r));let i=new zi(r.get(1),r.get(3)),o=new L(r.popFirst(5));return i.isEqual(t)||et(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}};function tv(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}var Ft=class{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}},fs=class extends ds{constructor(e,t,r,i,o,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new cn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(sf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},cn=class extends fs{data(e={}){return super.data(e)}},ps=class{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Ft(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new cn(this._firestore,this._userDataWriter,r.key,r,new Ft(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(u=>{let h=new cn(i._firestore,i._userDataWriter,u.doc.key,u.doc,new Ft(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{let h=new cn(i._firestore,i._userDataWriter,u.doc.key,u.doc,new Ft(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter),d=-1,p=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),p=a.indexOf(u.doc.key)),{type:nv(u.type),doc:h,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function nv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}var Rr=class extends xc{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ar(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new Se(this.firestore,null,t)}};function af(n){n=Ze(n,Tr);let e=Ze(n.firestore,wt),t=Yc(e),r=new Rr(e);return of(n._query),$y(t,n._query).then(i=>new ps(e,r,n,i))}function cf(n,e,t){n=Ze(n,Se);let r=Ze(n.firestore,wt),i=tv(n.converter,e,t);return hf(r,[Yy(Jy(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,gt.none())])}function uf(n){return hf(Ze(n.firestore,wt),[new yr(n._key,gt.none())])}function lf(n,...e){var t,r,i;n=ce(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Zh(e[a])||(o=e[a],a++);let u={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Zh(e[a])){let E=e[a];e[a]=(t=E.next)===null||t===void 0?void 0:t.bind(E),e[a+1]=(r=E.error)===null||r===void 0?void 0:r.bind(E),e[a+2]=(i=E.complete)===null||i===void 0?void 0:i.bind(E)}let h,d,p;if(n instanceof Se)d=Ze(n.firestore,wt),p=Bc(n._key.path),h={next:E=>{e[a]&&e[a](rv(d,n,E))},error:e[a+1],complete:e[a+2]};else{let E=Ze(n,Tr);d=Ze(E.firestore,wt),p=E._query;let b=new Rr(d);h={next:S=>{e[a]&&e[a](new ps(d,b,E,S))},error:e[a+1],complete:e[a+2]},of(n._query)}return function(b,S,N,x){let D=new cs(x),q=new is(S,D,N);return b.asyncQueue.enqueueAndForget(async()=>Md(await Pc(b),q)),()=>{D.$a(),b.asyncQueue.enqueueAndForget(async()=>Fd(await Pc(b),q))}}(Yc(d),p,u,h)}function hf(n,e){return function(r,i){let o=new qe;return r.asyncQueue.enqueueAndForget(async()=>Vy(await Ky(r),i,o)),o.promise}(Yc(n),e)}function rv(n,e,t){let r=t.docs.get(e._key),i=new Rr(n);return new fs(n,i,e._key,r,new Ft(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){En=i})(ht),lt(new Re("firestore",(r,{instanceIdentifier:i,options:o})=>{let a=r.getProvider("app").getImmediate(),u=new wt(new ca(r.getProvider("auth-internal")),new da(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new V(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zi(d.options.projectId,p)}(a,i),a);return o=Object.assign({useFetchStreams:t},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),Ce(bh,"4.6.3",e),Ce(bh,"4.6.3","esm2017")})();return Yf(iv);})();
/*! Bundled license information:

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/component/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/logger/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/webchannel-wrapper/dist/bloom-blob/esm/bloom_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/webchannel-wrapper/dist/webchannel-blob/esm/webchannel_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
