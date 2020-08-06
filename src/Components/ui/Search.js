import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  setText = (e) => {
    this.setState({ value: e.target.value }, () => {
      this.props.getCharacter(this.state.value);
    });
  };

  render() {
    return (
      <div>
        <section className="search">
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Search characters"
              autoFocus
              onChange={this.setText}
            />
          </form>
        </section>
      </div>
    );
  }
}

export default Search;
