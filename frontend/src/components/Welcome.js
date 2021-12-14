import React from 'react'
import { Accordion, useAccordionButton, Card } from 'react-bootstrap';

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <button
            type="button"
            style={{ backgroundColor: 'pink' }}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
    );
}

const Welcome = () => {
    return (
        <Accordion defaultActiveKey="1">
            <Card className='pl-4'>
                <Card.Header>
                    <CustomToggle eventKey="0">Pssst...</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        This is a search engine using Unsplash API for images! Search away to begin!
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );

}

export default Welcome;
