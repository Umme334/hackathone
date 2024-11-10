var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
var shareableLinkContainer = document.getElementById("shareable-link-container");
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById("download-pdf");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username").valueAsNumber;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("Experience").value;
    var skills = document.getElementById("Skills").value;
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills,
    };
    localStorage.setItem('username', JSON.stringify(resumeData));
    var resumeHTML = "<h2><b>Editable Resume</b></h2> \n    <h1>Personal Information</h1>\n    <p><b>Name</b><span contenteditable=\"true\">".concat(name, "<span></p>\n    <p><b>Name</b><span contenteditable=\"true\">").concat(email, "<span></p>\n    <p><b>Name</b><span contenteditable=\"true\">").concat(phone, "<span></p>\n\n    <h3>Education</h3>\n    <p  contenteditable=\"true\">").concat(education, "</p>\n\n     <h3>Experience</h3>\n    <p  contenteditable=\"true\">").concat(experience, "</p>\n\n\n    <h3>Skills</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>");
    resumeDisplayElement.innerHTML = resumeHTML;
    var shareableURL = "".concat(location.origin, "/?username=").concat(encodeURIComponent(username));
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
    downloadPdfButton.addEventListener('click', function () {
        window.print();
    });
    window.addEventListener('DOMContentLoaded', function () {
        var URL = new URLSearchParams(window.location.search);
        var username = URL.get('username');
    });
});
if (username) {
    var savedResumeData = localStorage.getItem('username:string');
    if (savedResumeData) {
        var resumeData = JSON.parse(savedResumeData);
        document.getElementById('username').value =
            'username:string';
        document.getElementById('name').value =
            resumeData.name;
        document.getElementById('email').value =
            resumeData.email;
        document.getElementById('phone').value =
            resumeData.phone;
        document.getElementById('education').value =
            resumeData.education;
        document.getElementById('Experience').value
            = resumeData.Experience;
        document.getElementById('Skills').value =
            resumeData.Skills;
    }
}
