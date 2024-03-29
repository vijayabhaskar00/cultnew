/*
 * jQuery appear plugin
 *
 * Copyright (c) 2012 Andrey Sidorov
 * licensed under MIT license.
 *
 * https://github.com/morr/jquery.appear/
 *
 * Version: 0.3.3
 */
!function(a){function h(){d=!1;for(var c=0;c<b.length;c++){var e=a(b[c]).filter(function(){return a(this).is(":appeared")});if(e.trigger("appear",[e]),g){var f=g.not(e);f.trigger("disappear",[f])}g=e}}var g,b=[],c=!1,d=!1,e={interval:250,force_process:!1},f=a(window);a.expr[":"].appeared=function(b){var c=a(b);if(!c.is(":visible"))return!1;var d=f.scrollLeft(),e=f.scrollTop(),g=c.offset(),h=g.left,i=g.top;return i+c.height()>=e&&i-(c.data("appear-top-offset")||0)<=e+f.height()&&h+c.width()>=d&&h-(c.data("appear-left-offset")||0)<=d+f.width()},a.fn.extend({appear:function(f){var g=a.extend({},e,f||{}),i=this.selector||this;if(!c){var j=function(){d||(d=!0,setTimeout(h,g.interval))};a(window).scroll(j).resize(j),c=!0}return g.force_process&&setTimeout(h,g.interval),b.push(i),a(i)}}),a.extend({force_appear:function(){return!!c&&(h(),!0)}})}(jQuery);