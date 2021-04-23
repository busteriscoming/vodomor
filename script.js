'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.header__weather');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnMap = document.querySelector(`.map__vodohr`);
const mapModal = document.querySelector(`.map__vodohr--map`);
const btnScrollToSection1 = document.querySelector(`.btn--scroll-to1`);
const btnScrollToSection2 = document.querySelector(`.btn--scroll-to2`);

const section1 = document.querySelector(`#section--1`);
const section2 = document.querySelector(`#section--2`);
const operations = document.querySelector(`.operations`);
const operationsTab1 = document.querySelector(`.operations__tab--1`);
const operationsTab2 = document.querySelector(`.operations__tab--2`);
const operationsTab3 = document.querySelector(`.operations__tab--3`);
const operationsContent1 = document.querySelector(`.operations__content--1`);
const nav = document.querySelector(`.nav`);
// const navSticky = document.querySelector(`nav.sticky`);
const allSection = document.querySelectorAll(`.section`);
const headerTitle = document.querySelector(`.header__title`);
const tabs = document.querySelectorAll(`.operations__tab`);
const tabsContainer = document.querySelector(`.operations__tab-container`);
const tabsContent = document.querySelectorAll(`.operations__content`);
const header = document.querySelector(`.header`);

let filled = [
  3500, // Изобильненское
  8400, // Загорское
  600, // Балановское
  8400, // Счасливенское
  1200, // Тайганское
  16500, // Белогорское
  8000, // Партизанское
  5800, // Симферопольское
  3200, // Аянское
  600, // Старокрымское
  15600, // Чернореченское
  1000, // Альминское (данных нет)
  200, // Бахчисарайское (данных нет)
  0, // Кутузовское
  880, // Льговское
];

let refrestDataTime = `16.04.21 г.`;
let refrestDataTimeText = `Данные от `;

document.getElementById(`updateTime`).innerHTML =
  refrestDataTimeText + refrestDataTime;

const death = [
  1200,
  2500,
  400,
  1500,
  900,
  1500,
  4000,
  5000,
  200,
  300,
  7000,
  1860,
  2000,
  330,
  660,
];
const full = [
  13250,
  27850,
  5070,
  11800,
  13800,
  23300,
  34400,
  36000,
  3900,
  3150,
  64200,
  6200,
  6890,
  1100,
  2200,
];

let filled_nalivnie = [
  2358, // Зеленоярское (на 2018 г.)
  1320, // Межгорное (га 2019 год.)
  3000, // Самарлинское
  4000, // Керченское (станционное) (на 2018 г.)
  0, // Сокольское
  6000, // Феодосийское
  1460, // Фронтовое
  2800, // Ленинское (Юзмакское)
];
const death_nalivnie = [1006, 15000, 1000, 7200, 678, 4600, 6000, 1000];
const full_nalivnie = [3720, 50000, 9000, 24000, 2260, 15370, 35000, 7700];

let estfilled = filled.reduce((acc, curr) => acc + curr, 0);
let estfull = full.reduce((acc, curr) => acc + curr, 0);
let estpercent = +((estfilled * 100) / estfull).toFixed(1);

let nalivfilled_nalivnie = filled_nalivnie.reduce((acc, curr) => acc + curr, 0);
let nalivfull_nalivnie = full_nalivnie.reduce((acc, curr) => acc + curr, 0);
let nalivpercent_nalivnie = +(
  (nalivfilled_nalivnie * 100) /
  nalivfull_nalivnie
).toFixed(1);

let allFilled = estfilled + nalivfilled_nalivnie;
let allFull = estfull + nalivfull_nalivnie;
let allPercent = +((allFilled * 100) / allFull).toFixed(1);

let filled_timeline = [
  3500, // Изобильненское 0
  2500, // Загорское 1
  550, // Балановское 2
  6200, // Счасливенское 3
  1200, // Тайганское 4
  11500, // Белогорское 5
  5800, // Партизанское 6
  3600, // Симферопольское 7
  1900, // Аянское 8
  600, // Старокрымское 9
  3200, // Самарлинское 10
  2900, // Ленинское (юзмакское) 11
  15600, // Чернореченское 12
  1000, // Альминское (данных нет) 13
  200, // Бахчисарайское (данных нет) 14
  0, // Кутузовское 15
  880, // Льговское 16
  2358, // Зеленоярское (на 2018 г.) 17
  1320, // Межгорное (га 2019 год.) 18
  4000, // Керченское (станционное) (на 2018 г.) 19
  6000, // Феодосийское 20
  1460, // Фронтовое 21
];

const death_timeline = [
  1200,
  2500,
  400,
  1500,
  900,
  1500,
  4000,
  5000,
  200,
  300,
  1000,
  1000,
  7000,
  1860,
  2000,
  330,
  660,
  1006,
  15000,
  7200,
  4600,
  6000,
];
const full_timeline = [
  13250,
  27850,
  5070,
  11800,
  13800,
  23300,
  34400,
  36000,
  3900,
  3150,
  9000,
  7700,
  64200,
  6200,
  6890,
  1100,
  2200,
  3720,
  50000,
  24000,
  15370,
  35000,
];

let estfilled_timeline = filled_timeline.reduce((acc, curr) => acc + curr, 0);
let estfull_timeline = full_timeline.reduce((acc, curr) => acc + curr, 0);

// ==================================================================================================================
// ==================================================================================================================

document.getElementById(
  'fullCap'
).innerHTML = `Общий объём: ${allFull
  .toString()
  .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} млн. куб. м. `;

document.getElementById(
  'fullFactCap'
).innerHTML = `Общий объём воды: ${allFilled
  .toString()
  .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} млн. куб. м. (${(
  (allFilled * 100) /
  allFull
).toFixed(1)}%) `;

const openModal = function () {
  // e.preventDefault();
  modal.classList.remove('hidden');
  // overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  // overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn =>
  btn.addEventListener(`click`, function () {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    } else {
      openModal();
    }
  })
);
// btnCloseModal.addEventListener('click', closeModal);
headerTitle.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const openMap = function () {
  // e.preventDefault();
  mapModal.classList.remove('hidden');
  // overlay.classList.remove('hidden');
};

const closeMap = function () {
  mapModal.classList.add('hidden');
  // overlay.classList.add('hidden');
};

btnMap.addEventListener(`click`, function () {
  if (!mapModal.classList.contains('hidden')) {
    console.log(`clicked`);

    closeMap();
  } else {
    openMap();
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !mapModal.classList.contains('hidden')) {
    closeMap();
  }
});

tabsContainer.addEventListener('click', closeMap);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

mapModal.onmousedown = function (e) {
  var coords = getCoords(mapModal);
  var shiftX = e.pageX - coords.left;
  var shiftY = e.pageY - coords.top;

  mapModal.style.position = 'absolute';
  document.body.appendChild(mapModal);
  moveAt(e);

  mapModal.style.zIndex = 1000; // над другими элементами

  function moveAt(e) {
    mapModal.style.left = e.pageX - shiftX + 'px';
    mapModal.style.top = e.pageY - shiftY + 'px';
  }

  document.onmousemove = function (e) {
    moveAt(e);
  };

  mapModal.onmouseup = function () {
    document.onmousemove = null;
    mapModal.onmouseup = null;
  };
};

mapModal.ondragstart = function () {
  return false;
};

function getCoords(elem) {
  // кроме IE8-
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset,
  };
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function addOnWheel(elem, handler) {
  if (elem.addEventListener) {
    if ('onwheel' in document) {
      // IE9+, FF17+
      elem.addEventListener('wheel', handler);
    } else if ('onmousewheel' in document) {
      // устаревший вариант события
      elem.addEventListener('mousewheel', handler);
    } else {
      // 3.5 <= Firefox < 17, более старое событие DOMMouseScroll пропустим
      elem.addEventListener('MozMousePixelScroll', handler);
    }
  } else {
    // IE8-
    text.attachEvent('onmousewheel', handler);
  }
}

var scale = 1;

