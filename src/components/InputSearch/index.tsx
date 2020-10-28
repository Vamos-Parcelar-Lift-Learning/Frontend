import React from 'react';
import PropTypes from 'prop-types';
import { ContainerInputSearch } from './styles';

interface LabelInputSearch {
  placeholder: string;
  className: string;
  name: string;
}

const InputSearch: React.FC<LabelInputSearch> = ({
  placeholder,
  className,
  name,
}) => {
  return (
    <ContainerInputSearch
      className={className}
      placeholder={placeholder}
      name={name}
    />
  );
};

InputSearch.propTypes = {
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default InputSearch;
