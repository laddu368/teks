

import React from 'react'
import { data } from 'react-router-dom';
import { Link } from 'react-router-dom'
  function  fetchData() {
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve(['front-end','Back-end','Data-Base'])
    }, 2000);
  })
 
}
let dataResource={
  data:null,
  read(){
    if(this.data!==null) return this.data;
    throw fetchData().then(result =>this.data=result)

  }
};
 
 function App() {
  const app=dataResource.read();
  return (
    <div>
      
      
      <h2>My Course Data</h2>
      <ul>
        {app.map((app,index)=>(
<li key={index}>{app}</li>
        ))}
      </ul>
    </div>
  )
}

export default App







/*
//import './app.css'
//constructor/getderivedStateFromProps()/render()/ComponentDidMount()

import { createRoot } from 'react-dom/client'

function App1(){
  return(<div>
 
  </div>)
}


createRoot(document.getElementById('root')).render(<App1 />)












/*

   <Suspense fallback={<div>Loading...</div>}>
    
    <App/>
    </Suspense>

import React, { Children } from 'react'
import   { Component } from 'react'
import { useState } from 'react'
import{createPortal} from 'react-dom'

function Modal({isOpen,onClose,Children}){
  if(!isOpen) return null;

return createPortal(
  <div style={{
    position:'fixed',
    backgroundColor:'rgba(0,0,0,0.5)',
    top:0,
    bottom:0,
    right:0,
    left:0,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  }} >

    <div style={{
      background:'white',
      padding:'20px',
      borderRadius:'10px'
    }}>
      {Children}
        <h2>This is modal </h2>
        <p>this content is rendered outside the parent component</p>
      <button onClick={onClose} >close</button>

    </div>
  </div>,
  document.body


)}

function App1(){
  const [isOpen,setIsOpen]=useState(false)
  return(
    <div>
      <button onClick={()=>setIsOpen(true)}>open modal</button>
      <Modal isOpen={isOpen} onClose={()=>setIsOpen
  (false)
      }>
        <h2>This is modal </h2>
        <p>this content is rendered outside the parent component</p>
      </Modal>
    </div>
  )
}
 
 
  delHead=()=>{
    this.setState({show:false});
  }
 
   let Head;
    if (this.state.show){
      Head=<App1/>;
    }

class App1 extends Component{
  componentWillUnmount(){
    alert('The component named header will be deleted!')
  }
  render(){
    return(
      <h1>Teks Academy</h1>

    )
  }
}
  componentDidMount(){
    setTimeout(() => {
      this.setState({academy:'Kapil'})
    }, 2000);
  }
 componentDidUpdate(){
  document.getElementById('a').innerHTML='The updated academy is '+this.state.academy;
 // alert('the component academy has been updated')

 }

  
  changeAcademy=()=>{
    this.setState({academy:'coursera'})
  }
    static getDerivedStateFromProps(props,state){
    return {academy:props.academy}
  }

  static getDerivedStateFromProps(props,state){
    return {academy:props.academy}
  }
 //import React from 'react'
import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'

function Pass(){
  return <h1>You had passed the exam</h1>
}
function Fail(){
  return <h1>You had failed the exam</h1>
}
 
function App(props){
  const ispass=props.ispass;
  if(ispass){
    return <Pass/>
  }
  return <Fail/>
}




 createRoot(document.getElementById('root')).render(<App ispass={true} />)
export default App

 function App () {
      const click=(a,b)=>{
      alert(b.type)
    };

  
  
    return (
      <div>index
          <br/>
        <button onClick={(event)=>click('Hurray Teks Academy!',event)}  >click  </button>
        <h1>STATE</h1>
      </div>
    )
  }
    constructor(props){
      super(props);
      this.state={
        name:'Teks Academy',
        branch:'Ameerpet',
        batch:'Full-stack-java',
        year:2025
      }
    }
    changeBranch=()=>{
      this.setState({branch:'Kukatpally'})
    }
course='Full stack java' joinedy={2025}state="AP&TS" name={z}  person={y}
 let z=[2002,20004,2022];
 let  y={fnm:'sai',lnm:'kumar'}
   <h4>i joined in Teks Academy for {course},{state},{rest.joinedy}</h4>
everyoned joined in {obj.joinedy},everyone belongs to either{obj.state},one of the student name is {obj.name[0]} ,{obj.name[1]} ,{obj.name[2]},{obj.person.fnm} ,{obj.person.lnm}
 function Sai(){
  return (
    <div>
      <h2>this is certified by?</h2>
      <App course='IIT' />
    </div>
  )
 }
 
 
App course='Full stack java' joinedy={2025}state="AP&TS" name={z}  person={y}

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
 
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



*/

 //import React from 'react'
 import { createRoot } from 'react-dom/client'

  function App(obj) {
   return (
    <div>
    <h4>i joined in Teks Academy for {obj.course}</h4>
    </div>
   )
 }
 createRoot(document.getElementById('root')).render(<App course='Full stack java' />)
export default App

 */