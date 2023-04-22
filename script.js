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
  var i=0;
  function hamfunc(){
    var bodyrjs = document.getElementById("bodyhtml")
 var scrolldownlink = document.getElementById("scrollDown")

 var vnavjs = document.getElementById("vnaav");
if(i==1){
 vnavjs.style.opacity=0;
 scrolldownlink.style.pointerEvents="all";
 scrolldownlink.style.opacity=1;
 i=0;
}
else{
  bodyrjs.style.backgroundColor="   #eeaeca";
  setTimeout(myFunctionwhite, 7000);
  scrolldownlink.style.pointerEvents="none";
  vnavjs.style.opacity=1;
   scrolldownlink.style.opacity=0;
  i=1;
}
 
  }
  
  var bodyrjs = document.getElementById("bodyhtml")
 function myFunctionwhite(){
  bodyrjs.style.backgroundColor="white";
 }
  var myNav = document.getElementById('navbar');
  window.onscroll = function () { 
      if (window.scrollY>=200 ) {
        console.log(scrollY);
        bodyrjs.style.backgroundColor="white";
          myNav.style.backgroundColor="violet";
      } 
          
      else if(window.scrollY<=200&&window.scrollY>=100) {
        myNav.style.backgroundColor="skyblue";
      }
      else if (window.scrollY<100 ) {

        myNav.style.backgroundColor="transparent";

    } 
    if (window.scrollY>=200 ) {

     

  } 
    
      
  };
  var tbl1 = document.getElementById("one");
  var tbl2 = document.getElementById("two");
  var tbl3 = document.getElementById("three");
  function colrchng1(){

tbl1.style.backgroundColor="#c5f8c8";

  }
  function colrchng2(){


tbl2.style.backgroundColor="#fccb8f";

  }
  function colrchng3(){


tbl3.style.backgroundColor="#f9989f";
  }
