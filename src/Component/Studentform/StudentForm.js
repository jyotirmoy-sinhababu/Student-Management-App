import './studentform.css';
import { useState, useRef } from 'react';
import uuid from 'react-uuid';
const StudentForm = ({ onClick, studentList, setStudentList }) => {
  const [data, setData] = useState({});

  const formRef = useRef();

  const handelChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const saveData = () => {
    data.id = uuid();
    studentList.push(data);
    console.log(studentList);
    setData({});
    formRef.current.reset();
  };

  const nameError = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if ((e.value = ' ')) {
      alert('student name can not remain empty');
    }
  };

  const classError = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (e.value > 12 || e.value < 1) {
      alert('class must be in between 1 and 12');
    }
  };

  const numberError = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (e.value > 700 || e.value < 1) {
      alert('class must be in between 1 and 12');
    }
  };

  return (
    <div className='form-block'>
      <h2 className='form-heading'>Add Student</h2>
      <form
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          saveData();
        }}
      >
        <label htmlFor='name'>STUDENT NAME</label>
        <input
          onChange={(e) => {
            handelChange(e);
          }}
          type='text'
          name='name'
          className='form-input'
        />
        <label htmlFor='class'>CLASS</label>
        <input
          onChange={(e) => {
            handelChange(e);
          }}
          type='number'
          name='class'
          className='form-input'
        />
        <label htmlFor='score'>SCORE</label>
        <input
          onChange={(e) => {
            handelChange(e);
          }}
          type='number'
          name='score'
          className='form-input'
        />
        <div className='btn-container'>
          <button className='btn-can' onClick={onClick}>
            CANCEL
          </button>
          <button type='submit' className='btn-sub'>
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
