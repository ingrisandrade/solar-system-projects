import React, { Component } from 'react';

class PlanetCard extends Component {
  render() {
    const { planetName } = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{ planetName }</p>
      </div>
    );
  }
}

export default PlanetCard;
