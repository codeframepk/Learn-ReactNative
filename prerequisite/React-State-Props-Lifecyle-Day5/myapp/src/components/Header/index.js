import React, { Component } from "react";
import {connect} from 'react-redux';
import {addNewDataToReducer} from '../../redux/actions/actions'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: true,
      show: false
    };
  }

  userHandler =  () => {
    
    let data = {
      name:'naveed',
      class:'se'
    }

    this.props.addNewDataToReducer(data);
   console.log('data from componenet header');
   
  };

  render() {
    const { user, show } = this.state;
    return (
      <div>
        {user ? (
          <button onClick={this.userHandler}>send data to store</button>
        ) : (
          <button>user login</button>
        )}

        {show && <div>SOme div</div>}
      </div>
    );
  }
}

const mapStateToProps = store =>{
  console.log('store',store);
  
  return {
    name:store.todosReducer.name,
    login:store.userReducer.login
  };
}

export default connect(mapStateToProps, {addNewDataToReducer})(Header)
