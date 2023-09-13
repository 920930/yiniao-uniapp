<template>
	<image mode="aspectFill" class="banner" src="http://img.sirfang.com/effect_img/2020/10/19/5509eb66f7ef894877bcbca384bc86b7.jpg" />
	<view class="modal">
		<view class="title">
			<uni-icons type="cart-filled" size="26" />
			<text>厨房快改大师 | 8小时厨房极速翻新</text>
		</view>
		<view class="info">
			<text class="info-item">低噪微尘不搬家</text>
			<text class="info-item">品质环保零担忧</text>
			<text class="info-item">自家私服真负责</text>
			<text class="info-item">3天送货，8小时装完</text>
		</view>
		<view class="price" @click="taocan = !taocan">
			￥<text class="price-red">6888</text>元/套
			<text style="margin-left: 10rpx;">包含7项内容</text>
			<uni-icons :type="taocan ? 'top' : 'bottom'" />
		</view>
		<view :class="['modal-more', taocan && 'modal-active']">
			<view class="modal-more-item">
				<text>厨房快改大师-地砖</text>
				<view class="modal-more-item-info">eo级颗粒板、DUO阻尼铰链、免拉手设计</view>
			</view>
			<view class="modal-more-item">
				<text>厨房快改大师-地砖</text>
				<view class="modal-more-item-info">eo级颗粒板、DUO阻尼铰链、免拉手设计</view>
			</view>
			<view class="modal-more-item">
				<text>厨房快改大师-地砖</text>
				<view class="modal-more-item-info">eo级颗粒板、DUO阻尼铰链、免拉手设计</view>
			</view>
			<view class="modal-more-item">
				<text>厨房快改大师-地砖</text>
				<view class="modal-more-item-info">eo级颗粒板、DUO阻尼铰链、免拉手设计</view>
			</view>
			<view class="modal-more-item">
				<text>厨房快改大师-地砖</text>
				<view class="modal-more-item-info">eo级颗粒板、DUO阻尼铰链、免拉手设计</view>
			</view>
			<view class="modal-more-item">
				<text>厨房快改大师-地砖</text>
				<view class="modal-more-item-info">eo级颗粒板、DUO阻尼铰链、免拉手设计</view>
			</view>
		</view>
	</view>
	
	<view class="kx">
		<text>可选配置</text>
		<view class="kx-items">
			<text
				:class="['kx-items-text', {'kx-items-active': kxActive.ids.has(item.id)}]"
				v-for="item in data"
				:key="item.id"
				@tap="kexuanFn(item.id)"
			>
				{{item.title}}
			</text>
		</view>
		<template v-if="kxActive.ids.size">
			<view v-for="item in kxActive.item" :key="item.id" class="kx-show">{{item.title}}</view>
			<text class="kx-show" style="color: rgba(0, 0, 0, 0.5);">注意：具体价格根据现场测量及方案，设计而定</text>
		</template>
	</view>
	
	<view class="product">产品详情</view>
	<image src="../../static/1.jpg" mode="widthFix" class="w-img" />
	<image src="../../static/2.jpg" mode="widthFix" class="w-img" />
	<image src="../../static/3.jpg" mode="widthFix" class="w-img" />
	<image src="../../static/4.jpg" mode="widthFix" class="w-img" />
	<view class="yuyue" @tap="yuyueBtn">预约上门量房</view>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app';
import { reactive, ref } from 'vue';

const id = ref('0');
const taocan = ref(false);

const data = ref([
	{ id: 1, title: '房屋维修', children: [
		{id: 3, title: '防水补漏'},
		{id: 4, title: '瓷砖地板微信'},
		{id: 5, title: '家具微信'},
		{id: 6, title: '强弱电维修'},
		{id: 7, title: '管道疏通'},
		{id: 8, title: '墙纸墙布墙板维修'},
	]},
	{ id: 2, title: '房屋改造', children: [
		{id: 9, title: '厨房改造'},
		{id: 10, title: '玄关改造'},
		{id: 11, title: '空间搭建'},
		{id: 12, title: '卫生间改造'},
	]},
])


