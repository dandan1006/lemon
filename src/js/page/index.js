require(['./js/config.js'], function() {
	require(['mui', 'dom', 'echarts', 'dtpicker', 'picker', , 'poppicker'], function(mui, dom, echarts, dtpicker) {
		function init() {
			mui.init();
			dom('.mui-inner-wrap').addEventListener('drag', function(event) {
				event.stopPropagation();
			})
			//初始化滚动
			loadScroll();
			//初始化时间
			initDate();
			//添加点击事件
			addEvent();
			//初始化图表
			initTable();
		}
		//初始化图表
		function initTable() {
			// 基于准备好的dom，初始化echarts实例
			var myChart = echarts.init(document.getElementById('main'));

			// 指定图表的配置项和数据
			var option = {

				series: [{
					name: '访问来源',
					type: 'pie',
					radius: ['40%', '55%'],

					data: [{
							value: 335,
							name: '直达'
						},
						{
							value: 310,
							name: '邮件营销'
						},
						{
							value: 234,
							name: '联盟广告'
						},
						{
							value: 135,
							name: '视频广告'
						},
						{
							value: 1048,
							name: '百度'
						},
						{
							value: 251,
							name: '谷歌'
						},
						{
							value: 147,
							name: '必应'
						},
						{
							value: 102,
							name: '其他'
						}
					]
				}]
			};

			// 使用刚指定的配置项和数据显示图表。
			myChart.setOption(option);
		}
		//初始化滚动
		function loadScroll() {
			mui('.mui-scroll-wrapper').scroll({
				deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
			});
		}

		var picker = null;
		var dtPicker = null;
		curYear = new Date().getFullYear();
		curMonth = new Date().getMonth() + 1;
		_selectDate = dom('.select-date');
		status = 'month';
		//初始化时间
		function initDate() {
			//初始选择年月
			picker = new mui.PopPicker();
			picker.setData([{
				value: 'month',
				text: '月'
			}, {
				value: 'year',
				text: '年'
			}]);
			//初始化选择时间
			dtPicker = new mui.DtPicker({
				type: 'month'
			});

			_selectDate.innerHTML = curYear + '-' + curMonth;

		}

		//添加点击事件
		function addEvent() {
			var _monthWrap=dom('.month-wrap'),
				_yearMonth=dom('.year-wrap')
			//点击年月
			dom('.select-type').addEventListener('tap', function() {
				var that = this;
				picker.show(function(selectItems) {
					that.innerHTML = selectItems[0].text;
					console.log(selectItems[0].text); //年  月
					console.log(selectItems[0].value); //month  year
					status = selectItems[0].value;
					if (status === 'month') {
						_selectDate.innerHTML = curYear + '-' + curMonth;
						dom('h5[data-id="title-m"]').style.display = 'inline-block';
						dom('div[data-id="picker-m"]').style.display = 'block';
						dom('h5[data-id="title-y"]').style.width = '50%';
						dom('div[data-id="picker-y"]').style.width = '50%';
						_monthWrap.style.display='block';
						_yearMonth.style.display='none';

					} else {
						_selectDate.innerHTML = curYear;
						dom('h5[data-id="title-m"]').style.display = 'none';
						dom('div[data-id="picker-m"]').style.display = 'none';
						dom('h5[data-id="title-y"]').style.width = '100%';
						dom('div[data-id="picker-y"]').style.width = '100%';
						_monthWrap.style.display='none';
						_yearMonth.style.display='block';

					}
				})
			})

			//点击时间
			dom('.select-date').addEventListener('tap', function() {
				dtPicker.show((function(selectItems) {
					console.log(selectItems); //{text: "2016",value: 2016} 
					console.log(selectItems.m); //{text: "05",value: "05"} 	
					if (status === 'month') {
						_selectDate.innerHTML = selectItems.value;
					} else {
						_selectDate.innerHTML = selectItems.y.text;
					}
				}))
			})

			//打开侧边栏
			dom('.open-aside').addEventListener('tap', function() {
				mui('.mui-off-canvas-wrap').offCanvas('show')
			})
			//关闭侧边栏
			dom('.close-aside').addEventListener('tap', function() {
				mui('.mui-off-canvas-wrap').offCanvas('close')
			})

			var _billWrap = dom('.bill-wrap'),
				_tableWrap = dom('.table-wrap'),
				_tabItems = Array.from(dom('.tab-list').querySelectorAll('span'));
			//点击tab-list
			mui('.tab-list').on('tap', 'span', function() {
				var id = this.getAttribute('data-id');
				if (id == 0) {
					_billWrap.style.display = 'block';
					_tableWrap.style.display = 'none'
				} else {
					_billWrap.style.display = 'none';
					_tableWrap.style.display = 'block'
				}
				for (var i = 0; i < _tabItems.length; i++) {
					_tabItems[i].classList.remove('active')
				}
				this.classList.add('active')
			})
			dom('.go-bill').addEventListener('tap', function(){
				location.href='../../page/add-bill.html'
			})
		}
		init()

	})
})
