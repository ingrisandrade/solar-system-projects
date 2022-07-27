import React from 'react';
import Header from './components/Header';
import PlanetCard from './components/PlanetCard';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import Title from './components/Title';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Sistema Solar</p>
        <Header />
        <SolarSystem />
        <Missions />
        {/* Abaixo de solar system - monitoria */}
        <Title headline="S. System" />
        <PlanetCard planetName="Nomes dos Planetas" planetImage=" " />
      </div>
    );
  }
}

export default App;
