import React, { Component } from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./components/CommentDetail";
import ApprovalCard from "./components/ApprovalCard";

class App extends Component {
  state = {
    author: "Vance",
    time: "Today at 6:00pm",
  };

  render() {
    return (
      <div className="ui container comments">
          <ApprovalCard/>
        <CommentDetail author={this.state.author} time={this.state.time} />

      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
