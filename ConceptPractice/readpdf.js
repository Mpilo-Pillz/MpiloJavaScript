var fs = require("fs");
 var PdfReader = require('pdfreader').PdfReader;
  fs.readFile("maystatement.pdf", (err, pdfBuffer) => {
    // pdfBuffer contains the file content
    new PdfReader().parseBuffer(pdfBuffer, function(err, item){
       if (err)
           callback(err);
        else if (!item)
            callback();
         else if (item.text)
            console.log(item.text);
          });
       });