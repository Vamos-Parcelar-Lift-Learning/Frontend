import React, { useState, useCallback } from 'react';
import { ExpandMore } from '@material-ui/icons';
import { Collapse } from '@material-ui/core';
import clsx from 'clsx';
import { format, parseISO } from 'date-fns';
import find from 'lodash/find';
import { useCart } from '../../hooks/cart';
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
  const { addBill, removeBill, bills } = useCart();

  const handleCheck = useCallback((checked: boolean)=>{
    if(checked){
      addBill(bill);
    }else{
      removeBill(bill);
    }
  }, [bill, removeBill, addBill]);

  return (
    <CardDebit>
      <CardContainer>
        <InfoContainer style={{ flex: 1 }}>
          <CardCheckbox
            checked={!!find(bills, (item)=> item.code === bill.code)}
            name="checkCard"
            color="default"
            onChange={(e) => handleCheck(e.target.checked)}
          />
          <CardTitle>{bill.name}</CardTitle>
        </InfoContainer>

        <InfoContainer>
          <CardTitle style={{ marginRight: 10 }}>
            {`R$ ${bill.amount},00`}
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
