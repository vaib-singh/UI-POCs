$(document).ready(function(){
  $("#task1").addClass("active");
  navigation('task1');
  $('#' + $(".container")[0].id).show();
  $('.playback-space div.middle').hide();
  $(".nav-link").click(function(e){
    navigation(e.currentTarget.id);
  });
  function navigation(activeLink){
    var navlinks = $(".nav-link");
    var containers = $(".container");
    var index = 0;
    for (var i = 0; i < navlinks.length-1; i++) {
      $('#' + navlinks[i].id).removeClass('active');
      $(".dropdown-toggle").removeClass('active');
      $('#' + containers[i].id).hide();
      if(navlinks[i].id === activeLink && i!=3){
        $("#"+activeLink).addClass('active');
        $('#' + containers[i].id).show();
      } else if(navlinks[i].id === activeLink && i==3){
        $(".dropdown-toggle").addClass('active');
        $('#' + containers[i].id).show();
      }
    }
  }
  if(sessionStorage.getItem('activeTab') === 'snapshots' || sessionStorage.getItem('activeTab')=== undefined){
    setTab('snapshots','videos');
  } else if(sessionStorage.getItem('activeTab') === 'videos'){
    setTab('videos', 'snapshots');
  }
  $(".snapshotsTab, .snapshot-link").click(function(){
    setTab('snapshots','videos');
  });
  $(".videosTab, .video-link").click(function(){
    setTab('videos', 'snapshots');
  });

  function setTab(tabShow, tabHide){
      $("."+ tabShow).show();
      $("."+ tabShow + "Tab").addClass('active');
      sessionStorage.setItem('activeTab', tabShow);
      $("." + tabHide).hide();
      $("." + tabHide + "Tab").removeClass('active');
  }

  $(".thumbnail").click(function(){
    // alert($(this).attr('name'));
    for (var i = 0; i < videoMappings.length; i++) {
      if($(this).attr('name') === videoMappings[i].keyword){
        var vid = document.getElementById("modalPlayback");
        vid.src = videoMappings[i].path;
        vid.load();
        $('.modal-title').text(videoMappings[i].videoTitle);
      }
    }
  });
  $(".close-modal, .close").click(function(){
    var vid = document.getElementById("modalPlayback");
    vid.src = '';
    vid.load();
  });

  
  $("#modalPlayback").click(function(){
    if(this.paused){
      this.play();
      $('.playback-space>div.middle>span').removeClass("glyphicon-pause").addClass("glyphicon-play");
    }else{
      this.pause();
      $('.playback-space>div.middle>span').removeClass("glyphicon-playe").addClass("glyphicon-pause");

    }
    $('.playback-space div.middle').show();
    setTimeout(function(){
      $('.playback-space div.middle').hide();
    }, 300);
  });
  var videoMappings = [
  {
    videoTitle:"The Debut of the Cavalier",
    path:"media/highlights.MP4",
    keyword: "lebron"
  }, {
    videoTitle:"Its not about the Game",
    path:"media/inspire.MP4",
    keyword: "inspire"
  }, {
    videoTitle:"Buzzerbeater!!!",
    path:"media/last.MP4",
    keyword: "last"
  }];


});
