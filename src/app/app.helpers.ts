declare const jQuery: any;

export function initializeInspinia() {


    // Add body-small class if window less than 768px
    if (jQuery(this).width() < 769) {
        jQuery('body').addClass('body-small');
    } else {
        jQuery('body').removeClass('body-small');
    }

    // MetsiMenu
    jQuery('#side-menu').metisMenu();

    // Collapse ibox function
    jQuery('.collapse-link').click(function () {
        let ibox = jQuery(this).closest('div.ibox');
        let button = jQuery(this).find('i');
        let content = ibox.find('div.ibox-content');
        content.slideToggle(200);
        button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
        ibox.toggleClass('').toggleClass('border-bottom');
        setTimeout(function () {
            ibox.resize();
            ibox.find('[id^=map-]').resize();
        }, 50);
    });

    // Close ibox function
    jQuery('.close-link').click(function () {
        let content = jQuery(this).closest('div.ibox');
        content.remove();
    });

    // Fullscreen ibox function
    jQuery('.fullscreen-link').click(function () {
        let ibox = jQuery(this).closest('div.ibox');
        let button = jQuery(this).find('i');
        jQuery('body').toggleClass('fullscreen-ibox-mode');
        button.toggleClass('fa-expand').toggleClass('fa-compress');
        ibox.toggleClass('fullscreen');
        setTimeout(function () {
            jQuery(window).trigger('resize');
        }, 100);
    });

    // Close menu in canvas mode
    jQuery('.close-canvas-menu').click(function () {
        jQuery('body').toggleClass('mini-navbar');
        smoothlyMenu();
    });

    // Run menu of canvas
    jQuery('body.canvas-menu .sidebar-collapse').slimScroll({
        height: '100%',
        railOpacity: 0.9
    });

    // Open close right sidebar
    jQuery('.right-sidebar-toggle').click(function () {
        jQuery('#right-sidebar').toggleClass('sidebar-open');
    });

    // Initialize slimscroll for right sidebar
    jQuery('.sidebar-container').slimScroll({
        height: '100%',
        railOpacity: 0.4,
        wheelStep: 10
    });

    // Open close small chat
    jQuery('.open-small-chat').click(function () {
        jQuery(this).children().toggleClass('fa-comments').toggleClass('fa-remove');
        jQuery('.small-chat-box').toggleClass('active');
    });

    // Initialize slimscroll for small chat
    jQuery('.small-chat-box .content').slimScroll({
        height: '234px',
        railOpacity: 0.4
    });

    // Small todo handler
    jQuery('.check-link').click(function () {
        let button = jQuery(this).find('i');
        let label = jQuery(this).next('span');
        button.toggleClass('fa-check-square').toggleClass('fa-square-o');
        label.toggleClass('todo-completed');
        return false;
    });

    // Append config box / Only for demo purpose
    // Uncomment on server mode to enable XHR calls
    // jQuery.get('skin-config.html', function (data) {
    //    if (!jQuery('body').hasClass('no-skin-config'))
    //        jQuery('body').append(data);
    // });

    // Minimalize menu
    jQuery('.navbar-minimalize').click(function () {
        jQuery('body').toggleClass('mini-navbar');
        smoothlyMenu();

    });

    // Tooltips demo
    jQuery('.tooltip-demo').tooltip({
        selector: '[data-toggle=tooltip]',
        container: 'body'
    });

    // Move modal to body
    // Fix Bootstrap backdrop issu with animation.css
    jQuery('.modal').appendTo('body');

    // Full height of sidebar
    function fix_height() {
        let heightWithoutNavbar = jQuery('body > #wrapper').height() - 61;
        jQuery('.sidebard-panel').css('min-height', heightWithoutNavbar + 'px');

        let navbarHeigh = jQuery('nav.navbar-default').height();
        let wrapperHeigh = jQuery('#page-wrapper').height();

        if (navbarHeigh > wrapperHeigh) {
            jQuery('#page-wrapper').css('min-height', navbarHeigh + 'px');
        }

        if (navbarHeigh < wrapperHeigh) {
            jQuery('#page-wrapper').css('min-height', jQuery(window).height() + 'px');
        }

        if (jQuery('body').hasClass('fixed-nav')) {
            if (navbarHeigh > wrapperHeigh) {
                jQuery('#page-wrapper').css('min-height', navbarHeigh - 60 + 'px');
            } else {
                jQuery('#page-wrapper').css('min-height', jQuery(window).height() - 60 + 'px');
            }
        }

    }

    fix_height();

    // Fixed Sidebar
    jQuery(window).bind('load', function () {
        if (jQuery('body').hasClass('fixed-sidebar')) {
            jQuery('.sidebar-collapse').slimScroll({
                height: '100%',
                railOpacity: 0.9
            });
        }
    });

    // Move right sidebar top after scroll
    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > 0 && !jQuery('body').hasClass('fixed-nav')) {
            jQuery('#right-sidebar').addClass('sidebar-top');
        } else {
            jQuery('#right-sidebar').removeClass('sidebar-top');
        }
    });

    jQuery(window).bind('load resize scroll', function () {
        if (!jQuery('body').hasClass('body-small')) {
            fix_height();
        }
    });

    jQuery('[data-toggle=popover]')
        .popover();

    // Add slimscroll to element
    jQuery('.full-height-scroll').slimscroll({
        height: '100%'
    });

    jQuery(window).bind('load resize', function() {
        correctHeight();
        detectBody();
    });
};

