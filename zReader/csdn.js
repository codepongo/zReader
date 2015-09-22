//csdn blog
delete_node_by_id('side');
delete_node_by_id('header');
delete_node_by_id('navigator');
delete_node_by_id('csdn-toolbar-id');
delete_node_by_id('bdshare'); 
delete_node_by_id('ad_cen');
delete_node_by_id('pub_footerall');
delete_node_by_id('comment_bar');
delete_node_by_id('comment_form');
delete_node_by_class('notice tracking-ad');
delete_node_by_class('csdn-toolbar csdn-toolbar-skin-black ');
delete_node_by_class('toolbar-tpl-scriptId');
delete_node_by_class('tag_list');
delete_node_by_class('article_next_prev');
delete_node_by_class('blog-associat-tag');
delete_node_by_class('blog-ass-articl tracking-ad');
delete_node_by_class('tracking-ad');
m = document.getElementById('main');
if (m != null) {
	m.setAttribute('id', '');
}
document.body.style.background='url("")';
m = document.getElementById('container');
if (m != null) {
	m.style.background = 'url("")';
}
delete_node_by_id('tag-suggest-pop');
delete_node_by_id('im_popupWindow_miniMsg');
delete_node_by_class('tools');
