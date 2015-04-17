var React = require('react');
var Message = require('../chat-item/');

module.exports = React.createClass({
  getInitialState: function () {
    return {items: []};
  },
  addMessage: function (message) {
    this.setState({items: this.state.items.concat([message])});
  },
  componentDidUpdate: function(){
    var msg = this.refs['messageList'].getDOMNode().querySelector("div.message:last-child")
    this.props.insert(msg);
  },
  render: function () {
    var messages = this.state.items.map(function (item) {
      return <Message message={item}/>
    });
    return (
      <div ref="messageList">
        {messages}
      </div>
    )
  }
})