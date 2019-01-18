Component({
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
  },
  properties: {

  },
  data: {
    statusBarHeight: wx.getSystemInfoSync().statusBarHeight,
  },
  created() {
    // const pages = getCurrentPages();
    const {top, bottom, left} = wx.getMenuButtonBoundingClientRect();
    const {statusBarHeight} = wx.getSystemInfoSync();

    this.setData({
      statusBarHeight,
      barContentHeight: top - statusBarHeight + bottom,
      barContentLeft: left,
    });
  },
  methods: {

  }
});