//Items render
const cardsBody = document.querySelector('.cards__body')
const cardsItems = items.map(item => {
  const inStock  = item.orderInfo.inStock
  const stockIcon = !!inStock ? '&#xe901;' : '&#xea0d;'
  const stockIconColor = !!inStock ? 'card__stock-icon_checked' : 'card__stock-icon_empty'
  cardsBody.innerHTML += `
    <div class="cards__item">
        <div class="card">
            <button class="card__like">&#xe903;</button>
            <div class="card__visual">
                <img src="../images/${item.imgUrl}" alt="${item.name}">
            </div>
            <div class="card__body">
                <h3 class="card__title">${item.name}</h3>
                <p class="card__stock"><span class="card__stock-icon ${stockIconColor}">${stockIcon}</span><span class="card__stock-amount">${item.orderInfo.inStock}</span> left in stock</p>
                <p class="card__price">Price: <span class="card__price-amount">${item.price}</span> $</p>
                <button class="card__button">Add to cart</button>
            </div>
            <div class="card__footer">
                <p class="card__reviews"><span class="card__reviews-amount">${item.orderInfo.reviews}</span> Positive reviews<br><span class="card__reviews-level">Above avarage</span></p>
                <p class="card__orders"><span class="card__orders-amount">1,327</span><br>orders</p>
            </div>
        </div>
    </div>
  `
})

//likeButton active/passive
const cardLike = [...document.querySelectorAll('.card__like')].forEach(item => {
  var toggleStatus = false
  item.addEventListener('click', () => {
    if (!toggleStatus) {
      item.innerHTML = '&#xe904;'
      item.classList.add('card__like_active')
    
      toggleStatus = true
    } else {
      item.innerHTML = '&#xe903;'
      item.classList.remove('card__like_active')
    
      toggleStatus = false
    }
  })
})