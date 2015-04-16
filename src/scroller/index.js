
require('./style.css')

var React = require('react');
var IScroll = require('iscroll');


module.exports = React.createClass({
  refresh: function (dom) {
    var scroller = this.scroller;
    scroller.refresh();
    scroller.scrollToElement(dom, 300,0,0, IScroll.utils.ease.elastic);
  },
  render: function () {
    return (<div ref="wrapper" className="mod-page-body">
      <div>{this.props.children}</div>
    </div>)
  },
  componentDidMount: function () {
    this.scroller = new IScroll(this.refs.wrapper.getDOMNode());
  }
});