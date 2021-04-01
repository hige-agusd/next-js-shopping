import React, { FC } from 'react';
import { Toast } from 'react-bootstrap';

interface AdditionToastProps {
  show: boolean;
  remove?: Function;
}

const AdditionToast: FC<AdditionToastProps> = ({ show, remove = () => { } }) => {
  return (
     <Toast style={{
        position: 'absolute',
        top: `${window.pageYOffset + 150}px`,
        right: 0,
      }} onClose={() => remove()} show={show} delay={400} autohide>
        <Toast.Header>
          <img
            src="holder.js/20x20?text=%20"
            className="rounded mr-2"
            alt=""
          />
          <strong className="mr-auto">Item Added</strong>
        </Toast.Header>
        <Toast.Body>You've added 1 item to your cart</Toast.Body>
      </Toast>
  )
}

export default AdditionToast;