onLoad((opt) => id.value = opt.id)

const kxActive = reactive<{ids: Set<number>, item: {id: number; title: string}[] | null}>({
	ids: new Set(),
	item: null
})
const kexuanFn = (id: number) => {
	kxActive.ids.has(id) ? kxActive.ids.delete(id) : kxActive.ids.add(id);
	if(kxActive.ids.size) {
		const id = [...kxActive.ids][kxActive.ids.size - 1];
		kxActive.item = data.value.find(item => item.id === id).children
	}else{
		kxActive.item = null
	}
}

const yuyueBtn = () => {
	uni.switchTab({
		url: `/pages/yuyue/yuyue?id=${id}`
	})
}
</script>

<style lang="scss" scoped>
.banner{
	width: 750rpx;
	height: 400rpx;
}
.w-img{
	width: 750rpx;
}
.modal{
	position: relative;
	margin: 20rpx;
	box-shadow: 0 0 10rpx 10rpx rgba(0, 0, 0, 0.05);
	border-radius: 16rpx;
	padding: 20rpx;
	&-more{
		transition: all 0.3s;
		overflow: hidden;
		max-height: 0rpx;
		&-grid{
			min-height: 0;
		}
		&-item{
			margin-top: 15rpx;
			font-size: $uni-font-size-base;
			&-info{
				margin-top: 4rpx;
				color: $uni-text-color-grey;
				font-size: $uni-font-size-sm;
			}
		}
	}
	&-active{
		max-height: 500rpx;
		overflow-y: auto;
	}
}

.title{
	display: flex;
	align-items: center;
	font-weight: bold;
	font-size: 36rpx;
}
.info{
	margin: 15rpx 0 0 -10rpx;
	display: flex;
	flex-wrap: wrap;
	&-item{
		margin-left: 20rpx;
		margin-bottom: 15rpx;
		background-color: #F8ECE4;
		color: #E69D6F;
		padding: 4rpx 15rpx;
		border-radius: 20rpx;
		font-size: 24rpx;
	}
}
.price{
	color: rgba(0, 0, 0, 0.5);
	font-size: 26rpx;
	&-red{
		color: $uni-color-error;
		font-size: 40rpx;
		margin: 0 5rpx 0 0;
	}
}

.kx{
	margin: 0 22rpx 25rpx;
	&-items{
		display: flex;
		flex-wrap: wrap;
		margin-left: -20rpx;
		margin-top: 20rpx;
		color: $uni-text-color-grey;
		&-text{
			margin-left: 20rpx;
			margin-bottom: 15rpx;
			background-color: white;
			box-shadow: 0 0 8px 4rpx $uni-bg-color-shadow;
			border-radius: $uni-border-radius-lg;
			padding: 8rpx 15rpx;
			border: 1rpx solid rgba(0, 0, 0, 0.1);
		}
		&-active{
			color: $uni-text-color-green;
			border-color: $uni-bg-color-green;
		}
	}
	&-show{
		font-size: $uni-font-size-base;
		padding: 5rpx 20rpx;
	}
}

.product{
	color: $uni-text-color-green;
	margin: 0 0 20rpx 20rpx;
	border-bottom: 5rpx solid $uni-text-color-green;
	display: inline-block;
	padding-bottom: 8rpx;
	font-weight: bold;
}
.yyh{
	height: 80rpx;
}
.yuyue{
	height: 80rpx;
	background-color: $uni-bg-color-green;
	color: white;
	position: fixed;
	bottom: 1%;
	left: 10%;
	right: 10%;
	text-align: center;
	line-height: 80rpx;
	box-shadow: 0 0 6rpx 5rpx rgba(0, 0, 0, 0.1);
	z-index: 100;
	border-radius: 50rpx;
}
</style>
