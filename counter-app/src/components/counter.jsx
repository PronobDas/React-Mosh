import React, { Component } from "react"; //imrc
//cc -- short form
class Counter extends Component {
  // any data this component need will be in the state

  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  // // way 1 to get the this accessible in handleIncrement
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement() {
  //   // this.state.count not accesible
  //   //obj.method()
  //   // function() doesn't have access.
  //   // after adding the constructor it has access.
  //   console.log("Increment CLicked", this.state.count);
  // }

  // way 2 : using arrow
  // because here we dont need to rebind this.

  handleIncrement = (product) => {
    //this.state.count++; // this will not work.
    // this will work in Angular, but not in React.
    this.setState({ count: this.state.count + 1 });
    console.log("Increment CLicked", this.state.count);
    console.log(product);
  };

  // instead of React.Fragment we could use <div></div>
  render() {
    //React.createElement('h1'); //this method is going to be called after the next line.

    return (
      <React.Fragment>
        <span className={this.getClassBadge()}>{this.formatCount()}</span>
        <button
          //onClick={this.handleIncrement}
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()}
      </React.Fragment>
    ); // jsx expression
  }

  getClassBadge() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
