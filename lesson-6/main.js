const date = '2020-11-26';

const newDate = function(dateString) {
  return dateString.replace(/(\d{4})-(\d{1,2})-(\d{1,2})/g, '$3.$2.$1');
}
console.log(newDate(date));


const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

const getMatches = function(str) {
	return data.reduce((newArr, Object) => {
		const string = `${Object.country}, ${Object.city}, ${Object.hotel}`;
		if ((new RegExp(str, 'gim')).test(string)) {
			newArr.push(string);
		}
		return newArr;
	}, []);
}
console.log(getMatches('Berlin'));