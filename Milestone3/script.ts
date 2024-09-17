const form = document.getElementById('resume') as HTMLFormElement
const myresume = document.getElementById('myresume') as HTMLDivElement
form.addEventListener('submit' , (event:Event) => {
    event.preventDefault();


const myname = (document.getElementById('name')as HTMLInputElement).value
const myemail = (document.getElementById('email')as HTMLInputElement).value
const mycontact = (document.getElementById('contact number')as HTMLInputElement).value
const myeducation = (document.getElementById('Education')as HTMLInputElement).value
const mywork = (document.getElementById('work experience')as HTMLInputElement).value
const skills = (document.getElementById('skills and expertise')as HTMLInputElement).value
const generateResume = `
<h2><b>Resume</b><h2>
<h3>Personal Information</h3>
<p><b>Name:</b> ${myname}</p>
<p><b>Email:</b> ${myemail}</p>
<p><b>Contact#</b> ${mycontact}</p>

<h3>Academic Information</h3>
<p><b>Education:</b> ${myeducation}</p>

<h3>Work Experience:</h3>
<p><b>Work Experience:</b> ${mywork}</p>

<h3>Skills and Expertise</h3>
<p><b>Skills and Expertise:<b/> ${skills}</p>


`;
if(myresume) {
    myresume.innerHTML = generateResume
}else{
    console.log("please enter the required field")
}

});