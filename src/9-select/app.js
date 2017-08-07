{
    function viewModel() {
        let self = this;
        self.availableCountries = ko.observableArray(['France', 'Germany', 'Spain', 'China']);
        self.selected = ko.observableArray([]);

        self.countries = [{
            name: 'China',
            num: 1
        }, {
            name: 'Japan',
            num: 2
        }, {
            name: 'Korea',
            num: 3
        }];
        self.selectedObj = ko.observable({});
    }

    ko.applyBindings(new viewModel());
}