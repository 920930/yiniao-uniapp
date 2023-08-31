"use strict";
const GetDistance = (lat1, lng1, lat2, lng2) => {
  console.log(lat2, lng2);
  let EARTH_RADIUS = 6378.137;
  let radLat1 = lat1 * Math.PI / 180;
  let radLat2 = lat2 * Math.PI / 180;
  let a = radLat1 - radLat2;
  let b = lng1 * Math.PI / 180 - lng2 * Math.PI / 180;
  let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
  s = s * EARTH_RADIUS;
  s = Math.round(s * 1e4) / 1e4;
  return { m: s * 1e3, km: Number(s.toFixed(2)) };
};
exports.GetDistance = GetDistance;
