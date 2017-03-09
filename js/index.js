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
// var swipeListHammer = new Hammer($("#swipe-list")[0]);
// var header = $(".header-list");
// var headerList = $(".header-list li").hammer();
// var footerList = $(".foot span");
// var banner = $("#swipe-list");
// var currentBannerIndex = 0; // 记录当前显示的那个tab

// // 点击滑动
// headerList.on("tap", function(){
//     var index = $(this).index();

//     banner.animate({marginLeft: -(8.53333 * index) + "rem" }, 500);

//     footerList.removeClass("active").eq(index).addClass("active");

//     headerList.removeClass("active").eq(index).addClass("active");

//     if([2,3,4].indexOf(index) >= 0){
//         header.animate({marginLeft: -(1.46667 * (index - 1)) + "rem"});
//     }
//     currentBannerIndex = index;
// });
// // ←滑 banner向左走 margin-left 减小
// swipeListHammer.on("swipeleft", function(e){
//     // 最后一张 不可再右滑 所以是<5
//     if(currentBannerIndex < 5){
//         banner.animate({marginLeft: -(8.53333 * (currentBannerIndex + 1)) + "rem" }, 500);
//         // foot
//         footerList.removeClass("active").eq(currentBannerIndex + 1).addClass("active");
//         // header滑动
//         headerList.removeClass("active").eq(currentBannerIndex + 1).addClass("active");

//         if([1,2,3].indexOf(currentBannerIndex) >= 0){
//             header.animate({marginLeft: -(1.46667 * currentBannerIndex) + "rem"});
//         }
//         // 索引增加
//         currentBannerIndex++;
//     }
// });

// // 右滑 banner向右走 margin-left 增大
// swipeListHammer.on("swiperight", function(e){
//     if(currentBannerIndex > 0){
//         banner.animate({marginLeft: -(8.53333 * (currentBannerIndex - 1)) + "rem" }, 500);
//         // foot
//         footerList.removeClass("active").eq(currentBannerIndex - 1).addClass("active");
//         // header滑动
//         headerList.removeClass("active").eq(currentBannerIndex - 1).addClass("active");

//         if([4,3,2].indexOf(currentBannerIndex) >= 0){
//             header.animate({marginLeft: -(1.46667 * (currentBannerIndex - 2)) + "rem"});
//         }
//         currentBannerIndex--;
//     }
// });
// step 2 完成

// step 2 中为了保存数据 减少查询DOM次数 使用了几个全局变量
// 这样的话 污染全局变量 变量挂载在window对象上 很容易被人直接修改 这显然是不好的
// 解决办法：改变变量的scope 立即执行函数/使用闭包

// step 3 立即执行函数/使用闭包
// 立即执行函数
// (function () {
//     var swipeListHammer = new Hammer($("#swipe-list")[0]);
//     var header = $(".header-list");
//     var headerList = $(".header-list li").hammer();
//     var footerList = $(".foot span");
//     var banner = $("#swipe-list");
//     var currentBannerIndex = 0; // 记录当前显示的那个tab

//     // 点击滑动
//     headerList.on("tap", function(){
//         var index = $(this).index();

//         banner.animate({marginLeft: -(8.53333 * index) + "rem" }, 500);

//         footerList.removeClass("active").eq(index).addClass("active");

//         headerList.removeClass("active").eq(index).addClass("active");

//         if([2,3,4].indexOf(index) >= 0){
//             header.animate({marginLeft: -(1.46667 * (index - 1)) + "rem"});
//         }
//         currentBannerIndex = index;
//     });
//     // ←滑 banner向左走 margin-left 减小
//     swipeListHammer.on("swipeleft", function(e){
//         // 最后一张 不可再右滑 所以是<5
//         if(currentBannerIndex < 5){
//             banner.animate({marginLeft: -(8.53333 * (currentBannerIndex + 1)) + "rem" }, 500);
//             // foot
//             footerList.removeClass("active").eq(currentBannerIndex + 1).addClass("active");
//             // header滑动
//             headerList.removeClass("active").eq(currentBannerIndex + 1).addClass("active");

//             if([1,2,3].indexOf(currentBannerIndex) >= 0){
//                 header.animate({marginLeft: -(1.46667 * currentBannerIndex) + "rem"});
//             }
//             // 索引增加
//             currentBannerIndex++;
//         }
//     });

