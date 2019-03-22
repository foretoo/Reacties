function Counter(store) {
  return React.createElement(

    "div",
    {className: "counter"},

    React.createElement(
      "button",
      null,
      "—"
    ),

    React.createElement(
      "span",
      null,
      store.getState()
    ),

    React.createElement(
      "button",
      null,
      "+"
    )

  )
}
