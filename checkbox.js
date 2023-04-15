import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const PREFIX = 'Demo';

const classes = {
    checkBoxContainer: `${PREFIX}-checkBoxContainer`,
    textField: `${PREFIX}-textField`,
  };

const StyledGrid = styled(Grid)(({ theme: { spacing } }) => ({
    [`&.${classes.checkBoxContainer}`]: {
      paddingTop: spacing(1),
      paddingBottom: spacing(1),
      paddingLeft: spacing(4),
    },
  }));


const ShadeCellsCheckBox = ({ shadePreviousCells, handleChange }) => (
    <FormControlLabel
      control={(
        <Checkbox
          checked={shadePreviousCells}
          onChange={() => handleChange('shadePreviousCells')}
          color="primary"
        />
      )}
      label="Shade previous cells"
    />
  );

  const ShadePreviousAppointmentsCheckBox = ({ shadePreviousAppointments, handleChange }) => (
    <FormControlLabel
      control={(
        <Checkbox
          checked={shadePreviousAppointments}
          onChange={() => handleChange('shadePreviousAppointments')}
          color="primary"
        />
      )}
      label="Shade previous appointments"
    />
  );

  export const CheckBoxContainer = (({
    shadePreviousCells, shadePreviousAppointments, handleCheckboxChange,
  }) => (
    <StyledGrid item container direction="column" className={classes.checkBoxContainer} xs={6}>
      <ShadeCellsCheckBox
        shadePreviousCells={shadePreviousCells}
        handleChange={handleCheckboxChange}
      />
      <ShadePreviousAppointmentsCheckBox
      shadePreviousAppointments={shadePreviousAppointments}
      handleChange={handleCheckboxChange}
      />
      </StyledGrid>
));