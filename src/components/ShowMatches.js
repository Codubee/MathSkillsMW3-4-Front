import axios from 'axios';
import React from 'react';
import { Table } from 'reactstrap';

/* This component is a class needs to perform the task of displaying the matches and deleting the problems but calling
   the deleteProblem api*/
class ShowMatches extends React.Component {
    //binds the 'this' keyword to triggerDeleteApi method 
    constructor(props)
    {
        super(props);

        //binds the 'this' keyword to triggerDeleteApi method 
        this.triggerDeleteApi = this.triggerDeleteApi.bind(this);
    }

    //DELETE http request is sent
    //We get a response after the request is complete
    //Prints the data to the console that is located in the web browser
    triggerDeleteApi()
    {
        //DELETE http request is sent
        axios.delete("https://mathskills-mw5-6-back.herokuapp.com/deleteProblem?userId=99&problemId=1")

        //We get a response after the request is complete
        .then((response) => {
            //Prints the data to the console that is located in the web browser
            console.log(response.data);
        })
    }

    //HTML is shown to the user
    render()
    {
        //Creates a temporary array to test the ShowMatches function
        const questions = [{problem:"2+2", answer:4},{problem:"3+3", answer:6}];

        return (
            //This setups a striped table which makes it easier to keep track of
            <div>
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
                <button onClick={this.triggerDeleteApi}>Delete</button>
            </div>
        );
    }
}


export default ShowMatches;