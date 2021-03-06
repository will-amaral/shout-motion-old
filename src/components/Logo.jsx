import PropTypes from 'prop-types';
import { experimentalStyled } from '@material-ui/core/styles';

const LogoRoot = experimentalStyled('svg')();

function Logo(props) {
  const { isWhite, ...rest } = props;
  const fill = isWhite ? 'fill:white;' : 'fill:url(#green_to_green);';
  return (
    <LogoRoot height='80' version='1.1' viewBox='0 0 538.84 689.89' width='80' {...rest}>
      <defs>
        <style dangerouslySetInnerHTML={{ __html: `.cls-1{${fill}}` }} />
        <linearGradient
          id='green_to_green'
          y1='344.95'
          x2='538.84'
          y2='344.95'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset={0} stopColor='#04db92' />
          <stop offset='0.98' stopColor='#0cd8d4' />
        </linearGradient>
      </defs>
      <title>Shout Motion</title>
      <g id='Camada_2' data-name='Camada 2'>
        <g id='Camada_1-2' data-name='Camada 1'>
          <path
            className='cls-1'
            d='M508.53,298.6c-22.56-26.85-44.83-54-68.87-79.52-12.9-13.66-16.92-25.79-9.33-43.64,8.2-19.24,13.35-39.78,17.62-53C456.3,72.05,441.58,37,407,15.23S326.37-5.76,292.33,23C203.93,97.67,116.24,173.25,30.15,250.57c-38.53,34.6-39.35,89.78-6.92,130,15.4,19.1,29.77,39.78,48.19,55.56,39,33.38,45.43,68.61,24.83,116.51-22.39,52-7.42,94.66,31.66,120.54,39.71,26.28,82.63,21.57,125-14.29C333.14,590.9,413,522.34,493.5,454.67,547.85,409,553.93,352.63,508.53,298.6Zm-60.4,106.79c-52.7,46.26-105.94,91.91-159,137.78-14.62,12.64-29.87,24.85-49.7,10.53-17.78-12.83-14-29.94-7.67-47.43,9.54-26.37,18.44-53,30.18-86.84-4.15-8.15-8.68-22.48-17.48-33.38-27.87-34.54-57.59-67.59-86.12-101.62-23.53-28.09-22.4-40.4,5.45-64.31q77.13-66.24,154.65-132c3.56-3,7.38-5.74,11-8.7,13.05-10.73,29-16.24,40.69-2.77,7.6,8.77,11.29,25.18,9.38,37-3.12,19.3-11.48,37.93-19,56.29C348.25,200,351.3,225,375.72,249.44c28,28,52.78,59.38,77.85,90.19C476,367.22,474.65,382.1,448.13,405.39Z'
          />
        </g>
      </g>
    </LogoRoot>
  );
}

Logo.propTypes = {
  isWhite: PropTypes.bool,
};

Logo.defaultProps = {
  isWhite: false,
};

export default Logo;
