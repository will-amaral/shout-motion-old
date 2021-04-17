import PropTypes from 'prop-types';
import {
  Box,
  Card as MuiCard,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from '@material-ui/core';

function Card(props) {
  const { title, titleIcon, subheader, children, action } = props;
  return (
    <MuiCard>
      <CardHeader
        disableTypography
        subheader={
          <Typography color='textPrimary' variant='h6'>
            {subheader}
          </Typography>
        }
        title={
          <Box sx={{ alignItmems: 'center', display: 'flex', pb: 2 }}>
            {titleIcon}
            <Typography color='textPrimary' sx={{ pl: 1 }} variant='h6'>
              {title}
            </Typography>
          </Box>
        }
        sx={{ pb: 0 }}
      />
      <CardContent sx={{ pt: '8px' }}>
        <Typography color='textSecondary' variant='body2'>
          {children}
        </Typography>
      </CardContent>
      <CardActions sx={{ backgroundColor: 'background.default', p: 2 }}>
        {action}
      </CardActions>
    </MuiCard>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  subheader: PropTypes.string,
  action: PropTypes.node,
  title: PropTypes.string,
  titleIcon: PropTypes.node,
};

export default Card;
