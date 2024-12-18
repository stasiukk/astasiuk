// Dark/Light Mode Toggle
const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});

// Filter Projects by Category
function filterProjects(category) {
    const projects = document.querySelectorAll('.project');
    projects.forEach((project) => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// AOS Animation Initialization
AOS.init();
