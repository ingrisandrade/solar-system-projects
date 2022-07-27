import React, { Component } from 'react';
import PropType from 'prop-types';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card">
        <p>{ name }</p>
        <p>{ year }</p>
        <p>{ country }</p>
        <p>{ destination }</p>
      </div>
    );
  }
}

MissionCard.propType = {
  name: PropType.string.isRequired,
  year: PropType.number.isRequired,
  country: PropType.string.isRequired,
  destination: PropType.string.isRequired,
};

export default MissionCard;
