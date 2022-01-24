const angleToColor = (a) => {
  let result = [ 255, 255, 255 ]
  if (a >= 0 && a < 60)    result = [ 255, Math.round(255 * (a / 60)), 0 ]
  if (a >= 60 && a < 120)  result = [ 255 - Math.round(255 * ((a - 60) / 60)), 255, 0 ]
  if (a >= 120 && a < 180) result = [ 0, 255, Math.round(255 * ((a - 120) / 60)) ]
  if (a >= 180 && a < 240) result = [ 0, 255 - Math.round(255 * ((a - 180) / 60)), 255 ]
  if (a >= 240 && a < 300) result = [ Math.round(255 * ((a - 240) / 60)), 0, 255 ]
  if (a >= 300 && a < 360) result = [ 255, 0, 255 - Math.round(255 * ((a - 300) / 60)) ]
  return result
}

export default angleToColor