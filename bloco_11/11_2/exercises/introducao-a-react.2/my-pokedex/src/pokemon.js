import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { id, name, type, averageWeight, image, moreInfo } = this.props.pokeInfo;
    return (
      <div>
        <section>
          <img src={image} alt='error'></img>
          <p>id: {id}</p>
          <p>name: {name}</p>
          <p>Type: {type}</p>
          <p>averageWeight.value: {averageWeight.value}</p>
          <p>averageWeight.measurementUnit: {averageWeight.measurementUnit}</p> 
          <p>moreInfo: {moreInfo}</p>
        </section>
      </div>
    );
  }
}

export default Pokemon