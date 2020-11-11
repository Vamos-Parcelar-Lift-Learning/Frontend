import React from 'react';

import { Button, Text } from './styles';

interface SidebarProps {
  title: string;
  onClick?: any;
}
// eslint-disable-next-line react/prop-types
const SidebarButton: React.FC<SidebarProps> = ({ title, onClick }) => {
  return (
    <Button onClick={onClick}>
      <Text>{title}</Text>
    </Button>
  );
};

export default SidebarButton;
