import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { AiOutlineReload } from "react-icons/ai";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import HeartsRain from "./Components/HeartsRain";
import * as S from "./styles.js";

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
				back: false,
				restart: false,
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
			text: `Que seu ano seja maravilhoso, com muito amor e felicidade.
        E, que esse novo ciclo da sua vida te traga muitas conquistas, positividade, alegrias... 
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
        Feliz aniversário! 
        Um beijo Caroline!
      `,
			pre_action: null,
			post_action: null,
			display_by_step: true,
		},
	];
	const [displayedText, setDisplayedText] = useState("");
	const [step, setStep] = useState(0);
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
	return (
		<S.Container>
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
			</S.Wrapper>
		</S.Container>
	);
}

export default App;
