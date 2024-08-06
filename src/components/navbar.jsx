import React,{useContext,useState} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

const NavBar = () => {
  const [user, setUser] = useContext(UserContext);
  const [isAuthenticated,setIsAuthenticated]=useState(user.isAuthenticated)
  const handleLogout = async () => {
    setUser({ username: "", isAuthenticated: false });
    setIsAuthenticated(false);
    localStorage.setItem("username");
  };
               
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" style={{backgroundColor:''}}>
          <a className="navbar-brand" href="#">JOBBOARD!</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to={'/home'} className="nav-link active" aria-current="page">Home</Link>
              <Link to={'/myjobs'} className="nav-link">My Jobs</Link>
              <Link to={'/setjobform'} className="nav-link">Post a Job</Link>
              {
                isAuthenticated?(<Link to={'/'} className="nav-link"> Logout</Link>)
                : (<Link to={'/signup'} className="nav-link">Sign up</Link>  
              )}
              </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;