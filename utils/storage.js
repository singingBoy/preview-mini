export function setStorageSync(key, value) {
  wx.setStorageSync(key, JSON.stringify(value));
}

export function getStorageSync(key) {
  const data = wx.getStorageSync(key);
  if (data) {
    return JSON.parse(data);
  }
  return null;
}

export function removeStorageSync(key) {
  try{
    wx.removeStorageSync(key);
    return true;
  } catch (e) {
    return false;
  }
}

export function clearStorageSync(key) {
  try{
    wx.clearStorageSync(key);
    return true;
  } catch (e) {
    return false;
  }
}
