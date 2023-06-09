import React, { useState } from 'react';
import { Container, Form, InputGroup, Button } from 'react-bootstrap';
import styles from '@/styles/PromptForm.module.css';
import RenaissanceLetter from './RenaissanceLetter';

function PromptForm() {
    const [prompt, setPrompt] = useState('');
    const [validated, setValidated] = useState(false);
    const [apiOutput, setApiOutput] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            setSubmitting(true);
            const response = await fetch('/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt }),
            });

            const data = await response.json();
            console.log(data.output.message.content);
            setSubmitting(false);
            setApiOutput(`${data.output.message.content}`);
        }
        setValidated(true);
    };

    const handleChange = (event) => {
        setPrompt(event.target.value);
    };

    return (
        <Container className="d-flex flex-column align-items-center justify-content-center vh-100 prompt-container RenaissanceLetter_renaissance-letter__GR0cr">
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="w-75 FormText">
                <Form.Group>
                    <InputGroup>
                        <Form.Control
                            type="text"
                            value={prompt}
                            onChange={handleChange}
                            placeholder="Type something here..."
                            required
                            minLength={1}
                            maxLength={100}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter a prompt between 1 and 100 characters long.
                        </Form.Control.Feedback>
                        <Button type="submit" variant="primary">Submit</Button>
                    </InputGroup>
                </Form.Group>
            </Form>
            <p>Powered by OpenAI's gpt-3.5-turbo model</p>
            <div id="output">
                {submitting ? ( // render loading animation if submitting is true
                    <img src="/images/quill_pen.gif" alt="loading" className={styles.loadingAnimation} />
                ) : (
                    apiOutput && (
                        <div className='output'>
                            <RenaissanceLetter text={apiOutput} />
                        </div>
                    )
                )}
            </div>
        </Container>
    );
}

export default PromptForm;
