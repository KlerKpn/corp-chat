import React from 'react'

class Auth extends React.Component{

    constructor(props){
        super()
        this.state={
            login: '',
            pass: ''
        }
    }
    
    render(){
        return(
            <div className='Auth'>
                <span>Вход</span>
                <input type='text' id='login' onChange={event => this.setState({login: event.target.value})} placeholder='admin' required />
                <input type='password' id='password' onChange={event => this.setState({pass: event.target.value})} placeholder='qwerty' required />
                <button className='btn btn-primary' onClick={this.props.onAuth} login={this.state.login} pass={this.state.pass}>Вход</button>
            </div>
        )
    }
}

export default Auth