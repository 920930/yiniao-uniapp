import { defineStore } from 'pinia';

export const useGoodStore = defineStore('good', {
	state: () => ({
		id: 0,
		more: [],
	}),
	// 也可以这样定义
	// state: () => ({ count: 0 })
	actions: {
		setGood(info: {id: number; more: (string | number)[]}) {
			console.log(info)
			this.$patch(info)
		},
	},
});