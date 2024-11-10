const form1 = document.getElementById("resume-form") as HTMLFormElement
const resumeDisplayElement1 = document.getElementById("resume-display") as HTMLDivElement

form1.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    const name =(document.getElementById("name") as HTMLInputElement).value
    const email =(document.getElementById("email") as HTMLInputElement).value
    const phone =(document.getElementById("phone") as HTMLInputElement).value
    const education =(document.getElementById("education") as HTMLInputElement).value
    const experience =(document.getElementById("Experience") as HTMLInputElement).value
    const skills =(document.getElementById("Skills") as HTMLInputElement).value

    const resumeHTML ='<h2><b>Resume</b></h2> '
    '<h3>Personal Information</h3>'
    '<p><b>Name</b>${name}</p>'
    '<p><b>Name</b>${email}</p>'
    '<p><b>Name</b>${phone}</p>'

    '<h3>Education</h3>'
    '<p>${education}</p>'

     '<h3>Experience</h3>'
    '<p>${experience}</p>'


    '<h3>Skills</h3>'
    '<p>${skills}</p>';


    if(resumeDisplayElement1){
        resumeDisplayElement1.innerHTML =resumeHTML
    }else {
        console.error('missing')
    }
    

});