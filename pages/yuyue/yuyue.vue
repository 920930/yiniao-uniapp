<template>
	<view class="top">
		<uni-icons type="shop" size="130" color="#007B45" class="top-icon" />
		<view class="top-bm">
			<view class="top-bm-title">10秒预约免费上门评估</view>
			<text>提供免费的上门问题诊断、户型评估分析服务</text>
		</view>
	</view>
	<form @submit="formSubmit" @reset="formReset">
		<view class="card">
			<view class="card-title">第一步: 选择您需要的服务</view>
			<radio-group name='type' class="card-grid" @change="typeChange">
				<view :class="['card-grid-item', form.type.includes('t1') && 'card-grid-active']">
					<text>局部改造</text>
					<uni-icons type="contact" size="40" color="#007B45" />
					<radio value="t1" class="card-grid-item-radio" :checked="form.type.includes('t1')" />
				</view>
				<view :class="['card-grid-item', form.type.includes('t2') && 'card-grid-active']">
					<text>防水补漏</text>
					<uni-icons type="calendar-filled" size="40" color="#007B45" />
					<radio value="t2" class="card-grid-item-radio" :checked="form.type.includes('t2')" />
				</view>
				<view :class="['card-grid-item', form.type.includes('t3') && 'card-grid-active']">
					<text>墙面翻新</text>
					<uni-icons type="gift-filled" size="40" color="#007B45" />
					<radio value="t3" class="card-grid-item-radio" :checked="form.type.includes('t3')" />
				</view>
				<view :class="['card-grid-item', form.type.includes('t4') && 'card-grid-active']">
					<text>维修安装</text>
					<uni-icons type="notification-filled" size="40" color="#007B45" />
					<radio value="t4" class="card-grid-item-radio" :checked="form.type.includes('t4')" />
				</view>
			</radio-group>
		</view>
		<view class="card">
			<view class="card-title">第二步: 填写您的信息，以便免费为您上门</view>
			<view class="card-form">
				<view class="card-form-item">
					<label class="card-form-item-label">服务地址</label>
					<input name="address" v-model="form.address" placeholder="请选择服务地址" disabled @tap="chooseMapBtn" class="card-form-item-center" />
					<uni-icons type="right" />
				</view>
				<input name="xiaoqu" v-model="form.xiaoqu" style="transform: scale(0);">
				<view class="card-form-item">
					<label class="card-form-item-label">门牌号</label>
					<input name="dong" class="card-form-item-border">
					<text>栋</text>
					<input name="danyuan" class="card-form-item-border">
					<text>单元</text>
					<input name="hao" class="card-form-item-border">
					<text>号</text>
				</view>
				<view class="card-form-item">
					<label class="card-form-item-label">上门时间</label>
					<radio-group name="time" class="card-form-item-flex">
						<label><radio value="0" /><text>立即</text></label>
						<label><radio value="3" /><text>三天内</text></label>
						<label><radio value="7" /><text>七天内</text></label>
					</radio-group>
				</view>
			</view>
			<button form-type="submit" class="card-form-btn">立即预约</button>
		</view>
	</form>
	<view style="height: 10rpx;"></view>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
const form = reactive({
	type: 't1',
	address: '',
	xiaoqu: '',
})
const chooseMapBtn = () => {
	uni.chooseLocation({
		success: function (res) {
			form.address = res.address;
			form.xiaoqu = res.name;
			console.log('位置名称：' + res.name);
			console.log('详细地址：' + res.address);
			console.log('纬度：' + res.latitude);
			console.log('经度：' + res.longitude);
		}
	});
}
const formSubmit = (e) => {
	console.log(e.detail.value)
	
}
const formReset = () => {}

const typeChange = (evt) => form.type = evt.detail.value;
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
			position: relative;
			transition: 0.5s;
			&-radio{
				position: absolute;
				z-index: 200;
				width: 100%;
				height: 100%;
				opacity: 0;
			}
		}
		&-active{
			border-color: $uni-bg-color-green;
		}
	}
	&-form{
		&-item{
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 35rpx;
			&-center{
				margin-left: 20rpx;
				flex: 1;
				border-bottom: 1rpx solid rgba(0, 0, 0, 0.05);
			}
			&-flex{
				flex: 1;
				display: flex;
				justify-content: flex-end;
				gap: 30rpx;
				transform: scale(0.8);
			}
			&-border{
				border-bottom: 1rpx solid rgba(0, 0, 0, 0.05);
				width: 90rpx;
				text-align: center;
			}
		}
		&-btn{
			background-color: $uni-bg-color-green;
			outline: none;
			color: white;
			font-size: 28rpx;
			margin: 20rpx;
			border-radius: 50rpx;
		}
	}
}
</style>
