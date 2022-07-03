import { ScrollContainer, ScrollPage } from 'components/scrollPage';
import MySpeedDial from 'components/speedDial';
import BanDam from 'pages/architecture/banDam';
import DoiDinDang from 'pages/architecture/doiDinDang';
import ArchitectureHeader from 'pages/architecture/header';
import WadRongKhun from 'pages/architecture/wadRongKhun';
import WatSueaLongTen from 'pages/architecture/watSueaLongTen';
import BeliefHeader from 'pages/belief/header';
import DressHeader from 'pages/dress/header';
import FoodHeader from 'pages/food/header';
import Hero from 'pages/hero';
import React from 'react';

const App: React.FC = (): JSX.Element => {
  return (
    <ScrollContainer>
      <MySpeedDial />
      {/* *********** Hero Page ************ */}
      <ScrollPage>
        <Hero />
      </ScrollPage>
      {/* *********** Architecture Page ************ */}
      <ScrollPage>
        <ArchitectureHeader />
      </ScrollPage>
      <ScrollPage>
        <WadRongKhun />
      </ScrollPage>

      <ScrollPage>
        <BanDam />
      </ScrollPage>
      <ScrollPage>
        <WatSueaLongTen />
      </ScrollPage>
      <ScrollPage>
        <DoiDinDang />
      </ScrollPage>
      {/* *********** Belief Page ************ */}
      <ScrollPage>
        <BeliefHeader />
      </ScrollPage>
      {/* *********** Food Page ************ */}
      <ScrollPage>
        <FoodHeader />
      </ScrollPage>
      {/* *********** Dress Page ************ */}
      <ScrollPage>
        <DressHeader />
      </ScrollPage>
    </ScrollContainer>
  );
};

export default App;
