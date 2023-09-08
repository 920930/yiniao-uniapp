<template>
	<image mode="aspectFill" class="banner" src="http://img.sirfang.com/effect_img/2020/10/19/5509eb66f7ef894877bcbca384bc86b7.jpg" />
	<view class="title">
		<uni-icons type="cart-filled" size="26"></uni-icons>
		<text>厨房快改大师 | 8小时厨房极速翻新</text>
	</view>
	<view class="info">
		<text class="info-item">低噪微尘不搬家</text>
		<text class="info-item">品质环保零担忧</text>
		<text class="info-item">自家私服真负责</text>
		<text class="info-item">3天送货，8小时装完</text>
	</view>
	<view class="price">
		￥<text class="price-red">6888</text>元/套
		<text style="margin-left: 10rpx;">包含7项内容</text>
		<uni-icons type="bottom"></uni-icons>
	</view>
	<view style="margin: 20rpx 0 20rpx 20rpx; border-bottom: 5rpx solid red; display: inline-block; padding-bottom: 6rpx;">产品详情</view>
	<image src="../../static/1.jpg" mode="widthFix" class="w-img" />
	<image src="../../static/2.jpg" mode="widthFix" class="w-img" />
	<image src="../../static/3.jpg" mode="widthFix" class="w-img" />
	<image src="../../static/4.jpg" mode="widthFix" class="w-img" />
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app';

onLoad((opt) => {
	console.log(opt)
})
</script>

<style lang="scss" scoped>
.banner{
	width: 750rpx;
	height: 400rpx;
}
.w-img{
	width: 750rpx;
}
.title{
	display: flex;
	align-items: center;
	font-weight: bold;
	margin: 20rpx 15rpx;
	font-size: 36rpx;
}
.info{
	margin: 0 20rpx 0 -5rpx;
	display: flex;
	flex-wrap: wrap;
	&-item{
		margin-left: 20rpx;
		margin-bottom: 20rpx;
		background-color: gold;
		color: crimson;
		padding: 4rpx 15rpx;
		border-radius: 20rpx;
		font-size: 26rpx;
	}
}
.price{
	margin: 0 15rpx;
	color: rgba(0, 0, 0, 0.5);
	font-size: 30rpx;
	&-red{
		color: red;
		font-size: 45rpx;
		margin: 0 5rpx 0 0;
	}
}
</style>
