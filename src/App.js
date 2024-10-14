import logo from './logo.svg';
import styles from './App.module.css';
import Test from './Test.js';
import { Title } from './Components';

function App() {


  return (
    <div className={styles.App}>
      <Title>{process.env.NODE_ENV}</Title>
      <Title theme="dark">{process.env.NODE_ENV}</Title>
      <img src={logo} className="App-logo" alt="logo" />
      <Test />
    </div>
  );
}
export default App;
