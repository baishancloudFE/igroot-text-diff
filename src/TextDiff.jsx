import React, {Component} from 'react'
import CodeMirror from 'codemirror'

import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/yaml/yaml.js'
import 'codemirror/theme/mdn-like.css'

import './vendor/merge.css'
import './vendor/diff_match_patch.js'
import './vendor/merge.js'

export default class TextDiff extends Component {
  constructor(props) {
    super(props)
    this.state = {
      oldValue: '',
      newValue: ''
    }
  }

  static defaultProps = {
    oldValue: '',
    newValue: '',
    width: 1000,
    height: 600
  }

  componentDidMount() {
    const { oldValue, newValue } = this.props
    this.initMergeUI(oldValue, newValue)
  }

  initMergeUI = (oldValue, newValue) => {
    const {height} = this.props
    var dv, highlight = true, connect = 'align', collapse = false
    var target = document.getElementById('diff-container')

    target.innerHTML = ''
    dv = CodeMirror.MergeView(target, {
      value: newValue,
      origLeft: oldValue,
      lineNumbers: true,
      mode: 'yaml',
      theme: 'mdn-like',
      showDifferences: true,
      highlightDifferences: highlight,
      connect: connect,
      collapseIdentical: collapse,
      revertButtons: false,
      readOnly: true
    })
    dv.leftOriginal().setSize(null, height)
    dv.editor().setSize(null, height)
  }

  componentDidUpdate() {
    const { oldValue, newValue } = this.props
    this.initMergeUI(oldValue, newValue)
  }

  render() {
    return (
      <div style={{width: this.props.width}}>
        <div 
          style={{margin: '0 auto', width: '100%', height: this.props.height}} id='diff-container'>
        </div>
      </div>
      
    )
  }
}