import { useViaCep } from './index.hook';
import { Button, Container, Form, Input, LoadingSec, Section, SectionError } from './index.styled';

export function ViaCep() {
	const { zipcode, handleSetZipcodes, loading, inputZipcode, setInputZipcode, hasText, zipcodeError } = useViaCep();

	return (
		<Container>
			<Form
				onSubmit={(event) => {
					event.preventDefault();
					handleSetZipcodes();
				}}
			>
				<Section>
					<Input
						className={hasText ? 'error' : ''}
						maxLength={9}
						placeholder={`Digite o CEP sem "-"`}
						value={inputZipcode}
						onChange={(e) => setInputZipcode(e.currentTarget.value)}
					/>
					<Button type="submit">Buscar cep</Button>
				</Section>
			</Form>

			{loading && <LoadingSec />}

			{zipcode && (
				<Section key={zipcode.cep}>
					<label>
						<strong>CEP:</strong> {zipcode.cep}
					</label>
					<label>
						<strong>Logradouro:</strong> {zipcode.logradouro}
					</label>
					<label>
						<strong>Bairro:</strong> {zipcode.bairro}
					</label>
					<label>
						<strong>Localidade:</strong> {zipcode.localidade}
					</label>
					<label>
						<strong>UF:</strong> {zipcode.uf}
					</label>
				</Section>
			)}

			{zipcodeError && <SectionError>{zipcodeError}</SectionError>}
		</Container>
	);
}
