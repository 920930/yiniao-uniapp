"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_index = require("../../utils/index.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const myItude = common_vendor.reactive({
      longitude: 0,
      latitude: 0
    });
    const show = common_vendor.ref(false);
    const openBtn = () => show.value = !show.value;
    common_vendor.index.getLocation({
      type: "wgs84",
      success: function(res) {
        myItude.latitude = res.latitude;
        myItude.longitude = res.longitude;
        covers.value.forEach((item) => {
          item.callout.content = `${item.callout.content} - 距离我${utils_index.GetDistance(item.latitude, item.longitude, res.latitude, res.longitude).km}km`;
        });
      }
    });
    const covers = common_vendor.ref([{
      id: 1,
      latitude: 30.67,
      longitude: 104.06,
      width: 20,
      height: 20,
      iconPath: "../../static/logo.png",
      callout: {
        // 气泡
        display: "ALWAYS",
        content: `成都徐东店`,
        bgColor: "rgba(34, 139, 34, 0.9)",
        color: "#f0f0f0",
        borderRadius: "20rpx",
        fontSize: 12,
        padding: 5
      }
    }, {
      id: 2,
      latitude: 30.64,
      longitude: 104.083,
      width: 20,
      height: 20,
      iconPath: "../../static/logo.png",
      callout: {
        // 气泡
        display: "ALWAYS",
        content: `成都合江店`,
        bgColor: "rgba(34, 139, 34, 0.9)",
        color: "#f0f0f0",
        borderRadius: "20rpx",
        fontSize: 12,
        padding: 5
      }
    }]);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(openBtn),
        b: show.value
      }, show.value ? {} : {}, {
        c: covers.value
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/WWW/uni/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
