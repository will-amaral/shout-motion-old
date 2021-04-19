import { Avatar, Box, Typography, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { parseISO, differenceInCalendarYears } from 'date-fns';

const columns = [
  {
    headerName: 'Nome ',
    field: 'name',
    flex: 2,
    renderCell: (params) => (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          src={params.getValue('photoUrl')}
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
            to={`/alunos/${params.getValue('id')}`}
          >
            {params.getValue('name')}
          </Link>
          <Typography color='textSecondary' variant='body2'>
            {params.getValue('email')}
          </Typography>
        </Box>
      </Box>
    ),
  },
  {
    headerName: 'Idade',
    field: 'birthdate',
    flex: 0.5,
    valueFormatter: (params) =>
      differenceInCalendarYears(Date.now(), parseISO(params.value)),
  },
  { headerName: 'Plano', field: 'plan', flex: 1 },
  { headerName: 'Ações', field: 'actions', flex: 1 },
];

export default columns;
