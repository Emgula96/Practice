import { useEffect } from "react";
import "../CSS/profile.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Profile = ({ singleUser, setRepos, username, foundUser, showRepos, setShowrepos, page, setPage }) => {

  useEffect(() => {
    searchRepos()
  }, [page])
  
  const searchRepos = async () => {
    const headers = {
      Authorization: ``,
    };
    const url = `https://api.github.com/users/${username}/repos?page=${page}&per_page=10&sort=updated`;
    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });
    const result = await response.json();
    setRepos(result);
  };

  const handleShowRepos = (e) => {
    e.preventDefault();
    searchRepos();
    setShowrepos(!showRepos);
  };
  const incrementPage = () => {
    if (page) {
      setPage(page + 1);
      console.log(page);
    }
  };
  const decrementPage = () => {
    if (page > 1) {
      setPage(page - 1);
      console.log(page);
    } else {
      toast.error("On page 1", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      {foundUser && (
        <div className="bg-[#293449] md:flex shadow-lg xs:w-1/2 mx-6 md:mx-auto my-40 max-w-lg md:max-w-4xl h-128 rounded-lg shadow shadow-gray-100">
          <img className="h-full w-full md:w-1/3 object-cover rounded-lg rounded-r-none pb-5/6" src={singleUser.avatar_url} alt={singleUser.login} />
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
                {!showRepos ? (
                  <button className="bg-[#738094] text-emerald-500 px-4 py-2 rounded mr-auto hover:underline mt-5 hover:bg-gray-500" onClick={handleShowRepos}>
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
      {showRepos && (
        <div>
          <p className="text-white underline" onClick={decrementPage}>
            Prev Page
          </p>
          <p className="text-white underline" onClick={incrementPage}>
            Next Page
          </p>
        </div>
      )}
    </>
  );
};

export default Profile;
