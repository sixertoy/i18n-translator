// import isempty from 'lodash.isempty';
import React, { useCallback, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { DEFAULT_LANG, EVENT_TYPES } from '../../constants';
import Button from '../commons/button';
import CodeEditor from '../commons/code-editor';

const useStyles = createUseStyles({
  container: {
    composes: ['is-full-layout', 'flex-rows'],
  },
  controls: {
    composes: ['flex-columns', 'flex-end', 'items-center', 'py12', 'px32'],
    minHeight: 60,
  },
});

// const EDITOR_MODES = [
//   { id: 'json', label: 'JSON' },
//   { id: 'javascript', label: 'JavaScript' },
// ];

const CreateComponent = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [content, setContent] = useState(null);
  const [lang, setLang] = useState(DEFAULT_LANG);
  const [canSubmit, setCanSubmit] = useState(true);

  const onSubmitClick = useCallback(() => {
    const datas = { [lang]: { content, fav: true } };
    dispatch({ datas, type: EVENT_TYPES.DATAS_CREATE });
    history.push('/lang');
  }, [content, dispatch, history, lang]);

  const onEditorChange = useCallback((value, valid) => {
    setCanSubmit(valid);
    setContent(value);
  }, []);

  return (
    <div className={classes.container}>
      <CodeEditor content={content} mode="json" onChange={onEditorChange} />
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
            disabled={!canSubmit}
            label="Continue"
            onClick={onSubmitClick}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateComponent;
