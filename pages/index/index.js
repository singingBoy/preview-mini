import {banners, productList, tickets, searchKeys} from 'data';

Page({
  data: {
    banners,
    bannerIndex: 0,
    productList,
    tickets,
    searchKeys,
  },
  onLoad() {
    // 关键字
    this.keyWord = searchKeys[0];
    // nav-bar 样式监听
    this.searchBarObserver = wx.createIntersectionObserver(this);
    this.searchBarObserver
        .relativeToViewport({top: 0})
        .observe('.banner-swipe', (res) => {
          const { bottom } = res.intersectionRect;
          if (bottom > 0) {
            const barStyle = {
              frontColor: '#ffffff',
              backgroundColor: '#translate',
            };
            wx.setNavigationBarColor(barStyle);
            this.setData({
              navBarFixed: true,
              navBarBackground: barStyle.backgroundColor,
              navBarColor: barStyle.frontColor,
            })
          } else {
            const barStyle = {
              frontColor: '#000000',
              backgroundColor: '#ffffff',
            };
            wx.setNavigationBarColor(barStyle);
            this.setData({
              navBarFixed: false,
              navBarBackground: barStyle.backgroundColor,
              navBarColor: barStyle.frontColor,
            })
          }
        })
  },
  onUnload() {
    if (this.searchBarObserver) this.searchBarObserver.disconnect();
  },
  changeBanner(e) {
    const { current } = e.detail;
    this.setData({
      bannerIndex: current,
    })
  },
  onKeyWordChange(e) {
    const { current } = e.detail;
    this.keyWord = this.data.searchKeys[current];
  },
  navigateToCoupon() {
    console.log(11111)
  },
  navigateToSearch() {
    wx.navigateTo({
      url: `/pages/search/search?keyword=${this.keyWord}`,
    });
  },
});
