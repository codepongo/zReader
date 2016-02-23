delete_node_by_class('zu-top');
delete_node_by_class('zh-answers-title');
delete_node_by_class('more-awesome');
delete_node_by_class('awesome-answer-list');
delete_node_by_class('zu-main-sidebar');
delete_node_by_class('zh-backtotop');
delete_node_by_id('question-status');

if (window.onload == null) {
  on_load = function(){};
}
else {
  on_load = window.onload;
}
window.onload = function() {
  on_load();
  delete_node_by_class('zm-votebar goog-scrollfloater');
  delete_node_by_class('comment-app-holder');
}
