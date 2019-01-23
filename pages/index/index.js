const app = getApp();
const banners = [{
  id: 1,
  image: 'https://img95.699pic.com/photo/50022/7439.jpg_wh300.jpg',
  time: '2019年1月22日 15:57:25'
},{
  id: 2,
  image: 'http://img95.699pic.com/photo/50068/1411.jpg_wh860.jpg',
  time: '2019年1月23日 16:17:25'
}];

Page({
  data: {
    banners,
    bannerIndex: 0,
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
