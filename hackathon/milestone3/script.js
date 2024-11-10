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
    var resumeHTML = '<h2><b>Resume</b></h2> '
     '<h3>Personal Information</h3>; '
      '<p><b>Name:</b>${name}</p>;'
      '<p><b>Name:</b>${email}</p>'
      ' <p><b>Name:</b>${phone}</p> '
      ' <h3>Education</h3> <p>${education}</p>'
       '<';
});


