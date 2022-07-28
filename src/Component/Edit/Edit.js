import { useState } from 'react';
import './edit.css';
const Edit = ({ onClick, inputs, handelEdit }) => {
  const [editedData, setEditedData] = useState(inputs);
  const monitorChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEditedData({ ...editedData, [name]: value });
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handelEdit(editedData);
        }}
        className='edit-form'
      >
        <label htmlFor='name'>STUDENT NAME</label>
        <input
          onChange={(e) => {
            monitorChange(e);
          }}
          type='text'
          name='name'
          value={editedData.name}
          className='form-input'
        />
        <label htmlFor='class'>CLASS</label>
        <input
          onChange={(e) => {
            monitorChange(e);
          }}
          type='number'
          name='class'
          value={editedData.class}
          className='form-input'
        />
        <label htmlFor='score'>SCORE</label>
        <input
          onChange={(e) => {
            monitorChange(e);
          }}
          type='number'
          name='score'
          value={editedData.score}
          className='form-input'
        />
        <div className='btn-box'>
          <button className='btn-can' onClick={onClick}>
            CANCEL
          </button>
          <button type='submit' className='btn-sub'>
            SAVE
          </button>
        </div>
      </form>
    </>
  );
};

export default Edit;
