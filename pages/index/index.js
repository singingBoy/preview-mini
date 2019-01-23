const app = getApp();
const banners = [{
  id: 1,
  image: 'http://img1.juimg.com/170620/355855-1F6200K42320.jpg',
  time: '2019年1月22日 15:57:25'
},{
  id: 2,
  image: 'http://img4.imgtn.bdimg.com/it/u=2041099924,1985582387&fm=214&gp=0.jpg',
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
