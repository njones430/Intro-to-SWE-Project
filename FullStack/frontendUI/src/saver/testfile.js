import React, { useState,useEffect } from 'react';
import axios from 'axios'
import * as ReactBootStrap from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import ReactDOM from 'react-dom';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

function Testfile() {
    const [posts,setPosts] = useState({blogs: []})
    useEffect(()=> {
        const fetchPostList = async() =>{
            const {data} = await axios("https://jsonplaceholder.typicode.com/users")
            
            setPosts({blogs:data})
            console.log(data)
        }
        fetchPostList()
    },[setPosts])
return(
    <Table striped bordered hover>
      <thead>
        <tr>

          <th>Budget Number</th>
          <th>Budget Name</th>
          <th>Total Budget</th>
        </tr> 
      </thead>
      <tbody>
        {
           posts.blogs && posts.blogs.map((item)=>(
            <tr key = {item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.address.geo.lat}</td>
          </tr>
           )) 
        }
      </tbody>
    </Table>
)
}

export default Testfile;