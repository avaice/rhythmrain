(()=>{"use strict";let e=null,n=null;const t=()=>{if(!e||!n)throw new Error("Renderer was called before init!");return{consoleBar:e,main:n}},o=e=>{const n={x:-1,y:-1};let o="qwertyuiop".indexOf(e.key);-1!==o&&(n.x=o,n.y=0),o="asdfghjkl".indexOf(e.key),-1!==o&&(n.x=o,n.y=1),o="zxcvbnm".indexOf(e.key),-1!==o&&(n.x=o,n.y=2),t().consoleBar.innerText=`Key: ${e.key}, Position: (${n.x}, ${n.y})`,-1!==n.x&&(e=>{const n=document.createElement("div");n.className="reflection",n.style.left=100+100*e.x+(50*Math.random()-25)+"px",n.style.top=100+200*e.y+(50*Math.random()-25)+"px",t().main.appendChild(n),setTimeout((()=>{t().main.removeChild(n)}),1e3)})(n)};console.log("loaded index.ts"),window.onload=()=>{(()=>{try{e=document.getElementById("consoleBar"),n=document.getElementById("main")}catch(e){throw new Error("An Error occured while init Renderer! Failed to get DOMs.")}})(),t().consoleBar.innerText="RR",window.addEventListener("keypress",o)}})();