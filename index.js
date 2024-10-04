const leftArrow= document.querySelector('.left-arrow');
const rightArrow= document.querySelector('.right-arrow');
let i=1;
leftArrow.addEventListener("click",function(){
    if(i==1)
    {
        i=8;
    }
    i=i-1;
    document.querySelector(".center-image").src ="./image/img"+i+".jpg";
}
)
rightArrow.addEventListener("click",function(){
    if(i==7)
    {
        i=0;
    }
    i=i+1;
    document.querySelector(".center-image").src ="./image/img"+i+".jpg";
}
)
setInterval(function(){
    if(i==7)
        {
            i=0;
        }
        i=i+1;
        document.querySelector(".center-image").src ="./image/img"+i+".jpg";
},4000)


    
