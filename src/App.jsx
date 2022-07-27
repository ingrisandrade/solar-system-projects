import React from 'react';
import Header from './components/Header';
import PlanetCard from './components/PlanetCard';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import Title from './components/Title';
import MissionCard from './components/MissionCard';

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
        <MissionCard name="Name" year="Ano" country="País" destination="Destino" />
      </div>
    );
  }
}

export default App;
