(function() {
    ko.bindingHandlers.bindIframe = {
        init: function(element, valueAccessor) {
            function bindIframe() {
                try {
                    var iframeInit = element.contentWindow.initChildFrame,
                        iframedoc = element.contentDocument.body;
                } catch (e) {
                    // ignored
                }
                if (iframeInit)
                    iframeInit(ko, valueAccessor());
                else if (iframedoc) {
                    ko.applyBindings(valueAccessor(), iframedoc);
                }
            }
            bindIframe();
            ko.utils.registerEventHandler(element, 'load', bindIframe);
        }
    };

    function ViewModel() {
        var self = this;
        self.name = ko.observable(123);
    }

    ko.applyBindings(new ViewModel());
})();