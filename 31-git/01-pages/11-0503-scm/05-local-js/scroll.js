

/* PRACTICALSERIES (c) 2021

*******************************************************************************
Title :          LOCAL SCROLL - JQUERY                                SCROLL.JS
*******************************************************************************

PRACTICALSERIES: Practical Series of Publications by Michael Gledhill
                 Published in the United Kingdom

                 Email: mg@practicalseries.com
                 Web:   www.practicalseries.com

-------------------------------------------------------------------------------
DETAILS         LOCAL SCROLL FUNCTIONS

jQuery is using version 3.1.0 from the GoogleAPIs library.

This script applies the scroll to a point within the page (srollTop)
functionality for the current page.

-------------------------------------------------------------------------------
NAMING CONVENTIONS

Each <section> of the site has a waypoint (WP) reference number that identifies
the start of each section. These are id attributes and have the format:

        #js--ccssii

    where:  cc - chapter number
            ss - subsection number
            ii - inline section number

The six digit number is unique to each section, i.e. section 2.1.3
would have waypoint reference js--020103

The trigger class used in the <a> element to trigger the scroll to the waypoint
has the name .js-sc-000000 where the six digit number matches the waypoint
number of the section that is to be scrolled to.

For scrolling to non-numbered sections or additional sections, an ordinal 
character is added to the end of the references:

        #js--ccssiix and .js-sc-ccssiix 
        
Where x starts with a and progresses down the alphabet a, b, c, ... &c
       e.g.   #js--020301a and .js-sc-020301a

The scrolltop function has an offset of -60px to ensure the title is visible
below the fixed navigation bar.

-------------------------------------------------------------------------------
MODIFICATION HISTORY:

This is a complete summary of all software modifications.

Date          Issue        Author         Reason for Modification
-------------------------------------------------------------------------------
02 May 2021   001.000      M. Gledhill    Released

13 Apr 2021   000.106      M. Gledhill    Scroll points added for page

09 Feb 2021   000.000      M. Gledhill    File created
                                          based on 98-00 scroll.js file
                                          Revison 000.101                                          
---------------------------------------------------------------------------- */


/* ****************************************************************************
   WAIT FOR PAGE TO LOAD
   ****************************************************************************
   No jQuery actions take place until the webpage has loaded, all JQuery code
   is contained within the .ready(function()).
   ************************************************************************* */


