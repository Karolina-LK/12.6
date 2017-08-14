var url1 = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
 	var countryName = $('#country-name').val();
if(!countryName.length) countryName = 'Poland';
 
 $.ajax({
  		url: url1 + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});  
}


function showCountriesList(resp) {
  	countriesList.empty();
  console.log(resp);
resp.forEach(function(item) {  		$('<li>').text(item.name).appendTo(countriesList);
$('<li>').text(item.capital).appendTo(countriesList);
});
}

