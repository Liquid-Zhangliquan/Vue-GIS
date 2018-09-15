export default {
    install(Vue) {
        Vue.prototype.testFun = function () {
            alert(1);
        },
        /*
        功能：框架两个div的显示隐藏;
        参数：lr分别是两个div的id;
        active是点击后的样式
        */ 
        Vue.prototype.leftNavHidden = function(l,r){
            var l = $('#' + l);
            var r = $('#' + r);
            l.toggleClass('active');
            r.toggleClass('active');
          }
    }
}