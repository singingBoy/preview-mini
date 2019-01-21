Component({
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
  },
  properties: {

  },
  data: {
    statusBarHeight: wx.getSystemInfoSync().statusBarHeight,
  },
  attached() {
    // const pages = getCurrentPages();
    const {top, left, height} = wx.getMenuButtonBoundingClientRect();
    const {statusBarHeight} = wx.getSystemInfoSync();
    this.setData({
      statusBarHeight,
      barContentHeight: (top - statusBarHeight) * 2 + height,
      barContentLeft: left,
    });
    console.error(this.data.barContentHeight)
  },
  methods: {

  }
});