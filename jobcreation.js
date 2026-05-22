const express = require('express');
const router = express.Router();
//const app = express();
const fs = require('fs');
var jenkins = require('jenkins')({ baseUrl: 'http://Manasi97:admin@localhost:8081/jenkins', crumbIssuer: true });




//Job Creation



router.get("/api", (req, res) => {





  fs.readFile('temp.xml', 'utf8', function (err, data) {
  jenkins.job.create('jobtrial7', data, function (err,data1) {
      if (err) throw err;
      else{
      res.send("succeess");
      }
    });
  });



});
fs.readFileSync('./controller/trigger.js');
/*module.exports ={
    jobcreate : function(){
      router.get("/api", (req, res) => {





        fs.readFile('temp.xml', 'utf8', function (err, data) {
        jenkins.job.create('job2', data, function (err,data1) {
            if (err) throw err;
            else{
            res.send("succeess");
            }
          });
        });



      });
}
}*/
module.exports =router;
