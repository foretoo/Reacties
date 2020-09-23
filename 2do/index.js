const r = React.createElement

const modules = [
  'components/AddItem.js',
  'components/Editable.js',
  'components/Item.js',
  'components/SVGicon.js',
  'components/List.js',
  'components/Nav.js',
  'components/Header.js',
  'App.js',
]

for (const path of modules) {
  const script = document.createElement('script')
  script.src = path
  document.body.append(script)
}
