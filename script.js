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


const progressCircles = document.querySelectorAll('.progress-circle');

progressCircles.forEach((circle) => {
    const progress = circle.getAttribute('data-progress');
    circle.style.setProperty('--progress', progress / 100);
});


// AOS Animation Initialization
AOS.init();

const skills = [
    { id: "number1", percentage: 90 },
    { id: "number2", percentage: 80 },
    { id: "number4", percentage: 89 },
    { id: "number5", percentage: 70 },
    { id: "number6", percentage: 89 },
    { id: "number7", percentage: 76 },
    { id: "number3", percentage: 88 },
];

skills.forEach(skill => {
    let counter = 0;
    const target = skill.percentage;
    const numberElement = document.getElementById(skill.id);
    const interval = setInterval(() => {
        if (counter <= target) {
            numberElement.innerText = `${counter}%`;
            counter++;
        } else {
            clearInterval(interval);
        }
    }, 30);
});

