var React = require('react');
var Avatar = require('../avatar/');

require('./style.css');

module.exports = React.createClass({
  render: function () {
    var message = this.props.message;

    return (
      <div className="message mod-chat-item right">
        <div className="user">
          <div className="nick">{message.nick}</div>
          <Avatar src={message.avatar} alt={message.nick}/>
        </div>
        <div className="chat">
          <s className="arrow"></s>

          <div className="body">
            <div className="content">{message.content}</div>
          </div>
          <div className="time">{message.time}</div>
        </div>
      </div>
    )
  }
})