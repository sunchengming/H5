const wxtracker = require('utils/wxtracker.js')
const APP_SECRET = '327dec57ef33386c3d492c737a34417e';
const VERSION = Math.random(0,1).toFixed(3);
const envUrl = require('utils/environment.js');
const AppId = "tt723f0482ed05e0f5"

// 协议域名( [测试] 使用！！！)
let domain = envUrl.Api.user.env;
// h5URI( [测试] 使用！！！)
let h5URI = envUrl.Api.user.env +'ncisNwisNwcdWeb/';
// 协议域名( [生产] 环境使用！！！)
// let domain = 'https://creditcardapp.bankcomm.com/'; 
// h5URI( [生产] 环境使用！！！)
// let h5URI = 'https://creditcardapp.bankcomm.com/applynew/';



//进度查询
const SCHEDULE_QUERY = domain + 'cpqweb/apply/status/preinquiry.html';
//卡片分类、卡片推荐、广告，通用url
const CARD_URL = h5URI +'front/apply/new/reversion/cardlist.html';
//卡片分类
const CARD_CLASSIFY = h5URI +'front/apply/track/record.html';
//卡片推荐
const CARD_RECOMMEND = h5URI +'front/apply/new/reversion/cardInfo.html?trackCode=A070209101188';
//广告
const BANNER = h5URI +'front/apply/track/record.html';
// 
App({
  onLaunch: function (options) {
    var that = this;
    // 展示本地存储能力
    var scene = decodeURIComponent(options.scene);
    // var logs = tt.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // tt.setStorageSync('logs', logs);
  },

  
  globalData: {
    // appId: tt.getAccountInfoSync().miniProgram.appId,
    schedule: SCHEDULE_QUERY,
    classify: CARD_URL,
    banner: CARD_RECOMMEND,
    recommend: CARD_RECOMMEND,
    version: VERSION,
    authorize: false, 
    domain: domain,
    appId:AppId,
    url: domain + 'mpaecard/'
  },

})