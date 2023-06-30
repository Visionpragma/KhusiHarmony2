import React, { Component } from 'react';
import './Navbar.css';
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import {Navbar,Nav,Container}  from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Bloodtype } from '@mui/icons-material';



function Abc() {

    return (
     
      <Navbar className='navbar' expand='lg'>
      <Container>
      
      <Navbar.Brand href="#home" className='brand'>Khusiharmony</Navbar.Brand> 
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id="basic-navbar-nav">
      
      <Nav className='navbar-logo'>Khusiharmony</Nav>

      <Nav className='ms-auto'>
        {
        MenuItems.map((item, index)=> {
          return (
          <li key={index}>
          <a className={item.cName} href={item.url}>
          
          <i FontAwesomeIcon={item.icon}></i>{item.title}
          
          </a>
         
          </li>
          );
        
          })}
          </Nav>
         
        </Navbar.Collapse>
        
        </Container>
     
      </Navbar>
       
    );
        
}

export default Abc;