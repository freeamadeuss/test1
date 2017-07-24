var text = '{ "employees" : [' +
'{ "firstName":"Joh88n1" , "lastName":"Doe" },' +
'{ "firstName":"Anna1221" , "lastName":"Sm88ith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

function getObj() {
	return JSON.parse(text);
}
