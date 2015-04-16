/**
 * Description:
 * User: 常胤 <satans17@gmail.com>
 * Date: 15/4/16
 * Copyright(c) 2014 Taobao.com
 */


var React = require('react');
var Message = require('../message/');

module.exports = React.createClass({
  getInitialState: function () {
    return {items: []};
  },
  addMessage: function (message) {
    this.setState({items: this.state.items.concat([message])});
  },
  render: function () {
    var messages = this.state.items.map(function (item) {
      return <Message message={item}/>
    });
    return (
      <div>
        {messages}
      </div>
    )
  }
})