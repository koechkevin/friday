import React from 'react';

class Component extends React.Component {
  render(){
    // eslint-disable-next-line react/prop-types
    const {url, display } = this.props;
    return (
      <div className="margin">
        <div className={display === 'grid'?'body':'list'}>
          {
            url.map((each) => <img className="img" key={each.id} alt="url" src={each.url} />)
          }
        </div>
      </div>
    );
  }
}
export default Component;

