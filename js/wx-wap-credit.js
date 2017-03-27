$(function(){

  myScroll = new fz.Scroll('.contact', {
      scrollY: true
  });

  listViewScroll = new fz.Scroll('.list-view', {
      scrollY: true
  });

  tabScroll = new fz.Scroll('#sx-tab-c-1', {
      scrollY: true
  });

  tabScrol2 = new fz.Scroll('#sx-tab-c-2', {
      scrollY: true
  });

  /* 搜索框 */
  $('.sx-searchbar').tap(function(){
      $('.sx-searchbar-wrap').addClass('focus');
      $('.sx-searchbar-input input').focus();
  });
  $('.sx-searchbar-cancel').tap(function(){
      $('.sx-searchbar-wrap').removeClass('focus');
  });

  /* 右侧导航栏 */
  var wordsArray=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','#'];
  var wordlinks='';
  $.each(wordsArray,function(index,dom){
    wordlinks+='<a href="#'+dom+'">'+dom+'</a>';
  })
  $(".sider-box").html(wordlinks);
  
  $(".sider-box").on("tap","a",function(){
    var node=document.querySelector('#'+$(this).text() );
    if(node!==null)
      myScroll.scrollToElement(node);
  })


  /* 选项卡 */
  $(".sx-header .hd").on("tap",'span',function(){
    var self=$(this);
    var index=self.index(); 
    self.addClass("current").siblings().removeClass("current");
    $(".sx-header .hd strong").animate({
      left: self.position().left
    }, 250, 'linear');
    $(".sx-bd .page").eq(index).show().siblings().hide();
  
    myScroll = new fz.Scroll('.contact', {
        scrollY: true
    });

    if($(".sx-bd .page").eq(index).find('.list-view')){

      listViewScroll = new fz.Scroll('.list-view', {
          scrollY: true
      });
    }
    if($(".sx-bd .page").eq(index).find('.sx-tab-c')){
      tabScroll = new fz.Scroll('#sx-tab-c-1', {
          scrollY: true
      });

      tabScrol2 = new fz.Scroll('#sx-tab-c-2', {
          scrollY: true
      });
    }

    $(".sx-tab-hd").on("tap","li",function(){
      var index=$(this).index();
      $(this).addClass("current").siblings().removeClass("current");
      $(".sx-tab-bd").children().eq(index).show().siblings().hide();

      tabScroll = new fz.Scroll('#sx-tab-c-1', {
          scrollY: true
      });

      tabScrol2 = new fz.Scroll('#sx-tab-c-2', {
          scrollY: true
      });

    })

  })

})



$(window).on("load resize",function(){
  //右侧导航链接自动高度
  var listHeight=$(window).height()-$(".sx-header").height()-$(".sx-footer").height()-$(".sx-searchbar-wrap").height();
  $(".sider-box a").height(Math.floor( listHeight/27) );
  //顶部当前选项卡自动触发选中事件
  $(".sx-header .hd span.current").trigger("tap");
})
