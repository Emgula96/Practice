import React from 'react'
import "../CSS/App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SearchBar = ({setRepos,setPage,username,setShowrepos,setFoundUser, setSingleUser, setusername}) => {
const searchUsers = async () => {
    const headers = {
      Authorization: ``,
    };
    const url = `https://api.github.com/users/${username}`;
    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });
    const res = await response.json()
    console.log(res)
    if (res.id) {
        setSingleUser(res)
        setFoundUser(true);
    }
    else if (res.message === 'Not Found') {
        toast.error("USER NOT FOUND", {
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
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setRepos([])
        setPage(1)
        searchUsers();
        setShowrepos(false);
    };
    

return (
<>
    <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
    <h1 className="text-white text-3xl font-bold underline">Github Search</h1>
    <form className="w-full max-w-sm mt-10">
    <div className="flex items-center border-b border-teal-500 py-2">
        <input
        className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => {
            setusername(e.target.value);
        }}
        />
        <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit" onClick={handleSubmit}>
        Search
        </button>
    </div>
    </form>
</>
);
}

export default SearchBar