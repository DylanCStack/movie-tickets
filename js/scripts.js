function ticket(title, release, showtime, ageGroup, discounts, amount) {
  this.title = title;
  this.release = release;
  this.showtime = showtime;
  this.ageGroup = ageGroup;
  this.discounts = discounts;
  this.amount = amount;
}




$(document).ready(function() {
  $("form#movieTickets").submit(function(event) {
    event.preventDefault();
    var showtime = $("input:radio[name=showtime]:checked").val();
    var age = $("#")

  })
})
