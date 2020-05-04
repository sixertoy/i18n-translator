import isEmpty from 'lodash.isempty';
import React, { useCallback, useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useRouteMatch } from 'react-router-dom';

import { DEFAULT_LANG } from '../../../constants';
import { createLanguage } from '../../../redux/actions/translations';
import { selectPrimaryKeys } from '../../../redux/selectors';
import Button from '../../commons/button';
import CodeEditor from '../../commons/code-editor';
import LangSelect from './lang-select';

const useStyles = createUseStyles({
  container: {
    composes: ['is-full-layout', 'flex-rows', 'debug'],
  },
  controls: {
    composes: [
      'flex-columns',
      'flex-end',
      'items-center',
      'py12',
      'px32',
      'debug',
    ],
    minHeight: 60,
  },
  langs: {
    composes: ['mr12', 'debug'],
  },
  submit: {
    composes: ['debug'],
  },
});

const CreateComponent = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const keys = useSelector(selectPrimaryKeys);
  const isStartRoute = useRouteMatch('/create');

  const [lang, setLang] = useState(DEFAULT_LANG);
  const [redirect, setRedirect] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);
  const [editorContent, setEditorContent] = useState({});

  const onLangSelectChange = useCallback(setLang, []);

  const onEditorChange = useCallback((value, valid) => {
    setEditorContent({ valid, value });
  }, []);

  const onSubmitClick = useCallback(() => {
    dispatch(createLanguage(lang, editorContent.value));
    history.push('/board');
  }, [editorContent, dispatch, history, lang]);

  useEffect(() => {
    const shouldRedirect = isStartRoute && keys.length;
    if (shouldRedirect) setRedirect(true);
    const isempty = isEmpty(editorContent.value);
    const cansubmit = editorContent.valid && !isempty;
    setCanSubmit(cansubmit);
  }, [editorContent, isStartRoute, keys.length]);

  return (
    <React.Fragment>
      {redirect && <Redirect to="/board" />}
      {!redirect && (
        <div className={classes.container}>
          <CodeEditor
            content={editorContent.value}
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
      )}
    </React.Fragment>
  );
};

export default CreateComponent;
