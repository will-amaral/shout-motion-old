import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Grid,
  Divider,
  Typography,
  Select,
  MenuItem,
} from '@material-ui/core';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Plus } from 'components/icons';
import { List, ListItem, LoadingScreen, Modal } from 'components';
import Error from 'pages/Status/Error';
import { db } from 'utils/lib/firebase';
import { pollockEquation } from 'utils/helper/equations';

function Measurements(props) {
  const { aluno } = props;
  const [selected, setSelected] = useState('vazio');
  const [superior, setSuperior] = useState();
  const [inferior, setInferior] = useState();
  const [skinfolds, setSkinfolds] = useState();
  const [data, loading, error] = useCollectionData(
    db.collection(`Users/${aluno.id}/Measurements`),
    { idField: 'id' }
  );

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  useEffect(() => {
    if (data && data.length > 0) {
      setSelected(data[0]);
    }
  }, [data]);

  useEffect(() => {
    if (selected) {
      setSuperior(selected.circumferenceSuperior);
      setInferior(selected.circumferenceInferior);
      setSkinfolds(selected.skinfolds);
    }
  }, [selected]);

  if (loading) return <LoadingScreen />;

  if (error) return <Error />;

  return (
    <>
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between' }}>
        <Select
          variant='outlined'
          value={selected}
          name='selected'
          onChange={handleChange}
        >
          <MenuItem disabled value='vazio'>
            Escolha uma avaliação
          </MenuItem>
          {data.map((item) => (
            <MenuItem key={item.id} value={item}>
              Avaliação - {item.createdAt.toDate().toLocaleDateString()}
            </MenuItem>
          ))}
        </Select>
        <Modal
          title='Nova Avaliação'
          buttonProps={{
            children: 'Nova avaliação',
            startIcon: <Plus fontSize='small' />,
            sx: { m: 1 },
          }}
        >
          <div>Este é um modal</div>
        </Modal>
      </Box>

      {data.length === 0 && (
        <Typography variant='body1' color='error'>
          Você ainda não adicionou nenhuma avaliação! <br /> Clique no botão 'Nova
          Avaliação' para adicionar uma.
        </Typography>
      )}

      <Grid container spacing={3}>
        {superior && (
          <Grid item lg={4} md={6} xs={12} xl={3}>
            <Card>
              <CardHeader
                title='Circunferências (cm)'
                subheader='Tronco e Membros Superiores'
              />
              <Divider />
              <List>
                <ListItem header='Tórax' value={superior.chest} />
                <ListItem
                  header='Braço Direito Contraído'
                  value={superior.rArm.contracted}
                />
                <ListItem
                  header='Braço Esquerdo Contraído'
                  value={superior.lArm.contracted}
                />
                <ListItem header='Braço Direito Relaxado' value={superior.rArm.relaxed} />
                <ListItem
                  header='Braço Esquerdo Relaxado'
                  value={superior.lArm.relaxed}
                />
                <ListItem header='Antebraço Direito' value={superior.rForearm} />
                <ListItem header='Antebraço Esquerdo' value={superior.lForearm} />
                <ListItem header='Abdominal' value={superior.abdominal} />
                <ListItem header='Cintura' value={superior.waist} />
              </List>
            </Card>
          </Grid>
        )}
        {inferior && (
          <Grid item lg={4} md={6} xs={12} xl={3}>
            <Card>
              <CardHeader title='Circunferências (cm)' subheader='Membros Inferiores' />
              <Divider />
              <List>
                <ListItem header='Escapular' value={inferior.scapular} />
                <ListItem header='Quadril' value={inferior.hip} />
                <ListItem header='Coxa Direita' value={inferior.rThigh} />
                <ListItem header='Coxa Esquerda' value={inferior.lThigh} />
                <ListItem header='Panturrilha Direita' value={inferior.rCalf} />
                <ListItem header='Panturrilha Esquerda' value={inferior.lCalf} />
              </List>
            </Card>
          </Grid>
        )}
        {skinfolds && (
          <Grid item lg={4} md={6} xs={12} xl={3}>
            <Card>
              <CardHeader title='Dobras (mm)' />
              <Divider />
              <List>
                <ListItem header='Peitoral' value={skinfolds.chest} />
                <ListItem header='Axilar Média' value={skinfolds.axilla} />
                <ListItem header='Subescapular' value={skinfolds.subscapular} />
                <ListItem header='Tricipital' value={skinfolds.tricep} />
                <ListItem header='Suprailíaca' value={skinfolds.suprailiac} />
                <ListItem header='Abdominal' value={skinfolds.abdominal} />
                <ListItem header='Coxa' value={skinfolds.thigh} />
                <ListItem
                  header='Densidade Corporal (g/cm³)'
                  value={pollockEquation(aluno, skinfolds)}
                />
              </List>
            </Card>
          </Grid>
        )}
      </Grid>
    </>
  );
}

Measurements.propTypes = {
  aluno: PropTypes.object,
};

export default Measurements;
