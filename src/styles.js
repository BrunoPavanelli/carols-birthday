import styled, { keyframes, css } from "styled-components";
import Bg from "./assets/white-texture.jpg";

const purples = ["#d37edc", "#c58bc5", "#a51ea5", "#c145c1", "#8e44ad"];
const setPurple = () => {
	return purples[4];
};

export const Container = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	min-width: 100vw;
	max-width: 100vw;
	min-height: 100vh;
	max-height: 100vh;
	text-align: center;
	padding: 2rem;

	overflow-y: auto;

	/* background: #E8DCE5;
  background: linear-gradient(112deg,rgba(232, 220, 229, 1) 0%, rgba(255, 255, 255, 1) 49%, rgba(232, 220, 229, 1) 100%); */

	/* background: #D37EDC;
  background: linear-gradient(112deg, rgba(211, 126, 220, 1) 0%, rgba(229, 204, 235, 1) 18%, rgba(246, 242, 245, 1) 34%, rgba(255, 255, 255, 1) 50%, rgba(246, 242, 245, 1) 66%, rgba(229, 204, 235, 1) 83%, rgba(211, 126, 220, 1) 100%); */

	/* background-image: url(${Bg});
  background-size: cover; */

	/* background: #d88be0;
  background: linear-gradient(112deg, rgba(216, 139, 224, 1) 0%, rgba(229, 204, 235, 1) 18%, rgba(246, 242, 245, 1) 34%, rgba(255, 255, 255, 1) 50%, rgba(246, 242, 245, 1) 66%, rgba(229, 204, 235, 1) 83%, rgba(216, 139, 224, 1) 100%); */

	background-image: url(${Bg}),
		linear-gradient(
			112deg,
			rgba(216, 139, 224, 1) 0%,
			rgba(229, 204, 235, 1) 18%,
			rgba(246, 242, 245, 1) 34%,
			rgba(255, 255, 255, 1) 50%,
			rgba(246, 242, 245, 1) 66%,
			rgba(229, 204, 235, 1) 83%,
			rgba(216, 139, 224, 1) 100%
		);

	filter: contrast(1) brightness(1);
	background-blend-mode: multiply;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;

	padding-bottom: 60px;
`;

export const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 600px;
`;

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

const animateGradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`;

export const Message = styled.p`
	white-space: pre-line;
	font-size: ${({ step }) => (step === 4 ? "4rem" : "1.35rem")};
	font-weight: ${({ step }) => (step === 4 ? "900" : "600")};
	color: ${setPurple()};
	text-align: center;
	transition: all 0.4s ease;
	/* line-height: 35px; */

	${({ step }) =>
		step === 4 &&
		css`
			background: linear-gradient(
				112deg,
				rgba(142, 68, 173, 1) 0%,
				rgba(173, 95, 173, 1) 18%,
				rgba(250, 232, 250, 1) 34%,
				rgba(247, 230, 247, 1) 50%,
				rgba(250, 232, 250, 1) 66%,
				rgba(173, 95, 173, 1) 83%,
				rgba(142, 68, 173, 1) 100%
			);
			background-size: 300% 300%;
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			animation: ${popUp} 0.8s ease-out, ${animateGradient} 4s linear infinite;
		`}
	z-index: 999;
`;

export const ButtonsWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	background-color: transparent;
	gap: 20px;
	transition: all 0.4s ease;
	z-index: 999;
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

	&:hover {
		transform: scale(1.05);
		box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
	}
`;
