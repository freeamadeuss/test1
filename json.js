var text = '{ "employees" : [' +
'{ "firstName":"John1" , "lastName":"Doe" },' +
'{ "firstName":"Anna11" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

function getObj() {
	return JSON.parse(text);
}
