import { CardType, CardServe } from './card_type';

Component({
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    product: Object,
    type: {
      type: String,
      value : CardServe.PRODUCTION,
    }
  },
  data: {
    CardType,
    CardServe,
    current: 0,
  },
  methods: {
    onChange(event) {
      const { current } = event.detail;
      this.setData({ current });
    }
  }
});
