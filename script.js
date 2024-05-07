//js for the toggle in "about me"  section
var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
        
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link"); 
    //'event.currentTarget' gets the element that triggered the event
    document.getElementById(tabname).classList.add("active-tab");
}


//js for the menu page for making it responsive
var sidemenu=document.getElementById("sidemenu")
    function openmenu(){
      sidemenu.style.right="0";   
    }
    function closemenu(){
      sidemenu.style.right="-200px";   
    }


//js for form submission in google sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbwORe54AF6d6nQMqZvdgdByOd0XXCZh73_7JyS58Nh0TKFWaZhWXWXPuAMUUyG0RV2x6Q/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg")

    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            alert("Message sent successfully!")
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })