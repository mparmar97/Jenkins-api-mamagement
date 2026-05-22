const express = require('express');
const app = express();
const fs = require('fs');
//const controller = require('./controller/route');
const controller1 = require('./controller/jobcreation');
const controller2 = require('./controller/trigger');
//const controller3 = require('./controller/lastbuild');
const xmledit = require('./editxml');
var jenkins = require('jenkins')({ baseUrl: 'http://Manasi97:admin@localhost:8081/jenkins', crumbIssuer: true });


  fs.truncate('./temp.xml',function(){
    console.log('done');
  });
/*
fs.readFile('temp.xml', 'utf8', function (err, data) {
  jenkins.job.config('jobtrial6', data, function(err) {
  if (err) throw err;

});
});
*/



xmledit.xmlfile();
//controller1.jobcreate();
jenkins.job.exists('jobtrial7',function(err, data) {
  if (err) throw err;



/*  console.log('jobs*****************************', data);*/
  if(data){
    //console.log('abc');
   fs.readFileSync('./controller/trigger.js');
  }
  else{

    fs.readFileSync('./controller/jobcreation.js');
  }
});



app.use('/controller1',controller1 );
app.use('/controller2',controller2 );
const PORT = process.env.PORT || 8088;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
