let l=null,a=null,r="",c="";const I=[{id:"luxury",title:"Luxury Upgrade",description:"Make room look luxurious",icon:"✦"},{id:"space",title:"Feel Larger",description:"Make room feel larger",icon:"◎"},{id:"productivity",title:"Productivity",description:"Improve productivity",icon:"⚡"},{id:"comfort",title:"Comfort",description:"Improve comfort",icon:"◈"},{id:"storage",title:"Storage",description:"Improve storage",icon:"▤"},{id:"modern",title:"Modernize",description:"Modernize the space",icon:"◇"},{id:"resale",title:"Resale Appeal",description:"Increase resale value",icon:"▲"}],h=[{id:"modern_luxury",title:"Modern Luxury",description:"Clean lines with premium materials"},{id:"scandinavian",title:"Scandinavian",description:"Minimal, functional, natural"},{id:"japandi",title:"Japandi",description:"Japanese-Scandinavian fusion"},{id:"minimalist",title:"Minimalist",description:"Less is more"},{id:"contemporary",title:"Contemporary",description:"Current trends and styles"},{id:"industrial",title:"Industrial",description:"Raw, urban, exposed elements"},{id:"mid_century",title:"Mid-Century Modern",description:"Retro with organic forms"},{id:"coastal",title:"Coastal",description:"Light, airy, beach-inspired"},{id:"bohemian",title:"Bohemian",description:"Eclectic, colorful, layered"},{id:"traditional",title:"Traditional Luxury",description:"Classic elegance and detail"}],o=document.getElementById("upload-zone"),m=document.getElementById("file-input"),g=document.getElementById("preview-container"),b=document.getElementById("preview-image"),B=document.getElementById("btn-remove"),p=document.getElementById("btn-analyze"),d=document.getElementById("room-type");o.addEventListener("click",()=>m.click());o.addEventListener("dragover",t=>{t.preventDefault(),o.style.borderColor="var(--color-primary)"});o.addEventListener("dragleave",()=>{o.style.borderColor=""});o.addEventListener("drop",t=>{t.preventDefault(),o.style.borderColor="";const e=t.dataTransfer?.files[0];e&&u(e)});m.addEventListener("change",t=>{const e=t.target.files?.[0];e&&u(e)});function u(t){if(!t.type.startsWith("image/"))return;l=t;const e=URL.createObjectURL(t);b.src=e,g.style.display="block",o.style.display="none",p.disabled=!1}B.addEventListener("click",()=>{l=null,g.style.display="none",o.style.display="block",p.disabled=!0,m.value=""});p.addEventListener("click",async()=>{if(!l)return;s(2),document.getElementById("analysis-loading").style.display="block",document.getElementById("analysis-results").style.display="none";const t=new FormData;t.append("image",l),t.append("roomType",d.value);try{const e=await fetch("/api/analyze",{method:"POST",body:t}),n=await e.json();if(!e.ok)throw new Error(n.error);a=n.analysis,L(a)}catch(e){alert("Analysis failed: "+e.message),s(1)}});function L(t){document.getElementById("analysis-loading").style.display="none",document.getElementById("analysis-results").style.display="block",document.getElementById("design-score").textContent=t.designScore,[["layout",t.layoutScore],["lighting",t.lightingScore],["storage",t.storageScore],["style",t.styleScore],["space",t.spaceUtilizationScore],["balance",t.visualBalanceScore]].forEach(([i,y])=>{const E=document.getElementById(`${i}-bar`),f=document.getElementById(`${i}-score`);E.style.width=`${y*10}%`,f.textContent=y});const n=document.getElementById("findings-list");n.innerHTML=t.findings.map(i=>`
      <div class="finding-item ${i.severity}">
        <span class="item-category">${i.category}</span>
        <p class="item-text">${i.issue}</p>
      </div>
    `).join("");const v=document.getElementById("recommendations-list");v.innerHTML=t.recommendations.map(i=>`
      <div class="recommendation-item ${i.impact}">
        <span class="item-category">${i.category}</span>
        <p class="item-text">${i.suggestion}</p>
        <span class="item-cost">Est. ${i.estimatedCost}</span>
      </div>
    `).join("")}document.getElementById("btn-goals").addEventListener("click",()=>{s(3);const t=document.getElementById("goals-grid");t.innerHTML=I.map(e=>`
      <div class="goal-card" data-goal="${e.id}">
        <div class="goal-icon">${e.icon}</div>
        <h4 class="goal-title">${e.title}</h4>
        <p class="goal-desc">${e.description}</p>
      </div>
    `).join(""),t.querySelectorAll(".goal-card").forEach(e=>{e.addEventListener("click",()=>{t.querySelectorAll(".goal-card").forEach(n=>n.classList.remove("selected")),e.classList.add("selected"),r=e.getAttribute("data-goal"),document.getElementById("btn-style").disabled=!1})})});document.getElementById("btn-style").addEventListener("click",()=>{s(4);const t=document.getElementById("styles-grid");t.innerHTML=h.map(e=>`
      <div class="style-card" data-style="${e.id}">
        <h4 class="style-title">${e.title}</h4>
        <p class="style-desc">${e.description}</p>
      </div>
    `).join(""),t.querySelectorAll(".style-card").forEach(e=>{e.addEventListener("click",()=>{t.querySelectorAll(".style-card").forEach(n=>n.classList.remove("selected")),e.classList.add("selected"),c=e.getAttribute("data-style"),document.getElementById("btn-report").disabled=!1})})});document.getElementById("btn-report").addEventListener("click",async()=>{s(5),document.getElementById("report-loading").style.display="block",document.getElementById("report-content").style.display="none";try{const t=await fetch("/api/report/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({analysis:a,designGoal:r,style:c,roomType:d.value})}),e=await t.json();if(!t.ok)throw new Error(e.error);$(e.report)}catch(t){alert("Report generation failed: "+t.message),s(4)}});function $(t){document.getElementById("report-loading").style.display="none",document.getElementById("report-content").style.display="block",document.getElementById("report-before").textContent=a.designScore,document.getElementById("report-after").textContent=t.newScore,document.getElementById("report-summary").textContent=t.summary,document.getElementById("improvements-list").innerHTML=t.improvements.map(e=>`
      <div class="finding-item">
        <span class="item-category">${e.category}</span>
        <p class="item-text"><strong>${e.title}</strong> — ${e.description}</p>
      </div>
    `).join(""),document.getElementById("budget-list").innerHTML=t.budgetEstimates.map(e=>`
      <div class="recommendation-item">
        <p class="item-text"><strong>${e.tier}</strong> — ${e.range}</p>
        <span class="item-cost">${e.description}</span>
      </div>
    `).join(""),document.getElementById("shopping-list").innerHTML=t.shoppingSuggestions.map(e=>`
      <div class="finding-item">
        <span class="item-category">${e.priority}</span>
        <p class="item-text">${e.item} — ${e.description}</p>
        <span class="item-cost">${e.estimatedPrice}</span>
      </div>
    `).join("")}document.getElementById("btn-save")?.addEventListener("click",async()=>{try{const t=await fetch("/api/projects/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:`${d.value.replace("_"," ")} Redesign`,roomType:d.value,analysis:a,designGoal:r,style:c})}),e=await t.json();if(!t.ok)throw new Error(e.error);alert("Project saved!")}catch(t){alert("Failed to save: "+t.message)}});document.getElementById("btn-new")?.addEventListener("click",()=>{location.reload()});function s(t){document.querySelectorAll(".wizard-step").forEach(e=>e.style.display="none"),document.querySelectorAll(".step").forEach(e=>{const n=parseInt(e.getAttribute("data-step")||"0");e.classList.remove("active","completed"),n<t&&e.classList.add("completed"),n===t&&e.classList.add("active")}),document.getElementById(`step-${t}`).style.display="block",window.scrollTo(0,0)}
