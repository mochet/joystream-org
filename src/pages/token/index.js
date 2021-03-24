import React from 'react';
import SiteMetadata from '../../components/SiteMetadata';
import BaseLayout from '../../components/_layouts/Base';
import { sharedData } from '../../data/pages';
import Hero from '../../components/token-page/Hero';
import TokenInformation from '../../components/token-page/TokenInformation';
import PendingCashouts from '../../components/token-page/PendingCashouts';
import ArrowLink from '../../components/ArrowLink';
import useAxios from '../../utils/useAxios';

import './style.scss';

const TokensPage = () => {

  const [statusServerData, loading, error] = useAxios();

  return (
    <BaseLayout t={t} className="TokensPage">
      <SiteMetadata lang={language} title={t('siteMetadata.title')} description={t('pages.token')} />

      <Hero statusServerData={statusServerData}/>

      <TokenInformation />

      <PendingCashouts cashouts={statusServerData?.exchanges}/>
      
      <div className="TokensPage__cta-wrapper">
        <div className="TokensPage__cta">
          <h2 className="TokensPage__cta__title">Join our Discord and change the online video industry</h2>
          <ArrowLink className='TokensPage__cta__link' text="Open Discord" href={sharedData.social.discordLink} dark />
        </div>
      </div>
    </BaseLayout>
  );
};

export { TokensPage };
export default TokensPage;

// export const query = graphql`
//   query($language: String!) {
//     locales: allLocale(filter: { language: { eq: $language } }) {
//       edges {
//         node {
//           ns
//           data
//           language
//         }
//       }
//     }
//   }
// `;