import { Avatar, Box, Typography, Link, IconButton } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { Label } from 'components';
import { PencilAlt, ArrowRight } from 'components/icons';

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
    headerName: 'Plano',
    field: 'tier',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
    renderCell: (params) => <Label>Tier {params.getValue('tier')}</Label>,
  },
  {
    headerName: 'Ações',
    field: 'id',
    flex: 1,
    headerAlign: 'center',
    align: 'center',
    renderCell: (params) => (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton component={RouterLink} to={params.row.id + '/editar'}>
          <PencilAlt />
        </IconButton>
        <IconButton component={RouterLink} to={params.row.id}>
          <ArrowRight />
        </IconButton>
      </Box>
    ),
  },
];

export default columns;
