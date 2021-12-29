// import Swiper JS
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);



const icon = document.querySelector('.burger-icon');
let menu = document.querySelector('.menu_block')
let body = document.body
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
    menu.classList.toggle("active");
    body.classList.toggle('menu_open')


 
});


let submenuBtn = document.querySelectorAll('.menu .open_submenu')

submenuBtn.forEach((item, index) => {
  item.addEventListener('click', function(){

    let submenu = document.querySelectorAll('.menu .submenu')

    
    if (item.classList.contains('active')){
      item.classList.remove('active')
      submenu[index].classList.remove('show')


    } else {

      let ac_menuBtn = document.querySelector('.menu .open_submenu.active')

    

      if (ac_menuBtn) {
        ac_menuBtn.classList.remove('active')
        let ac_submenu = document.querySelector('.menu .submenu.show')
        ac_submenu.classList.remove('show')
      }
  
  
      item.classList.add('active')
      submenu[index].classList.add('show')
    }

  })

})


var seo_main = document.getElementById('seo_main');
var parallaxInstance = new Parallax(seo_main);