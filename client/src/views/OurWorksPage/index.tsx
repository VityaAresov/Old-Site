import { useState } from 'react';
import { Container } from '../../ui/Container';
import { Page } from '../../ui/Page';
import { Tabs } from './Tabs';
import { Description, Title } from './styled';
import { Tabs as TabsEnum } from './Tabs/tabs.enum';
import { Intro } from '../../components/Intro';
import { Collage } from './Collage';

const OurWorksPage = () => {
  const [currentTab, setCurrentTab] = useState<TabsEnum>(TabsEnum.WebsiteCreation);

  return (
    <Page>
      <Intro title="Our works" height="148px" />
      <Container>
        <Title>Our works</Title>
        <Description>Examples of all our work that show the quality of the services we provide</Description>
      </Container>
      <Tabs setCurrentTab={setCurrentTab} currentTab={currentTab} />
      <Collage currentTab={currentTab} />
    </Page>
  );
};

export default OurWorksPage;
