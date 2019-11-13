import $filters from "@/utils/filters.js";


let plugins = {};
plugins.install = function(Vue) {

  // component 组件
  // ...

  // directive 指令
  Vue.directive('focus', {
    inserted: function(el) {
      el.focus();
    }
  });

  // filter 过滤器
  Object.keys($filters).forEach(filterName => {
    Vue.filter(filterName, $filters[filterName])
  });

}

export default plugins