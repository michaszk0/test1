dataMock = {};

dataMock.login = {
	isLogged : 10
};

dataMock.isLogged = {
	isLogged : 10
};

dataMock.register = {
    isRegistered : false
};

dataMock.setNews = {
	addedNews : true
};


dataMock.getNews = [
	{
		"id":1,
		"user_id":10
		,"title":"New user was registered:"
		,"message":"Kamil Lisowski as a Junior Sales Manager"
		,"displayed_date":"2017-06-16T22:00:00.000Z","added_date":"2017-06-16T22:00:00.000Z"
	},
	{
		"id":2,
		"user_id":10,
		"title":"Michał Kamiński is absent today",
		"message":"","displayed_date":"2017-06-16T22:00:00.000Z",
		"added_date":"2017-06-16T22:00:00.000Z"
	},
	{
		"id":3,
		"user_id":10,
		"title":"Google Tag Manager's training",
		"message":"Hi, today we'll be having a Google Tag Manager's training at 12, in a conference room \"Tukan\"",
		"displayed_date":"2017-06-16T22:00:00.000Z",
		"added_date":"2017-06-16T22:00:00.000Z"
	},
	{
		"id":3,
		"user_id":10,
		"title":"Development Workee",
		"message":"",
		"displayed_date":"2017-06-15T22:00:00.000Z",
		"added_date":"2017-06-15T22:00:00.000Z"
	}
	];

dataMock.setAbsence = {
	addedAbsence : true
};

dataMock.getAbsence = [
	{
		"id" : 1,
		"user_id" : 10,
		"user_name" : 10,
		"title" : 'L4',
		"date" : '2017-06-16T22:00:00.000Z'
	},
	{
		"id" : 2,
		"user_id" : 10,
		"title" : 'OTHER',
		"date" : '2017-06-16T22:00:00.000Z'
	},
	{
		"id" : 3,
		"user_id" : 10,
		"title" : 'VACATION',
		"date" : '2017-06-16T22:00:00.000Z'
	}
];

dataMock.getUser = {
	id : '10',
	name : 'Michał',
	surname : 'Kamiński',
	email : 'michal.kaminski@workee.pl',
	password : 'gjkrheoglsr$fesg2@R$gr2rfeGRE.greg',
	phone : '668536876',
	position : 'Accountant',
	website : 'http://michalkaminski.pl',
	desk : '60',
	scope : 'Bills, invoices, bookkeeping',
	birthday : '2017-05-12',
	interests : 'Movies, horror stories, football',
	photo: 'Michał_Kamiński1497617137946.jpg'
};

dataMock.getUsers = [
	{
		id : '1',
		name : 'Michał',
		surname : 'Kamiński',
		email : 'michal.kaminski@workee.pl',
		phone : '668536876',
		position : 'Accountant',
		website : 'http://michalkaminski.pl',
		desk : '60',
		scope : 'Bills, invoices, bookkeeping',
		birthday : '2017-05-12',
		interests : 'Movies, horror stories, football.',
		photo: 'Michał_Kamiński1497617137946.jpg'
	},
	{
		id : '2',
		name : 'Paulina',
		surname : 'Markowska',
		email : 'markowskai@workee.pl',
		tel : '987952457',
		phone : '668536876',
		position : 'accountant',
		website : 'http://test.pl',
		desk : '60',
		scope : 'grafika',
		birthday : '2017-05-12',
		interests : 'interests',
		photo: ''
	},
	{
		id : '3',
		name : 'Jan',
		surname : 'Kowalski',
		email : 'jan.kowalski@workee.pl',
		tel : '87455545',
		position : 'accountant',
		photo: ''
	},
	{
		id : '4',
		name : 'Adam',
		surname : 'Małysz',
		email : 'nowak.nowak@workee.pl',
		tel : '64984549889',
		position : 'accountant',
		photo: ''
	},	{
		id : '5',
		name : 'Jan',
		surname : 'Nowak',
		email : 'nowak.nowak@workee.pl',
		tel : '64984549889',
		position : 'accountant',
		photo: ''
	},	{
		id : '6',
		name : 'Marilyn',
		surname : 'Monroe',
		email : 'Marilyn.Monroe@workee.pl',
		tel : '58457846847',
		position : 'accountant',
		photo: ''
	},	{
		id : '7',
		name : 'Abraham',
		surname : 'Lincoln',
		email : 'Abraham.Lincoln@workee.pl',
		tel : '746875875',
		position : 'accountant',
		photo: ''
	},	{
		id : '9',
		name : 'Nelson',
		surname : 'Mandela',
		email : 'Nelson.Mandela@workee.pl',
		tel : '8768746986',
		position : 'accountant',
		photo: ''
	},	{
		id : '10',
		name : 'Bill',
		surname : 'Gates',
		email : 'Bill.Gates@workee.pl',
		tel : '28787687287',
		position : 'accountant',
		photo: ''
	},	{
		id : '11',
		name : 'Muhammad',
		surname : 'Ali',
		email : 'Muhammad.Ali@workee.pl',
		tel : '2576846687687',
		position : 'accountant',
		photo: ''
	},	{
		id : '12',
		name : 'Margaret',
		surname : 'Thatcher',
		email : 'margaret.thatcher@workee.pl',
		tel : '287345687',
		position : 'accountant',
		photo: ''
	}
];
