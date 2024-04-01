import { useState } from 'react'
import * as S from './BlockButton.styles'

export const BlockButton = () => {
  const [isChangeButton, setIsChangeButton] = useState(false)
  
  return (
    <S.BlockButton>
      <S.ButtonChange onClick={() => setIsChangeButton(!isChangeButton)}>
        {isChangeButton ? (
          <> </>
        ) : (
          <S.ButtonBuy>
            <S.ButtonBuySvg>
              <use xlinkHref="/img/icons/sprite.svg#icon-buy-cart" />
            </S.ButtonBuySvg>
            <S.ButtonBuyText>В корзину</S.ButtonBuyText>
          </S.ButtonBuy>
        )}
      </S.ButtonChange>
      <S.ButtonLike>
        <S.ButtonLikeSvg>
          <use xlinkHref="/img/icons/sprite.svg#icon-buy-like" />
        </S.ButtonLikeSvg>
      </S.ButtonLike>
    </S.BlockButton>
  )
}
