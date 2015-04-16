var React = require('react');
var Header = require('./header/');
var Scroller = require('./scroller/');
var List = require('./list/');
var Form = require('./form/');

require('./base.css');
require('./app.css');

var App = React.createClass({

  submit: function(message){
    this.refs['list'].addMessage({
      style:"right",
      avatar:"http://wwc.taobaocdn.com/avatar/getAvatar.do?userNick=satans17&width=80&height=80&type=sns",
      nick:"游客",
      content:message,
      time:new Date()
    });
  },
  sync: function(dom){
    this.refs['scroller'].refresh(dom);
  },

  render: function () {

    return (
      <div>
        <Header title="React Chat"/>
        <Scroller ref="scroller">
          <List ref="list" insert={this.sync}></List>
        </Scroller>
        <Form submit={this.submit}></Form>
      </div>
    )

  }
})


React.render(<App />,document.body);