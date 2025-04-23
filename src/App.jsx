import * as S from "./styles.js";
import { QRCodeSVG } from "qrcode.react";
import { BsEnvelopeHeartFill, BsEnvelopeHeart } from "react-icons/bs";
import { TiHeartOutline } from "react-icons/ti";
import { GiChainedHeart } from "react-icons/gi";
import { GiMineralHeart } from "react-icons/gi";
import { GiOppositeHearts } from "react-icons/gi";
import { BsArrowThroughHeartFill } from "react-icons/bs";

import { GiPartyPopper } from "react-icons/gi";

function App() {
	return (
		<S.Container>
			<S.BorderWrapper>
				<S.QRCodeWrapper>
					<QRCodeSVG
						value="https://carolsbirthday.vercel.app/"
						fgColor="#fff"
						bgColor={S.choosePurple(4)}
						level="Q"
						style={{ width: S.qrSize, height: S.qrSize }}
					/>
					{/* <S.EmojiOverlay>💟</S.EmojiOverlay> */}
					{/* <S.EmojiOverlay>💜</S.EmojiOverlay> */}
					{/* <S.EmojiOverlay>🌷</S.EmojiOverlay> */}

					{/* <S.EmojiOverlay><BsEnvelopeHeartFill /></S.EmojiOverlay> */}

					{/* <S.EmojiOverlay>
						<BsEnvelopeHeart />
					</S.EmojiOverlay> */}

					{/* <S.EmojiOverlay>
						<TiHeartOutline />
					</S.EmojiOverlay> */}

					{/* Melhor ate entao */}
					<S.EmojiOverlay>
						<GiChainedHeart />
					</S.EmojiOverlay>

					{/* <S.EmojiOverlay>
						<BsArrowThroughHeartFill />
					</S.EmojiOverlay> */}
				</S.QRCodeWrapper>
			</S.BorderWrapper>
		</S.Container>
	);
}

export default App;
