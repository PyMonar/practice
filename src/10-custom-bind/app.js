{
    function viewModel() {
        let self = this;
        self.name = ko.observable('Monar');
        self.list = ko.observableArray([2, 4, 1, 3, 9, 6, 8, 7, 0, 5]);
    }

    ko.bindingHandlers.monar = {
        /* 
         * element — 此绑定中涉及的DOM元素。
         * valueAccessor — 可以调用的JavaScript函数，以获取此绑定中涉及的当前模型属性。 调用此函数而不传递任何参数（即调用valueAccessor（））以获取当前模型属性值。 要容易接受observable和plain值，请对返回的值调用ko.unwrap。
         * allBindings —可用于访问绑定到此DOM元素的所有模型值的JavaScript对象。 调用allBindings.get（'name'）检索名称绑定的值（如果绑定不存在则返回undefined）; 或allBindings.has（'name'）来确定当前元素是否存在名称绑定。
         * viewModel — 此参数在Knockout 3.x中已弃用。 使用bindingContext。$ data或bindingContext $ raw用于访问视图模型的数据。
         * bindingContext — 保存可用于此元素的绑定的绑定上下文的对象。 此对象包括特殊属性，包括$ parent，$ parents和$ root，可用于访问与此上下文的祖先绑定的数据。 
         */
        init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            var val = valueAccessor();
            console.log('init: ' + val());
        },
        update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            var val = valueAccessor();
            console.log('update: ' + val());
        }
    };

    // 是否排序
    ko.bindingHandlers.order = {
        init: function(element, valueAccessor, allBindings) {
            var flag = ko.unwrap(valueAccessor());
            if (flag) {
                allBindings.get('foreach').sort(function(a, b) {
                    return a - b;
                });
            }
        }
    };

    ko.applyBindings(new viewModel());
}