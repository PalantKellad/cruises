ymaps.ready(initMap);
function initMap() {
  // Создание карты.
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
