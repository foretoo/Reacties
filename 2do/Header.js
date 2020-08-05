const Header = () => {
  const date = new Date()
  const weekDay = date.toLocaleDateString(document.documentElement.lang, {weekday: 'long'})
  const monthDay = date.toLocaleDateString(document.documentElement.lang, {month: 'long', day: 'numeric'})

  return r("header", null, [
    r("div", { className: "weekDay" }, weekDay),
    r("div", { className: "monthDay" }, monthDay),
  ])
}
