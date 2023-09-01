<template>
	<!-- <view class="status_bar"></view> -->
	<video object-fit='cover' :controls="false" autoplay loop muted src="https://www.zcfsjt.com/static/v.m4v" class="video" />
	<view class="about">
		<view class="lang">真自营·不外包</view>
		<view class="title" @click="openBtn"><text style="margin-right: 13rpx;">关于我们</text><icon type="success" size="16"/></view>
		<view class="content" v-if='show'>
			<text class="title">我们是谁</text>
			<view class="item">
				益鸟美居，创立于2016年3月，是全国自营连锁规模领先的房屋维修、翻新改造服务商，我们坚持独无二的“真自营不外包”经营模式，覆盖上海、深圳、成都、重庆、武汉、贵阳等城市，数十家自营连锁门店，自有专业工人超300+，已服务全国超10万用户。
			</view>
			<text class="title">我们的使命</text>
			<view class="item">
				以领先科技创造更安全、舒适、低碳的生活空间
			</view>
			<text class="title">我们的愿景</text>
			<view class="item">
				成为亿万用户信赖的综合家居服务商
			</view>
			<text class="title">我们的价值观</text>
			<view class="item">
				<text>用户第一 说到做到</text>
				<view>拼搏进取开放分享</view>
			</view>
		</view>
	</view>
	<view class="floor2">
		<view class="floor2-bg">
			<view class="floor2-bg-item">
				<uni-icons type="auth-filled" color='green' size="40"></uni-icons>
				<text class="floor2-bg-item-title">真专业</text>
				<text>自营店铺 自由工人</text>
			</view>
			<view class="floor2-bg-item">
				<uni-icons type="hand-up-filled" color='green' size="40"></uni-icons>
				<text class="floor2-bg-item-title">高品质</text>
				<text>质保期为同业3-5倍</text>
			</view>
			<view class="floor2-bg-item">
				<uni-icons type="medal-filled" color='green' size="40"></uni-icons>
				<text class="floor2-bg-item-title">全环保</text>
				<text>施工均采用国家认证环保材料</text>
			</view>
			<view class="floor2-bg-item">
				<uni-icons type="headphones" color='green' size="40"></uni-icons>
				<text class="floor2-bg-item-title">优服务</text>
				<text>7✖14✖365客服</text>
			</view>
		</view>
	</view>
	<swiper class="swiper" circular :interval="2000" :display-multiple-items="2" next-margin='60rpx'>
		<swiper-item>
			<view class="swiper-item" style="background-color: red;">A</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item" style="background-color: blue;">B</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item" style="background-color: green;">C</view>
		</swiper-item>
	</swiper>
	
	<view class="ys">
		<view class="ys-item">
			<view class="">
				<text class="en">qiangmianfanxin</text>
				<text class="title">墙面翻新</text>
				<uni-icons type="checkbox-filled" size="20"></uni-icons>
				<view class="info">解决墙面问题，益鸟不止有”乳胶漆</view>
			</view>
			
		</view>
		<view class="ys-item">
			<view class="">
				<text class="en">fangshuibulou</text>
				<view style="display: flex; align-items: center;">
					<text class="title">防水补漏</text>
					<uni-icons type="checkbox-filled" size="20"></uni-icons>
				</view>
				<view class="info">漏水烦恼，交给益鸟，一次维修，终身无忧</view>
			</view>
		</view>
		<view class="ys-item">
			<view class="">
				<text class="en">jubugaizhao</text>
				<view style="display: flex; align-items: center;">
					<text class="title">局部改造</text>
					<uni-icons type="checkbox-filled" size="20"></uni-icons>
				</view>
				<view class="info">风格多变，工期可控</view>
			</view>
		</view>
		<view class="ys-item">
			<view class="">
				<text class="en">weixiuanzhuang</text>
				<view style="display: flex; align-items: center;">
					<text class="title">维修安装</text>
					<uni-icons type="checkbox-filled" size="20"></uni-icons>
				</view>
				<view class="info">居家烦恼，交给益鸟又快又省</view>
			</view>
		</view>
	</view>
	<map style="width: 750rpx; height: 500rpx;" :longitude="104.065837" :latitude="30.657349" :scale='11' :markers="covers"></map>
	<view class="more">
		<view class="shop">查看更多门店</view>
	</view>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { GetDistance } from '../../utils';

