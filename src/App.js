import axios from "axios";
import "./styles.css";

export default function App() {
  const onClickUser = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const onClickUse1 = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/3")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <button onClick={onClickUser}>users</button>
      <button onClick={onClickUse1}>id=1のuser</button>
    </div>
  );
}
