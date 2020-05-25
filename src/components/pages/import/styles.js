import { createUseStyles } from 'react-jss';

const useStepStyles = createUseStyles({
  field: {
    borderColor: '#000000',
    borderRadius: 3,
    borderStyle: 'solid',
    borderWidth: 1,
    composes: [
      'is-block',
      'is-relative',
      'pl24',
      'px7',
      'py24',
      'flex-columns',
      'items-center',
    ],
    height: 'auto',
    width: '100%',
  },
  form: {
    margin: '0 auto',
    width: 350,
  },
  input: {
    // TODO add disabled state
    '&:disabled': { opacity: 0.65 },
    composes: ['fs24', 'is-bold', 'flex-1'],
  },
  label: {
    background: '#F2F2F2',
    composes: ['is-absolute', 'is-bold', 'p5'],
    left: 12,
    top: -14,
  },
  options: {
    composes: ['fs14', 'm0', 'p0', 'use-pointer'],
    minWidth: '100%',
    width: '100%',
  },
  select: {
    // TODO add disabled state
    '&:disabled': { opacity: 0.65 },
    composes: ['is-bold', 'flex-1'],
  },
});

export default useStepStyles;
