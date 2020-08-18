import React from 'react'
import logo from '../logo.svg'
import {Navbar, Container, NavbarBrand, Nav, NavItem} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'


const Header = (props) => {
    return (
        <>
            <Navbar expand='md' bg='dark' variant='dark'>
                <Container>
                    <NavbarBrand href='/'>
                        <img
                            src={logo}
                            className = 'd-inline-block align-top logo'
                            height = '50px'
                            width = '50px'
                            alt = 'logo'
                        />
                    </NavbarBrand>
                    <NavbarToggle aria-controls='reponsive-navbar-nav' />
                    <NavbarCollapse id='reponsive-navbar-nav'>
                        <Nav className='ml-auto'>
                            <NavItem>
                                <NavLink  className='nav-link' to='/' exact>Новости компании</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink  className='nav-link' to='/delovie-rebyata'>Рабочий чат</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink  className='nav-link' to='/posidelki'>Флудилка</NavLink>
                            </NavItem>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
       </>     
    )
}

export default Header