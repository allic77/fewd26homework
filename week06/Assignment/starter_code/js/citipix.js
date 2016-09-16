//wait for the DOM elements to load before executing
$(document).ready(function() {
  //prevent the submit button from refreshing the page
  $('#submit-btn').click(function(){
    event.preventDefault();
    
    var city = $('#city-type').val();
    $('#city-type').val('');
    city = city.toLowerCase().trim();
    
    if(city == 'new york' || city == 'nyc' || city == 'new york city') {
      $('body').attr('class','nyc');
    }
    else if (city == 'San Francisco' || city == 'SF' || city == 'Bay Area') {
      $('body').attr('class','sf');
    }
    else if (city == 'Los Angeles' || city == 'LA' || city == 'LAX') {
      $('body').attr('class','la');
    }
    else if (city == 'Austin' || city == 'ATX') {
      $('body').attr('class','austin');
    }
    else if (city == 'Sydney' || city == 'SYD') {
      $('body').attr('class','sydney');
    }
    else if (city == 'CitiPix' || city == 'Citi') {
      $('body').attr('class','citipix_skyline');
    }
  });
});