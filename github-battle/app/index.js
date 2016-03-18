console.log('index.js loaded');

var React    = require('react'),
    ReactDOM = require('react-dom'),
    routes   = require('./config/routes')

ReactDOM.render(
  routes,
  document.querySelector('#app')
);
// user data constant
// var USER_DATA = {
//   name: "Ethan Friedman",
//   username: "ethanjfriedman",
//   image: "https://avatars3.githubusercontent.com/u/12495743?v=3&s=460"
// };
//
// var ProfilePic = React.createClass({
//   render: function() {
//     return (
//              <img
//              src={this.props.imageUrl}
//              style={{height:100, width: 100}} />
//     )
//   }
// });
//
// var Link = React.createClass({
//   changeURL: function() {
//     window.location.replace(this.props.href);
//   },
//   // note use of this.props.children; calls up the
//   // {this.props.username} from the ProfileLink component
//   render: function() {
//     return (
//       <span style={{color:'blue', cursor: 'pointer'}}
//       onClick={this.changeURL}>
//         {this.props.children}
//       </span>
//     )
//   }
// });
//
// var ProfileLink = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <Link href={'https://www.github.com/' + this.props.username}>
//           {this.props.username}
//         </Link>
//       </div>
//     )
//   }
// });
//
// var ProfileName = React.createClass({
//   render: function() {
//     return (
//       <div>{this.props.name}</div>
//     )
//   }
// });
//
// var Avatar = React.createClass({
//   render: function() {
//     //everything it returns MUST be wrapped in a container!
//     return (
//       <div>
//         <ProfilePic imageUrl={this.props.user.image} />
//         <ProfileName name={this.props.user.name} />
//         <ProfileLink username={this.props.user.username} />
//       </div>
//     )
//   }
// });
//
// ReactDOM.render(
//   <Avatar user={USER_DATA} />,
//   document.querySelector('#app')
// );
