import React from 'react';
import { NavLink } from "react-router-dom";
import './subNav.scss';

const subHomeMenu = [
  {
    path: '/discover/recommend',
    name: '推荐'
  },
  {
    path: '/discover/demo2',
    name: '排行榜'
  },
  {
    path: '/discover/demo3',
    name: '歌单'
  },
  {
    path: '/discover/demo4',
    name: '主播电台'
  },
  {
    path: '/discover/demo5',
    name: '歌手'
  },
  {
    path: '/discover/demo6',
    name: '新碟上架'
  },
]

export default class DiscoverSubNav extends React.Component {
  render () {
    console.log(this.props);
    return (
      <div className="sub-nav">
        <div className="discover-nav">
          {
            subHomeMenu.map((item, index) => {
              return (<NavLink to={item.path} key={index} className="discover-nav__item">{item.name}</NavLink>)
            })
          }
        </div>
      </div>
    )
  }
}