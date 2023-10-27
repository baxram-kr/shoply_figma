
const toggleButton = document.getElementById("submit");
const content = document.getElementById("login");

// Add an event listener to the toggle button
toggleButton.addEventListener("click", () => {
  if (content.style.display === "block") {
     content.style.display = "none"; // Show the content
  } else {
    content.style.display = "block"; // Hide the content
  }
});
const tabs = [
        { button: document.getElementById("about-btn"), content: document.getElementById("about") },
        { button: document.getElementById("home-btn"), content: document.getElementById("home") },
        { button: document.getElementById("product-btn"), content: document.getElementById("product") }
    ];

    tabs.forEach(tab => {
        tab.button.addEventListener("click", () => {
            tabs.forEach(t => {
                t.button.style.backgroundColor = tab.button === t.button ? "black" : "transparent";
                t.button.style.color = tab.button === t.button ? "white" : "black";
                t.content.style.display = tab.content === t.content ? "block" : "none";
            });
        });
    });



const cardBtn = document.getElementById("card2");
const dBtn = document.getElementById("d-btn");
const detils = document.getElementById("aaa");
const card2 = document.getElementById("card-2");

function name2() {
card2.style.display="none";
detils.style.display="block";
}
dBtn.addEventListener("click" , name2);


function name3() {
    card2.style.display="block";
    detils.style.display="none";
    }
cardBtn.addEventListener("click" , name3);
