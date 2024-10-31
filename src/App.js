
import { createElement } from 'react';
import './style.scss';


function App() {

  const name = 'Yemliha';
  const todos = ['Yapılacak 1', 'Yapılacak 2', 'Yapılacak 3'];
  // const ul = createElement('ul', null, todos.map((todo, index) => createElement('li', { key: index }, todo)));
  // const style = { color: 'red', backgroundColor: 'black' }; /*Bu yöntemde kullanılabilir.*/
  /*React jsx de class > className, tabindex > tabIndex, style objesinin içindeki birleşik isimler ise background-color > backgrounColor, onclick > onClick
  gibi camelCase yazılır. */
  /*React jsx de style objesi içindeki değerler string olarak yazılmaz.*/

  const searchFunction = () => {
    alert('Arama yapılıyor...');
  }

  return (
    <>
      <h1 style={{ color: 'red', backgroundColor: 'black' }}>App React</h1>
      <label htmlFor='search' tabIndex="2" onClick={searchFunction}>Arama</label>
      <input type='text' id='search' tabIndex="1" />
      <ul>
        {name && <li>{name + ' Alıcı'.toUpperCase()}</li>}
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
