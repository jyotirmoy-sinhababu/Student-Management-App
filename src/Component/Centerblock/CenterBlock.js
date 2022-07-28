import Modal from '../../Modal/Modal';
import StudentForm from '../Studentform/StudentForm';
import StudentData from '../Studentdata/StudentData';
import { useState } from 'react';
import './centerblock.css';
const CenterBlock = () => {
  const [studentList, setStudentList] = useState([]);

  const handelEdit = (param) => {
    const filteredList = studentList.filter((lists) => {
      return lists.id != param.id;
    });
    filteredList.push(param);
    setStudentList(filteredList);
  };

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handelDelete = (obj) => {
    const filteredList = studentList.filter((student) => {
      return student.id != obj.id;
    });

    console.log(filteredList);
    setStudentList(filteredList);
  };

  return (
    <div className='mainBlock'>
      <div className='block-top'>
        <h3 className='block-top-txt'></h3>
        <button className='block-top-btn' onClick={openModal}>
          Add
        </button>
      </div>
      <div className='block-bottom'>
        <h2 className='block-bottom-txt'>Go to the student page</h2>
        <div className='block-bottom-box'>
          <div className='block-bottom-studentdata'>
            {studentList.map((elem, index) => {
              return (
                <StudentData
                  handelDelete={handelDelete}
                  key={elem.id}
                  obj={elem}
                  handelEdit={handelEdit}
                />
              );
            })}
          </div>

          <Modal isOpen={isOpen}>
            <StudentForm
              studentList={studentList}
              setStudentList={setStudentList}
              onClick={closeModal}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default CenterBlock;
