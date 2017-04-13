(function() {
  'use strict'

  $('.button-collapse').sideNav()

  var items = []
  var $tbody = $('tbody')
  var $subtotal = $('#subtotal')
  var $tax = $('#tax')
  var $total = $('#total')

  var renderOrder = function() {
    var subtotal = 0
    var tax
    var total
    var $tr
    var $tdName
    var $tdPrice


    $tbody.empty()

    for (var item of items) {
      $tr = $('<tr>')
      $tdName = $('<td>')
      $tdPrice = $('<td>')

      $tdName.text(item.name)
      $tdPrice.text(`$${item.price.toFixed(2)}`)
      $tdPrice.addClass('right-align')

      $tr.append($tdName)
      $tr.append($tdPrice)
      $tbody.append($tr)

      subtotal += item.price
    }

    tax = subtotal * 0.1
    total = subtotal + tax

    $subtotal.text(`$${subtotal.toFixed(2)}`)
    $tax.text(`$${tax.toFixed(2)}`)
    $total.text(`$${total.toFixed(2)}`)
  }

  renderOrder()


    event.preventDefault()
  })
})()
