// import isempty from 'lodash.isempty';
import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

// import StepsIterator from '../../../core/iterators/StepsIterator';
// import { entries } from '../../../core/utils/ObjectUtils';
import CodeEditor from '../../commons/code-editor';
import FooterControls from './footer-controls';
// import Constants from '../../constants';
// import SelectLanguage from './select-language';

const useStyles = createUseStyles({
  container: {
    composes: ['is-full-layout', 'flex-rows'],
  },
});

// class CreateComponent extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.ismounted = false;
//     this.stepsIterator = StepsIterator([
//       () => <FileImport onChange={() => {}} />,
//       // question: is it a description file
//       () => <SelectLanguage langs={['none']} onClick={() => {}} />,
//       // question: import another language
//       () => this.renderLoadMoreContent.bind(this),
//     ]);
//
//     let defaultvalue =
//       '// Put your JSON code to start working with your translations';
//     if (!isempty(props.primarykeys)) {
//       defaultvalue = props.primarykeys.reduce(
//         (obj, key) => Object.assign(obj, { [key]: '' }),
//         {}
//       );
//       defaultvalue = JSON.stringify(defaultvalue, null, '  ');
//     }
//
//     this.state = {
//       count: 0,
//       currentstep: this.stepsIterator.next().value,
//       defaultvalue,
//       editormode: 'json',
//       jsonisvalid: false,
//       jsonstring: defaultvalue,
//       langkey: false,
//     };
//   }

// componentDidMount() {
//   this.ismounted = true;
// }
//
// componentWillUnmount() {
//   this.ismounted = false;
// }

// _onLoadYesNoClickHandler(e, response) {
//   e.preventDefault();
//   const action = this.context.facade.getAction('ApplicationAction');
//   action.addLanguage(this.state.langkey, this.state.jsonstring);
//   if (response) {
//     this.setState({
//       count: this.state.count + 1,
//       currentstep: this.stepsIterator.next().value,
//       jsonisvalid: false,
//       jsonstring: response ? this.state.defaultvalue : false,
//       langkey: false,
//     });
//   } else {
//     action.toggleScreen(Constants.SCREENS.EDIT);
//   }
// }

// _onClickSubmitHandler(e) {
//   e.preventDefault();
//   this.setState({
//     currentstep: this.stepsIterator.next().value,
//     jsonisvalid: false,
//   });
// }

// _onClickLanguageHandler(e, langkey) {
//   e.stopPropagation();
//   this.setState({
//     langkey,
//   });
// }

// onCodeEditorChange(value) {
//   let jsonisvalid = false;
//   const jsonstring = value;
//   if (!isempty(value)) {
//     try {
//       JSON.parse(jsonstring);
//       jsonisvalid = true;
//     } catch (e) {
//       // if value is empty, is not a valid string
//       console.log('invalid Object/JSON String');
//     }
//   }
//   this.setState({
//     jsonisvalid,
//     jsonstring,
//   });
// }
// const showsubmit = this.state.jsonisvalid || this.state.langkey;
// <div
//   className="application-screen-content flex-rows"
//   style={{
//     background: 'white',
//     height: '100%',
//     margin: '0 auto',
//     overflow: 'hidden',
//     padding: '0',
//     width: '100%',
//   }}>
//   <div
//     className="flex-rows"
//     style={{
//       height: '100%',
//       width: '100%',
//     }}>
//     {this.state.currentstep()}
//   </div>
// </div>
const CreateComponent = () => {
  const classes = useStyles();
  const [mode, setMode] = useState('json');
  const [content, setContent] = useState(false);
  console.log('content', content);
  // const [contentIsValid, setContentIsValid] = useState('json');
  // const showsubmit = contentIsValid; // || this.state.langkey
  return (
    <div className={classes.container}>
      <CodeEditor content={content} mode={mode} onChange={setContent} />
      <FooterControls
        mode={mode}
        onCancel={false}
        onModeChange={setMode}
        // currentstep = this.stepsIterator.next().value
        onSubmit={() => {}}
      />
    </div>
  );
};

// CreateComponent.propTypes = {
// defaultvalue: PropTypes.string,
// langs: PropTypes.array.isRequired,
// primarykeys: PropTypes.array.isRequired,
// };

export default CreateComponent;
