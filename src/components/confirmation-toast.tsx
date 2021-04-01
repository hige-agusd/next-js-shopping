import React, {FC} from 'react';
import { Toast } from 'react-bootstrap';

interface ConfirmationToastProps {
    show: boolean;
    setShow: Function;
    totalItems: number;
}

const ConfirmationToast:FC<ConfirmationToastProps> = ({show, setShow, totalItems}) => {
    return (
        <Toast style={{
            position: 'absolute',
            top: 0,
            right: 0,
          }} onClose={() => setShow(false)} show={show} delay={2000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Congratulations!</strong>
          </Toast.Header>
          <Toast.Body>You've purchased {totalItems} items.</Toast.Body>
        </Toast>
    )
}

export default ConfirmationToast;