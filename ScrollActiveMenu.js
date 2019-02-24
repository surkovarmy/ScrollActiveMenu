var MenuList = function(setting)
{
    var defaultSetting = {
        selector: '.ul_top',
        speedanimation: 700,
        offset: 120,
    };
    this.setting = $.extend({}, defaultSetting, setting);
    this.container = $(this.setting.selector);
    this.init();
};

MenuList.prototype = {
    init: function()
    {
        this.handlers();
    },

    handlers: function()
    {
        $(window).on("scroll", $.proxy(this.scroll_ext, this));
        this.container.find('a').on('click', $.proxy(this.onClickMenuElement, this));
    },

    onClickMenuElement: function (event) {
        event.preventDefault();
        var id  = $(event.currentTarget).attr('href');
        var top = $(id).offset().top-120;
        $('body,html').animate({scrollTop: top}, this.setting.speedanimation);
    },

    scroll_ext: function( top ) {
        var top = $(window).scrollTop();
        this.container.find('a').removeClass('active');
        this.container.children('li').each(function(i,elem) {
            var s = $(elem).find('a').attr('href');
            if ( top <= $(s).offset().top-120 ) {
                //console.log(this);
                //console.log(this.container);
                $(elem).find('a').addClass('active');
                return false;
            }else {
                //console.log($(s).top-100);
            }
        });
    }
};