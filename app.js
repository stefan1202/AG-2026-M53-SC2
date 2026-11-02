
const q=document.getElementById('q');if(q){q.addEventListener('input',()=>{const v=q.value.toLowerCase();document.querySelectorAll('.card').forEach(c=>{c.style.display=c.dataset.k.includes(v)?'':'none'});document.querySelectorAll('h2.sec').forEach(h=>{let n=h.nextElementSibling;let any=[...n.querySelectorAll('.card')].some(c=>c.style.display!=='none');h.style.display=any?'':'none';});});}
