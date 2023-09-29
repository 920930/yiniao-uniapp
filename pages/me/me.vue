<template>
	<view class="noti">
		<uni-icons type="notification" size="22" />
	</view>
	<view class="info">
		<view class="info-left">
			<image src="../../static/logo.png" class="info-left-img" />
			<view class="info-left-text">
				<view>点我登录</view>
				<text class="info-left-text-act">欢迎来到益鸟~</text>
			</view>
		</view>
		<view class="info-right">
			<text class="info-right-text">查看会员计划</text>
			<uni-icons type="right" color="#999" />
		</view>
	</view>
	
	<view class="fuli">
		<view class="fuli-top">
			<text>福利中心</text>
			<view class="fuli-top-more">
				<text>领取优惠</text>
				<uni-icons type="right" color="#999" />
			</view>
		</view>
		<view class="fuli-grid">
			<view class="fuli-grid-item">
				<text class="fuli-grid-item-num">1</text>
				<view class="fuli-grid-item-desc">优惠券(张)</view>
			</view>
			<view class="fuli-grid-item">
				<text class="fuli-grid-item-num">2</text>
				<view class="fuli-grid-item-desc">服务抵扣券(张)</view>
			</view>
			<view class="fuli-grid-item">
				<text class="fuli-grid-item-num">33</text>
				<view class="fuli-grid-item-desc">分享奖励(张)</view>
			</view>
		</view>
	</view>
	
	<view class="list">
		<view class="list-item">
			<view class="list-item-left">
				<uni-icons type="wallet" size="22" />
				<text>订单管理</text>
			</view>
			<view class="list-item-right">
				<text>查看全部</text>
				<uni-icons type="right" color="#999" />
			</view>
		</view>
		<view class="list-item">
			<view class="list-item-left">
				<uni-icons type="compose" size="22" />
				<text>我的质保卡</text>
			</view>
			<view class="list-item-right">
				<text>质保卡</text>
				<uni-icons type="right" color="#999" />
			</view>
		</view>
		<view class="list-item">
			<view class="list-item-left">
				<uni-icons type="chat" size="22" />
				<text>邀请好友</text>
			</view>
			<view class="list-item-right">
				<text>赚佣金</text>
				<uni-icons type="right" color="#999" />
			</view>
		</view>
		<view class="list-item">
			<view class="list-item-left">
				<uni-icons type="email" size="22" />
				<text>意见反馈</text>
			</view>
			<view class="list-item-right">
				<text>益鸟因您而改变</text>
				<uni-icons type="right" color="#999" />
			</view>
		</view>
		<view class="list-item">
			<view class="list-item-left">
				<uni-icons type="phone" size="22" />
				<text>联系客服</text>
			</view>
			<view class="list-item-right">
				<text>400-700-009</text>
				<uni-icons type="right" color="#999" />
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
let menuButtonInfo = uni.getMenuButtonBoundingClientRect();
console.log(menuButtonInfo)
const info = reactive({
	top: menuButtonInfo.top + 'px',
	height: menuButtonInfo.height + 'px',
	infoTop: menuButtonInfo.top + menuButtonInfo.height + 30 + 'px',
})
</script>

<style lang="scss" scoped>
.noti{
	position: absolute;
	top: v-bind('info.top');
	left: 10px;
	height: v-bind('info.height');
	display: flex;
	align-items: center;
}
.info{
	position: relative;
	padding: v-bind('info.infoTop') 30rpx 120rpx;
	display: flex;
	align-items: center;
	background: linear-gradient(to bottom, $uni-bg-color-green, white);
	z-index: -10;
	&-left{
		flex: 1;
		display: flex;
		align-items: center;
		&-img{
			width: 85rpx;
			height: 85rpx;
			border-radius: 50%;
			margin-right: 20rpx;
		}
		&-text{
			font-weight: 600;
			&-act{
				color: $uni-text-color;
				font-size: $uni-font-size-sm;
				font-weight: 500;
			}
		}
	}
	&-right{
		color: $uni-text-color;
		&-text{
			font-size: $uni-font-size-base;
		}
	}
}

.fuli{
	box-shadow: 0 0 10rpx 5rpx $uni-bg-color-shadow;
	margin: -60rpx 30rpx 0;
	border-radius: 10rpx;
	padding: 20rpx;
	&-top{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 40rpx;
		&-more{
			color: $uni-text-color-grey;
		}
	}
	&-grid{
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20rpx;
		margin-bottom: 10rpx;
		&-item{
			text-align: center;
			&-num{
				color: $uni-text-color-green;
				font-weight: bold;
				font-size: 40rpx;
			}
			&-desc{
				margin-top: 10rpx;
				font-size: $uni-font-size-base;
				color: $uni-text-color-grey;
			}
		}
	}
}

.list{
	box-shadow: 0 0 10rpx 5rpx $uni-bg-color-shadow;
	margin: 50rpx 30rpx 0;
	border-radius: 10rpx;
	padding: 25rpx;
	display: grid;
	grid-template-columns: repeat(1fr, 1);
	gap: 30rpx;
	&-item{
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: $uni-text-color;
		&-left{
			display: flex;
			gap: 10rpx;
		}
		&-right{
			color: $uni-text-color-grey;
		}
	}
}
</style>
