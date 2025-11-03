import React, { use, useContext } from 'react'
import { createRoot } from 'react-dom/client'
import {  useState,useMemo } from 'react'
//const UserContext=createContext();
 const App=()=>{
  const [count,setCount]=useState(0);
  const[todo,setTodo]=useState([]);
  const cal=useMemo(()=>expCal(count),[count])
  const increment=()=>{
    setCount((c)=>c+1);

  };
  const addTodo=()=>{
    setTodo((t)=>[...t,'New Todo']);
  }
 
  
 
  return (
    <div >
      <h2>TODO LIST</h2>
      {todo.map((todo,index)=>{
        return <p key={index}>{todo}</p>
      })} 
      <button onClick={addTodo}>addtodo</button>
      <h2>expcal</h2>
       Count:{count}
       <button onClick={increment}>+</button>
     

    </div>
  )
}
const expCal=(num)=>{
  console.log('caluclating')
  for(let i=0;i<100000;i++){
    num+=1
  }
  return num;
}
 
createRoot(document.getElementById('root')).render(<App/>)


export default App
/*
    <input type='text' value={val} onChange={(e)=>setVal(e.target.value)} />
      <h1>Render Count:{count.current}</h1>
     
      


import React, { use, useContext } from 'react'
import { createRoot } from 'react-dom/client'
import {  useReducer } from 'react'
//const UserContext=createContext();

const intialScore=[
  {
    id:1,
    score:0,
    name:"Suresh"
  },
  {
      id:2,
    score:0,
    name:"Sowmya"

  },
];
 const reducer=(state,action)=>{
  switch(action.type){
    case 'INCREASE':
      return state.map((player)=>{
        if( player.id===action.id){
          return {...player,score:player.score+1}
        }else{
          return player;
        }
      });
      default:
        return state;
  }
 }
 function App() {
 const [score,dispatch]=useReducer(reducer,intialScore);
 const handleIncrease=(player)=>{
dispatch({type:'INCREASE',id:player.id})
 }
  return (
    <div > 
      <h1>sai</h1>
      {score.map((player)=>{
        <div key={player.id}>
          <label>
            <input type='button' onClick={()=>handleIncrease(player)} value={player.name}/>
            {player.score}
          </label>
        </div>
      })}
      
     

    </div>
  )
}

 
createRoot(document.getElementById('root')).render(<App/>)


export default App




function  App2(){
  return(<>
     <h1>APP2</h1>
     <App3  />
     

  </>)
}
function  App3(){
  const user=useContext(UserContext);
  return(<>
   
    <h2>hello Apirant{user},welcome again</h2>
     

  </>)
}
useEffect(()=>{
  let timer=setTimeout(() => {
    setCount((count)=>count+1)
  }, 1000);
  return ()=>clearTimeout(timer)
},[])

      <h1>Count: {count}</h1>
      <button onClick={()=>setCount((c)=>count+1)}>+</button>
      <h1>Prev:{prev}</h1>
  
 
const[prev,setPrev]=useState(0)
useEffect(()=>{
  setPrev(()=>count*2);
},[count])

    <h1>my name is{model.name},my doj is{model.year},my contact is{model.contact},my id is{model.id},i enrolled for {model.model}</h1>
      <button onClick={updateModel}>change model</button>
      <h1> i had joined for {ctype}</h1>


           <button type='button' onClick={()=>{setCtype('IIT')}}>set ctype1</button>
             <button type='button' onClick={()=>{setCtype('Job oriented')}}>set ctype2</button>
               <button type='button' onClick={()=>{setCtype('Internsip')}}>set ctype3</button>
             <br/>
             
      <h1>I Had Recently Joined In  {course}</h1>
     
                <button type='button' onClick={()=>{setCourse('Kapil')}}>set ctype1</button>


      <button type='button' onClick={()=>{setCourse('Kapil')}}>change academy</button>
      <button type='button' onClick={()=>{setCourse('Coursera')}}>change academy</button>
       <button type='button' onClick={()=>{setCourse(' unacademy')}}>change academy</button>
           <button type='button' onClick={()=>{setCourse('Khan Academy')}}>change academy</button>


  const [course,setCourse]=useState('Teks Academy')
  const [ctype,setCtype]=useState('Normal')
  const [model,setModel]=useState({
    name:'kumar',
    year:2025,
    contact:987654567,
    id:'TKH544546',
    model:'fullstackjava'
  })
  const updateModel=()=>{
    setModel(previousState=>{
      return{...previousState,model:'full-stack-python'}
    })
  }

*/ 