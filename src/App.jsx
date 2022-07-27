import React from 'react';
import Header from './components/Header';
import PlanetCard from './components/PlanetCard';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Sistema Solar</p>
        <Header />
        <SolarSystem />
        <Title headline="S. System" />
        <PlanetCard planetName="Nomes dos Planetas" />
      </div>
    );
  }
}

export default App;
