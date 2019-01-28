import { hotSearchList } from './data';
import { getStorageSync, setStorageSync, removeStorageSync } from '../../utils/storage'

Page({
  data: {
    hotSearchList,
  },
  onLoad() {
    const historySearch = getStorageSync('search-history') || [];
    this.setData({
      historySearch,
    })
  },
  saveKeyword(e) {
    const { value } = e.detail;
    this.keyword = value;
  },
  clearKeyWord() {
    this.setData({
      keyword: '',
    });
  },
  clearHistory() {
    const res = removeStorageSync('search-history');
    if (res) {
      this.keyword = '';
      this.setData({
        historySearch: [],
      })
    }
  },
  onSearch() {
    if (this.keyword) {
      const { historySearch } = this.data;
      if (!historySearch.includes(this.keyword)) {
        historySearch.unshift(this.keyword);
        const newHistorySearch = historySearch.slice(0, 9);
        setStorageSync('search-history', newHistorySearch);
        this.setData({
          historySearch: newHistorySearch,
        })
      }
      this.navigateSearchResult();
    } else {
      wx.showToast({
        title: '好忐忑，小鲜不懂您~',
        icon: 'none'
      });
    }
  },
  navigateSearchResult() {
    wx.navigateTo({ url: '/pages/search_result/search_result'});
  },
  navigateBack(){
    wx.navigateBack();
  }
});
