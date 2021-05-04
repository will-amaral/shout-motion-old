import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Grid,
  CircularProgress,
  TextField,
  Typography,
  DialogActions,
  DialogContent,
  Stepper,
  Step,
  StepLabel,
} from '@material-ui/core';

const steps = ['Tronco e Membros Superiores', 'Membros Inferiores', 'Dobras'];

function NewForm(props) {
  const { close } = props;
  const [active, setActive] = useState(0);
  const [superior, setSuperior] = useState({
    chest: '',
    rArmContracted: '',
    lArmContracted: '',
    rArmRelaxed: '',
    lArmRelaxed: '',
    rForearm: '',
    abdominal: '',
    waist: '',
  });
  const [inferior, setInferior] = useState();
  const [skinfolds, setSkinfolds] = useState();

  const handleNext = () => setActive((prev) => prev + 1);
  const handleBack = () => setActive((prev) => prev - 1);

  const handleChange = (e) => {
    const obj = {};
    const { name, value } = e.target;
    obj[name] = value;

    switch (active) {
      case 0:
        setSuperior((prev) => ({ ...prev, ...obj }));
        break;

      case 1:
        setInferior((prev) => ({ ...prev, ...obj }));
        break;

      case 2:
        setSkinfolds((prev) => ({ ...prev, ...obj }));
        break;

      default:
        break;
    }
  };

  return (
    <>
      <DialogContent>
        <Stepper activeStep={active} alternativeLabel sx={{ mb: 3 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Typography variant='h5' textAlign='center'>
          {steps[active]}
        </Typography>

        {active === 0 && (
          <Grid container spacing={4} mt={1} justifyContent='center'>
            <Grid item>
              <Box mb={2}>
                <TextField
                  name='chest'
                  label='Tórax'
                  onChange={handleChange}
                  value={superior.chest}
                />
              </Box>
              <Box mb={2}>
                <TextField
                  name='rArmContracted'
                  label='Braço Direito Contraído'
                  onChange={handleChange}
                  value={superior.rArmContracted}
                />
              </Box>
              <Box>
                <TextField
                  name='lArmContracted'
                  label='Braço Esquerdo Contraído'
                  onChange={handleChange}
                  value={superior.lArmContracted}
                />
              </Box>
            </Grid>
            <Grid item>
              <Box mb={2}>
                <TextField
                  name='rArmRelaxed'
                  label='Braço Direito Relaxado'
                  onChange={handleChange}
                  value={superior.rArmRelaxed}
                />
              </Box>
              <Box mb={2}>
                <TextField
                  name='lArmRelaxed'
                  label='Braço Esquerdo Relaxado'
                  onChange={handleChange}
                  value={superior.lArmRelaxed}
                />
              </Box>
              <Box>
                <TextField
                  name='rForearm'
                  label='Antebraço Direito'
                  onChange={handleChange}
                  value={superior.rForearm}
                />
              </Box>
            </Grid>
            <Grid item>
              <Box mb={2}>
                <TextField
                  name='lForearm'
                  label='Antebraço Esquerdo'
                  onChange={handleChange}
                  value={superior.lForearm}
                />
              </Box>
              <Box mb={2}>
                <TextField
                  name='abdominal'
                  label='Abdominal'
                  onChange={handleChange}
                  value={superior.abdominal}
                />
              </Box>
              <Box>
                <TextField
                  name='waist'
                  label='Cintura'
                  onChange={handleChange}
                  value={superior.waist}
                />
              </Box>
            </Grid>
          </Grid>
        )}
      </DialogContent>
      <DialogActions>
        {active === 0 ? (
          <Button onClick={close}>Cancelar </Button>
        ) : (
          <Button onClick={handleBack}>Voltar </Button>
        )}

        {active !== steps.length - 1 ? (
          <Button onClick={handleNext} variant='contained'>
            Próximo
          </Button>
        ) : (
          <Button onClick={close} variant='contained'>
            Salvar
          </Button>
        )}
      </DialogActions>
    </>
  );
}

NewForm.propTypes = {
  close: PropTypes.func,
};

export default NewForm;
