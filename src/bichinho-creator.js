import React, {Component} from 'react'
import {func} from 'prop-types'

class BichinhoCreator extends Component {
  static propTypes = {
    createBichinho: func
  }

  state = {
    name: '',
    emoji: ''
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.createBichinho(this.state)
  }

  render () {
    return (
      <div>
        <h2>Crie +1 bichinho:</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nome:&nbsp;
            <input
              type='text'
              name='name'
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            &nbsp;Emoji:&nbsp;
            <input
              type='text'
              name='emoji'
              value={this.state.emoji}
              onChange={this.handleInputChange}
            />
          </label>
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

export default BichinhoCreator