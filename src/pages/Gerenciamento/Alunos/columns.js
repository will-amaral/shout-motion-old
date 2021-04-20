import { Avatar, Box, Typography, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { differenceInCalendarYears } from 'date-fns';
import { Label } from 'components';

const colorMap = {
  1: '#80CEE1',
  2: '#fff176',
  3: '#D97740',
  4: '#C43D52',
  5: '#782A60',
};

const columns = [
  {
    headerName: 'Nome ',
    field: 'name',
    flex: 2,
    renderCell: (params) => (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          src={params.row.photoUrl}
          sx={{
            height: 42,
            width: 42,
          }}
        >
          {params.getValue('name') && params.getValue('name').charAt(0)}
        </Avatar>
        <Box sx={{ ml: 1, lineHeight: 'initial' }}>
          <Link
            color='inherit'
            component={RouterLink}
            variant='subtitle2'
            to={`/alunos/${params.row.id}`}
          >
            {params.getValue('name')}
          </Link>
          <Typography color='textSecondary' variant='body2'>
            {params.row.email}
          </Typography>
        </Box>
      </Box>
    ),
  },
  {
    headerName: 'Idade',
    field: 'birthdate',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
    valueFormatter: (params) =>
      differenceInCalendarYears(Date.now(), params.value.toDate()),
  },
  {
    headerName: 'Plano',
    field: 'tier',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
    renderCell: (params) => (
      <Label color={colorMap[params.getValue('tier')]}>
        Tier {params.getValue('tier')}
      </Label>
    ),
  },
  {
    headerName: 'Ações',
    field: 'actions',
    flex: 1,
    headerAlign: 'center',
    align: 'center',
  },
];

export default columns;
