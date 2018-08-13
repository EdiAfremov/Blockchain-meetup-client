import { Component } from 'preact';
import axios from 'axios';
import { api } from '../consts';
import Success from './registered-success';
const Input = ({ placeholder, name, onChange, value, err }) => {
  return (
    <div className="input-group">
      <input
        type="text"
        name={name}
        value={value}
        onChange={e => onChange(e)}
        placeholder={placeholder}
        className="form-input"
      />
      {err ? <div className="err-message">{err}</div> : null}
    </div>
  );
};

export default class Form extends Component {
  state = {
    name: { placeholder: 'שם מלא', value: '', err: null },
    email: { placeholder: 'מייל', value: '', err: null },
    position: { placeholder: 'תפקיד נוכחי', value: '', err: null },
    registered: false
  };
  componentWillMount() {}

  onChangeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    const inputsState = { ...this.state };
    inputsState[name].value = value;
    this.setState({ ...inputsState });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const formData = {};
    formData.name = this.state.name.value;
    formData.email = this.state.email.value;
    formData.position = this.state.position.value;
    const inputsState = { ...this.state };

    if (formData.name) {
      inputsState.name.err = null;
      this.setState({ ...inputsState });
    }

    if (formData.position) {
      inputsState.position.err = null;
      this.setState({ ...inputsState });
    }
    axios({
      method: 'post',
      url: api,
      data: formData
    })
      .then(res => {
        const inputsState = { ...this.state };
        Object.keys(inputsState).forEach(input => {
          if (inputsState[input].err) {
            inputsState[input].err = null;
          }
        });
        inputsState.registered = true;
        this.setState({ ...inputsState });
      })
      .catch(err => {
        const input = err.response.data.input;
        const errMessage = err.response.data.message;
        const inputsState = { ...this.state };
        inputsState[input].err = errMessage;
        this.setState({ ...inputsState });
      });
  };

  render() {
    const { name, email, position, registered } = this.state;

    const inputsData = { name, email, position };
    const inputs = Object.keys(inputsData).map((input, i) => {
      return (
        <Input
          key={i}
          name={input}
          value={inputsData[input].value}
          placeholder={inputsData[input].placeholder}
          onChange={this.onChangeHandler}
          err={inputsData[input].err}
        />
      );
    });
    return (
      <div className="form-container">
        {registered ? (
          <Success in={registered} />
        ) : (
          <form onSubmit={this.onSubmitHandler}>
            {inputs}
            <button className="submit-btn" type="submit">
              שלח/י
            </button>
          </form>
        )}
      </div>
    );
  }
}
