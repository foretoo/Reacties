export default class BookstoreService {

  data = [
    {
      id: 1,
      title: 'Production-ready Microservices',
      author: 'Susan J. Fowler',
      price: 129,
      imgName: 'prm' },
    {
      id: 2,
      title: 'Realese It!',
      author: 'Michael T. Nygard',
      price: 71,
      imgName: 'rli' }
  ]

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // reject(new Error('Something went badly wrong'))
        resolve(this.data)
      }, 700)
    })
  }
}
