/* PRACTICALSERIES (c) 2021

*******************************************************************************
Title :          PRACTICAL SERIES                                     SCRIPT.JS
*******************************************************************************

PRACTICALSERIES: Practical Series of Publications by Michael Gledhill
                 Published in the United Kingdom

                 Email: mg@practicalseries.com
                 Web:   www.practicalseries.com

-------------------------------------------------------------------------------
DETAILS

jQuery is using version 3.1.0 from the GoogleAPIs library.

The Waypoint function is a Java plugin supplied by imakewebthings and downloaded
from their website: http://imakewebthings.com/waypoints/

The waypoint plugin is available under the github MIT licenced reproduce below:

-------------------------------------------------------------------------------
WAYPOINT LICENCE

The MIT License (MIT)
Copyright © 2011-2012 Caleb Troughton

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

-------------------------------------------------------------------------------
MODIFICATION HISTORY:

This is a complete summary of all software modifications.

Date          Issue        Author         Reason for Modification
-------------------------------------------------------------------------------
10 Feb 2021   000.101      M. Gledhill    Development release for site build
                                          Revision control active

08 Feb 2021   000.000      M. Gledhill    Established for PAL

20 May 2018   D00.01       M. Gledhill    Fixed nav applies to both class or ID

                                          FindSection() function added for
                                          dynamic navigation (via side TOC)

15 May 2018   D00          M. Gledhill    Development - based on PS1002 R01
---------------------------------------------------------------------------- */


/* ****************************************************************************
   WAIT FOR PAGE TO LOAD
   ****************************************************************************
   No JQuery actions take place until the webpage has loaded, all JQuery code
   is contained within the .ready(function()).
   ************************************************************************* */


