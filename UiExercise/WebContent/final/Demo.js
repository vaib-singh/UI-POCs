$(document).ready(function(){
			var data;
			var dates  = ["20th December", "19th December", "18th December"];
            $.ajax({
            	  type: "GET",
            	  url: "https://amagi.herokuapp.com/ui-test/api/v1/spots",
            	  aysnc: false,
            	  dataType: 'json',
            	  success: function (data) {
            		  populateGrids(data, dates);
            	  }
            	});
});

function populateGrids(data, dates) {
	var html = '';
	for(var j = 0; j< dates.length; j++){
		var videos ="<h3>"+dates[j]+"</h3><div><p><div class='details'></div><div class='thumbnail-list' id = 'thumbnail"+j+"'></div></p></div>"
		$('#videos').append(videos);
		var details = 500 + " Spots, " + 25 + " Clients," + 24 + " Cities, " + 20 + " Campaigns, " + 200 +" Brands";
	    $('.details').html(details);
		for (var i = j*4; i < (j*4)+4; i++) {
	      var date = convertDate(data[i].aired_at)
	      // $('.thumbnail-list').html(list);
	        var thumbnaildetails = "<div>"+date+"</div><div><span class='glyphicon glyphicon-asterisk'></span>"+" "
	        		+data[i].client_name+"</div><div><span class='glyphicon glyphicon-glass'></span>"+" "
	        		+data[i].campaign_name+"</div><div><span class='glyphicon glyphicon-film'></span>"+" "
	        		+data[i].channel_name+"</div><div><span class='glyphicon glyphicon-globe'>"+data[i].city_name+"</div>"
	        var list = "<div class = 'thumbnail'  data-toggle='modal' data-target='#videoModal'><div class = 'thumbnail-image'><img src="+data[i].thumbnail_path+" class='col-md-12 image'" +
	        		"name="+data[i].video_path+">"
	        	+"</div><div class = 'thumbnail-details'>"+ thumbnaildetails+"</div></div>";
	        $('#thumbnail'+j).append(list);
	    }
	}
	    $( "#videos" ).accordion({ collapsible: true });
}

function convertDate(date) {
	var utcSeconds = Date.parse(date);
	var d = new Date(0);
	d.setUTCSeconds(utcSeconds);
	var hours = d.getHours();
	var minutes = d.getMinutes();
	var ampm = hours >= 12 ? 'pm' : 'am';
	hours = hours % 12;
	hours = hours ? hours : 12;
	minutes = minutes < 10 ? '0'+minutes : minutes;
	var strTime = hours + ':' + minutes + ' ' + ampm;
	return strTime;
}

function storeHistory(event){
	if(event.key == "Enter"){
		var history = localStorage.getItem("history");
		if(undefined == history) {
			history = [];
		} else {
			history = JSON.parse(history);
		}
	    var keyWord = $("#searchBox").val();
	   history.push(keyWord);
	   localStorage.setItem("history", JSON.stringify(history));
    }
}

$(document).on('keyup','#searchBox',function(event){
    storeHistory(event)
});

$(document).on('click','#searchBox',function(event){
	var history = JSON.parse(localStorage.getItem("history"));
	$("#history").empty();
	for (var i = 0; i < history.length; i++) {
	    $('#history').append("<option value=" + history[i] + ">");
	}
});

$(document).ajaxStart(function(){
    $("#wait").css("display", "block");
});
$(document).ajaxComplete(function(){
    $("#wait").css("display", "none");
});

$(document).on('click','img',function(){
	var videoLink = $(this).attr('name');
	var vid = document.getElementById("modalPlayback");
	vid.src = videoLink;
	vid.load();
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
