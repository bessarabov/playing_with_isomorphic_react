import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, hashHistory } from 'react-router'

var Main = require('./Main.jsx');
var A = require('./A.jsx');
var B = require('./B.jsx');
var NotFound = require('./NotFound.jsx');

const Application = React.createClass({
  render() {
    return (
	  <Router history={ browserHistory }>
		<Route path="/" component={Main}></Route>
		<Route path="/a" component={A}></Route>
		<Route path="/b" component={B}></Route>
		<Route path="*" component={NotFound}/>
	  </Router>
    )
  }
})

module.exports = Application;
