alphabets = "abcdefghijklmnopqrstuvwxyz"
let interval =  null;
document.querySelector("#titleee").onmouseover = aevent =>{

    let counts = 0 ;
    clearInterval(interval);
    interval =  setInterval(()=>{
    aevent.target.innerText = aevent.target.innerText
    .split("")
    .map((letter,index) => {
    if(index<counts){
       return aevent.target.dataset.value[index];
    }
     return alphabets[Math.floor(Math.random()*26)]
})
    .join("");
    if (counts>=aevent.target.dataset.value.length){ clearInterval(interval);
    }
    counts+=1/6;
},30);
}

function animateTitle() {
    let counts = 0;
    clearInterval(interval);
    interval = setInterval(() => {
      const title = document.querySelector("#titleee");
      title.innerText = title.dataset.value
        .split("")
        .map((letter, index) => {
          if (index < counts) {
            return title.dataset.value[index];
          }
          return alphabets[Math.floor(Math.random() * 26)];
        })
        .join("");
      if (counts >= title.dataset.value.length) {
        clearInterval(interval);
      }
      counts += 1 / 6;
    }, 30);
  }
  
  window.onload = animateTitle();
  
  
  
  
  
