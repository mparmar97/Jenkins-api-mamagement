const express = require('express');
const router = express.Router();
var jenkins = require('jenkins')({ baseUrl: 'http://Manasi97:admin@localhost:8081/jenkins', crumbIssuer: true });
const fs = require('fs');
var bodyParser = require("body-parser");

router.use(bodyParser.json());
//const prompt = require('prompt-sync')();

//const inc = buildno++;


//Trigger build

var arr =[];
var buildno;

router.get("/jobBuild", (req,res) => {
//buildno = buildno+1;


fs.readFile('temp.xml', 'utf8', function (err, data) {
  jenkins.job.config('jobtrial7',data, function(err) {
  if (err) throw err;

  });
  jenkins.job.build('jobtrial7', function(err,data) {
  if (err) throw err;
  else
  {

     res.send("success");
}
});
});

});

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

//fs.readFileSync('./controller/lastbuild.js');
router.post('/lastBuild',(req,res)=>{
  //const buildno = prompt('Enter the buildno?');
  jenkins.job.get('jobtrial7', function(err, data) {
  if (err) throw err;
  var i;
  var x;
//var arr =[];
for (i in data.builds) {
  x = data.builds[i].number ;
  //console.log(x);
  arr.push(x);
}
console.log(arr);

  //console.log('job', data);



  for ( i = 0; i < arr.length; i++){
    buildno = arr[i];
  jenkins.build.get('jobtrial7',buildno,function(err, data) {
    var d = new Date(data.timestamp);

    //var date ='Tue Sep 29 2020'

    if(err) throw err;
    else if(d.toDateString() == req.body.date)
    { console.log(data.result);
      console.log('build-Date', d.toDateString());
    }
    res.send("")
    /*
    else
    {console.log('no builds');}

/*
    console.log('build-result', data.result);
    console.log('build-Date', d.toDateString());
    console.log('hours-minutes-seconds', d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
*/
});
}
});


});
module.exports = router;
