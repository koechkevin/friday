import React from 'react';
import '../App.scss';
import Component from './Component';
import Slideshow from './Slideshow';

class App extends React.Component{
  state = {
    display: 'grid',
    url: [
      {id: 1, url: 'https://res.cloudinary.com/dbk8ky24f/image/upload/v1558110226/h8r4wldyn66fjpffqmb3.jpg'},
      {id: 2, url:'https://res.cloudinary.com/dbk8ky24f/image/upload/v1558178457/dfvewx4byjllvgyev46r.jpg'},
      {id: 3, url: 'https://res.cloudinary.com/dbk8ky24f/image/upload/v1558179413/fw4ur6qgekypp5qgysqm.webp'},
      {id:4, url: 'https://res.cloudinary.com/dbk8ky24f/image/upload/v1558179463/v0paf17riaoenc5ff4wq.jpg'},
      {id: 5, url: 'https://res.cloudinary.com/dbk8ky24f/image/upload/v1558179500/cffaucfazprywqaoubun.jpg'},
      {id:6, url:'https://res.cloudinary.com/dbk8ky24f/image/upload/v1558179565/hc0qjsahbeaumtlubi8v.jpg'},
      {id: 7, url: 'https://res.cloudinary.com/dbk8ky24f/image/upload/v1558179625/xh2phy4yog0mwqjeh5bf.jpg'},
      {id:8, url:'https://res.cloudinary.com/dbk8ky24f/image/upload/v1558179659/thxcsz0hvhd008couz10.jpg'},
      {id: 9, url: 'https://res.cloudinary.com/dbk8ky24f/image/upload/v1558110226/h8r4wldyn66fjpffqmb3.jpg'},
      {id: 10, url:'https://res.cloudinary.com/dbk8ky24f/image/upload/v1558178457/dfvewx4byjllvgyev46r.jpg'},
      {id: 11, url: 'https://res.cloudinary.com/dbk8ky24f/image/upload/v1558179413/fw4ur6qgekypp5qgysqm.webp'},
      {id:12, url: 'https://res.cloudinary.com/dbk8ky24f/image/upload/v1558179463/v0paf17riaoenc5ff4wq.jpg'},
      {id: 13, url: 'https://res.cloudinary.com/dbk8ky24f/image/upload/v1558179500/cffaucfazprywqaoubun.jpg'},
      {id:16, url:'https://res.cloudinary.com/dbk8ky24f/image/upload/v1558179565/hc0qjsahbeaumtlubi8v.jpg'},
      {id: 17, url: 'https://res.cloudinary.com/dbk8ky24f/image/upload/v1558179625/xh2phy4yog0mwqjeh5bf.jpg'},
      {id:18, url:'https://res.cloudinary.com/dbk8ky24f/image/upload/v1558179659/thxcsz0hvhd008couz10.jpg'},
    ]
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
        <Slideshow url={url} />
      </div>
    );
  }
}
export default App;
