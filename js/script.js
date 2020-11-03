// initially hide Work Order help contents
$(".toggle1").hide();
$(".toggle2").hide();
$(".toggle3").hide();
$(".toggle4").hide();
$(".toggle5").hide();
$(".toggle6").hide();
$(".toggle7").hide();
$(".toggle8").hide();
$(".toggle9").hide();

// for each step, toggle the help contents when clicked per Epic 5, user story 1
$('#step1').click(function() {
  $(".toggle1").toggle();

// Change the color of the Step/Heading when details are displayed per Epic 5, user story 2 (repeated for all steps)
  var compare = $(".toggle1").is(":visible");
  if (compare) { 
    $("#step1").css("color", "red");
  }  
  else { 
    $("#step1").css("color", "black");
  }
});

$('#step2').click(function() {
  $(".toggle2").toggle();

  var compare = $(".toggle2").is(":visible");
  if (compare) { 
    $("#step2").css("color", "red");
  }  
  else { 
    $("#step2").css("color", "black");
  }
});

$('#step3').click(function() {
  $(".toggle3").toggle();

  var compare = $(".toggle3").is(":visible");
  if (compare) { 
    $("#step3").css("color", "red");
  }  
  else { 
    $("#step3").css("color", "black");
  }
});

$('#step4').click(function() {
  $(".toggle4").toggle();

  var compare = $(".toggle4").is(":visible");
  if (compare) { 
    $("#step4").css("color", "red");
  }  
  else { 
    $("#step4").css("color", "black");
  }
});

$('#step5').click(function() {
  $(".toggle5").toggle();

  var compare = $(".toggle5").is(":visible");
  if (compare) { 
    $("#step5").css("color", "red");
  }  
  else { 
    $("#step5").css("color", "black");
  }
});

$('#step6').click(function() {
  $(".toggle6").toggle();

  var compare = $(".toggle6").is(":visible");
  if (compare) { 
    $("#step6").css("color", "red");
  }  
  else { 
    $("#step6").css("color", "black");
  }
});

$('#step7').click(function() {
  $(".toggle7").toggle();

  var compare = $(".toggle7").is(":visible");
  if (compare) { 
    $("#step7").css("color", "red");
  }  
  else { 
    $("#step7").css("color", "black");
  }
});

$('#step8').click(function() {
  $(".toggle8").toggle();

  var compare = $(".toggle8").is(":visible");
  if (compare) { 
    $("#step8").css("color", "red");
  }  
  else { 
    $("#step8").css("color", "black");
  }
});

$('#step9').click(function() {
  $(".toggle9").toggle();

  var compare = $(".toggle9").is(":visible");
  if (compare) { 
    $("#step9").css("color", "red");
  }  
  else { 
    $("#step9").css("color", "black");
  }
});

// Functionality to allow search by filter on the Search page
$("#btn-search").on("click", function() {
  //On new search, start w/ all parts to start
  $('.catalog-part').show(); 
  
  //Code to filter by Manufacturer
  var selmfr = $('#dd-mfr').find(':selected').val(); //JQuery event for drop-down
  
  if(selmfr != "All") {
     $('.catalog-part').each(function(){ //.each lets you do something to all items in the selected class
      if ($(this).attr('mfr') != selmfr) {
          $(this).hide();  	
      }
    });
  }
  
  //Very similar code to filter by Model
  var selmodel = $('#dd-model').find(':selected').val();

  if(selmodel != "All") {
    $('.catalog-part').each(function(){
      if($(this).attr('model') != selmodel) {
        $(this).hide(); 
      }
  });
  }
  // similar code to filter by Type
  var seltype = $('#dd-type').find(':selected').val();

  if(seltype != "All") {
    $('.catalog-part').each(function(){
      if($(this).attr('type') != seltype) {
        $(this).hide(); 
      }
    });
  }
});
