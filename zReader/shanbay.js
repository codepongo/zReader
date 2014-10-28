delete_node_by_class('span8 center');
var article = document.getElementsByClassName('article-content')[0]
article.addEventListener("DOMSubtreeModified", function(e) {
  //end = document.getElementById('article-end');
  //if (end != null) {
  //  delete_node_by_id('article-end');
  //}
  var paged = document.getElementsByClassName('paged')[0];
  if (paged) {
    paged.style.setProperty('display', 'none');
  }
  if (e.srcElement.className =='page') {
    var elements = document.getElementsByClassName('page');
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.setProperty('display', 'block');
    }
  }

}, false);
