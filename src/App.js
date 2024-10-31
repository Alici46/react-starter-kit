
import './style.scss';


function App() {


  return (
    <main id="main">

      <h1 style={{ color: 'red', backgroundColor: 'black'}}>App React</h1>
      <label htmlFor='search'>Arama</label>
      <input type='text' id='search' />
      <ul>
        {/* {todos.map((todo, index) => (
          <li key={index}>
            {todo}
          </li>
        ))} */}
      </ul>
    </main>
  );
}
export default App;
