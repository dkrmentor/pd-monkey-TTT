import React from 'react'
import Card from 'react-bootstrap/Card';

const Section2 = () => {
  return (
    <div className='second2'>
      <div className="container">
        <div className="row">
          <div className="txt-div">
            <h4>Process</h4>
            <h2>How Does It <span>Work?</span></h2>
          </div>
        </div>

        <Card className="sec2card" >
      <Card.Body className='card-content'>
        <Card.Title>Record & send us your files</Card.Title>
        <Card.Text>
        Make a request & send us your footage, audio & editing instruct
        </Card.Text>
      
      </Card.Body>
    </Card>
        </div>
      <div>

      </div>
    </div>
  )
}

export default Section2
