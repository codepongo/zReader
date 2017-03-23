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
  delete_node_by_class('FeedbackButton-button-3waL');
  delete_node_by_class('QuestionMainDivider');
  delete_node_by_class('List');
  delete_node_by_class('QuestionMainAction');
}


delete_node_by_tag('header');
delete_node_by_class('QuestionHeader-side');
delete_node_by_class_when_event('QuestionHeader-side');
delete_node_by_class_when_event('Sticky QuestionHeader-footer is-bottom');
delete_node_by_class('QuestionHeader-footer');
delete_node_by_class('Question-sideColumn');
delete_node_by_class('CornerButtons');
delete_node_by_class_when_event('QuestionMainDivider');
delete_node_by_class_when_event('List');
delete_node_by_class_when_event('QuestionMainAction');
getElementsByClassName('QuestionHeader-main')[0].style.width='100%';
getElementsByClassName('Question-mainColumn')[0].style.width='100%';
//getElementsByClassName(
getElementsByClassName('QuestionHeader')[0].style.borderBottom='0';
getElementsByClassName('QuestionHeader')[0].style.boxShadow = '0 0 0 0';
getElementsByClassName('Question-mainColumn')[0].style.width = '100%';
getElementsByClassName('Card').forEach(function(e) {
  console.log(e);
  e.style.border='0px';
  e.style.borderColor='black';
  e.style.boxShadow = '0 0 0 0';
});
delete_node_by_class_when_event('ContentItem-actions Sticky is-bottom');
delete_node_by_class_when_event('ContentItem-actions');
getElementsByClassName('Button QuestionRichText-more Button--plain')[0].click();
