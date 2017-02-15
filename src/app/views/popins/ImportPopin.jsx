import React from 'react';
// project
import PopinFactory from './../hoc/PopinFactory';
import ReactAceEditor from './../commons/ReactAceEditor';

const importSteps = [
  <ReactAceEditor usecopy={false}
    editorid={'editor-import'}
    jsonstring={JSON.stringify({}, null, '  ')} />,
  () => false,
  () => false
];

function* stepsGenerateur (stepsArr) {
  let index = -1;
  const len = stepsArr.length;
  // eslint-disable-next-line
  while (true) {
    index = (index >= len) ? 0 : (index + 1);
    yield stepsArr[index];
  }
}

class ImportPopin extends React.PureComponent {

  constructor (props) {
    super(props);
    this._stepsIterator = stepsGenerateur(importSteps);
    this.state = {
      currentstep: this._stepsIterator.next().value
    };
  }

  render () {
    return (
      <div style={{
        padding: '0',
        width: '100%',
        height: '100%',
        margin: '0 auto',
        overflow: 'hidden',
        background: 'white'
      }}>
        {this.state.currentstep}
      </div>
    );
  }

}

export default PopinFactory(ImportPopin);
