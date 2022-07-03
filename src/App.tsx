/* eslint-disable react/no-children-prop */
import { images } from 'assets/images';
import PageHeader from 'components/pageHeader';
import { ScrollContainer, ScrollPage } from 'components/scrollPage';
import MySpeedDial from 'components/speedDial';
import BanDam from 'pages/architecture/banDam';
import DoiDinDang from 'pages/architecture/doiDinDang';
import WadRongKhun from 'pages/architecture/wadRongKhun';
import WatSueaLongTen from 'pages/architecture/watSueaLongTen';
import HengLe from 'pages/food/hangLe';
import KaoSoi from 'pages/food/kaoSoi';
import NamNgew from 'pages/food/namNgew';
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
        <PageHeader
          id='architecture'
          image={images.header1}
          text={
            <>
              สถา<span className='pachautid tracking-wider'>ปั</span>ตยกรรม
            </>
          }
        />
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
      {/* *********** Food Page ************ */}
      <ScrollPage>
        <PageHeader id='food' image={images.header1} text={<>อาหาร</>} />
      </ScrollPage>
      <ScrollPage children={<KaoSoi />} />
      <ScrollPage children={<HengLe />} />
      <ScrollPage children={<NamNgew />} />
      {/* *********** Dress Page ************ */}
      <ScrollPage>
        <PageHeader
          id='dress'
          image={images.header1}
          text={
            <>
              การแ<span className='pachautid tracking-wider'>ต่</span>งกาย
            </>
          }
        />
      </ScrollPage>
    </ScrollContainer>
  );
};

export default App;
