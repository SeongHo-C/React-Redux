import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ToDo from '../components/ToDo';
import { add } from '../toDosSlice';
import { getToDos } from '../toDosSlice';

const Home = (props) => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const toDos = useSelector((state) => {
    return state.toDos;
  });

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(add(text));
    setText('');
  };

  useEffect(() => {
    dispatch(getToDos());
  }, []);
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type='text' value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos ? toDos.map((toDo) => <ToDo {...toDo} key={toDo.id} />) : ''}
      </ul>
    </>
  );
};

export default Home;
