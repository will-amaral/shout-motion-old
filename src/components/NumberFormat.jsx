import NumFormat from 'react-number-format';
import { TextField } from '@material-ui/core';

function NumberFormat(props) {
  const { inputRef, onChange, ...other } = props;
  return (
    <NumFormat
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.floatValue,
          },
        });
      }}
      isNumericString
      decimalSeparator=','
      {...other}
    />
  );
}

export default NumberFormat;
