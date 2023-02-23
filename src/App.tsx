import './App.css';
import logo from './logo.svg';
import { useAppSelector, useAppDispatch } from './store/hooks/counterhooks';
import { decrement, increment, incrementBy } from './store/slices/counter';

function App() {

  const { counter } = useAppSelector( (state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo'/>
      <p> count is: {counter}</p>
      <p>

        <button type='button' onClick={() => {dispatch(increment())}}>
          Increment

        </button>
        <button type='button' onClick={() => {dispatch(decrement())}}>
          Decrement

        </button>
        <button type='button' onClick={() => {dispatch(incrementBy(2))}}>
          Increment by 2

        </button>

      </p>


      </header>
    </div>
  );
}

export default App;
