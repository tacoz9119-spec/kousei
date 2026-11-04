/* オフラインでも起動できるように、アプリのファイルを端末に保存しておく。
   起動時は端末に保存した版をすぐ使い、裏で新しい版を取りに行く（更新は次回の起動から反映）。
   ファイルを更新したら、下の CACHE の番号を1つ増やすと、確実に入れ替わる。
   同じアドレス（github.io）の脚本エディタの保存分を消さないよう、名前が「kousei-」で始まるものだけを扱う。 */
const CACHE='kousei-v48';
const FONTS='kousei-fonts';
const FILES=['./','index.html','firebase-config.js','firebase.js','jspdf.umd.min.js','kp-font.ttf','manifest.webmanifest','icon-180.png','icon-180-dark.png','icon-192.png','icon-512.png','favicon-16.png','favicon-32.png','favicon-48.png'];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('kousei-')&&k!==CACHE&&k!==FONTS).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
/* ほかのアプリの更新で保存分が消えていた場合に、起動時に取り直す */
self.addEventListener('message',e=>{
  if(e.data!=='ensure') return;
  e.waitUntil(caches.open(CACHE).then(c=>Promise.all(FILES.map(f=>c.match(f,{ignoreSearch:true}).then(h=>h||c.add(f).catch(()=>null))))));
});
self.addEventListener('fetch',e=>{
  const req=e.request; if(req.method!=='GET') return;
  const url=new URL(req.url);
  if(url.hostname==='fonts.googleapis.com'||url.hostname==='fonts.gstatic.com'){
    e.respondWith(caches.open(FONTS).then(async c=>{
      const hit=await c.match(req);
      const net=fetch(req).then(res=>{ if(res&&(res.ok||res.type==='opaque')) c.put(req,res.clone()); return res; }).catch(()=>null);
      if(hit){ e.waitUntil(net); return hit; }
      const res=await net; return res||new Response('',{status:504});
    }));
    return;
  }
  if(url.origin!==self.location.origin) return;
  e.respondWith(caches.open(CACHE).then(async c=>{
    const key=req.mode==='navigate'?'index.html':req;
    const hit=await c.match(key,{ignoreSearch:true});
    const net=fetch(req).then(res=>{ if(res&&res.ok&&res.type==='basic') c.put(key,res.clone()); return res; }).catch(()=>null);
    if(hit){ e.waitUntil(net); return hit; }
    const res=await net; return res||new Response('オフラインのため開けません',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}});
  }));
});
