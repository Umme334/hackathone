var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("Experience").value;
    var skills = document.getElementById("Skills").value;
    var resumeHTML = '<h2><b>Editable Resume</b></h2> ';
    '<h1>Personal Information</h1>';
    '<p><b>Name</b><span contenteditable="true">${name}<span></p>';
    '<p><b>Name</b><span contenteditable="true">${email}<span></p>';
    '<p><b>Name</b><span contenteditable="true">${phone}<span></p>';
    '<h3>Education</h3>';
    '<p  contenteditable="true">${education}</p>';
    '<h3>Experience</h3>';
    '<p  contenteditable="true">${experience}</p>';
    '<h3>Skills</h3>';
    '<p contenteditable="true">${skills}</p>';
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('missing');
    }
});
