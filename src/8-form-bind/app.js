{
    function viewModel() {
        let self = this;
        self.name = ko.observable('Someone');
        self.editing = ko.observable(false);
        self.edit = function() {
            self.editing(true);
        };

        self.fruits = ko.observableArray([{
            name: 'apple',
            price: 1.00
        }, {
            name: 'orange',
            price: 1.00
        }, {
            name: 'pear',
            price: 1.00
        }, {
            name: 'banana',
            price: 1.00
        }]);
        self.selected = ko.observableArray([]);
        self.selectedObj = ko.observableArray();
    }

    ko.applyBindings(new viewModel());
}