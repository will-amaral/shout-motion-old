import PropTypes from 'prop-types';
import { differenceInCalendarYears, format } from 'date-fns';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  Avatar,
  Divider,
  List,
  ListItem,
} from '@material-ui/core';
import { Label } from 'components';

function Overview(props) {
  const { aluno } = props;
  return (
    <Grid container spacing={3}>
      <Grid item lg={8} xl={9} xs={12}>
        <Card>
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Avatar src={aluno.photoUrl} sx={{ height: 75, width: 75, mr: 2 }}>
                {aluno.name.charAt(0)}
              </Avatar>
              <Box>
                <Typography color='textPrimary' variant='h5'>
                  {aluno.name}
                </Typography>
                <Typography color='textSecondary' variant='body1'>
                  {aluno.gender}
                </Typography>
              </Box>
            </Box>
            <Divider sx={{ mt: 3, mb: 1 }} />
            <Grid container>
              <Grid item lg={6}>
                <Typography color='textSecondary' variant='overline'>
                  E-mail
                </Typography>
                <Typography color='textPrimary' variant='body2' sx={{ mb: 2 }}>
                  {aluno.email}
                </Typography>
                <Typography color='textSecondary' variant='overline'>
                  Endereço
                </Typography>
                <Typography color='textPrimary' variant='body2' sx={{ mb: 2 }}>
                  {aluno.address}
                </Typography>
              </Grid>
              <Grid item>
                <Typography color='textSecondary' variant='overline'>
                  Idade
                </Typography>
                <Typography color='textPrimary' variant='body2' sx={{ mb: 2 }}>
                  {differenceInCalendarYears(new Date(), aluno.birthdate.toDate())}
                </Typography>
                <Typography color='textSecondary' variant='overline'>
                  CPF
                </Typography>
                <Typography color='textPrimary' variant='body2' sx={{ mb: 2 }}>
                  {aluno.cpf}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item lg={4} xl={3} xs={12}>
        <Card>
          <CardHeader
            avatar={<Avatar src='professor'>M</Avatar>}
            title={
              <Typography color='textSecondary' variant='overline'>
                Professor responsável
              </Typography>
            }
            subheader={
              <Typography color='textPrimary' variant='subtitle2'>
                Melissa Kelly do Amaral
              </Typography>
            }
            sx={{ pb: 0 }}
          />
          <CardContent sx={{ pt: 0 }}>
            <List>
              <ListItem
                divider
                disableGutters
                sx={{ justifyContent: 'space-between', p: 2 }}
              >
                <Typography color='textPrimary' variant='subtitle2'>
                  Plano
                </Typography>
                <Label>Tier {aluno.tier}</Label>
              </ListItem>
              <ListItem
                divider
                disableGutters
                sx={{ justifyContent: 'space-between', p: 2 }}
              >
                <Typography color='textPrimary' variant='subtitle2'>
                  Última Avaliação
                </Typography>
                <Typography color='textSecondary' variant='body2'>
                  {format(new Date(), 'dd.MM.yyyy ')}
                </Typography>
              </ListItem>
              <ListItem disableGutters sx={{ justifyContent: 'space-between', p: 2 }}>
                <Typography color='textPrimary' variant='subtitle2'>
                  Próxima Avaliação
                </Typography>
                <Typography color='warning.main' variant='body2'>
                  {format(new Date(2021, 4, 21), 'dd.MM.yyyy ')}
                </Typography>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

Overview.propTypes = {
  aluno: PropTypes.object,
};

export default Overview;
