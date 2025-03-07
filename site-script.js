//Navigation Bar Functionality
document.addEventListener("DOMContentLoaded", function () {
    function scrollTo(sectionID) {
        const section = document.getElementById(sectionID);
        if (section) {
            section.scrollIntoView({behavior: "smooth"});
        } else {
            console.error(`Section with ID ${sectionID} not found!`)
        }
    }

    const navButtons = document.querySelectorAll(".individual-nav-bar");
    navButtons.forEach(function(button) {
        button.addEventListener("click", function (event) {
            const targetID = button.getAttribute("data-target");
            scrollTo(targetID);
        })
    })
});
//Services infinite horizontal scroller functionality
const container = document.querySelector(".service-container");
const items = Array.from(container.querySelectorAll(".service-item"));

function setUpInfiniteScroll () {

    items.forEach(item => {
        const clone = item.cloneNode(true);
        container.appendChild(clone);
    });
    container.addEventListener("scroll", handleScroll);
}
function handleScroll() {
    const containerWidth = container.scrollWidth / 2;
    if (container.scrollLeft >= containerWidth) {
        container.scrollLeft = 0;
    }
    else if (container.scrollLeft <= 0) {
        container.scrollLeft = containerWidth;
    }
}
setUpInfiniteScroll();
