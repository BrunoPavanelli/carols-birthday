import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { AiOutlineReload } from "react-icons/ai";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import HeartsRain from "./Components/HeartsRain";
import * as S from "./styles.js";

function App() {
	const texts = [
		{
			text: `Oi dona Carol!\n Espero que você esteja bem :)
      `,
			pre_action: null,
			post_action: null,
			display_by_step: true,
		},
		{
			text: `Fiz esse sitezinho simples para
        te parabenizar já que hoje é seu aniversário! \n
        É realmente bem simples, mas é uma maneira que encontei de fazer algo diferente.
      `,
			pre_action: null,
			post_action: null,
			display_by_step: true,
		},
		{
			text: `Espero que goste! \n
      Assim como espero que goste dos presentes...\n
      São apenas bens materias e não expressam o que sinto por você, mas que te dou com muito carinho e de coração.
    `,
			pre_action: null,
			post_action: null,
			display_by_step: true,
		},
		{
			text: `Enfim!\n
        É seu aniversário então...
      `,
			pre_action: null,
			post_action: () =>
				setTimeout(() => {
					handleNextClick();
				}, 500),
			display_by_step: true,
			disable_all_buttons: true,
		},
		{
			text: "PARABÉNS",
			pre_action: () => launchFireworks(),
			post_action: null,
			display_by_step: false,
		},
		{
			text: `Que seu ano seja repleto de amor, sorrisos e momentos incríveis. 💜\n
        Um beijo!\n
        Aproveite seu dia :)
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

		setLoading(true);
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
			}, 70);
		}

		if (!display_by_step) {
			setDisplayedText(text);
			setLoading(false);
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
							loading || backDisabledCondition || conditionToDisableAllButtons
						}
					>
						<IoIosArrowBack size={20} color="#fff" />
					</S.NextButton>
					<S.NextButton
						onClick={() => handleRestartClick()}
						disabled={
							loading || backDisabledCondition || conditionToDisableAllButtons
						}
					>
						<AiOutlineReload size={20} color="#fff" />
					</S.NextButton>
					<S.NextButton
						onClick={() => handleNextClick()}
						disabled={
							loading || nextDisabledCondition || conditionToDisableAllButtons
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
