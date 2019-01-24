import {banners, productList, tickets} from 'data';

Page({
  data: {
    banners,
    bannerIndex: 0,
    productList,
    tickets,
  },
  onLoad() {
  },
  changeBanner(e) {
    const { current } = e.detail;
    this.setData({
      bannerIndex: current,
    })
  },
  navigateToCoupon() {

  }
});
