
function List(props) {

  const items = props.items.map((e, i) => {
    return r("section", {key: i}, r("div", null, e))
  })

  return r("main", null, items);
}
