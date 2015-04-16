var React = require('react');
var Header = require('./header/');
var Scroller = require('./scroller/');
var List = require('./list/');
var Form = require('./form/');

require('./base.css');
require('./app.css');

var App = React.createClass({

  addMessage: function(message){
    this.refs['messageList'].addMessage({
      style:"",
      nick:"游客",
      content:"hehehe",
      time:new Date()
      
    })
  },

  render: function () {

    return (
      <div>
        <Header/>
        <Scroller ref="scroller">
          <List ref="messageList"></List>
        </Scroller>
        <Form addMessage={this.addMessage}></Form>
      </div>
    )

  }
})


React.render(<App />,document.body);