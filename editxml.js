const fs = require('fs');
var xmlpoke = require('xmlpoke');


var old_file = fs.readFileSync('./config.xml');
module.exports = {
  xmlfile : function(){

fs.writeFile('./temp.xml', old_file, (err) => {
  if (err) console.log(err);
  console.log("Successfully Written to File.");
  xmlpoke('temp.xml', function(xml) {
    //xml.set({'project/builders/hudson.tasks.BatchFile/command':'javac Trial2.java','project/builders/hudson.tasks.BatchFile/command':'java Trial2'});
      //xml.set('project/builders/hudson.tasks.BatchFile/command','javac Trial.java');
      xml.add('project/builders/hudson.tasks.BatchFile',xml.XmlString('<command>javac Hello.java</command>'));
      xml.add('project/builders/hudson.tasks.BatchFile',xml.XmlString('<command>java Hello</command>'));
      //xml.add('project/builders/hudson.tasks.BatchFile/command',xml.XmlString('javac Trial.java'));
      //xml.add('project/builders/hudson.tasks.BatchFile/command',xml.XmlString('java Trial'));
  });
});


  }

}
