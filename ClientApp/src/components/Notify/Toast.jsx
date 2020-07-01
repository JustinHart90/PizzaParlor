import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast'

export default function Notification(props) {
    const [show, setShow] = useState(props.show);
  
    return (
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header>
                <strong className="mr-auto">{props.header}</strong>
            </Toast.Header>
            <Toast.Body>{props.body}</Toast.Body>
        </Toast>
    );
  }