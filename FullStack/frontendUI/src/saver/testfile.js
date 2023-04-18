import React, { useState,useEffect } from 'react';
import axios from 'axios'
import * as ReactBootStrap from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
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

import Budget from './budget';



function Testfile() {

//     const [posts,setPosts] = useState({blogs: []})
//     useEffect(()=> {
//         const fetchPostList = async() =>{
//             const {data} = await axios("https://jsonplaceholder.typicode.com/users")
            
//             setPosts({blogs:data})
//             console.log(data)
//         }
//         fetchPostList()
//     },[setPosts])
// return(
//     <Table striped bordered hover>
//       <thead>
//         <tr>

//           <th>Budget Number</th>
//           <th>Budget Name</th>
//           <th>Total Budget</th>
//         </tr> 
//       </thead>
//       <tbody>
//         {
//            posts.blogs && posts.blogs.map((item)=>(
//             <tr key = {item.id}>
//             <td>{item.id}</td>
//             <td>{item.name}</td>
//             <td>{item.address.geo.lat}</td>
//           </tr>
//            )) 
//         }
//       </tbody>
//     </Table>
// )
const [data, setData] = useState(null);

useEffect(() => {
  async function fetchData() {
    const response = await fetch("http://localhost:3000/api/getBudget");
    const jsonData = await response.json();
    setData(jsonData);
  }
  fetchData();
}, []);

if (!data) {
  return <div>Loading data...</div>;
}
const name1 = localStorage.getItem('name1');
const cost1 = localStorage.getItem('cost1');
const rent1 = localStorage.getItem('rent1');
const book1 = localStorage.getItem('book1');
const wage1 = localStorage.getItem('wage1');
const scholar1 = localStorage.getItem('scholar1');

if(name1==null){ 
  data.name=name1;
}
if (cost1!=null){// we get the default values
  data.name=name1;
  data.address = cost1; // this is actually addres butthis is temp
  data.rent=rent1;
  data.textbookcost = book1;
  data.payrate = wage1;
  data.grant = scholar1;
}
var money = (Number(localStorage.getItem("cost1"))/-6) - Number(localStorage.getItem("rent1")) - (Number(localStorage.getItem("book1"))/6) + (Number(localStorage.getItem("wage1"))*4) + (Number(localStorage.getItem("scholar1"))/6);
var alert;
if (money > 0) {
  alert = <Alert key='success' variant='success'>
  You have a monthly gain of +${money.toFixed(2)}!
</Alert>;
} else {
  alert = <Alert key='danger' variant='danger'>
  You have a monthly loss of -${money.toFixed(2)}.
</Alert>;
}
return (
  
  <div>
    <h1>My Data</h1>
    <p>{data.name}</p>
    <p>{data.address}</p>
    <p>{data.rent}</p>
    <p>{data.textbookcost}</p>
    <p>{data.payrate}</p>
    <p>{data.grant}</p>
    <>
    
    {alert}
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>{data.name}</th>
          <th>Budget Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tuition</td>
          <td>-${data.address}</td>
        </tr>
        <tr>
          <td>Monthly Rent</td>
          <td>-${data.rent}</td>
        </tr>
        <tr>
          <td>Textbooks</td>
          <td>-${data.textbookcost}</td>
        </tr>
        <tr>
          <td>Weekly Wage</td>
          <td>+${data.payrate}</td>
        </tr>
        <tr>
          <td>Scholarship</td>
          <td>+${data.grant}</td>
        </tr>
      </tbody>
    </Table>
    </>
  </div>
);
}

export default Testfile;
