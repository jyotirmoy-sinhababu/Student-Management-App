import Edit from '../Edit/Edit';
import { useState } from 'react';
import './studentdata.css';
import Modal from '../../Modal/Modal';
const StudentData = ({ obj, handelDelete, handelEdit }) => {
  const [isEdit, setIsEdit] = useState(false);
  const openEdit = () => {
    setIsEdit(true);
  };
  const closeEdit = () => {
    setIsEdit(false);
  };
  return (
    <div className='student-data-box'>
      <div className='student-data'>
        <p>{obj.name}</p>
        <p>{obj.score}</p>
        <p>{obj.class}</p>
      </div>
      <div className='student-data-btn'>
        <button className='edit-btn' onClick={openEdit}>
          edit
        </button>
        <button
          onClick={() => {
            handelDelete(obj);
          }}
          className='delete-btn'
        >
          delete
        </button>
      </div>
      <Modal isOpen={isEdit}>
        <Edit onClick={closeEdit} inputs={obj} handelEdit={handelEdit} />
      </Modal>
    </div>
  );
};

export default StudentData;
