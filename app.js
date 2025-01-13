 
 let container = document.querySelector('.container')
let container1 = document.querySelector('.container1')
let container2 = document.querySelector('.container2')
let container3 = document.querySelector('.container3')
let container4 = document.querySelector('.container4')
let container5 = document.querySelector('.container5')
let shoes = document.querySelector('.shoes')
let text = document.querySelector('.text')
let search =document.querySelector(".search")
let link = document.querySelectorAll('.link')
let blazer = document.querySelector('.blazer')
let buy = document.querySelector('.a3')
let blublk = document.querySelectorAll("#blublk")
let sizes = document.querySelectorAll("#sizes")
let gray = document.querySelector('.re')
let blu = document.querySelector('.blu')
let buynow = document.querySelector('.buynow')




blublk[2].style.display="block"
link.forEach((element,index)=>{
    element.addEventListener("click",()=>{
        if(index==0){
            shoes.src ="img/air.png"
            text.innerHTML="AIR MAX"
            blublk[0].style.background="black"
            blublk[1].style.background="blue"
            blublk[2].style.display="none"
        }
        else if(index==1){
            shoes.src = "img/jordan.png"
            text.innerHTML="JORDAN"
            blublk[0].style.background="white"
            blublk[1].style.background="blue"
            blublk[2].style.display="none"
            
        }else if(index==2){
            shoes.src = "img/blazer.png"
            text.innerHTML= "BLAZER"
            blublk[0].style.background="white"
            blublk[1].style.background="green"
            blublk[2].style.display="none"

        }else if(index==3){
            shoes.src = "img/crater.png"
            text.innerHTML= "CRATER"
            blublk[0].style.background="black"
            blublk[1].style.background="white"
            blublk[2].style.display="block"
            blublk[2].style.background="blue"

            
        }
        else if(index==4){
            shoes.src = "img/hippie.png"
            text.innerHTML= " HIPPIE"
            blublk[0].style.background="black"
            blublk[1].style.background="blue"
            blublk[2].style.display="block"
            blublk[2].style.background="gray"
        }
             container.style.transform = `translateX(${-20*index}%)`
    }
  
       
       
    )    })
      



blublk.forEach((element,index)=>{
    element.addEventListener("click",()=>{

        if(index==0){
            if(text.innerHTML=="AIR MAX"){
                shoes.src="img/air.png"
            } if(text.innerHTML=="JORDAN"){
                shoes.src="img/jordan.png"
            }
            if(text.innerHTML=="BLAZER"){
                shoes.src="img/blazer.png"
            }
            else if(text.innerHTML==" HIPPIE"){
                shoes.src="img/hippie.png"
            }else if(text.innerHTML=="CRATER"){
                shoes.src="img/crater.png"
            }
           }
   if(index==1){
    if(text.innerHTML=="AIR MAX"){
        shoes.src="img/air2.png"
    }if(text.innerHTML=="JORDAN"){
        shoes.src=" img/jordan2.png"
    }
    else if(text.innerHTML=="BLAZER"){
        shoes.src="img/blazer2.png"
    }
    else if(text.innerHTML==" HIPPIE"){
        shoes.src="img/hippie2.png"
    }
    else if(text.innerHTML=="CRATER"){
        shoes.src="img/crater2.png"
    }
}
   if(index==2){

    if(text.innerHTML=="AIR MAX"){
        shoes.src="img/air2.png"
    } if(text.innerHTML=="JORDAN"){
        shoes.src="img/air2.png"
    }
    else if(text.innerHTML=="BLAZER"){
        shoes.src="img/blazer3.png"
    }
    else if(text.innerHTML==" HIPPIE"){
        shoes.src="img/hippie3.png"
    }else if(text.innerHTML=="CRATER"){
        shoes.src="img/crater3.png"
    }
}
   
         
    })
      
})

sizes.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        if(index==0){
            shoes.style.transform=`scale(.8)`
        }else if(index==1){
            shoes.style.transform=`scale(.9)`
        }else if(index==2){
            shoes.style.transform=`scale(1)`
        }
    })
})
 

buynow.style.display="none"

let now = document.querySelector(".bay")
let button = document.querySelector(".button")
let close1 = document.querySelector(".close")





now.addEventListener("click",()=>{

buynow.style.display="block"

})

close1.addEventListener('click',()=>{
    buynow.style.display="none"
    check.style.display="block"
    wait.style.display="none"

})

let wait = document.querySelector(".wait")
let check = document.querySelector(".check")

wait.style.display="none"
check.addEventListener('click',()=>{
    check.style.display="none"
    wait.style.display="block"
})

