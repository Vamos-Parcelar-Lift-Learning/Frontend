import React from 'react';

import { Button, Text } from './styles';

interface SidebarProps {
  title: string;
}
// eslint-disable-next-line react/prop-types
const SidebarButton: React.FC<SidebarProps> = ({ title }) => {
  return (
    <Button>
      <Text>{title}</Text>
    </Button>
  );
};

export default SidebarButton;
