require(["gitbook", "jquery"], function (gitbook, $) {
    var onLoad = function() {
        // var osmd = new opensheetmusicdisplay.OSMD("container-id");
        $('.musicxml').each(function() {
            var id = $(this).attr('id');
            var osmd = new opensheetmusicdisplay.OSMD(id);

            var xml = $(this).data('url');
            osmd.load(xml)
                .then(function() {
                    osmd.zoom = 0.8;
                    osmd.render();
                })
                .catch(function() {
                    console.error(err);
                });
        });
    }
  
    gitbook.events.bind("page.change", onLoad);
  });