delete_node_by_class_when_event('recommend-posts ng-scope');
delete_node_by_id('header');
delete_node_by_class('Layout-navbarHolder');
delete_node_by_class_when_event('PostComment');
delete_node_by_class_when_event('PostIndex-footer');
delete_node_by_class_when_event('PostIndex-recommendZone');
delete_node_by_class_when_event('Contributes PostIndex-contributes av-card')
delete_node_by_class_when_event('PostIndex-recommendZone av-card')
if (window.onload == null) {
  on_load = function(){};
}
else {
  on_load = window.onload;
}
window.onload = function() {
  on_load();
  document.addEventListener('DOMNodeInserted',function(){
    var _el = document.getElementsByTagName('main');
    if (_el.length != 0) {
      _el = _el[0].getElementsByTagName('div');
      if (_el[0] == undefined) {
        return;
      }
      _el = _el[0].getElementsByTagName('article');
      if (_el[0] == undefined) {
        return;
      }
      _el = _el[0].getElementsByTagName('footer');
      if (_el[0] == undefined) {
        return;
      }
      delete_node(_el[0]);
      document.removeEventListener('DOMNodeInserted', arguments.callee, false);
    }
  },false);
}
