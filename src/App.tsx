import * as React from 'react';
import './App.css';
import * as Lbl from '../external/net_tcncloud_git_m_protos/typescript/api/v0alpha/labels_pb'
import * as logo from './logo.svg';

function testType(label: Lbl.Label.AsObject) {
    let newlabel = new Lbl.Label()
    console.log(newlabel)
    console.log(label.labelName + " is referenced by key " + label.nodeId)
}

function App() {
    let testObject = {
        nodeId: "abc123",
        labelName: "My label",
        type: 1 // Should pass
        // type: "asdf" //Should fail
    }


    testType(testObject)
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React</h2>
            </div>
            <p className="App-intro">
                To get started, edit <code>src/App.tsx</code> and save to reload.
            </p>
        </div>
    );
}

export default App;
