var React = require('react');


module.exports = React.createClass({
  handlerError: function (ev) {
    this.style.display = 'none';
  },
  render: function () {
    return (
      <div className="avatar">
        <img src={this.props.img} alt={this.props.alt} onError={this.handlerError}/>
      </div>
    )
  }
})