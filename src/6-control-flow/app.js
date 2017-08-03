{
    function viewModel() {
        this.people = ko.observableArray([{
            firstName: 'Peng',
            lastName: 'Yi',
            age: 27
        }, {
            firstName: 'Miao',
            lastName: 'Runqing',
            age: 25
        }, {
            firstName: 'Wei',
            lastName: 'Shuping',
            age: 24
        }]);

        this.selected = ko.observable(null);

        this.addPerson = function() {
            this.people.push({
                firstName: 'someone',
                lastName: 'somebody',
                age: 0
            });
        }.bind(this);

        this.removePerson = function(data) {
            this.people.remove(data);
        }.bind(this);

        this.show = function(data) {
            this.selected(data);
        }.bind(this);

    }

    ko.applyBindings(new viewModel());
}