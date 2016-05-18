/*Get Home Page*/
module.exports.index = function (req, res) {
	res.render('index',{title: 'MainPage'});
};
//static
module.exports.about = function (req, res) {
	res.sendfile('public/static/about.html', {title: 'About'});
};
//static
module.exports.howto = function (req, res) {
	res.sendfile('public/static/howto.html',{title: 'How To Play'});
};
//static
module.exports.references = function (req, res) {
	res.sendfile('public/static/references.html',{title: 'references'});
};
//dynamic
module.exports.game = function (req, res) {
	res.render('game',{title: 'GamePage'});
};

//dynamic
module.exports.dynamic_test = function (req, res) {
	res.render('dynamic_test',{title: 'TEST', heading: 'HELLO WORLD', value: 2, description: 'This is description'});
};