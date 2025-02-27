window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar-box");

    if (window.scrollY > 100) {  // Change '100' to your desired scroll position
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});




function showNavbarHeadings() {
    const icon = document.querySelector('#navbar-right i');
    const elements = document.querySelectorAll('.navbar-headings');
    const nav_heading_block = document.querySelector(".nav-heading-block");

    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
        nav_heading_block.classList.add('is-opened');
        
      


    } else { // Simplified else statement
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
        nav_heading_block.classList.remove("is-opened");
       
    }
    console.log('bars are using', icon.className);
    console.log('bars are using', nav_heading_block);
}


