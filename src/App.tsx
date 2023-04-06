import './App.css';
import { useAppSelector } from './app/hooks';

function App() {
  const { user } = useAppSelector((state) => ({
    person: state.person,
    user: state.user,
    is: state.counter.posts,
  }));

  return <div className='App'>{JSON.stringify(user)}</div>;
}

export default App;
