function ticket(ageGroup, discounts, amount) {
  this.showings = [];
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
    var ageDiscount = parseInt($("#ageGroup").val());//aquiring input for next 3 lines
    var demographicDiscount = parseInt($("#discount").val());
    var ticketCount = parseInt($("#ticket-count").val());

    var newTicket = new ticket(ageDiscount, demographicDiscount, ticketCount);// applying input


    $(".movies").each(function(){
      if($(this).children("label").children("input:checkbox:checked").val()){

       var title = $(this).children("label").children("input:checkbox:checked").val();
       var time = parseInt($(this).children("div").children("label").children("input:checked").val());
       var newRelease = $(this).hasClass("new");

       var newShowing = new showing(title, newRelease,time);
       newTicket.showings.push(newShowing);
     }
    })
    


    // var movieTitles = [];
    // $("input:checkbox:checked").each(function(){
    //
    //   movieTitles.push($(this).val());
    // });

    // var showtime = []
    // $("input:radio[name=showtime]:checked").each(function(){
    //
    //   showtime.push($(this).val());
    // });




  })
})
