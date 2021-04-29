import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, Grid, Divider, Typography } from '@material-ui/core';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { List, ListItem, LoadingScreen } from 'components';
import Error from 'pages/Status/Error';
import { db } from 'utils/lib/firebase';

function Measurements(props) {
  const { aluno } = props;
  const [selected, setSelected] = useState();
  const [data, loading, error] = useCollectionData(
    db.collection(`Users/${aluno.id}/Measurements`),
    { idField: 'id' }
  );

  useEffect(() => {
    if (data && !selected) {
      setSelected(data[0]);
    }
  }, [data, selected]);

  if (loading) return <LoadingScreen />;

  if (error) return <Error />;

  if (!selected && data.length === 0) return <Typography>Não existem dados</Typography>;

  if (!selected) return null;

  return (
    <Grid container spacing={3}>
      <Grid item lg={4} md={6} xs={12} xl={3}>
        <Card>
          <CardHeader
            title='Circunferências (cm)'
            subheader='Tronco e Membros Superiores'
          />
          <Divider />
          <List>
            <ListItem header='Tórax' value={selected.chestC} />
            <ListItem header='Braço Direito Contraído' value={selected.rArmContracted} />
            <ListItem header='Braço Esquerdo Contraído' value={selected.lArmContracted} />
            <ListItem header='Braço Direito Relaxado' value={selected.rArmRelaxed} />
            <ListItem header='Braço Esquerdo Relaxado' value={selected.lArmRelaxed} />
            <ListItem header='Antebraço Direito' value={selected.rForearm} />
            <ListItem header='Antebraço Esquerdo' value={selected.lForearm} />
            <ListItem header='Abdominal' value={selected.abdominalC} />
            <ListItem header='Cintura' value={selected.waist} />
          </List>
        </Card>
      </Grid>
      <Grid item lg={4} md={6} xs={12} xl={3}>
        <Card>
          <CardHeader title='Circunferências (cm)' subheader='Membros Inferiores' />
          <Divider />
          <List>
            <ListItem header='Escapular' value={selected.scapular} />
            <ListItem header='Quadril' value={selected.hip} />
            <ListItem header='Coxa Direita' value={selected.rThighC} />
            <ListItem header='Coxa Esquerda' value={selected.lThighC} />
            <ListItem header='Panturrilha Direita' value={selected.rCalf} />
            <ListItem header='Panturrilha Esquerda' value={selected.lCalf} />
          </List>
        </Card>
      </Grid>
      <Grid item lg={4} md={6} xs={12} xl={3}>
        <Card>
          <CardHeader title='Dobras (mm)' />
          <Divider />
          <List>
            <ListItem header='Peitoral' value={selected.chestSF} />
            <ListItem header='Axilar Média' value={selected.axillaSF} />
            <ListItem header='Subescapular' value={selected.subscapularSF} />
            <ListItem header='Tricipital' value={selected.tricepSF} />
            <ListItem header='Suprailíaca' value={selected.suprailiacSF} />
            <ListItem header='Abdominal' value={selected.abdominalSF} />
            <ListItem header='Coxa' value={selected.thighSF} />
            <ListItem header='Densidade Corporal (g/cm³)' value={'1,08'} />
          </List>
        </Card>
      </Grid>
    </Grid>
  );
}

Measurements.propTypes = {
  aluno: PropTypes.object,
};

export default Measurements;
