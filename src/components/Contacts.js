import React, { Component } from 'react'

class Contacts extends Component{

    constructor(props){
        super()
        this.state={
            contacts:[{name: 'Anya', Secondname:'Goncharova'},
                      {name: 'Big', Secondname:'Boss'},
                      {name: 'Ivan', Secondname:'Grozni'},
                      {name: 'Vlad', Secondname:'A4'},
                      {name: 'Iron', Secondname:'Man'},
                      {name: 'Harry', Secondname:'Potter'},
                      {name: 'Toxic', Secondname:'Gamer'},
                      {name: 'Tapo4ek', Secondname:'xxX2008Xxx'},
                      {name: 'This', Secondname:'Name'}]
        }
    }

    render(){
        const items = this.state.contacts
        let list = null
        if(items.length){
            list = items.map((item, index)=>{
                return (
                    <div key={index} className='users'>
                        <span>{item.name}</span>
                        <span>{item.Secondname}</span>
                    </div>
                )
            })
        }
        return(
            <div className='contacts-list users'>
                <h3>Contacts</h3>
                {list}
                <div className='users'><span>Add new user +</span></div>
            </div>
        )
    }
}

export default Contacts