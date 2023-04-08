import {iosVhFix} from './utils/ios-vh-fix';
import {initMap} from './modules/map/map';
import {Burger} from './modules/burger/burger';
import {initPhoneMask} from './modules/phone-mask/phone-mask';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
});

window.addEventListener('DOMContentLoaded', () => {

  window.addEventListener('load', () => {
    const burger = new Burger();
    burger.init();
    initPhoneMask();
  });
});

document.addEventListener('load', () => {
  initMap();
});
