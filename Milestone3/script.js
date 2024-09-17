var form = document.getElementById('resume');
var myresume = document.getElementById('myresume');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var myname = document.getElementById('name').value;
    var myemail = document.getElementById('email').value;
    var mycontact = document.getElementById('contact number').value;
    var myeducation = document.getElementById('Education').value;
    var mywork = document.getElementById('work experience').value;
    var skills = document.getElementById('skills and expertise').value;
    var generateResume = "\n<h2><b>Resume</b><h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b>".concat(myname, "</p>\n<p><b>Email:</b>").concat(myemail, "</p>\n<p><b>Contact#</b>").concat(mycontact, "</p>\n\n<h3>Academic Information</h3>\n<p><b>Education:</b>").concat(myeducation, "</p>\n\n<h3>Work Experience:</h3>\n<p><b>Work Experience:</b>").concat(mywork, "</p>\n\n<h3>Skills and Expertise</h3>\n<p><b>Skills and Expertise:<b/>").concat(skills, "</p>\n\n\n");
    if (myresume) {
        myresume.innerHTML = generateResume;
    }
    else {
        console.log("please enter the required field");
    }
});
