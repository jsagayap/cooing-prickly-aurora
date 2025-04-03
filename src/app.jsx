import { useState } from "react";
import * as confetti from "canvas-confetti";
import "./app.css";
import FormInput from "./components/FormInput";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });
  const [show, setShow] = useState(false);
  
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username must have at least 3-16 characters long, and should have no special characters",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email address",
      errorMessage: "Must be a valid email address",
      label: "Email address",
      required: true,
    },
    {
      id: 3,
      name: "firstName",
      type: "text",
      placeholder: "First name",
      errorMessage: "Field is required",
      label: "First name",
      required: true,
    },
    {
      id: 4,
      name: "lastName",
      type: "text",
      placeholder: "Last name",
      errorMessage: "Field is required",
      label: "Last name",
      required: true,
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password must have at least 6 characters long, at least one number and special character",
      pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,100}$",
      label: "Password",
      required: true,
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm password",
      errorMessage: "Passwords don't match",
      pattern: values.password,
      label: "Confirm password",
      required: true,
    },
  ]
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
    
    var myCanvas = document.createElement('canvas');
    document.body.appendChild(myCanvas);
    var myConfetti = confetti.create(myCanvas, {
      resize: true
    });
    myConfetti();
  };
  
  const reloadPage = () => {
    window.location.reload();
  };
  
  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value });
  };
  
  return (
    <div className="app">
      { show ?
      <div className="success">
        <h1>Success!</h1>
        <p>Yay, you now have a new account! Just kidding.</p>
        <button onClick={reloadPage}>Reload this page</button>
      </div>
       :
       <form onSubmit={handleSubmit}>
        <h1>Create account</h1>
        <small>Made by <a href="https://glitch.com/@jsagayap" target="_blank">Jericho Sagayap</a></small>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
        ))}
        <button>Create my account!</button>
      </form>
      }
    </div>
  );
};

export default App;