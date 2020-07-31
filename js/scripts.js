$(document).ready(function () {
    
    $(".card-1").hover(function(){
        $(this).animate({opacity:'1'});
    },
    function(){4
        $(this).animate({opacity:'0'});
        });    
        $('#mc-embedded-subscribe').click(function () {
            var name = document.getElementById("mce-NAME").value;
            alert("Hey " + name + ". We have received your details thank you for reaching us!");
        });
        
})