import React, {Component} from 'react';
import {Link} from 'react-router';

class Repos extends Component {
  render () {
    return (
      <div className="Repos">
        <h2>Repos</h2>
        <p>These are my Open Source contributions.</p>
        <ul>
          <li>
            <Link to='/repos/maurogestoso/hand-foot-coordination'>Hand Foot Coordination</Link>
          </li>
          <li>
            <Link to='/repos/maurogestoso/trello-board'>Trello Board</Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default Repos;