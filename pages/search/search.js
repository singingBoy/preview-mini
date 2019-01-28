import { hotSearchList } from './data';

Page({
  data: {
    hotSearchList,
  },
  onLoad() {
    wx.setStorageSync({
      key: 'search-history',
      data: ['1', '2', '3']
    });
    const { data } = wx.getStorageSync('search-history');
    console.log(data);
  },

});