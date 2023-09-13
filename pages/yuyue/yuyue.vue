<template>
	<view class="top">
		<uni-icons type="shop" size="130" color="#007B45" class="top-icon" />
		<view class="top-bm">
			<view class="top-bm-title">10秒预约免费上门评估</view>
			<text>提供免费的上门问题诊断、户型评估分析服务</text>
		</view>
	</view>
	<view class="card">
		<view class="card-title">第一步: 选择您需要的服务</view>
		<view class="card-grid">
			<view class="card-grid-item">
				<text>局部改造</text>
				<uni-icons type="contact" size="40" color="#007B45" />
			</view>
			<view class="card-grid-item">
				<text>局部改造</text>
				<uni-icons type="calendar-filled" size="40" color="#007B45" />
			</view>
			<view class="card-grid-item">
				<text>局部改造</text>
				<uni-icons type="gift-filled" size="40" color="#007B45" />
			</view>
			<view class="card-grid-item card-grid-active">
				<text>局部改造</text>
				<uni-icons type="notification-filled" size="40" color="#007B45" />
			</view>
		</view>
	</view>
	<view class="card">
		<view class="card-title">第二步: 填写您的信息，以便免费为您上门</view>
		<form @submit="formSubmit" @reset="formReset">
			<input placeholder="请选择服务地址" disabled @tap="chooseMapBtn" />
			<radio-group name="radio">
				<label>
					<radio value="radio1" /><text>选项一</text>
				</label>
				<label>
					<radio value="radio2" /><text>选项二</text>
				</label>
			</radio-group>
		</form>
	</view>
</template>

<script lang="ts" setup>
const formSubmit = () => {}
const formReset = () => {}
</script>

<style lang="scss" scoped>
.top{
	position: relative;
	height: 360rpx;
	background: linear-gradient(to bottom, $uni-bg-color-green, white);
	&-icon{
		position: absolute;
		right: 30rpx;
		top: 10rpx;
		opacity: 0.2;
	}
	&-bm{
		position: absolute;
		bottom: 50rpx;
		padding: 10rpx 3%;
		opacity: 0.9;
		&-title{
			font-size: 44rpx;
			font-weight: bold;
			margin-bottom: 10rpx;
		}
	}
}
.card{
	margin: 20rpx 3%;
	&-title{
		border-left: 10rpx solid $uni-bg-color-green;
		color: $uni-bg-color-green;
		padding-left: 10rpx;
		font-weight: bold;
		font-size: 34rpx;
	}
	&-grid{
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 30rpx;
		margin-top: 30rpx;
		margin-bottom: 50rpx;
		&-item{
			box-shadow: 0 0 10rpx 10rpx rgba(0, 0, 0, 0.05);
			border: 4rpx solid white;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 20rpx 20rpx;
			border-radius: 20rpx;
		}
		&-active{
			border-color: $uni-bg-color-green;
		}
	}
}
</style>
