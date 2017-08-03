{
    function viewModel() {
        // 控制显示隐藏
        this.v = ko.observable(true);
        this.header = ko.observable('Text and Style Binding');
        this.visualText = ko.observable('This is a line with no container.');
        this.dom = ko.observable(`<b>This is inserted html.</b>`);

        this.isError = ko.observable(true);
        this.tipClass = ko.pureComputed(function() {
            return this.isError() ? 'error' : 'warn';
        }, this);

        this.secret = ko.observable('You know nothing, Jon Snow!');
    }

    ko.applyBindings(new viewModel());
}