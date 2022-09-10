import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: ' consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
    {
      id: 2,
      rating: 7,
      text: ' consectetur adipisicing elit, consequuntur vel vitae commodi alias voluptatem ',
    },
    {
      id: 3,
      rating: 5,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    },
  ]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    element: {},
    edit: false,
  });

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete? ')) {
      setFeedback(feedback.filter((element) => element.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log(newFeedback);
    setFeedback([newFeedback, ...feedback]);
  };

  const updateFeedback = (id, updatedElement) => {
    setFeedback(
      feedback.map((element) =>
        element.id === id
          ? {
              ...element,
              ...updatedElement,
            }
          : element
      )
    );
  };

  const editFeedback = (element) => {
    setFeedbackEdit({
      element,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
