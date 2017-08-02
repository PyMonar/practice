{
    function viewModel() {
        this.fruits = ['Apple', 'Banana', 'Celery', 'Corn', 'Orange', 'Spinach'];
        /*
        For checkboxes, KO will set the element to be checked when the parameter value is true, 
        and unchecked when it is false. If you give a value that isn’t actually boolean, 
        it will be interpreted loosely. This means that nonzero numbers and non-null objects and non-empty strings will all be interpreted as true, 
        whereas zero, null, undefined, and empty strings will be interpreted as false. 

        When the user checks or unchecks the checkbox, KO will set your model property to true or false accordingly.

        Special consideration is given if your parameter resolves to an array. 
        In this case, KO will set the element to be checked if the value matches an item in the array, 
        and unchecked if it is not contained in the array.

        When the user checks or unchecks the checkbox, KO will add or remove the value from the array accordingly.
        */
        this.selected = ko.observableArray([]);
        this.selectAll = ko.pureComputed({
            read() {
                return this.selected().length === this.fruits.length;
            },
            write(value) {
                this.selected(value ? [...this.fruits] : []);
            },
            owner: this
        });
    }

    ko.applyBindings(new viewModel());
}