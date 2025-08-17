export function mapOrder(originalArray, orderArray, key) {
  if (!originalArray || !orderArray || !key) return []

  const clonedArray = [...originalArray]
  clonedArray.sort(
    (a, b) => orderArray.indexOf(a[key]) - orderArray.indexOf(b[key])
  )
  return clonedArray
}