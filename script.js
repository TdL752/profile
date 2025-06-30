const loadMoreBtn = document.getElementById('load-more-btn');
const certificationsContainer = document.getElementById('certifications');
const itemsPerPage = 2;
let currentIndex = 0;

const allCerts = [
    {
        name: "intro to html css and javascript certification",
        src: "https://res.cloudinary.com/dbuwekmex/image/upload/v1747958525/intro-to-html-css-and-js_hbollu.png"
    },
    {
        name: "getting started with front end web development certification",
        src: "https://res.cloudinary.com/dbuwekmex/image/upload/v1747958776/getting-started-with-front-end-web-development_rycmsp.png"
    },
    {
        name: "responsive web design certification",
        src: "https://res.cloudinary.com/dbuwekmex/image/upload/v1748023096/responsive-web-design-fixed_ituyae.png"
    }
]

function displayCerts() {
    const nextBatch = allCerts.slice(currentIndex, currentIndex + itemsPerPage);

    nextBatch.forEach(cert => {
        let newImg = document.createElement('img');
        newImg.src = cert.src;
        newImg.alt = cert.name;
        newImg.title = cert.name;
        newImg.classList.add('cert-img');
        certificationsContainer.appendChild(newImg);
    });

    currentIndex += itemsPerPage;

    if (currentIndex >= allCerts.length) {
        loadMoreBtn.style.display = 'none';
    }
}

loadMoreBtn.addEventListener('click', displayCerts);