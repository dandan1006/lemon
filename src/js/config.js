require.config({
	baseUrl:'/js/',
	paths:{
		mui:'./libs/mui.min',
		picker:'./libs/mui.picker.min',
		poppicker:'./libs/mui.poppicker',
		dom:'./common/dom',
		dtpicker:'./libs/mui.dtpicker',
		echarts:'https://cdnjs.cloudflare.com/ajax/libs/echarts/4.1.0/echarts'
	},
	shim:{
		picker:{
			deps:['mui']
		},
		poppicker:{
			deps:['mui']
		}
	}
})