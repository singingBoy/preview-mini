Component({
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
  },
  properties: {},
  data: {
    images: [
      'https://img11.360buyimg.com/n1/jfs/t9700/306/1436060266/681052/3c9ac812/59e09500Ndcdb8db5.jpg',
      'https://img11.360buyimg.com/n1/jfs/t10255/216/1395629457/558324/dc2739fe/59e094ffNa5d58ce6.jpg',
      'https://img11.360buyimg.com/n1/jfs/t9784/341/1408825319/556426/c39bea69/59e09506N1355a960.jpg',
      'https://img11.360buyimg.com/n1/jfs/t7900/289/3101499427/504495/c7817054/59e09507Nf82cf836.jpg',
      'https://img11.360buyimg.com/n1/jfs/t14830/40/1879053018/393853/4870c6db/5a5f10e8Na6dad590.jpg',
      'https://img11.360buyimg.com/n1/jfs/t16183/204/1733668430/510851/a2a142f0/5a5f10e9N74d2935f.jpg',
      'https://img11.360buyimg.com/n1/jfs/t17944/112/130500470/596101/67f3faf/5a5f10ecNb78f9164.jpg',
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