const menu = [
  { title: 'Преимущества', text: '.statistics' },
  { title: 'Услуги', text: '.services' },
  { title: 'О нас', text: '.about' },
  { title: 'Новости', text: '.news' },
  { title: 'Отзывы', text: '.reviews' },
  { title: 'Грамоты', text: '.diplomas' },
  { title: 'О компании', text: '.fullscreen' },
]

document.addEventListener('click', (event) => {
  if (
    event.target.closest('.menu__link') ||
    event.target.closest('.info__link')
  ) {
    const text = event.target.textContent
    const obj = menu.find((item) => item.title === text)
    document.querySelector(`${obj.text}`).scrollIntoView({
      block: 'center',
      inline: 'nearest',
      behavior: 'smooth',
    })
  }
})

const body = document.body
const obj = {
  menu: document.querySelector('.header__menu'),
  burger: document.querySelector('.header__burger'),
}

document.addEventListener('click', (event) => {
  event.preventDefault()
  if (event.target.closest('.header__burger')) {
    body.classList.toggle('lock')
    Object.keys(obj).forEach((item) => obj[item].classList.toggle('active'))
  } else if (event.target.closest('.menu__link')) {
    Object.keys(obj).forEach((item) => obj[item].classList.remove('active'))
    body.classList.remove('lock')
  }
})

new Swiper('.news__wrapper', {
  navigation: {
    nextEl: '.news__button_next',
    prevEl: '.news__button_prev',
  },
  slideClass: 'news__column',
  wrapperClass: 'news__row',
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 40,
    },
  },
})

new Swiper('.diplomas__wrapper', {
  navigation: {
    nextEl: '.diplomas__button_next',
    prevEl: '.diplomas__button_prev',
  },
  wrapperClass: 'diplomas__row',
  slideClass: 'diplomas__column',
  slideNextClass: 'diplomas__column_next',
  slidePrevClass: 'diplomas__column_prev',
  slideActiveClass: 'diplomas__column_active',
  centeredSlides: true,
  initialSlide: 1,
  slidesPerView: 3,
})

new Swiper('.reviews__wrapper', {
  navigation: {
    nextEl: '.reviews__button_next',
    prevEl: '.reviews__button_prev',
  },
  wrapperClass: 'reviews__row',
  slideClass: 'reviews__column',
  spaceBetween: 40,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
})