$(document).ready(function() {                      /* START OF PAGE READY FUNCTION */


/* ****************************************************************************
   REVISION
   **************************************************************************** */

    $('#rev-script').append (
        "<p>000.101</p>" /* LOCAL JS REVISION NUMBER */
    );
    
    
/* ****************************************************************************
   FIXED NAVIGATION BAR (WAYPOINT FUNCTION)
   ****************************************************************************
   This function causes the navigation bar to be fixed at the top edge of the
   screen once the user has scrolled down to waypoint js--fixed-nav (this is
   generally the first section of the website after the TOC).
   
   The waypoint js--fixed-nav can be either a class or ID in the HTML,
   ID is preferred.

   The waypoint function adds the class .fixed-nav to the <nav> element.

   Similarly, the .fixed-nav class is removed when scrolling up to a point
   above the first waypoint js--fixed-nav.

   The waypoint function returns the direction of travel when passing the
   waypoint specified. In this case an offset of 60px is added (the class is
   added when the waypoint is within 60px of the top of the screen).
   ************************************************************************* */
    

   /* FIXED NAV TRIGGERS AT THE CLASS .js--fixed-nav */
    $('.js--fixed-nav').waypoint(function (direction) { /* START of Waypoint function
                                                           triggers as .js--fixed-nav class */
        if (direction == "down") {                      /* check direction */
            $('nav').addClass('fixed-nav');             /* if moving downward activate fixed-nav class */
            $('.side-toc').addClass('nav-on');
       } else {
            $('nav').removeClass('fixed-nav');          /* if moving upward de-activate fixed-nav class */
            $('.side-toc').removeClass('nav-on');
        }
    }, {
    offset: '60px'                                      /* check for waypoint 60px before top of screen */
    });                                                 /* END of Waypoint function */

    /* FIXED NAV TRIGGERS AT THE ID #js--fixed-nav */
    $('#js--fixed-nav').waypoint(function (direction) { /* START of Waypoint function
                                                           triggers as #js--fixed-nav ID */
        if (direction == "down") {                      /* check direction */
            $('nav').addClass('fixed-nav');             /* if moving downward activate fixed-nav class */
        } else {
            $('nav').removeClass('fixed-nav');          /* if moving upward de-activate fixed-nav class */
        }
    }, {
    offset: '60px'                                      /* check for waypoint 60px before top of screen */
    });                                                 /* END of Waypoint function */



/* ****************************************************************************
   SOCIAL MEDIA CHARACTER CHANGE
   ****************************************************************************
   These function cause the social media icons in the footer to change from
   outlined to filled characters

   THe hover property is used four times (twice per icon) the first use adds
   the filled icon during hover and removes it afterwards, the second use
   removes the oultine icon during hover and restores it afterwards
   ************************************************************************* */

    /* FACEBOOK ICON MANIPULATION */
    $('#js--fbicon').hover(
        function(){ $(this).addClass('ion-social-facebook'); },
        function(){ $(this).removeClass('ion-social-facebook'); }
    );
    $('#js--fbicon').hover(
        function(){ $(this).removeClass('ion-social-facebook-outline'); },
        function(){ $(this).addClass('ion-social-facebook-outline'); }
    );

    /* TWITTER ICON MANIPULATION */
    $('#js--twicon').hover(
        function(){ $(this).addClass('ion-social-twitter'); },
        function(){ $(this).removeClass('ion-social-twitter'); }
    );
    $('#js--twicon').hover(
        function(){ $(this).removeClass('ion-social-twitter-outline'); },
        function(){ $(this).addClass('ion-social-twitter-outline'); }
    );


/* ****************************************************************************
   DYNAMIC NAVIGATION - IDENTIFY CURRENT TOC-EN SECTION
   ****************************************************************************
   Identifies the current toc-en from the position on the screen
   ************************************************************************* */


    findSection();                              /* call function on page load */

    $(window).scroll(function() {               /* call function on scroll */
        findSection();
    });


/* ****************************************************************************
   SWAP SVG IMAGES FOR PNG IMAGES IF VIEWED WITH INTERNET EXPLORER
   ****************************************************************************
   Internet Explorer does not scale svg image properly, this is true even of
   the latest version (IE11). Edge is fine.

   The following jQuery creates a function called IEgetVer. This returns
   the following:

        FALSE = Browser is not IE or Edge

        1     = Internet Explorer version 1-11

        2     = Edge version numbers start at 12

    The result is stored in the variable version.

    If version is 1, then the browser is a version of Internet Explorer and
    all filename.svg images are changed to filename.png. Note the name doesn’t
    change, just the extension. The .png file must also be stored in the same
    location as the .svg file.

    The code finds the number of img elements on the page (variable imgs).
    It then checks the src attribute of each occurrence to see if it ends
    in .svg (this is the /.*\.svg$/ meta character string).

    If it does the last three characters are taken off with the slice command
    and png added in place.
   ************************************************************************* */

    var version = IEgetVer();

    if (version === false) { /* === test the type of the result (rather than value) */
                             /* Browser is not IE or Edge */
    }

    else if (version >= 2) { /* Browser is Edge (version number is >= 12) */

    }

    else {                   /* Browser is IE */
        var imgs = document.getElementsByTagName('img');
        var svgExtension = /.*\.svg$/   /* this basically finds *.svg - they are called meta charcters */
        var l = imgs.length;
        for(var i = 0; i < l; i++) {
            if(imgs[i].src.match(svgExtension)) {
                imgs[i].src = imgs[i].src.slice(0, -3) + 'png';
            }
        }
        var refs = document.getElementsByTagName('a');
        var svgExtension = /.*\.svg$/   /* this basically finds *.svg - they are called meta charcters */
        var l = refs.length;
        for(var i = 0; i < l; i++) {
            if(refs[i].href.match(svgExtension)) {
                refs[i].href = refs[i].href.slice(0, -3) + 'png';
            }
        }
    }


/* ----------------------------------------------------------------------------
   FUNCTION IEgetVer - DETECT IE AND EDGE
   ----------------------------------------------------------------------------
   The function IEgetVer uses the useragent command to get browser information

   The following browsers return the following ua:

     IE 10   ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

     IE 11   ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

     Edge 12 ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML,
                   like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

     Edge 13 ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                   (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

   The string is decoded using the IndexOf function (returns position of
   characters in string).

     If it contains the string MSIE it is an early version of IE (10 or earlier)

     If it contains the string Trident, it is IE 11

     If it contains the string Edge it is Edge

   The returned value is the extracted version or revision number of the
   browser, the function returns FALSE if the browser is not IE or EDGE.

   The ParseInt function returns
   --------------------------------------------------------------------------- */

    function IEgetVer() {
        var ua = window.navigator.userAgent;

        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {     /* IE 10 or older - Return 1  */
            return 1;
        }

        var trident = ua.indexOf('Trident/');
        if (trident > 0) {  /* IE 11 - Return 1 */
            var rv = ua.indexOf('rv:');
            return 1;
        }

        var edge = ua.indexOf('Edge/');
        if (edge > 0) {     /* Edge (IE 12+) - Return 2 */
            return 2;
        }

      // other browser - Return FALSE
      return false;
    }
/* ************************************************************************* */



 /* ---------------------------------------------------------------------------
   FUNCTION DECLARATION -   findSection
   ---------------------------------------------------------------------------
   Identifies which instance of a section with the class .toc-en is currently
   at the top of the view port
   ------------------------------------------------------------------------- */
    function findSection() {

/*      ----------------------------------------------------------------------
        VARIABLES
        ----------------------------------------------------------------------
            secCount        The number of sections with class .toc-en
            linkCount       The number of links in the side TOC with class
                            .side-toc-lev
            prevCount       The number of previous buttons in the nav bar
            nextCount       The number of next buttons in the nav bar

            vpTop           Distance from top of page to top of viewport (px)
            nvHeight        Current height of navigation bar at top of page (px)
            instTop         Distance from top of page to .toc-en section
                            being examined
            instBottom      Distance from top of page to bottom of the .toc-en
                            section being examined (the bottom is the usually
                            the start of the following .toc-en section, or if
                            this is the last .toc-en section, then the bottom
                            of this .toc-en section)
            secActiveVal    The number of the current .toc-en that is visible
                            imediately below the nav bar, this is the active
                            section (sections are numbered from 0)

        -------------------------------------------------------------------- */
        var secCount  = $('.toc-en').length;                                    /* identify how many toc listed sections are present */
        var linkCount = $('.side-toc-lev').length;                              /* identify how many links are in the side toc */
        var prevCount = $('.nav-prev').length;                                  /* identify how many next buttons are in the nav bar */
        var nextCount = $('.nav-next').length;                                  /* identify how many prev buttons are in the nav bar */

        var vpTop = $(window).scrollTop();                                      /* position of top of viewport in document */
        var nvHeight =$('nav').height();                                        /* height of navigation bar */

        var secActiveVal = 0;                                                   /* holds the active section number at end of loop */
        var instTop;                                                            /* distance to top of section identified by i counter */
        var instBottom;                                                         /* distance to bottom of section identified by i counter */
        var i,j;                                                                /* loop counter */

        console.log("page height = "+$(document).height())
        /* EXAMINE EACH SECTION TO SEE IF IT IS THE ACTIVE SECTION */
        for (i=0; i <= secCount-1; i++) {                                       /* count up through sections from first to last */

            j=i+1;                                                              /* j points to section that follows the current section */

            instTop = $(".toc-en:eq("+i+")").offset().top;                      /* find distance to top of current section */
            instHeight = $(".toc-en:eq("+i+")").height();                       /* find height of current section */

            if (i<(secCount-1)) {                                               /* IF this section is not the last section, then the bottom */     instBottom = $(".toc-en:eq("+ j +")").offset().top - 1;             /* of this section is considered to be the start of the */
                }                                                               /* following section */
            else {                                                              /* OTHERWISE this is the last section, so set the bottom */
                instBottom = $(document).height();                              /* of this section to be the bottom of the page */
            } 

            if (instTop<=(vpTop+nvHeight) && (instBottom)>(vpTop+nvHeight)) {   /* if the current section is visible in the first */
                secActiveVal = i-1;                                             /* pixel positon below the nav bar, it is  */
            }                                                                   /* the active section. Subtract 1 to account for */
                                                                                /* the title area, this has a .toc-en class, but has */
                                                                                /* no corresponding link in the side TOC */
        }

        /* SET THE ACTIVE SECTION IN THE SIDE TOC */
        $('.side-toc-lev').removeClass("toc-active");                           /* remove .toc-active class from all side TOC links */
        if (secActiveVal >= 0){                                                 /* if the active section is less than zero (title area) */
            $('.side-toc-lev').eq(secActiveVal).addClass("toc-active");         /* then apply it to the link for the current section */
         }

         /* SET THE ACTIVE NEXT AND PREVIOUS SECTION BUTTONS IN THE NAV BAR */
         $('.nav-prev').removeClass("nav-on");                                  /* dissable all nav-prev links */
         $('.nav-next').removeClass("nav-on");                                  /* dissable all nav-next links */
         if (secActiveVal < 0){                                                 /* if the active section is less than zero (error check) */
            $('.nav-prev').eq(0).addClass("nav-on");                            /* and activate the first nav-prev link (empty box) */
            $('.nav-next').eq(0).addClass("nav-on");                            /* and activate the first nav-next link (abstract) */
         } else {                                                               /* OTHERWISE */
            $('.nav-prev').eq(secActiveVal).addClass("nav-on");                 /* and activate the nav-prev corresponding to previous sec */
            $('.nav-next').eq(secActiveVal+1).addClass("nav-on");               /* and activate the nav-next corresponding to next sec */
         }

    }
/* ************************************************************************* END OF findSection FUNCTION */



});                                                 /* END OF PAGE READY FUNCTION */
