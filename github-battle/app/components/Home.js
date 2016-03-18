var React       = require('react'),
    styles      = require('../styles'),
    ReactRouter = require('react-router'),
    Link        = ReactRouter.Link;

var Home = React.createClass({
  render: function() {
    return (
      <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        <h1>Github Battle</h1>
        <p>Some fancy motto</p>
        <Link to="/playerOne">
          <button type="button" className="btn btn-lg btn-success">Get Started</button>
        </Link>
      </div>
    )
  }
});

module.exports = Home;
