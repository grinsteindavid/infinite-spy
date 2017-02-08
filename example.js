(function() {

  var container = $('#albums-container');
  var loading = false;

  var callback = function() {
    if (loading) {return};

    loading = true;
    ajaxLoading.open();
    $.ajax({
      url: '/path/to/file',
      type: 'GET',
      success: function(data, textStatus, xhr) {
        $.each(data.albums, function(index, album) {
          container.append(`
            <a title="caption for image 1" href="`+ album.url +`" class="col-xs-6 col-sm-6 col-md-4 col-lg-4" style="padding: 0">
              <img class="img-thumbnail" src="`+ album.url +`" width="100%">
            </a>
          `);
        });
        updatePhotoContainer();
        loading = false;
        ajaxLoading.close();
      },
      error: function(xhr, textStatus, errorThrown) {
        //called when there is an error
      }
    });
  };

  var main = function() {
    infiniteSpy({
      offset: 250,
      callback: callback
    });
  };

  return render(container, main);
})();
