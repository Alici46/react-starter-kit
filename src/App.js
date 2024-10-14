import logo from './logo.svg';
import styles from './App.module.css';
import Test from './Test.js';
import { Title } from './Components';
import Bootstrap from './Bootstrap';

function App() {


  return (
    <div className={styles.App}>
      <Title>{process.env.NODE_ENV}</Title>
      <Title theme="dark">{process.env.NODE_ENV}</Title>
      <img src="/logo512.png" className="App-logo" alt="logo" />
      <Test />
      <Bootstrap />
    </div>
  );
}
export default App;
