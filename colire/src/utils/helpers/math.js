const clamp = (num, min, max) => {
  return (
    num < min ? min
    : num > max ? max
      : num
  )
}

const round = Math.round

export { clamp, round }