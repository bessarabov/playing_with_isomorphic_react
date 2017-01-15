var React = require('react');

var Main = React.createClass({
    render: function() {
        return <div>
                main
                <br/>
                <a href="/a">a</a>
                <br/>
                <a href="/b">b</a>
                <br/>
            </div>
            ;
    },
});

module.exports = Main;
