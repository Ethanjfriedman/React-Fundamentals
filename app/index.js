var React = require('react');
var reactDOM = require('react-dom');
var helloWorld = React.createClass({
  render: function(){
    return (
      <div>
        Hello World!
      </div>
    )
  }
});

reactDOM.render(<helloWorld />, document.getElementById('app'));
