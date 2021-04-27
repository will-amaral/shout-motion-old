import HealthReports from './HealthReports';
import Measurements from './Measurements';
import Overview from './Overview';
import Training from './Training';

const tabs = [
  { label: 'Geral', value: 'overview', content: Overview },
  { label: 'Medidas', value: 'measurements', content: Measurements },
  { label: 'Fichas', value: 'training', content: Training },
  { label: 'Relatórios', value: 'health-reports', content: HealthReports },
];

export default tabs;
