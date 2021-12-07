
import axios from 'axios';
import { User } from './api/user';
import './App.css';
import { useState } from "react";
import { UserCard } from './components/UserCard';
import { UserProfile } from './types/UserProfile';

const user = {
  id: 1,
  name: "勇人",
  email: "j.h.14.s.g.8@gmail.com",
  address: "ADDRESS"
};

function App() {
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([])
  const onClickFetchUser = () => {
    axios.get<Array<User>>("https://jsonplaceholder.typicode.com/users").then(() => {})
  }
  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <UserCard user={user}/>
    </div>
  );
}

export default App;
