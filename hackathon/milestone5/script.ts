const form = document.getElementById("resume-form") as HTMLFormElement
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement
const shareableLinkContainer = document.getElementById("shareable-link-container") as HTMLDivElement
const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement
const downloadPdfButton = document.getElementById("download-pdf") as HTMLButtonElement

form.addEventListener("submit", (event: Event) => {
    event.preventDefault();
 
    const username = (document.getElementById("username") as HTMLInputElement).valueAsNumber
    const name =(document.getElementById("name") as HTMLInputElement).value
    const email =(document.getElementById("email") as HTMLInputElement).value
    const phone =(document.getElementById("phone") as HTMLInputElement).value
    const education =(document.getElementById("education") as HTMLInputElement).value
    const experience =(document.getElementById("Experience") as HTMLInputElement).value
    const skills =(document.getElementById("Skills") as HTMLInputElement).value

    const resumeData = {
        name,
        email,
        phone,
        education,
        experience,
        skills,
    };
    localStorage.setItem('username', JSON.stringify(resumeData));

    const resumeHTML =`<h2><b>Editable Resume</b></h2> 
    <h1>Personal Information</h1>
    <p><b>Name</b><span contenteditable="true">${name}<span></p>
    <p><b>Name</b><span contenteditable="true">${email}<span></p>
    <p><b>Name</b><span contenteditable="true">${phone}<span></p>

    <h3>Education</h3>
    <p  contenteditable="true">${education}</p>

     <h3>Experience</h3>
    <p  contenteditable="true">${experience}</p>


    <h3>Skills</h3>
    <p contenteditable="true">${skills}</p>`;

    resumeDisplayElement.innerHTML = resumeHTML;

    const shareableURL = 
    `${location.origin}/?username=${encodeURIComponent(username)}`;

    shareableLinkContainer.style.display ='block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent =shareableURL;

    downloadPdfButton.addEventListener('click' , () =>{
        window.print();
    })

    window.addEventListener('DOMContentLoaded' , () =>{
        const URL= new URLSearchParams(window.location.search);
        const username = URL.get('username');
        
    })
}
)
if( 'username') {

const savedResumeData = localStorage.getItem('username:string');
 if (savedResumeData) {
 const resumeData = JSON.parse(savedResumeData);
 (document.getElementById('username') as HTMLInputElement).value =
'username:string';
 (document.getElementById('name') as HTMLInputElement).value =
resumeData.name;
 (document.getElementById('email') as HTMLInputElement).value =
resumeData.email;
 (document.getElementById('phone') as HTMLInputElement).value =
resumeData.phone;
 (document.getElementById('education') as HTMLTextAreaElement).value =
resumeData.education;
 (document.getElementById('Experience') as HTMLTextAreaElement).value
= resumeData.Experience;
 (document.getElementById('Skills') as HTMLTextAreaElement).value =
resumeData.Skills;
 }
}
