'use strict';

(function () {
  var myControlPanel = document.querySelector('.control-panel');

  var myImg = myControlPanel.querySelector('.control-panel__currency-img');
  var myCurrency = myControlPanel.querySelector('.control-panel__select--currency');

  var onMyCurrencyChange = function () {
    myImg.src = '../../img/icon-' + myCurrency.value + '.svg';
  };

  myCurrency.addEventListener('change', onMyCurrencyChange);
})();