addOnWheel(mapModal, function (e) {
  var delta = e.deltaY || e.detail || e.wheelDelta;

  // отмасштабируем при помощи CSS
  if (delta < 0) scale += 0.05;
  else scale -= 0.05;

  mapModal.style.transform = mapModal.style.WebkitTransform = mapModal.style.MsTransform =
    'scale(' + scale + ')';

  // отменим прокрутку
  e.preventDefault();
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Время
var d = new Date();

var day = new Array(
  'воскресенье',
  'понедельник',
  'вторник',
  'среда',
  'четверг',
  'пятница',
  'суббота'
);

var month = new Array(
  `01`,
  `02`,
  `03`,
  `04`,
  `05`,
  `06`,
  `07`,
  `08`,
  `09`,
  `10`,
  `11`,
  `12`
);

var time =
  'Сегодня ' +
  day[d.getDay()] +
  ', ' +
  d.getDate() +
  '.' +
  month[d.getMonth()] +
  '.' +
  d.getFullYear() +
  ' г.';
document.getElementById('time').innerHTML = time;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ТАЙМЕР;
let begin_date = {
  full_year: '2014',
  month: '05',
  day: '07',
  hours: '23',
  minutes: '20',
  seconds: '00',
};

function diffSubtract(date1, date2) {
  return date2 - date1;
}
let begin_date_str = `${begin_date.full_year}-${begin_date.month}-${begin_date.day}T${begin_date.hours}:${begin_date.minutes}:${begin_date.seconds}`;

// Set the date we're counting down to
// Запуск интервала таймера
let timer = setInterval(function () {
  // Получение времени сейчас
  let now = new Date();
  // Получение заданного времени
  let date = new Date(begin_date_str);
  // Вычисление разницы времени
  let ms_count = diffSubtract(date, now);

  // Иначе
  // Получаем время зависимую от разницы
  let res = new Date(ms_count);
  // Делаем строку для вывода

  let str_timer = `${
    res.getUTCFullYear() - 1970
  } лет ${res.getUTCMonth()} мес. ${
    res.getUTCDate() - 1
  } д. ${res.getUTCHours()}    ч. ${res.getUTCMinutes()} мин. ${res.getUTCSeconds()} сек.`;
  // Выводим время
  document.getElementById('timer').innerHTML = str_timer;
  // console.log(str_timer);

  let begin_date = {
    full_year: '2020',
    month: '06',
    day: '07',
    hours: '23',
    minutes: '20',
    seconds: '00',
  };
}, 1000);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SCROLLING
const s1coords = section1.getBoundingClientRect();

btnScrollToSection1.addEventListener(`click`, function (e) {
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log(`Current scroll x/y`, window.scrollX, window.pageYOffset);
  // console.log(
  //   `Height/width viewport`,
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // Scrolling;
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // console.log(s1coords.left + window.pageXOffset);

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset50,
  //   behavior: `instant`,
  // });

  section1.scrollIntoView({ behavior: `smooth` });
});

btnScrollToSection2.addEventListener(`click`, function (e) {
  section2.scrollIntoView({ behavior: `smooth` });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TABS SELECTING

tabsContainer.addEventListener(`click`, function (e) {
  const clicked = e.target.closest(`.operations__tab`);
  if (!clicked) return;
  tabs.forEach(t => t.classList.remove(`operations__tab--active`));
  clicked.classList.add(`operations__tab--active`);

  // Activate content area
  tabsContent.forEach(c => c.classList.remove(`operations__content--active`));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add(`operations__content--active`);
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Menu fade animation

const changeOpacity = function (o) {
  return function (e) {
    if (e.target.classList.contains(`nav__link`)) {
      const link = e.target;
      const siblings = link.closest(`.nav`).querySelectorAll(`.nav__link`);
      // const logo = link.closest(`.nav`).querySelector(`img`);

      siblings.forEach(el => {
        if (el !== link) {
          el.style.opacity = o;
        }
        // logo.style.opacity = o;
      });
    }
  };
};
nav.addEventListener(`mouseover`, changeOpacity(0.3));

nav.addEventListener(`mouseout`, changeOpacity(1));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Sticky navigation

// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);
// window.addEventListener(`scroll`, function () {
//   console.log(window.scrollY);
//   if (window.scrollY > initialCoords.top) nav.classList.add(`sticky`);
//   else nav.classList.remove(`sticky`);
// });

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe();

const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add(`sticky`);
    document.querySelector(`.nav__imagelogo`).classList.add(`sticky`);
  } else {
    nav.classList.remove(`sticky`);
    document.querySelector(`.nav__imagelogo`).classList.remove(`sticky`);
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: [0, 0.2, 0.4],
  rootMargin: `-${navHeight * 0.66}px`,
});
console.log(navHeight);
headerObserver.observe(header);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LAZY LOADING IMAGES
const imgTarget = document.querySelectorAll(`img[data-src]`);

const loadImg = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;

  // replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener(`load`, function () {
    entry.target.classList.remove(`lazy-img`);
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: `200px`,
});

imgTarget.forEach(img => imgObserver.observe(img));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// REVEAL SECTIONS

// console.log(allSection);

const callback = function (entries, observer) {
  // console.log(observer);
  const entry = entries[0];
  // console.log(entry);
  if (!entry.isIntersecting) return;
  console.log(entry);
  // entry.target.classList.remove(`section--hidden`);
  // console.log(entry.target.classList);
  // if (entry.target.classList.contains(`section`)) {
  //   createChart1Main();
  //   operationsTab1.classList.add(`operations__tab--active`);
  //   operationsContent1.classList.add(`operations__content--active`);
  // }

  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(callback, {
  root: null,
  rootMargin: `0px`,
  threshold: 0.15,
});

const target = allSection.forEach(section => {
  sectionObserver.observe(section);
  // section.classList.add(`section--hidden`);
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Прокручивание фона

(function () {
  var parallax = document.querySelectorAll('#section--1'),
    speed = 0.5;

  window.onscroll = function () {
    [].slice.call(parallax).forEach(function (el, i) {
      var windowYOffset = -window.pageYOffset,
        elBackgrounPos = '50% ' + windowYOffset * speed + 'px';

      el.style.backgroundPosition = elBackgrounPos;
      // console.log(elBackgrounPos);
    });
  };
})();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const allSections = document.querySelectorAll(`.section`);

// const revealSection = function (entries, observer) {
//   const [entry] = entries;
//   console.log(entry);
//   if (!entry.isIntersecting) return;
//   entry.target.classList.remove(`section--hidden`);
//   observer.unobserve(entry.target);
// };

// const sectionObserver = new IntersectionObserver(revealSection, {
//   root: null,
//   threshold: 0.15,
// });

// allSections.forEach(function (section) {
//   sectionObserver.observe(section);
//   section.classList.add(`section--hidden`);
// });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PAGE NAVIGATION

// document.querySelectorAll(`.nav__link`).forEach(function (el) {
//   el.addEventListener(`click`, function (e) {
//     e.preventDefault();
//     console.log(`LinK`);
//     const id = this.getAttribute(`href`);
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: `smooth` });
//   });
// });

// 1. Add event listener to common parent element
// 2. Determine what element originated the element

document.querySelector(`.nav__links`).addEventListener(`click`, function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains(`nav__link`)) {
    // console.log(`link`);
    const id = e.target.getAttribute(`href`);
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: `smooth` });
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const h1 = document.querySelector(`h1`);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const slider = function () {
  const slides = document.querySelectorAll(`.slide`);
  const btnLeft = document.querySelector(`.slider__btn--left`);
  const btnRight = document.querySelector(`.slider__btn--right`);
  let curSlide = 0;
  const maxSlide = slides.length - 1;
  // const slider = document.querySelector(`.slider`);
  const dotContainer = document.querySelector(`.dots`);

  const activateDot = function (slide) {
    // console.log(slide);
    document
      .querySelectorAll(`.dots__dot`)
      .forEach(dot => dot.classList.remove(`dots__dot--active`));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        `beforeend`,
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
    // activateDot();
  };
  // slider.style.transform = `scale(0.4) translateX(-1200px)`;
  // slider.style.overflow = `visible`;

  const nextSlide = function () {
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
    // console.log(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
    // console.log(curSlide);
    activateDot(curSlide);
  };
  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(curSlide);
  };
  init();

  // Event handlers
  btnLeft.addEventListener(`click`, prevSlide);
  btnRight.addEventListener(`click`, nextSlide);

  document.addEventListener(`keydown`, function (e) {
    // console.log(e);
    e.key === `ArrowRight` && nextSlide();
    e.key === `ArrowLeft` && prevSlide();
  });

  dotContainer.addEventListener(`click`, function (e) {
    if (e.target.classList.contains(`dots__dot`)) {
      const { slide } = e.target.dataset;
      // console.log(slide);
      goToSlide(slide);
      console.log(curSlide);
      curSlide = parseInt(slide, 10);
      activateDot(slide);
    }
  });
};
slider();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var capacity_est = estfull;
var value_est = estfilled;
var deathValue_est = 50000;
var circleSize_est = 0.85;

var component_est = am4core.create('est_stoka', am4core.Container);
component_est.width = am4core.percent(100);
component_est.height = am4core.percent(100);

var chartContainer_est = component_est.createChild(am4core.Container);
chartContainer_est.x = am4core.percent(50);
chartContainer_est.y = am4core.percent(50);

var circle_est = chartContainer_est.createChild(am4core.Circle);
circle_est.fill = am4core.color('#dadada');

var circleMask_est = chartContainer_est.createChild(am4core.Circle);

var waves_est = chartContainer_est.createChild(am4core.WavedRectangle);
waves_est.fill =
  value_est > deathValue_est
    ? am4core.color('#34a4eb')
    : am4core.color('orange');
waves_est.mask = circleMask_est;
waves_est.horizontalCenter = 'middle';
waves_est.waveHeight = 10;
waves_est.waveLength = 200;
waves_est.y = 500;
circleMask_est.y = -500;

component_est.events.on('maxsizechanged', function () {
  var smallerSize_est = Math.min(
    component_est.pixelWidth,
    component_est.pixelHeight
  );
  var radius_est = (smallerSize_est * circleSize_est) / 2;

  circle_est.radius = radius_est;
  circleMask_est.radius = radius_est;
  waves_est.height = smallerSize_est;
  waves_est.width = Math.max(
    component_est.pixelWidth,
    component_est.pixelHeight
  );

  //capacityLabel_est.y = radius;

  var labelRadius_est = radius_est + 40; //  Изгиб надписи

  capacityLabel_est.path =
    am4core.path.moveTo({ x: -labelRadius_est, y: 0 }) +
    am4core.path.arcToPoint(
      { x: labelRadius_est, y: 20 },
      labelRadius_est,
      labelRadius_est
    );
  capacityLabel_est.locationOnPath = 0.5;

  window.addEventListener(`load`, function () {
    setValue_est(value_est);
  });
  // setValue_est(deathValue_est);
});

function setValue_est(value_est) {
  var y =
    -circle_est.radius + // Меняет уровень воды
    waves_est.waveHeight +
    (1 - value_est / capacity_est) * circle_est.pixelRadius * 2;
  waves_est.animate(
    [
      { property: 'y', to: y },
      { property: 'waveHeight', to: 10, from: 15 },

      { property: 'x', from: -50, to: 0 },
    ],
    10000,
    am4core.ease.elasticOut
  );
  circleMask_est.animate(
    [
      { property: 'y', to: -y },
      { property: 'x', from: 50, to: 0 },
    ],
    10000,
    am4core.ease.elasticOut
  );
}

var label_est = chartContainer_est.createChild(am4core.Label);
var formattedValue = component_est.numberFormatter.format(
  value_est,
  '#,###.###'
);
// formattedValue = formattedValue.toUpperCase();

label_est.text = `[bold] Всего воды:\n ${formattedValue} млн. м³ (${estpercent}%)`;
label_est.fill = am4core.color('black');
label_est.fontSize = 25;
label_est.horizontalCenter = 'middle';
label_est.textAlign = 'middle';

var capacityLabel_est = chartContainer_est.createChild(am4core.Label);

var formattedCapacity_est = component_est.numberFormatter
  .format(capacity_est, '#,###')
  .toUpperCase();

capacityLabel_est.text =
  'Общий объём водохранилищ ' + formattedCapacity_est + ' млн. м³';
capacityLabel_est.fill = am4core.color('#fff');
capacityLabel_est.fontSize = 22;
capacityLabel_est.textAlign = 'middle';
capacityLabel_est.padding(0, 0, 25, 0);

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////

var capacity_naliv = nalivfull_nalivnie;
var value_naliv = nalivfilled_nalivnie;
var deathValue_naliv = 5;
var circleSize_naliv = 0.7;

var component_naliv = am4core.create('naliv', am4core.Container);
component_naliv.width = am4core.percent(100);
component_naliv.height = am4core.percent(100);

var chartContainer_naliv = component_naliv.createChild(am4core.Container);
chartContainer_naliv.x = am4core.percent(50);
chartContainer_naliv.y = am4core.percent(50);

var circle_naliv = chartContainer_naliv.createChild(am4core.Circle);
circle_naliv.fill = am4core.color('#dadada');

var circleMask_naliv = chartContainer_naliv.createChild(am4core.Circle);

var waves_naliv = chartContainer_naliv.createChild(am4core.WavedRectangle);
waves_naliv.fill =
  value_naliv > deathValue_naliv
    ? am4core.color('#34a4eb')
    : am4core.color('orange');
waves_naliv.mask = circleMask_naliv;
waves_naliv.horizontalCenter = 'middle';
waves_naliv.waveHeight = 10;
waves_naliv.waveLength = 200;
waves_naliv.y = 500;
circleMask_naliv.y = -500;

component_naliv.events.on('maxsizechanged', function () {
  var smallerSize_naliv = Math.min(
    component_naliv.pixelWidth,
    component_naliv.pixelHeight
  );
  var radius_naliv = (smallerSize_naliv * circleSize_naliv) / 2;

  circle_naliv.radius = radius_naliv;
  circleMask_naliv.radius = radius_naliv;
  waves_naliv.height = smallerSize_naliv;
  waves_naliv.width = Math.max(
    component_naliv.pixelWidth,
    component_naliv.pixelHeight
  );

  //capacityLabel_naliv.y = radius;

  var labelRadius_naliv = radius_naliv + 40; //  Изгиб надписи

  capacityLabel_naliv.path =
    am4core.path.moveTo({ x: -labelRadius_naliv, y: 0 }) +
    am4core.path.arcToPoint(
      { x: labelRadius_naliv, y: 20 },
      labelRadius_naliv,
      labelRadius_naliv
    );
  capacityLabel_naliv.locationOnPath = 0.5;

  window.addEventListener(`load`, function () {
    setValue_naliv(value_naliv);
  });
  // setValue_naliv(deathValue_naliv);
});

function setValue_naliv(value_naliv) {
  var y =
    -circle_naliv.radius + // Меняет уровень воды
    waves_naliv.waveHeight +
    (1 - value_naliv / capacity_naliv) * circle_naliv.pixelRadius * 2;
  waves_naliv.animate(
    [
      { property: 'y', to: y },
      { property: 'waveHeight', to: 10, from: 15 },

      { property: 'x', from: -50, to: 0 },
    ],
    8000,
    am4core.ease.elasticOut
  );
  circleMask_naliv.animate(
    [
      { property: 'y', to: -y },
      { property: 'x', from: 50, to: 0 },
    ],
    8000,
    am4core.ease.elasticOut
  );
}

var label_naliv = chartContainer_naliv.createChild(am4core.Label);
var formattedValue_naliv = component_naliv.numberFormatter.format(
  value_naliv,
  '#,###.###'
);
// formattedValue_naliv = formattedValue_naliv.toUpperCase();

label_naliv.text = `[bold]Всего воды:\n${formattedValue_naliv} млн. м³ [bold](${nalivpercent_nalivnie}%)`;
label_naliv.fill = am4core.color('black');
label_naliv.fontSize = 25;
label_naliv.horizontalCenter = 'middle';
label_naliv.textAlign = 'middle';

var capacityLabel_naliv = chartContainer_naliv.createChild(am4core.Label);

var formattedCapacity_naliv = component_naliv.numberFormatter
  .format(capacity_naliv, '#,###')
  .toUpperCase();

capacityLabel_naliv.text =
  'Общий объём водохранилищ ' + formattedCapacity_naliv + ' млн. м³';
capacityLabel_naliv.fill = am4core.color('#fff');
capacityLabel_naliv.fontSize = 22;
capacityLabel_naliv.textAlign = 'middle';
capacityLabel_naliv.padding(0, 0, 25, 0);

// Going downwards: child

// console.log(h1.querySelectorAll(`.highlight`));
// console.log(h1.childNodes);
// console.log(h1.children);
// console.log(h1.firstElementChild);
// h1.firstElementChild.style.color = `white`;
// h1.lastElementChild.style.color = `orangered`;

// // Going upwards: parents
// console.log(h1.parentElement);
// console.log(h1.parentNode);
// h1.closes;

// h1.closest(`.header`).style.background = `let(--gradient-secondary)`;
// h1.closest(`h1`).style.background = `var(--gradient-primary)`;

// Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = `scale(0.5)`;
// });
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const headers = document.querySelector(`.header`);
// const allSections = document.querySelectorAll(`.section`);
// console.log(allSections);

// console.log(document.getElementById(`section--1`));

// const allButtons = document.getElementsByTagName(`button`);
// console.log(allButtons);

// console.log(document.getElementsByClassName(`btn`));

// const message = document.createElement(`div`);
// message.classList.add(`cookie-message`);
// // message.textContent = `We use cookied for improved functionality and analytics`;
// message.innerHTML = `We use cookied for improved functionality and analytics. <button class="btn btn--close--cookie">Got it!</button>`;

// headers.prepend(message);
// // headers.append(message);
// // headers.append(message.cloneNode(true));

// // headers.after(message);
// // headers.before(message);

// document
//   .querySelector(`.btn--close--cookie`)
//   .addEventListener(`click`, function () {
//     message.remove();
//   });

// // Styles

// message.style.backgroundColor = `#37383d`;
// message.style.width = `150%`;

// console.log(message.style);

// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 40 + `px`;

// // document.documentElement.style.setProperty(`--color-primary`, `orangered`);

// const logo = document.querySelector(`.nav__logo`);
// console.log(logo.alt);
// // console.log(logo.src);
// console.log(logo.className);

// console.log(logo.getAttribute(`src`));
// console.log(logo.src);

// const twitter = document.querySelector(`.twitter-link`);
// console.log(twitter.href);
// console.log(twitter.getAttribute(`href`));

// const link = document.querySelector(`.nav__link--btn`);
// console.log(link.href);
// console.log(link.getAttribute(`href`));

// // Data attributes
// console.log(logo.dataset.versionNumber);

// // Classes
// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();

// const h1 = document.querySelector(`h1`);
// h1.addEventListener(`mouseenter`, function (e) {
//   alert(`AddEventListener: great! You are reading the heading!/`);
// });

// const alertH1 = function (e) {
//   alert(`AddEventListener: great! You are reading the heading!/`);
// };

// h1.addEventListener(`click`, alertH1);
// document.querySelector(`.header__title`).addEventListener(`click`, function () {
//   alert(`HEADER TITLE ALERT!`);
// });

// setTimeout(() => h1.removeEventListener(`mouseenter`, alertH1), 3000);

// const randomColorNumber = function () {
//   const randomColor = Math.trunc(Math.random() * 255);
//   return randomColor;
// };

// const randomColorRGB = () =>
//   `rgb(${randomColorNumber()},${randomColorNumber()},${randomColorNumber()})`;

// console.log(randomColorRGB());
// // h1.style.backgroundColor = randomColorRGB();

// document.querySelector(`.nav__link`).addEventListener(`click`, function (e) {
//   this.style.backgroundColor = randomColorRGB();
//   console.log(`LINK`, e.target, e.currentTarget);
//   console.log(e.currentTarget === this);

//   // e.stopPropagation();
// });
// document.querySelector(`.nav__links`).addEventListener(`click`, function (e) {
//   this.style.backgroundColor = randomColorRGB();
//   console.log(`CONTAINER`, e.target, e.currentTarget);
// });
// document.querySelector(`.nav`).addEventListener(
//   `click`,
//   function (e) {
//     this.style.backgroundColor = randomColorRGB();
//     console.log(`NAV`, e.target, e.currentTarget);
//   }
//   // true
// );

document.addEventListener(`DOMContentLoaded`, function (e) {
  console.log(`HTML parsed and DOM tree built!`, e);
});

// window.addEventListener(`beforeunload`, function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = ``;
// });

function am4themes_myTheme(target) {
  if (target instanceof am4core.InterfaceColorSet) {
    target.setFor('secondaryButton', am4core.color('#5ec576'));
    target.setFor(
      'secondaryButtonHover',
      am4core.color('#4bbb7d').lighten(-0.2)
    );
    target.setFor(
      'secondaryButtonDown',
      am4core.color('#4bbb7d').lighten(-0.2)
    );
    target.setFor(
      'secondaryButtonActive',
      am4core.color('#4bbb7d').lighten(-0.2)
    );
    target.setFor('secondaryButtonText', am4core.color('#FFFFFF'));
    target.setFor('secondaryButtonStroke', am4core.color('#467B88'));
    target.setFor('grid', am4core.color('white'));
    target.setFor('text', am4core.color('white'));
    // target.setFor('background', am4core.color('black'));
    target.setFor('alternativeBackground', am4core.color('black'));
  }
}

am4core.useTheme(am4themes_myTheme);

am4core.useTheme(am4themes_animated);
let createChart2Main = function () {
  var chart = am4core.create('chartdiv', am4charts.XYChart);
  chart.exporting.menu = new am4core.ExportMenu();
  var annotation = chart.plugins.push(new am4plugins_annotation.Annotation());
  annotation.useMenu = true;

  chart.hiddenState.properties.opacity = 0;
  chart.padding(0, 0, 0, 10);
  chart.plotContainer.mouseOptions.sensitivity = 0.5;
  chart.fill = `white`;
  am4core.color('#f00');
  chart.cursor = new am4charts.XYCursor();
  chart.cursor.maxTooltipDistance = -1;
  // ====================================================================================================================

  let textLabel = chart.plotContainer.createChild(am4core.Label);
  textLabel.text = `Последнее обновление данных\n${refrestDataTime}`;
  textLabel.y = 50;
  textLabel.fill = `white`;

  textLabel.x = am4core.percent(100);
  textLabel.horizontalCenter = 'right';
  textLabel.zIndex = 100;
  textLabel.fillOpacity = 0.9;
  // ====================================================================================================================
  let textLabel2 = chart.plotContainer.createChild(am4core.Label);
  textLabel2.text =
    'Поделиться данными или высказать\nзамечания можно здесь:\nt.me/krimskiy_vodomor';
  textLabel2.y = 50;
  textLabel2.x = am4core.percent(1);
  textLabel2.fill = `white`;
  textLabel2.zIndex = 100;
  textLabel2.fillOpacity = 0.4;
  // ====================================================================================================================
  // ====================================================================================================================
  const calculate = function (vodohrName, num) {
    let voda = {
      vodohr: vodohrName,
      deathCapacity: filled[num] < death[num] ? filled[num] : death[num],
      factCapacity: filled[num] > death[num] ? filled[num] - death[num] : 0,
      emptyCapacity: full[num] - filled[num],
      filledCapacity:
        filled[num] >= 1000
          ? filled[num].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') +
            ` млн. куб. м.`
          : filled[num] + ` тыс. куб. м.`,
      totalCapacity: full[num],
      percentageDeath:
        filled[num] < death[num]
          ? +((filled[num] * 100) / full[num]).toFixed(1)
          : +((death[num] * 100) / full[num]).toFixed(1),
      percentageFact: +(((filled[num] - death[num]) * 100) / full[num]).toFixed(
        // Полезный объём
        1
      ),
      percentageEmpty: +(((full[num] - filled[num]) * 100) / full[num]).toFixed(
        1
      ),
      percetageFilled: +((filled[num] * 100) / full[num]).toFixed(1), // Всего воды
      trueDeathCapacity: death[num],
    };
    return voda;
  };

  chart.data = [
    calculate(`Изобильненское`, 0),
    calculate(`\nЗагорское`, 1),
    calculate(`Балановское`, 2),
    calculate(`\nСчастливенское`, 3),
    calculate(`Тайганское`, 4),
    calculate(`\nБелогорское`, 5),
    calculate(`Партизанское`, 6),
    calculate(`\nСимферопольское`, 7),
    calculate(`Аянское`, 8),
    calculate(`\nСтарокрымское`, 9),
    calculate(`Чернореченское(10.20)`, 10),
    calculate(`\nАльминское(old data)`, 11),
    calculate(`Бахчисарайское(old data)`, 12),
    calculate(`\nКутузовское`, 13),
    calculate(`Льговское(01.21)`, 14),
  ];

  let title1 = chart.titles.create();
  title1.text = `Общий объём: ${estfull
    .toString()
    .replace(
      /(\d)(?=(\d{3})+(?!\d))/g,
      '$1,'
    )} млн. куб. м. \n Общий объём воды: ${estfilled
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} млн. куб. м. (${(
    (estfilled * 100) /
    estfull
  ).toFixed(1)}%) `;
  title1.fontSize = 16;
  title1.tooltipText = `[bold]Данные от ${refrestDataTime}`;
  title1.padding(0, 0, 0, 0);
  title1.fill = `white`; // Цвет названия графика
  title1.textAlign = 'middle';

  let title2 = chart.titles.create();
  title2.text = `[bold]Крымские водохранилища естественного стока`;
  title2.fontSize = 20;
  title2.tooltipText = '[bold]Наполняются естественными источниками';
  title2.padding(0, 0, 0, 0);
  title2.fill = `white`; // Цвет названия графика
  title2.textAlign = 'middle';

  // chart.tooltip.label.maxWidth = 200;
  chart.tooltip.label.wrap = true;
  chart.tooltip.label.fill = am4core.color('white'); // Цвет окошка на названии
  chart.tooltip.label.fontSize = 16;
  chart.tooltip.label.textAlign = 'middle';
  chart.tooltip.getFillFromObject = true;
  chart.tooltip.background.fill = am4core.color('white'); // Цвет всплывающего окошка на названии табллицы

  chart.tooltip.getStrokeFromObject = true; // Обводка окошка на названии
  chart.tooltip.strokeFill = `red`;

  let xAxes1 = chart.xAxes.push(new am4charts.CategoryAxis());
  xAxes1.dataFields.category = 'vodohr';
  xAxes1.title.text = '[bold]Водохранилища (дата последних данных)';
  xAxes1.renderer.grid.template.location = 0;
  xAxes1.renderer.minGridDistance = 20;

  xAxes1.showOnInit = false;
  chart.events.on('ready', function () {
    xAxes1.start = 0;
    xAxes1.end = 0.8;
    xAxes1.keepSelection = true;
  });

  // ====================================================================================================================

  let yAxes1 = chart.yAxes.push(new am4charts.ValueAxis());
  yAxes1.renderer.maxLabelPosition = 0.98;
  yAxes1.title.text = 'Объём (млн куб. м.)';

  let series1 = chart.series.push(new am4charts.ColumnSeries());
  series1.name = 'Мёртвый объём (фактический)';

  let columnsTemplate1 = series1.columns.template;

  columnsTemplate1.strokeOpacity = 0;
  columnsTemplate1.fillOpacity = 0.95;
  series1.tooltip.getStrokeFromObject = true;
  series1.tooltip.pointerOrientation = 'horizontal';
  series1.columns.template.propertyFields.showTooltipOn = 'tooltip';
  // series1.columns.template.hoverOnFocus = true; // Показывает подскаску при нажатии TAB
  // series1.tooltip.getFillFromObject = false; // Отменяет наследование цвета для окошка
  // series1.tooltip.label.propertyFields.fill = "color";
  // series1.tooltip.background.propertyFields.stroke = "color";
  // series1.tooltip.pointerOrientation = 'vertical';

  // series1.tooltip.dx = 40;
  // series1.columns.template.tooltipX = am4core.percent(100); // Ставит окошко снизу справа от столбца
  // series1.columns.template.tooltipY = am4core.percent(100); // Но только без курсора

  series1.tooltipText = `[bold]{categoryX} водохранилище:[/]
Общий объём: {totalCapacity} млн куб. м.
Всего воды: {filledCapacity} ({percetageFilled}%)\n
[bold]{name} : [bold]{valueY} [bold]({percentageDeath} %)`;
  // series1.tooltip.contentAlign = `center`;
  columnsTemplate1.tooltipY = 0;

  series1.stacked = true;

  series1.dataFields.categoryX = 'vodohr';
  series1.dataFields.valueY = 'deathCapacity';
  columnsTemplate1.fill = am4core.color('#4b5320');
  // ? am4core.color("#4b5320") : am4core.color("red"); // fill
  series1.sequencedInterpolation = true;
  series1.sequencedInterpolationDelay = 100;

  var segmentFactDeath = series1.columns.template;
  segmentFactDeath.interactionsEnabled = true;

  var hoverStateFactDeath = segmentFactDeath.states.create('hover');
  hoverStateFactDeath.properties.fillOpacity = 1;
  hoverStateFactDeath.properties.fill = am4core.color('#4b5320').lighten(-0.3); // fill

  let series2 = chart.series.push(new am4charts.ColumnSeries());

  let columnsTemplate2 = series2.columns.template;
  series2.name = 'Полезный объём';
  series2.columns.template.strokeOpacity = 0;
  columnsTemplate2.fillOpacity = 0.8;

  series2.tooltipText = `[bold]{categoryX} водохранилище:[/]
Общий объём: {totalCapacity} млн куб. м.
Всего воды: {filledCapacity} ({percetageFilled}%)

[bold]{name} : [bold]{valueY} [bold]({percentageFact} %)`;
  series2.stacked = true;

  // series2.columns.template.tooltipX = am4core.percent(100);
  // series2.columns.template.tooltipY = am4core.percent(100);

  series2.dataFields.categoryX = 'vodohr';
  series2.dataFields.valueY = 'factCapacity';
  columnsTemplate2.fill = am4core.color('#3525fe'); // fill
  series2.sequencedInterpolation = true;
  series2.sequencedInterpolationDelay = 100;

  var segmentFact = series2.columns.template;
  segmentFact.interactionsEnabled = true;

  var hoverStateFact = segmentFact.states.create('hover');
  hoverStateFact.properties.fillOpacity = 1;
  hoverStateFact.properties.fill = am4core.color('#3525fe').lighten(-0.5); // fill

  let series3 = chart.series.push(new am4charts.ColumnSeries());

  let columnsTemplate3 = series3.columns.template;
  series3.name = 'Возможное наполнение';
  columnsTemplate3.strokeOpacity = 0;
  columnsTemplate3.fillOpacity = 0.6;

  series3.tooltipText = `[bold]{categoryX} водохранилище:[/]
Общий объём: {totalCapacity} млн куб. м.
Всего воды: {filledCapacity} ({percetageFilled}%)

[bold]{name} : [bold]{valueY} [bold]({percentageEmpty} %)`;
  series3.stacked = true;

  // series3.columns.template.tooltipX = am4core.percent(100);
  // series3.columns.template.tooltipY = am4core.percent(100);

  series3.dataFields.categoryX = 'vodohr';
  series3.dataFields.valueY = 'emptyCapacity';
  columnsTemplate3.fill = am4core.color('#bcbcbc'); // fill

  series3.sequencedInterpolation = true;
  series3.sequencedInterpolationDelay = 100;

  var segmentCap = series3.columns.template;
  segmentCap.interactionsEnabled = true;

  var hoverStateCap = segmentCap.states.create('hover');
  hoverStateCap.properties.fillOpacity = 1;
  hoverStateCap.properties.fill = am4core.color('#bcbcbc').lighten(+0.5); // fill

  let series4 = chart.series.push(new am4charts.StepLineSeries());

  series4.dataFields.valueY = 'trueDeathCapacity';
  series4.dataFields.categoryX = 'vodohr';
  series4.name = 'Мёртвый объём (расчётный)';
  series4.tooltipText = '{name}: [bold]{valueY}[/]';
  series4.strokeWidth = 1;
  series4.stroke = am4core.color('#ff0000');
  series4.strokeOpacity = 0.8;

  series4.fill = '#bcbcbc';

  series4.noRisers = true;
  series4.sequencedInterpolation = true;
  series4.sequencedInterpolationDelay = 80;

  series4.yAxis = yAxes1;

  series4.tensionX = 0.6;
  series4.tensionY = 1;

  var segmentDeath = series4.segments.template;
  segmentDeath.interactionsEnabled = true;

  var hoverStateDeath = segmentDeath.states.create('hover');
  hoverStateDeath.properties.strokeWidth = 3;

  // ====================================================================================================================

  chart.legend = new am4charts.Legend();
  chart.legend.fill = `white`;

  // ====================================================================================================================

  var scrollbarX = new am4charts.XYChartScrollbar();
  var scrollbarY = new am4charts.XYChartScrollbar();
  chart.scrollbarY = scrollbarY;
  chart.scrollbarY.minWidth = 15;

  // ====================================================================================================================

  // var columnHoverState = columnsTemplate1.create("hover");
  // columnHoverState.properties.fillOpacity = 1;
  chart.scrollbarX = scrollbarX;
  chart.scrollbarX.minHeight = 15;
  // scrollbarX.series.push(series1);

  scrollbarX.scrollbarChart.seriesContainer.hide();
  // ====================================================================================================================
};

am4core.useTheme(am4themes_animated);

const createChart3Main = function () {
  var chart_nalivnie = am4core.create('chartdiv2', am4charts.XYChart);
  chart_nalivnie.exporting.menu = new am4core.ExportMenu();
  var annotation_nalivnie = chart_nalivnie.plugins.push(
    new am4plugins_annotation.Annotation()
  );
  annotation_nalivnie.useMenu = true;
  chart_nalivnie.hiddenState.properties.opacity = 0;
  chart_nalivnie.padding(0, 10, 0, 10);
  chart_nalivnie.plotContainer.mouseOptions.sensitivity = 0.5;

  chart_nalivnie.cursor = new am4charts.XYCursor();
  chart_nalivnie.cursor.maxTooltipDistance = -1;
  // ====================================================================================================================

  let textLabel_nalivnie = chart_nalivnie.plotContainer.createChild(
    am4core.Label
  );
  textLabel_nalivnie.text = `Последнее обновление данных\n${refrestDataTime}`;
  textLabel_nalivnie.y = 50;
  textLabel_nalivnie.x = am4core.percent(100);
  textLabel_nalivnie.horizontalCenter = 'right';
  textLabel_nalivnie.zIndex = 100;
  textLabel_nalivnie.fillOpacity = 0.9;
  // ====================================================================================================================

  let textLabel2_nalivnie = chart_nalivnie.plotContainer.createChild(
    am4core.Label
  );
  textLabel2_nalivnie.text =
    'Поделиться данными или высказать\nзамечания можно здесь:\nt.me/krimskiy_vodomor';
  textLabel2_nalivnie.y = 50;
  textLabel2_nalivnie.x = am4core.percent(1);
  textLabel2_nalivnie.zIndex = 100;
  textLabel2_nalivnie.fillOpacity = 0.4;
  // ====================================================================================================================

  // ====================================================================================================================
  const calculate_nalivnie = function (vodohrName, num) {
    let voda_nalivnie = {
      vodohr_nalivnie: vodohrName,
      deathCapacity_nalivnie:
        filled_nalivnie[num] < death_nalivnie[num]
          ? filled_nalivnie[num]
          : death_nalivnie[num],
      factCapacity_nalivnie:
        filled_nalivnie[num] > death_nalivnie[num]
          ? filled_nalivnie[num] - death_nalivnie[num]
          : 0,
      emptyCapacity_nalivnie: full_nalivnie[num] - filled_nalivnie[num],
      filledCapacity_nalivnie:
        filled_nalivnie[num] >= 1000
          ? filled_nalivnie[num]
              .toString()
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ` млн. куб. м.`
          : filled_nalivnie[num] + ` тыс. куб. м.`,
      totalCapacity_nalivnie: full_nalivnie[num],
      percentageDeath_nalivnie:
        filled_nalivnie[num] < death_nalivnie[num]
          ? +((filled_nalivnie[num] * 100) / full_nalivnie[num]).toFixed(1)
          : +((death_nalivnie[num] * 100) / full_nalivnie[num]).toFixed(1),
      percentageFact_nalivnie: +(
        ((filled_nalivnie[num] - death_nalivnie[num]) * 100) /
        full_nalivnie[num]
      ).toFixed(1),
      percentageEmpty_nalivnie: +(
        ((full_nalivnie[num] - filled_nalivnie[num]) * 100) /
        full_nalivnie[num]
      ).toFixed(1),
      percetageFilled_nalivnie: +(
        (filled_nalivnie[num] * 100) /
        full_nalivnie[num]
      ).toFixed(1),
      trueDeathCapacity_nalivnie: death_nalivnie[num],
    };
    return voda_nalivnie;
  };

  chart_nalivnie.data = [
    calculate_nalivnie(`Зеленоярское  (2018)`, 0),
    calculate_nalivnie(`\nМежгорное   (2019)`, 1),
    calculate_nalivnie(`Самарлинское   `, 2),
    calculate_nalivnie(`\nКерченское   (2018)`, 3),
    calculate_nalivnie(`Сокольское   (old data)`, 4),
    calculate_nalivnie(`\nФеодосийское   (2018)`, 5),
    calculate_nalivnie(`Фронтовое  (2019)`, 6),
    calculate_nalivnie(`\nЛенинское  `, 7),
  ];
  // ====================================================================================================================

  let title1_nalivnie = chart_nalivnie.titles.create();
  title1_nalivnie.text = `Общий объём: ${nalivfull_nalivnie
    .toString()
    .replace(
      /(\d)(?=(\d{3})+(?!\d))/g,
      '$1,'
    )} млн. куб. м. \n Общий объём воды: ${nalivfilled_nalivnie
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} млн. куб. м. (${(
    (nalivfilled_nalivnie * 100) /
    nalivfull_nalivnie
  ).toFixed(1)}%) `;
  title1_nalivnie.fontSize = 16;
  title1_nalivnie.tooltipText = `[bold]Данные от ${refrestDataTime}`;
  title1_nalivnie.padding(0, 0, 10, 20);
  title1_nalivnie.fill = `white`; // Цвет названия графика
  title1_nalivnie.textAlign = 'middle';

  let title2_nalivnie = chart_nalivnie.titles.create();
  title2_nalivnie.text = `[bold]Крымские водоналивные водохранилища`;
  title2_nalivnie.fontSize = 20;
  title2_nalivnie.tooltipText =
    '[bold]Наполняются водми Северо-Крымского канала';
  title2_nalivnie.padding(0, 0, 0, 20);
  title2_nalivnie.fill = `white`; // Цвет названия графика
  title2_nalivnie.textAlign = 'middle';

  // chart_nalivnie.tooltip.label.maxWidth = 200;
  chart_nalivnie.tooltip.label.wrap = true;
  chart_nalivnie.tooltip.label.fill = am4core.color('black'); // Цвет окошка на названии
  chart_nalivnie.tooltip.label.fontSize = 16;
  chart_nalivnie.tooltip.label.textAlign = 'middle';
  chart_nalivnie.tooltip.getFillFromObject = true;
  chart_nalivnie.tooltip.background.fill = am4core.color('white'); // Цвет всплывающего окошка на названии табллицы

  chart_nalivnie.tooltip.getStrokeFromObject = true; // Обводка окошка на названии
  chart_nalivnie.tooltip.strokeFill = `red`;

  let xAxes1_nalivnie = chart_nalivnie.xAxes.push(new am4charts.CategoryAxis());
  xAxes1_nalivnie.dataFields.category = 'vodohr_nalivnie';
  xAxes1_nalivnie.title.text = '[bold]Водохранилища (дата последних данных)';
  xAxes1_nalivnie.renderer.grid.template.location = 0;
  xAxes1_nalivnie.renderer.minGridDistance = 20;

  xAxes1_nalivnie.showOnInit = false;
  chart_nalivnie.events.on('ready', function () {
    xAxes1_nalivnie.start = 0;
    xAxes1_nalivnie.end = 1;
    xAxes1_nalivnie.keepSelection = true;
  });

  let yAxes1_nalivnie = chart_nalivnie.yAxes.push(new am4charts.ValueAxis());
  yAxes1_nalivnie.renderer.maxLabelPosition = 0.98;
  yAxes1_nalivnie.title.text = 'Объём (млн куб. м.)';

  let series1_nalivnie = chart_nalivnie.series.push(
    new am4charts.ColumnSeries()
  );
  series1_nalivnie.name = 'Мёртвый объём (фактический)';

  let columnsTemplate1_nalivnie = series1_nalivnie.columns.template;

  columnsTemplate1_nalivnie.strokeOpacity = 0;
  columnsTemplate1_nalivnie.fillOpacity = 0.95;
  series1_nalivnie.tooltip.getStrokeFromObject = true;
  series1_nalivnie.tooltip.pointerOrientation = 'horizontal';
  series1_nalivnie.columns.template.propertyFields.showTooltipOn = 'tooltip';
  // series1_nalivnie.columns.template.hoverOnFocus = true; // Показывает подскаску при нажатии TAB
  // series1_nalivnie.tooltip.getFillFromObject = false; // Отменяет наследование цвета для окошка
  // series1_nalivnie.tooltip.label.propertyFields.fill = "color";
  // series1_nalivnie.tooltip.background.propertyFields.stroke = "color";
  // series1_nalivnie.tooltip.pointerOrientation = "down";

  // series1_nalivnie.tooltip.dx = 40;
  // series1_nalivnie.columns.template.tooltipX = am4core.percent(100);// Ставит окошко снизу справа от столбца
  // series1_nalivnie.columns.template.tooltipY = am4core.percent(100); // Но только без курсора

  series1_nalivnie.tooltipText = `[bold]{categoryX} водохранилище:[/]
  Общий объём: {totalCapacity_nalivnie} млн куб. м.
  Всего воды: {filledCapacity_nalivnie} ({percetageFilled_nalivnie}%)
  
  [bold]{name} : [bold]{valueY} [bold]({percentageDeath_nalivnie} %)`;
  columnsTemplate1_nalivnie.tooltipY = 0;

  series1_nalivnie.stacked = true;
  // series1_nalivnie.tooltip.label.textAlign = 'middle';
  // series1_nalivnie.tooltip.label.textValign = 'middle';

  series1_nalivnie.dataFields.categoryX = 'vodohr_nalivnie';
  series1_nalivnie.dataFields.valueY = 'deathCapacity_nalivnie';
  columnsTemplate1_nalivnie.fill = am4core.color('#4b5320');
  // ? am4core.color("#4b5320") : am4core.color("red"); // fill
  series1_nalivnie.sequencedInterpolation = true;
  series1_nalivnie.sequencedInterpolationDelay = 100;

  var segmentFactDeath_nalivnie = series1_nalivnie.columns.template;
  segmentFactDeath_nalivnie.interactionsEnabled = true;

  var hoverStateFactDeath_nalivnie = segmentFactDeath_nalivnie.states.create(
    'hover'
  );
  hoverStateFactDeath_nalivnie.properties.fillOpacity = 1;
  hoverStateFactDeath_nalivnie.properties.fill = am4core
    .color('#4b5320')
    .lighten(-0.3); // fill

  let series2_nalivnie = chart_nalivnie.series.push(
    new am4charts.ColumnSeries()
  );

  let columnsTemplate2_nalivnie = series2_nalivnie.columns.template;
  series2_nalivnie.name = 'Полезный объём';
  series2_nalivnie.columns.template.strokeOpacity = 0;
  columnsTemplate2_nalivnie.fillOpacity = 0.95;

  series2_nalivnie.tooltipText = `[bold]{categoryX} водохранилище:[/]
  Общий объём: {totalCapacity_nalivnie} млн куб. м.
  Всего воды: {filledCapacity_nalivnie} ({percetageFilled_nalivnie}%)
  
  [bold]{name} : [bold]{valueY} [bold]({percentageFact_nalivnie} %)`;
  series2_nalivnie.stacked = true;
  // series2_nalivnie.tooltip.label.textAlign = 'middle';
  // series2_nalivnie.tooltip.label.textValign = 'middle';
  // series2_nalivnie.columns.template.tooltipX = am4core.percent(100);
  // series2_nalivnie.columns.template.tooltipY = am4core.percent(100);

  series2_nalivnie.dataFields.categoryX = 'vodohr_nalivnie';
  series2_nalivnie.dataFields.valueY = 'factCapacity_nalivnie';
  columnsTemplate2_nalivnie.fill = am4core.color('#3525fe'); // fill
  series2_nalivnie.sequencedInterpolation = true;
  series2_nalivnie.sequencedInterpolationDelay = 100;

  var segmentFact_nalivnie = series2_nalivnie.columns.template;
  segmentFact_nalivnie.interactionsEnabled = true;

  var hoverStateFact_nalivnie = segmentFact_nalivnie.states.create('hover');
  hoverStateFact_nalivnie.properties.fillOpacity = 1;
  hoverStateFact_nalivnie.properties.fill = am4core
    .color('#3525fe')
    .lighten(-0.5); // fill

  let series3_nalivnie = chart_nalivnie.series.push(
    new am4charts.ColumnSeries()
  );

  let columnsTemplate3_nalivnie = series3_nalivnie.columns.template;
  series3_nalivnie.name = 'Возможное наполнение';
  columnsTemplate3_nalivnie.strokeOpacity = 0;
  columnsTemplate3_nalivnie.fillOpacity = 0.6;

  series3_nalivnie.tooltipText = `[bold]{categoryX} водохранилище:[/]
  Общий объём: {totalCapacity_nalivnie} млн куб. м.
  Всего воды: {filledCapacity_nalivnie} ({percetageFilled_nalivnie}%)
  
  [bold]{name} : [bold]{valueY} [bold]({percentageEmpty_nalivnie} %)`;
  series3_nalivnie.stacked = true;
  // series3_nalivnie.tooltip.label.textAlign = 'middle';
  // series3_nalivnie.tooltip.label.textValign = 'middle';
  // series3_nalivnie.columns.template.tooltipX = am4core.percent(100);
  // series3_nalivnie.columns.template.tooltipY = am4core.percent(100);

  series3_nalivnie.dataFields.categoryX = 'vodohr_nalivnie';
  series3_nalivnie.dataFields.valueY = 'emptyCapacity_nalivnie';
  columnsTemplate3_nalivnie.fill = am4core.color('#bcbcbc'); // fill

  series3_nalivnie.sequencedInterpolation = true;
  series3_nalivnie.sequencedInterpolationDelay = 100;

  var segmentCap_nalivnie = series3_nalivnie.columns.template;
  segmentCap_nalivnie.interactionsEnabled = true;

  var hoverStateCap_nalivnie = segmentCap_nalivnie.states.create('hover');
  hoverStateCap_nalivnie.properties.fillOpacity = 1;
  hoverStateCap_nalivnie.properties.fill = am4core
    .color('#bcbcbc')
    .lighten(+0.5); // fill

  let series4_nalivnie = chart_nalivnie.series.push(
    new am4charts.StepLineSeries()
  );

  series4_nalivnie.dataFields.valueY = 'trueDeathCapacity_nalivnie';
  series4_nalivnie.dataFields.categoryX = 'vodohr_nalivnie';
  series4_nalivnie.name = 'Мёртвый объём (расчётный)';
  series4_nalivnie.tooltipText = '{name}: [bold]{valueY}[/]';
  series4_nalivnie.strokeWidth = 1;
  series4_nalivnie.stroke = am4core.color('#ff0000');
  series4_nalivnie.strokeOpacity = 0.8;

  // series4_nalivnie.fill = "#bcbcbc";

  series4_nalivnie.noRisers = true;
  series4_nalivnie.sequencedInterpolation = true;
  series4_nalivnie.sequencedInterpolationDelay = 80;

  series4_nalivnie.yAxis = yAxes1_nalivnie;

  series4_nalivnie.tensionX = 0.6;
  series4_nalivnie.tensionY = 1;

  var segment_nalivnie = series4_nalivnie.segments.template;
  segment_nalivnie.interactionsEnabled = true;

  var hoverState_nalivnie = segment_nalivnie.states.create('hover');
  hoverState_nalivnie.properties.strokeWidth = 3;

  // ====================================================================================================================

  chart_nalivnie.legend = new am4charts.Legend();
  // ====================================================================================================================

  var scrollbarX_nalivnie = new am4charts.XYChartScrollbar();
  var scrollbarY_nalivnie = new am4charts.XYChartScrollbar();
  chart_nalivnie.scrollbarY_nalivnie = scrollbarY_nalivnie;
  chart_nalivnie.scrollbarY_nalivnie.minWidth = 15;

  // ====================================================================================================================

  // var columnHoverState = columnsTemplate1_nalivnie.create("hover");
  // columnHoverState.properties.fillOpacity = 1;
  chart_nalivnie.scrollbarX_nalivnie = scrollbarX_nalivnie;
  chart_nalivnie.scrollbarX_nalivnie.minHeight = 15;
  // scrollbarX_nalivnie.series.push(series1_nalivnie);

  scrollbarX_nalivnie.scrollbarChart.seriesContainer.hide();
  // ====================================================================================================================
};

const createChart1Main = function () {
  am4core.ready(function () {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart_timeline instance
    var chart_timeline = am4core.create('chartdiv3', am4charts.XYChart);

    chart_timeline.exporting.menu = new am4core.ExportMenu();
    var annotation_timeline = chart_timeline.plugins.push(
      new am4plugins_annotation.Annotation()
    );
    annotation_timeline.useMenu = true;

    chart_timeline.hiddenState.properties.opacity = 100;
    chart_timeline.padding(0, 0, 0, 0);
    chart_timeline.plotContainer.mouseOptions.sensitivity = 0.5;

    chart_timeline.dateFormatter.inputDateFormat = 'yyyy-MM-dd';

    let title1_timeline = chart_timeline.titles.create();
    title1_timeline.text = `Общий объём: ${allFull
      .toString()
      .replace(
        /(\d)(?=(\d{3})+(?!\d))/g,
        '$1,'
      )} млн. куб. м. \n Общий объём воды: ${allFilled
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} млн. куб. м. (${(
      (allFilled * 100) /
      allFull
    ).toFixed(1)}%) `;
    title1_timeline.fontSize = 16;
    title1_timeline.tooltipText = `[bold]Данные от ${refrestDataTime}`;
    title1_timeline.padding(0, 0, 10, 0);
    title1_timeline.fill = `white`; // Цвет названия графика
    title1_timeline.textAlign = 'middle';

    let title2_timeline = chart_timeline.titles.create();
    title2_timeline.text = `[bold]Наполнение водохранилищ [/](c 2014 года по настоящее время)`;
    title2_timeline.fontSize = 20;
    title2_timeline.tooltipText = '[bold]Старые данные взяты с Википедии';
    title2_timeline.padding(0, 0, 0, 0);
    title2_timeline.fill = `white`; // Цвет названия графика
    title2_timeline.textAlign = 'middle';

    // chart.tooltip.label.maxWidth = 200;
    chart_timeline.tooltip.label.wrap = true;
    chart_timeline.tooltip.label.fill = am4core.color('white'); // Цвет окошка на названии
    chart_timeline.tooltip.label.fontSize = 16;
    chart_timeline.tooltip.label.textAlign = 'middle';
    chart_timeline.tooltip.getFillFromObject = true;
    chart_timeline.tooltip.background.fill = am4core.color('white'); // Цвет всплывающего окошка на названии табллицы

    chart_timeline.tooltip.getStrokeFromObject = true; // Обводка окошка на названии
    chart_timeline.tooltip.strokeFill = `red`;

    // Create axes
    var dateAxis_timeline = chart_timeline.xAxes.push(new am4charts.DateAxis());
    var valueAxis_timeline = chart_timeline.yAxes.push(
      new am4charts.ValueAxis()
    );
    // valueAxis_timeline.logarithmic = true;
    dateAxis_timeline.start = 0.97;
    dateAxis_timeline.keepSelection = true;
    let isobilnenskoe = [
      {
        date: '2020-12-12',
        capacity: 3150,
        percentage: ((3150 * 100) / full_timeline[0]).toFixed(1),
      },
      {
        date: '2021-01-12',
        capacity: 2700,
        percentage: ((2700 * 100) / full_timeline[0]).toFixed(1),
      },
      {
        date: '2021-02-01',
        capacity: 2800,
        percentage: ((2800 * 100) / full_timeline[0]).toFixed(1),
      },
      {
        date: '2021-02-26',
        capacity: 3000,
        percentage: ((3000 * 100) / full_timeline[0]).toFixed(1),
      },
      {
        date: '2021-03-02',
        capacity: 3010,
        percentage: ((3010 * 100) / full_timeline[0]).toFixed(1),
      },
      {
        date: '2021-03-05',
        capacity: 3010,
        percentage: ((3010 * 100) / full_timeline[0]).toFixed(1),
      },
      {
        date: '2021-03-08',
        capacity: 3010,
        percentage: ((3010 * 100) / full_timeline[0]).toFixed(1),
      },
      {
        date: '2021-03-12',
        capacity: 3020,
        percentage: ((3020 * 100) / full_timeline[0]).toFixed(1),
      },
      {
        date: '2021-03-19',
        capacity: 3020,
        percentage: ((3020 * 100) / full_timeline[0]).toFixed(1),
      },
      {
        date: '2021-03-23',
        capacity: 3050,
        percentage: ((3050 * 100) / full_timeline[0]).toFixed(1),
      },
      {
        date: '2021-03-26',
        capacity: 3500,
        percentage: ((3500 * 100) / full_timeline[0]).toFixed(1),
      },
    ];
    let zagorskoe = [
      {
        date: '2020-12-12',
        capacity: 2800,
        percentage: ((2800 / full_timeline[1]) * 100).toFixed(1),
      },
      {
        date: '2021-01-12',
        capacity: 2500,
        percentage: ((2500 / full_timeline[1]) * 100).toFixed(1),
      },
      {
        date: '2021-02-01',
        capacity: 2500,
        percentage: ((2500 / full_timeline[1]) * 100).toFixed(1),
      },
      {
        date: '2021-02-26',
        capacity: 2500,
        percentage: ((2500 / full_timeline[1]) * 100).toFixed(1),
      },
      {
        date: '2021-03-02',
        capacity: 2500,
        percentage: ((2500 / full_timeline[1]) * 100).toFixed(1),
      },
      {
        date: '2021-03-05',
        capacity: 2500,
        percentage: ((2500 / full_timeline[1]) * 100).toFixed(1),
      },
      {
        date: '2021-03-08',
        capacity: 2500,
        percentage: ((2500 / full_timeline[1]) * 100).toFixed(1),
      },
      {
        date: '2021-03-12',
        capacity: 2500,
        percentage: ((2500 / full_timeline[1]) * 100).toFixed(1),
      },
      {
        date: '2021-03-19',
        capacity: 2500,
        percentage: ((2500 / full_timeline[1]) * 100).toFixed(1),
      },
      {
        date: '2021-03-23',
        capacity: 2500,
        percentage: ((2500 / full_timeline[1]) * 100).toFixed(1),
      },
      {
        date: '2021-03-23',
        capacity: 2500,
        percentage: ((2500 / full_timeline[1]) * 100).toFixed(1),
      },
      {
        date: '2021-03-26',
        capacity: 2500,
        percentage: ((2500 / full_timeline[1]) * 100).toFixed(1),
      },
    ];
    let balanovskoe = [
      {
        date: '2020-12-12',
        capacity: 700,
        percentage: ((700 / full_timeline[2]) * 100).toFixed(1),
      },
      {
        date: '2021-01-12',
        capacity: 700,
        percentage: ((700 / full_timeline[2]) * 100).toFixed(1),
      },
      {
        date: '2021-02-01',
        capacity: 700,
        percentage: ((700 / full_timeline[2]) * 100).toFixed(1),
      },
      {
        date: '2021-02-26',
        capacity: 650,
        percentage: ((650 / full_timeline[2]) * 100).toFixed(1),
      },
      {
        date: '2021-03-02',
        capacity: 600,
        percentage: ((600 / full_timeline[2]) * 100).toFixed(1),
      },
      {
        date: '2021-03-05',
        capacity: 600,
        percentage: ((600 / full_timeline[2]) * 100).toFixed(1),
      },
      {
        date: '2021-03-08',
        capacity: 600,
        percentage: ((600 / full_timeline[2]) * 100).toFixed(1),
      },
      {
        date: '2021-03-12',
        capacity: 600,
        percentage: ((600 / full_timeline[2]) * 100).toFixed(1),
      },
      {
        date: '2021-03-19',
        capacity: 600,
        percentage: ((600 / full_timeline[2]) * 100).toFixed(1),
      },
      {
        date: '2021-03-23',
        capacity: 600,
        percentage: ((600 / full_timeline[2]) * 100).toFixed(1),
      },
      {
        date: '2021-03-26',
        capacity: 550,
        percentage: ((550 / full_timeline[2]) * 100).toFixed(1),
      },
    ];
    let schastlivenskoe = [
      {
        date: '2020-12-12',
        capacity: 3800,
        percentage: ((3800 / full_timeline[3]) * 100).toFixed(1),
      },
      {
        date: '2021-01-12',
        capacity: 3400,
        percentage: ((3400 / full_timeline[3]) * 100).toFixed(1),
      },
      {
        date: '2021-02-01',
        capacity: 4600,
        percentage: ((4600 / full_timeline[3]) * 100).toFixed(1),
      },
      {
        date: '2021-02-26',
        capacity: 5600,
        percentage: ((5600 / full_timeline[3]) * 100).toFixed(1),
      },
      {
        date: '2021-03-02',
        capacity: 5800,
        percentage: ((5800 / full_timeline[3]) * 100).toFixed(1),
      },
      {
        date: '2021-03-05',
        capacity: 5900,
        percentage: ((5900 / full_timeline[3]) * 100).toFixed(1),
      },
      {
        date: '2021-03-08',
        capacity: 5950,
        percentage: ((5950 / full_timeline[3]) * 100).toFixed(1),
      },
      {
        date: '2021-03-12',
        capacity: 5900,
        percentage: ((5900 / full_timeline[3]) * 100).toFixed(1),
      },
      {
        date: '2021-03-19',
        capacity: 5950,
        percentage: ((5950 / full_timeline[3]) * 100).toFixed(1),
      },
      {
        date: '2021-03-23',
        capacity: 6000,
        percentage: ((6000 / full_timeline[3]) * 100).toFixed(1),
      },
      {
        date: '2021-03-26',
        capacity: 6200,
        percentage: ((6200 / full_timeline[3]) * 100).toFixed(1),
      },
    ];
    let tayganskoe = [
      {
        date: '2015-10-01',
        capacity: 3700,
        percentage: ((3700 / full_timeline[4]) * 100).toFixed(1),
      },
      {
        date: '2019-01-21',
        capacity: 1000,
        percentage: ((1000 / full_timeline[4]) * 100).toFixed(1),
      },
      {
        date: '2019-02-26',
        capacity: 11000,
        percentage: ((11000 / full_timeline[4]) * 100).toFixed(1),
      },
      {
        date: '2019-04-01',
        capacity: 13700,
        percentage: ((13700 / full_timeline[4]) * 100).toFixed(1),
      },
      {
        date: '2020-12-12',
        capacity: 1300,
        percentage: ((1300 / full_timeline[4]) * 100).toFixed(1),
      },
      {
        date: '2021-01-12',
        capacity: 1100,
        percentage: ((1100 / full_timeline[4]) * 100).toFixed(1),
      },
      {
        date: '2021-02-01',
        capacity: 1150,
        percentage: ((1150 / full_timeline[4]) * 100).toFixed(1),
      },
      {
        date: '2021-02-26',
        capacity: 1200,
        percentage: ((1200 / full_timeline[4]) * 100).toFixed(1),
      },
      {
        date: '2021-03-02',
        capacity: 1150,
        percentage: ((1150 / full_timeline[4]) * 100).toFixed(1),
      },
      {
        date: '2021-03-05',
        capacity: 1150,
        percentage: ((1150 / full_timeline[4]) * 100).toFixed(1),
      },
      {
        date: '2021-03-08',
        capacity: 1150,
        percentage: ((1150 / full_timeline[4]) * 100).toFixed(1),
      },
      {
        date: '2021-03-12',
        capacity: 1200,
        percentage: ((1200 / full_timeline[4]) * 100).toFixed(1),
      },
      {
        date: '2021-03-19',
        capacity: 1150,
        percentage: ((1150 / full_timeline[4]) * 100).toFixed(1),
      },
      {
        date: '2021-03-23',
        capacity: 1200,
        percentage: ((1200 / full_timeline[4]) * 100).toFixed(1),
      },
      {
        date: '2021-03-26',
        capacity: 1200,
        percentage: ((1200 / full_timeline[4]) * 100).toFixed(1),
      },
    ];
    let belogorskoe = [
      {
        date: '2015-02-02',
        capacity: 12000,
        percentage: ((12000 / full_timeline[5]) * 100).toFixed(1),
      },
      {
        date: '2015-05-20',
        capacity: 18000,
        percentage: ((18000 / full_timeline[5]) * 100).toFixed(1),
      },
      {
        date: '2015-10-01',
        capacity: 4100,
        percentage: ((4100 / full_timeline[5]) * 100).toFixed(1),
      },
      {
        date: '2020-12-12',
        capacity: 3400,
        percentage: ((3400 / full_timeline[5]) * 100).toFixed(1),
      },
      {
        date: '2021-01-12',
        capacity: 3800,
        percentage: ((3800 / full_timeline[5]) * 100).toFixed(1),
      },
      {
        date: '2021-02-01',
        capacity: 6000,
        percentage: ((6000 / full_timeline[5]) * 100).toFixed(1),
      },
      {
        date: '2021-02-26',
        capacity: 6000,
        percentage: ((6000 / full_timeline[5]) * 100).toFixed(1),
      },
      {
        date: '2021-03-02',
        capacity: 6000,
        percentage: ((6000 / full_timeline[5]) * 100).toFixed(1),
      },
      {
        date: '2021-03-05',
        capacity: 6000,
        percentage: ((6000 / full_timeline[5]) * 100).toFixed(1),
      },
      {
        date: '2021-03-08',
        capacity: 6000,
        percentage: ((6000 / full_timeline[5]) * 100).toFixed(1),
      },
      {
        date: '2021-03-12',
        capacity: 6000,
        percentage: ((6000 / full_timeline[5]) * 100).toFixed(1),
      },
      {
        date: '2021-03-19',
        capacity: 6000,
        percentage: ((6000 / full_timeline[5]) * 100).toFixed(1),
      },
      {
        date: '2021-03-23',
        capacity: 6000,
        percentage: ((6000 / full_timeline[5]) * 100).toFixed(1),
      },
      {
        date: '2021-03-26',
        capacity: 11500,
        percentage: ((11500 / full_timeline[5]) * 100).toFixed(1),
      },
    ];
    let partizanskoe = [
      {
        date: '2020-02-05',
        capacity: 12765,
        percentage: ((12765 * 100) / full_timeline[6]).toFixed(1),
      },
      {
        date: '2020-08-25',
        capacity: 7000,
        percentage: ((700 * 100) / full_timeline[6]).toFixed(1),
      },
      {
        date: '2020-12-12',
        capacity: 4800,
        percentage: ((4800 * 100) / full_timeline[6]).toFixed(1),
      },
      {
        date: '2021-01-12',
        capacity: 4300,
        percentage: ((4300 * 100) / full_timeline[6]).toFixed(1),
      },
      {
        date: '2021-02-01',
        capacity: 4400,
        percentage: ((4400 * 100) / full_timeline[6]).toFixed(1),
      },
      {
        date: '2021-02-26',
        capacity: 5200,
        percentage: ((5200 * 100) / full_timeline[6]).toFixed(1),
      },
      {
        date: '2021-03-02',
        capacity: 5300,
        percentage: ((5300 * 100) / full_timeline[6]).toFixed(1),
      },
      {
        date: '2021-03-05',
        capacity: 5400,
        percentage: ((5400 * 100) / full_timeline[6]).toFixed(1),
      },
      {
        date: '2021-03-08',
        capacity: 5500,
        percentage: ((5500 * 100) / full_timeline[6]).toFixed(1),
      },
      {
        date: '2021-03-12',
        capacity: 5300,
        percentage: ((5300 * 100) / full_timeline[6]).toFixed(1),
      },
      {
        date: '2021-03-19',
        capacity: 5400,
        percentage: ((5400 * 100) / full_timeline[6]).toFixed(1),
      },
      {
        date: '2021-03-23',
        capacity: 5600,
        percentage: ((5600 * 100) / full_timeline[6]).toFixed(1),
      },
      {
        date: '2021-03-26',
        capacity: 5800,
        percentage: ((5800 * 100) / full_timeline[6]).toFixed(1),
      },
    ];
    let simferopolskoe = [
      {
        date: '2018-12-01',
        capacity: 15600,
        percentage: ((15600 * 100) / full_timeline[7]).toFixed(1),
      },
      {
        date: '2019-09-15',
        capacity: 16000,
        percentage: ((16000 * 100) / full_timeline[7]).toFixed(1),
      },
      {
        date: '2020-02-15',
        capacity: 11700,
        percentage: ((11700 * 100) / full_timeline[7]).toFixed(1),
      },
      {
        date: '2020-04-03',
        capacity: 11000,
        percentage: ((11000 * 100) / full_timeline[7]).toFixed(1),
      },
      {
        date: '2020-04-13',
        capacity: 10115,
        percentage: ((10115 * 100) / full_timeline[7]).toFixed(1),
      },
      {
        date: '2020-08-27',
        capacity: 7000,
        percentage: ((7000 * 100) / full_timeline[7]).toFixed(1),
      },
      {
        date: '2020-10-03',
        capacity: 6000,
        percentage: ((6000 * 100) / full_timeline[7]).toFixed(1),
      },
      {
        date: '2020-11-15',
        capacity: 4900,
        percentage: ((4900 * 100) / full_timeline[7]).toFixed(1),
      },
      {
        date: '2020-12-12',
        capacity: 4200,
        percentage: ((4200 * 100) / full_timeline[7]).toFixed(1),
      },
      {
        date: '2021-01-12',
        capacity: 3500,
        percentage: ((3500 * 100) / full_timeline[7]).toFixed(1),
      },
      {
        date: '2021-02-01',
        capacity: 3500,
        percentage: ((3500 * 100) / full_timeline[7]).toFixed(1),
      },
      {
        date: '2021-02-26',
        capacity: 3500,
        percentage: ((3500 * 100) / full_timeline[7]).toFixed(1),
      },
      {
        date: '2021-03-02',
        capacity: 3500,
        percentage: ((3500 * 100) / full_timeline[7]).toFixed(1),
      },
      {
        date: '2021-03-05',
        capacity: 3500,
        percentage: ((3500 * 100) / full_timeline[7]).toFixed(1),
      },
      {
        date: '2021-03-08',
        capacity: 3500,
        percentage: ((3500 * 100) / full_timeline[7]).toFixed(1),
      },
      {
        date: '2021-03-12',
        capacity: 3500,
        percentage: ((3500 * 100) / full_timeline[7]).toFixed(1),
      },
      {
        date: '2021-03-19',
        capacity: 3500,
        percentage: ((3500 * 100) / full_timeline[7]).toFixed(1),
      },
      {
        date: '2021-03-23',
        capacity: 3500,
        percentage: ((3500 * 100) / full_timeline[7]).toFixed(1),
      },
      {
        date: '2021-03-26',
        capacity: 3600,
        percentage: ((3500 * 100) / full_timeline[7]).toFixed(1),
      },
    ];

    let ayanskoe = [
      {
        date: '2020-12-12',
        capacity: 300,
        percentage: ((300 * 100) / full_timeline[8]).toFixed(1),
      },
      {
        date: '2021-01-12',
        capacity: 350,
        percentage: ((350 * 100) / full_timeline[8]).toFixed(1),
      },
      {
        date: '2021-02-01',
        capacity: 700,
        percentage: ((700 * 100) / full_timeline[8]).toFixed(1),
      },
      {
        date: '2021-02-26',
        capacity: 1200,
        percentage: ((1200 * 100) / full_timeline[8]).toFixed(1),
      },
      {
        date: '2021-03-02',
        capacity: 1400,
        percentage: ((1400 * 100) / full_timeline[8]).toFixed(1),
      },
      {
        date: '2021-03-05',
        capacity: 1500,
        percentage: ((1500 * 100) / full_timeline[8]).toFixed(1),
      },
      {
        date: '2021-03-08',
        capacity: 1550,
        percentage: ((1550 * 100) / full_timeline[8]).toFixed(1),
      },
      {
        date: '2021-03-12',
        capacity: 1600,
        percentage: ((1600 * 100) / full_timeline[8]).toFixed(1),
      },
      {
        date: '2021-03-19',
        capacity: 1700,
        percentage: ((1700 * 100) / full_timeline[8]).toFixed(1),
      },
      {
        date: '2021-03-23',
        capacity: 1800,
        percentage: ((1800 * 100) / full_timeline[8]).toFixed(1),
      },
      {
        date: '2021-03-26',
        capacity: 1900,
        percentage: ((1900 * 100) / full_timeline[8]).toFixed(1),
      },
    ];
    let starokrimskoe = [
      {
        date: '2020-12-12',
        capacity: 700,
        percentage: ((700 * 100) / full_timeline[9]).toFixed(1),
      },
      {
        date: '2021-01-12',
        capacity: 650,
        percentage: ((650 * 100) / full_timeline[9]).toFixed(1),
      },
      {
        date: '2021-02-01',
        capacity: 600,
        percentage: ((600 * 100) / full_timeline[9]).toFixed(1),
      },
      {
        date: '2021-02-26',
        capacity: 500,
        percentage: ((500 * 100) / full_timeline[9]).toFixed(1),
      },
      {
        date: '2021-03-02',
        capacity: 650,
        percentage: ((650 * 100) / full_timeline[9]).toFixed(1),
      },
      {
        date: '2021-03-05',
        capacity: 600,
        percentage: ((600 * 100) / full_timeline[9]).toFixed(1),
      },
      {
        date: '2021-03-08',
        capacity: 550,
        percentage: ((550 * 100) / full_timeline[9]).toFixed(1),
      },
      {
        date: '2021-03-12',
        capacity: 500,
        percentage: ((500 * 100) / full_timeline[9]).toFixed(1),
      },
      {
        date: '2021-03-19',
        capacity: 600,
        percentage: ((600 * 100) / full_timeline[9]).toFixed(1),
      },
      {
        date: '2021-03-23',
        capacity: 500,
        percentage: ((500 * 100) / full_timeline[9]).toFixed(1),
      },
      {
        date: '2021-03-26',
        capacity: 600,
        percentage: ((600 * 100) / full_timeline[9]).toFixed(1),
      },
    ];
    let samarlinskoe = [
      {
        date: '2020-12-12',
        capacity: 3200,
        percentage: ((3200 * 100) / full_timeline[10]).toFixed(1),
      },
      {
        date: '2021-01-12',
        capacity: 3050,
        percentage: ((3050 * 100) / full_timeline[10]).toFixed(1),
      },
      {
        date: '2021-02-01',
        capacity: 2900,
        percentage: ((2900 * 100) / full_timeline[10]).toFixed(1),
      },
      {
        date: '2021-02-26',
        capacity: 3300,
        percentage: ((3300 * 100) / full_timeline[10]).toFixed(1),
      },
      {
        date: '2021-03-02',
        capacity: 3450,
        percentage: ((3450 * 100) / full_timeline[10]).toFixed(1),
      },
      {
        date: '2021-03-05',
        capacity: 3400,
        percentage: ((3400 * 100) / full_timeline[10]).toFixed(1),
      },
      {
        date: '2021-03-08',
        capacity: 3350,
        percentage: ((3350 * 100) / full_timeline[10]).toFixed(1),
      },
      {
        date: '2021-03-12',
        capacity: 3300,
        percentage: ((3300 * 100) / full_timeline[10]).toFixed(1),
      },
      {
        date: '2021-03-19',
        capacity: 3250,
        percentage: ((3250 * 100) / full_timeline[10]).toFixed(1),
      },
      {
        date: '2021-03-23',
        capacity: 3200,
        percentage: ((3200 * 100) / full_timeline[10]).toFixed(1),
      },
      {
        date: '2021-03-26',
        capacity: 3200,
        percentage: ((3200 * 100) / full_timeline[10]).toFixed(1),
      },
    ];
    let leninskoe = [
      {
        date: '2020-12-12',
        capacity: 2400,
        percentage: ((2400 * 100) / full_timeline[11]).toFixed(1),
      },
      {
        date: '2021-01-12',
        capacity: 2500,
        percentage: ((2500 * 100) / full_timeline[11]).toFixed(1),
      },
      {
        date: '2021-02-01',
        capacity: 2600,
        percentage: ((2600 * 100) / full_timeline[11]).toFixed(1),
      },
      {
        date: '2021-02-26',
        capacity: 3200,
        percentage: ((3200 * 100) / full_timeline[11]).toFixed(1),
      },
      {
        date: '2021-03-02',
        capacity: 3250,
        percentage: ((3250 * 100) / full_timeline[11]).toFixed(1),
      },
      {
        date: '2021-03-05',
        capacity: 3200,
        percentage: ((3200 * 100) / full_timeline[11]).toFixed(1),
      },
      {
        date: '2021-03-08',
        capacity: 3100,
        percentage: ((3100 * 100) / full_timeline[11]).toFixed(1),
      },
      {
        date: '2021-03-12',
        capacity: 3050,
        percentage: ((3050 * 100) / full_timeline[11]).toFixed(1),
      },
      {
        date: '2021-03-19',
        capacity: 2900,
        percentage: ((2900 * 100) / full_timeline[11]).toFixed(1),
      },
      {
        date: '2021-03-23',
        capacity: 2950,
        percentage: ((2950 * 100) / full_timeline[11]).toFixed(1),
      },
      {
        date: '2021-03-26',
        capacity: 2900,
        percentage: ((2900 * 100) / full_timeline[11]).toFixed(1),
      },
    ];
    let lgovskoe = [
      {
        date: '2015-04-15',
        capacity: 191,
        percentage: ((191 * 100) / full_timeline[16]).toFixed(1),
      },
      {
        date: '2016-07-15',
        capacity: 117,
        percentage: ((117 * 100) / full_timeline[16]).toFixed(1),
      },
      {
        date: '2018-04-23',
        capacity: 1829,
        percentage: ((1829 * 100) / full_timeline[16]).toFixed(1),
      },
      {
        date: '2019-01-10',
        capacity: 1491,
        percentage: ((1491 * 100) / full_timeline[16]).toFixed(1),
      },
      {
        date: '2020-10-15',
        capacity: 1031,
        percentage: ((1031 * 100) / full_timeline[16]).toFixed(1),
      },
      {
        date: '2021-01-15',
        capacity: 880,
        percentage: ((880 * 100) / full_timeline[16]).toFixed(1),
      },
    ];
    let chernorechenskoe = [
      {
        date: '2015-05-20',
        capacity: 49000,
        percentage: ((49000 * 100) / full_timeline[12]).toFixed(1),
      },
      {
        date: '2015-10-05',
        capacity: 40000,
        percentage: ((40000 * 100) / full_timeline[12]).toFixed(1),
      },
      {
        date: '2016-02-05',
        capacity: 40000,
        percentage: ((40000 * 100) / full_timeline[12]).toFixed(1),
      },
      {
        date: '2020-10-05',
        capacity: 15600,
        percentage: ((15600 * 100) / full_timeline[12]).toFixed(1),
      },
    ];
    let zelenoyarskoe = [
      {
        date: '2018-05-20',
        capacity: 2358,
        percentage: ((2358 * 100) / full_timeline[17]).toFixed(1),
      },
    ];
    let mejgornoe = [
      {
        date: '2014-04-01',
        capacity: 25570,
        percentage: ((25570 * 100) / full_timeline[18]).toFixed(1),
      },
      {
        date: '2014-09-08',
        capacity: 15500,
        percentage: ((15500 * 100) / full_timeline[18]).toFixed(1),
      },
      {
        date: '2015-06-01',
        capacity: 500,
        percentage: ((500 * 100) / full_timeline[18]).toFixed(1),
      },
      {
        date: '2019-04-01',
        capacity: 1320,
        percentage: ((1320 * 100) / full_timeline[18]).toFixed(1),
      },
    ];
    let kerchenskoe = [
      {
        date: '2014-10-23',
        capacity: 9500,
        percentage: ((9500 * 100) / full_timeline[19]).toFixed(1),
      },
      {
        date: '2015-01-15',
        capacity: 5150,
        percentage: ((5150 * 100) / full_timeline[19]).toFixed(1),
      },
      {
        date: '2015-10-23',
        capacity: 10000,
        percentage: ((10000 * 100) / full_timeline[19]).toFixed(1),
      },
      {
        date: '2018-12-15',
        capacity: 4000,
        percentage: ((4000 * 100) / full_timeline[19]).toFixed(1),
      },
    ];

    let feodosiyskoe = [
      {
        date: '2014-04-01',
        capacity: 8460,
        percentage: ((8460 * 100) / full_timeline[20]).toFixed(1),
      },
      {
        date: '2014-10-23',
        capacity: 8300,
        percentage: ((8300 * 100) / full_timeline[20]).toFixed(1),
      },
      {
        date: '2015-05-01',
        capacity: 12300,
        percentage: ((12300 * 100) / full_timeline[20]).toFixed(1),
      },
      {
        date: '2015-10-23',
        capacity: 9500,
        percentage: ((9500 * 100) / full_timeline[20]).toFixed(1),
      },
      {
        date: '2017-01-30',
        capacity: 7300,
        percentage: ((7300 * 100) / full_timeline[20]).toFixed(1),
      },
      {
        date: '2018-12-15',
        capacity: 6000,
        percentage: ((6000 * 100) / full_timeline[20]).toFixed(1),
      },
    ];

    let frontovoe = [
      {
        date: '2014-04-01',
        capacity: 29600,
        percentage: ((29600 * 100) / full_timeline[21]).toFixed(1),
      },
      {
        date: '2017-01-15',
        capacity: 3000,
        percentage: ((3000 * 100) / full_timeline[21]).toFixed(1),
      },
      {
        date: '2019-12-01',
        capacity: 1460,
        percentage: ((1460 * 100) / full_timeline[21]).toFixed(1),
      },
    ];

    let yuzmakskoe = [];

    createSeries_timeline('Изобильненское', isobilnenskoe, 0);
    createSeries_timeline('Загорское', zagorskoe, 1);
    createSeries_timeline('Балановское', balanovskoe, 2);
    createSeries_timeline('Счастливенское', schastlivenskoe, 3);
    createSeries_timeline('Тайганское', tayganskoe, 4);
    createSeries_timeline('Белогорское', belogorskoe, 5);
    createSeries_timeline('Партизанское', partizanskoe, 6);
    createSeries_timeline('Симферопольское', simferopolskoe, 7);
    createSeries_timeline('Аянское', ayanskoe, 8);
    createSeries_timeline('Старокрымское', starokrimskoe, 9);
    createSeries_timeline('Самарлинское', samarlinskoe, 10);
    createSeries_timeline('Ленинское', leninskoe, 11);
    createSeries_timeline('Чернореченское', chernorechenskoe, 12);
    // createSeries_timeline( "Альминское", *, 13);
    // createSeries_timeline( "Бахчисарайское", *, 14);
    // createSeries_timeline( "Кутузовское", *, 15);
    createSeries_timeline('Льговское', lgovskoe, 16);
    createSeries_timeline('Зеленоярское', zelenoyarskoe, 17);
    createSeries_timeline('Межгорное', mejgornoe, 18);
    createSeries_timeline('Керченское', kerchenskoe, 19);
    createSeries_timeline('Феодосийское', feodosiyskoe, 20);
    createSeries_timeline('Фронтовое', frontovoe, 21);
    // createSeries_timeline("Наполненность%", "Аянское");

    // Create series_timeline
    function createSeries_timeline(name, data, num) {
      var series_timeline = chart_timeline.series.push(
        new am4charts.LineSeries()
      );

      series_timeline.dataFields.valueY = 'capacity';
      series_timeline.dataFields.dateX = 'date';
      series_timeline.dataFields.id = num;
      series_timeline.name = name;
      // series_timeline.stroke = am4core.color("#ff0000");
      series_timeline.strokeWidth = 2;
      series_timeline.minBulletDistance = 50;
      series_timeline.tooltipText =
        '[bold]{name} водохранилище[/]\n[bold]Наполнение: {valueY} тыс. куб. м. ({percentage}%)\n({dateX}) ';

      // filled_timeline[num] >= 1000
      // ? filled_timeline[num].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") +
      //   ` млн. куб. м.`
      // : filled_timeline[num] + ` тыс. куб. м.`,

      series_timeline.tooltip.pointerOrientation = 'vertical';
      series_timeline.tooltip.background.cornerRadius = 20;
      series_timeline.tooltip.background.fillOpacity = 0.5;
      series_timeline.tooltip.label.padding(12, 12, 12, 12);
      series_timeline.tooltip.label.minWidth = 40;
      series_timeline.tooltip.label.minHeight = 40;
      series_timeline.tooltip.label.textAlign = 'middle';
      series_timeline.tooltip.label.textValign = 'middle';
      // series_timeline.noRisers = false;

      // series_timeline.sequencedInterpolation = true;
      // series_timeline.sequencedInterpolationDelay = 80;

      series_timeline.tensionX = 0.99;
      series_timeline.tensionY = 0.95;

      var segment_timeline = series_timeline.segments.template;
      segment_timeline.interactionsEnabled = true;

      var hoverState_timeline = segment_timeline.states.create('hover');
      hoverState_timeline.properties.strokeWidth = 5;

      var dimmed_timeline = segment_timeline.states.create('dimmed');
      dimmed_timeline.properties.stroke = am4core.color('#dadada');
      dimmed_timeline.properties.opacity = 0.1;

      segment_timeline.events.on('over', function (event) {
        processOver_timeline(event.target.parent.parent.parent);
      });

      segment_timeline.events.on('out', function (event) {
        processOut_timeline(event.target.parent.parent.parent);
      });

      var bullet_timeline = series_timeline.bullets.push(
        new am4charts.CircleBullet()
      );
      bullet_timeline.circle.strokeWidth = 1;
      bullet_timeline.circle.radius = 1;
      // bullet_timeline.circle.fill = am4core.color("#fff");

      // bullet_timeline.tooltipText =
      // "[bold]{name} водохранилище[/]\nНаполнение: {valueY} тыс. куб. м.\n({dateX})";

      var bullethover_timeline = bullet_timeline.states.create('hover');
      bullethover_timeline.properties.scale = 4;
      // let value = 0;

      // for (value1 of datedata) {
      //   value = value1[17];
      //   var dataItem = { date: value1[1] };
      //   dataItem["Наполненность " + s] = value;
      //   data.push(dataItem);
      // }
      series_timeline.data = data;

      // Add scrollbar
      chart_timeline.scrollbarX = new am4charts.XYChartScrollbar();
      chart_timeline.scrollbarX.minHeight = 15;
      chart_timeline.scrollbarX.parent = chart_timeline.bottomAxesContainer;
      chart_timeline.scrollbarX.background.fill = am4core.color('#67dcab');
      chart_timeline.scrollbarX.fillOpacity = 0.5;
      chart_timeline.scrollbarX.series.push(series_timeline); //
      chart_timeline.scrollbarX.scrollbarChart.seriesContainer.hide();

      chart_timeline.scrollbarX.thumb.background.fill = am4core.color(
        '#67dcab'
      );
      chart_timeline.scrollbarX.thumb.background.fillOpacity = 0.8;

      chart_timeline.scrollbarX.unselectedOverlay.fill = am4core.color('#fff');
      chart_timeline.scrollbarX.unselectedOverlay.fillOpacity = 0.9;

      chart_timeline.scrollbarX.scrollbarChart.plotContainer.filters.clear();

      chart_timeline.scrollbarY = new am4charts.XYChartScrollbar();
      chart_timeline.scrollbarY.minWidth = 15;
      chart_timeline.scrollbarY.parent = chart_timeline.leftAxesContainer;
      chart_timeline.scrollbarY.toBack();

      chart_timeline.scrollbarY.background.fill = am4core.color('#67dcab');
      chart_timeline.scrollbarY.fillOpacity = 0.5;
      // chart_timeline.scrollbarY.background.disabled = true;
      chart_timeline.scrollbarY.thumb.background.fill = am4core.color(
        '#67dcab'
      );
      chart_timeline.scrollbarY.thumb.background.fillOpacity = 0.8;

      chart_timeline.scrollbarY.unselectedOverlay.fill = am4core.color('#fff');
      chart_timeline.scrollbarY.unselectedOverlay.fillOpacity = 0.9;

      return series_timeline;
    }

    chart_timeline.legend = new am4charts.Legend();
    chart_timeline.legend.position = 'right';
    chart_timeline.legend.scrollable = true;
    chart_timeline.legend.itemContainers.template.events.on(
      'over',
      function (event) {
        processOver_timeline(event.target.dataItem.dataContext);
        console.log(event.target.dataItem);
      }
    );

    chart_timeline.legend.itemContainers.template.events.on(
      'out',
      function (event) {
        processOut_timeline(event.target.dataItem.dataContext);
      }
    );

    function processOver_timeline(hoveredSeries) {
      hoveredSeries.toFront();
      // console.log(hoveredSeries);

      hoveredSeries.showBullets = false;
      let range1_timeline = valueAxis_timeline.axisRanges.create();
      range1_timeline.value = death_timeline[hoveredSeries.dataFields.id];
      range1_timeline.grid.stroke = am4core.color('#09ca36');
      range1_timeline.grid.strokeWidth = 2;
      range1_timeline.grid.strokeOpacity = 0.8;
      range1_timeline.grid.strokeDasharray = '8,4,2,4';
      range1_timeline.grid.above = true;

      range1_timeline.label.inside = true;
      range1_timeline.label.text = '[bold]Мёртвый объём';
      range1_timeline.label.fill = range1_timeline.grid.stroke;
      range1_timeline.label.verticalCenter = 'bottom';
      range1_timeline.contents.stroke = am4core.color('#FF0000');

      let range2_timeline = valueAxis_timeline.axisRanges.create();
      range2_timeline.value = full_timeline[hoveredSeries.dataFields.id];
      range2_timeline.grid.stroke = am4core.color('#3525fe');
      range2_timeline.grid.strokeWidth = 2;
      range2_timeline.grid.strokeOpacity = 0.8;
      range2_timeline.grid.strokeDasharray = '3,3';
      range2_timeline.grid.above = true;
      range2_timeline.label.inside = true;
      range2_timeline.label.text = '[bold]Максимальный объём';
      range2_timeline.label.fill = range2_timeline.grid.stroke;
      range2_timeline.label.verticalCenter = 'bottom';

      hoveredSeries.segments.each(function (segment_timeline) {
        // console.log(segment_timeline, `segment_timeline`);
        segment_timeline.setState('hover');
      });

      chart_timeline.series.each(function (series_timeline) {
        // console.log(series_timeline, `series_timeline`);
        if (series_timeline != hoveredSeries) {
          series_timeline.segments.each(function (segment_timeline) {
            segment_timeline.setState('dimmed');
          });
          series_timeline.bulletsContainer.setState('dimmed');
        }
      });
    }

    function processOut_timeline(hoveredSeries) {
      let rangeRemove_timeline = valueAxis_timeline.axisRanges.clear();
      chart_timeline.series.each(function (series_timeline) {
        series_timeline.segments.each(function (segment_timeline) {
          segment_timeline.setState('default');
        });
        series_timeline.bulletsContainer.setState('default');
      });
    }

    // Add cursor
    chart_timeline.cursor = new am4charts.XYCursor();
    // chart_timeline.cursor.xAxis = dateAxis_timeline;
    // chart_timeline.cursor.snapToSeries = series_timeline;

    chart_timeline.cursor.maxTooltipDistance = -1;
  }); // end am4core.ready()
};

let chart1IsVisible = false;
let chart2IsVisible = false;
let chart3IsVisible = false;

if (chart1IsVisible === false) {
  operationsTab1.addEventListener(
    `click`,
    function () {
      createChart1Main();
      chart1IsVisible = true;
    },
    { once: true }
  );
}

if (chart2IsVisible === false) {
  operationsTab2.addEventListener(
    `click`,
    function () {
      createChart2Main();
      chart2IsVisible = true;
    },
    { once: true }
  );
}
if (chart3IsVisible === false) {
  operationsTab3.addEventListener(
    `click`,
    function () {
      createChart3Main();
      chart3IsVisible = true;
    },
    { once: true }
  );
}
