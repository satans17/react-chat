
require('./style.css')

var React = require('react');
var IScroll = require('iscroll');


module.exports = React.createClass({
  scrollToTop: function () {
    this.scroller.scrollTo(0, -100, 1000, IScroll.utils.ease.elastic);
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