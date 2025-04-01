import React from 'react';
import styled from 'styled-components';
import { Hero } from './Hero';
import { Sidebar } from '../../layout/Sidebar';
import { WhoWeAre } from './WhoWeAre';
import { Divider } from '../../ui/Divider';
import { OurServices } from '../../components/OurServices';
// import { OurClients } from './OurClients';

const Page = styled.main`
  position: relative;
`;

const HomePage: React.FC = () => {
  return (
    <Page>
      <Sidebar />
      <Hero />
      <WhoWeAre />
      <Divider $height={488} $img={'./images/dividers/divider-1.webp'} />
      <OurServices />
      <Divider $height={550} $img={'./images/dividers/divider-2.webp'} />
      {/* This block is temporarily hidden by the client's request  */}
      {/* <OurClients /> */}
    </Page>
  );
};

export default HomePage;
