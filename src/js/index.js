import jQuery from 'jquery';

window.jQuery = jQuery;
window.$ = jQuery;

require('./parallax.js');

window.jQuery(document).ready(($) => {

    alert('zzz');
  // слайдер
  $('.single-slide').slick({
    dots: true,
    arrows: false,
  });
  
  // валидация
  $(".validate").validate({
    rules: {
        login: {
          required: true,
          minlength: 5,
        },
        email: {
          required: true,
          email: true
        },
        tel: {
          required: true,
          number: true,
        },
    },
    messages: {
        login: {
          required: "Введите имя!",
          minlength: "в поле должно быть минимум 5 символа",
        },
        email: {
          required: "Введите e-mail!",
          email: "адрес должен быть вида name@domain.com"
        },
        tel: {
          required: "Введите номер телефона!",
          number: "номер телефона должен быть вида +8(XXX)XXXXXXX",
        }
    },
    focusInvalid: true,
		errorClass: "input_error"
  });

  // кнопка вверх
  $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
      } else {
        $('.scrollup').fadeOut();
      }
    });
  $('.scrollup').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
    });
  
  // аккордеон
  var panelItem = document.querySelectorAll('.panel-title'),
    active = document.getElementsByClassName('panel-active');
  
  Array.from(panelItem).forEach(function(item, i, panelItem) {
    item.addEventListener('click', function(e) {
      if (active.length > 0 && active[0] !== this) { // если есть активный элемент, и это не тот по которому кликнули
        var iconTag = active[0].getElementsByTagName('i');
        if (iconTag.length > 0) {
          iconTag[0].classList.add('material-icons-add_circle');
          iconTag[0].classList.remove('material-icons-remove_circle');
        }
        
        active[0].classList.remove('panel-active'); // убрать класс panel-active
      }
      // изменить состояние класса panel-active на текущем элементе: добавить если не было, убрать если было.
      this.classList.toggle('panel-active');
      this.getElementsByTagName('i')[0].classList.toggle('material-icons-add_circle');
      this.getElementsByTagName('i')[0].classList.toggle('material-icons-remove_circle');
    });
  });
  
  // всплывайка
  $('.image-popup').magnificPopup({
      type: 'image'
  });
  // карта
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.695, lng: -73.917},
    zoom: 8,
  });
  
  $('.parallax-window').parallax();
  
});