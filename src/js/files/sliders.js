/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Parallax, Autoplay } from 'swiper'
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import '../../scss/base/swiper.scss'
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders () {
  //BildSlider
  let sliders = document.querySelectorAll(
    '[class*="__swiper"]:not(.swiper-wrapper)'
  )
  if (sliders) {
    sliders.forEach(slider => {
      slider.parentElement.classList.add('swiper')
      slider.classList.add('swiper-wrapper')
      for (const slide of slider.children) {
        slide.classList.add('swiper-slide')
      }
    })
  }
}
// Инициализация слайдеров
function initSliders () {
  // Добавление классов слайдера
  // при необходимости отключить
  bildSliders()
  // Перечень слайдеров
  // Проверяем, есть ли слайдер на стронице
  if (document.querySelector('.main-block__slider')) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper('.main-block__slider', {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination, Parallax, Autoplay],
      observer: true,
      parallax: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 50,
      // autoHeight: true,
      speed: 800,

      //touchRatio: 0,
      //simulateTouch: false,
      loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Эффекты
			effect: 'fade',*/
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },

      // Пагинация

      pagination: {
        el: '.controll-main-block__dotts',
        clickable: true
      },

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"
      // Брейкпоинты
      /*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
      // События
      on: {
        init: function (swiper) {
          const allSlides = document.querySelector('.fraction-controll__all')
          const allSlidesItems = document.querySelectorAll(
            '.slide-main-block:not(.swiper-slide-duplicate)'
          )
          const allSlidesItem = allSlidesItems.length
          allSlides.innerHTML =
            allSlidesItem < 10 ? `0${allSlidesItem}` : allSlidesItem
        },
        slideChange: function (swiper) {
          const currentSlide = document.querySelector(
            '.fraction-controll__current'
          )
          const currentItem = swiper.realIndex
          currentSlide.innerHTML =
            currentItem + 1 < 10 ? `0${currentItem + 1}` : currentItem + 1
        }
      }
    })
  }
  if (document.querySelector('.products-slider__slider')) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper('.products-slider__slider', {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination, Autoplay],
      observer: true,
      // parallax: true,
      observeParents: true,
      slidesPerView: 4,
      spaceBetween: 30,
      // watchOverflow: true,
      // autoHeight: true,
      speed: 800,

      //touchRatio: 0,
      //simulateTouch: false,
      loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Эффекты
			effect: 'fade',*/
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },

      // Пагинация

      pagination: {
        el: '.products-slider__dotts',
        dynamicBullets: true,
        clickable: true
      },

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"
      // Брейкпоинты

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1370: {
          slidesPerView: 4,
          spaceBetween: 30
        }
      },

      // События
      on: {}
    })
  }
  if (document.querySelector('.products-new')) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper('.products-new__slider', {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination, Autoplay],
      observer: true,
      // parallax: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 30,
      // watchOverflow: true,
      // autoHeight: true,
      speed: 800,

      //touchRatio: 0,
      //simulateTouch: false,
      loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Эффекты
			effect: 'fade',*/
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },

      // Пагинация

      pagination: {
        el: '.products-new__dotts',
        dynamicBullets: true,
        clickable: true
      },

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"
      // Брейкпоинты

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1330: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      },

      // События
      on: {}
    })
  }
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll () {
  let sliderScrollItems = document.querySelectorAll('.swiper_scroll')
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index]
      const sliderScrollBar = sliderScrollItem.querySelector(
        '.swiper-scrollbar'
      )
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: {
          enabled: true
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false
        },
        mousewheel: {
          releaseOnEdges: true
        }
      })
      sliderScroll.scrollbar.updateSize()
    }
  }
}

window.addEventListener('load', function (e) {
  // Запуск инициализации слайдеров
  initSliders()
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
})
