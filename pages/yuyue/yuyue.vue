<template>
	<view class="top">
		<uni-icons type="shop" size="130" color="#007B45" class="top-icon" />
		<view class="top-bm">
			<view class="top-bm-title">10秒预约免费上门评估</view>
			<text>提供免费的上门问题诊断、户型评估分析服务</text>
		</view>
	</view>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.top{
	position: relative;
	height: 400rpx;
	background: linear-gradient(to bottom, $uni-bg-color-green, white);
	&-icon{
		position: absolute;
		right: 30rpx;
		top: 10rpx;
		opacity: 0.2;
	}
	&-bm{
		position: absolute;
		bottom: 20rpx;
		padding: 10rpx 3%;
		opacity: 0.9;
		&-title{
			font-size: 46rpx;
			font-weight: bold;
			margin-bottom: 10rpx;
		}
	}
}
</style>
