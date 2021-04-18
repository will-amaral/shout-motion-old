import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { Box, Container } from '@material-ui/core';
import { useSettings } from 'hooks';

function Wrapper(props) {
  const { title, children, metaTags } = props;
  const { settings } = useSettings();
  return (
    <>
      <Helmet>
        <title>{title}</title>
        {metaTags}
      </Helmet>
      <Box sx={{ backgroundColor: 'background.default', minHeight: '100%', py: 8 }}>
        <Container maxWidth={settings.compact ? 'xl' : false}>{children}</Container>
      </Box>
    </>
  );
}

Wrapper.propTypes = {
  title: PropTypes.string,
  metaTags: PropTypes.node,
  children: PropTypes.node,
};

export default Wrapper;
