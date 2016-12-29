import Backbone from 'backbone';
export default Backbone.Model.extend({
    defaults: {
        list: [
            {
                text: '',
                icon: '',
                onclick: '',
                selected: false,
                asyncUrl: '',
                prop: {
                    id: 'asdas',
                },
                children: []
            }
        ],
        isSearch: false,
        parentKey: '',
        childKey: '',
        hideIcon: false,
    }
});