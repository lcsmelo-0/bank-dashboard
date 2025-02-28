import React, { Children, ReactNode, useState } from "react";

import { TabButton, TabContent, TabList, TabsContainer } from "./styles";
import { Card } from "../Card";

interface TabProps {
  label: string;
  children: ReactNode;
}

interface TabsProps {
  children: ReactNode;
}

export const Tab = ({ children }: TabProps) => <div>{children}</div>;

export const Tabs = ({ children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  const tabTitles = Children.map(
    children,
    (child: React.ReactElement<{ label: string }>) => child.props.label
  );

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
