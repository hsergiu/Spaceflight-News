export function fromNow(time) {
  const between = Math.abs((Date.now() - Date.parse(time)) / 1000)

  if (between < 3600) {
    return addEnding(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return addEnding(~~(between / 3600), ' hour')
  } else if (between < 2630000) {
    return addEnding(~~(between / 86400), ' day')
  } else if (between < (31560000)) {
    return addEnding(~~(between / 2630000), ' month')
  } else {
    return addEnding(~~(between / 31560000), ' year')
  }
}

function addEnding(time, label) {
  let ending = 'ago'
  let multiple = time === 1 ? '' : 's'

  return time + ' ' + label + multiple + ' ' + ending
}
