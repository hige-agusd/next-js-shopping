import React, { FC } from 'react';
import { Modal, Button, Spinner } from 'react-bootstrap';

interface CheckoutModalProps {
    show: boolean;
    loading: boolean;
    handleClose: React.MouseEventHandler<HTMLElement>;
    handleCheckout: React.MouseEventHandler<HTMLElement>;
}

const CheckoutModal: FC<CheckoutModalProps> = ({ show, handleCheckout, handleClose, loading }) => {

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <   Modal.Title>Checkout confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to checkout this cart content?</Modal.Body>
                <Modal.Footer>
                    <Button variant="link" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleCheckout} disabled={loading}>
                        {loading &&
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            /> 
                        }
                        {loading ? 'Loading...' : 'Checkout'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}

export default CheckoutModal;