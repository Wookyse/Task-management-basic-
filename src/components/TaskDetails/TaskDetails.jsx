import React from 'react';
import { useHistory, useParams } from 'react-router';
import { Button } from '../Button/Button';

import './TaskDetails.css'
export const TaskDetails = () => {
  const params = useParams();
  const history = useHistory();

  console.log(params);

  const handleBackButtonClick = () => {
    history.goBack();
  };

  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto dolore molestiae a est, illo quibusdam.
        </p> 
      </div>
    </>
  );
};