<template>
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
			<text>订单管理</text>
			<view class="list-item-right">
				<text>查看全部</text>
				<uni-icons type="right" color="#999" />
			</view>
		</view>
		<view class="list-item">
			<text>我的质保卡</text>
			<view class="list-item-right">
				<text>质保卡</text>
				<uni-icons type="right" color="#999" />
			</view>
		</view>
		<view class="list-item">
			<text>邀请好友</text>
			<view class="list-item-right">
				<text>赚佣金</text>
				<uni-icons type="right" color="#999" />
			</view>
		</view>
		<view class="list-item">
			<text>意见反馈</text>
			<view class="list-item-right">
				<text>益鸟因您而改变</text>
				<uni-icons type="right" color="#999" />
			</view>
		</view>
		<view class="list-item">
			<text>联系客服</text>
			<view class="list-item-right">
				<text>400-700-009</text>
				<uni-icons type="right" color="#999" />
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.info{
	display: flex;
	margin: 40rpx 30rpx;
	align-items: center;
	&-left{
		flex: 1;
		display: flex;
		align-items: center;
		&-img{
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
			margin-right: 15rpx;
		}
		&-text{
			&-act{
				color: $uni-text-color-grey;
				font-size: $uni-font-size-base;
			}
		}
	}
	&-right{
		color: $uni-text-color-grey;
		&-text{
			font-size: $uni-font-size-base;
		}
	}
}

.fuli{
	box-shadow: 0 0 10rpx 5rpx $uni-bg-color-shadow;
	margin: 0 30rpx;
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
		&-right{
			color: $uni-text-color-grey;
		}
	}
}
</style>
