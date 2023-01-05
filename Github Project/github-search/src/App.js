import './CSS/App.css';
import { useState, useEffect } from 'react';
import RepositoryCard from './Components/RepositoryCard';
import Profile from './Components/Profile';
import "react-toastify/dist/ReactToastify.css";
import SearchBar from './Components/SearchBar';

const App =() => {
  const [singleUser, setSingleUser] = useState('')
  const [username, setusername] = useState('')
  const [repos, setRepos] = useState([])
  const [foundUser, setFoundUser] = useState(false);
  let [showRepos, setShowrepos] = useState(false);

  useEffect(() => {
    setRepos([])
  }, [singleUser])
  
  
  return (
    <>
      <div id="top-container">
        <SearchBar setSingleUser={setSingleUser} setusername={setusername} setFoundUser={setFoundUser} username={username} setShowrepos={setShowrepos} />
        <Profile setShowrepos={setShowrepos} showRepos={showRepos} foundUser={foundUser} singleUser={singleUser} setRepos={setRepos} repos={repos} username={username} />
      </div>
      <div className="results-container">
        <div id="repoCards" className="grid grid-cols-1 gap-5 md: grid-cols-2 lg:grid-cols3 mt-10 place-items-center">
          {repos?.map((repo) => (
            <RepositoryCard key={repo.id} repo={repo} showRepos={showRepos} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
