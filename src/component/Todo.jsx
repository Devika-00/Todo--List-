import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faSave, faTimes } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ task, onDelete, onEdit, onSaveEdit, index }) => {
  const [isComplete, setIsComplete] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleCheckboxChange = () => {
    setIsComplete(!isComplete);
  };

  const handleEditClick = () => {
    onEdit(index);
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (editedText.trim() === "") {
      toast.error("Enter anything before saving!"); 
      return;
    }

    onSaveEdit(index, editedText);
    setIsEditing(false);
  };



  return (
    <div className={`Todo ${isComplete ? 'completed' : ''}`}>
      <div className='checkbox'>
        <input
          type='checkbox'
          checked={isComplete}
          onChange={handleCheckboxChange}
          className='TodoForm'
        />
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
        ) : (
          <p className={isComplete ? 'completed-text' : ''}>{task.text}</p>
        )}
      </div>
      <div>
        {isEditing ? (
          <>
            <FontAwesomeIcon icon={faSave} className='fa' onClick={handleSaveClick} 
             style={{ margin: '10px' }} />
          </>
        ) : (
          <div className='icons'>
          <FontAwesomeIcon icon={faEdit} className='fa' onClick={handleEditClick} />
          <FontAwesomeIcon icon={faTrash} className='fa' onClick={onDelete}
          style={{ marginLeft: '10px' }}  />
          </div>
          )}
      </div>
    </div>
  );
};

export default Todo;
