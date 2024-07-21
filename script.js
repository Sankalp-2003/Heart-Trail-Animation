let bodyEl = document.querySelector("body");
bodyEl.addEventListener('mousemove',(dets)=>{
  const mouseX = dets.clientX;
  const mouseY = dets.clientY;
  const spanEl = document.createElement('span');
  spanEl.style.left = mouseX + 'px';
  spanEl.style.top = mouseY + 'px';
  const size = Math.random()*100;
  spanEl.style.width = size + 'px';
  spanEl.style.height = size + 'px';
  bodyEl.appendChild(spanEl);
  setTimeout(()=>{
    spanEl.remove();
  },3000);
})