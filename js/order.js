window.onload = function main() {
createMenu()
  // createMenuBtnHandler()
}

let items = []

let menuObjArr = [{
  id: 'burger',
  name: 'Royale with Cheese',
  price: 8.99
}, {
  id: 'pizza',
  name: 'Arugula Pie',
  price: 11.99
}, {
  id: 'ribs',
  name: 'Smoked Swine',
  price: 14.99
}, {
  id: 'ice_cream',
  name: 'Ice Cream Biscut',
  price: 7.99
}, {
  id: 'other pizza',
  name: `Wes's Pizza`,
  price: 3.44
}]

function createMenu() {
  menuObjArr.forEach(function(item) {
    $('.menu-card-row').append(`<div class="thumbnail col-xs-6">
      <img class="img" src="img/${item.id}.jpg">
      <div class="caption">
        <h4>${item.name}</h4>
        <p>$${item.price}</p>
        <hr>
        <p><a id="${item.id}-button" href="#" class="btn btn-sm add-order-btn">ADD TO ORDER</a></p>
      </div>
    </div>`)
  })
}

function createMenuBtnHandler() {
  
}

function pushItems(x) {
  items.push(menuObjArr[x])
  return items
}

function calcSubTotal(items) {
  let subTotal = 0
  for( var item of items ) {
    subTotal += item.price
  }
  return Math.round(subTotal * 100)/100
}

function calcTax() {
  let subTotal = calcSubTotal(items)
  let taxRate = .1
  let taxLong = subTotal * taxRate
  let tax = Math.round(taxLong * 100)/100
  return tax
}

function calcTotal() {
  let subTotal = calcSubTotal(items)
  let tax = calcTax()
  let totalLong = subTotal + tax
  let total = Math.round(totalLong * 100)/100
  return total
}

$('.alert').hide()
// appender code
let itemNameDiv = "#item-listed"
let itemPriceDiv = "#price-listed"


$('#burger-button').on('click', function () {
  event.preventDefault()
  pushItems(0)
  let burgerRow = `<div class="row list-item-unindented"><small id="burger-label">Royale with Cheese</small>
  </div>`
  let burgerPriceRow = `<div class="row list-item-unindented"><small>$8.99</small></div>`
  $(itemNameDiv).prepend(burgerRow)
  $(itemPriceDiv).prepend(burgerPriceRow)

  //replace totals
  $('#subtotal-amnt').html('$' + calcSubTotal(items))
  $('#tax-amnt').html('$' + calcTax())
  $('#total-amnt').html('$' + calcTotal())
})
$('#pizza-button').on('click', function () {
  event.preventDefault()
  pushItems(1)
  let pizzaRow = `<div class="row list-item-unindented"><small id="pizza-label">Arugula Pie</small>
  </div>`
  let pizzaPriceRow = `<div class="row list-item-unindented"><small>$11.99</small></div>`
  $(itemNameDiv).prepend(pizzaRow)
  $(itemPriceDiv).prepend(pizzaPriceRow)

  //replace totals
  $('#subtotal-amnt').html('$' + calcSubTotal(items))
  $('#tax-amnt').html('$' + calcTax())
  $('#total-amnt').html('$' + calcTotal())
})
$('#ribs-button').on('click', function () {
  event.preventDefault()
  pushItems(2)
  let ribsRow = `<div class="row list-item-unindented"><small id="ribs-label">Smoked Swine</small>
  </div>`
  let ribsPriceRow = `<div class="row list-item-unindented"><small>$14.99</small></div>`
  $(itemNameDiv).prepend(ribsRow)
  $(itemPriceDiv).prepend(ribsPriceRow)

  //replace totals
  $('#subtotal-amnt').html('$' + calcSubTotal(items))
  $('#tax-amnt').html('$' + calcTax())
  $('#total-amnt').html('$' + calcTotal())
})
$('#ice-cream-button').on('click', function () {
  event.preventDefault()
  pushItems(3)
  let iceCreamRow = `<div class="row list-item-unindented"><small id="ice-cream-label">Ice Cream Biscut</small>
  </div>`
  let iceCreamPriceRow = `<div class="row list-item-unindented"><small>$7.99</small></div>`
  $(itemNameDiv).prepend(iceCreamRow)
  $(itemPriceDiv).prepend(iceCreamPriceRow)


  //replace totals
  $('#subtotal-amnt').html('$' + calcSubTotal(items))
  $('#tax-amnt').html('$' + calcTax())
  $('#total-amnt').html('$' + calcTotal())
})

$('#home').load("index.html")

//FORM VALIDATION
$('.orderform').submit(function (e) {
  e.preventDefault()
  let name = $('#name').val()
  calcSubTotal(items)
  if (items == 0) {
    $('.alert-warning').show()
  } else {
    $('.alert-success').append(`            <strong>Thank you, ${name}!</strong> You're order has been shipped!`)
    $('.alert-success').show()
  }
})
