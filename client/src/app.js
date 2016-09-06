var React = require('react');
var ReactDOM = require('react-dom');
var OpeningsBox = require ('./components/OpeningsBox')
window.onload = function(){
  ReactDOM.render(
    <OpeningsBox />,
    document.getElementById('app')
  );
}