//     // 右滑 banner向右走 margin-left 增大
//     swipeListHammer.on("swiperight", function(e){
//         if(currentBannerIndex > 0){
//             banner.animate({marginLeft: -(8.53333 * (currentBannerIndex - 1)) + "rem" }, 500);
//             // foot
//             footerList.removeClass("active").eq(currentBannerIndex - 1).addClass("active");
//             // header滑动
//             headerList.removeClass("active").eq(currentBannerIndex - 1).addClass("active");

//             if([4,3,2].indexOf(currentBannerIndex) >= 0){
//                 header.animate({marginLeft: -(1.46667 * (currentBannerIndex - 2)) + "rem"});
//             }
//             currentBannerIndex--;
//         }
//     });
// })();

// 闭包
// var swipeClosure = (function () {
//     var swipeListHammer = new Hammer($("#swipe-list")[0]);
//     var header = $(".header-list");
//     var headerList = $(".header-list li").hammer();
//     var footerList = $(".foot span");
//     var banner = $("#swipe-list");
//     var currentBannerIndex = 0; // 记录当前显示的那个tab

//     return function(){
//         // 点击滑动
//         headerList.on("tap", function(){
//             var index = $(this).index();

//             banner.animate({marginLeft: -(8.53333 * index) + "rem" }, 500);

//             footerList.removeClass("active").eq(index).addClass("active");

//             headerList.removeClass("active").eq(index).addClass("active");

//             if([2,3,4].indexOf(index) >= 0){
//                 header.animate({marginLeft: -(1.46667 * (index - 1)) + "rem"});
//             }
//             currentBannerIndex = index;
//         });
//         // ←滑 banner向左走 margin-left 减小
//         swipeListHammer.on("swipeleft", function(e){
//             // 最后一张 不可再右滑 所以是<5
//             if(currentBannerIndex < 5){
//                 banner.animate({marginLeft: -(8.53333 * (currentBannerIndex + 1)) + "rem" }, 500);
//                 // foot
//                 footerList.removeClass("active").eq(currentBannerIndex + 1).addClass("active");
//                 // header滑动
//                 headerList.removeClass("active").eq(currentBannerIndex + 1).addClass("active");

//                 if([1,2,3].indexOf(currentBannerIndex) >= 0){
//                     header.animate({marginLeft: -(1.46667 * currentBannerIndex) + "rem"});
//                 }
//                 // 索引增加
//                 currentBannerIndex++;
//             }
//         });

//         // 右滑 banner向右走 margin-left 增大
//         swipeListHammer.on("swiperight", function(e){
//             if(currentBannerIndex > 0){
//                 banner.animate({marginLeft: -(8.53333 * (currentBannerIndex - 1)) + "rem" }, 500);
//                 // foot
//                 footerList.removeClass("active").eq(currentBannerIndex - 1).addClass("active");
//                 // header滑动
//                 headerList.removeClass("active").eq(currentBannerIndex - 1).addClass("active");

//                 if([4,3,2].indexOf(currentBannerIndex) >= 0){
//                     header.animate({marginLeft: -(1.46667 * (currentBannerIndex - 2)) + "rem"});
//                 }
//                 currentBannerIndex--;
//             }
//         });
//     }
// })();
// swipeClosure();

// 推荐使用闭包 因为闭包相对于立即执行函数更可控 不需要的时候 可以删除等
// step 3 完成

// 需求又改了 这次用户觉得上面的header应该拖动 但是不能拖动 要加上
// 这次需要使用拖拽功能
// step 4 增加header的拖拽

// var swipeClosure = (function () {
//     var swipeListHammer = new Hammer($("#swipe-list")[0]);
//     var header = $(".header-list");
//     var pinchHammer = new Hammer(header[0]);
//     var headerList = $(".header-list li").hammer();
//     var footerList = $(".foot span");
//     var banner = $("#swipe-list");
//     var currentBannerIndex = 0; // 记录当前显示的那个tab
//     var rem = parseInt($("html").css("fontSize"));

//     return function(){
//         // 点击滑动
//         headerList.on("tap", function(){
//             var index = $(this).index();

//             banner.animate({marginLeft: -(8.53333 * index) + "rem" }, 500);

//             footerList.removeClass("active").eq(index).addClass("active");

//             headerList.removeClass("active").eq(index).addClass("active");

