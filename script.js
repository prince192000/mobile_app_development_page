var btn3 =  document.getElementsByClassName('btn3');
var slide = document.getElementById('slide');

btn3[0].onclick = function(){
slide.style.transform = "translateX(0px)";
for(i=0;i<2;i++){
btn3[i].classList.remove("active");

}
this.classList.add("active")

}
btn3[1].onclick = function(){
slide.style.transform = "translateX(-800px)";
for(i=0;i<2;i++){
btn3[i].classList.remove("active");

}
this.classList.add("active")

}