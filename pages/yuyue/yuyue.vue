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
			<template v-if="goodStore.id">
				<view class="card-good">
					<image mode="center" class="card-good-img" src="http://img.sirfang.com/effect_img/2020/10/19/5509eb66f7ef894877bcbca384bc86b7.jpg" />
					<view class="card-good-info">
						<text class="card-good-info-title">厨房快改大师 | 8小时厨房极速翻新极速翻新</text>
						<view class="card-good-info-list">
							<text class="card-good-info-list-item">低噪微尘不搬家</text>
							<text class="card-good-info-list-item">品质环保零担忧</text>
							<text class="card-good-info-list-item">自家私服真负责</text>
							<text class="card-good-info-list-item">3天送货，8小时装完</text>
							<text class="card-good-info-list-item">3天送货，8小时装完</text>
						</view>
					</view>
				</view>
				<view class="card-price">
					<text>预计金额：</text>
					<text class="card-price-pay">￥6899</text>
				</view>
			</template>
			<radio-group name='type' class="card-grid" @change="typeChange" v-else>
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
				<view class="card-form-item">
					<label class="card-form-item-label">姓名</label>
					<input name="name" v-model="form.name" placeholder="请选择服务地址" class="card-form-item-center" />
					<radio-group>
						<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
							<view>
								<radio :value="item.value" :checked="index === current" />
							</view>
							<view>{{item.name}}</view>
						</label>
					</radio-group>
					<uni-icons type="right" />
				</view>
				<view class="card-form-item">
					<label class="card-form-item-label">门牌号</label>
					<view class="card-form-item-flex">
						<input name="dong" class="card-form-item-border">
						<text>栋</text>
						<input name="danyuan" class="card-form-item-border">
						<text>单元</text>
						<input name="hao" class="card-form-item-border">
						<text>号</text>
					</view>
				</view>
				<view class="card-form-item">
					<label class="card-form-item-label">上门时间</label>
					<radio-group name="time" @change="timeChange" class="card-form-item-flex">
						<view class="card-form-item-flex-info" :class="{'card-form-item-flex-active': form.time.includes('0')}">
							<radio value="0" class="card-form-item-flex-info-radio" :checked="form.time.includes('0')" />
							<text>立即</text>
						</view>
						<view class="card-form-item-flex-info" :class="{'card-form-item-flex-active': form.time.includes('3')}">
							<radio value="3" class="card-form-item-flex-info-radio" :checked="form.time.includes('3')" />
							<text>三天内</text>
						</view>
						<view class="card-form-item-flex-info" :class="{'card-form-item-flex-active': form.time.includes('7')}">
							<radio value="7" class="card-form-item-flex-info-radio" :checked="form.time.includes('7')" />
							<text>七天内</text>
						</view>
						<!-- <label><radio value="0" /><text>立即</text></label>
						<label><radio value="3" /><text>三天内</text></label>
						<label><radio value="7" /><text>七天内</text></label> -->
					</radio-group>
				</view>
			</view>
			<input name="xiaoqu" v-model="form.xiaoqu" style="display: none;">
			<view class="card-form-btn">
				<button form-type="reset" class="card-form-btn-reset">重置</button>
				<button form-type="submit" class="card-form-btn-submit">立即预约</button>
			</view>
		</view>
	</form>
	<uni-popup ref="popup" type="bottom">
		<view class="popup">
			底部弹出 Popup
		</view>
	</uni-popup>
	<view style="height: 10rpx;"></view>
</template>

<script lang="ts" setup>
// import { onHide } from '@dcloudio/uni-app';
import { reactive, ref } from 'vue';
import { useGoodStore } from '../../store/good';
import { Debounce } from '../../utils'
const goodStore = useGoodStore();
const popup = ref();
const form = reactive({
	type: 't1',
	name: '',
	sex: 0,
	address: '',
	xiaoqu: '',
	time: '3'
})

const chooseMapBtn = () => {
	uni.chooseLocation({
		success: function (res) {
			form.address = res.address;
			form.xiaoqu = res.name;
		}
	});
}
const formSubmit = Debounce((e: any) => {
		const ret = {...e.detail.value}
		if(goodStore.id){
			ret['id'] = goodStore.id;
			ret['more'] = goodStore.more;
		}
		popup.value.open('bottom')
		console.log(ret)
	})
const formReset = () => goodStore.$reset();

const typeChange = (evt) => form.type = evt.detail.value;
const timeChange = (evt) => form.time = evt.detail.value;
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
	margin: 20rpx 30rpx;
	&-title{
		border-left: 10rpx solid $uni-bg-color-green;
		color: $uni-bg-color-green;
		padding-left: 10rpx;
		font-weight: bold;
		font-size: 34rpx;
	}
	&-good{
		display: flex;
		margin-top: 30rpx;
		gap: 30rpx;
		&-img{
			flex: 1;
			height: 200rpx;
			border-radius: 10rpx;
		}
		&-info{
			width: 460rpx;
			&-title{
				display: block;
				width: 460rpx;
				overflow: hidden;
				white-space: nowrap;
				text-overflow:ellipsis;
			}
			&-list{
				display: flex;
				flex-wrap: wrap;
				font-size: $uni-font-size-sm;
				gap: 15rpx;
				margin-top: 20rpx;
				&-item{
					background-color: #D1E7DE;
					color: $uni-bg-color-green;
					border-radius: 20rpx;
					padding: 4rpx 15rpx;
				}
			}
		}
	}
	&-price{
		text-align: right;
		margin-top: 30rpx;
		padding-top: 10rpx;
		border-top: 1rpx dashed rgba(0, 0, 0, 0.05);
		color: $uni-text-color;
		&-pay{
			font-weight: bold;
			color: $uni-color-error;
			font-size: 40rpx;
		}
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
				z-index: 1;
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
			margin-top: 40rpx;
			&-center{
				margin-left: 20rpx;
				flex: 1;
				border-bottom: 1rpx solid rgba(0, 0, 0, 0.05);
			}
			&-flex{
				flex: 1;
				display: flex;
				justify-content: flex-end;
				gap: 20rpx;
				&-info{
					position: relative;
					background-color: $uni-bg-color-shadow;
					border-radius: 10rpx;
					text-align: center;
					font-size: $uni-font-size-base;
					padding: 8rpx 0;
					color: $uni-text-color;
					width: 130rpx;
					&-radio{
						opacity: 0;
						position: absolute;
						z-index: 100;
						width: 100%;
						height: 100%;
					}
				}
				&-active{
					background-color: $uni-bg-color-green;
					color: white;
				}
			}
			&-border{
				border-bottom: 1rpx solid rgba(0, 0, 0, 0.05);
				width: 90rpx;
				text-align: center;
			}
		}
		&-btn{
			display: flex;
			gap: 20rpx;
			margin-top: 50rpx;
			&-reset{
				outline: none;
				color: white;
				font-size: 32rpx;
				border-radius: 50rpx;
				background-color: $uni-color-warning;
				width: 30%;
			}
			&-submit{
				background-color: $uni-bg-color-green;
				outline: none;
				color: white;
				font-size: 32rpx;
				border-radius: 50rpx;
				flex: 1;
			}
		}
	}
}
.popup{
	height: 50vh;
	background-color: white;
	border-radius: 30rpx 30rpx 0 0;
	padding: 20rpx;
	box-sizing: border-box;
}
</style>