var app = new Vue({
	el:"#todoapp",
	
	data:{
		list:["写代码","睡觉了","看电视"],
		inputvalue:""
	},
	methods:{
		add:function(){
			this.list.push(this.inputvalue),
			this.inputvalue = ""
		},
		remove:function(index){
			this.list.splice(index,1);
		},
		clear:function(){
			this.list = []
		}
	}
	
	
})