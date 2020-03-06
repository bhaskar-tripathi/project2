/* eslint-disable no-undef */
$(document).ready(function () {
  $('#searchBtn').on('click', function () {
    var searchText = $('#searchText').val()
    $.ajax('/api/search/:' + searchText, {
      type: 'GET'
      // data: devouredState
    }).then(function (response) {
      document.open()
      document.write(response)
      document.close()
      console.log('loaded')
    })
  })
})
