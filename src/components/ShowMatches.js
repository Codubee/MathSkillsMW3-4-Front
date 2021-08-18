import React from 'react';
import { Table } from 'reactstrap';

// This component is a function because it only needed to perform the task of displaying the matches
function ShowMatches(props) {

    if(props.matches.length > 0) {
        return (
            //This setups a striped table which makes it easier to keep track of
            <Table striped>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Problem</th>
                        <th>Answer</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.matches.map((question, id) => (
                            <tr key={id}>
                                <th>{question.problemId}</th>
                                <td>{question.problem}</td>
                                <td>{question.answer}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        );
    }
    else {
        return <></>
    }
}

export default ShowMatches;