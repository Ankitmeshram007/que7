let images =[
    "1.jpg","2.jpg","3.jpg","4.jpg","5.jpg", 
];

var display=document.getElementById("image");
var prev=document.getElementById("previous");
var next=document.getElementById("Next")

var index=0;


function previous(){
    index= (index-1+images.length)%images.length;

    display.src=images[index];
}
function nextimg(){
    index=(index+1)%images.length;
    display.src=images[index];
   
}
prev.addEventListener("click",previous);
next.addEventListener("click",nextimg);

display.src=images[index];