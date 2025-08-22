const loadMoreBtn = document.getElementById('load-more-btn');
const showLessBtn = document.getElementById('show-less-btn');
const loadMoreProjectsBtn = document.getElementById('load-more-btn-projects');
const showLessProjectsBtn = document.getElementById('show-less-btn-projects');
const certificationsContainer = document.getElementById('certifications');
const projectsContainer = document.getElementById('projects-container');
const itemsPerClick = 2;
let currentIndexCerts = 0;
let currentIndexProjects = 0;

const allCerts = [
    {
        name: "javascript algorithms and data structures certification",
        src: "https://res.cloudinary.com/dbuwekmex/image/upload/v1748023096/javascript-algorithms-and-data-structures-fixed_ydu4gy.png"
    },
    {
        name: "responsive web design certification",
        src: "https://res.cloudinary.com/dbuwekmex/image/upload/v1748023096/responsive-web-design-fixed_ituyae.png"
    },
    {
        name: "introduction to software engineering certification",
        src: "https://res.cloudinary.com/dbuwekmex/image/upload/v1747958809/introduction-to-software-engineering_i8lw3v.png"
    },
    {
        name: "intro to html css and javascript certification",
        src: "https://res.cloudinary.com/dbuwekmex/image/upload/v1747958525/intro-to-html-css-and-js_hbollu.png"
    },
    {
        name: "getting started with front end web development certification",
        src: "https://res.cloudinary.com/dbuwekmex/image/upload/v1747958776/getting-started-with-front-end-web-development_rycmsp.png"
    }
];

const allProjects = [
    {
        projectName: "Price Compare",
        title: "Price Compare",
        alt: "Price comparison web app",
        src: "https://res.cloudinary.com/dbuwekmex/image/upload/v1748662261/priceCompare_yis3f9.png",
        text: "This is a web application that utilizes javascript to easily compare the prices of similar items and visualizes the better deal based on price per unit of measurement. Price Compare can be used most effectively when buying products in bulk and effectivly removes the need for a calculator, automating a very simple but some what tedious and frustrating aspect of comparing prices."
    },
    {
        projectName: "Creature Search App",
        title: "Creature Search",
        alt: "Creature Search Web App screenshot",
        src: "https://res.cloudinary.com/dbuwekmex/image/upload/v1748437321/searchApp_iiev9t.png",
        text: `Creature Search is a guided project from freeCodeCamp utilizing an API to get information about different creatures. A name is typed into a search bar and various statistics about the creature are displayed in the UI.`
    },
    {
        projectName:"Learning Web Design",
        title: "Learning Web Design",
        alt: "Website  screenshot",
        src: "https://res.cloudinary.com/dbuwekmex/image/upload/c_crop,w_1920,h_1000/v1747921547/web-design-title-ss_tmwyp0.png",
        text: `Learning Web Design is a website about how to make a visually apealing website utilizing color theory and other proven ideas of UI building. This project allowed me to research different aspects of design while also incorporating them into the website, combining research with practice.`
    },
    {
        projectName: "Cash Register",
        title: "Cash Register",
        alt: "Cash register project screenshot",
        src: "https://res.cloudinary.com/dbuwekmex/image/upload/c_crop,w_1920,h_950/v1747930947/cash-reg-project_i5obmo.png",
        text: `Cash Register is another project made with freeCode Camp, this project focuses on computation and dom manipulation utilizing JavaScript. There is a total amount in the cash register and a product that is being paid for, the app will display important information like the change dispensed and the updated drawer total after transaction.`
    }
];

function loadMoreCerts() {
    const nextBatch = allCerts.slice(currentIndexCerts, currentIndexCerts + itemsPerClick);

    nextBatch.forEach(cert => {
        let newImg = document.createElement('img');
        newImg.src = cert.src;
        newImg.alt = cert.name;
        newImg.title = cert.name;
        newImg.classList.add('cert-img');
        newImg.classList.add('newImg');
        certificationsContainer.appendChild(newImg);
    });

    currentIndexCerts += itemsPerClick;

    if (currentIndexCerts >= allCerts.length) {
        loadMoreBtn.style.display = 'none';
        showLessBtn.style.display = 'block';
    };

    return;
};

function showLessCertifications() {
    document.querySelectorAll('.newImg').forEach(cert => {
        cert.remove();
    });
    
    loadMoreBtn.style.display = 'block';
    showLessBtn.style.display = 'none';
    currentIndex = 0;
    return;
};

function loadMoreProjects() {
    const nextBatch = allProjects.slice(currentIndexProjects, currentIndexProjects + itemsPerClick);

    nextBatch.forEach(project => {
        const newProjectDiv = document.createElement('div');
        newProjectDiv.classList.add('project');
        newProjectDiv.classList.add('added');

        const newTitle = document.createElement('h2');
        newTitle.classList.add('project-name');
        newTitle.classList.add('added');
        newTitle.textContent = project.projectName;
        newProjectDiv.appendChild(newTitle);

        const newProjectImg = document.createElement('img');
        newProjectImg.classList.add('project-img');
        newProjectImg.classList.add('added');
        newProjectImg.src = project.src;
        newProjectImg.alt = project.alt;
        newProjectImg.title = project.title;
        newProjectDiv.appendChild(newProjectImg);

        const projectDescription = document.createElement('p');
        projectDescription.classList.add('text-content');
        projectDescription.classList.add('added');
        projectDescription.textContent = project.text;
        newProjectDiv.appendChild(projectDescription);
        
        projectsContainer.appendChild(newProjectDiv);
    });

    currentIndexProjects += itemsPerClick;

    if (currentIndexProjects >= allProjects.length) {
        loadMoreProjectsBtn.style.display = 'none';
        showLessProjectsBtn.style.display = 'block';
    };

    return;
};

function showLessProjects() {
    document.querySelectorAll('.added').forEach(add => {
        add.remove();
    });

    loadMoreProjectsBtn.style.display = 'block';
    showLessProjectsBtn.style.display = 'none';

    currentIndexProjects = 0;

    return;
};

showLessBtn.addEventListener('click', showLessCertifications);
loadMoreBtn.addEventListener('click', loadMoreCerts);
showLessProjectsBtn.addEventListener('click', showLessProjects);
loadMoreProjectsBtn.addEventListener('click', loadMoreProjects);
