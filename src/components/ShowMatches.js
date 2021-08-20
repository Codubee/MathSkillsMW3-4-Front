import axios from 'axios';
import React from 'react';
import { Table,Button } from 'reactstrap';

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
    triggerDeleteApi(problemId)
    {
        //DELETE http request is sent
        axios.delete("https://mathskills-mw5-6-back.herokuapp.com/deleteProblem?userId="+this.props.userId+"&problemId="+problemId)

        //We get a response after the request is complete
        .then((response) => {
            //Prints the data to the console that is located in the web browser
            console.log(response.data);
            alert('Entry Deleted. Please refresh.')
        })
    }

    //HTML is shown to the user
    render()
    {
        if(this.props.matches.length > 0) {
            return (
                //This setups a striped table which makes it easier to keep track of
                <Table striped>
                    <thead>
                        <tr>
                            <th>Problem</th>
                            <th>Answer</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.matches.map((question, id) => (
                                <tr key={id}>
                                    <td>{question.problem}</td>
                                    <td>{question.answer}</td>
                                    <Button size="sm" onClick={()=>this.triggerDeleteApi(question.problemId)} >Delete</Button>
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
}


export default ShowMatches;