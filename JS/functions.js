$(document).ready(function(){
    $('#menu_on').click(function(){
        $('body').toggleClass('visible_menu');
    })

    
    $('.secciones div').show();
    $('ul.tabs li a').click(function(){

        $('.secciones div').hide();
        var activeTab = $(this).attr('href');
        if(activeTab == "#home"){
            $('.secciones div').show();
        }else{
            $(activeTab).show();
            return false;
        }
        
    });
});