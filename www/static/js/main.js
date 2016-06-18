var LIB_PATH = 'lib/';
//var LIB_PATH = 'http://s1.vued.vanthink.cn/';
var JS_PATH = 'static/js/';
var ANGULAR_CTRL_PATH = 'static/js/components/';
var ANGULAR_DIR_PATH = 'static/js/directive/';
var ANGULAR_SER_PATH = 'static/js/service/';

require.config({
    baseUrl: "static/js",
   // urlArgs: App.debug != true? 'bust=' + App.version : 'bust=' + (new Date()).getTime() + Math.random() * 10000,
    paths: {
        'jquery': 'http://s1.vued.vanthink.cn/d59f937c159f/jquery-2.2.1.min',
        'base': 'base',
        'angular': 'http://s1.vued.vanthink.cn/f1906f08fcd2/angular.1.3.2.min',
        'angular-route': 'http://s1.vued.vanthink.cn/angular-route',
        'angularAMD': 'http://s1.vued.vanthink.cn/angularAMD.route.all',
        'ui.bootstrap': 'http://s1.vued.vanthink.cn/f56c808c0d0d/angular.ui.bootstrap.min',
        'validator': LIB_PATH + 'validator.min',
        'core.image.upload':'http://s1.vued.vanthink.cn/0f1a6c5af27d3924a0abfd751ecc1160/jquery.core.image.upload.full.min',
        'ng-progress': 'http://s1.vued.vanthink.cn/ngprogress.min',
        'ng-message':'https://cdnjs.cloudflare.com/ajax/libs/angular-messages/1.3.2/angular-messages.min',
        
    //end lib 
        'base': JS_PATH + 'base',
        'app': 'app'
    },
    shim: { 
        'angularAMD': ['angular'], 
        'angular-route': ['angular'] ,
        'base':{
            "exports": 'Base'
        },
        'ui.bootstrap':['angular'],
        'ng-progress':['angular'],
        'ng-message':['angular'],
        'core.image.upload':['jquery']
        
    },
    deps: ['app']
});







