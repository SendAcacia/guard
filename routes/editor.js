var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.use('/', function (req, res) {
    console.log(req.body);
    var adata = req.body.aa;
    var adata = new Buffer(adata);
    /** * filename, 必选参数，文件名 * data, 写入的数据，可以字符或一个Buffer对象 * [options],flag,mode(权限),encoding * callback 读取文件后的回调函数，参数默认第一个err,第二个data 数据 */
    fs.writeFile(
        __dirname + '/one.md', adata, {
            flag: 'a'
        },
        function (err) {
            if (err) {
                console.error(err);
            } else {
                console.log('写入成功');
            }
        }
    );
});

module.exports = router;