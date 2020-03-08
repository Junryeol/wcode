import React from 'react';
import { inject, observer } from 'mobx-react';
import Editor from './components/editor';
import Header from './components/header';
import Sidebar from './components/sidebar';
import StatusBar from './components/statusBar';
import './App.css';

class App extends React.Component {

    get style() {
        const { view: { width, height } } = this.props;
        return { width, height: (height - 44) };
    }

    render() {
        return (
            <div className="App">
                <Header />
                <div className="body" style={this.style}>
                    <Sidebar />
                    <Editor />
                </div>
                <StatusBar />
            </div>
        );
    }
}

export default inject('view')(observer(App));