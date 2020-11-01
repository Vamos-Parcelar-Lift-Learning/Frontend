import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../../../assets';
import { ContainerSearchButton, IconSearch } from './styles';

const SearchButton: React.FC = () => {
  return (
    <Link to="/debit_consultation">
      <ContainerSearchButton>
        <IconSearch src={Icons.ICON_SEARCH} />
      </ContainerSearchButton>
    </Link>
  );
};

export default SearchButton;
