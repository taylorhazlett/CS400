let express = require('express');
let router = express.Router();

router.route('/')
    .get((req,res,next)=> {
        res.render('index', { string: 'the best site ever' });
    })
    .post((req,res,next) => {
        res.render('post_pg',
            {
                original: req.body.str,
                len: (req.body.str).length //str.length
            });

    });

module.exports = router;