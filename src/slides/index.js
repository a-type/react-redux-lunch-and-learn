let slides = [];

var req = require.context('./components', true, /\.js$/);
req.keys().map((key) => {
    slides.push(req(key).default);
});

export default slides;