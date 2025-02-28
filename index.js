const profFill = document.getElementById("prof-fill");
const words = ['trainer','scholar','designer','database engineer','developer'];
const cursorBlinking = document.getElementById('cursorBlinking');
let isDeleting = false;
let charIndex = 0;
let index = 0;
let deletingSpeed = 80;
let typingSpeed = 120;

dynamicallyChanginProfFill();

setInterval(()=>{
    cursorBlinking.style.opacity = cursorBlinking.style.opacity==="0" ? "1" : "0"
} , 500);




function dynamicallyChanginProfFill(){
    
    let currentWord = words[index % words.length];


    if(isDeleting){
        profFill.innerText = currentWord.substring(0,charIndex--);
    }
    else{
        profFill.innerText = currentWord.substring(0,charIndex++);
    }

    if(isDeleting && charIndex === -1 ){
        isDeleting = false;
        index++;
        setTimeout(dynamicallyChanginProfFill,500);
        
    }
    else if(!isDeleting && charIndex === currentWord.length+1){
        isDeleting = true;
        setTimeout(dynamicallyChanginProfFill,2000);
        
    }
    else{
        setTimeout(dynamicallyChanginProfFill, isDeleting ? deletingSpeed : typingSpeed);
    }

}








