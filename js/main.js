const elShareItBtn = document.querySelector('.selected-product__product-actions_share-it')
const elShareItPopup = document.querySelector('.selected-product__product-actions_share-it-popup-wrapper')
const elClosePopupBtn = document.querySelector('.selected-product__product-actions_share-it-popup :nth-child(6)')

const swatches = document.querySelectorAll('.swatches')

const defaultRate = () => {
  const star = document.querySelector('.selected-product__product-actions_rating label:nth-of-type(5)')
  star.style.color = '#ccc'
}

const showPopup = () => elShareItPopup.classList.toggle('show-popup')

const changeSwatch = ({ target }) => {
  const { classList } = target
  const closestVariant = target.closest('.swatch-variant')

  if (classList.contains('swatch-variant') || closestVariant) {
    // Select active variant in current container
    const swatchContainer = target.closest('.swatches').querySelector('.active-circle')
    swatchContainer.classList.remove('active-circle')

    classList.contains('swatch-variant')
      ? target.classList.add('active-circle')
      : closestVariant.classList.add('active-circle')
  }
}

defaultRate()

elShareItBtn.addEventListener('click', showPopup)
elClosePopupBtn.addEventListener('click', showPopup)
swatches.forEach(swatch => swatch.addEventListener('click', changeSwatch))
