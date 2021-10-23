import { Component } from "react";
import { connect } from 'react-redux'
import { setAuthUser } from '../../store/actions/authedUsers'
import './Navbar.css'

class Navbar extends Component{

    hundleLogout = e =>{
        e.preventDefault();
        const { setAuthUser } = this.props;
        setAuthUser(null)
    }
    
    render(){
        const {authUser, users} = this.props;
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light rounded" aria-label="Eleventh navbar example">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarsExample09">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href={"/"}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={"/"}>New Poll</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={"hh"}>Leader Board</a>
                            </li>
                        </ul>
                        
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item me-5">
                                <img className="mx-2" alt="myImage" src={users[authUser].avatarURL} width="35" height="35"/>
                                <strong>{users[authUser].name}</strong>
                            </li>
                            <li className="nav-item">
                                <button onClick={this.hundleLogout} className="nav-link btn btn-outline-primary">Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({ users, authUser }) {
    return {
      authUser,
      users
    };
  }
  

export default connect(mapStateToProps,{setAuthUser})(Navbar);
