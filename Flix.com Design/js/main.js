/*jslint browser: true*/
/*global $, jQuery, console, alert*/
/*global angular */

$('.tab-switch div').click(function () {
    'use strict';
    
    // Add class selected to the clicked tab
    $(this).addClass('selected').siblings().removeClass('selected');
    
    // Delete all tabs content
    $('.tabsContent .row > div').hide();
    
    $($(this).data('class')).show();
});

