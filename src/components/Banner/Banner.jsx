import React from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './Banner.scss'
import banner1 from '../../assets/images/banner1.jpg'
import banner2 from '../../assets/images/banner2.jpg'
import banner3 from '../../assets/images/banner3.jpg'
import boxBackgorundImg1 from '../../assets/images/back1.jpg'
import boxBackgorundImg2 from '../../assets/images/back2.jpg'
import boxBackgorundImg3 from '../../assets/images/back3.jpg'
import downloadImg from '../../assets/images/download.png'
import { getBannerList } from '../../api/common'

let timer = null;

export default class Banner extends React.Component {
  constructor() {
    super();
    this.state = {
      backArr: [boxBackgorundImg1, boxBackgorundImg2, boxBackgorundImg3],
      boxBackgorundImg: null,
      banner: '',
      bannerArr: [banner1, banner2, banner3],
      arrowShow: false,
    }
  }

  async componentDidMount () {
    await getBannerList().then(res => {
      this.setState({
        bannerArr: res.banners,
        backArr: res.banners
      })
    })
    this.setState({
      banner: this.state.bannerArr[0].imageUrl,
      boxBackgorundImg: this.state.backArr[0].imageUrl
    })
    this.startAutoImage()
  }

  startAutoImage = () => {
    timer = setInterval(() => {
      this.changeBannerImg(true)
    }, 2000);

  }


  componentWillUnmount () {
    clearInterval(timer);
  }



  changeBannerImg = (state) => {
    const { bannerArr, banner, backArr } = this.state;
    const bannerUrlArr = bannerArr.map(item => item.imageUrl)
    const nowIndex = bannerUrlArr.indexOf(banner);
    let changeIndex = state ? nowIndex + 1 : nowIndex - 1;

    if (changeIndex < 0) {
      changeIndex = bannerArr.length - 1;
    } else if (changeIndex > bannerArr.length - 1) {
      changeIndex = 0;
    }

    this.setState({
      banner: bannerArr[changeIndex].imageUrl,
      boxBackgorundImg: backArr[changeIndex].imageUrl,
    })
  }

  handleArrowHover = (arrowState) => {
    this.setState({ arrowShow: arrowState })
    arrowState ? clearInterval(timer) : this.startAutoImage()
  }

  render () {
    return (
      <div
        className="banner"
        style={{
          backgroundImage: `url('${this.state.boxBackgorundImg}')`
        }}
        onMouseEnter={() => this.handleArrowHover(true)}
        onMouseLeave={() => this.handleArrowHover(false)}
      >
        <div className="banner__box">
          <div className="banner__box__image">
            <img
              src={this.state.banner}
              alt="banner"
              className="banner__box__image--info"
            />
            {
              this.state.arrowShow &&
              <>
                <LeftOutlined
                  className="banner__box__image__arrow banner__box__image__arrowLeft"
                  onClick={() => this.changeBannerImg(false)}
                />
                <RightOutlined
                  className="banner__box__image__arrow banner__box__image__arrowRight"
                  onClick={() => this.changeBannerImg(true)}
                />
              </>
            }
          </div>
          <div className="banner__box__recommend">
            <img src={downloadImg} alt="" />
          </div>
        </div>
      </div>
    )
  }
}