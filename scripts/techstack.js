const engineerBTN = document.getElementById("engineerBTN");
const contactBTN = document.getElementById("contactBTN");
const backBTN = document.getElementById("backBTN");
const homeBTN = document.getElementById("homeBTN");
const techBTN = document.getElementById("techBTN");
const displayBTN = document.getElementById("displayBTN");

// Function that goes to other page
export function nextPage(element, url){
    setTimeout(() => {
        element.addEventListener("click", () => {
            window.location.href = url;
        });
    }, 500)
}
export function toggle(){
    let isLight = false;

    displayBTN.onclick = function() {
        if (!isLight){
            document.body.classList.add("light-mode");
            displayBTN.textContent = "Light Mode";
        }
        else {
            document.body.classList.remove("light-mode");
            displayBTN.textContent = "Dark Mode";
            
        }
        isLight = !isLight;
    };
}


toggle();

// Function calls with button and page url
nextPage(engineerBTN, "https://luisbenavides22.github.io/Portfolio/");
nextPage(contactBTN, "contact.html");
nextPage(backBTN, "../index.html");
nextPage(homeBTN, "../index.html");
nextPage(techBTN, "techstack.html");
