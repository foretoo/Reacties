function Counter(store) {
  return React.createElement(

    "div",
    {className: "counter"},

    React.createElement(
      "button",
      {onClick: function() {store.dispatch({type: "DECREMENT"})}},
      "—"
    ),

    React.createElement(
      "span",
      null,
      store.getState()
    ),

    React.createElement(
      "button",
      {onClick: function() {store.dispatch({type: "INCREMENT"})}},
      "+"
    )

  )
}
