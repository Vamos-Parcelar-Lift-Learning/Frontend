import React from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import { Container } from './styles';
import colors from '../../styles/colors';

interface LabelCalendar {
  placeholder: string;
  name: string;
  value: string;
  onChange: (value: any) => void;
  hasError?: string | false | undefined;
}

const Calendar: React.FC<LabelCalendar> = ({
  placeholder,
  name,
  hasError,
  ...rest
}) => {
  // const [date, setDate] = React.useState<Date | null>(new Date());

  return (
    <Container>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid justify="center" style={{ paddingRight: 20, paddingLeft: 20 }}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            // value={date}
            InputProps={{
              disableUnderline: true,
              style: {
                fontSize: 16,
                color: colors.grayLight
              }
            }}
            // onChange={newDate => setDate(newDate)}
            KeyboardButtonProps={{
              'aria-label': 'change date'
            }}
            placeholder={placeholder}
            name={name}
            {...rest}
            disabled
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </Container>
  );
};

export default Calendar;
