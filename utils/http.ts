type TMethod = "GET" | "POST" | "PUT" | "DELETE" | "HEAD | OPTIONS";
interface RequestSuccess<T> {}

export const http = <T>(url: string, method: TMethod = 'GET', data?: any, config?: any) => {
	let header: any = {};
	if(config) header = { ...config };
	const token = uni.getStorageSync('token');
	if(token) header['Authorization'] = `Bearer ${uni.getStorageSync('token')}`;
	
	return new Promise<RequestSuccess<T>>((resolve, inject) => {
		uni.request({
			url,
			method,
			data,
			header,
			success(e) {
				resolve(e)
			},
			fail(err) {
				inject(err)
			}
		})
	})
}

// 监听器
// uni.addInterceptor('request', {
//   // 在发送请求之前做一些处理
//   config(requestConfig) {
//     // 添加请求头、身份验证等
//     requestConfig.header.Authorization = 'Bearer ' + uni.getStorageSync('token');
//     return requestConfig;
//   },
//   // 请求发生错误时的处理
//   fail(error) {
//     console.error('请求失败:', error);
//   },
// });