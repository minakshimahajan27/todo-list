import React, { useState } from 'react'
import './app.css'
import User from './components/user';

function App() {
  const[activity,setactivity]=useState('')
  const[listdata,setlistdata]=useState([])
  const[title,settitle]=useState('')
  const[Description,setDescription]=useState('')


  function handletitlechange(e){
    settitle(e.target.value)
  }
function handleDescriptionchange(e){
      setDescription(e.target.value)
    }
    function handleActivityChange(e) {
         setActivity(e.target.value);
        }
      
  function addactivity(){
    if(title && Description)
      setlistdata((listdata)=>
    [...listdata,{title,Description}]);
      settitle('')
      setDescription('')
  }

   function removelist(index){
    setlistdata(listdata=>listdata.filter((_,i)=>i!==index));
   }

  return (
    <div className="body-con">
        <h1>My Todos</h1>
        <div className="container1">
        <div className='container2'>
    <div className='title'>
        <h3>Title</h3>
        <input className='input1'
         placeholder='Whats The Title Of Your To Do?'
           value={title} 
           onChange={handletitlechange}
        
        />
    </div>

    <div className='Description'>
        <h3>Description</h3>
        <input className='input2'
         placeholder='Whats The Description Of Your To Do?'
        value={Description} 
        onChange={handleDescriptionchange}
         
         />
    </div>
         <button className='btn' onClick={addactivity} >Add</button>

    </div>
        <hr/>
        <ul>
        {listdata.map((item, index) => (
          
           <User key={index} title={item .title} Description={item.Description} onremove={()=>removelist(index)} />
          ))} 
         </ul> 
        </div>
    </div>
  )
}

export default App

