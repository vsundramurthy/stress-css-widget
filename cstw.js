(function(d, $, op) {
    var op = $.extend({text: 'STRESS CSS',
                       stress_script: 'http://andy.edinborough.org/demos/css-stress/stressTest.js',
                      }, op)
      , wid_cnt = $('<div id="wid_cnt" />')
            .css(op.cnt_style || {'cursor': 'pointer',
                                  'position': 'absolute',    
                                  'white-space': 'nowrap',
                                  'top': '50%',
                                  'right': '0',
                                  'width': '30px',
                                  'padding': '0',
                                  'margin': '0',
                                  '-webkit-transform': 'rotate(-90deg)',
                                  '-moz-transform': 'rotate(-90deg)',
                                  '-ms-transform': 'rotate(-90deg)',
                                  '-o-transform': 'rotate(-90deg)',
                                  'transform': 'rotate(-90deg)',
                                  '-webkit-transform-origin': '50% 50%',
                                  '-moz-transform-origin': '50% 50%',
                                  '-ms-transform-origin': '50% 50%',
                                  '-o-transform-origin': '50% 50%',
                                  'transform-origin': '50% 50%',
                                  'filter': 'progid:DXImageTransform.Microsoft.BasicImage(rotation=3)'})
            .click(function(e) {
                var s = d.createElement('script'),
                    doit = function () {
                        if (window.stressTest) {
                            stressTest.bookmarklet();
                        } else {
                            setTimeout(doit, 100);
                        }
                    };
                s.src = op.stress_script + '?_=' + Math.random();
                (d.body || d.getElementsByTagName('head')[0]).appendChild(s);
                doit(); })
            .appendTo($('body'))
    
      , wid_txt = $('<span class="wid_txt" />')
            .css(op.txt_style || {'background-color': '#000',
                                  'color': '#FFF',
                                  'padding': '5px',   
                                  'box-shadow': '2px 2px 2px #888888',
                                  'border-radius': '10px'})
            .html(op.text)
            .appendTo(wid_cnt);
})(document, jQuery, {});
