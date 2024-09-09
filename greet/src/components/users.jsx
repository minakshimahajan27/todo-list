
import React, { useState } from 'react';
import './app.css';
import User from './components/user';

function App() {
  const [activity, setActivity] = useState('');
  const [listData, setListData] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleActivityChange(e) {
    setActivity(e.target.value);
  }

  function addActivity() {
    if (title && description) {
      setListData((prevListData) => [
        ...prevListData,
        { title, description }
      ]);
      setTitle('');
      setDescription('');
    }
  }

  return (
    <div className="body-con">
      <h1>My Todos</h1>
      <div className="container1">
        <div className='container2'>
          <div className='title'>
            <h3>Title</h3>
            <input
              className='input1'
              placeholder='Whats the title of your To Do?'
              value={title}
              onChange={handleTitleChange}
            />
          </div>

          <div className='description'>
            <h3>Description</h3>
            <input
              className='input2'
              placeholder='Whats the description of your To Do?'
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
          <button className='btn' onClick={addActivity}>Add</button>
        </div>
        <hr />
        <ul>
          {listData.map((item, index) => (
            <User key={index} title={item.title} description={item.description} remove={removelist} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
