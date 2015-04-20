/**
 * Description:
 * User: 常胤 <satans17@gmail.com>
 * Date: 15/4/16
 * Copyright(c) 2014 Taobao.com
 */

var React = require('react');
var Plugins = require('../plugins/')

require('./style.css');

module.exports = React.createClass({
  handleSubmit: function (ev) {
    ev.preventDefault();
    var textarea = this.refs['input'].getDOMNode();
    var val = textarea.value;

    if(val){
      this.props.submit(val);
    }

    textarea.value = "";
    textarea.focus();
  },
  handlePlugin: function (ev) {
    ev.preventDefault();
    this.refs['plugins'].toggle();
  },
  focus: function () {
    this.refs['input'].getDOMNode().focus();
  },
  render: function () {
    var message = this.props.message;

    return (
      <div className="mod-page-footer">
        <div className="mod-input-form">
          <div className="fields textarea">
            <textarea ref="input" className="textarea"></textarea>
          </div>
          <div className="fields plugins">
            <button className="btn" onClick={this.handlePlugin}>Pulgin</button>
          </div>
          <div className="fields submit">
            <button className="btn" onClick={this.handleSubmit}>Send</button>
          </div>
        </div>
        <Plugins ref="plugins" display="0" />
      </div>
    )
  }
})