import React from 'react';
import './App.scss';
import Component from './Component';

class App extends React.Component{
  state = {
    display: 'grid',
    url: []
  };
  componentDidMount = () => {
    this.ImageMap('https://res.cloudinary.com/dbk8ky24f/image/upload/v1558110226/h8r4wldyn66fjpffqmb3.jpg');
  };

ImageMap = (url) => {
  let output = [];
  for(let i = 0; i<=100; i++){
    output.push({
      id: i+1,
      url
    });
  }
  this.setState({ url: output });
};
render() {
  const { display, url } = this.state;
  return (
    <div className="App">
      <div className="nav-bar" />
      <div className="x">
        <button type="button" onClick={() => this.setState({ display:display === 'grid'?'list':'grid'})}>
          {display === 'grid'? (
            <i className="material-icons">
               dehaze
            </i>
          ): (
            <i className="material-icons">
               apps
            </i>
          )}
        </button>
      </div>
      <Component display={display} url={url} />
    </div>
  );
}
}
export default App;
