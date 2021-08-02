import React from 'react';
import { Table } from 'reactstrap';

// This component is a function because it only needed to perform the task of displaying the matches
function ShowMatches() {

    //Creates a temporary array to test the ShowMatches function
    const questions = [{problem:"2+2", answer:4},{problem:"3+3", answer:6}];

    return (
        //This setups a striped table which makes it easier to keep track of
        <Table striped>
            <thead>
                <tr>
                    <th>Problem</th>
                    <th>Answer</th>
                </tr>
            </thead>
            <tbody>
                {
                    questions.map((question, id) => (
                        <tr>
                            <th scope="row">{id+=1}</th>
                            <td>{question.problem}</td>
                            <td>{question.answer}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    );
}

export default ShowMatches;