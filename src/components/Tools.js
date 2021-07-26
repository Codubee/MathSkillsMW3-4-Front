import React from 'react'
import '../components/Tools.css'

/*Created the tools component with hyperlinks to the tools used*/
function Tools(){
    return(
        <div id = "Tools">
            Tools used to build this application:
            <ul>
                <li><a href = "https://www.atlassian.com/software/jira">Jira</a></li>
                <li><a href = "https://reactjs.org/">React</a></li>
                <li><a href = "https://nodejs.org/en/">Node.js</a></li>
                <li><a href = "https://www.postman.com/">Postman</a></li>
            </ul>
        </div>
    )
}

export default Tools;