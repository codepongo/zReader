//cnblogs archive
delete_node_by_id('header');
delete_node_by_id('leftmenu');
delete_node_by_id('mytopmenu');
delete_node_by_id('mylinks');
delete_node_by_id('leftcontent');
delete_node_by_id('site_nav_under');
delete_node_by_id('google_ad_c1');
delete_node_by_id('under_post_news');
delete_node_by_id('google_ad_c2');
delete_node_by_id('under_post_kb');
var content = document.getElementById('content')
if (content != null) {
  content.style.marginLeft = '0px';
}
 centercontent = document.getElementById('centercontent');
if (centercontent != null) {
 centercontent.style.paddingRight = '0px';
}
