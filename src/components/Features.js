import React from 'react'
import { Col, Row,Card,CardText,CardTitle } from 'reactstrap';


function Features() {
    return (
        <div className="features text-center">
            <h1>Features include:</h1>
            <Row>
                <Col>
                    <Card body outline color="secondary">
                        <CardTitle tag="h5">Displaying a math problem</CardTitle>
                    </Card>
                </Col>
                <Col>
                    <Card body outline color="secondary">
                        <CardTitle tag="h5">Showing a possible answer</CardTitle>
                    </Card>
                </Col>
                <Col>
                    <Card body outline color="secondary">
                        <CardTitle tag="h5">Showing correct math answers</CardTitle>
                    </Card>
                </Col>
                <Col>
                    <Card body outline color="secondary">
                        <CardTitle tag="h5">Helping people learn math</CardTitle>
                    </Card>
                </Col>
            </Row>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )

}

export default Features;


