import {banners, productList} from 'data';

Page({
  data: {
    banners,
    bannerIndex: 0,
    productList,
  },
  onLoad() {
  },
  changeBanner(e) {
    const { current } = e.detail;
    this.setData({
      bannerIndex: current,
    })
  }
});
