import { Layout } from 'antd';
import React from 'react';
import { useStore } from '@oyster/common';
import { useMeta } from '../../contexts';
import { SalesListView } from './components/SalesList';
import { SetupView } from './setup';

export const HomeView = () => {
  // const { isLoading, store } = useMeta();
  // const { isConfigured } = useStore();

  // const showAuctions = (store && isConfigured) || isLoading;

  return (
    <Layout style={{ margin: 0, marginTop: 30, alignItems: 'center' }}>
      {/* {showAuctions ? <SalesListView /> : <SetupView />} */}
      <img src="/img/moon_night_stars.jpg" style={{position: 'fixed', top: 0, zIndex: -1}} />
      <img src="/img/CryptoGangLogo.png" />
      <img src="/img/CryptoGangs.png" />
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '50px 0', backgroundColor: '#223344', width: '100vw'}}>
        <img src="/img/GryptoGangsAnimation.gif" />
        <div style={{fontSize: '25px', padding: '0 20px', textAlign: 'center'}}>
          <span style={{fontSize: '35px'}}>Join the</span> <br />
          CRYPTOGANG! <br />
          Crypto Gang is an assembly of 10,000 uniquely generated <br />
          NFTs that project the entire Crypto World! 10 Gangs are to be <br />
          released, each embodying the top ten Cryptocurrency <br />
          Communities in circulation today. Each exclusive gang will <br />
          embody the traits of the respective nation they represent. <br />
          Show your allegiance to your favorite project and rep your <br />
          Crypto Gang!
        </div>
      </div>
      <div>
        <div style={{textAlign: 'center', fontSize: '100px', fontWeight: 'bold', margin: '20px 0', textShadow: '5px 5px #ffaaaa'}}>
          WHO DO YOU REP?
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div>
            <img src="/img/DR.CONTRACTZ ETHEREUM GANG.jpg" width="400px" style={{borderRadius: '20px', margin: '0 20px'}} />
            <div style={{textAlign: 'center', fontSize: '20px', fontWeight: 'bold'}}>DR.CONTRACTZ - ETHEREUM GANG</div>
          </div>
          <div>
            <img src="/img/MASTER.SATOSHI BITCOIN GANG.jpg" width="400px" style={{borderRadius: '20px', margin: '0 20px'}} />
            <div style={{textAlign: 'center', fontSize: '20px', fontWeight: 'bold'}}>MASTER SATOSHI - BITCOIN GANG</div>
          </div>
          <div>
            <img src="/img/BIG.C CARDANO GANG.jpg" width="400px" style={{borderRadius: '20px', margin: '0 20px'}} />
            <div style={{textAlign: 'center', fontSize: '20px', fontWeight: 'bold'}}>BIG C - CARDANO GANG</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
