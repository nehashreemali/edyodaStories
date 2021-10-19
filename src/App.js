import React, { Component } from 'react'
import Footer from './Footer'
import LatestPost from './LatestPost'
import Topbar from './Topbar'

export default class App extends Component {
  render() {
    return (
      <div>
    <Topbar/>
    <LatestPost/>
    <Footer/>
      </div>
    )
  }
}
