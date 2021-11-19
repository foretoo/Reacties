const vW = window.innerWidth
const vH = window.innerHeight

let root = document.querySelector("#root")
let style = document.querySelector("#style")

const isbn = [
  '9780670022922',
  '0375827498',
  '087216716X',
  '9781840224030',
  '1576070913',
  '0873671341',
  '9781572321854',
  '0471433357',
  '0877847142',
  '9781594519185',
  '9780743564199',
  '0152003509',
  '9789681914677',
  '9780064472647',
  '9780791017067'
]

const layout = document.createElement('div')
layout.className = 'layout'
root.append(layout)

for (const e of isbn) {
  // const url = `https://openlibrary.org/isbn/${e}.json`
  // fetch(url)
  //   .then(res => res.json())
  //   .then(obj => console.log(obj))

  const img = document.createElement('img')
  img.src = `http://covers.openlibrary.org/b/isbn/${e}-L.jpg`
  layout.append(img)
}
