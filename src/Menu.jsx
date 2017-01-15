var React = require('react');
import { Router, Route, Link, browserHistory, hashHistory } from 'react-router'

var Menu = React.createClass({
    render: function() {
        return (
            <div>
                <Link to="/">main</Link>
                <br/>
                <Link to="/a">A</Link>
                <br/>
                <Link to="/b">B</Link>
                <br/>
            </div>
        );
    },
});

module.exports = Menu;
