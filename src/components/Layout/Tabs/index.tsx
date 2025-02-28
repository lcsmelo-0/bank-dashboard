import React, { Children, ReactElement, ReactNode, useState } from "react";

import { TabButton, TabContent, TabList, TabsContainer } from "./styles";

interface TabProps {
  label: string;
  children: ReactNode;
}

interface TabsProps {
  children: ReactElement<TabProps>[];
}

export const Tab = ({ children }: TabProps) => <div>{children}</div>;

export const Tabs = ({ children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  const tabTitles = Children.map(children, (child) => child.props.label);

  return (
    <TabsContainer>
      <TabList>
        {React.Children.map(children, (child, index) => (
          <TabButton
            key={index}
            $isActive={index === activeTab}
            onClick={() => handleTabChange(index)}
          >
            {tabTitles[index]}
          </TabButton>
        ))}
      </TabList>
      <TabContent>{React.Children.toArray(children)[activeTab]}</TabContent>
    </TabsContainer>
  );
};
