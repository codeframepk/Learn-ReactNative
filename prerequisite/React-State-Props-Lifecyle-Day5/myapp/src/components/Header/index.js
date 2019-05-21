import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: true,
      show: false
    };
  }

  userHandler = () => {
    this.setState({ user: false });
  };

  render() {
    const { user, show } = this.state;
    return (
      <div>
        {user ? (
          <button onClick={this.userHandler}>logout</button>
        ) : (
          <button>user login</button>
        )}

        {show && <div>SOme div</div>}
      </div>
    );
  }
}

export default Header;
