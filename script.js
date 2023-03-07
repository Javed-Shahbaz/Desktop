const mContainer = document.getElementsByClassName('.toolbar');

let controller = false;
mContainer.addEventListener('click', () => {
  if (!controller) {
    document.querySelector('.deskTop').style.display = 'flex';
    document.querySelector('.deskTop').style.background = '#fff';
    document.querySelector('.deskTop').style.position = 'absolute';
    document.querySelector('.deskTop').style.width = '100%';
    document.querySelector('.deskTop').style.height = '100%';
    document.querySelector('.deskTop').style.top = '0';

    document.getElementById('top-img').style.background = 
    'url("images/image_geometry_menu_1.jpg")';
    document.getElementById('top-img').style.position = 'absolute';
    document.getElementById('top-img').style.width = '263px';
    document.getElementById('top-img').style.height = '114px';
    document.getElementById('top-img').style.top = '0';
    document.getElementById('top-img').style.left = '0';
    document.getElementById('top-img').style.zoom = '1.2';

    document.getElementById('bottom-img').style.background = 
    'url("images/image_geometry_menu_2.jpg")';
    document.getElementById('bottom-img').style.position = 'absolute';
    document.getElementById('bottom-img').style.width = '100%';
    document.getElementById('bottom-img').style.height = '220px';
    document.getElementById('bottom-img').style.bottom = '0';
    document.getElementById('bottom-img').style.left = '0';

    document.querySelector('.deskTop ul').style.listStyle = 'none';
    document.querySelectorAll('.Menu a').forEach((item) => {
      item.style.textDecoration = 'none';
      item.style.color = 'black';
      item.style.fontWeight = '400px';
      item.style.size = '16px';
      item.style.fontFamily = 'Poppins';
    });

    document.querySelectorAll('.Menu li').forEach((item) => {
      item.style.marginBottom = '30px';
    });

    document.querySelector('.deskTop').style.alignItems = 'center';
    document.querySelector('.deskTop').style.justifyContent = 'center';

    controller = true;
  } else {
    controller = false;
  }
});

const cancel = document.querySelector('.Menu');

const cancela = cancel.querySelectorAll('a');

cancela.forEach((a) => {
  a.addEventListener('click', () => {
    document.querySelector('.deskTop').style.display = 'none';
  });
});
