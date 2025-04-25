import styled, { keyframes } from "styled-components";

const popUp = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  60% {
    opacity: 1;
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const purples = ["#d37edc", "#c58bc5", "#a51ea5", "#c145c1", "#8e44ad"];
const setPurple = () => {
	return purples[4];
};

const choosePurple = (index) => {
	return purples[index];
};

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	max-width: 290px;
	gap: 10px;
`;

export const ButtonsWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	max-width: 290px;
	background-color: transparent;
	/* gap: 20px; */
	transition: all 0.4s ease;
	z-index: 999;
	/* animation: ease-in-out ${popUp} 0.75s; */
`;

export const NextButton = styled.button`
	background-color: ${() => setPurple()};
	opacity: ${({ disabled }) => (disabled ? 0.33 : 1)};
	border: none;
	padding: 1rem;
	border-radius: 999px;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.45);
	cursor: pointer;
	transition: all 0.3s ease;
	display: flex;
	align-items: center;
	justify-content: center;
	animation: ease-in-out ${popUp} 0.75s;

	&:hover {
		transform: scale(1.05);
		box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
	}
`;

export const GiftWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	width: 100%;
	max-width: 600px;
	gap: 20px;

	text-align: right;
	text-justify: distribute-all-lines;
`;

export const TitleWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;

	svg {
		animation: ease-in-out ${popUp} 0.75s;
	}
`;

export const Title = styled.h1`
	font-size: 1.5rem;
	font-weight: 600;
	color: ${setPurple()};
	text-align: center;
	margin: 0;
	text-decoration: underline;
	text-align: left;
`;

export const Description = styled.p`
	font-size: 1.2rem;
	font-weight: 400;
	color: ${setPurple()};
	text-align: center;
	margin: 0;
`;

export const Back = styled.span`
	font-size: 0.8rem;
	color: ${choosePurple(1)};
	text-decoration: underline;
	cursor: pointer;

	align-self: flex-start;
`;
