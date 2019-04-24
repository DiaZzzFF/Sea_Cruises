'use strict';

(function () {
  var ESC_KEYCODE = 27;

  var btn = document.querySelector('.catalog__btn');
  var popup = document.querySelector('.popup__overlay');
  var close = popup.querySelector('.popup__close');

  btn.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('popup--show');
  });

  close.addEventListener('click', function (evt) {
    evt.preventDefault();

    popup.classList.remove('popup--show');
    popup.classList.remove('popup__close');
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      if (popup.classList.contains('popup--show')) {
        evt.preventDefault();

        popup.classList.remove('popup--show');
      }
    }
  });
})();
