import {useState , useEffect} from 'react';
import './App.css';

function App() {

  const [text, setText] = useState('');

  const [count, setCount] = useState(0);

  function textHandler(event) {
    setText(event.target.value);
    console.log(text);
  }

  function countHandler() {
    setCount(count+1);
    console.log(text);
  }

  // agar me kux task perform krvana chahta hu render hone ke baad -> use useEffect
  // handle sideEffect -> particular function ko fulfil krne hai
  // for ex -> api call, etc...

  // mount -> dom pr render ho gaya 
  
  // useEffect(() => {
  //   console.log('UI rendered')
  // });

  // useEffect(() => {
  //   console.log('UI rendered')
  // }, []);

  // useEffect(() => {
  //   console.log('UI rendered')
  // }, [count]);

  useEffect(() => {
    console.log('add listener') // then this run -> B

    return( () => {
      console.log('remove listener') // first this run -> A
    })
  }, [count]);
  
  return (
    <div className='App'>
      <input type="text" onChange={textHandler}/>
      <div>{count}</div>
      <button onClick={countHandler}>countHandler</button>
    </div>
  );
}

export default App;
