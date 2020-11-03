import React, { useState } from 'react';
import { ExpandMore } from '@material-ui/icons';
import { Collapse } from '@material-ui/core';
import clsx from 'clsx';
import {
  CardDebit,
  CardContainer,
  InfoContainer,
  InfoText,
  CardCheckbox,
  CardTitle,
  CollapseButton,
  useStyles,
  CollapseInfo,
} from './styles';

const DebitCard: React.FC = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  return (
    <CardDebit>
      <CardContainer>
        <InfoContainer style={{ flex: 1 }}>
          <CardCheckbox checked name="checkCard" color="default" />
          <CardTitle>IPVA</CardTitle>
        </InfoContainer>

        <InfoContainer>
          <CardTitle style={{ marginRight: 10 }}>R$ 145,00</CardTitle>

          <CollapseButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMore style={{ fontSize: 25 }} />
          </CollapseButton>
        </InfoContainer>
      </CardContainer>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CollapseInfo>
          <InfoText>Validade: 20/06/2020</InfoText>
          <InfoText>DETRAN PB</InfoText>
          <InfoText>
            1. Deixar de dar preferência pedestre/veículo não motor na faixa
            destinada.
          </InfoText>
        </CollapseInfo>
      </Collapse>
    </CardDebit>
  );
};

export default DebitCard;
