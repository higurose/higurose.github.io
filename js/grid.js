// auto grid layout
// var msnry = new Masonry( '#grid', {
var $grid = $('#grid').masonry({
  columnWidth: 200,
  gutter: 10,
  itemSelector: '#grid a'
});

// re-layout grid after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});

// make image popup box on click image
$('#grid').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery : {
  	enabled: true
  }
});