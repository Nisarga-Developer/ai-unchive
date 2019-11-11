export class AIAReader {
  static read(content) {
    zip.createReader(content instanceof Blob ? new zip.BlobReader(content) : new zip.HttpReader(content), (reader) => {
      reader.getEntries((entries) => {
        if (entries.length) {
          entries[0].getData(new zip.TextWriter(), function(text) {
            console.log(text);
            reader.close(function() {
              // onclose callback
            });
          }, function(current, total) {
            // onprogress callback
          });
        }
      });
    }, function(error) {
      // onerror callback
    });
  }
}
