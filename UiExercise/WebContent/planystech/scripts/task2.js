$(document).ready(function(){
    findWindowSize();
    // $('#image').mousemove(function(e){
    //     $('#coordinates').html('x: ' + e.pageX + ' y : ' + e.pageY);
    // });
    window.onresize = findWindowSize;

    function findWindowSize(){
      var points = [];
      console.log(document.body.clientWidth + ' ' + window.innerWidth);
      if(window.innerWidth > 991){
        console.log("Lg");
        points.push("199,200,40", "199,200,82", "199,200,125", "199,200,165");
        setCoordinates(points);
      } else if(window.innerWidth > 767){
        console.log("Md");
        points.push("172,172,35", "172,172,72", "172,172,108", "172,172,145");
        setCoordinates(points);
      } else if(window.innerWidth > 544){
        console.log("Sm");
        points.push("248,249,50", "248,249,102", "248,249,158", "248,249,210");
        setCoordinates(points);
      } else {
        console.log("Xs");
        var radius = 0;
        var height = parseInt(document.getElementById("image").height), width = document.getElementById("image").width;
        for (var i = 0; i < 4; i++) {
          radius = radius + Math.ceil(height/10)+ 2;
          console.log(radius);
          var coordinates = Math.ceil(width/2)+ ',' + Math.ceil(height/2) + ',' + radius;
          points.push(coordinates);
        }
        console.log(points);
        // points.push("172,172,35", "172,172,72", "172,172,110", "172,172,145");
        setCoordinates(points);
      }
    };

    function setCoordinates(points){
      document.getElementById('orange').coords = points[0];
      document.getElementById('yellow').coords = points[1];
      document.getElementById('red').coords = points [2];
      document.getElementById('blue').coords = points[3];
    }

    // function display(e){
    //   e.preventDefault();
    //   document.getElementById("display").innerHTML = ;
    // }
    $("#yellow, #blue, #red, #orange").on("click", function(e){
      e.preventDefault();
      $("#display").html("You have clicked on the <span class = '"+ e.currentTarget.id +"'>"+ e.currentTarget.id + "</span> ring.");
      $("#display").addClass('well');
      var message = '';
      if(e.currentTarget.id === "orange"){
        message = "<div class = 'inner orange well'> You will either have a very good day or a very bad day or there is a third possibility that you might just experience a mediocre day</div>";
      } else if(e.currentTarget.id === "yellow"){
        message = "<div class = 'inner yellow well'> Your day would be as difficult as it is to read this yellow font over this background</div>";
      } else if(e.currentTarget.id === "red"){
        message = "<div class = 'inner red well'> TODAY is YESTERDAY for TOMORROW - and that isn't as deep as it sounds</div>";
      } else if(e.currentTarget.id === "blue"){
        message = "<div class = 'inner blue well'> Runtime ERROR 404 Fortune Not found: Can't help it some days are really unfortunate</div>";
      }
      $("#display").append(message);
    });
});
