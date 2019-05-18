import React, { Component } from "react";
import TopSection from "./topSection";
import PostSection from "./postSection";
import FooterSection from "./footerSection";

class Section extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      name: "sdf",
      age: 12,
      data: [
        {
          class: "cs",
          name: "faizan"
        },
        {
          class: "se",
          name: "zain"
        },
        {
          class: "se",
          name: "usama"
        },
        {
          class: "cs",
          name: "Asif"
        },
        {
          class: "cs",
          name: "ALi"
        },
        {
          class: "cs",
          name: "faizan"
        },
        {
          class: "se",
          name: "Naved"
        },
        {
          class: "se",
          name: "Umar"
        }
      ]
    };

    console.log("constructor method");
  }

  componentWillMount = () => {
    console.log("componentWillMount method");
  };

  componentDidMount() {
    console.log("componentDidMount method");
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps method");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount method");
  }

  catchDataFromChild = data => {
    console.log("data from child", data);
  };

  changeState = () => {
    let prevval = this.state.counter;
    this.setState({ counter: prevval + 1 });
  };

  changeStateForDecrease = () => {
    let prevval = this.state.counter;
    this.setState({ counter: prevval - 1 });
  };

  delItem = studendata => {
    let newArr = this.state.data.filter(item => item.name != studendata.name);

    this.setState({ data: newArr });
  };

  submit = () => {
    let name = this.refs.name.value;
    let class_name = this.state.class;

    let new_obj = {
      name: name,
      class: class_name
    };

    let newArr = this.state.data;
    newArr.push(new_obj);

    this.setState({ data: newArr });
  };

  onChangeHandler = e => {
      console.log('e',e.target.value)
      
    this.setState({ class: e.target.value });
  };

  render() {
    console.log("render method");
    return (
      <div>
        <input ref="name" type="text" placeholder="name" />
        <input
          onChange={this.onChangeHandler}
          name="class"
          type="text"
          placeholder="class"
        />
        <button onClick={this.submit}>add</button>

        <table style={{ border: "2px solid black" }}>
          <tr>
            <th>id.</th>
            <th>Name</th>
            <th>Class</th>
          </tr>

          {this.state.data.map((item, index) => {
            return (
              <tr>
                <td> {index} </td>
                <td> {item.name} </td>
                <td> {item.class} </td>
                <td>
                  {" "}
                  <button onClick={() => this.delItem(item)}>
                    {" "}
                    delete{" "}
                  </button>{" "}
                </td>
              </tr>
            );
          })}
        </table>

        <p>{this.state.counter}</p>

        <button onClick={this.changeState}>+</button>
        <button onClick={this.changeStateForDecrease}>-</button>

        {/* <TopSection
          data={"sdfa"}
          number={this.state.counter}
          methodForCHild={this.catchDataFromChild}
        />
        <PostSection />
        <FooterSection /> */}
      </div>
    );
  }
}

export default Section;
