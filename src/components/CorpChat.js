import React, { Component } from 'react'
import Contacts from './Contacts'
import {Button, Modal } from 'react-bootstrap'

class Corp extends Component{
    constructor(){
        super()
        this.state={                                            // location false === from another user
            messages:[
                {user: 'This name', content:'Мы очень старательно работаем', location: true},
                {user: 'Big Boss', content:'Отлично', location: false},
                {user: 'This name', content:'Нужно больше золота', location: true},
                {user: 'Хранитель БД', content:'Помогите у меня код не работает', location: false},
                {user: 'Сын маминой подруги', content:'ты забыл ;', location: false},
                {user: 'This name', content:'Ребят какие у нас задачи на сегодня?', location: true},
                {user: 'Капатель', content:'42', location: false},
                {user: 'American agent', content:'в час дня все в зале собираемся, нужно обсудить дальнейшие планы', location: false}
            ],
            currentMessage:'',
            modal: false,
            editModal:'',
            editIndex: null
        }
    }

    handlerSend = async ()=>{
        let mes = {}
        mes = {user:'This name', content: this.state.currentMessage, location: true}
        const data = [...this.state.messages]
        data.push(mes)
        await this.setState({      // вынужденая мера (await)
            messages: data
        })
        localStorage.setItem('corpData', JSON.stringify([...this.state.messages]))
        console.log(localStorage.getItem('corpData'));
        document.querySelector('#message-input').value =''
    }

    componentDidMount(){
       if(localStorage.getItem('corpData') !== null || undefined){
        let kek =localStorage.getItem('corpData')
        this.setState({
            messages: JSON.parse(kek)
        })
       } else {
           localStorage.setItem('corpData', JSON.stringify([...this.state.messages]))
           throw new Error('localStorage crash, try to reload page')  
       }
    }

    editHandler = (event, index)=>{
        this.setState({ modal: !this.state.modal})
        const data = [...this.state.messages]
        this.setState({ editModal: data[index].content, editIndex: index})
    }

    editSave = async ()=>{
        const modal = this.state.editModal
        const index = this.state.editIndex
        const data = [...this.state.messages]
        data[index].content = modal
        await this.setState({      
            messages: data
        })
        localStorage.setItem('corpData', JSON.stringify([...this.state.messages]))
        this.setState({modal: !this.state.modal})
    }

    editDelete = async ()=>{
        const index = this.state.editIndex
        let data = [...this.state.messages]
        data.splice(index, 1)
        await this.setState({      
            messages: data
        })
        localStorage.setItem('corpData', JSON.stringify([...this.state.messages]))
        this.setState({modal: !this.state.modal})
    }

    render(){
       
        const messages = this.state.messages
        return(
            <div className='main-page'>
                <Modal show={this.state.modal}>
                    <Modal.Header>Редактировать / удалить сообщение</Modal.Header>
                        <Modal.Body>
                            <p>Your message:</p>
                            <textarea onChange={event => this.setState({editModal: event.target.value})} value={this.state.editModal} className='text-area' />
                        </Modal.Body>
                        <Modal.Footer>
                            <button onClick={()=> this.setState({modal: !this.state.modal})}>Отмена</button>
                            <Button onClick={this.editDelete}>Удалить</Button>
                            <Button onClick={this.editSave}>Редактировать</Button>
                        </Modal.Footer>
                </Modal>
                <Contacts />
                <div className='message-area'>
                    <div className='messages'>
                        {messages.length ? 
                            messages.map((item, index)=>{
                                return (
                                    <div className='message' key={index} >
                                        {item.location ?
                                            <div className='mesT' onDoubleClick={event =>{this.editHandler(event, index)}}>
                                                <small>{item.user}</small> 
                                                <span>{item.content}</span>                                             
                                            </div>
                                        : 
                                            <div className='mesF'>
                                                <small>{item.user}</small> 
                                                <span>{item.content}</span>                                             
                                            </div>
                                        }
                                    </div>
                                )
                            })
                        : null}
                    </div>

                    <div className='textarea'>
                        <textarea className='text-area' id='message-input' onChange={event => this.setState({currentMessage: event.target.value})} style={{resize: 'none'}}></textarea>
                        <button className='btn btn-primary' onClick={this.handlerSend}>Send</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default Corp