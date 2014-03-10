$(document).ready(function(){

  // add onclick to photo img

  $(".photo").click( function () {
    var $this = $(this)
      $this.addClass("hide")
      if ($this.next(".photo").length ) {
        $this.next().removeClass("hide");
      } else {
        $this.parent().children().eq(0).removeClass("hide");
      }
  });

});
