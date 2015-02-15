var contactBook = {
  //To hide contact form
  hideForm: $("form").hide(),
  errorHide: $('.error').hide(),
  hideMenu: $("#toggle").hide(),

  //Load functions that initialize when document is ready
  initialize: function() {        
    this.hideForm;    
    this.addContact();
    this.saveContact();
    this.editContact();
    this.deleteContact();
    this.errorHide;
    this.toggleMenu();
    this.hideMenu;
  },

  //Adds contacts to contact list
  addContact: function() {   
    $("#add-contact").click(function(){
      $("form").show();
      $("#contact-name").val("");
      $("#contact-number").val("");
      $("#contact-email").val("");
      $("#contact-address").val("");
      $("#contact-birthday").val("");
    });
  },

  //Saves contacts to contact list
  saveContact: function() {

    $("button[type='submit']").click(function(event) {      
      event.preventDefault();
      var contactName = $("#contact-name").val().trim(),
          contactNumber = $("#contact-number").val().trim(),
          contactEmail = $("#contact-email").val().trim(),
          contactAddress = $("#contact-address").val().trim(),
          contactBirthday = $("#contact-birthday").val().trim();

      //verifies input field      
      if (contactName === "") {
        $('.error').show();
      }
      else {
        $("form").hide();
        $(".contact-list").append("<ul>" +"<li>" + contactName + "</li>" + "<li>" + contactNumber + "</li>" + "<li>" + contactEmail + "</li>" + "<li>" + contactAddress + "</li>" + "<li>" + contactBirthday + "</li>" + '<button id="edit-contact">Edit</button>' + '<button id="delete-contact">Delete</button>'+ "</ul>");

        $('.error').hide();
      }
    });
  },

  //Edits contact
  editContact: function() { 

    $(document).on("click",'#edit-contact', function(event) {
      $(this).parent().hide();
      $("form").show();

      // var formStyle = $("form").attr('style');
      // console.log("" + formStyle + "");        
      
      //Gets the value of the hidden contact
      var editName = $(this).parent().children(':first-child').html(),
          editNumber = $(this).parent().children(':nth-child(2)').html(),
          editEmail = $(this).parent().children(':nth-child(3)').html(), 
          editAddress = $(this).parent().children(':nth-child(4)').html(),
          editBirthday = $(this).parent().children(':nth-child(5)').html(); 

      //setting the editable input fields
      $("#contact-name").val(editName);
      $("#contact-number").val(editNumber);
      $("#contact-email").val(editEmail);
      $("#contact-address").val(editAddress);
      $("#contact-birthday").val(editBirthday);
    });
  },

  //Deletes contact
  deleteContact: function() {    
    $(document).on("click",'#delete-contact', function(event) {
      $(this).parent().remove();
    });
  },

  toggleMenu: function(){
    $("#menu-icon").click(function(){
      $("#toggle").toggle();
    })
  }   

};


//Run initialize method when the page is loaded
$(document).ready(contactBook.initialize());

