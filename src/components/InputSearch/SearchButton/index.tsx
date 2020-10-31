import React from 'react';
import { Icons } from '../../../assets';
import { ContainerSearchButton, IconSearch } from './styles';

const SearchButton: React.FC = () => {
  return (
    <ContainerSearchButton>
      <IconSearch src={Icons.ICON_SEARCH} />
    </ContainerSearchButton>
  );
};

export default SearchButton;
