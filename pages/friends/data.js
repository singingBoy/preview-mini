export const testImages = [
  'http://plsi1usd8.bkt.clouddn.com/20190212193232.jpg',
  'http://plsi1usd8.bkt.clouddn.com/20190212193258.jpg',
  'http://plsi1usd8.bkt.clouddn.com/20190212193309.jpg',
  'http://plsi1usd8.bkt.clouddn.com/20190212193319.jpg',
  'http://plsi1usd8.bkt.clouddn.com/20190212193328.jpg',
  'http://plsi1usd8.bkt.clouddn.com/20190212193337.jpg',
  'http://plsi1usd8.bkt.clouddn.com/20190212193346.jpg',
];

export const adBanners = [
  {
    id: 1,
    image: 'http://n.sinaimg.cn/news/transform/20160119/7xOa-fxnrahr8495732.jpg',
  },
  {
    id: 2,
    image: 'http://img01.tooopen.com/Downs/images/2011/5/4/sy_20110504153507226927.jpg',
  },
  {
    id: 3,
    image: 'https://img.nellydyu.tw/uploads/2018/06/1528896243-83d2d7b3802145bc2cf20d8bf10f20fd.jpg',
  },
  {
    id: 4,
    image: 'http://img.mp.itc.cn/upload/20160322/25afb3823b1c4afe83c86a5637e06c23_th.jpg',
  },
];

export const myDynamic = [{
  id: 1,
  year: 2019,
  list: [
    {
      id: 1,
      createTime: new Date('2019-9-10'),
      day: 10,
      month: 12,
      images: testImages,
      content: '啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦'
    },{
      id: 1,
      createTime: new Date('2019-9-1'),
      day: 1,
      month: 9,
      images: testImages.slice(0,1),
      content: '啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦'
    },{
      id: 1,
      createTime: new Date('2019-8-1'),
      day: 1,
      month: 8,
      images: testImages.slice(0,2),
      content: '啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦'
    },{
      id: 1,
      createTime: new Date('2019-7-1'),
      day: 1,
      month: 7,
      images: testImages.slice(0,3),
      content: '啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦'
    }
  ]
}, {
  id: 2,
  year: 2018,
  list: [
    {
      id: 1,
      createTime: new Date('2018-9-1'),
      day: 1,
      month: 9,
      images: testImages,
      content: '啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦'
    }
  ]
}];
