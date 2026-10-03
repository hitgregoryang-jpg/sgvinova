var y=document.getElementById("yr");if(y)y.textContent=new Date().getFullYear();
// Mobile nav
const nav=document.getElementById("nav");
document.getElementById("burger").onclick=()=>nav.classList.toggle("show");

// Mega menu toggles (click; hover on desktop)
const items=[...document.querySelectorAll("nav li.has")];
const close=()=>items.forEach(li=>{li.classList.remove("open");li.querySelector("button").setAttribute("aria-expanded","false")});
items.forEach(li=>{
  const b=li.querySelector(":scope>button");
  b.onclick=e=>{const o=li.classList.contains("open");close();if(!o){li.classList.add("open");b.setAttribute("aria-expanded","true")}e.stopPropagation()};
  li.addEventListener("mouseenter",()=>{if(innerWidth>980){close();li.classList.add("open")}});
  li.addEventListener("mouseleave",()=>{if(innerWidth>980)li.classList.remove("open")});
});
document.addEventListener("click",e=>{if(!e.target.closest("nav"))close()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")close()});

// Tab groups: left list / tab bar controls panels that follow
document.querySelectorAll("[data-tabs]").forEach(g=>{
  const scope=g.classList.contains("tabs")?g.parentElement:g.parentElement;
  const panels=[...scope.querySelectorAll(g.classList.contains("tabs")?":scope>.cards":":scope>.m-right")];
  const btns=[...g.querySelectorAll("button")];
  const show=n=>{btns.forEach((b,i)=>b.classList.toggle("on",i===n));panels.forEach((p,i)=>p.classList.toggle("on",i===n))};
  btns.forEach((b,i)=>{b.onclick=()=>show(i);b.onmouseenter=()=>{if(!g.classList.contains("tabs")&&innerWidth>980)show(i)}});
});