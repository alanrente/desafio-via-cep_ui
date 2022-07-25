import axios from 'axios';

export async function getAllZipcodes(_zipcode: string) {
	if (!_zipcode) return;
	const axiosReq = await axios.get(`/zipcodes/${_zipcode}`);

	const { data } = axiosReq;

	const _zipcodes = data;

	return _zipcodes;
}
