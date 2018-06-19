import React, { Component } from 'react';
import {object} from 'prop-types';
import Relay from 'react-relay/classic';

class BichinhoCard extends Component {
  static propTypes = {
    bichinho: object
  }

  render () {
    const {name, emoji} = this.props.bichinho
    return (
      <div>
        <p className='bichinho-card'>{emoji} {name}</p>
      </div>
    )
  }
}

export default Relay.createContainer(BichinhoCard, {
  fragments: {
    bichinho: () => Relay.QL`
      fragment on Bichinho {
        name
        emoji
      }
    `
  }
})
