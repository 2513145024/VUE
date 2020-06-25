/*
  请求地址:http://wthrcdn.etouch.cn/weather_mini
  请求方法:get
  请求参数:city(城市名)
  响应内容:天气信息

  1. 点击回车
  2. 查询数据
  3. 渲染数据
  */
var app = new Vue({
	el: "#app",
	data: {
		city: '',
		weatherList: []
	},
	methods: {
		weatherQuery: function () {
			// console.log(this.city);
			axios.get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city)
				.then((response) => {
					// console.log(response.data.data.forecast),
					this.weatherList = response.data.data.forecast

				}).catch(function (response) {

				})

		},
		changCity: function (city) {
			this.city = city;
			this.weatherQuery()
		}
	}
})
