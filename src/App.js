import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { increment, decrement, login } from "./actions"

function App() {
  const counter = useSelector((state) => state.counter)
  const isLogin = useSelector((state) => state.isLogin)

  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>hello redux</h1>
      <h3>カウント：{counter}</h3>
      <button onClick={() => dispatch(increment(10))}>＋</button>
      <button onClick={() => dispatch(decrement())}>ー</button>
      {isLogin ? <h3>ログインに成功!</h3> : <h3>ログインしてください</h3>}
      <button onClick={() => dispatch(login())}>ログイン / ログアウト</button>
    </div>
  );
}

export default App;
