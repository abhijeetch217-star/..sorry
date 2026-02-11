document.addEventListener("DOMContentLoaded", function(){

  const pages = document.querySelectorAll(".page");
  const nextBtns = document.querySelectorAll(".next-btn");
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  let current = 0;

  // Next Page Logic
  nextBtns.forEach(btn=>{
    btn.addEventListener("click", ()=>{
      if(current < pages.length-1){
        pages[current].classList.remove("active");
        current++;
        pages[current].classList.add("active");
      }
    });
  });

  // Yes Button -> Hearts
  yesBtn.addEventListener("click", ()=>{
    for(let i=0;i<50;i++){
      const heart=document.createElement("div");
      heart.className="heart";
      heart.innerHTML="💖";
      heart.style.left=Math.random()*window.innerWidth+"px";
      document.body.appendChild(heart);
      setTimeout(()=>heart.remove(),3000);
    }
  });

  // No Button -> Run
  function moveButton(){
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;
    noBtn.style.position="absolute";
    noBtn.style.left=Math.random()*maxX+"px";
    noBtn.style.top=Math.random()*maxY+"px";
  }

  noBtn.addEventListener("mouseover", moveButton);
  noBtn.addEventListener("touchstart", moveButton);

  // If somehow clicked -> Rain
  noBtn.addEventListener("click", ()=>{
    for(let i=0;i<100;i++){
      const drop=document.createElement("div");
      drop.className="rain";
      drop.style.left=Math.random()*window.innerWidth+"px";
      document.body.appendChild(drop);
      setTimeout(()=>drop.remove(),2000);
    }
  });

});
