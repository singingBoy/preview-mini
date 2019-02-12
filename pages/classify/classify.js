import { searchKeys } from '../index/data';
import classifies from 'data';
import { getBarContentInfo, getStatusBarHeight } from '../../utils/navbar_tool'

const contentPadding = getStatusBarHeight() + getBarContentInfo().barContentHeight;
Page({
  data: {
    contentPadding,
    contentHeight: getApp().globalData.systemInfo.windowHeight - contentPadding,
    searchKeys,
    classifies,
    activeClassifyIndex: 0,
  },
  onLoad: function () {
    // 关键字
    this.keyWord = searchKeys[0];
  },
  changeClassify(e) {
    const { index } = e.currentTarget.dataset;
    if (index !== this.data.activeClassifyIndex) {
      this.setData({
        activeClassifyIndex: index,
      })
    }
  },
  onKeyWordChange(e) {
    const { current } = e.detail;
    this.keyWord = this.data.searchKeys[current];
  },
  // 搜索
  navigateToSearch() {
    wx.navigateTo({
      url: `/pages/search/search?keyword=${this.keyWord}`,
    });
  },
});