//             if([2,3,4].indexOf(index) >= 0){
//                 header.animate({marginLeft: -(1.46667 * (index - 1)) + "rem"});
//             }
//             currentBannerIndex = index;
//         });
//         // ←滑 banner向左走 margin-left 减小
//         swipeListHammer.on("swipeleft", function(e){
//             // 最后一张 不可再右滑 所以是<5
//             if(currentBannerIndex < 5){
//                 banner.animate({marginLeft: -(8.53333 * (currentBannerIndex + 1)) + "rem" }, 500);
//                 // foot
//                 footerList.removeClass("active").eq(currentBannerIndex + 1).addClass("active");
//                 // header滑动
//                 headerList.removeClass("active").eq(currentBannerIndex + 1).addClass("active");

//                 if([1,2,3].indexOf(currentBannerIndex) >= 0){
//                     header.animate({marginLeft: -(1.46667 * currentBannerIndex) + "rem"});
//                 }
//                 // 索引增加
//                 currentBannerIndex++;
//             }
//         });

//         // 右滑 banner向右走 margin-left 增大
//         swipeListHammer.on("swiperight", function(e){
//             if(currentBannerIndex > 0){
//                 banner.animate({marginLeft: -(8.53333 * (currentBannerIndex - 1)) + "rem" }, 500);
//                 // foot
//                 footerList.removeClass("active").eq(currentBannerIndex - 1).addClass("active");
//                 // header滑动
//                 headerList.removeClass("active").eq(currentBannerIndex - 1).addClass("active");

//                 if([4,3,2].indexOf(currentBannerIndex) >= 0){
//                     header.animate({marginLeft: -(1.46667 * (currentBannerIndex - 2)) + "rem"});
//                 }
//                 currentBannerIndex--;
//             }
//         });

//         // 滑动header
//         pinchHammer.on("pan", function (e) {
//             // e.deltaX就是偏移量
//             var current = parseInt(header.css("marginLeft"));
//             // 跟当前做差
//             var result = current + e.deltaX / 10;

//             // px2rem ！！！
//             result = result / rem;

//             // 上下限制 左右拉倒最大值就不能在拉了
//             if(result <= -5.1){
//                 result = -5.1;
//             } else if (result >= 0) {
//                 result = 0;
//             }

//             header.css("marginLeft", result + "rem");
//         });
//     }
// })();
// swipeClosure();

// step 4 完成

// 你以为这就完成了吗 no 要做一条有信仰的咸鱼
// 这么生硬的效果显然不能令人满意 看看苹果针对这种极限问题怎么处理的
// 苹果设备上页面针对到上限或者下线的时候 并不是不能拉 而是越来越难 最后松手的时候 回到极限
// 这种实现方法也很简单 就是类似北京地铁每个月消费满100 之后消费8折 满150 5折一个道理 减少加速度

// step 5 增加松手 弹性操作

var swipeClosure = (function () {
    var swipeListHammer = new Hammer($("#swipe-list")[0]);
    var header = $(".header-list");
    var pinchHammer = new Hammer(header[0]);
    var headerList = $(".header-list li").hammer();
    var footerList = $(".foot span");
    var banner = $("#swipe-list");
    var currentBannerIndex = 0; // 记录当前显示的那个tab
    var rem = parseInt($("html").css("fontSize"));

    return function(){
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

        // 滑动header
        pinchHammer.on("pan", function (e) {
            // e.deltaX就是偏移量
            var current = parseInt(header.css("marginLeft"));
            // 跟当前做差
            var result = current + e.deltaX / 10;

            // px2rem ！！！
            result = result / rem;

            // 伸缩效果 极限值是 0 和 -5.1 
            // 缩放范围是 0.6 这些是试出来的 合理即可
            if(result <= -5.7){
                result = (result + 5.7) / 2 - 5.7;
            }

            if(result >= 0.6){
                result = (result - 0.6) / 2 + 0.6;
            }

            header.css("marginLeft", result + "rem");
        });

        pinchHammer.on("panend", function (e) {
            var current = parseFloat(header.css("marginLeft"));

            // px2rem
            current = current / rem;

            // 上下限制
            if(current <= -5.1){
                current = -5.1;
            } else if (current >= 0) {
                current = 0;
            }

            header.animate({marginLeft: current + "rem"}, 300);
        });
    }
})();
swipeClosure();

// step 5 完成


