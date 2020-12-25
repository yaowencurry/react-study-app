import React from 'react';
import MineDemo from './MineDemo';

export default class Mine extends React.Component {
    render () {
        return (
            <div>
                <div className="page-header">
                    <h1>我的 <small>Subtext for header</small></h1>
                </div>
                <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                <MineDemo></MineDemo>
            </div>
        )
    }
}