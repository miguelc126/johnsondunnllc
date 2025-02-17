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