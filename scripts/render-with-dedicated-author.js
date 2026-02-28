const path = require('path');
const { render } = require('songbook-md-json-parser');

render({
    prepareJson: (json, filename) => {
        json.meta = json.meta || {};
        let meta = json.meta;

        if (!meta.author && !meta["no-author"]) {
            var author = json.author && json.author[0];

            if (author) {
                var m = author.match(/by (.+)/i);
                if (m) {
                    author = m[1];
                    meta.author = author;
                }
            }
        }
    }
});
