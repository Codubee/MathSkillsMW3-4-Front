import React, { useState } from 'react';
import { Collapse,Button } from 'reactstrap';
import ShowMatches from '../components/ShowMatches'

class MatchesCollapse extends React.Component {
  constructor(props){
    super(props)
    this.state = {isOpen:false}
    this.setIsOpen = this.setIsOpen.bind(this)
  }
  setIsOpen(){
    this.setState({isOpen:!this.state.isOpen})
  }

  render() {
    return (
      <div className="text-center">
        <Button color="primary" onClick={this.setIsOpen} style={{ marginBottom: '1rem' }}>Toggle</Button>
        <Collapse isOpen={this.state.isOpen}>
          <ShowMatches/>
        </Collapse>
      </div>
    );
  }
}
export default MatchesCollapse