<template>
	<view class="text" style="margin-top: 80rpx;">预约信息提交完成</view>
	<view class="h1">量房队长将尽快与您联系，请稍等</view>
	<view class="back">
		<uni-icons type="checkbox-filled" size="100" color="#007B45" />
	</view>
	<view class="back" @tap="uni.navigateBack()">
		<text class="back-text">完成</text>
	</view>
	<view class="text">预约时间：2023-09-21 17:31</view>
</template>

<style lang="scss" scoped>
.text{
	font-size: $uni-font-size-sm;
	color: $uni-text-color-grey;
	text-align: center;
}
.h1{
	font-size: $uni-font-size-lg;
	text-align: center;
	margin: 20rpx 0;
}
.back{
	text-align: center;
	display: flex;
	justify-content: center;
	margin: 30rpx 0 20rpx 0;
	&-text{
		background-color: $uni-bg-color-green;
		width: 240rpx;
		color: white;
		padding: 10rpx 0;
		border-radius: 20rpx;
	}
}
</style>
