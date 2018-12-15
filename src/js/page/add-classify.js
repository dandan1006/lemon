require(['../js/config.js'],function(){
	require(['mui','dom'],function(mui,dom){
		function init(){
			mui.init();
			//加载分类数据
			loadCdata();
		}
		
		function loadCdata(){
			mui.ajax('/classify/api/selectIcon',{
				dataType:'json',
				success:function(res){
					if(res.code===1){
						//渲染分类图标
					   renderIconList(res.data);
					}
				}
			})
			//渲染分类图标
			function renderIconList(arr){
				var len=Math.ceil(arr.length/15);
				var target=[];
				for(var i=0;i<len;i++){
					target.push(arr.splice(0,15))
				};
				var str='';
				target.forEach(function(item){
					str+=`<div class="mui-slider-item">
							<ul class="swiper">`
							str+=renderLi(item)
							str+=`</ul>
						</div>`
				})
				dom('.mui-slider-group').innerHTML=str;
				mui('.mui-slider').slider();
			}
			//渲染li
				function renderLi(arr){
					return arr.map(function(item){
						return `
							<li>
								<span class="${item.icon_name}"></span>
							</li>
						`
					}).join('')
				}
		}
		init();
	})
})
