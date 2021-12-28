// // адаптив
// function fontSize() {
//     if ($(window).width() < 900) {
//       $('html').css({
//         fontSize: 16 + 'px'
//       });
//     }
  
//     if ($(window).width() > 900) {
//       var width = 1920; // ширина, от которой идет отсчет
  
//       var fontSize = 16; // минимальный размер шрифта
  
//       var bodyWidth = $('html').width();
//       var multiplier = bodyWidth / width;
//       if ($('html').width() >= width) fontSize = Math.floor(fontSize * multiplier);
//       if ($('html').width() < width) fontSize = Math.floor(fontSize * multiplier);
//       $('html').css({
//         fontSize: fontSize + 'px'
//       });
//     }
//   }
  
//   $(function () {
//     fontSize();
//   });
//   $(window).resize(function () {
//     fontSize();
//   });




const icon = document.querySelector('.burger-icon');

  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
 
});