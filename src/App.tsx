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
      <ScrollPage children={<Hero />} />

      {/* *********** Architecture Page ************ */}
      <ScrollPage
        children={
          <PageHeader
            id='architecture'
            image={images.header1}
            text={
              <>
                สถา<span className='pachautid tracking-wider'>ปั</span>ตยกรรม
              </>
            }
          />
        }
      />
      <ScrollPage children={<WadRongKhun />} />
      <ScrollPage children={<BanDam />} />
      <ScrollPage children={<WatSueaLongTen />} />
      <ScrollPage children={<DoiDinDang />} />

      {/* *********** Food Page ************ */}
      <ScrollPage children={<PageHeader id='food' image={images.header1} text={<>อาหาร</>} />} />
      <ScrollPage children={<KaoSoi />} />
      <ScrollPage children={<HengLe />} />
      <ScrollPage children={<NamNgew />} />

      {/* *********** Cuture Page ************ */}
      <ScrollPage
        children={
          <PageHeader
            id='dress'
            image={images.header1}
            text={
              <>
                ศิลปะ<span className='pachautid tracking-wider'>วั</span>ฒนธรรม
              </>
            }
          />
        }
      />
    </ScrollContainer>
  );
};

export default App;
