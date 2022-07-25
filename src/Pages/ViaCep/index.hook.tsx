import { AxiosError } from 'axios';
import { IZipcode, IZipcodeError } from 'Interfaces/IServices';
import { useEffect, useState } from 'react';
import { getAllZipcodes } from 'Services/getViaCep';

export function useViaCep() {
	const [inputZipcode, setInputZipcode] = useState('');
	const [zipcode, setZipcode] = useState<IZipcode>();
	const [loading, setLoading] = useState(false);
	const [hasText, setHasText] = useState(false);
	const [zipcodeError, setZipcodeError] = useState('');

	async function handleSetZipcodes() {
		try {
			setLoading(true);
			const _zipcode = await getAllZipcodes(inputZipcode);

			setZipcode(_zipcode);
			setZipcodeError('');
			setLoading(false);
		} catch (error) {
			setLoading(false);
			const err = error as AxiosError;
			const dataErr = err.response?.data as IZipcodeError;
			setZipcode(undefined);
			return setZipcodeError(dataErr.message);
		}
	}

	useEffect(() => {
		if ((isNaN(Number(inputZipcode)) || !inputZipcode) && inputZipcode.length > 0) {
			setHasText(true);
		} else {
			setHasText(false);
		}
	}, [inputZipcode]);

	return { zipcode, handleSetZipcodes, loading, setInputZipcode, inputZipcode, hasText, zipcodeError };
}
