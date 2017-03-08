// step 1 完成点击tap切换
// 需求点击3，4，5tab时 header跟着banner一起动 类似今日头条等新闻app的tab切换
// var header = $(".header-list");
// var headerList = $(".header-list li").hammer();

// // 页面中使用了rem布局 是为了兼容各个尺寸的屏幕 所以这里使用rem代替px布局
// headerList.on("tap", function(){
//     var index = $(this).index();

//     $("#swipe-list").animate({marginLeft: -(8.53333 * index) + "rem" }, 500);

//     $(".foot span").removeClass("active").eq(index).addClass("active");

//     headerList.removeClass("active").eq(index).addClass("active");

//     if([2,3,4].indexOf(index) >= 0){
//         header.animate({marginLeft: -(1.46667 * (index - 1)) + "rem"});
//     }
// });

// step 1 完成

// step 2 增加左右滑动 swipe切换
// 需求 对着banner 左右滑动 完成切换 不循环切换
// 使用hammer的 滑动swipeleft swiperight函数完成
var swipeListHammer = new Hammer($("#swipe-list")[0]);
var header = $(".header-list");
var headerList = $(".header-list li").hammer();
var footerList = $(".foot span");
var banner = $("#swipe-list");
var currentBannerIndex = 0; // 记录当前显示的那个tab

// 点击滑动
headerList.on("tap", function(){
    var index = $(this).index();

    banner.animate({marginLeft: -(8.53333 * index) + "rem" }, 500);

    footerList.removeClass("active").eq(index).addClass("active");

    headerList.removeClass("active").eq(index).addClass("active");

    if([2,3,4].indexOf(index) >= 0){
        header.animate({marginLeft: -(1.46667 * (index - 1)) + "rem"});
    }
    currentBannerIndex = index;
});
// ←滑 banner向左走 margin-left 减小
swipeListHammer.on("swipeleft", function(e){
    // 最后一张 不可再右滑 所以是<5
    if(currentBannerIndex < 5){
        banner.animate({marginLeft: -(8.53333 * (currentBannerIndex + 1)) + "rem" }, 500);
        // foot
        footerList.removeClass("active").eq(currentBannerIndex + 1).addClass("active");
        // header滑动
        headerList.removeClass("active").eq(currentBannerIndex + 1).addClass("active");

        if([1,2,3].indexOf(currentBannerIndex) >= 0){
            header.animate({marginLeft: -(1.46667 * currentBannerIndex) + "rem"});
        }
        // 索引增加
        currentBannerIndex++;
    }
});

// 右滑 banner向右走 margin-left 增大
swipeListHammer.on("swiperight", function(e){
    if(currentBannerIndex > 0){
        banner.animate({marginLeft: -(8.53333 * (currentBannerIndex - 1)) + "rem" }, 500);
        // foot
        footerList.removeClass("active").eq(currentBannerIndex - 1).addClass("active");
        // header滑动
        headerList.removeClass("active").eq(currentBannerIndex - 1).addClass("active");

        if([4,3,2].indexOf(currentBannerIndex) >= 0){
            header.animate({marginLeft: -(1.46667 * (currentBannerIndex - 2)) + "rem"});
        }
        currentBannerIndex--;
    }
});
// step 2 完成
