// step 1 完成点击tap切换
// 需求点击3，4，5tab时 header跟着banner一起动 类似今日头条等新闻app的tab切换
var header = $(".header-list");
var headerList = $(".header-list li").hammer();

// 页面中使用了rem布局 是为了兼容各个尺寸的屏幕 所以这里使用rem代替px布局
headerList.on("tap", function(){
    var index = $(this).index();

    $("#swipe-list").animate({marginLeft: -(8.53333 * index) + "rem" }, 500);

    $(".foot span").removeClass("active").eq(index).addClass("active");

    headerList.removeClass("active").eq(index).addClass("active");

    if([2,3,4].indexOf(index) >= 0){
        header.animate({marginLeft: -(1.46667 * (index - 1)) + "rem"});
    }
});

// step 1 完成
