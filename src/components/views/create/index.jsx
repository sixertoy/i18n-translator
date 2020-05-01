import isEmpty from 'lodash.isempty';
import React, { useCallback, useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { DEFAULT_LANG, EVENT_TYPES } from '../../../constants';
import Button from '../../commons/button';
import CodeEditor from '../../commons/code-editor';
import LangSelect from './lang-select';

const useStyles = createUseStyles({
  container: {
    composes: ['is-full-layout', 'flex-rows'],
  },
  controls: {
    composes: ['flex-columns', 'flex-end', 'items-center', 'py12', 'px32'],
    minHeight: 60,
  },
  langs: {
    composes: ['mr12'],
  },
  submit: {},
});

const CreateComponent = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [content, setContent] = useState({});
  const [lang, setLang] = useState(DEFAULT_LANG);
  const [canSubmit, setCanSubmit] = useState(false);

  const onLangSelectChange = useCallback(setLang, []);

  const onEditorChange = useCallback((value, valid) => {
    setContent({ valid, value });
  }, []);

  const onSubmitClick = useCallback(() => {
    dispatch({
      content: content.value,
      lang,
      type: EVENT_TYPES.TRANSLATIONS_CREATE,
    });
    history.push('/board');
  }, [content, dispatch, history, lang]);

  useEffect(() => {
    const isempty = isEmpty(content.value);
    const cansubmit = content.valid && !isempty;
    setCanSubmit(cansubmit);
  }, [content]);

  return (
    <div className={classes.container}>
      <CodeEditor
        content={content.value}
        mode="json"
        onChange={onEditorChange}
      />
      <div className={classes.controls}>
        <div className={classes.langs}>
          <LangSelect
            disabled={!canSubmit}
            value={lang}
            onChange={onLangSelectChange}
          />
        </div>
        <div className={classes.submit}>
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
