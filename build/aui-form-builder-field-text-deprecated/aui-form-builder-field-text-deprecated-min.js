YUI.add("aui-form-builder-field-text-deprecated",function(e,t){var n=e.Lang,r=e.Escape,i=e.getClassName,s=i("form","control"),o=i("field","input"),u=i("field","input","text"),a=i("form-builder-field"),f=i("form-builder-field","node"),l='<div class="form-builder-field-wrapper"><input id="{id}" class="'+[f,o,u,s].join(" ")+'" name="{name}" type="text" value="{value}" /></div>',c={small:"col-xs-4",medium:"col-xs-8",large:"col-xs-12"},h=e.Component.create({NAME:"form-builder-text-field",ATTRS:{template:{valueFn:function(){return l}},width:{validator:function(t){return t=e.Lang.String.toLowerCase(t),t in c},value:"small"}},CSS_PREFIX:a,EXTENDS:e.FormBuilderField,prototype:{getHTML:function(){var e=this;return n.sub(e.get("template"),{id:r.html(e.get("id")),label:r.html(e.get("label")),name:r.html(e.get("name")),value:r.html(e.get("predefinedValue")),width:r.html(e.get("width"))})},getPropertyModel:function(){var t=this,n=t.getStrings(),r=e.FormBuilderTextField.superclass.getPropertyModel.apply(t,arguments);return r.push({attributeName:"width",editor:new e.RadioCellEditor({options:{small:n.small,medium:n.medium,large:n.large}}),formatter:function(e){return n[e.data.value]},name:n.width}),r},_uiSetWidth:function(e){var t=this,n=t.get("templateNode");n.removeClass(c[t.prevWidth]),n.addClass(c[e]),t.prevWidth=e}}});e.FormBuilderTextField=h,e.FormBuilderField.types.text=e.FormBuilderTextField},"3.0.3-deprecated.3",{requires:["aui-form-builder-field-deprecated"]});
