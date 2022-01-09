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



// квиз

let changeScreen = document.querySelector("#change_screen") //кнопка переключения слайдов
let arrSlides = document.querySelectorAll('.question_screen') //выборка слайдов
let currentSlide = 0
let submitBtn = document.querySelector('#quiz_submit') //кнопка отправки формы

let currentQuestion = document.querySelector('.current_question') // передача номера текущего слайда
let coloredBlock = document.querySelectorAll('.prof_item') // закрашивание блоков

if (arrSlides.length > 0) {



  // изначальная блокировка кнопки
  changeScreen.setAttribute('disabled', 'disabled')

  unDisabledBtn(arrSlides[0])

  // функция для блока кнопки
  function unDisabledBtn(item) {


    let listOfInput = item.querySelectorAll('input')
    listOfInput.forEach((item, index) => {

      item.addEventListener('change', function () {

        changeScreen.removeAttribute('disabled')

      })
    })

  }



  changeScreen.addEventListener('click', function () {

    if ((currentSlide + 2) !== arrSlides.length) {

      changeScreen.setAttribute('disabled', 'disabled')




      arrSlides[currentSlide].classList.remove('active')

      currentSlide++

      arrSlides[currentSlide].classList.add('active')

      unDisabledBtn(arrSlides[currentSlide])

      // coloredBlock[currentSlide].style.cssText = "background-image: url(img/profit_fon.png);"
      coloredBlock[currentSlide].classList.add('colored')
      currentQuestion.textContent = (currentSlide + 1)


    } else {
      arrSlides[currentSlide].classList.remove('active')

      currentSlide++
      // coloredBlock[currentSlide].style.cssText = "background-image: url(img/profit_fon.png);"
      coloredBlock[currentSlide].classList.add('colored')
      currentQuestion.textContent = (currentSlide + 1)
      arrSlides[currentSlide].classList.add('active')

      changeScreen.style.cssText = "display: none;"
      currentSlide = 0
    }


  })


  submitBtn.addEventListener('submit', function () {
    currentSlide = 0

    arrSlides[(arrSlides.length - 1)].classList.remove('active')

    arrSlides[0].classList.add('active')
    changeScreen.style.cssText = "display: block;"


    coloredBlock.forEach((block, index) => {

      if (index !== 0) {
        block.classList.remove('active')
        // block.style.cssText = "background-image: none;"
      }


    })

  })


}



// аккордион

// JavaScript
var accordion = (function (element) {
  var _getItem = function (elements, className) { // функция для получения элемента с указанным классом
    var element = undefined;
    elements.forEach(function (item) {
      if (item.classList.contains(className)) {
        element = item;
      }
    });
    return element;
  };
  return function () {
    var _mainElement = {}, // .accordion
      _items = {}, // .accordion-item
      _contents = {}; // .accordion-item-content
    var _addItemHeaderCount = function () {
      // количество подпунктов в пункте
      // var headers = _mainElement.querySelectorAll('.accordion-item-header');
      // headers.forEach(function (header) {
      //   var countElement = document.createElement('div');
      //   countElement.className = 'accordion-item-header-count';
      //   countElement.textContent = header.parentElement.querySelectorAll('.accordion-subitem').length;
      //   // header.appendChild(countElement);
      // });
    },
      _actionClick = function (e) {
        if (!e.target.classList.contains('accordion-item-header')) { // прекращаем выполнение функции если кликнули не по заголовку
          return;
        }
        e.preventDefault(); // отменям стандартное действие
        // получаем необходимые данные
        var header = e.target,
          item = header.parentElement,
          itemActive = _getItem(_items, 'show');

        if (itemActive === undefined) { // добавляем класс show к элементу (в зависимости от выбранного заголовка)
          item.classList.add('show');
        } else {
          // удаляем класс show у ткущего элемента
          itemActive.classList.remove('show');
          // если следующая вкладка не равна активной
          if (itemActive !== item) {
            // добавляем класс show к элементу (в зависимости от выбранного заголовка)
            item.classList.add('show');
          }
        }
      },
      _setupListeners = function () {
        // добавим к элементу аккордиона обработчик события click
        _mainElement.addEventListener('click', _actionClick);
    };
    return {
      init: function (element) {
        _mainElement = (typeof element === 'string' ? document.querySelector(element) : element);
        _items = _mainElement.querySelectorAll('.accordion-item');
        _addItemHeaderCount();
        _setupListeners();
      }
    }
  }
})();

var accordion1 = accordion();
accordion1.init('#accordion');

