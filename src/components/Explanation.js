import React from 'react';
import { Jumbotron} from 'reactstrap';

const Explanation = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Math Skills</h1>
        <p className="lead">Need a way to improve basic math skills? This application will help Elementary school students 
        learn and improve their math skills. In this application, a problem will be displayed for the student along with a 
        possible solution for the problem. The student will swipe right if the student believes the solution matches the problem
        and the student will swipe right if the student believes that the solution does not match the problem. Once the student swipes
        left or right, the student will be notified if the student had made the correct choice and a new problem and possible solution
        will appear for the student. If the student got the problem correct, the problem will appear in a list of problems that the
        student got correct and the student can access the problems the student got correct by selecting a button on the application 
        that will allow the student to see a list of the problems the student got correct.</p>
      </Jumbotron>
    </div>
  );
};

export default Explanation;