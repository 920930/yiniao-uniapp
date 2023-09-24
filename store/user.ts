import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
	state: () => ({
		token: '',
		info: {
			id: 0,
			name: '',
			phone: '',
			sex: 1
		},
	}),
	// 也可以这样定义
	// state: () => ({ count: 0 })
	actions: {
		setToken(val: string){
			this.token = val;
		},
		setUser(info: {id: number; phone: string; name: string}) {
			this.$patch({info})
		},
	},
});