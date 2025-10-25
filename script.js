// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section-content');
    
    // Function to hide all sections
    function hideAllSections() {
        sections.forEach(section => {
            section.style.display = 'none';
        });
    }
    
    // Function to remove active class from all nav links
    function removeActiveClass() {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
    }
    
    // Add click event to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            removeActiveClass();
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Hide all sections
            hideAllSections();
            
            // Show the corresponding section
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = 'block';
            }
        });
    });
    
    // Show home section by default
    document.getElementById('home').style.display = 'block';
});
