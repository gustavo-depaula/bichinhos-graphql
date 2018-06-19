import React, { Component } from 'react'
import Relay from 'react-relay/classic'
import BichinhoCard from './bichinho-card'
import BichinhoCreator from './bichinho-creator'
import CreateBichinhoMutation from './create-bichinho-mutation'

class App extends Component {
  createBichinho = ({name, emoji}) => {
    Relay.Store.commitUpdate(
      new CreateBichinhoMutation({
        name: name,
        emoji: emoji
      }),
      {
        onSuccess: () => console.log('aaa'),
        onFailure: transaction => console.error('Num consegue né ', transaction)
      }
    )
  }

  render () {
    return (
      <div>
        <h1 className='title'>O servidor tem {this.props.viewer.allBichinhoes.edges.length} bichineos</h1>
        <BichinhoCreator createBichinho={this.createBichinho} />
        {
          this.props.viewer.allBichinhoes.edges
            .map(edge => edge.node)
            .map(bichinho =>
              <BichinhoCard key={bichinho.id} bichinho={bichinho} />
            )
        }
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        allBichinhoes (first: 100) {
          edges {
            node {
              id
              ${BichinhoCard.getFragment('bichinho')}
            }
          }
        }
        id
      }
    `
  }
})

export const AppRoute = {
  queries: {
    viewer: () => Relay.QL`
      query {
        viewer
      }
    `
  },
  params: {

  },
  name: 'AppRoute'
}
