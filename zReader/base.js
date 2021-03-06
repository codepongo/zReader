var $ = document.querySelectorAll.bind(document);
function delete_node_by_tag(tag) {
  var el = document.getElementsByTagName(tag);
  for (var i = 0; i < el.length; i++) {
    delete_node(el[i]);
  }
}

function getElementsByClassName(n) { 
    var el = [],
        _el = document.getElementsByTagName('*');
    for (var i=0; i<_el.length; i++ ) {
       if (_el[i].className == n ) {
           el[el.length] = _el[i];
        }
   }
   return el;
}
function delete_node_by_class(c) {
 var nodes = getElementsByClassName(c);
 if (nodes.length == 0) {
   console.log(c + ' is null');
 }
	for (var i =0; i < nodes.length; i++) {
		delete_node(nodes[i]);
	}
}
function delete_node_by_id(id) {
	var node = document.getElementById(id);
	delete_node(node);
}
function delete_node(node) {
	if (node == null) {
		console.log('null');
		return;
	}
	if (node.hasOwnProperty('parentNode') == null) {
		console.log('no parent');
		return;
	}
	node.parentNode.removeChild(node);
}

function delete_node_by_tag(tag) {
    var _el = document.getElementsByTagName(tag);
    if (_el.length == 0) {
      console.log(tag + ' is null');
    }
    for (var i=0; i<_el.length; i++ ) {
      delete_node(_el[i]);
    }
}
function delete_node_by_class_when_event(c) {
  document.addEventListener('DOMNodeInserted',function(){
    var nodes = getElementsByClassName(c);
    if (nodes.length == 0) {
      return
    }
    for (var i =0; i < nodes.length; i++) {
      delete_node(nodes[i]);
    }
    document.removeEventListener('DOMNodeInserted', arguments.callee, false);
  },false);
}
