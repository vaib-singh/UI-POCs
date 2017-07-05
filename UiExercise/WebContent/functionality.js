$(document).ready(function(){

    var dataReturnedFromAjax = [
      {
        date:"20th December", //date filter to convert from 20-12-2107
        spots: 500,
        clients: 25,
        channels: 4,
        cities: 24,
        campaigns: 20,
        brands: 200,
        thumbnails: [
          {
            imagepath: "blake.jpg",
            line1:"07:14 PM, Lux Toilet Soap",
            line2: "Hindustan Unilever Limited",
            line3: "HUL Lux, soap",
            line4: "Zee TV",
            line5:"Punjab",
          },
          {
            imagepath: "",
            line1:"07:14 PM, second",
            line2: "Hindustan Unilever Limited",
            line3: "HUL Lux, soap",
            line4: "Zee TV",
            line5:"Punjab",
          },
          {
            imagepath: "",
            line1:"07:14 PM, third",
            line2: "Hindustan Unilever Limited",
            line3: "HUL Lux, soap",
            line4: "Zee TV",
            line5:"Punjab",
          }
        ]
      },
      {
        date:"19th December",
        spots: 5600,
        clients: 5,
        channels: 4,
        cities: 54,
        campaigns: 60,
        brands: 192,
        thumbnails: [
          {
            imagepath: "",
            line1:"07:14 PM, Lux Toilet Soap",
            line2: "Hindustan Unilever Limited",
            line3: "HUL Lux, soap",
            line4: "Zee TV",
            line5:"Punjab",
          },
          {
            imagepath: "",
            line1:"07:14 PM, Lux Toilet Soap",
            line2: "Hindustan Unilever Limited",
            line3: "HUL Lux, soap",
            line4: "Zee TV",
            line5:"Punjab",
          },
          {
            imagepath: "",
            line1:"07:14 PM, Lux Toilet Soap",
            line2: "Hindustan Unilever Limited",
            line3: "HUL Lux, soap",
            line4: "Zee TV",
            line5:"Punjab",
          }
        ]
      }
    ];



    for (var i = 0; i < dataReturnedFromAjax.length; i++) {
      var accordion ="<h3>"+dataReturnedFromAjax[i].date+"</h3><div><p><div class='details'></div><div class='thumbnail-list' id = 'thumbnail"+i+"'></div></p></div>"
      $('#videos').append(accordion);
      var details = dataReturnedFromAjax[i].spots + " Spots," + dataReturnedFromAjax[i].clients + " Clients," + dataReturnedFromAjax[i].channels + " Cities," + dataReturnedFromAjax[i].campaigns + " Campaigns," + dataReturnedFromAjax[i].brands +" Brands";
      $('.details').html(details);
      // $('.thumbnail-list').html(list);
      for (var j = 0; j < dataReturnedFromAjax[i].thumbnails.length; j++) {
        var thumbnaildetails = "<div>"+dataReturnedFromAjax[i].thumbnails[j].line1+"</div><div>"+dataReturnedFromAjax[i].thumbnails[j].line2+"</div><div>"+dataReturnedFromAjax[i].thumbnails[j].line3+"</div><div>"+dataReturnedFromAjax[i].thumbnails[j].line4+"</div><div>"+dataReturnedFromAjax[i].thumbnails[j].line5+"</div>"
        var list = "<div class = 'thumbnail'><div class = 'thumbnail-image'><img src="+dataReturnedFromAjax[i].thumbnails[j].imagepath+"></div><div class = 'thumbnail-details'>"+ thumbnaildetails+"</div></div>";
        $('#thumbnail'+i).append(list);
      }
    }

    $( "#accordion" ).accordion({ collapsible: true });
});
