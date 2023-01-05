import React from 'react'
import { useState } from 'react'

const RepositoryCard = ({ repo, showRepos }) => {
  const [keys, setKeys] = useState([]);
  const [hasFetched, setHasFetched] = useState(false);

  const getLanguages = async (repo) => {
    const data = await fetch(`${repo.languages_url}`);
    const usableData = await data.json();
    const listOfkeys = Object.keys(usableData);
    setKeys(listOfkeys);
    setHasFetched(true);
  };

  if (!hasFetched) {
    getLanguages(repo);
  }
  console.log(repo)
  return (
    <>
      {showRepos && (
        <article id="repoCard" className="w-5/6 p-5 bg-[#293449] rounded-lg shadow shadow-gray-300">
          <div id="articleContainer">
            <div id="top-of-repo-card">
              {/* <img className="w-20 h-20 rounded-full shadow" src={repo?.owner?.avatar_url} alt={repo?.owner?.login}></img> */}
              <h1 className="text-white text-3xl font-bold mt-5">{repo?.name}</h1>
              <h2 id="cardItem" className="text-[#738094] mt-5">
                Owner: {repo?.owner?.login}
              </h2>
              {repo.private ? (
                <p id="cardItem-bubbles" className="bg-rose-400 py-1 px-2 text-xs text-white shadow rounded-lg inline block">
                  Private
                </p>
              ) : (
                <p id="cardItem-bubbles" className="bg-emerald-400 py-1 px-3 text-s text-white shadow rounded-lg inline block">
                  Public
                </p>
              )}
              {keys?.map((key) => (
                <p id="cardItem-bubbles" className="bg-emerald-400 py-1 px-2 text-s text-white shadow rounded-lg inline block">
                  {key}
                </p>
              ))}
              <p id="cardItem" className="text-m text-white">
                {repo.description}
              </p>
            </div>
            <div id="bottom-of-repo-card">
              <a id="cardItem" className="text-[#0CA5E9] underline" target="_blank" rel="noopener noreferrer" href={repo.svn_url}>
                Link to Repo
              </a>
            </div>
          </div>
        </article>
      )}
    </>
  );
}

export default RepositoryCard