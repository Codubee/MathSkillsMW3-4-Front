import React from 'react';
import { Collapse,Button } from 'reactstrap';
import ShowMatches from '../components/ShowMatches'
import axios from 'axios'

class MatchesCollapse extends React.Component {
  constructor(props){
    super(props)
    this.state = {isOpen:false, data: {} , matches: [] }
    this.setIsOpen = this.setIsOpen.bind(this)
    this.getMatches = this.getMatches.bind(this)
  }

  getMatches(){
    axios.get("https://mathskills-mw5-6-back.herokuapp.com/getMatches?userId=99")
      .then((response) => {
        this.setState({
          matches: response.data.matches
        })
      })
  }

  setIsOpen(){
    this.setState({isOpen:!this.state.isOpen})
    this.getMatches()
  }

  render() {
    return (
      <div className="text-center">
        <Button color="primary" onClick={this.setIsOpen} style={{ marginBottom: '1rem' }}>Toggle</Button>
        <Collapse isOpen={this.state.isOpen}>
          <ShowMatches matches={this.state.matches}/>
        </Collapse>
      </div>
    );
  }
}
export default MatchesCollapse