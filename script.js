'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.header__weather');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector(`.btn--scroll-to`);
const section1 = document.querySelector(`#section--1`);
const nav = document.querySelector(`.nav`);
const tabs = document.querySelectorAll(`.operations__tab`);
const tabsContainer = document.querySelector(`.operations__tab-container`);
const tabsContent = document.querySelectorAll(`.operations__content`);
const header = document.querySelector(`.header`);

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
// overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

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

btnScrollTo.addEventListener(`click`, function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
  console.log(`Current scroll x/y`, window.scrollX, window.pageYOffset);
  console.log(
    `Height/width viewport`,
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

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
  if (!entry.isIntersecting) nav.classList.add(`sticky`);
  else nav.classList.remove(`sticky`);
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: [0, 0.2, 0.4],
  rootMargin: `-${navHeight}px`,
});
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

const allSection = document.querySelectorAll(`.section`);
// console.log(allSection);

const callback = function (entries, observer) {
  // console.log(observer);
  const entry = entries[0];
  // console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove(`section--hidden`);
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(callback, {
  root: null,
  rootMargin: `0px`,
  threshold: 0.15,
});

const target = allSection.forEach(section => {
  // sectionObserver.observe(section);
  // section.classList.add(`section--hidden`);
});

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
    // console.log(id);
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

var capacity_est = 253110;
var value_est = 59280;
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

  setValue_est(value_est);
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

label_est.text = `[bold] Всего воды:\n ${formattedValue} млн. м³ (24.4%)`;
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

var capacity_naliv = 147050;
var value_naliv = 21238;
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

  setValue_naliv(value_naliv);
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

label_naliv.text = `[bold]Всего воды:\n${formattedValue_naliv} млн. м³ [bold](14.4%)`;
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

window.addEventListener(`load`, function (e) {
  console.log(`Page fully load`, e);
});

// window.addEventListener(`beforeunload`, function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = ``;
// });
