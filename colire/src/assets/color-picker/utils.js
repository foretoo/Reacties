const round = Math.round

const clamp = (num, min, max) =>
  num < min ? min : num > max ? max : num

const round_dec = (num, dec) =>
  round((num + Number.EPSILON) * (10 * dec)) / (10 * dec)

const calc_angle = (x, y, size, shift) => {
  const [ _x, _y ] = [ x - size / 2, y - size / 2 ]
  // get native pointer angle in [ 0, ..., 360 ]
  let result = (Math.atan2(_y, _x) * (180 / Math.PI) + 360) % 360
  // get (native - designed - shift) angle in [ 0, ..., 360 ]
  result = (result - 90 - shift + 360) % 360
  return result
}

const get_matrix = (deg) => {
  const rad = deg * Math.PI / 180
  const [ a, b ] = [ Math.cos(rad), Math.sin(rad) ]
  return `matrix(${a},${b},${-b},${a},0,0)`
}

export {
  round,
  clamp,
  round_dec,
  calc_angle,
  get_matrix,
}