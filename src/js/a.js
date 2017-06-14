//设置localStorage;
var minusSymbol='-';
var maximum=[];
var ls=window.sessionStorage;
var  defaults={
        "version":"1.1",
        "from":'h5',
        "accept_language":"English",
        "types":"get",
        "url":"http://139.224.52.60:38080/",
        //"http://192.168.1.81:48080/systom/"
        /*"http://139.224.52.60:38080/"*/
        // "url":"http://alpha2mobile.appasia.com:10040/",
        // "url":"http://192.168.1.41:8080/mobile/",
        // "url":"http://139.224.52.60:58080/mobile/",
        "dataType":"jsonp",
        "datas":{},
        "debug":false
};
function Datas(options){
    if (options && options.validateFn) {
        var s = options.validateFn();
        if (!s) {
            return;
        }
    }

    if (options.debug) {
        console.log(options);
        console.log(defaults);
    }
    var tempUrl = defaults.url;
    
    tempUrl = tempUrl + options.url;
    
    var opt=$.extend({},defaults,options);
    
    opt.url = tempUrl;
    
    if (defaults.debug) {
        console.log(opt);
    }
    $.ajax({
        url:opt.url,
        type:opt.types,
        async:true,
        dataType:opt.dataType,
        data:opt.datas,
        success:opt.success,
        error:opt.error
    })

};
function getParam(){
    var url = location.search.substr(1);
    
    var obj = {};
    if(!url) return false; 

    var arr = url.split("&");
    
    for(var i = 0,len = arr.length; i<len; i++){
        var params = arr[i].split("=");
    
        obj[params[0]] = decodeURI(params[1]);
    }
    
    return obj;
    
};
function browserRedirect(){
    var browserType=navigator.userAgent.toLowerCase();
    if (browserType.match(/mobile/i)!="mobile") {
        location.href="";//PC地址;
    }else if (browserType.match(/windows/i)!="windows") {
        location.href="";//移动地址;
    }

}

function consoleLog(obj){

   console&&console.log(obj);
};




//echart Y坐标格式化
 
function formats(val){
              
               var ggggg='';
              
                 symbol.push(val);
                 if(symbol[symbol.length-1]==0){
                        ggggg= 0;

                 }else if(numberKind=="负" || numberKind=="零负"){
                     ggggg='-'+test(symbol[symbol.length-1]);
                     
                     
                 }else{

                     ggggg=test(symbol[symbol.length-1]); 
                     
                     
                 }
               
                    return ggggg;
};
       

var numberFormat=[];
var numberKind='';
     

function  compare(){
            
              for( var i=0;i<profit.length;i++){
                   if(profit[i]<0){
                       numberFormat.push('负'); 
                   }else if(profit[i]==0){

                       numberFormat.push('零'); 
                   }else if(profit[i]>0){

                        numberFormat.push('正');
                         
                   }
                    
              }
              
              //全为正数
              if(numberFormat.indexOf('正')>-1 && numberFormat.indexOf('负')==-1 && numberFormat.indexOf('零')==-1){
                   
                             numberKind="正";
                  }else if(numberFormat.indexOf('负')>-1 && numberFormat.indexOf('正')==-1 && numberFormat.indexOf('零')==-1){

                              numberKind="负";
                     }else if(numberFormat.indexOf('零')>-1 && numberFormat.indexOf('正')==-1 && numberFormat.indexOf('负')==-1){

                               numberKind="零";
                      }else if(numberFormat.indexOf('零')>-1 && numberFormat.indexOf('正')>-1 && numberFormat.indexOf('负')>-1){

                               numberKind="零正负";

                       } else if(numberFormat.indexOf('零')==-1 && numberFormat.indexOf('正')>-1 && numberFormat.indexOf('负')>-1){

                                numberKind="正负";
                        }else if(numberFormat.indexOf('零')>-1 && numberFormat.indexOf('正')==-1 && numberFormat.indexOf('负')>-1){

                                 numberKind="零负";

                           }else if(numberFormat.indexOf('零')>-1 && numberFormat.indexOf('正')>-1 && numberFormat.indexOf('负')==-1){
                                  numberKind="零正";

              }

                
                for(var i=0;i<profit.length;i++){
                     if(numberKind=="负"){
                            profit[i]=Math.abs(profit[i]);

                     }else if(numberKind=="零负"){

                             profit[i]=Math.abs(profit[i]);
                     }

                } 


                return profit;   

};



      