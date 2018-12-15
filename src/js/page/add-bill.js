require(['../js/config.js'],function(){
	require(['mui','dom'],function(mui,dom){
		mui.init();
		mui('.mui-slider').slider();
		
		function init(){
			mui.init();
			//添加点击事件
			addEvent();
		}
		
		function addEvent(){
			var _money=dom('.money');
			
			//点击键盘
			mui('.keyword').on('tap','span',function(){
				var val=this.innerHTML;
				var moneyVal=_money.innerHTML;;
				 if(val==='X'){
					_money.innerHTML=moneyVal.slice(0,moneyVal.length-1);
					if(moneyVal.length==1){
						_money.innerHTML='0.00'
					}
					return
				}
				
				if(moneyVal =='0.00'){
					_money.innerHTML='';
					_money.innerHTML+=val;
					return
				}else if(moneyVal.indexOf('.')!=-1&&val==='.'){
					_money.innerHTML=moneyVal;
				}else if(moneyVal.indexOf('.')!=-1&&moneyVal.split('.')[1].length==2){
					_money.innerHTML=moneyVal;
				}else{
					_money.innerHTML+=val;
				}
			})
		}
		init();
	})
})