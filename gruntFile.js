
//包装函数
module.exports=function(grunt){

 //任务配置
grunt.initConfig({   

    //获取package.json 的 信息：
    pkg:grunt.file.readJSON("package.json"),
    uglify:{
            options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'//添加banner
                    },
            buildall: {
                //任务三：按原文件结构压缩js文件夹内所有JS文件
                    files:[{
                        expand:true,
                        cwd:'src/js',//js目录下
                        src:'**/*.js',//所有js文件
                        dest: 'build/js',//输出到此目录下
                        ext:'.min.js'//后缀名以min.js命名：
                        }]
                },  
            
        },
    jshint:{
        build:['gruntFile.js','js/*.js'],
        options:{
            jshintrc:'a.jshintrc'
        }
    },
    cssmin:{
        options:{
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'//添加banner
                },
        buildall: {
                //任务三：按原文件结构压缩css文件夹内所有css文件
                    files:[{
                        expand:true,// 启用动态扩展
                        cwd:'src/css',//css目录下
                        src:'**/*.css',//所有css文件
                        dest: 'build/css',//输出到此目录下
                        ext:'.min.css'//后缀名以min.css命名：
                        }]
                },
    },
    csslint:{
        options:{
              csslintrc:'css.csslint'
        },
        build:['src/css/*.css'],//检查文件目录：
         
          

    },
    watch:{
        build:{
            files:['src/js/*.js','src/css/*.css','src/*.html','src/img/.*'],//要监控的文件目录：
            tasks:['jshint','csslint'],//一旦变化，要执行的任务：
            options:{spawn:false}
        }
    },



    

    
});
   

// 默认任务
grunt.registerTask('default',[] );
// 加载提供"uglify"任务的插件
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-csslint');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.registerTask('default', ['csslint','cssmin:buildall','jshint','uglify:buildall','watch']);
};
