import * as S from "./styles.js";
import { SiJbl, SiF1 } from "react-icons/si";
import { GiChocolateBar, GiPerfumeBottle } from "react-icons/gi";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

const Gifts = ({ backFn }) => {
	const purples = ["#d37edc", "#c58bc5", "#a51ea5", "#c145c1", "#8e44ad"];
	const setPurple = () => {
		return purples[4];
	};

	const gifts = [
		{
			name: "Caixa JBL",
			icon: <SiJbl size={20} color="#fff" />,
			component: (
				<S.GiftWrapper>
					<S.TitleWrapper>
						<S.Title>Caixa JBL</S.Title>
						<SiJbl size={40} color={setPurple()} />
					</S.TitleWrapper>

					<S.Description>
						Bom... eu tinha dito que iria te dar uma! Já estava nos planos desde
						a primeira vez que falamos disso. Agora tu pode ouvir um som na
						varanda, quarto, tomando um banho, etc. Eu sei que você não vai
						estralar ela, mas não esquece dos vizinhos!
					</S.Description>

					<S.NextButton onClick={() => setSelectedGift(null)}>
						<IoIosArrowBack size={20} color="#fff" />
					</S.NextButton>
				</S.GiftWrapper>
			),
		},
		{
			name: "Minitatura F1",
			icon: <SiF1 size={20} color="#fff" />,
			component: (
				<S.GiftWrapper>
					<S.TitleWrapper>
						<S.Title>Minitatura F1</S.Title>
						<SiF1 size={40} color={setPurple()} />
					</S.TitleWrapper>

					<S.Description>
						Aqui é o seguinte: Eu sei o quanto você gosta de F1, e eu queria te
						dar algo para decoração da sua casa. Não sei se você vai gostar, mas
						espero que sim! Eu queria mesmo era a Mercedes do Lewis Halmiton de
						2020 que foi o ultimo ano que ele ganhou, mas a que eu achei estava
						beeeem fora de orçamento, então peguei a de 2023!
					</S.Description>

					<S.NextButton onClick={() => setSelectedGift(null)}>
						<IoIosArrowBack size={20} color="#fff" />
					</S.NextButton>
				</S.GiftWrapper>
			),
		},
		{
			name: "Chocolate Bacio",
			icon: <GiChocolateBar size={20} color="#fff" />,
			component: (
				<S.GiftWrapper>
					<S.TitleWrapper>
						<S.Title>Chocolate Bacio</S.Title>
						<GiChocolateBar size={40} color={setPurple()} />
					</S.TitleWrapper>

					<S.Description>
						Acho que aqui não preciso dizer muito... Chocolate da Bacio, e
						branco ainda... 🤤🤤🤤🤤
					</S.Description>

					<S.NextButton onClick={() => setSelectedGift(null)}>
						<IoIosArrowBack size={20} color="#fff" />
					</S.NextButton>
				</S.GiftWrapper>
			),
		},
		{
			name: "Esfoliante L'occitane ",
			icon: <GiPerfumeBottle size={20} color="#fff" />,
			component: (
				<S.GiftWrapper>
					<S.TitleWrapper>
						<S.Title>Esfoliante L'occitane </S.Title>
						<GiPerfumeBottle size={40} color={setPurple()} />
					</S.TitleWrapper>

					<S.Description>
						Então, eu fui no Bourbon esses dias comprar um perfume né... Passei
						em frente a loja da L'occitane e não consegui me segurar. Como eu já
						tinha te dado um óleo dessa linha de amêndoas, e sei que esse
						esfoliante é muito bom, acabei pegando pra completar!
					</S.Description>

					<S.NextButton onClick={() => setSelectedGift(null)}>
						<IoIosArrowBack size={20} color="#fff" />
					</S.NextButton>
				</S.GiftWrapper>
			),
		},
	];

	const [selectedGift, setSelectedGift] = useState(null);

	const handleGiftClick = (index) => {
		setSelectedGift(gifts[index]);
	};

	return (
		<S.Container>
			{!selectedGift && (
				<>
					<S.ButtonsWrapper>
						<S.NextButton onClick={() => handleGiftClick(0)}>
							{gifts[0].icon}
						</S.NextButton>
						<S.NextButton onClick={() => handleGiftClick(1)}>
							{gifts[1].icon}
						</S.NextButton>
						<S.NextButton onClick={() => handleGiftClick(2)}>
							{gifts[2].icon}
						</S.NextButton>
						<S.NextButton onClick={() => handleGiftClick(3)}>
							{gifts[3].icon}
						</S.NextButton>
					</S.ButtonsWrapper>
					<S.Back onClick={backFn}>Voltar</S.Back>
				</>
			)}
			{selectedGift && selectedGift.component}
		</S.Container>
	);
};

export default Gifts;
