import { ScrollContainer, ScrollPage } from 'components/scrollPage';
import MySpeedDial from 'components/speedDial';
import Example from 'pages/example';
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
        <Example />
      </ScrollPage>
      <ScrollPage>Page 3</ScrollPage>
      <ScrollPage>Page 4</ScrollPage>
    </ScrollContainer>
  );
};

export default App;
