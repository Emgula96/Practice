import React from 'react'
import { useState } from 'react'

const RepositoryCard = ({ repo, showRepos }) => {
  const [keys, setKeys] = useState([]);
  const [hasFetched, setHasFetched] = useState(false);

  const getLanguages = async (repo) => {
    const data = await fetch(`${repo.languages_url}`);
    const usableData = await data.json();
    console.log(usableData);
    const listOfkeys = Object.keys(usableData);
    setKeys(listOfkeys);
    setHasFetched(true);
  };

  if (!hasFetched) {
    getLanguages(repo);
  }

  return (
    <>
      {showRepos === true && (
        <article id='repoCard'className="w-5/6 p-5 bg-[#293449] rounded-lg shadow shadow-gray-300">
          <img className="w-20 h-20 rounded-full shadow" src={repo?.owner?.avatar_url} alt={repo?.owner?.login}></img>
          <h2 className="text-[#738094]">Owner: {repo?.owner?.login}</h2>
          <h1 className="text-white text-3xl font-bold">{repo?.name}</h1>
          {repo.private ? (
            <p className="bg-rose-400 py-1 px-2 text-xs text-white shadow rounded-lg inline block">Private</p>
          ) : (
            <p className="bg-emerald-400 py-1 px-2 text-xs text-white shadow rounded-lg inline block">Public</p>
          )}
          {keys?.map((key) => (
            <p className="bg-emerald-400 py-1 px-2 text-xs text-white shadow rounded-lg inline block">{key}</p>
          ))}
          <p>{repo.description}</p>
          <a href={repo.url}>View Repo</a>
        </article>
      )}
    </>
  );
}

export default RepositoryCard