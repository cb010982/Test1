import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Login  />
    </div>
  );
}


function Login(props) {
  //use props to get the input from dropdown
  const choice = props.value; //value will be passed from dropd
  let str = "";
  switch (choice) {
    case "1":
      str = <h2>Donor Login </h2>;
      break;
    case "2":
      str = <h2>BloodBank Login</h2>;
      break;
    case "3":
      str = <h2>Hospital Login </h2>;
      break;
    case "4":
      str = <h2>Administrator Login</h2>;
      break;
    default:
      return (
        <div>
          <p>Something went Wrong. Please go back or refresh the page.</p>
        </div>
      );
  }

  return (
    <div className={styles.form}>
      <div>{str}</div>
      <div>
        <label for="username">Username :</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label for="pwd">Password :</label>
        <input type="password" id="pwd" />
      </div>
      <div>
        <button id="btnLogin">Login</button>
      </div>
    </div>
  );
}

Login.defaultProps = {
  value: "0",
};
export default Login;
