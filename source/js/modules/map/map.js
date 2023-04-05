const iObserver = new IntersectionObserver(function (entries) {
  if (entries[0].isIntersecting === true) {
    loadMap();
    iObserver.unobserve(entries[0].target);
  }
}, {
  threshold: [0],
});

iObserver.observe(document.getElementById('map'));

function loadMap() {
  let map = document.getElementById('map');
  if (!map.classList.contains('js--loaded')) {
    map.classList.add('js--loaded');

    if (typeof ymaps === 'undefined') {
      let js = document.createElement('script');
      js.src = 'https://api-maps.yandex.ru/2.1/?load=package.standard&lang=ru_RU&amp;apikey=206dc831-42aa-413d-81c1-f9590a1025b6';
      document.body.appendChild(js);
      js.onload = function () {
        ymaps.ready(initMap);
      };
    } else {
      ymaps.ready(initMap);
    }
  }
}

function initMap() {
  const myMap = new ymaps.Map('map', {
    center: [59.938496, 30.323135],
    zoom: 16,
  });

  const myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: 'Арктические круизы',
    balloonContent: 'Прямо в пышечной!',
  }, {
    iconLayout: 'default#image',
    iconImageHref: './img/stack.svg#icon-balloon',
    iconImageSize: [18, 22],
    iconImageOffset: [-25, 50],
  });

  myMap.geoObjects.add(myPlacemark);
}

export {initMap};
