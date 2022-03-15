let departure_date_input = document.getElementById('search_bar-form-departure_date');
let arrive_date_input = document.getElementById('search_bar-form-arrive_date');

let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1; 
let yyyy = today.getFullYear();

if (dd < 10) {
   dd = '0' + dd;
}

if (mm < 10) {
   mm = '0' + mm;
} 
    
today = yyyy + '-' + mm + '-' + dd;

departure_date_input.setAttribute('min', today);
arrive_date_input.setAttribute('min', today);
departure_date_input.value = today;
arrive_date_input.value = today;

departure_date_input.addEventListener('change', () => {
	arrive_date_input.setAttribute('min', departure_date_input.value);
	if (departure_date_input.value > arrive_date_input.value) {
		arrive_date_input.value = departure_date_input.value;
	}	
});

