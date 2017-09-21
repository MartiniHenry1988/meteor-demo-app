Meteor.startup(function () {

  fs            = Npm.require('fs');
  qr            = Meteor.npmRequire('qr-image');  
  bcrypt        = Meteor.npmRequire('bcrypt');
  GCM           = Meteor.npmRequire('gcm').GCM; 
  nodemailer    = Meteor.npmRequire('nodemailer');
  smtpTransport = Meteor.npmRequire('nodemailer-smtp-transport');
  mailSender    = nodemailer.createTransport(smtpTransport({

      host: 'the_host',
      port: 123,
      secure: true, // use SSL
      auth: {
        user: 'user@abc.com',
        pass: '123456'
      }
    }
  ));
  apn           = Meteor.npmRequire('apn');
  nodeGcm       = Meteor.npmRequire('node-gcm');

  Log           = new Logger();


  // REWRITING URL DATA
  WebApp.connectHandlers.use(function(req, res, next) {

      var re = new RegExp('^\\/'+'.uploads~'+'\\/(.*)$').exec(req.url);

      if (re !== null) {

        var filePath = process.env["PWD"] + '/my/private/uploads/dir/' + re[1];
        
        if (!fs.existsSync(filePath) || !fs.lstatSync(filePath).isFile()) {

            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.write("404 Not Found\n");
            res.end();
            return;
        }

        var data = fs.readFileSync(filePath);

        res.writeHead(200, {'Content-Type': 'image'});
        res.write(data);
        res.end();          
      }
      else { next();/* Other urls will have default behaviors*/  }
  });

});