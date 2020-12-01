import React from 'react';
import { Icons } from '../../../assets';
import { ContainerSearchButton, IconSearch } from './styles';

interface SearchButtonProps {
  onClick: () => void;
  name: string;
}
const SearchButton: React.FC<SearchButtonProps> = ({ onClick, name }) => {
  return (
    <ContainerSearchButton name={name} onClick={onClick}>
      <IconSearch src={Icons.ICON_SEARCH} />
    </ContainerSearchButton>
  );
};

export default SearchButton;
