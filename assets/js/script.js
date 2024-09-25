// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


//Navbar Buttons var
const about = document.getElementById('about');
const resume = document.getElementById('resume');
const project = document.getElementById('project');
const contact = document.getElementById('contact');

//main page content variables
const aboutcontent = document.getElementById('aboutcontent');
const resumecontent = document.getElementById('resumecontent');
const projectcontent = document.getElementById('projects');
// const portcontent = document.getElementById('projects');
const contactcontent = document.getElementById('contactcontent');

//about btn event listner
about.addEventListener("click", function () {
    //navbar active
    about.classList.add('active');
    resume.classList.remove('active');
    project.classList.remove('active');
    contact.classList.remove('active');

    //page content active
    aboutcontent.classList.add('active');
    resumecontent.classList.remove('active');
    projectcontent.classList.remove('active');
    contactcontent.classList.remove('active');

});


//resume btn event listner
resume.addEventListener("click", function () {
    //navbar active
    resume.classList.add('active');
    about.classList.remove('active');
    project.classList.remove('active');
    contact.classList.remove('active');

    //page content active
    resumecontent.classList.add('active');
    aboutcontent.classList.remove('active');
    projectcontent.classList.remove('active');
    contactcontent.classList.remove('active');

});


//projects btn event listner
project.addEventListener('click', function () {
    //navbar active
    project.classList.add('active');
    about.classList.remove('active');
    resume.classList.remove('active');
    contact.classList.remove('active');

    //page content active
    projectcontent.classList.add('active');
    aboutcontent.classList.remove('active');
    resumecontent.classList.remove('active');
    contactcontent.classList.remove('active');

})

//Contact btn event listner
contact.addEventListener("click", function () {
    //navbar active
    contact.classList.add('active');
    resume.classList.remove('active');
    project.classList.remove('active');
    about.classList.remove('active');

    //page content active
    contactcontent.classList.add('active');
    resumecontent.classList.remove('active');
    projectcontent.classList.remove('active');
    aboutcontent.classList.remove('active');

});