const myItude = reactive({
	longitude: 0,
	latitude: 0,
})
const show = ref(false);
const openBtn = () => show.value = !show.value;
// 获取当前
uni.getLocation({
	type: 'wgs84',
	success: function (res) {
		myItude.latitude = res.latitude;
		myItude.longitude = res.longitude;
		covers.value.forEach(item => {
			item.callout.content = `${item.callout.content} - 距离我${GetDistance(item.latitude, item.longitude, res.latitude, res.longitude).km}km`
		})
	}
});
// 地图选点
const covers = ref([{
	id: 1,
	latitude: 30.67,
	longitude: 104.06,
	width: 20,
	height: 20,
	iconPath: '../../static/logo.png',
	callout: { // 气泡
		display: "ALWAYS",
		content: `成都徐东店`,
		bgColor: "rgba(34, 139, 34, 0.9)",
		color: "#f0f0f0",
		borderRadius: '20rpx',
		fontSize: 12,
		padding: 5,
	},
}, {
	id: 2,
	latitude: 30.64,
	longitude: 104.083,
	width: 20,
	height: 20,
	iconPath: '../../static/logo.png',
	callout: { // 气泡
		display: "ALWAYS",
		content: `成都合江店`,
		bgColor: "rgba(34, 139, 34, 0.9)",
		color: "#f0f0f0",
		borderRadius: '20rpx',
		fontSize: 12,
		padding: 5,
	},
}])

const moreShop = () => {}
</script>

<style scoped lang="scss">
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}
	.video{
		width: 100%;
		height: 60vh;
	}
	.about{
		position: relative;
		margin: 0 3%;
		padding: 20rpx;
		width: 94%;
		box-sizing: border-box;
		top: -50rpx;
		background-color: green;
		color: white;
		border-radius: 20rpx;
		.lang{
			font-size: 50rpx;
			margin-bottom: 10rpx;
		}
		.title{
			display: flex;
			align-items: center;
		}
		.content {
			background-color: white;
			color: black;
			padding: 20rpx 20rpx 1rpx 20rpx;
			border-radius: 16rpx;
			margin-top: 16rpx;
			.title{
				font-weight: bold;
				font-size: 40rpx;
			}
			.item{
				color: rgba(0, 0, 0, .6);
				margin: 15rpx 0 20rpx;
			}
		}
	}
	.floor2{
		background-color: green;
		margin: -30rpx 3% 60rpx;
		padding: 30rpx 10rpx;
		border-radius: 20rpx;
		&-bg{
			background-color: white;
			border-radius: 10rpx;
			padding: 30rpx;
			display: grid;
			gap: 40rpx;
			color: darkgreen;
			&-item{
				display: flex;
				align-items: center;
				font-size: 24rpx;
				&-title{
					font-size: 38rpx;
					margin: 0 20rpx 0 30rpx;
					font-weight: bold;
				}
			}
		}
	}
	.swiper {
		height: 400rpx;
		margin-bottom: 20rpx;
		margin-top: -30rpx;
	}
	.swiper-item {
		display: block;
		height: 400rpx;
		line-height: 400rpx;
		text-align: center;
		margin: 0 20rpx;
	}
	.ys{
		margin: 0 3% 40rpx;
		&-item{
			height: 150rpx;
			box-shadow: 0 0 20rpx 10rpx rgba(0, 0, 0, .1);
			margin-top: 50rpx;
			border-radius: 20rpx;
			display: flex;
			align-items: center;
			padding: 10rpx 20rpx;
			font-size: 26rpx;
			position: relative;
			.en{
				position: absolute;
				text-transform: uppercase;
				color: rgba(0, 100, 0, 0.1);
				z-index: -1;
				top: 12rpx;
				font-style: italic;
				font-size: 40rpx;
				font-weight: bold;
			}
			.title{
				font-size: 36rpx;
			}
			.info{
				margin-top: 16rpx;
				color: rgba(0, 0, 0, 0.5);
			}
		}
	}
	.more{
		display: flex;
		justify-content: center;
		.shop{
			width: 260rpx;
			height: 80rpx;
			background-color: green;
			line-height: 80rpx;
			text-align: center;
			color: white;
			margin: 20rpx 0;
			border-radius: 20rpx;
		}
	}
</style>
