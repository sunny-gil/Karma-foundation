$(document).ready(function() {
  $("#form-submit").click(function(){
    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var areacode = $("#areacode").val();
    var mobile = $("#mobile").val();
    var email = $("#email").val();
    var amount = $("#amount").val();



        console.log(fname);
        console.log(lname);
        console.log(areacode);
        console.log(mobile);
        console.log(email);
        console.log(amount);

        if((fname && lname && mobile && email && areacode && amount) == ""){
          $(".error_main #error-msg").text("All Fields are Compulsary");
          $(".error_main").fadeIn();
      }else{
          if((!validName(fname)) || (!validName(lname))){
              $(".error_main #error-msg").text("Please Enter Valid Name");
              $(".error_main").slideDown();
          }else{
              if(!validMobile(mobile) || (mobile.length < 10) || (mobile.length > 10)){
                  $(".error_main #error-msg").text("Please Enter Valid Mobile");
                  $(".error_main").slideDown();
              }else{
                  if(!validEmail(email)){
                      $(".error_main #error-msg").text("Please Enter Valid Email");
                      $(".error_main").slideDown();
                  }else{
                      $(".error_main #error-msg").text("Form Submited Successfully");
                      $(".error_main").slideDown();
                      
                      setTimeout(function(){
                          $(".error_main").slideUp();
                          $("#reg-form").submit();
                          $('#reg-form')[0].reset();
                      }, 3000);
                  }
              }
          }
      }
  });

  $("#form-cancel").click(function(){
    $("#reg-form")[0].reset();
});
  });