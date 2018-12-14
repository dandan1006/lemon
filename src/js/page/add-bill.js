require(['../js/config.js'],function(){
	require(['mui'],function(mui){
		mui.init();
		mui('.mui-slider').slider();
	})
})