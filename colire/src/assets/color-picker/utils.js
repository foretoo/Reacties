const round = Math.round

const clamp = (num, min, max) => num < min ? min : num > max ? max : num

const round_dec = (n, d) => round((n + Number.EPSILON) * (10 * d)) / (10 * d)

const calc_angle = (x, y) => (Math.atan2(y, x) * (180 / Math.PI) + 360) % 360

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