import {getStatusBarHeight, getBarContentInfo} from '../../utils/navbar_tool';

Component({
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    background: {
      type: String,
      value: '#fff',
    },
    color: {
      type: String,
      value: '#2A2A2A',
    },
    fixed: {
      type: Boolean,
      value: false,
    }
  },
  data: {
    statusBarHeight: getStatusBarHeight(),
  },
  attached() {
    // const pages = getCurrentPages();
    const {barContentHeight, barContentLeft} = getBarContentInfo();
    this.setData({
      barContentHeight,
      barContentLeft,
    });
  },
  methods: {

  }
});
