const totalSum = (cart) => {
  const reducer = (acc, curr) => acc + curr.price
  const sum = cart.reduce(reducer, 0)
  return sum
}

export default totalSum