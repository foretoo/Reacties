const colorToAngle = ([ R, G, B ]) => {
  let result = 0
  if (R & G) {
    result = (255 - R) / 255 * 60 + G / 255 * 60
  }
  if (G & B) {
    result = (255 - G) / 255 * 60 + B / 255 * 60 + 120
  }
  if (B & R) {
    result = (255 - B) / 255 * 60 + R / 255 * 60 + 240
  }
  return result
}

export default colorToAngle