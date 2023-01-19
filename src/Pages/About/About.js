import React, { useState } from 'react';
import './About.scss';
import { ReactComponent as DeleteIcon } from '../../assets/images/delete.svg';
import { ReactComponent as EditIcon } from '../../assets/images/edit.svg';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from 'framer-motion';

const About = () => {
  const [inputVal, setInputVal] = useState('');
  const [data, setData] = useState([]);
  const [idCount, setIdCount] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [editData, setEditData] = useState({});
  const [moveItemData, setMoveItemData] = useState([]);

  const handleChange = (val) => {
    setInputVal(val.target.value);
  };

  const handleAdd = () => {
    console.log(isEdit);
    setIdCount((idCount) => idCount + 1);

    if (inputVal.trim().length > 0) {
      if (isEdit === true) {
        setData(
          data.map((el) => {
            if (el.id === editData.id) {
              return { ...el, text: inputVal };
            } else {
              return el;
            }
          })
        );
      } else {
        setData([...data, { id: idCount, text: inputVal }]);
      }
    }
    setInputVal('');
    setIsEdit(false);
  };

  const onKeyUp = (e) => {
    console.log(e);
    if (e.key === 'Enter' || e.which === 13) {
      handleAdd();
    }
  };

  const handleDelete = (id) => {
    const filterData = data.filter((elem) => elem.id !== id);
    console.log(filterData);
    setData(filterData);
  };

  const handleEdit = (item) => {
    setIsEdit(true);
    setInputVal(item.text);
    setEditData({ ...item });
  };
  console.log(data);

  console.log(data, inputVal, editData);

  const randomColor = () => {};
  const handleMove = (item) => {
    if (moveItemData.includes(item)) {
      setMoveItemData([...moveItemData]);
    } else {
      setMoveItemData([...moveItemData, item]);
      handleDelete(item.id);
    }
  };

  return (
    <div className='curd-opration'>
      <div className='input-val'>
        <input
          value={inputVal}
          name='text'
          type='text'
          placeholder='please enter the text'
          onChange={(e) => handleChange(e)}
          onKeyUp={(e) => onKeyUp(e)}
        />
        <button onClick={handleAdd}>{isEdit ? 'Update' : 'Add'}</button>
      </div>
      <ul className='content'>
        {data.map((el) => (
          <AnimatePresence>
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              drag='y'
              dragConstraints={{
                top: 0,
              }}
              key={el.id}
              onClick={() => handleMove(el)}
              style={{
                background: el.id === editData.id ? 'green' : '',
                color: el.id === editData.id ? '#fff' : '#000',
              }}
            >
              <span>{el.text}</span>
              <div className='btn-wrapper'>
                <DeleteIcon
                  style={{ fill: el.id === editData.id ? '#fff' : '' }}
                  onClick={() => handleDelete(el.id)}
                />
                <EditIcon
                  style={{ fill: el.id === editData.id ? '#fff' : '' }}
                  onClick={() => handleEdit(el)}
                />
              </div>
            </motion.li>
          </AnimatePresence>
        ))}
      </ul>

      {moveItemData.length > 0 && (
        <div className='drop-box content'>
          {moveItemData.map((el) => (
            <motion.li
              key={el.id}
              onClick={() => handleMove(el)}
              style={{
                background: el.id === editData.id ? 'green' : '',
                color: el.id === editData.id ? '#fff' : '#000',
              }}
            >
              <span>{el.text}</span>
              <div className='btn-wrapper'>
                <DeleteIcon
                  style={{ fill: el.id === editData.id ? '#fff' : '' }}
                  onClick={() => handleDelete(el.id)}
                />
                <EditIcon
                  style={{ fill: el.id === editData.id ? '#fff' : '' }}
                  onClick={() => handleEdit(el)}
                />
              </div>
            </motion.li>
          ))}
        </div>
      )}
    </div>
  );
};

export default About;
