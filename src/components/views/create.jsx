// import isempty from 'lodash.isempty';
import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useHistory } from 'react-router-dom';

import Button from '../commons/button';
import CodeEditor from '../commons/code-editor';

const useStyles = createUseStyles({
  container: {
    composes: ['is-full-layout', 'flex-rows'],
  },
  controls: {
    backgroundColor: '#FBFBFB',
    composes: ['flex-columns', 'flex-end', 'items-center'],
    marginLeft: '1px',
    minHeight: '60px',
    padding: '12px 32px',
  },
});

// const EDITOR_MODES = [
//   { id: 'json', label: 'JSON' },
//   { id: 'javascript', label: 'JavaScript' },
// ];

const CreateComponent = () => {
  const classes = useStyles();
  const history = useHistory();
  // const [mode, setMode] = useState('json');
  const [content, setContent] = useState(null);
  return (
    <div className={classes.container}>
      <CodeEditor
        content={content}
        mode="json"
        onChange={value => setContent(value)}
      />
      <div className={classes.controls}>
        {/* <div>
          <select
            value={mode}
            onChange={evt => {
              evt.preventDefault();
              const { value } = evt.target;
              setMode(value);
            }}>
            {EDITOR_MODES.map(obj => (
              <option key={obj.id} value={obj.id}>
                {obj.label}
              </option>
            ))}
          </select>
        </div> */}
        <div>
          <Button
            label="Continue"
            onClick={() => {
              history.push('/lang');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateComponent;
