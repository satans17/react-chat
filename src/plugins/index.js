/**
 * Description:
 * User: 常胤 <satans17@gmail.com>
 * Date: 15/4/16
 * Copyright(c) 2014 Taobao.com
 */


var React = require('react');


module.exports = React.createClass({
  getInitialState: function() {
    return {display: false};
  },
  toggle: function(event) {
    this.setState({display: !this.state.display});
  },
  render: function () {
    var style = {
      display: this.state.display ? 'block' : 'none'
    };

    return (
      <div style={style} className="mod-input-plugins"></div>
    )
  }
})