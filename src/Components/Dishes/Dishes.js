import React, { Component } from "react";
import dishes from "./dishes.json";
import "./Dishes.css";


export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }
  render() {
    return (
      <div>
        <h1>Menu</h1>
        <div className="menu">
          {dishes.map((dish) => (
            <div key={dish.id}>
              <h2>
                {dish.name}
                {dish.label && <span className="dish-label">{dish.label}</span>}
                <span className="dish-price">{dish.price}</span>
              </h2>

              <img src={dish.image} alt={dish.name} />
              <p>{dish.description}</p>
              <h3>Comments</h3>
                {dish.comments.map((comment) => (
                  <div key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>Rating: {comment.rating}</p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
