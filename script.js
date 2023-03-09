// mobile menu

const mContainer = document.getElementById('toolbar');
const iconImage = mContainer.querySelector('img');

let mobile = false;
mContainer.addEventListener('click', () => {
  if (!mobile) {
    document.querySelector('.deskTop').style.display = 'flex';
    document.querySelector('.deskTop').style.background = '#fff';
    document.querySelector('.deskTop').style.position = 'absolute';
    document.querySelector('.deskTop').style.width = '100%';
    document.querySelector('.deskTop').style.height = '100vh';
    document.querySelector('.deskTop').style.top = '0px';
    document.querySelector('.deskTop').style.position = 'fixed';

    document.getElementById('toolbar').style.zIndex = '2';

    document.getElementById('timg').style.background = 'url("images/image_geometry_menu_1.png")';
    document.getElementById('timg').style.position = 'absolute';
    document.getElementById('timg').style.width = '70%';
    document.getElementById('timg').style.height = '90%';
    document.getElementById('timg').style.top= '1px';
    document.getElementById('timg').style.left = '0';
    document.getElementById('timg').style.backgroundSize = '100%';
    document.getElementById('timg').style.backgroundRepeat = 'no-repeat';

    document.getElementById('bimg').style.background = 'url("images/image_geometry_menu_2.png")';
    document.getElementById('bimg').style.position = 'absolute';
    document.getElementById('bimg').style.width = '100vw';
    document.getElementById('bimg').style.height = '220px';
    document.getElementById('bimg').style.bottom= '0';
    document.getElementById('bimg').style.backgroundSize = '100%';
    document.getElementById('bimg').style.backgroundRepeat = 'no-repeat';

    document.querySelector('.deskTop ul').style.listStyle = 'none';
    document.querySelector('.deskTop ul').style.display = 'flex';
    document.querySelector('.deskTop ul').style.flexDirection = 'column';
    document.querySelector('.deskTop ul').style.alignItems = 'center';
    document.querySelectorAll('.mnu a').forEach((item) => {
      item.style.textDecoration = 'none';
      item.style.color = 'black';
      item.style.fontWeight = '400px';
      item.style.size = '16px';
      item.style.fontFamily = 'Poppins';
      item.style.justifyself = 'center';
    });

    document.querySelectorAll('.mnu li').forEach((item) => {
      item.style.marginBottom = '30px';
    });

    document.querySelector('.deskTop').style.paddingTop = '50%';
    document.querySelector('.deskTop').style.justifyContent = 'center';
    iconImage.src = 'images/cancel.jpg';

    mobile = true;
  } else {
    iconImage.src = 'images/ic_menu.svg';
    document.querySelector('.deskTop').style.display = 'none';
    mobile = false;
  }
});

const cancel = document.querySelector('.mnu');
const cancela = cancel.querySelectorAll('a');

cancela.forEach((a) => {
  a.addEventListener('click', () => {
    mobile = false;
    document.querySelector('.deskTop').style.display = 'none';
    iconImage.src = 'images/ic_menu.svg';
  });
});

// Array for Projects 

const projInfo = [
  {
    id: 1,
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/project1.png',
    alt: 'laptop',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript',
    ],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 2,
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/project2.png',
    alt: 'laptop',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 3,
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/project3.png',
    alt: 'laptop',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 4,
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/project4.png',
    alt: 'laptop',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 5,
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/project5.png',
    alt: 'laptop',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 6,
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/project6.png',
    alt: 'laptop',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript'],
    liveVersion: '#',
    source: '#',
  },
];

// project seccion dynamic Html

const showModal = (projInfo) => {
  const myModal = document.getElementById('myMOdal');
  myModal.style.display = 'flex';
  const modalBody = `<div class="modal-content">
  <button id="closemodalX" class="close-modal close">&times</button>
  <h3 class="project-title-modal">${projInfo.name}</h3>
  <ul class="card-tech-modal">
      <li>${projInfo.technologies[0]}</li>
      <li>${projInfo.technologies[1]}</li>
      <li>${projInfo.technologies[2]}</li>
  </ul>
  <img class="project-image modal-img" src="${projInfo.image}" alt="${projInfo.alt}">
  <p class="project-description">${projInfo.description}</p>
  <div class="btns-modal">
      <button class="btn-modal seeLive">See live
          <img class="iconModal" src="./images/Union (8).png">
      </button>
      <button class="btn-modal seeSource">See source
          <img class="iconModal" src="./images/Vector (8).png">
      </button>
  </div>
  <div class="next-prev-proj">
      <button class="prev-btn"> &larr; Previous project</button>
      <button class="prev-btn">Next Project &rarr;</button>
  </div>
</div>`;
  myModal.innerHTML = modalBody;
};

const gallry = document.querySelector('.galery');

const closeModal = () => {
  const myModal = document.getElementById('myMOdal');
  myModal.style.display = 'none';
};

projInfo.forEach((project, index) => {
  const projectId = project.id;
  const projectName = project.name;
  const projectImage = project.image;
  const projectTech = project.technologies;
  const projectImgAlt = project.alt;

  const soloArticle = document.createElement('article');
  soloArticle.classList.add('card', `card${index + 2}`);

  const cardContainer = `<img class="imgp" src="${projectImage}" alt="${projectImgAlt}" width="100%">
<div class="P-Data">
    <h3>${projectName}</h3>
    <ul class="pUl">
        <li class="pLi">${projectTech[0]}</li>
        <li class="pLi">${projectTech[1]}</li>
        <li class="pLi">${projectTech[2]}</li>
    </ul>
    <button class="move myBtn" id="btn${projectId}">
        see this project &nbsp →
    </button>
</div>
</article>`;
  soloArticle.innerHTML = `${cardContainer} <div class="card card-back${index + 2}"></div>`;
  gallry.appendChild(soloArticle);
  const button = document.getElementById(`btn${projectId}`);
  button.addEventListener('click', () => {
    showModal(project);
    const closemodalX = document.getElementById('closemodalX');
    closemodalX.addEventListener('click', () => {
      closeModal();
    });
  });
});
