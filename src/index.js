import React from "react";
import { render } from "react-dom";
import Styles from "./Styles";
import Wizard from "./Wizard";
import MyForm from "./MyForm";
import { Field } from "react-final-form";
import { Progress } from "reactstrap";
import List from "./List";
import "./progressBar.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progressValue: 0
    };
  }

  handleProgress = () => {
    var div = document.getElementById("div");

    this.setState({
      progressValue: Math.floor((this.audio.currentTime / 4) * 100)
    });
    console.log("halo");
  };

  render() {
    return (
      <Styles>
        <h1>🏁 React Final Form Example</h1>
        <Progress value={this.state.progressValue} />
        <Wizard
          initialValues={{ employed: true }}
          onSubmit={() => {
            window.alert("Hello");
          }}
        >
          <Wizard.Page>
            <p>Question1</p>
            <div id="div" onClick={this.handleProgress}>
              <Field name="page1" component="input" type="radio" value="1" />
              <Field name="page1" component="input" type="radio" value="2" />
              <Field name="page1" component="input" type="radio" value="3" />
            </div>
            <p>Question2</p>
            <div id="div" onClick={this.handleProgress}>
              <Field name="page11" component="input" type="radio" value="1" />
              <Field name="page11" component="input" type="radio" value="2" />
              <Field name="page11" component="input" type="radio" value="3" />
            </div>
          </Wizard.Page>
          <Wizard.Page>
            <p>Page2</p>
            <div id="div" onClick={this.handleProgress}>
              <Field name="page2" component="input" type="radio" value="1" />
              <Field name="spage2" component="input" type="radio" value="2" />
              <Field name="page2" component="input" type="radio" value="3" />
            </div>
          </Wizard.Page>
          <Wizard.Page>
            <p>Page3</p>
            <div id="div" onClick={this.handleProgress}>
              <Field name="page3" component="input" type="radio" value="1" />
              <Field name="page3" omponent="input" type="radio" value="2" />
              <Field name="page3" component="input" type="radio" value="3" />
            </div>
          </Wizard.Page>
          <Wizard.Page>
            <p>Page4</p>
            <div id="div" onClick={this.handleProgress}>
              <Field name="page4" component="input" type="radio" value="1" />
              <Field name="page4" component="input" type="radio" value="2" />
              <Field name="page4" component="input" type="radio" value="3" />
            </div>
          </Wizard.Page>
        </Wizard>
      </Styles>
    );
  }
}

render(<App />, document.getElementById("root"));
