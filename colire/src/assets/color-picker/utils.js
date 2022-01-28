const round = Math.round

const clamp = (num, min, max) => num < min ? min : num > max ? max : num

const round_dec = (n, d) => round((n + Number.EPSILON) * (10 * d)) / (10 * d)

const calc_angle = (x, y) => {
  const angle = Math.atan2(y, x) * (180 / Math.PI)
  return angle < 0 ? angle + 360 : angle
}

export {
  round,
  clamp,
  round_dec,
  calc_angle,
}