export function correctHeight() {

    let pageWrapper = jQuery('#page-wrapper');
    let navbarHeigh = jQuery('nav.navbar-default').height();
    let wrapperHeigh = pageWrapper.height();

    if (navbarHeigh > wrapperHeigh) {
        pageWrapper.css('min-height', navbarHeigh + 'px');
    }

    if (navbarHeigh < wrapperHeigh) {
        if (navbarHeigh < jQuery(window).height()) {
            pageWrapper.css('min-height', jQuery(window).height() + 'px');
        } else {
            pageWrapper.css('min-height', navbarHeigh + 'px');
        }
    }

    if (jQuery('body').hasClass('fixed-nav')) {
        if (navbarHeigh > wrapperHeigh) {
            pageWrapper.css('min-height', navbarHeigh + 'px');
        } else {
            pageWrapper.css('min-height', jQuery(window).height() - 60 + 'px');
        }
    }
}

export function metisMenu() {
    jQuery('#side-menu').metisMenu();
}

export function detectBody() {
    if (jQuery(document).width() < 769) {
        jQuery('body').addClass('body-small');
    } else {
        jQuery('body').removeClass('body-small');
    }
}

// For demo purpose - animation css script
export function animationHover(element, animation) {
    element = jQuery(element);
    element.hover(
        function () {
            element.addClass('animated ' + animation);
        },
        function () {
            // wait for animation to finish before removing classes
            window.setTimeout(function () {
                element.removeClass('animated ' + animation);
            }, 2000);
        });
}

export function slimScroll() {
    // Run menu of canvas
    jQuery('body.canvas-menu .sidebar-collapse').slimScroll({
        height: '100%',
        railOpacity: 0.9
    });

    // Initialize slimscroll for right sidebar
    jQuery('.sidebar-container').slimScroll({
        height: '100%',
        railOpacity: 0.4,
        wheelStep: 10
    });

    // Initialize slimscroll for small chat
    jQuery('.small-chat-box .content').slimScroll({
        height: '234px',
        railOpacity: 0.4
    });

    // Fixed Sidebar
    jQuery(window).bind('load', function () {
        if (jQuery('body').hasClass('fixed-sidebar')) {
            jQuery('.sidebar-collapse').slimScroll({
                height: '100%',
                railOpacity: 0.9
            });
        }
    });

    // Add slimscroll to element
    jQuery('.full-height-scroll').slimscroll({
        height: '100%'
    });


}
export function smoothlyMenu() {
    if (!jQuery('body').hasClass('mini-navbar') || jQuery('body').hasClass('body-small')) {
        // Hide menu in order to smoothly turn on when maximize menu
        jQuery('#side-menu').hide();
        // For smoothly turn on menu
        setTimeout(
            function () {
                jQuery('#side-menu').fadeIn(400);
            }, 200);
    } else if (jQuery('body').hasClass('fixed-sidebar')) {
        jQuery('#side-menu').hide();
        setTimeout(
            function () {
                jQuery('#side-menu').fadeIn(400);
            }, 100);
    } else {
        // Remove all inline style from jquery fadeIn function to reset menu state
        jQuery('#side-menu').removeAttr('style');
    }
}
// Dragable panels
export function winMove() {
    let element = '[class*=col]';
    let handle = '.ibox-title';
    let connect = '[class*=col]';
    jQuery(element).sortable(
        {
            handle: handle,
            connectWith: connect,
            tolerance: 'pointer',
            forcePlaceholderSize: true,
            opacity: 0.8
        })
        .disableSelection();
}
