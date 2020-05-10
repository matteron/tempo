const { h } = require('haipa');
require('./haipaExt');

module.exports = class Template {
    build = (data) => h().html(h()
        .head(

        )
        .body(h()
            .sidebar(data.filters)
            .main(h()
                .article()
                .footer()
            )
        )
    ).render();
}