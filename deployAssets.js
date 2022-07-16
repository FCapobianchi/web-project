var cpr = require('cpr');

cpr('node_modules/bootstrap-table/dist', 'www/assets/bootstrap-table/', {
    deleteFirst: true,
    overwrite: true,
    confirm: true
}, function(err, files) {});

cpr('node_modules/@fortawesome/fontawesome-free/css/', 'www/assets/fontawesome/css/', {
  deleteFirst: true,
  overwrite: true,
  confirm: true
}, function(err, files) {});

cpr('node_modules/@fortawesome/fontawesome-free/js/', 'www/assets/fontawesome/js/', {
  deleteFirst: true,
  overwrite: true,
  confirm: true
}, function(err, files) {});

cpr('node_modules/@fortawesome/fontawesome-free/webfonts/', 'www/assets/fontawesome/webfonts/', {
  deleteFirst: true,
  overwrite: true,
  confirm: true
}, function(err, files) {});

cpr('node_modules/jquery/dist', 'www/assets/jquery/', {
  deleteFirst: true,
  overwrite: true,
  confirm: true
}, function(err, files) {});

cpr('node_modules/jquery-ui/dist', 'www/assets/jquery-ui/', {
  deleteFirst: true,
  overwrite: true,
  confirm: true
}, function(err, files) {});

cpr('node_modules/js-cookie/dist', 'www/assets/js-cookie/', {
  deleteFirst: true,
  overwrite: true,
  confirm: true
}, function(err, files) {});


cpr('node_modules/moment/dist', 'www/assets/moment/', {
  deleteFirst: true,
  overwrite: true,
  confirm: true
}, function(err, files) {});

cpr('node_modules/@popperjs/core/dist/cjs', 'www/assets/popperjs/', {
  deleteFirst: true,
  overwrite: true,
  confirm: true
}, function(err, files) {});

cpr('node_modules/nette-forms/src/assets', 'www/assets/nette/', {
  deleteFirst: true,
  overwrite: true,
  confirm: true
}, function(err, files) {});

cpr('node_modules/nette.ajax.js/nette.ajax.js', 'www/assets/nette/nette.ajax.js', {
  deleteFirst: true,
  overwrite: true,
  confirm: true
}, function(err, files) {});

cpr('node_modules/nette.ajax.js/extensions', 'www/assets/nette/extensions', {
  deleteFirst: true,
  overwrite: true,
  confirm: true
}, function(err, files) {});

cpr('node_modules/bootstrap/dist/', 'www/assets/bootstrap', {
  deleteFirst: true,
  overwrite: true,
  confirm: true
}, function(err, files) {});

cpr('node_modules/daterangepicker/daterangepicker.js', 'www/assets/daterangepicker/daterangepicker.js', {
  deleteFirst: true,
  overwrite: true,
  confirm: true
}, function(err, files) {});

cpr('node_modules/daterangepicker/daterangepicker.css', 'www/assets/daterangepicker/daterangepicker.css', {
  deleteFirst: true,
  overwrite: true,
  confirm: true
}, function(err, files) {});

cpr('.gitignore-sample', '.gitignore', {
  deleteFirst: true,
  overwrite: true,
  confirm: true
}, function(err, files) {});