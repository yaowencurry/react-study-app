import React from 'react';
// import MineDemo from './MineDemo';
import Banner from "../components/withFetch/Banner";
import ChengPin from "../components/withFetch/ChengPin";
import NewBanner from "../components/withFetch/NewBanner";
import NewChengPin from "../components/withFetch/NewChengPin";

export default class Mine extends React.Component {
    render () {
        return (
            <div>
                <Banner />
                <ChengPin />
                <NewBanner />
                <NewChengPin />
                {/* <div className="page-header">
                    <h1>我的 <small>Subtext for header</small></h1>
                </div>
                <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                <MineDemo></MineDemo> */}
            </div>
        )
    }
}