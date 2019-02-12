export function getStatusBarHeight() {
  return wx.getSystemInfoSync().statusBarHeight;
}

export function getBarContentInfo() {
  const {top, left, height} = wx.getMenuButtonBoundingClientRect();
  const {statusBarHeight} = wx.getSystemInfoSync();
  let barContentHeight = 0;
  // 普通屏幕、开发者工具
  if (top > statusBarHeight) {
    barContentHeight = (top - statusBarHeight) * 2 + height;
  } else {
    // 刘海屏
    barContentHeight = top * 2 + height;
  }
  return {
    barContentHeight,
    barContentLeft: left,
  }
}

export function rpxToPx(rpx) {
  const { windowWidth } = getApp().globalData.systemInfo;
  return rpx * (windowWidth / 750);
}

export function pxToRpx(px) {
  const { windowWidth } = getApp().globalData.systemInfo;
  return px * (750 / windowWidth);
}

