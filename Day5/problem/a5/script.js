'use strict'

void (function () {
  const foodList = [
    {
      name: '샌드위치',
      price: 11000,
      deliveryPrice: 0,
    },
    {
      name: '초밥',
      price: 16000,
      deliveryPrice: 0,
    },
    {
      name: '치킨',
      price: 19000,
      deliveryPrice: 0,
    },
  ]

  foodList.forEach((v) => (v.deliveryPrice = 2000))

  foodList.push(
    {
      name: '떡볶이',
      price: 3000,
      deliveryPrice: 0,
    },
    {
      name: '튀김',
      price: 3000,
      deliveryPrice: 0,
    },
    {
      name: '순대',
      price: 4000,
      deliveryPrice: 0,
    },
  )

  let totalPrice = 0

  console.log('주문 음식 목록')
  foodList.forEach((v) => {
    totalPrice += v.price + v.deliveryPrice
    console.log(`${v.name}: ${v.price + v.deliveryPrice}원`)
  })
  console.log('==========')
  console.log(`총합: ${totalPrice}원`)
})()
