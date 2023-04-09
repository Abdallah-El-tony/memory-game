let startbtn = document.querySelector('.startbtn')
let name = document.querySelector('.name')
let overlay = document.querySelector(".overlay")
let frontblock = document.querySelectorAll(".imgscontainer .block .front")
let containerblock = document.querySelector('.imgscontainer')
let wrongtries = document.querySelector('.wrongtries')
let counter = 0;
// console.log(containerblock)
frontblock.forEach((front)=>{
    front.innerHTML='?'
})
startbtn.onclick = function() {
   let user=  window.prompt("you name: ")
   if(user!=''){
   name.innerHTML=`Hello: ${user}`
   } else {
    user='Unkown';
    name.innerHTML=`Hello: ${user}`
   }
   overlay.remove()

}
let blocks = document.querySelectorAll('.imgscontainer .block')
let array= Array.from(blocks)
let range = Array.from(Array(array.length).keys())
let random,temp;
for(let i=0; i<array.length; i++){
    random = Math.floor(Math.random()*array.length)
    temp = range[i];
    range[i]=range[random]
    range[random] = temp;
}
array.forEach((block,index)=>{
    block.style.order=range[index];
})

blocks.forEach((block)=>{
    block.addEventListener('click',function(){
        flibblock(block)
    })
})
function flibblock(selected) {
    
    selected.classList.add('flib')
    let selectedblock = array.filter(flibed=>flibed.classList.contains('flib'))
    if(selectedblock.length === 2) {
        stopclicking()
        matching(selectedblock[0],selectedblock[1])
    }
}
function stopclicking() {
    containerblock.classList.add('no-clicking')
    setTimeout(function(){
        containerblock.classList.remove('no-clicking')
    },1000)
}
function matching(one,tow) {
    if(one.getAttribute('data-techno')===tow.getAttribute('data-techno'))
    {
        containerblock.classList.remove('no-clicking')
       
            one.classList.remove('flib')
            tow.classList.remove('flib')
            
            one.classList.add('has-match')
            tow.classList.add('has-match')
            setTimeout(function(){
                document.getElementById('success').play();
            },500)
            counter++;
            if(counter== 10 ) {
                
                setTimeout(function(){
                    location.reload()
                },3000)
            }
           
    }
    else {
       
        wrongtries.innerHTML++;
        containerblock.classList.remove('no-clicking')
        setTimeout(function(){
            one.classList.remove('flib')
            tow.classList.remove('flib')
            document.getElementById('fail').play();
        },1000)
    }
}
console.log(window.URL)