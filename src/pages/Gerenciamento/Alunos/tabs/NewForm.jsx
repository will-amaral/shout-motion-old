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
import { NumberFormat } from 'components';

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
  const [inferior, setInferior] = useState({
    scapular: '',
    hip: '',
    rThigh: '',
    lThigh: '',
    rCalf: '',
    lCalf: '',
  });
  const [skinfolds, setSkinfolds] = useState({
    chest: '',
    axilla: '',
    subscapular: '',
    tricep: '',
    suprailiac: '',
    abdominal: '',
    thigh: '',
  });

  const handleNext = () => setActive((prev) => prev + 1);
  const handleBack = () => setActive((prev) => prev - 1);

  const handleSuperiorChange = (e) =>
    setSuperior((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleInferiorChange = (e) =>
    setInferior((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSkinfoldChange = (e) =>
    setSkinfolds((prev) => ({ ...prev, [e.target.name]: e.target.value }));

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
                  onChange={handleSuperiorChange}
                  value={superior.chest}
                  InputProps={{ inputComponent: NumberFormat }}
                />
              </Box>
              <Box mb={2}>
                <TextField
                  name='rArmContracted'
                  label='Braço Direito Contraído'
                  onChange={handleSuperiorChange}
                  value={superior.rArmContracted}
                  InputProps={{ inputComponent: NumberFormat }}
                />
              </Box>
              <Box>
                <TextField
                  name='lArmContracted'
                  label='Braço Esquerdo Contraído'
                  onChange={handleSuperiorChange}
                  value={superior.lArmContracted}
                  InputProps={{ inputComponent: NumberFormat }}
                />
              </Box>
            </Grid>
            <Grid item>
              <Box mb={2}>
                <TextField
                  name='rArmRelaxed'
                  label='Braço Direito Relaxado'
                  onChange={handleSuperiorChange}
                  InputProps={{ inputComponent: NumberFormat }}
                  value={superior.rArmRelaxed}
                />
              </Box>
              <Box mb={2}>
                <TextField
                  name='lArmRelaxed'
                  label='Braço Esquerdo Relaxado'
                  onChange={handleSuperiorChange}
                  InputProps={{ inputComponent: NumberFormat }}
                  value={superior.lArmRelaxed}
                />
              </Box>
              <Box>
                <TextField
                  name='rForearm'
                  label='Antebraço Direito'
                  onChange={handleSuperiorChange}
                  InputProps={{ inputComponent: NumberFormat }}
                  value={superior.rForearm}
                />
              </Box>
            </Grid>
            <Grid item>
              <Box mb={2}>
                <TextField
                  name='lForearm'
                  label='Antebraço Esquerdo'
                  onChange={handleSuperiorChange}
                  InputProps={{ inputComponent: NumberFormat }}
                  value={superior.lForearm}
                />
              </Box>
              <Box mb={2}>
                <TextField
                  name='abdominal'
                  label='Abdominal'
                  onChange={handleSuperiorChange}
                  InputProps={{ inputComponent: NumberFormat }}
                  value={superior.abdominal}
                />
              </Box>
              <Box>
                <TextField
                  name='waist'
                  label='Cintura'
                  onChange={handleSuperiorChange}
                  InputProps={{ inputComponent: NumberFormat }}
                  value={superior.waist}
                />
              </Box>
            </Grid>
          </Grid>
        )}

        {active === 1 && (
          <Grid container spacing={4} mt={1} justifyContent='center'>
            <Grid item>
              <Box mb={2}>
                <TextField
                  name='scapular'
                  label='Escapular'
                  onChange={handleInferiorChange}
                  value={inferior.scapular}
                  InputProps={{ inputComponent: NumberFormat }}
                />
              </Box>
              <Box mb={2}>
                <TextField
                  name='hip'
                  label='Quadril'
                  onChange={handleInferiorChange}
                  value={inferior.hip}
                  InputProps={{ inputComponent: NumberFormat }}
                />
              </Box>
              <Box>
                <TextField
                  name='rThigh'
                  label='Coxa Direita'
                  onChange={handleInferiorChange}
                  value={inferior.rThigh}
                  InputProps={{ inputComponent: NumberFormat }}
                />
              </Box>
            </Grid>
            <Grid item>
              <Box mb={2}>
                <TextField
                  name='lThigh'
                  label='Coxa Esquerda'
                  onChange={handleInferiorChange}
                  value={inferior.lThigh}
                  InputProps={{ inputComponent: NumberFormat }}
                />
              </Box>
              <Box mb={2}>
                <TextField
                  name='rCalf'
                  label='Panturrilha Direita'
                  onChange={handleInferiorChange}
                  InputProps={{ inputComponent: NumberFormat }}
                  value={inferior.rCalf}
                />
              </Box>
              <Box>
                <TextField
                  name='lCalf'
                  label='Panturrilha Esquerda'
                  onChange={handleInferiorChange}
                  InputProps={{ inputComponent: NumberFormat }}
                  value={inferior.lCalf}
                />
              </Box>
            </Grid>
          </Grid>
        )}

        {active === 2 && (
          <Grid container spacing={4} mt={1} justifyContent='center'>
            <Grid item>
              <Box mb={2}>
                <TextField
                  name='chest'
                  label='Peitoral'
                  onChange={handleSkinfoldChange}
                  value={skinfolds.chest}
                  InputProps={{ inputComponent: NumberFormat }}
                />
              </Box>
              <Box mb={2}>
                <TextField
                  name='axilla'
                  label='Axilar Média'
                  onChange={handleSkinfoldChange}
                  value={skinfolds.axilla}
                  InputProps={{ inputComponent: NumberFormat }}
                />
              </Box>
              <Box mb={2}>
                <TextField
                  name='subscapular'
                  label='Subescapular'
                  onChange={handleSkinfoldChange}
                  value={skinfolds.subscapular}
                  InputProps={{ inputComponent: NumberFormat }}
                />
              </Box>
              <Box>
                <TextField
                  name='tricep'
                  label='Tricipital'
                  onChange={handleSkinfoldChange}
                  value={skinfolds.tricep}
                  InputProps={{ inputComponent: NumberFormat }}
                />
              </Box>
            </Grid>
            <Grid item>
              <Box mb={2}>
                <TextField
                  name='suprailiac'
                  label='Suprailíaca'
                  onChange={handleSkinfoldChange}
                  value={skinfolds.suprailiac}
                  InputProps={{ inputComponent: NumberFormat }}
                />
              </Box>
              <Box mb={2}>
                <TextField
                  name='abdominal'
                  label='Abdominal'
                  onChange={handleSkinfoldChange}
                  InputProps={{ inputComponent: NumberFormat }}
                  value={skinfolds.abdominal}
                />
              </Box>
              <Box>
                <TextField
                  name='thigh'
                  label='Coxa'
                  onChange={handleSkinfoldChange}
                  InputProps={{ inputComponent: NumberFormat }}
                  value={skinfolds.thigh}
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
