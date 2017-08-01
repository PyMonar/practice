let myViewModel = {
    personName: ko.observable('Sandy'),
    personAge: ko.observable(21)
};

ko.applyBindings(myViewModel);