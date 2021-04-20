import { Card, makeStyles } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
      borderBottom: `1px solid ${
        theme.palette.type === 'light'
          ? 'rgba(224, 224, 224, 1)'
          : 'rgba(145, 158, 171, 0.24)'
      }`,
    },
    '& .MuiDataGrid-columnSeparator': {
      color: 'transparent',
    },
  },
}));

const localeText = {
  // Root
  rootGridLabel: 'tabela',
  noRowsLabel: 'Não existem dados',
  errorOverlayDefaultLabel: 'Ops, algo deu errado',

  // Density selector toolbar button text
  toolbarDensity: 'Densidade',
  toolbarDensityLabel: 'Densidade',
  toolbarDensityCompact: 'Compacto',
  toolbarDensityStandard: 'Padrão',
  toolbarDensityComfortable: 'Confortável',

  // Columns selector toolbar button text
  toolbarColumns: 'Colunas',
  toolbarColumnsLabel: 'Selecionar colunas',

  // Filters toolbar button text
  toolbarFilters: 'Filtros',
  toolbarFiltersLabel: 'Mostrar filtros',
  toolbarFiltersTooltipHide: 'Esconder filtros',
  toolbarFiltersTooltipShow: 'Mostrar filtros',
  toolbarFiltersTooltipActive: (count) =>
    count !== 1 ? `${count} filtros ativos` : `${count} filtro ativo`,

  // Export selector toolbar button text
  toolbarExport: 'Exportar',
  toolbarExportLabel: 'Exportar',
  toolbarExportCSV: 'Baixar como CSV',

  // Columns panel text
  columnsPanelTextFieldLabel: 'Encontrar coluna',
  columnsPanelTextFieldPlaceholder: 'Título da coluna',
  columnsPanelDragIconLabel: 'Reordenar coluna',
  columnsPanelShowAllButton: 'Mostrar tudo',
  columnsPanelHideAllButton: 'Esconder tudo',

  // Filter panel text
  filterPanelAddFilter: 'Adicionar filtro',
  filterPanelDeleteIconLabel: 'Deletar',
  filterPanelOperators: 'Operadores',
  filterPanelOperatorAnd: 'E',
  filterPanelOperatorOr: 'Ou',
  filterPanelColumns: 'Colunas',
  filterPanelInputLabel: 'Valor',
  filterPanelInputPlaceholder: 'Filtrar valor',

  // Filter operators text
  filterOperatorContains: 'contém',
  filterOperatorEquals: 'igual (=)',
  filterOperatorStartsWith: 'começa com',
  filterOperatorEndsWith: 'termina com',
  filterOperatorIs: 'é',
  filterOperatorNot: 'não é',
  filterOperatorAfter: 'é depois',
  filterOperatorOnOrAfter: 'é igual ou depois',
  filterOperatorBefore: 'é antes',
  filterOperatorOnOrBefore: 'é igual ou antes',

  // Filter values text
  filterValueAny: 'qualquer',
  filterValueTrue: 'verdadeiro',
  filterValueFalse: 'falso',

  // Column menu text
  columnMenuLabel: 'Menu',
  columnMenuShowColumns: 'Mostrar colunas',
  columnMenuFilter: 'Filtrar',
  columnMenuHideColumn: 'Escondar',
  columnMenuUnsort: 'Remover ordenação',
  columnMenuSortAsc: 'Ordenar ASC',
  columnMenuSortDesc: 'Ordenar DESC',

  // Column header text
  columnHeaderFiltersTooltipActive: (count) =>
    count !== 1 ? `${count} filtros ativos` : `${count} filtro ativo`,
  columnHeaderFiltersLabel: 'Mostrar filtros',
  columnHeaderSortIconLabel: 'Ordenar',

  // Rows selected footer text
  footerRowSelected: (count) =>
    count !== 1
      ? `${count.toLocaleString()} linhas selecionadas`
      : `${count.toLocaleString()} linha selecionada`,

  // Total rows footer text
  footerTotalRows: 'Total de linhas: ',

  // Checkbox selection text
  checkboxSelectionHeaderName: 'Caixa de seleção',

  // Boolean cell text
  booleanCellTrueLabel: 'verdadeiro',
  booleanCellFalseLabel: 'falso',
};

function Table(props) {
  const { rows, columns, ...rest } = props;
  const classes = useStyles();

  return (
    <Card sx={{ maxHeight: '60vh', width: '100%' }}>
      <DataGrid
        className={classes.root}
        localeText={localeText}
        autoHeight
        rows={rows}
        columns={columns}
        pageSize={5}
        {...rest}
      />
    </Card>
  );
}

Table.propTypes = {
  rows: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
};

export default Table;
