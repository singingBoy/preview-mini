import { CardType } from '../../components/product_list_card/card_type';
import { productList } from '../../pages/index/data';
import { getStatusBarHeight, getBarContentInfo, rpxToPx } from '../../utils/navbar_tool';
const TabType = {
  LIST: 'list',
  ME: 'me'
};

Page({
  data: {
    banner: 'http://pic.ffpic.com/files/2013/0908/psd0907weoidk.jpg',
    currentTab: TabType.LIST,
    contentHeight: getApp().globalData.systemInfo.screenHeight - (getStatusBarHeight() + getBarContentInfo().barContentHeight) - rpxToPx(100),
    myGroupBuying: [],
  },
  onLoad() {
    productList.forEach(d => d.type = CardType.bannerImage);
    this.setData({ productList });
  },
  onReachBottom() {
    console.error('到底了');
  },
  swipeChange(e) {
    const { current, source } = e.detail;
    if (current === 0) {
      this.setData({ currentTab: TabType.LIST })
    } else {
      this.setData({ currentTab: TabType.ME })
    }
  },
  onChangeTab(e) {
    const { tab } = e.currentTarget.dataset;
    const { currentTab } = this.data;
    if (currentTab !== tab ) {
      this.setData({
        currentTab: tab,
      });
    }
  },
  navigateBack() {
    wx.navigateBack();
  }
});
