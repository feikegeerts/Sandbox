(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['animals-template'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<li class=\"animal\">"
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + " says "
    + alias4(((helper = (helper = helpers.sound || (depth0 != null ? depth0.sound : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sound","hash":{},"data":data}) : helper)))
    + "</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<ul>\n";
  stack1 = ((helper = (helper = helpers.animals || (depth0 != null ? depth0.animals : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"animals","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},options) : helper));
  if (!helpers.animals) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</ul>";
},"useData":true});
templates['footer-template'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"footer_wrapper\">\n	<div class=\"content\">\n		<p><a href=\"/\">Home</a></p>\n		<p>Copyright © 2015-2016 feikgeerts.nl - All Rights Reserved.</p>\n	</div>\n</div>";
},"useData":true});
templates['header-template'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"pageHeader_wrapper\">\n    <div class=\"menuBar\">\n    	<h1><a href=\"/index.html\" class=\"noDecoration\">Feike Geerts</a></h1>\n    </div>\n</div>\n\n";
},"useData":true});
})();