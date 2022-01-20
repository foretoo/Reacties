const clamp = (num, min, max) => {
  return (
    num < min ? min
    : num > max ? max
      : num
  )
}

const round = Math.round

const calcAngle = (x, y) => {
  let angle = Math.atan2(y, x) * (180 / Math.PI)
  if (angle < 0) angle += 360
  return angle
}

export { clamp, round, calcAngle }