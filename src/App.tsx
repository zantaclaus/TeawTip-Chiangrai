/* eslint-disable react/no-children-prop */
import { images } from 'assets/images';
import PageHeader from 'components/pageHeader';
import { ScrollContainer, ScrollPage } from 'components/scrollPage';
import MySpeedDial from 'components/speedDial';
import BanDam from 'pages/architecture/banDam';
import DoiDinDang from 'pages/architecture/doiDinDang';
import WadRongKhun from 'pages/architecture/wadRongKhun';
import WatSueaLongTen from 'pages/architecture/watSueaLongTen';
import Advice from 'pages/chiangrai/advice';
import Climate from 'pages/chiangrai/climate';
import History from 'pages/chiangrai/history';
import BongFire from 'pages/cuture/bongFire';
import KuaySaRark from 'pages/cuture/kuaySaRark';
import LinJee from 'pages/cuture/linJee';
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
      <ScrollPage children={<History />} />
      <ScrollPage children={<Climate />} />
      <ScrollPage children={<Advice />} />

      {/* *********** Architecture Page ************ */}
      <ScrollPage
        children={
          <PageHeader
            id='architecture'
            image={images.header6}
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
      <ScrollPage children={<PageHeader id='food' image={images.header4} text={<>อาหาร</>} />} />
      <ScrollPage children={<KaoSoi />} />
      <ScrollPage children={<HengLe />} />
      <ScrollPage children={<NamNgew />} />

      {/* *********** Cuture Page ************ */}
      <ScrollPage
        children={
          <PageHeader
            id='culture'
            image={images.header2}
            text={
              <>
                ศิลปะ<span className='pachautid tracking-wider'>วั</span>ฒนธรรม
              </>
            }
          />
        }
      />
      <ScrollPage children={<KuaySaRark />} />
      <ScrollPage children={<LinJee />} />
      <ScrollPage children={<BongFire />} />
    </ScrollContainer>
  );
};

export default App;
