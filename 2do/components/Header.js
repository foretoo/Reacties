const Header = React.memo(() => {
  const [date, setDate] = React.useState(new Date)

  const weekDay = date.toLocaleDateString(document.documentElement.lang, {weekday: 'long'})
  const monthDay = date.toLocaleDateString(document.documentElement.lang, {month: 'long', day: 'numeric'})

  const interval = setInterval(() => {
    const now = new Date()
    if (now.getDay() !== date.getDay()) {
      setDate(now)
      clearInterval(interval)
    }
  }, 60000)

  return r("header", null, [
    r("div", { className: "monthDay" }, monthDay),
    r("div", { className: "weekDay" }, weekDay),
  ])
})
