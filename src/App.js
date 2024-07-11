import "./App.css";
import Input from "./components/Input/index";
import Button from "./components/Button/index";

function App() {
  return (
    <div className="App">
      <h2>Create your account</h2>
      <p>Or sign in to your existing account</p>
      <Input label="Name" />
      <Input label="Email address" />
      <Input label="Password" />
      <Button label="Sign Up" />
    </div>
  );
}

export default App;
