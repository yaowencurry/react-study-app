import React from 'react';
import { Link } from "react-router-dom";
import "./TopNav.scss";

export default class TopNav extends React.Component {
    render() {
        return (
            <div className="nav">
                <div className="nav-container">
                    <ul className="nav-container-content">
                        <li className="nav-container-content__item">
                            <Link to="/discover">发现音乐</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}