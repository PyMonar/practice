{
    function viewModel() {
        let self = this;
        self.fruits = [{
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
        }];

        self.selected = ko.observable({
            name: 'Nothing',
            price: 0.0
        });

        /**
         * 如果绑定时候不传参数，则默认第一个参数为$data, 第二个参数为event对象;
         * 如果绑定的时候传了参数，则会赋值为事件函数的前几个参数，默认的$data与event会往后排。
         */
        self.show = function(str, item) {
            self.selected(item);
            console.log(str);
        };
    }

    ko.applyBindings(new viewModel());
}