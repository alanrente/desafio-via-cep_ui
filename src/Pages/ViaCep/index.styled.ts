import styled from 'styled-components';

export const Container = styled.div`
	padding: 1rem;
	min-width: 140px;
	margin: 0.5rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	gap: 0.5rem;
`;

export const Form = styled.form`
	display: contents;
`;

export const Section = styled.div`
	border: solid;
	border-radius: 25px;

	width: 80%;
	max-width: 500px;
	padding: 0.5rem;

	min-height: 150px;
	min-width: 150px;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;

	background-color: #fff;
`;

export const SectionError = styled(Section)`
	background-color: #fff !important;
	color: rgb(250, 0, 0);

	min-height: 70px;

	font-size: 24px;
	font-weight: 600;
`;

export const Input = styled.input`
	background-color: #e0e0e0;
	border: #033649 solid 3px;

	width: 80%;
	min-height: 1.25rem;
	border-radius: 15px;

	text-align: center;

	outline: none;

	:focus {
		border: rgb(0, 200, 150) solid;
	}

	&.error {
		border: rgb(250, 0, 0) solid !important;
	}

	@media (max-width: 300px) {
		width: 90%;
	}
`;

export const Button = styled.button`
	background-color: #033649;
	color: #fff;

	width: 50%;
	min-height: 35px;

	border-radius: 15px;
	border: none;

	font-weight: bold;

	cursor: pointer;

	:active {
		box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 70%);
		width: 45%;
	}

	:hover {
		box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 70%);
	}

	@media (max-width: 300px) {
		width: 100%;
	}
`;

export const LoadingSec = styled.div`
	height: 10px;

	background-color: rgb(0, 100, 100);

	border-radius: 10px;

	display: flex;
	align-self: flex-start;

	animation: toRight 3s infinite;

	@keyframes toRight {
		from {
			width: 40px;
		}
		to {
			width: 100%;
		}
	}
`;
