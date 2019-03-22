function Counter(props) {
  return React.createElement(
    "div",
    {className: "box"},
    React.createElement("button", null, "—"),
    React.createElement("span", null, props),
    React.createElement("button", null, "+")
  );
}
