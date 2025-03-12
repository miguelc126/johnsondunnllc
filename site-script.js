document.addEventListener("DOMContentLoaded", function () {
    //Navigation Bar Home Section Fade in animation
    const navbar = document.querySelector('.nav-bar');
    const homeSection = document.querySelector('#home');
    let homeSectionBottom = homeSection.offsetTop + homeSection.offsetHeight;
    let isTransparent = false;
    let lastScrollY = window.scrollY;
    let scheduledAnimationFrame = false;
    function updateNavbar() {
        const currentScrollY = window.scrollY;
        //Updates DOM only when we cross this threshold
        const shouldBeTransparent = currentScrollY < homeSectionBottom;
        if (shouldBeTransparent !== isTransparent) {
            if (shouldBeTransparent) {
                navbar.classList.add('nav-bar-transparent');
            } else {
                navbar.classList.remove('nav-bar-transparent');
            }
            isTransparent = shouldBeTransparent
        }
        scheduledAnimationFrame = false;
    }
    //Throttled the scroll event listener using requestAnimationFrame
    window.addEventListener('scroll', function() {
        lastScrollY = this.window.scrollY;
        if (!scheduledAnimationFrame) {
            scheduledAnimationFrame = true;
            this.window.requestAnimationFrame(updateNavbar);
        }
    }, { passive: true }); //Passive flag for improved performance
    //Recalculation of dimensions on window resize
    window.addEventListener('resize', function() {
        homeSectionBottom = homeSection.offsetTop + homeSection.offsetHeight;
        updateNavbar();
    }, { passive: true });
    updateNavbar(); //Initial function call on page load

    //Navigation Bar Functionality
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
