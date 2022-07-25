export interface IZipcode {
	cep: string;
	logradouro: string;
	complemento: string;
	bairro: string;
	localidade: string;
	uf: string;
}

export interface IZipcodeError {
	error: string;
	message: string;
	statusCode: number;
}
