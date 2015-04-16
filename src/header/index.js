/**
 * Description:
 * User: 常胤 <satans17@gmail.com>
 * Date: 15/4/16
 * Copyright(c) 2014 Taobao.com
 */


var React = require('react');


module.exports = React.createClass({
  render: function () {
    return (
      <div className="mod-page-header">{this.props.title}</div>
    )
  }
})