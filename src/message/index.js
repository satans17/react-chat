/**
 * Description:
 * User: 常胤 <satans17@gmail.com>
 * Date: 15/4/16
 * Copyright(c) 2014 Taobao.com
 */

  require('./style.css');

var React = require('react');

module.exports = React.createClass({
  render: function () {
    var message = this.props.message;

    return (
      <div className="message mod-chat-item right">
        <div className="user">
          <div className="nick">{message.nick}</div>
          <div className="avatar">
            <img src={message.avatar} alt={message.nick}/>
          </div>
        </div>
        <div className="chat">
          <s className="arrow"></s>

          <div className="body">
            <div className="J_Content content">{message.content}</div>
          </div>
          <div className="time">{message.time}</div>
        </div>
      </div>
    )
  }
})