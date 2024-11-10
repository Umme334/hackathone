const mybutton = document.getElementById("my-skills") as HTMLButtonElement
const skills = document.getElementById("Skills") as HTMLElement

mybutton.addEventListener('click' ,()=>{
    if(skills.style.display === 'none'){
        skills.style.display ='block'
    } else{
        skills.style.display = 'none'
    }
});