import React, { useEffect } from 'react';
import { Icon } from '../../atoms/Icons';
import "./index.scss";
import logo from "./../../../assets/tv.png";
// import { useHistory } from "react-router-dom";

export const NavBar = () => {
  // const [filter, setFilter] = useState("");
  // const history = useHistory();

  // const handleInputChange = (e) => {
  //   setFilter(e.target.value);
  // };

  // useEffect(() => {
  //   const searchResult = localStorage.getItem("searchText")

  //   if (searchResult) {
  //     setFilter(searchResult);
  //   }
  // }, []);

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   if (filter) {
  //     localStorage.setItem("searchText", filter);

  //     history.push("/search", { state: value, replace: true });
  //   }

  //   setFilter("");


  // };

  return (
    <nav className='navbar flex justify-between items-center mx-24 max-[980px]:mx-10 max-[500px]:mx-4 '>
      <div className='logo flex items-center'>
        <img src={logo} />
        <p className='logo-name'>MovieBox</p>
      </div>
      <div className='search'>
        <form >
          <input type='search' className='input' placeholder='What do you want to watch' id="search" />
        </form>
        <Icon name="search" className="search-icon " />
      </div>
      <div className='signin-menu flex items-center'>
        <p className='sign-in'>Sign in</p>
        <Icon name="menu" />
      </div>
    </nav>
  )
}
