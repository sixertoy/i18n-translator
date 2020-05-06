// import isEmpty from 'lodash.isempty';
import React from 'react';
import { createUseStyles } from 'react-jss';
// import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Steps from '../../commons/Steps';
// import { DEFAULT_LANG } from '../../../constants';
// import { createLanguage } from '../../../redux/actions/translations';
// import { selectPrimaryKeys } from '../../../redux/selectors';
// import Button from '../../commons/button';
import Layout from '../../layout';
import Content from './steps/content';
import Language from './steps/language';

const useStyles = createUseStyles({
  button: {
    composes: ['flex-0'],
  },
  create: {
    composes: ['flex-rows', 'p24'],
    height: '100%',
  },
  select: {
    composes: ['flex-0'],
  },
  wrapper: {
    composes: ['is-relative', 'flex-1'],
  },
});

const CreateViewComponent = () => {
  const classes = useStyles();
  // const history = useHistory();
  // const dispatch = useDispatch();
  // const keys = useSelector(selectPrimaryKeys);

  // const [lang, setLang] = useState(DEFAULT_LANG);
  // const [disabled, setDisabled] = useState(false);
  // const [editorContent, setEditorContent] = useState({});

  // const onLangChange = useCallback(setLang, []);

  // const onEditorChange = useCallback((value, valid) => {
  //   setEditorContent({ valid, value });
  // }, []);

  // const onSubmit = useCallback(() => {
  //   dispatch(createLanguage(lang, editorContent.value));
  //   history.push('/board');
  // }, [editorContent, dispatch, history, lang]);

  // useEffect(() => {
  //   const isDisabled = !editorContent.valid || isEmpty(editorContent.value);
  //   setDisabled(isDisabled);
  // }, [editorContent, isStartRoute, keys.length]);

  return (
    <Layout id="create">
      <Steps steps={['Langue', 'Contenu']} />
      <div className={classes.create}>
        <Switch>
          <Route component={Language} path="/create/select" />
          <Route component={Content} path="/create/content" />
        </Switch>
      </div>
    </Layout>
  );
};

export default CreateViewComponent;
