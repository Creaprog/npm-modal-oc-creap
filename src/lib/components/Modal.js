import "./Modal.css";
import React from 'react';

const Modal = (props) => {
    if (props.isShowing) {
        return (
            <div className="modal-container">
                <div className="modal-wrapper">
                    <div className="modal">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="modal-close-button"
                                onClick={() => {
                                    props.setIsShowing(false);
                                }}
                            >X</button>
                        </div>
                        <div className="modal-body">
                            <p>{props.message}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;