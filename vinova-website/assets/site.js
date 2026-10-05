(function(){
var $=function(s,r){return[].slice.call((r||document).querySelectorAll(s))};
var y=document.getElementById("yr");if(y)y.textContent=new Date().getFullYear();
var nav=document.getElementById("nav"),bg=document.getElementById("burger");
if(bg)bg.onclick=function(){nav.classList.toggle("show")};
var items=$("nav li.has");
function close(){items.forEach(function(li){li.classList.remove("open");li.firstElementChild.setAttribute("aria-expanded","false")})}
items.forEach(function(li){var b=li.firstElementChild;
 b.onclick=function(e){var o=li.classList.contains("open");close();if(!o){li.classList.add("open");b.setAttribute("aria-expanded","true")}e.stopPropagation()};
 li.onmouseenter=function(){if(innerWidth>980){close();li.classList.add("open")}};
 li.onmouseleave=function(){if(innerWidth>980)li.classList.remove("open")}});
document.addEventListener("click",function(e){if(!e.target.closest("nav"))close()});
document.addEventListener("keydown",function(e){if(e.key==="Escape")close()});
$("[data-tabs]").forEach(function(g){var sc=g.parentElement,ps=$(":scope>.cards,:scope>.dd-r",sc),bs=$("button",g);
 function show(n){bs.forEach(function(b,i){b.classList.toggle("on",i===n)});ps.forEach(function(p,i){p.classList.toggle("on",i===n)})}
 bs.forEach(function(b,i){b.onclick=function(){show(i)};b.onmouseenter=function(){if(innerWidth>980&&!g.classList.contains("tabs"))show(i)}})});
var pf=$(".pf button"),pg=document.getElementById("pager");
if(pf.length){var cards=$(".pc"),cur="all",page=1,PER=9;
 var render=function(){var m=cards.filter(function(c){return cur==="all"||c.dataset.cats.split(" ").indexOf(cur)>-1});
  cards.forEach(function(c){c.hidden=true});m.slice((page-1)*PER,page*PER).forEach(function(c){c.hidden=false});
  var n=Math.ceil(m.length/PER),h="";if(n>1)for(var i=1;i<=n;i++)h+='<button data-p="'+i+'" class="'+(i===page?"on":"")+'">'+i+'</button>';pg.innerHTML=h};
 pf.forEach(function(b){b.onclick=function(){cur=b.dataset.f;page=1;pf.forEach(function(x){x.classList.toggle("on",x===b)});render()}});
 pg.onclick=function(e){var p=e.target.dataset.p;if(p){page=+p;render();scrollTo({top:0,behavior:"smooth"})}};render()}
var q=document.getElementById("q");
if(q)q.oninput=function(){var v=q.value.toLowerCase();$(".job").forEach(function(j){j.hidden=j.textContent.toLowerCase().indexOf(v)<0})};
})();
