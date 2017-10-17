

// require('babel-register')({
//     presets:['react', 'env'],
// });
//
// require.extensions['.scss'] = () => {
//     return;
// };

// require.extensions['.css'] = () => {
//     return;
// };

const express = require('express');
const router = express.Router();
// const React = require('react');
// const ReactDOMServer = require('react-dom/server');
// const Index = require('../src/components/index').default;

// Do work here
// router.get('/', (req, res) => {
//   res.send('Hey! It works!');
// });

// router.get('/', (req, res) => {
//     const html = ReactDOMServer.renderToString(
//         React.createElement(Index)
//     );
//     res.send(html);
// });

/* GET users listing. */
router.get('/users', function(req, res, next) {
    // Comment out this line:
    //res.send('respond with a resource');

    // And insert something like this instead:
    res.json([{
        id: 1,
        username: "samsepi0l"
    }, {
        id: 2,
        username: "D0loresH4ze"
    }]);
});

module.exports = router;
