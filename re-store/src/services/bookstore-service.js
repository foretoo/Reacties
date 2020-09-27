export default class BookstoreService {

  getBooks() {
    return [
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
  }
}
