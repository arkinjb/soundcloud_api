$(document).ready(function(){

  SC.initialize({
    client_id: "4799eac4167738dfe3c490471858a5d3",
    redirect_uri: "http://soundcloud.com/callback"
  });

  $("input[type=submit]").on("click", function(){
    // console.log("search clicked")
    var search_term = $("#search_term").val()
    // console.log(search_term)
    $(".search_results").empty()

    var url = "https://api.soundcloud.com/tracks?q=" + search_term + "&client_id=4799eac4167738dfe3c490471858a5d3"

    $.getJSON(url, function(response){
      console.log(response)
      for (i = 0; i < 5; i++) {
        var track_url = response[i].uri


        $.getJSON("https://soundcloud.com/oembed?url="+track_url+"", function(object){
          console.log(object)
          $(".search_results").append("<OEmbed class='embedded'>" + object.html + "</OEmbed>")
        })
      }
    });

  })
})
