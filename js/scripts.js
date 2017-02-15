
$(function(){
  $("form#formInfo").submit(function(){
    event.preventDefault();
    var name = $("#name").val();
    var descrip = $("#descrip").val();
    var date = document.getElementById("date").value;
    var time1 = document.getElementById("time1").value;
    var time2 = document.getElementById("time2").value;
    alert("Thank you for submitting. We now have all your personal data. ");
    $("p.name").text(name);
    $("p.descrip").text(descrip);
    $("p.date").text(date);
    $("p.time1").text(time1);
    $("p.time2").text(time2);
    $(".reprint").show();
  });
});
