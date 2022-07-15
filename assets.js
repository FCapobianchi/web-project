var cpr = require('cpr');

cpr('node_modules/bootstrap-table/dist', 'www/assets/bootstrap-table/', {
    deleteFirst: true, //Delete "to" before
    overwrite: true, //If the file exists, overwrite it
    confirm: true //After the copy, stat all the copied files to make sure they are there
}, function(err, files) {
    //err - The error if any (err.list might be available with an array of errors for more detailed information)
    //files - List of files that we copied
});

cpr('node_modules/@fortawesome/fontawesome-free', 'www/assets/fontawesome/', {
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
