<template>
	<view class="m-20">产品类别</view>
	<view class="lb">
		<template v-for="(item, i) in data" :key="i">
			<text @click="() => typeCurrentBtn(i)" :class="['lb-item', typeCurrent === i && 'lb-current']">{{item.title}}</text>
		</template>
	</view>
	<view class="m-20">空间类别</view>
	<view class="lb">
		<template v-for="(item, i) in data[typeCurrent].children" :key="item.id">
			<text @click="childCurrent = i" :class="['lb-item', childCurrent === i && 'lb-current']">{{item.title}}</text>
		</template>
	</view>
	<view>
		
	</view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const typeCurrent = ref(0);
const childCurrent = ref(0);
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
const typeCurrentBtn = (index: number) => {
	typeCurrent.value = index;
	childCurrent.value = 0
}
</script>

<style lang="scss" scoped>
.m-20{
	margin: 10rpx 20rpx 0 20rpx;
}
.lb{
	display: flex;
	flex-wrap: wrap;
	margin: 20rpx 20rpx 0 0;
	font-size: 28rpx;
	color: rgba(0, 0, 0, 0.4);
	&-item{
		background-color: rgba(0, 0, 0, 0.05);
		border-radius: 20rpx;
		margin: 0 0 20rpx 20rpx;
		padding: 2rpx 16rpx;
	}
	&-current{
		background-color: darkcyan;
		padding: 2rpx 15rpx;
		color: white;
	}
}
</style>
