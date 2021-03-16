const config = {
  type: 'carousel',
  perView: 1,
  perTouch: 1,
  breakpoints: {
    600: {
      perView: 1
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Glide('.glide', config).mount()
})
