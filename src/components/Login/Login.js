import { Component } from "react"
import './Login.css'
import { connect } from "react-redux" 
import { setAuthUser } from "../../store/actions/authedUsers"
import { Dropdown } from 'semantic-ui-react'

class Login extends Component{

    state = {
        value : '',
    }

    onChange = (e,{ value }) => {
        this.setState({ value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { setAuthUser } = this.props;
        const authUser = this.state.value;

        new Promise((res, rej) => {
          setTimeout(() => res(), 500);
        }).then(() => setAuthUser(authUser))
        .catch((err) => {console.log(err)})
    };
    
    generateUsers = () =>{
        const { users } = this.props
        return users.map(user => ({
          key: user.id,
          text: user.name,
          value: user.id,
          image: { avatar: true, src: user.avatarURL.slice(6,user.avatarURL.length)}
        }));
    }

    render(){
        const { value } = this.state
        const disabled = value === '' ? true:false; 
        return (
            <div className="login-form">
                {console.log(this.state.value)}
                <div className="login-form-content col-sm-12 col-md-5">
                    <div className="pt-3 form-title">
                        <h5 className="m-0">Welcome to the Would You Rather App!</h5>
                        <p>Please sign in to continue</p>
                    </div>
                    
                    <img alt="react logo" src="/logo512.png"/>
                    <div className="text-center">
                        <h3 className="text-info">Sign In</h3>
                    </div>
                    <form className="p-3" onSubmit={this.handleSubmit}>
                        <Dropdown
                            placeholder='Select User For Signing In'
                            fluid
                            selection
                            options={this.generateUsers()}
                            onChange={this.onChange}
                        />
                        <button className="my-3 btn btn-info col-12 text-light" disabled={disabled}>Login</button>
                    </form>

                </div>
            </div>
        )
    }
}

function mapStateToProps({ users }){
    return {
        users: Object.values(users)
    }
}

export default connect(mapStateToProps,{ setAuthUser })(Login);