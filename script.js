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
 vnavjs.style.pointerEvents="none"; 
 let inputs = document.getElementById("check");
 inputs.checked=false;
 i=0;
}
else{
  bodyrjs.style.backgroundColor="   #eeaeca";
  setTimeout(myFunctionwhite, 17000);
  scrolldownlink.style.pointerEvents="none";
  vnavjs.style.opacity=1;
  vnavjs.style.pointerEvents="all";
  vnavjs.style.cursor="crosshair"
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
        var workte = document.getElementById("work");
        workte.style.color="black";
        var workteone = document.getElementById("takeitleft");
        workteone.style.color="black";
        var workteone1 = document.getElementById("describework1");
        workteone1.style.color="black";
          myNav.style.backgroundColor="black";
      } 
          
      else if(window.scrollY<=200&&window.scrollY>=100) {
        myNav.style.backgroundColor="skyblue";
      }
      else if (window.scrollY<100 ) {

        myNav.style.backgroundColor="transparent";

    } 
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
if(   window.scrollY>650){
  colrchng1();
   colrchng2();
   colrchng3();
}
if(window.scrollY<649){
  tbl3.style.backgroundColor="white";
  tbl2.style.backgroundColor="white";
  tbl1.style.backgroundColor="white";
}
if(window.scrollY>1300){
  bodyrjs.style.backgroundColor="black";
 var workte = document.getElementById("work");
 workte.style.color="white";
 var workteone = document.getElementById("takeitleft");
 workteone.style.color="white";
 var workteone1 = document.getElementById("describework1");
 workteone1.style.color="white";
}
if(window.scrollY>2200){
  bodyrjs.style.backgroundColor="#FFDCB6";
 var workte = document.getElementById("work");
 workte.style.color="white";
 var workteone = document.getElementById("takeitleft");
 workteone.style.color="white";
 var workteone1 = document.getElementById("describework1");
 workteone1.style.color="white";
 var workteone2 = document.getElementById("describework2");
 workteone2.style.color="black";
workteone2.style.backgroundColor="#FFDCB6";
}
if(window.scrollY>2600){
  bodyrjs.style.backgroundColor="#9384D1";
 var titlework3j = document.getElementById("titlework3");
 titlework3j.style.color="white";
 myNav.style.backgroundColor="#E3F2C1";
//  var workteone = document.getElementById("takeitleft");
//  workteone.style.color="white";
 var workteone2 = document.getElementById("describework2");
 workteone2.style.color="white";
workteone2.style.backgroundColor="#9384D1";

}
if(window.scrollY>3100){
  bodyrjs.style.backgroundColor="#EFBBCF";
 var titlework3j = document.getElementById("titlework3");
 titlework3j.style.color="white";
 myNav.style.backgroundColor="#C0DBEA";
}  
      
  };
  function touchcolor(){
    var y = event.touches[0].clientY;
    console.log(y);
    if(y>1100){
    tbl1.style.backgroundColor="#c5f8c8";
    tbl3.style.backgroundColor="#f9989f";
    tbl2.style.backgroundColor="#fccb8f";}
    if(y<1010 ){
      tbl1.style.backgroundColor="white";
      tbl3.style.backgroundColor="white";
      tbl2.style.backgroundColor="white";
    }
    // 
    if(y<1799){
      bodyrjs.style.backgroundColor="white";
      var workte = document.getElementById("work");
      workte.style.color="black";
      var workteone = document.getElementById("takeitleftmob");
      workteone.style.color="black";
      var workteone1 = document.getElementById("describework1");
      workteone1.style.color="black";
      bodyrjs.style.color="black";
    }
    if(y>1800){
      bodyrjs.style.backgroundColor="black";
      var workte = document.getElementById("work");
      workte.style.color="white";
      var workteone = document.getElementById("takeitleftmob");
      workteone.style.color="white";
      var workteone1 = document.getElementById("describework1");
      workteone1.style.color="white";
      var tit = document.getElementById("titleee");
      tit.style.color="red";


    }
    if(y>2100){
      bodyrjs.style.backgroundColor="#ECC9EE";
      
     
    }
    if(y>2350){
      bodyrjs.style.backgroundColor="#EFBBCF";
    }
    
     }
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
