const clamp = (num, min, max) => {
  return (
    num < min ? min
    : num > max ? max
      : num
  )
}

const round = Math.round

const r3d = (n) => round((n + Number.EPSILON) * 1000) / 1000

const calcAngle = (x, y) => {
  let angle = Math.atan2(y, x) * (180 / Math.PI)
  if (angle < 0) angle += 360
  return angle
}

export { clamp, round, r3d, calcAngle }