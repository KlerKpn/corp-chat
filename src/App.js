import React, {Component} from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
import {Route} from 'react-router-dom'
import Auth from './components/Auth'
import News from './components/News'
import CorpChat from './components/CorpChat'
import DefaultChat from './components/DefaultChat'
import Header from './components/Header'


class App extends Component{
  constructor(props){
    super()
    this.state={
        auth: false,
        login: 'admin',
        password: 'qwerty',
    }
  }
  
  authHandler =(event)=>{
    const login = event.getAttribute('login')
    const password = event.getAttribute('pass')
    console.log(login ,password)
    if(login === this.state.login && password === this.state.password){
      this.setState({
        auth: !this.state.auth
      })
    } else {
      alert('Введите данные из placeholder')
      document.querySelector('#login').value=''
      document.querySelector('#password').value=''
    }
  }

  render(){
    
    return (
      <div className="App">
        {this.state.auth ? 
          <div>
            <Header />
              <Container className='wrap'>
                <Route path='/' exact component={News}/>
                <Route path='/delovie-rebyata' exact render={()=><CorpChat />}/>
                <Route path='/posidelki' exact render={()=><DefaultChat />}/>
              </Container> 
          </div>
        : 
          <center><Auth onAuth={event=>{this.authHandler(event.target)}} /></center>
        }
      </div>
    )
  }
}

export default App;
