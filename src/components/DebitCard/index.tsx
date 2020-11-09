import React, { useState } from 'react';
import { ExpandMore } from '@material-ui/icons';
import { Collapse } from '@material-ui/core';
import clsx from 'clsx';
import { format, parseISO } from 'date-fns';
import {
  CardDebit,
  CardContainer,
  InfoContainer,
  InfoText,
  CardCheckbox,
  CardTitle,
  CollapseButton,
  useStyles,
  CollapseInfo
} from './styles';

interface DebitCardProps {
  bill: any;
}

const DebitCard: React.FC<DebitCardProps> = ({ bill }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <CardDebit>
      <CardContainer>
        <InfoContainer style={{ flex: 1 }}>
          <CardCheckbox checked={selected} name="checkCard" color="default" onChange={(e)=>setSelected(e.target.checked)} />
          <CardTitle>{bill.name}</CardTitle>
        </InfoContainer>

        <InfoContainer>
          <CardTitle style={{ marginRight: 10 }}>
            {`R$ ${bill.amonut},00`}
          </CardTitle>

          <CollapseButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
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
          <InfoText>
            {`Validade: ${format(
              parseISO(bill.expiration_date),
              'dd/MM/yyyy'
            )}`}
          </InfoText>
          <InfoText>{bill.issuer}</InfoText>
          <InfoText>{bill.description}</InfoText>
        </CollapseInfo>
      </Collapse>
    </CardDebit>
  );
};

export default DebitCard;
