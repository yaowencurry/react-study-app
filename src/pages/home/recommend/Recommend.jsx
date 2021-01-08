import React from 'react';
import Banner from '../../../components/Banner/Banner';
import HotSongList from './component/HotSongList';
import './Recommend.scss';

const RecommendIndex = () => {
  return (
    <>
      <Banner />
      <div className="recommend flex">
        <div className="recommend__left">
          <HotSongList />
        </div>
        <div className="recommend__right">
          123
          </div>
      </div>
    </>
  )
}


export default class Recommend extends React.Component {
  render () {
    return (
      <>
        <RecommendIndex />
      </>
    )
  }
} 