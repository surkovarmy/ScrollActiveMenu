var ScrollActiveMenu = function(setting)
{
    var defaultSetting = {
        selector: '.ul_top',
        speedanimation: 700,
        offset: 120,
        class_active: 'active',
    };
    this.setting = $.extend({}, defaultSetting, setting);
    this.container = $(this.setting.selector);
    this.init();

};

ScrollActiveMenu.prototype = {
    init: function()
    {
        this.handlers();
    },

    check: function() {
        if (this.container.length < 1){
            return false
        }else {
            return true;
        }
    },

    handlers: function()
    {
        if (this.check()) {
            $(window).on("scroll", $.proxy(this.scroll_ext, this));
            this.container.find('a').on('click', $.proxy(this.onClickMenuElement, this));
        }else {
            console.log(this.setting.selector + ' - селектор не найден');
        }
    },

    onClickMenuElement: function (event) {
        event.preventDefault();
        var id  = $(event.currentTarget).attr('href');
        var top = $(id).offset().top - this.setting.offset;
        $('body,html').animate({scrollTop: top}, this.setting.speedanimation);
    },

    scroll_ext: function() {
        var top = $(window).scrollTop();
        this.container.find('a').removeClass(this.setting.class_active);
        this.container.children('li').each($.proxy(function(i,elem) {
            var s = $(elem).find('a').attr('href');
            if ( top <= $(s).offset().top - this.setting.offset ) {
                $(elem).find('a').addClass(this.setting.class_active);
                return false;
            }
        }, this));
    }
};