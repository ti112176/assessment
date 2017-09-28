/**
 * アセスメントレポジトリ
 */
var fs = require('fs');
var cloudant;
var dbCredentials = {};
var vcapServices = {};

//cloudantのデータベース名
dbCredentials.dbName = 'assessment';

//process.env.VCAP_SERVICESの有無によりBluemix下での稼動かどうかを判定
//Bluemix下でない場合は、ローカルのvcap-local.jsonの情報を元に同等の情報を生成。
if (process.env.VCAP_SERVICES) {
    vcapServices = JSON.parse(process.env.VCAP_SERVICES);
} else {
    vcapServices = JSON.parse(fs.readFileSync("./vcap-local.json", "utf-8"));
}

//VCAP_SERVICESからcloudantへのアクセス情報を取得。
for (var vcapService in vcapServices) {
    if (vcapService.match(/cloudant/i)) {
        dbCredentials.url = vcapServices[vcapService][0].credentials.url;
    }
}

//cloudantのアクセスクライアント生成（cloudantを使用。実体はnanoらしい。。）
cloudant = require('cloudant')(dbCredentials.url);

cloudant.db.create(dbCredentials.dbName, function(err, res) {
    if (err) {
        //console.log('Could not create new db: ' + dbCredentials.dbName + ', it might already exist.');
    }else{
        console.log('db: ' + dbCredentials.dbName + ', created.');
    }
});

//cloudantに接続
module.exports.db = cloudant.use(dbCredentials.dbName);

//crud operations
module.exports.create = function(data, callback){
    this.db.insert(data, callback);
};

module.exports.read = function(id, callback){
    this.db.get(id, callback);
};

module.exports.update = function(data, callback){
    this.db.insert(data, callback);
};

module.exports.del = function(id, rev, callback){
    this.db.destroy(id, rev, callback);
};
