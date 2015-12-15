if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-form-builder-field-type/aui-form-builder-field-type.js']) {
   __coverage__['build/aui-form-builder-field-type/aui-form-builder-field-type.js'] = {"path":"build/aui-form-builder-field-type/aui-form-builder-field-type.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0},"b":{"1":[0,0],"2":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":58}}},"2":{"name":"(anonymous_2)","line":30,"loc":{"start":{"line":30,"column":17},"end":{"line":30,"column":28}}},"3":{"name":"(anonymous_3)","line":57,"loc":{"start":{"line":57,"column":16},"end":{"line":57,"column":28}}},"4":{"name":"(anonymous_4)","line":67,"loc":{"start":{"line":67,"column":26},"end":{"line":67,"column":37}}},"5":{"name":"(anonymous_5)","line":78,"loc":{"start":{"line":78,"column":22},"end":{"line":78,"column":38}}},"6":{"name":"(anonymous_6)","line":92,"loc":{"start":{"line":92,"column":23},"end":{"line":92,"column":34}}},"7":{"name":"(anonymous_7)","line":106,"loc":{"start":{"line":106,"column":18},"end":{"line":106,"column":29}}},"8":{"name":"(anonymous_8)","line":119,"loc":{"start":{"line":119,"column":17},"end":{"line":119,"column":28}}},"9":{"name":"(anonymous_9)","line":133,"loc":{"start":{"line":133,"column":20},"end":{"line":133,"column":39}}},"10":{"name":"(anonymous_10)","line":215,"loc":{"start":{"line":215,"column":23},"end":{"line":215,"column":37}}},"11":{"name":"(anonymous_11)","line":218,"loc":{"start":{"line":218,"column":21},"end":{"line":218,"column":32}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":238,"column":81}},"2":{"start":{"line":19,"column":0},"end":{"line":235,"column":3}},"3":{"start":{"line":31,"column":8},"end":{"line":36,"column":10}},"4":{"start":{"line":37,"column":8},"end":{"line":37,"column":52}},"5":{"start":{"line":39,"column":8},"end":{"line":39,"column":50}},"6":{"start":{"line":41,"column":8},"end":{"line":45,"column":11}},"7":{"start":{"line":47,"column":8},"end":{"line":47,"column":76}},"8":{"start":{"line":48,"column":8},"end":{"line":48,"column":74}},"9":{"start":{"line":58,"column":8},"end":{"line":58,"column":38}},"10":{"start":{"line":68,"column":8},"end":{"line":68,"column":50}},"11":{"start":{"line":79,"column":8},"end":{"line":79,"column":64}},"12":{"start":{"line":81,"column":8},"end":{"line":83,"column":9}},"13":{"start":{"line":82,"column":12},"end":{"line":82,"column":63}},"14":{"start":{"line":93,"column":8},"end":{"line":93,"column":69}},"15":{"start":{"line":95,"column":8},"end":{"line":97,"column":9}},"16":{"start":{"line":96,"column":12},"end":{"line":96,"column":52}},"17":{"start":{"line":107,"column":8},"end":{"line":107,"column":36}},"18":{"start":{"line":109,"column":8},"end":{"line":109,"column":81}},"19":{"start":{"line":110,"column":8},"end":{"line":110,"column":79}},"20":{"start":{"line":120,"column":8},"end":{"line":120,"column":36}},"21":{"start":{"line":122,"column":8},"end":{"line":122,"column":78}},"22":{"start":{"line":123,"column":8},"end":{"line":123,"column":76}},"23":{"start":{"line":134,"column":8},"end":{"line":134,"column":70}},"24":{"start":{"line":216,"column":16},"end":{"line":216,"column":49}},"25":{"start":{"line":219,"column":16},"end":{"line":219,"column":58}}},"branchMap":{"1":{"line":81,"type":"if","locations":[{"start":{"line":81,"column":8},"end":{"line":81,"column":8}},{"start":{"line":81,"column":8},"end":{"line":81,"column":8}}]},"2":{"line":95,"type":"if","locations":[{"start":{"line":95,"column":8},"end":{"line":95,"column":8}},{"start":{"line":95,"column":8},"end":{"line":95,"column":8}}]}},"code":["(function () { YUI.add('aui-form-builder-field-type', function (A, NAME) {","","/**"," * The Form Builder Type Component"," *"," * @module aui-form-builder"," * @submodule aui-form-builder-field-type"," */","","/**"," * A base class for `A.FormBuilderFieldType`."," *"," * @class A.FormBuilderFieldType"," * @extends A.Base"," * @param {Object} config Object literal specifying widget configuration"," *     properties."," * @constructor"," */","A.FormBuilderFieldType = A.Base.create('form-builder-field-type', A.Base, [], {","    TPL_FIELD_TYPE: '<div class=\"field-type\" tabindex=\"0\"></div>',","    TPL_FIELD_TYPE_CONTENT: '<div class=\"field-type-icon {icon}\"></div>' +","        '<div class=\"field-type-label\">{label}</div></div>',","","    /**","     * Constructor for `A.FormBuilderFieldType`. Lifecycle.","     *","     * @method initializer","     * @protected","     */","    initializer: function() {","        this.get('node').setHTML(","            A.Lang.sub(this.TPL_FIELD_TYPE_CONTENT, {","                icon: this.get('icon'),","                label: this.get('label')","            })","        );","        this.get('node').setData('fieldType', this);","","        this._uiSetDisabled(this.get('disabled'));","","        this.after({","            disabledChange: this._afterDisabledChange,","            iconChange: this._afterIconChange,","            labelChange: this._afterLabelChange","        });","","        this.get('node').on('mouseleave', A.bind(this._onMouseLeave, this));","        this.get('node').on('mouseover', A.bind(this._onMouseOver, this));","    },","","    /**","     * Destructor implementation for `A.FormBuilderFieldType`. Lifecycle.","     *","     * @method destructor","     * @protected","     */","    destructor: function () {","        this.get('node').remove(true);","    },","","    /**","     * Fired after the `disabled` attribute is set.","     *","     * @method _afterDisabledChange","     * @protected","     */","    _afterDisabledChange: function() {","        this._uiSetDisabled(this.get('disabled'));","    },","","    /**","     * Fired after the `icon` attribute is set.","     *","     * @method _afterIconChange","     * @param {CustomEvent} event The fired event","     * @protected","     */","    _afterIconChange: function(event) {","        var iconNode = this.get('node').one('.field-type-icon');","","        if (iconNode) {","            iconNode.replaceClass(event.prevVal, event.newVal);","        }","    },","","    /**","     * Fired after the `label` attribute is set.","     *","     * @method _afterLabelChange","     * @protected","     */","    _afterLabelChange: function() {","        var labelElement = this.get('node').one('.field-type-label');","","        if (labelElement) {","            labelElement.setHTML(this.get('label'));","        }","    },","","    /**","     * Fire when `mouseleave` the field type.","     *","     * @method _onMouseLeave","     * @protected","     */","   _onMouseLeave: function() {","        var node = this.get('node');","","        node.one('.field-type-label').removeClass('field-type-label-mouse-over');","        node.one('.field-type-icon').removeClass('field-type-icon-mouse-over');","    },","","    /**","     * Fire when `mouseover` the field type.","     *","     * @method _onMouseOver","     * @protected","     */","   _onMouseOver: function() {","        var node = this.get('node');","","        node.one('.field-type-label').addClass('field-type-label-mouse-over');","        node.one('.field-type-icon').addClass('field-type-icon-mouse-over');","    },","","    /**","     * Updates the UI according to the value of the `disabled` attribute.","     *","     * @method _uiSetDisabled","     * @param {Boolean} disabled","     * @protected","     */","    _uiSetDisabled: function(disabled) {","        this.get('node').toggleClass('field-type-disabled', disabled);","    }","}, {","","    /**","     * Static property used to define the default attribute","     * configuration for the `A.FormBuilderFieldType`.","     *","     * @property ATTRS","     * @type Object","     * @static","     */","    ATTRS: {","","        /**","         * The default configuration object to be used when creating an instance","         * of a field of this type.","         *","         * @attribute defaultConfig","         * @default {}","         * @type {Object}","         */","        defaultConfig: {","            validator: A.Lang.isObject,","            value: {}","        },","","        /**","         * Defines if the field type should be disabled or not.","         *","         * @attribute disabled","         * @default false","         * @type {Boolean}","         */","        disabled: {","            validator: A.Lang.isBoolean,","            value: false","        },","","        /**","         * The js class constructor to be used when instantiating this field.","         *","         * @attribute fieldClass","         * @type {Function}","         */","        fieldClass: {","            validator: A.Lang.isFunction","        },","","        /**","         * Contains a CSS class of the icon to use. A list of icons can be found","         * [here](http://liferay.github.io/alloy-bootstrap/base-css.html#icons).","         *","         * @attribute icon","         * @default ''","         * @type {String}","         */","        icon: {","            validator: A.Lang.isString,","            value: ''","        },","","        /**","         * The label of the input field.","         *","         * @attribute label","         * @default ''","         * @type {String}","         */","        label: {","            validator: A.Lang.isString,","            value: ''","        },","","        /**","         * The node used to render this field type.","         *","         * @attribute node","         * @type {Node}","         */","        node: {","            validator: function(val) {","                return A.instanceOf(val, A.Node);","            },","            valueFn: function() {","                return A.Node.create(this.TPL_FIELD_TYPE);","            }","        },","","        /**","         * Defines if the input field is unique or not.","         *","         * @attribute unique","         * @default false","         * @type {Boolean}","         */","        unique: {","            validator: A.Lang.isBoolean,","            value: false","        }","    }","});","","","}, '3.0.3-deprecated.3', {\"requires\": [\"base\", \"node-base\"], \"skinnable\": true});","","}());"]};
}
var __cov_AH6FcKt1g81ninRSoZaCRQ = __coverage__['build/aui-form-builder-field-type/aui-form-builder-field-type.js'];
__cov_AH6FcKt1g81ninRSoZaCRQ.s['1']++;YUI.add('aui-form-builder-field-type',function(A,NAME){__cov_AH6FcKt1g81ninRSoZaCRQ.f['1']++;__cov_AH6FcKt1g81ninRSoZaCRQ.s['2']++;A.FormBuilderFieldType=A.Base.create('form-builder-field-type',A.Base,[],{TPL_FIELD_TYPE:'<div class="field-type" tabindex="0"></div>',TPL_FIELD_TYPE_CONTENT:'<div class="field-type-icon {icon}"></div>'+'<div class="field-type-label">{label}</div></div>',initializer:function(){__cov_AH6FcKt1g81ninRSoZaCRQ.f['2']++;__cov_AH6FcKt1g81ninRSoZaCRQ.s['3']++;this.get('node').setHTML(A.Lang.sub(this.TPL_FIELD_TYPE_CONTENT,{icon:this.get('icon'),label:this.get('label')}));__cov_AH6FcKt1g81ninRSoZaCRQ.s['4']++;this.get('node').setData('fieldType',this);__cov_AH6FcKt1g81ninRSoZaCRQ.s['5']++;this._uiSetDisabled(this.get('disabled'));__cov_AH6FcKt1g81ninRSoZaCRQ.s['6']++;this.after({disabledChange:this._afterDisabledChange,iconChange:this._afterIconChange,labelChange:this._afterLabelChange});__cov_AH6FcKt1g81ninRSoZaCRQ.s['7']++;this.get('node').on('mouseleave',A.bind(this._onMouseLeave,this));__cov_AH6FcKt1g81ninRSoZaCRQ.s['8']++;this.get('node').on('mouseover',A.bind(this._onMouseOver,this));},destructor:function(){__cov_AH6FcKt1g81ninRSoZaCRQ.f['3']++;__cov_AH6FcKt1g81ninRSoZaCRQ.s['9']++;this.get('node').remove(true);},_afterDisabledChange:function(){__cov_AH6FcKt1g81ninRSoZaCRQ.f['4']++;__cov_AH6FcKt1g81ninRSoZaCRQ.s['10']++;this._uiSetDisabled(this.get('disabled'));},_afterIconChange:function(event){__cov_AH6FcKt1g81ninRSoZaCRQ.f['5']++;__cov_AH6FcKt1g81ninRSoZaCRQ.s['11']++;var iconNode=this.get('node').one('.field-type-icon');__cov_AH6FcKt1g81ninRSoZaCRQ.s['12']++;if(iconNode){__cov_AH6FcKt1g81ninRSoZaCRQ.b['1'][0]++;__cov_AH6FcKt1g81ninRSoZaCRQ.s['13']++;iconNode.replaceClass(event.prevVal,event.newVal);}else{__cov_AH6FcKt1g81ninRSoZaCRQ.b['1'][1]++;}},_afterLabelChange:function(){__cov_AH6FcKt1g81ninRSoZaCRQ.f['6']++;__cov_AH6FcKt1g81ninRSoZaCRQ.s['14']++;var labelElement=this.get('node').one('.field-type-label');__cov_AH6FcKt1g81ninRSoZaCRQ.s['15']++;if(labelElement){__cov_AH6FcKt1g81ninRSoZaCRQ.b['2'][0]++;__cov_AH6FcKt1g81ninRSoZaCRQ.s['16']++;labelElement.setHTML(this.get('label'));}else{__cov_AH6FcKt1g81ninRSoZaCRQ.b['2'][1]++;}},_onMouseLeave:function(){__cov_AH6FcKt1g81ninRSoZaCRQ.f['7']++;__cov_AH6FcKt1g81ninRSoZaCRQ.s['17']++;var node=this.get('node');__cov_AH6FcKt1g81ninRSoZaCRQ.s['18']++;node.one('.field-type-label').removeClass('field-type-label-mouse-over');__cov_AH6FcKt1g81ninRSoZaCRQ.s['19']++;node.one('.field-type-icon').removeClass('field-type-icon-mouse-over');},_onMouseOver:function(){__cov_AH6FcKt1g81ninRSoZaCRQ.f['8']++;__cov_AH6FcKt1g81ninRSoZaCRQ.s['20']++;var node=this.get('node');__cov_AH6FcKt1g81ninRSoZaCRQ.s['21']++;node.one('.field-type-label').addClass('field-type-label-mouse-over');__cov_AH6FcKt1g81ninRSoZaCRQ.s['22']++;node.one('.field-type-icon').addClass('field-type-icon-mouse-over');},_uiSetDisabled:function(disabled){__cov_AH6FcKt1g81ninRSoZaCRQ.f['9']++;__cov_AH6FcKt1g81ninRSoZaCRQ.s['23']++;this.get('node').toggleClass('field-type-disabled',disabled);}},{ATTRS:{defaultConfig:{validator:A.Lang.isObject,value:{}},disabled:{validator:A.Lang.isBoolean,value:false},fieldClass:{validator:A.Lang.isFunction},icon:{validator:A.Lang.isString,value:''},label:{validator:A.Lang.isString,value:''},node:{validator:function(val){__cov_AH6FcKt1g81ninRSoZaCRQ.f['10']++;__cov_AH6FcKt1g81ninRSoZaCRQ.s['24']++;return A.instanceOf(val,A.Node);},valueFn:function(){__cov_AH6FcKt1g81ninRSoZaCRQ.f['11']++;__cov_AH6FcKt1g81ninRSoZaCRQ.s['25']++;return A.Node.create(this.TPL_FIELD_TYPE);}},unique:{validator:A.Lang.isBoolean,value:false}}});},'3.0.3-deprecated.3',{'requires':['base','node-base'],'skinnable':true});
