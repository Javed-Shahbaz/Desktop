const mobContainer = document.getElementById('toolbar');
const iconImage = mobContainer.querySelector('img');
let mobile = false;
mobContainer.addEventListener('click', () => {
  if (!mobile) {
    document.querySelector('.deskTop').style.display = 'flex';
    document.querySelector('.deskTop').style.background = '#fff';
    document.querySelector('.deskTop').style.position = 'absolute';
    document.querySelector('.deskTop').style.width = '100%';
    document.querySelector('.deskTop').style.height = '100vh';
    document.querySelector('.deskTop').style.top = '0px';
    document.querySelector('.deskTop').style.position = 'fixed';

    document.getElementById('toolbar').style.zIndex = '3';

    document.getElementById('t-img').style.background = 'url("images/image_geometry_menu_1.png")';
    document.getElementById('t-img').style.position = 'absolute';
    document.getElementById('t-img').style.width = '70%';
    document.getElementById('t-img').style.height = '90%';
    document.getElementById('t-img').style.top = '1px';
    document.getElementById('t-img').style.left = '0';
    document.getElementById('t-img').style.backgroundSize = '100%';
    document.getElementById('t-img').style.backgroundRepeat = 'no-repeat';

    document.getElementById('b-img').style.background = 'url("images/image_geometry_menu_2.png")';
    document.getElementById('b-img').style.position = 'absolute';
    document.getElementById('b-img').style.width = '100%';
    document.getElementById('b-img').style.height = '205px';
    document.getElementById('b-img').style.bottom = '0px';
    document.getElementById('b-img').style.alignItems = 'left';
    document.getElementById('b-img').style.backgroundSize = '100%';
    document.getElementById('b-img').style.backgroundRepeat = 'no-repeat';

    document.querySelector('.deskTop ul').style.listStyle = 'none';
    document.querySelector('.deskTop ul').style.display = 'flex';
    document.querySelector('.deskTop ul').style.flexDirection = 'column';
    document.querySelector('.deskTop ul').style.alignItems = 'center';
    document.querySelectorAll('.Menu a').forEach((item) => {
      item.style.textDecoration = 'none';
      item.style.color = 'black';
      item.style.fontWeight = '500px';
      item.style.size = '20px';
      item.style.fontFamily = 'Poppins';
      item.style.justifyContent = 'center';
    });

    document.querySelectorAll('.Menu li').forEach((item) => {
      item.style.marginBottom = '40px';
    });

    document.querySelector('.deskTop').style.paddingTop = '30vh';
    document.querySelector('.deskTop').style.justifyContent = 'center';
    iconImage.src = 'images/cancel.jpg';

    mobile = true;
  } else {
    iconImage.src = 'images/ic_menu.svg';
    document.querySelector('.deskTop').style.display = 'none';
    mobile = false;
  }
});

const cancel = document.querySelector('.Menu');
const cana = cancel.querySelectorAll('a');

cana.forEach((a) => {
  a.addEventListener('click', () => {
    mobile = false;
    document.querySelector('.deskTop').style.display = 'none';
    iconImage.src = 'images/ic_menu.svg';
  });
});