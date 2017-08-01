let listViewModel = function(items) {
    this.items = ko.observableArray(items);
    this.newItem = ko.observable('');
    this.addItem = function() {
        if (this.newItem().trim() != '') {
            this.items.push(this.newItem());
            this.newItem('');
        }
    }.bind(this);
};

ko.applyBindings(new listViewModel(['apple', 'orange', 'watermelon']));