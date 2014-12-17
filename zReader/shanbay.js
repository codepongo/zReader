delete_node_by_class('span8 center');
var article = document.getElementsByClassName('article-content')[0]
article.addEventListener("DOMSubtreeModified", function(e) {
  var finish = document.getElementsByClassName('row finish ')[0];
  if (finish != null) {
    finish.style.setProperty('display', 'none');
  }
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
  var end = document.getElementById('article-end');
  if (end) {
    end.style.setProperty('display', 'block');
  }

}, false);
