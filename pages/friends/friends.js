import {adBanners, testImages, myDynamic} from './data';
import {getBarContentInfo, getStatusBarHeight} from '../../utils/navbar_tool';

Page({
  data: {
    contentPaddingTop: getStatusBarHeight() + getBarContentInfo().barContentHeight,
    adBanners,
    bannerIndex: 0,
    currentTab: 'find',
    testImages,
    myDynamic,
    postBtnShow: true,
  },
  onLoad: function () {
    this.lastScrollPositon = 0;
  },
  onPullDownRefresh(){
    console.log('刷新')
  },
  onPageScroll({scrollTop}){
    console.log(this.lastScrollPositon, scrollTop, this.data.postBtnShow)
    if (this.lastScrollPositon < scrollTop && this.data.postBtnShow) {
      this.setData({
        postBtnShow: false,
      });
    } else if (this.lastScrollPositon > scrollTop && !this.data.postBtnShow) {
      this.setData({
        postBtnShow: true,
      });
    }
    this.lastScrollPositon = scrollTop;
  },
  changeBanner(e) {
    const { current } = e.detail;
    this.setData({
      bannerIndex: current,
    })
  },
  supportLike() {

  },
  changeTab(e) {
    const { tab } = e.currentTarget.dataset;
    if (tab !== this.data.currentTab) {
      this.setData({
        currentTab: tab,
      })
    }
  },
  previewImages(e) {
    const { image } = e.currentTarget.dataset;
    wx.previewImage({
      current: image,
      urls: this.data.testImages,
    });
  },
  navigateToPost() {
    wx.navigateTo({
      url: '/page_others/post/post',
    });
  },
  navigateToCommons() {
    wx.navigateTo({
      url: '/page_others/commons/commons',
    });
  }
});
