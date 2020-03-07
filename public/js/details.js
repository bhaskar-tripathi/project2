/* eslint-disable semi */
/* eslint-disable no-undef */
$(document).ready(function () {
  google.books.load();

  $('#searchBtn').on('click', function () {
    var searchText = $('#searchText').val()
    $.ajax('/api/search/' + searchText, {
      type: 'GET'
    }).then(function (response) {
      document.open()
      document.write(response)
      document.close()
      console.log('loaded')
    })
  });
  $('.open-button').on('click', function () {
    var volumeid = $(this).data('id');
    $.ajax('/details/' + volumeid, {
      type: 'GET'
    }).then(function (response) {
      document.open()
      document.write(response);
      document.close()
      console.log('loaded')
    })
  });
  $('.add-button').on('click', function () {
    var volumeid = $(this).data('id');
    var volinfo = $(this).data('volumeinfo');
    console.log(volinfo);
    $.ajax('/api/book/' + volumeid, {
      type: 'POST',
      data: {
        title: $(this).data('title'),
        author: $(this).data('author'),
        isbn: $(this).data('isbn')
      }
    }).then(function (response) {
      console.log(response);
    })
  });

  $('#viewBook-button').on('click', function () {
    var isbn = $(this).data('isbn');
    var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
      viewer.load(`ISBN:${isbn}`);
      $('#bookViewerModal').modal('show');
  });
})
