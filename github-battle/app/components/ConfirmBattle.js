var React = require('react');

function ConfirmBattle(props) {
  return props.isLoading === true ? <p>Loading!</p> : <p>CONFIRM BATTLE!</p>
}

ConfirmBattle.PropTypes = {

};

module.exports = ConfirmBattle;
