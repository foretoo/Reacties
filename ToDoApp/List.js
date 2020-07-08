
function List(props) {

  const items = props.items.map(e => {
    return r("div", null, e)
  })

  return r("main", null, items);
}
