const CardType = {
  floatImage: 1,
  bannerImage: 2,
  imageRight: 3,
  imageLeft: 4,
  imageList: 5,
};
Component({
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    product: Object,
  },
  data: {
    CardType,
    current: 0,
  },
  methods: {
    onChange(event) {
      const { current } = event.detail;
      this.setData({ current });
    }
  }
});