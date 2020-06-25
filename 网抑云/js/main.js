/*
  1:歌曲搜索接口
    请求地址:https://autumnfish.cn/search
    请求方法:get
    请求参数:keywords(查询关键字)
    响应内容:歌曲搜索结果

  2:歌曲url获取接口
    请求地址:https://autumnfish.cn/song/url
    请求方法:get
    请求参数:id(歌曲id)
    响应内容:歌曲url地址
  3.歌曲详情获取
    请求地址:https://autumnfish.cn/song/detail
    请求方法:get
    请求参数:ids(歌曲id)
    响应内容:歌曲详情(包括封面信息)
  4.热门评论获取
    请求地址:https://autumnfish.cn/comment/hot?type=0
    请求方法:get
    请求参数:id(歌曲id,地址中的type固定为0)
    响应内容:歌曲的热门评论
  5.mv地址获取
    请求地址:https://autumnfish.cn/mv/url
    请求方法:get
    请求参数:id(mvid,为0表示没有mv)
    响应内容:mv的地址
*/
var app = new Vue({
	el: "#player",
	data: {
		query: "许嵩",
		musicList: [],
		musicUrl:"",
		musicPic:"",
		hotComments:[],
		isPlaying:false,
		isShow:false,
		MVurl:""
		
	},
	methods: {
		// 歌曲搜索
		searchMusic: function() {
			axios.get("https://autumnfish.cn/search?keywords=" + this.query).then((response) => {
				
				this.musicList = response.data.result.songs
				// console.log(response.data.result.songs)
			}).catch((err)=>{})
			
			
		},
		//歌曲播放
		playMusic:function(musicId){
			//歌曲地址
			axios.get("https://autumnfish.cn/song/url?id="+musicId).then((response)=>{
				// console.log(response.data.data[0].url)
				this.musicUrl = response.data.data[0].url
			}).catch(function(){})
			
			//歌曲封面
			axios.get("https://autumnfish.cn/song/detail?ids="+musicId).then((response)=>{
				this.musicPic = response.data.songs[0].al.picUrl
			}).catch(function(){})
			
			//歌曲评论
			axios.get("https://autumnfish.cn/comment/hot?type=0&id="+musicId).then((response)=>{
				// console.log(response.data.hotComments);
				this.hotComments = response.data.hotComments
			}).catch(function(){})
			
		},
		//播放
		play:function(){
			// console.log("play");
			this.isPlaying = true
		},
		//暂停
		pause:function(){
			this.isPlaying = false
			// console.log("pause");
		},
		
		//播放MV
		playMV:function(mvid){
			
			axios.get("https://autumnfish.cn/mv/url?id=" + mvid).then((response) => {
				this.isShow = true
				this.MVurl = response.data.data.url			
				this.musicUrl = ""
				this.pause()
			
			}).catch((err)=>{})
		},
		hide:function(){
			this.isShow = false
			this.MVurl = ""
		}
		
		
	}
});
