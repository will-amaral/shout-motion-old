import PropTypes from 'prop-types';
import { Box, Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';

function Overview(props) {
  const { aluno } = props;
  console.log(aluno);
  return (
    <Grid container spacing={3}>
      <Grid item lg={8} xl={9} xs={12}>
        <Card>
          <CardContent>
            <Box sx={{ display: 'flex' }}>
              <Avatar src={aluno.photoUrl} sx={{ height: 75, width: 75 }}>
                {aluno.name.charAt(0)}
              </Avatar>
            </Box>
            <Typography></Typography>
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
