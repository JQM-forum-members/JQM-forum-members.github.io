$(function() {
  $("body").ul("JQM-Forum")
    .ul("jtara")
    .ul("Palestinian")
    .ul("JakeCigar")

})
$.fn.ul = function(user) {
  var there = this
  var heading = $("<h2>" + user.link("http://plnkr.co/users/" + user) + "</h2>")
  var url = "http://api.plnkr.co/users/" + user + "/plunks"
  heading.appendTo("body")
  $.getJSON(url, function(data) {
    var ul = "<ol>"
    $.each(data, function(i, plunk) {
      // console.log(plunk)
      var url = plunk.url.replace(/api/, "embed").replace("plunks/", "") + "/preview"
      ul += "<li>" + plunk.description.link(url) + "</li>"
    })
    $(ul).insertAfter(heading)
  })
  return there
}