import Relay from 'react-relay/classic'

class CreateBichinhoMutation extends Relay.Mutation {
  getMutation () {
    return Relay.QL`
      mutation {
        createBichinho
      }
    `
  }

  getVariables () {
    return {
      name: this.props.name,
      emoji: this.props.emoji
    }
  }

  getFatQuery () {
    return Relay.QL`
      fragment on CreateBichinhoPayload {
        edge
        bichinho
        viewer {
          allBichinhoes (first: 100) {
            edges {
              node {
                id
                emoji
                name
              }
            }
          }
        }
      }
    `
  }

  getConfigs () {
    return [{
      type: 'REQUIRED_CHILDREN',
      children: [this.getFatQuery()]
    }]
  }
}

export default CreateBichinhoMutation;