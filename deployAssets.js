var cpr = require('cpr');

cpr('node_modules/bootstrap-table/dist', 'www/assets/bootstrap-table/', {
    deleteFirst: true, //Delete "to" before
    overwrite: true, //If the file exists, overwrite it
    confirm: true //After the copy, stat all the copied files to make sure they are there
}, function(err, files) {
    //err - The error if any (err.list might be available with an array of errors for more detailed information)
    //files - List of files that we copied
});

cpr('node_modules/@fortawesome/fontawesome-free/css/', 'www/assets/fontawesome/css/', {
  deleteFirst: true, //Delete "to" before
  overwrite: true, //If the file exists, overwrite it
  confirm: true //After the copy, stat all the copied files to make sure they are there
}, function(err, files) {
  //err - The error if any (err.list might be available with an array of errors for more detailed information)
  //files - List of files that we copied
});

cpr('node_modules/@fortawesome/fontawesome-free/js/', 'www/assets/fontawesome/js/', {
  deleteFirst: true, //Delete "to" before
  overwrite: true, //If the file exists, overwrite it
  confirm: true //After the copy, stat all the copied files to make sure they are there
}, function(err, files) {
  //err - The error if any (err.list might be available with an array of errors for more detailed information)
  //files - List of files that we copied
});

cpr('node_modules/@fortawesome/fontawesome-free/webfonts/', 'www/assets/fontawesome/webfonts/', {
  deleteFirst: true, //Delete "to" before
  overwrite: true, //If the file exists, overwrite it
  confirm: true //After the copy, stat all the copied files to make sure they are there
}, function(err, files) {
  //err - The error if any (err.list might be available with an array of errors for more detailed information)
  //files - List of files that we copied
});

cpr('node_modules/jquery/dist', 'www/assets/jquery/', {
  deleteFirst: true, //Delete "to" before
  overwrite: true, //If the file exists, overwrite it
  confirm: true //After the copy, stat all the copied files to make sure they are there
}, function(err, files) {
  //err - The error if any (err.list might be available with an array of errors for more detailed information)
  //files - List of files that we copied
});

cpr('node_modules/jquery-ui/dist', 'www/assets/jquery-ui/', {
  deleteFirst: true, //Delete "to" before
  overwrite: true, //If the file exists, overwrite it
  confirm: true //After the copy, stat all the copied files to make sure they are there
}, function(err, files) {
  //err - The error if any (err.list might be available with an array of errors for more detailed information)
  //files - List of files that we copied
});

cpr('node_modules/js-cookie/dist', 'www/assets/js-cookie/', {
  deleteFirst: true, //Delete "to" before
  overwrite: true, //If the file exists, overwrite it
  confirm: true //After the copy, stat all the copied files to make sure they are there
}, function(err, files) {
  //err - The error if any (err.list might be available with an array of errors for more detailed information)
  //files - List of files that we copied
});


cpr('node_modules/moment/dist', 'www/assets/moment/', {
  deleteFirst: true, //Delete "to" before
  overwrite: true, //If the file exists, overwrite it
  confirm: true //After the copy, stat all the copied files to make sure they are there
}, function(err, files) {
  //err - The error if any (err.list might be available with an array of errors for more detailed information)
  //files - List of files that we copied
});

cpr('node_modules/@popperjs/core/dist/cjs', 'www/assets/popperjs/', {
  deleteFirst: true, //Delete "to" before
  overwrite: true, //If the file exists, overwrite it
  confirm: true //After the copy, stat all the copied files to make sure they are there
}, function(err, files) {
  //err - The error if any (err.list might be available with an array of errors for more detailed information)
  //files - List of files that we copied
});

cpr('node_modules/nette-forms/src/assets', 'www/assets/nette/', {
  deleteFirst: true, //Delete "to" before
  overwrite: true, //If the file exists, overwrite it
  confirm: true //After the copy, stat all the copied files to make sure they are there
}, function(err, files) {
  //err - The error if any (err.list might be available with an array of errors for more detailed information)
  //files - List of files that we copied
});

cpr('node_modules/nette.ajax.js/nette.ajax.js', 'www/assets/nette/nette.ajax.js', {
  deleteFirst: true, //Delete "to" before
  overwrite: true, //If the file exists, overwrite it
  confirm: true //After the copy, stat all the copied files to make sure they are there
}, function(err, files) {
  //err - The error if any (err.list might be available with an array of errors for more detailed information)
  //files - List of files that we copied
});

cpr('node_modules/nette.ajax.js/extensions', 'www/assets/nette/extensions', {
  deleteFirst: true, //Delete "to" before
  overwrite: true, //If the file exists, overwrite it
  confirm: true //After the copy, stat all the copied files to make sure they are there
}, function(err, files) {
  //err - The error if any (err.list might be available with an array of errors for more detailed information)
  //files - List of files that we copied
});

cpr('node_modules/bootstrap/dist/', 'www/assets/bootstrap', {
  deleteFirst: true, //Delete "to" before
  overwrite: true, //If the file exists, overwrite it
  confirm: true //After the copy, stat all the copied files to make sure they are there
}, function(err, files) {
  //err - The error if any (err.list might be available with an array of errors for more detailed information)
  //files - List of files that we copied
});

cpr('node_modules/daterangepicker/daterangepicker.js', 'www/assets/daterangepicker/daterangepicker.js', {
  deleteFirst: true, //Delete "to" before
  overwrite: true, //If the file exists, overwrite it
  confirm: true //After the copy, stat all the copied files to make sure they are there
}, function(err, files) {
  //err - The error if any (err.list might be available with an array of errors for more detailed information)
  //files - List of files that we copied
});

cpr('node_modules/daterangepicker/daterangepicker.css', 'www/assets/daterangepicker/daterangepicker.css', {
  deleteFirst: true, //Delete "to" before
  overwrite: true, //If the file exists, overwrite it
  confirm: true //After the copy, stat all the copied files to make sure they are there
}, function(err, files) {
  //err - The error if any (err.list might be available with an array of errors for more detailed information)
  //files - List of files that we copied
});
