window.onload = function main() {
  $('.alert').hide()
  createMenu()
  createMenuBtnHandler()
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
  id: 'hero',
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
  menuObjArr.forEach(function(item, index) {
    $(`#${item.id}-button`).on('click', function () {
      event.preventDefault()
      pushItems(index)
      let itemRow = `<div class="row list-item-unindented"><small id="${item.id}-label">${item.name}</small>
      </div>`
      let priceRow = `<div class="row list-item-unindented"><small>$${item.price}</small></div>`
      $('#item-listed').prepend(itemRow)
      $('#price-listed').prepend(priceRow)

      //replace totals
      $('#subtotal-amnt').html('$' + calcSubTotal(items))
      $('#tax-amnt').html('$' + calcTax())
      $('#total-amnt').html('$' + calcTotal())
    })
  })
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
