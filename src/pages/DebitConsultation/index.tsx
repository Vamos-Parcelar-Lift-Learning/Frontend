import React, { useState } from 'react';
import { ExpandMore } from '@material-ui/icons';
import { Collapse } from '@material-ui/core';
import clsx from 'clsx';
import { Button } from '../../components';

import {
  Container,
  Title,
  CardDebit,
  CollapseButton,
  CardContainer,
  InfoContainer,
  useStyles,
  CardTitle,
  CardCheckbox,
} from './styles';

const Cart: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();

  return (
    <Container>
      <Title>Débitos rastreados</Title>
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
          <h1>sdaadsdsa</h1>
          <h1>sdaadsdsa</h1>
          <h1>sdaadsdsa</h1>
        </Collapse>
      </CardDebit>

      <Button>Seguir</Button>
    </Container>
  );
};

export default Cart;
