type ParamsTotalPrice = {
  price: number
  discount: number
  isInstallment: boolean
  months: number
}

type TotalPrice<T extends ParamsTotalPrice> = (params: T) => number

const totalPrice: TotalPrice<ParamsTotalPrice> = ({ price, discount, isInstallment, months }) => {
  if (price < 0) {
    throw new Error('Цена не может быть отрицательным значением')
  }
  if (discount < 0 || discount > 100) {
    throw new Error('Скидка не может быть отрицательным значением и больше 100')
  }
  if (months < 0) {
    throw new Error('Месяц не может быть отрицательным значением')
  }

  const discountAmount = (price * discount) / 100
  const priceAfterDiscount = price - discountAmount

  if (isInstallment) {
    return priceAfterDiscount / months
  }

  return priceAfterDiscount
}

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 })
console.log(price) // 6250
