//TEST HELLO COMPONENT HERE
fn(d) = v function takes in data and returns view
var Hello = React.createClass({
  render: function() {
    return (
      <div> Hello, {this.props.name}!</div>
    )
  }
});

ReactDOM.render(
  <Hello name="Ethan"/>,
  document.getElementById('app')
);

//learning parent/child components
var FriendsContainer = React.createClass({
  render: function(){
    var name = "Ethan Friedman";
    var hobbies = ["Entomology", "Scuba Diving", "Coding", "Fatherhood"];
    return (
      <div>
        <h2>Name: {name}</h2>
        <HobbiesList hobbies={hobbies} />
      </div>
    )
  }
});

var HobbiesList = React.createClass({
  render: function(){
    var hobbyNames = this.props.hobbies.map(function(hobby){
      return <li>{hobby}</li>
    });
    return (
      <div>
        <h3>Hobbies</h3>
        <ul>
          {hobbyNames}
        </ul>
      </div>
    )
  }
});

ReactDOM.render(
  <FriendsContainer />,document.getElementById('app')
);
