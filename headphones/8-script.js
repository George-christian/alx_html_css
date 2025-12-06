<script>
    // Select the hamburger menu icon and the navigation links
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    // Listen for click on the menu icon
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');


        menuIcon.classList.toggle('open');
    });
</script>
