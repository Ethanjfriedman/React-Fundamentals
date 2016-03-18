var React  = require('react'),
    Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
  //pulls in the router so that we can re-route as needed
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  //this sets initial state of the component; in this case an empty username
  getInitialState: function() {
    return {
      username: ''
    }
  },

  //updates username as user types in the input field
  //the 'handle' at the start of the function is a convention: this will be passed down
  //to one or more child components as a prop. The component that uses it will have an
  //onUpdateUser prop that will ref this function i.e., onUpdateUser: {this.handleUpdateUser}
  //will appear in this component's render method
  handleUpdateUser: function(e) {
    this.setState({
      username: e.target.value
    });
  },

  //activates when submit button is clicked. Should prevent the default event of form submission
  //then set username equal to this.state.username,and blank out this.state.username
  //then it needs to handle routing. If there's a playerOne routeParam (i.e., the route we're at
  // is '/playerTwo/:playerOne') then we should be routed to '/battle'; otherwise, there's no
  // ':playerOne', which means our current route is '/playerOne' and we need to re-route to
  // '/playerTwo/:playerOne', passing in this.state.username
  handleSubmitUser: function(e) {
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
    });

    //this is the conditional routing
    if (this.props.routeParams.playerOne) {
      //if there's a playerOne route param, we have two players: go to /battle
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      });
    } else {
      //no playerOne route param so we need to go to /playerTwo/:playerOne
      this.context.router.push( '/playerTwo/' + this.state.username);
    }
  },
  render: function() {
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username} />
    )
  }
});

module.exports = PromptContainer;
