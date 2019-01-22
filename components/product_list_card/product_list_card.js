Component({
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
  },
  properties: {},
  data: {
    images: [
      'http://img3.imgtn.bdimg.com/it/u=2701169020,3041034327&fm=26&gp=0.jpg',
      'http://img0.imgtn.bdimg.com/it/u=2516715114,367537740&fm=26&gp=0.jpg',
      'https://f11.baidu.com/it/u=3153772022,737935559&fm=72',
      'http://img3.imgtn.bdimg.com/it/u=867619405,1108182104&fm=26&gp=0.jpg',
      'http://img2.imgtn.bdimg.com/it/u=1961726139,2992623303&fm=26&gp=0.jpg',
      'http://img5.imgtn.bdimg.com/it/u=1186580764,3115906313&fm=26&gp=0.jpg',
    ],
    current: 3,
  },
  methods: {
    onChange(event) {
      const { current } = event.detail;
      this.setData({ current });
    }
  }
});