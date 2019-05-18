import React from 'react';

class Slideshow extends React.Component {
  state = {
    current: 0
  };


  onclick = (value) => {
    const { current } = this.state;
    // eslint-disable-next-line react/prop-types
    const { url } = this.props;
    if(current===0 && !value) return this.setState({current: url.length-1});
    if(current===url.length-1 && value) return this.setState({current: 0});
    this.setState({current: value? current+1:current-1});
  };

  render(){
    // eslint-disable-next-line react/prop-types
    const { url } = this.props;
    const { current } = this.state;
    setTimeout(()=>this.setState({ current: current===url.length-1?0:current+1}), 5000);
    return (
      <div className="slide">
        <img alt="img" src={url.length && url[current].url} />
        <button
          className="left"
          type="button"
          onClick={() => this.onclick(0)}
        >
          <i className="material-icons white">
            chevron_left
          </i>
        </button>
        <button
          className="forward"
          type="button"
          onClick={() => this.onclick(1)}
        >
          <i className="material-icons white">
            chevron_right
          </i>
        </button>
      </div>
    );
  }
}

export default Slideshow;

