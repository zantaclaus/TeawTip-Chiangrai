import { ScrollContainer, ScrollPage } from 'components/scrollPage';
import MySpeedDial from 'components/speedDial';
import ArchitectureHeader from 'pages/architecture/header';
import WadRongKhun from 'pages/architecture/wadRongKhun';
import Hero from 'pages/hero';
import React from 'react';

const App: React.FC = (): JSX.Element => {
  return (
    <ScrollContainer>
      <MySpeedDial />
      <ScrollPage>
        <Hero />
      </ScrollPage>
      <ScrollPage>
        <ArchitectureHeader />
      </ScrollPage>
      <ScrollPage>
        <WadRongKhun />
      </ScrollPage>
      <ScrollPage>Page 3</ScrollPage>
      <ScrollPage>Page 4</ScrollPage>
    </ScrollContainer>
  );
};

export default App;
