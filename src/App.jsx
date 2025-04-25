import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { AiOutlineReload } from "react-icons/ai";
import { useEffect, useState } from "react";

import { PiWarningFill } from "react-icons/pi";
import confetti from "canvas-confetti";
import HeartsRain from "./Components/HeartsRain";
import * as S from "./styles.js";
import Gifts from "./Components/Gifts/index.jsx";

function App() {
	const texts = [
		{
			text: `Oi dona Carol!
      Espero que você esteja bem :)
      `,
			pre_action: null,
			post_action: null,
			display_by_step: true,
		},
		{
			text: `Bom.. Eu fiz esse sitezinho para
        te dar os parabéns já que hoje é seu aniversário!\n
        É bem simples, nada de mais, apenas uma lembraça, mas é feito de coração.
      `,
			pre_action: null,
			post_action: null,
			display_by_step: true,
		},
		{
			text: `Espero que goste! 
      Assim como espero que goste dos presentes...\n
      São apenas bens materiais e não chegam a expressar o que sinto por você, mas que te dou com muito carinho.
    `,
			pre_action: null,
			post_action: null,
			display_by_step: true,
		},
		{
			text: `Enfim!
        É seu aniversário, então...
      `,
			pre_action: null,
			post_action: () =>
				setTimeout(() => {
					handleNextClick();
				}, 700),
			display_by_step: true,
			disable_all_buttons: {
				back: true,
				restart: true,
				next: true,
			},
			not_load: true,
		},
		{
			text: "PARABÉNS",
			pre_action: () => launchFireworks(),
			post_action: null,
			display_by_step: false,
		},
		{
			text: `Que seu ano seja maravilhoso, com muito amor e felicidade.\n
        E, que esse novo ciclo da sua vida te traga muitas conquistas, alegrias, positividade... \n
        Enfim! Tudo de melhor que essa vida possa te dar. 💜
      `,
			pre_action: null,
			post_action: null,
			display_by_step: true,
		},
		{
			text: `
        Você merece muito!
        Você é uma pessoa incrível... Forte, leal e sincera. Uma mulher inteligente e de coração enorme. 
        As vezes me pego até sem jeito quando te vejo...\n
        De verdade, você é incrível!
      `,
			pre_action: null,
			post_action: null,
			display_by_step: true,
		},
		{
			text: `
        Então é isso, aproveite seu dia :)
        Feliz aniversário!\n
        Um beijo Caroline!
      `,
			pre_action: null,
			post_action: null,
			display_by_step: true,
		},
	];
	const [displayedText, setDisplayedText] = useState("");
	const [step, setStep] = useState(0);
	const [componentStep, setComponentStep] = useState(0);
	const [secondComponentStep, setSecondComponentStep] = useState(0);
	const [loading, setLoading] = useState(true);

	const launchFireworks = () => {
		const duration = 5 * 1000;
		const animationEnd = Date.now() + duration;
		const defaults = {
			startVelocity: 30,
			spread: 360,
			ticks: 60,
			zIndex: 1000,
		};

		const interval = setInterval(() => {
			const timeLeft = animationEnd - Date.now();

			if (timeLeft <= 0) {
				return clearInterval(interval);
			}

			confetti({
				...defaults,
				particleCount: 100,
				origin: {
					x: Math.random(),
					y: Math.random() - 0.2,
				},
			});
		}, 250);
	};

	useEffect(() => {
		let index = 0;
		const { text, pre_action, post_action, display_by_step } = texts[step];

		if (!texts[step].not_load) setLoading(true);
		if (pre_action) pre_action();

		let interval;
		if (display_by_step) {
			interval = setInterval(() => {
				setDisplayedText(text.slice(0, index + 1));
				index++;

				if (index === text.length) {
					setLoading(false);
					clearInterval(interval);
					if (post_action) post_action();
				}
			}, 80);
		}

		if (!display_by_step) {
			setDisplayedText(text);
			if (step === 4) {
				setLoading(true);
				setTimeout(() => {
					setLoading(false);
				}, 5500);
			} else setLoading(false);
		}

		return () => interval && clearInterval(interval);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [step]);

	const nextDisabledCondition = step === texts.length - 1;
	const handleNextClick = () => {
		if (nextDisabledCondition) return;
		setStep((prev) => prev + 1);
	};

	const backDisabledCondition = step === 0;
	const handleBackClick = () => {
		if (backDisabledCondition) return;
		setStep((prev) => prev - 1);
	};

	const handleRestartClick = () => {
		if (backDisabledCondition) return;
		setStep(0);
	};

	const conditionToDisableAllButtons = texts[step].disable_all_buttons;

	const handleNoButtonClick = () => {
		setSecondComponentStep(1);
	};

	const handleYesButtonClick = () => {
		setSecondComponentStep(2);
	};

	const handleSecondComponentBackButtonClick = () => {
		setSecondComponentStep(0);
		setComponentStep(0);
	};

	const handleBackInGifts = () => {
		setComponentStep(0);
		setSecondComponentStep(0);
	};

	const getSecondComponentComponet = () => {
		if (secondComponentStep === 0)
			return (
				<>
					<S.Wrapper>
						<PiWarningFill size={40} color={S.setPurple()} />
						{/* <S.Message>Opa!</S.Message> */}
						<S.Message>
							Aqui só pode continuar se já tiver visto os presentes...
						</S.Message>
						<S.Message>Você já viu os presentes?</S.Message>
						<S.ButtonsWrapper>
							<S.Button onClick={handleYesButtonClick}>Sim</S.Button>
							<S.Button onClick={handleNoButtonClick}>Não</S.Button>
						</S.ButtonsWrapper>
					</S.Wrapper>
				</>
			);

		if (secondComponentStep === 1)
			return (
				<>
					<S.Wrapper>
						<S.Message>Hmmm... 🤔</S.Message>
						<S.Message>
							Então volta lá, veja tudo bonitinho e ai volte aqui!
						</S.Message>
						<S.ButtonsWrapper>
							<S.Button onClick={handleSecondComponentBackButtonClick}>
								Voltar
							</S.Button>
						</S.ButtonsWrapper>
					</S.Wrapper>
				</>
			);

		if (secondComponentStep === 2) return <Gifts backFn={handleBackInGifts} />;
	};

	const conditionToRenderMoreInfo = !loading && step === texts.length - 1;

	const getComponent = () => {
		if (componentStep === 0)
			return (
				<>
					{step === 4 && <HeartsRain />}
					<S.Wrapper>
						<S.Message step={step}>{displayedText}</S.Message>
						<S.ButtonsWrapper>
							<S.NextButton
								onClick={() => handleBackClick()}
								disabled={
									loading ||
									backDisabledCondition ||
									conditionToDisableAllButtons?.back
								}
							>
								<IoIosArrowBack size={20} color="#fff" />
							</S.NextButton>
							<S.NextButton
								onClick={() => handleRestartClick()}
								disabled={
									loading ||
									backDisabledCondition ||
									conditionToDisableAllButtons?.restart
								}
							>
								<AiOutlineReload size={20} color="#fff" />
							</S.NextButton>
							<S.NextButton
								onClick={() => handleNextClick()}
								disabled={
									loading ||
									nextDisabledCondition ||
									conditionToDisableAllButtons?.next
								}
							>
								<IoIosArrowForward size={20} color="#fff" />
							</S.NextButton>
						</S.ButtonsWrapper>
						{conditionToRenderMoreInfo && (
							<S.MoreInfo onClick={() => setComponentStep(1)}>
								Mais informações
							</S.MoreInfo>
						)}
					</S.Wrapper>
				</>
			);

		if (componentStep === 1) return getSecondComponentComponet();
	};

	return <S.Container>{getComponent()}</S.Container>;
}

export default App;
