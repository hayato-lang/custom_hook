
import './App.css';
import { UserCard } from './components/UserCard';

const user = {
  id: 1,
  name: "勇人",
  email: "j.h.14.s.g.8@gmail.com",
  address: "ADDRESS"
};

function App() {
  return (
    <div className="App">
      <UserCard user={user}/>
    </div>
  );
}

export default App;
