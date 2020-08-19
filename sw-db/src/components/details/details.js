import React, {Component} from "react"
import "./details.css"

export default class Details extends Component {
  render() {
    return (
      <section className="details">
        <img />
        <div>
          <h2>Name</h2>
          <ul>
            <li>1 item</li>
            <li>2 item</li>
            <li>3 item</li>
          </ul>
        </div>
      </section>
    )
  }
}
