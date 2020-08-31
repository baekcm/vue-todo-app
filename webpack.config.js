//--- vue-loader plugin 을 불러온다.
const { VueLoaderPlugin } = require('vue-loader');

//--- 개발과 배포용 컴파일 환경 분리를 위해 기존 설정 값을
//module.exports = {
//--- config 변수에 담고,
let config = {
	//--- webpack 이 동작할 base directory 를 지정해준다.
	//--- __dirname 은 파일이 있는 위치이니, Project root 가 된다.
	context : __dirname,
	//--- 개발할 코드의 시작점을 지정해준다.
	entry : './src/app.js',
	//--- 결과물을 내보낼 위치를 지정한다.
	output : {
		//--- Project root 의 js directory 안에 
		path : path.resolve(__dirname, 'js'),
		//--- 'app.js' 라는 이름으로 만들라고 설정한다.
		filename : 'app.js'
    },
    plugins : [
        //--- plugin 을 추가해준다.
        new VueLoaderPlugin()
    ],
	module : {
        rules : [
            {
                //--- .vue 확장자를 가진 파일들에게
                test : /\.vue$/,
                //--- exclude 경로는 제외하도록 설정.
                exclude : /node_modules/,
                //--- vue-loader 를 적용하도록 설정한다.
                use : 'vue-loader'
            }
        ]
	}
}

module.exports = (env, argv) => {
    let vue = 'vue/dist/vue.js';

    if(argv.mode === 'production') {
        vue = 'vue/dist/vue.min.js';
    }

    config.resolve = {
        alias : {
            vue 
        }
    }

    return config;
}