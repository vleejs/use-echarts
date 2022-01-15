export function debounce(fn, t) {
  const delay = t || 300
  let timer
  return function () {
    const args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    const context = this
    timer = setTimeout(() => {
      timer = null
      fn.apply(context, args)
    }, delay)
  }
}
