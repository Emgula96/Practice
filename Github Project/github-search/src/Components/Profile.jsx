import axios from "axios";
import '../CSS/profile.css'
const Profile = ({ singleUser, setRepos,username, foundUser, showRepos, setShowrepos }) => {
  

  const searchRepos = () => {
    axios({
      method: "get",
      url: `https://api.github.com/users/${username}/repos?page=1&per_page=6&sort=updated`,
    }).then((res) => {
      setRepos(res.data);
    });
  }
  const handleShowRepos = (e) => {
    e.preventDefault();
    searchRepos();
    setShowrepos(!showRepos)
  };

  return (
    <>
      {foundUser === true && (
        <div className="md:flex shadow-lg  mx-6 md:mx-auto my-40 max-w-lg md:max-w-4xl h-128 rounded-lg shadow shadow-gray-100">
          <img className="h-full w-full md:w-1/3  object-cover rounded-lg rounded-r-none pb-5/6" src={singleUser.avatar_url} alt={singleUser.login} />
          <div id="cardInfoContainer" className="px-6 py-4">
            <div id="topOfCard">
              <div className="text-white font-bold text-xl mb-2">{singleUser.login}</div>
              <p className="text-[#738094] pt-5">{singleUser.bio}</p>
            </div>
            <div id="bottomOfCard">
              <div className="descriptors">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-0">Public Repos {singleUser.public_repos}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-0">Followers {singleUser.followers}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-0">Following {singleUser.following}</span>
                {showRepos === false ? (
                  <button className="bg-[#738094] text-emerald-500 px-4 py-2 rounded mr-auto hover:underline mt-5" onClick={handleShowRepos}>
                    Show Repos
                  </button>
                ) : (
                  <button className="bg-[#738094] text-red-500 px-4 py-2 rounded mr-auto hover:underline mt-5" onClick={handleShowRepos}>
                    Hide Repos
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile