import React from 'react';
import PropTypes from 'prop-types';
import { ContainerInputSearch } from './styles';

// 'px' posição em tela definidos no styles do componente
interface InputSearchConfigurationProps {
  left: '68.66px' | '398px';
  top: '312.6px' | '92.6px';
}

interface LabelInputSearch extends InputSearchConfigurationProps {
  placeholder: string;
}

const InputSearch: React.FC<LabelInputSearch> = (
  { placeholder },
  { left, top },
) => {
  return (
    <div>
      <ContainerInputSearch placeholder={placeholder} left={left} top={top} />
    </div>
  );
};

InputSearch.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default InputSearch;