$(document).ready(function() {                  /* START OF PAGE READY FUNCTION */

/* ****************************************************************************
   REVISION
   **************************************************************************** */

    $('#rev-scroll').append (
        "<p>001.000</p>" /* LOCAL JS REVISION NUMBER */
    );



/* ****************************************************************************
   SCROLL TO SECTION
   ****************************************************************************
   This holds several scrollTop functions that scroll from the TOC to the
   specified section. There is one click function per <a> within the TOC.
   ************************************************************************* */


/* ---------------------------------------------------------------------------
   SCROLL TO TOP
   The offset is set to .to -80 - e.g.

    $('.js--sc-000000').click(function () {
       $('html, body').animate({scrollTop: $('#js--000000').offset().top -80}, 1000);
    });
   ------------------------------------------------------------------------- */
   $('.js--sc-000000').click(function () {
       $('html, body').animate({scrollTop: $('#js--000000').offset().top -80}, 1000);
    });


/* ---------------------------------------------------------------------------
   SCROLL TO CHAPTER (Non heading level after TOC)
   The offset is set to .to -10 - e.g.

    $('.js--sc-NN0000').click(function () {
       $('html, body').animate({scrollTop: $('#js--NN0000').offset().top -10}, 1000);
    });
   ------------------------------------------------------------------------- */


/* ---------------------------------------------------------------------------
   SCROLL TO -  SECTIONS & SUBSECTIONS
   The offset is set to .to -20 - e.g.

    $('.js--sc-NN0100').click(function () {
       $('html, body').animate({scrollTop: $('#js--NN0100').offset().top -20}, 1000);
    });
   ------------------------------------------------------------------------- */
    $('.js--sc-050300').click(function () {
       $('html, body').animate({scrollTop: $('#js--050300').offset().top -20}, 1000);
    });

    $('.js--sc-050301').click(function () {
       $('html, body').animate({scrollTop: $('#js--050301').offset().top -20}, 1000);
    });
    $('.js--sc-050302').click(function () {
      $('html, body').animate({scrollTop: $('#js--050302').offset().top -20}, 1000);
   });
   $('.js--sc-050303').click(function () {
      $('html, body').animate({scrollTop: $('#js--050303').offset().top -20}, 1000);
   });
   $('.js--sc-050304').click(function () {
      $('html, body').animate({scrollTop: $('#js--050304').offset().top -20}, 1000);
   });
   $('.js--sc-050305').click(function () {
      $('html, body').animate({scrollTop: $('#js--050305').offset().top -20}, 1000);
   });
   $('.js--sc-050306').click(function () {
      $('html, body').animate({scrollTop: $('#js--050306').offset().top -20}, 1000);
   });



/* ---------------------------------------------------------------------------
   SCROLL TO -  NON-STANDARD (INLINE) SECTIONS
   The offset is set to .to -120 - e.g.

          $('.js--sc-nn0101a').click(function () {
           $('html, body').animate({scrollTop: $('#js--nn0101a').offset().top -120}, 1000);
          });
   ------------------------------------------------------------------------- */


/* ---------------------------------------------------------------------------
   SCROLL TO -  CROSS REFERENCES
   For figures, the offset is set to .to -80 - e.g.

    $('.js--sc-fNN-01').click(function () {
       $('html, body').animate({scrollTop: $('#js--fNN-01').offset().top -80}, 1000);
    });

   For tables, the offset is set to .to -60 - e.g.

    $('.js--sc-tNN-01').click(function () {
       $('html, body').animate({scrollTop: $('#js--tNN-01').offset().top -60}, 1000);
    });

   For codefragments, the offset is set to .to -120 - e.g.

    $('.js--sc-cNN-01').click(function () {
       $('html, body').animate({scrollTop: $('#js--cNN-01').offset().top -120}, 1000);
    });

   For equations, the offset is set to .to -80 - e.g.

    $('.js--sc-eNN-01').click(function () {
       $('html, body').animate({scrollTop: $('#js--eNN-01').offset().top -80}, 1000);
    });

   For footnotes, the offset is set to .to -60 - e.g.

    $('.js--sc-fnNN').click(function () {
       $('html, body').animate({scrollTop: $('#js--fnNN').offset().top -80}, 1000);
    });
   ------------------------------------------------------------------------- */

    $('.js--sc-f05-15').click(function () {
       $('html, body').animate({scrollTop: $('#js--f05-15').offset().top -80}, 1000);
    });
    $('.js--sc-f05-16').click(function () {
      $('html, body').animate({scrollTop: $('#js--f05-16').offset().top -80}, 1000);
   });
   $('.js--sc-f05-17').click(function () {
      $('html, body').animate({scrollTop: $('#js--f05-17').offset().top -80}, 1000);
   });
   $('.js--sc-f05-18').click(function () {
      $('html, body').animate({scrollTop: $('#js--f05-18').offset().top -80}, 1000);
   });
   $('.js--sc-f05-19').click(function () {
      $('html, body').animate({scrollTop: $('#js--f05-19').offset().top -80}, 1000);
   });

   $('.js--sc-t05-05').click(function () {
      $('html, body').animate({scrollTop: $('#js--t05-05').offset().top -60}, 1000);
   });
   $('.js--sc-t05-06').click(function () {
      $('html, body').animate({scrollTop: $('#js--t05-06').offset().top -60}, 1000);
   });
   $('.js--sc-t05-07').click(function () {
      $('html, body').animate({scrollTop: $('#js--t05-07').offset().top -60}, 1000);
   });
   $('.js--sc-t05-08').click(function () {
      $('html, body').animate({scrollTop: $('#js--t05-08').offset().top -60}, 1000);
   });




});                                             /* END OF PAGE READY FUNCTION */
