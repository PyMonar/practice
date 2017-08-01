function MyName() {
    this.firstName = ko.observable('Peng');
    this.lastName = ko.observable('Yi');
    this.fullName = ko.computed(function() {
        return this.firstName() + ' ' + this.lastName();
    }, this);
    this.listProps = ko.computed(function() {
        let output = ``;
        for (let key in this) {
            if (this.hasOwnProperty(key)) {
                output += `${key}'s value is ${this[key]()} and it is ${ko.isComputed(this[key])} <br>`;
            }
        }
        return output;
    }, this);
}

ko.applyBindings(new MyName());