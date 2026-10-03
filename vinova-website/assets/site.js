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

// Scam warning: shown once per browser session
(function(){
var K="vn_scam_seen";
try{if(sessionStorage.getItem(K))return;sessionStorage.setItem(K,"1")}catch(e){}
var m=document.createElement("div");m.className="sm";m.setAttribute("role","dialog");m.setAttribute("aria-modal","true");m.setAttribute("aria-labelledby","sm-t");
m.innerHTML='<div class="sm-card"><div class="sm-top">A note from Vinova</div><div class="sm-body"><h2 id="sm-t">We have been informed about job scams</h2>'
+'<p class="sm-warn"><strong>Sebastian &amp; Gregory</strong> are not from Vinova. They do not work for us and are not authorised to recruit or represent Vinova.</p>'
+'<ol><li><strong>Never pay to &ldquo;secure&rdquo; a job</strong><span>You should never pay your own money to secure any job or role. Vinova funds any and all testing tasks. Legitimate work never requires payment from you.</span></li>'
+'<li><strong>Never trust unofficial job offers</strong><span>Be cautious of unexpected offers, especially through Telegram or personal email accounts. Only trust emails sent from our official domain: <b>sgvinova.com</b></span></li>'
+'<li><strong>Never change your Singpass details</strong><span>Using Singpass to verify your identity for a job or job-related task is perfectly fine. However, never change or update your Singpass details at someone else&rsquo;s request. A legitimate employer will never ask you to alter your Singpass information.</span></li></ol>'
+'<button type="button" class="sm-btn">I UNDERSTAND</button></div></div>';
document.body.appendChild(m);document.body.style.overflow="hidden";
var b=m.querySelector(".sm-btn");b.focus();
b.onclick=function(){m.remove();document.body.style.overflow=""};
m.addEventListener("keydown",function(e){if(e.key==="Tab"){e.preventDefault();b.focus()}});
})();
