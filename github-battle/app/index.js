console.log('index.js loaded');

var React = require('react');
var ReactDOM = require('react-dom');
//
var USER_DATA = {
  name: "Ethan Friedman",
  username: "ethanjfriedman",
  image: "https://avatars3.githubusercontent.com/u/12495743?v=3&s=460"
};

var ProfilePic = React.createClass({
  render: function() {
    return (
             <img
             src={this.props.imageUrl}
             style={{height:100, width: 100}} />
    )
  }
});

var Link = React.createClass({
  changeURL: function() {
    window.location.replace(this.props.href);
  },
  render: function() {
    return (
      <span style={{color:'blue', cursor: 'pointer'}}
      onClick={this.changeURL}>
        {this.props.children}
      </span>
    )
  }
});

var ProfileLink = React.createClass({
  render: function() {
    return (
      <div>
        <Link href={'https://www.github.com/' + this.props.username}>
          {this.props.username}
        </Link>
      </div>
    )
  }
});

var ProfileName = React.createClass({
  render: function() {
    return (
      <div>{this.props.name}</div>
    )
  }
});

var Avatar = React.createClass({
  render: function() {
    //everything it returns MUST be wrapped in a container!
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
});

ReactDOM.render(
  <Avatar user={USER_DATA} />,
  document.querySelector('#app')
);
//TEST HELLO COMPONENT HERE
//fn(d) = v function takes in data and returns view
// var Hello = React.createClass({
//   render: function() {
//     return (
//       <div> Hello, {this.props.name}!</div>
//     )
//   }
// });
//
// ReactDOM.render(
//   <Hello name="Ethan"/>,
//   document.getElementById('app')
// );

//learning parent/child components
// var FriendsContainer = React.createClass({
//   render: function(){
//     var name = "Ethan Friedman";
//     var hobbies = ["Entomology", "Scuba Diving", "Coding", "Fatherhood"];
//     return (
//       <div>
//         <h2>Name: {name}</h2>
//         <HobbiesList hobbies={hobbies} />
//       </div>
//     )
//   }
// });
//
// var HobbiesList = React.createClass({
//   render: function(){
//     var hobbyNames = this.props.hobbies.map(function(hobby){
//       return <li>{hobby}</li>
//     });
//     return (
//       <div>
//         <h3>Hobbies</h3>
//         <ul>
//           {hobbyNames}
//         </ul>
//       </div>
//     )
//   }
// });
//
// ReactDOM.render(
//   <FriendsContainer />,document.getElementById('app')
// );
