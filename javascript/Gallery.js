'use strict';

import React from "react";
import a from "../isfahan/Chehel-Sotoun-Palace-1500x630.jpg";
import b from "../isfahan/Chehel-Sotoun-Palace-1500x630.jpg";
import c from "../isfahan/Menar-Jonban-1500x630.jpg";
import d from "../isfahan/Naqshe-Jahan-Square-and-its-monuments.jpg";
import e from "../isfahan/Si-o-se-pol-Bridge-1500x630.jpg";

class Gallery extends React.Component {
  state = {
    index: 0,
    picList: [a, b, c, d, e],
  };

  onClickNext = () => {
    if (this.state.index + 1 === this.state.picList.length) {
      this.setState({
        index: 0,
      });
    } else {
      this.setState({
        index: this.state.index + 1,
      });
    }
  };

  onClickPrevious = () => {
    if (this.state.index - 1 === -1) {
      this.setState({
        index: this.state.picList.length - 1,
      });
    } else {
      this.setState({
        index: this.state.index - 1,
      });
    }
  };

  render() {
    return(
      <div id="gallery">
        <img src={this.state.picList[this.state.index]} style={"maxHeight"="50%","maxWidth"="50%"} />
        <br/>
        <button onClick={this.onClickPrevious}> Previous </button>
        <button onClick={this.onClickNext}> Next </button>
      </div>
    );
  }

}
const domContainer = document.querySelector('#gallery');
ReactDOM.render(element(Gallery), domContainer);
;

