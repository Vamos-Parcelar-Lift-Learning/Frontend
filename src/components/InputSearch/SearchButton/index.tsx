import React from 'react';
import { Icons } from '../../../assets';
import { ContainerSearchButton, IconSearch } from './styles';

interface SearchButtonProps {
  onClick: () => void;
}
const SearchButton: React.FC<SearchButtonProps> = ({ onClick }) => {
  return (
    <ContainerSearchButton onClick={onClick}>
      <IconSearch src={Icons.ICON_SEARCH} />
    </ContainerSearchButton>
  );
};

export default SearchButton;
