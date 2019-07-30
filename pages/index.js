import React from 'react'
const onfidoContainerId = 'onfido-mount'

export class Index extends React.Component {
  handleClick () {
    console.log('About to require')
    const Onfido = require('onfido-sdk-ui')
    console.log('Require successful')
  }

  render () {
    return (
      <div>
        <p>Hello Next.js</p>
        <div id={onfidoContainerId} />
        <button onClick={this.handleClick}>
          Try to Require
        </button>
      </div>
    )
  }
}

export default Index
