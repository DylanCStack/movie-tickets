function ticket(titles, release, showtime, ageGroup, discounts, amount) {
  this.titles = titles;
  this.release = release;
  this.showtime = showtime;
  this.ageGroup = ageGroup;
  this.discounts = discounts;
  this.amount = amount;
}
function showing(titles, release, showtime) {
  this.titles = titles;
  this.release = release;
  this.showtime = showtime;
}



$(document).ready(function() {

  $(".movieTitle").click(function(){
    $(this).siblings().children("label").children("input").prop('disabled',false);
    $(this).siblings().show();
  })


  $("form#movieTickets").submit(function(event) {
    event.preventDefault();
    var movieTitles = [];
    $("input:checkbox:checked").each(function(){

      movieTitles.push($(this).val());
    });
    console.log(movieTitles);
    var showtime = []
    $("input:radio[name=showtime]:checked").each(function(){

      showtime.push($(this).val());
    });
    console.log(showtime);
    var ageDiscount = parseInt($("#ageGroup").val());
    var demographicDiscount = parseInt($("#discount").val());


  })
})
