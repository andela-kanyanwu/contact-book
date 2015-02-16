var fourSquare = {
  fourSquareURL: "https://api.foursquare.com/v2/venues/search",
  initialize: function() {
    this.search();
  },
  search: function() {
    var data = {
      client_id: "BCFWS4SVPQBUKM4EEODKUYWVROZNIIVQ35ZOTAUOSL3HCDF4",
      client_secret: "14LEMG1H3AVUFQHFTNE4DR13JNDNSJJY4TX2YRXCAUN500P5",
      v: "20130815",
      near: "lagos",
      query: "catholic church"
    }
    $.getJSON(this.fourSquareURL, data, function(reply) {      
      var venueArray = reply.response.venues;
      $(venueArray).each(function(index, reply) {
        console.log (reply.location);
      })
      console.log(venueArray);
    }); 
  }

}

$(document).ready(fourSquare.initialize());