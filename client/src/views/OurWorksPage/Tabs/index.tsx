import React from 'react';
import { Container, StyledTabs, Tab } from './styled';
import { Tabs as TabsEnum } from './tabs.enum';

type TTabsProps = {
  currentTab: TabsEnum;
  setCurrentTab: (tab: TabsEnum) => void;
};

export const Tabs: React.FC<TTabsProps> = ({ setCurrentTab, currentTab }) => {
  return (
    <Container>
      <StyledTabs>
        {(Object.keys(TabsEnum) as Array<keyof typeof TabsEnum>).map((tab) => (
          <li key={tab}>
            <Tab onClick={() => setCurrentTab(TabsEnum[tab])} $isActive={currentTab === TabsEnum[tab]}>
              {TabsEnum[tab]}
            </Tab>
          </li>
        ))}
      </StyledTabs>
    </Container>
  );
};
