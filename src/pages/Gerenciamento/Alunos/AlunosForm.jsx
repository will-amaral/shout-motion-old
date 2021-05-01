import PropTypes from 'prop-types';
import {
  Button,
  Grid,
  Select,
  CircularProgress,
  MenuItem,
  TextField,
} from '@material-ui/core';
import { DatePicker } from '@material-ui/lab';
import { Formik } from 'formik';
import { GENDERS } from 'utils/constants';

function AlunosForm(props) {
  const { initialValues, validationSchema, onSubmit } = props;

  const options = Object.values(GENDERS);

  const tiers = [1, 2, 3, 4, 5];

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        setFieldValue,
        touched,
        values,
      }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                error={Boolean(touched.name && errors.name)}
                fullWidth
                helperText={touched.name && errors.name}
                label='Nome completo'
                name='name'
                onBlur={handleBlur}
                onChange={handleChange}
                required
                value={values.name}
                variant='outlined'
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                error={Boolean(touched.email && errors.email)}
                fullWidth
                helperText={touched.email && errors.email}
                label='E-mail'
                name='email'
                onBlur={handleBlur}
                onChange={handleChange}
                required
                value={values.email}
                variant='outlined'
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                error={Boolean(touched.cpf && errors.cpf)}
                fullWidth
                helperText={touched.cpf && errors.cpf}
                label='CPF'
                name='cpf'
                onBlur={handleBlur}
                onChange={handleChange}
                required
                value={values.cpf}
                variant='outlined'
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                error={Boolean(touched.address && errors.address)}
                fullWidth
                helperText={touched.address && errors.address}
                label='Endereço'
                name='address'
                onBlur={handleBlur}
                onChange={handleChange}
                required
                value={values.address}
                variant='outlined'
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <Select
                variant='outlined'
                value={values.tier}
                onChange={handleChange}
                name='tier'
                fullWidth
              >
                <MenuItem disabled value={0}>
                  <em>Plano | Escolha um nível</em>
                </MenuItem>
                {tiers.map((opt) => (
                  <MenuItem key={opt} value={opt}>
                    Tier {opt}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item md={4} xs={12}>
              <Select
                variant='outlined'
                value={values.gender}
                onChange={handleChange}
                name='gender'
                fullWidth
              >
                <MenuItem disabled value={0}>
                  <em>Gênero | Escolha uma opção</em>
                </MenuItem>
                {options.map((opt) => (
                  <MenuItem key={opt} value={opt}>
                    {opt}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item md={4} xs={12}>
              <DatePicker
                disableFuture
                label='Data de nascimento'
                onChange={(date) => setFieldValue('birthdate', date)}
                renderInput={(inputProps) => (
                  <TextField
                    variant='outlined'
                    {...inputProps}
                    error={Boolean(touched.birthdate && errors.birthdate)}
                    helperText={touched.birthdate && errors.birthdate}
                    onBlur={handleBlur}
                    required
                    name='birthdate'
                    fullWidth
                  />
                )}
                value={values.birthdate}
              />
            </Grid>
          </Grid>
          <Button
            color='primary'
            disabled={isSubmitting}
            type='submit'
            variant='contained'
            sx={{ mt: 3 }}
            startIcon={isSubmitting && <CircularProgress size={15} />}
          >
            Adicionar Aluno
          </Button>
        </form>
      )}
    </Formik>
  );
}

AlunosForm.propTypes = {
  initialValues: PropTypes.object,
  validationSchema: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default AlunosForm;
