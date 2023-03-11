// mobile menu

const menuContainer = document.getElementById('tolbar');
const iconImage = menuContainer.querySelector('img');

let controller = false;
menuContainer.addEventListener('click', () => {
  if (!controller) {
    document.querySelector('.deskTop').style.display = 'flex';
    document.querySelector('.deskTop').style.background = '#fff';
    document.querySelector('.deskTop').style.position = 'absolute';
    document.querySelector('.deskTop').style.width = '100%';
    document.querySelector('.deskTop').style.height = '100vh';
    document.querySelector('.deskTop').style.top = '0px';
    document.querySelector('.deskTop').style.position = 'fixed';

    document.getElementById('tolbar').style.zIndex = '2';

    document.getElementById('topImg').style.background = 'url("images/image_geometry_menu_1.jpg")';
    document.getElementById('topImg').style.position = 'absolute';
    document.getElementById('topImg').style.width = '70vw';
    document.getElementById('topImg').style.height = '30vh';
    document.getElementById('topImg').style.top = '0px';
    document.getElementById('topImg').style.left = '0';
    document.getElementById('topImg').style.backgroundSize = '100%';
    document.getElementById('topImg').style.backgroundRepeat = 'no-repeat';

    document.getElementById('bottomImg').style.background = 'url("images/image_geometry_menu_2.jpg")';
    document.getElementById('bottomImg').style.position = 'absolute';
    document.getElementById('bottomImg').style.width = '100vw';
    document.getElementById('bottomImg').style.height = '220px';
    document.getElementById('bottomImg').style.bottom = '0';
    document.getElementById('bottomImg').style.backgroundSize = '100%';
    document.getElementById('bottomImg').style.backgroundRepeat = 'no-repeat';

    document.querySelector('.deskTop ul').style.listStyle = 'none';
    document.querySelector('.deskTop ul').style.display = 'flex';
    document.querySelector('.deskTop ul').style.flexDirection = 'column';
    document.querySelector('.deskTop ul').style.alignItems = 'center';
    document.querySelectorAll('.menU a').forEach((item) => {
      item.style.textDecoration = 'none';
      item.style.color = 'black';
      item.style.fontWeight = '400px';
      item.style.size = '16px';
      item.style.fontFamily = 'Poppins';
      item.style.justifyself = 'center';
    });

    document.querySelectorAll('.menU li').forEach((item) => {
      item.style.marginBottom = '30px';
    });

    document.querySelector('.deskTop').style.paddingTop = '50%';
    document.querySelector('.deskTop').style.justifyContent = 'center';
    iconImage.src = 'images/cancel.jpg';

    controller = true;
  } else {
    iconImage.src = 'images/ic_menu.svg';
    document.querySelector('.deskTop').style.display = 'none';
    controller = false;
  }
});

const cancel = document.querySelector('.menU');
const cancela = cancel.querySelectorAll('a');

cancela.forEach((a) => {
  a.addEventListener('click', () => {
    controller = false;
    document.querySelector('.deskTop').style.display = 'none';
    iconImage.src = 'images/ic_menu.svg';
  });
});

// array for projects information

const projectInfo = [
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

// project seccion dynamic Html

const showModal = (projectInfo) => {
  const myModal = document.getElementById('myMOdal');
  myModal.style.display = 'flex';
  const modalBody = `<div class="modal-content">
  <button id="closemodalX" class="close-modal close">&times</button>
  <h3 class="project-title-modal">${projectInfo.name}</h3>
  <ul class="card-tech-modal">
      <li>${projectInfo.technologies[0]}</li>
      <li>${projectInfo.technologies[1]}</li>
      <li>${projectInfo.technologies[2]}</li>
  </ul>
  <img class="project-image modal-img" src="${projectInfo.image}" alt="${projectInfo.alt}">
  <p class="project-description">${projectInfo.description}</p>
  <div class="btns-modal">
      <button class="btn-modal seeLive">See live
          <img class="iconModal" src="./images/Union (8).png">
      </button>
      <button class="btn-modal seeSource">See source
          <img class="iconModal" src="./images/Vector (8).png">
      </button>
  </div>
</div>`;
  myModal.innerHTML = modalBody;
};

const gall = document.querySelector('.galery');

const closeModal = () => {
  const myModal = document.getElementById('myMOdal');
  myModal.style.display = 'none';
};

projectInfo.forEach((project, index) => {
  const pId = project.id;
  const pName = project.name;
  const pImage = project.image;
  const pTech = project.technologies;
  const pImgAlt = project.alt;

  const soloArticle = document.createElement('article');
  soloArticle.classList.add('card', `card${index + 2}`);

  const cardContainer = `<img class="imgp" src="${pImage}" alt="${projectImgAlt}" width="100%">
<div class="pData">
    <h3>${pName}</h3>
    <ul class="pUl">
        <li class="pLi">${pTech[0]}</li>
        <li class="pLi">${pTech[1]}</li>
        <li class="pLi">${pTech[2]}</li>
    </ul>
    <button class="move myBtn" id="btn${Id}">
        See this project &nbsp →
    </button>
</div>
</article>`;
  soloArticle.innerHTML = `${cardContainer} <div class="card card-back${index + 2}"></div>`;
  gall.appendChild(soloArticle);
  const button = document.getElementById(`btn${pId}`);
  button.addEventListener('click', () => {
    showModal(project);
    const closemodalX = document.getElementById('closemodalX');
    closemodalX.addEventListener('click', () => {
      closeModal();
    });
  });
});
