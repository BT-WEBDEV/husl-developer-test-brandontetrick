$(document).on('click', 'nav .dropdown-menu', function (e) {
    e.stopPropagation();
  });

$(document).ready(function() {
    /// IF Width IS LESS THAN OR EQUAL TO 991px - 
    if($(window).width() <= 991) {
        // ON INDUSTRY CLICK SWITCH ARROW IMAGES AND TOGGLE PARENT LI ELEMENTS.
        $("#IndustryLink").click(function() {
            if($("#IndustryLink img").hasClass('.mobileInlineArrow')){
                $('#IndustryLink img').removeClass('.mobileInlineArrow');
                $("#IndustryLink img").attr("src", "images/right-arrow.png");
            } else {
                $('#IndustryLink img').addClass('.mobileInlineArrow');
                $("#IndustryLink img").attr("src", "images/left-arrow.png");
            }
            $(".mobileHide").parent().toggle();
            $(".mobile-divider").toggle(); 
            $("#IndustryText").toggle();
            return;
        }); 
    } else {
        return; 
    }
    /// TOGGLE HIDE & SHOW MENU ITEMS ON SEARCH ICON CLICK /// 
    $("#searchIcon").click(function() {
        $("#searchIcon").toggleClass("searchBorderToggle"); 
        $("#IndustryLink").toggle(); 
        $(".hideOnSearch").toggle();
        $(".mobile-divider").toggle();
        $("#requestDemo").toggle();
         
    }); 

     /// TOGGLE MENU ITEMS ON SEARCH ICON CLICK /// 
     $("#toggleButton").click(function() {
        $("#searchBarMobile").toggle(); 
    }); 
  });
