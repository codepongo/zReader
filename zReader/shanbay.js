var article = document.getElementsByClassName('article-content')[0]
article.addEventListener("DOMSubtreeModified", function(e) {
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
