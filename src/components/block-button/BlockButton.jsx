import { useState } from 'react'
import * as S from './BlockButton.styles'

export const BlockButton = () => {
  const [isChangeButton, setIsChangeButton] = useState(false)
  const [count, setCount] = useState(0)

  const handlerCounterMinus = (quantity, event) => {
    if (count === 0) return
    event.nativeEvent.stopPropagation()
    return setCount(quantity - 1)
  }

  const handlerCounterPlus = (quantity, event) => {
    event.nativeEvent.stopPropagation()
    return setCount(quantity + 1)
  }

  const definitionWordEnding = (number, txt, cases = [2, 0, 1, 1, 1, 2]) =>
    txt[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ]
    
  return (
    <S.BlockButton>
      <S.ButtonChange onClick={() => setIsChangeButton(!isChangeButton)}>
        {isChangeButton ? (
          <S.ButtonCounter>
            <S.CounterProduct
              onClickCapture={(event) => handlerCounterMinus(count, event)}
            >
              <S.CounterSvg>
                <use xlinkHref="/img/icons/sprite.svg#icon-minus" />
              </S.CounterSvg>
            </S.CounterProduct>
            <S.CounterCenter>
              {count} шту{definitionWordEnding(count, ['ка', 'ки', 'к'])}
            </S.CounterCenter>
            <S.CounterProduct
              onClickCapture={(event) => handlerCounterPlus(count, event)}
            >
              <S.CounterSvg>
                <use xlinkHref="/img/icons/sprite.svg#icon-plus" />
              </S.CounterSvg>
            </S.CounterProduct>
          </S.ButtonCounter>
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
