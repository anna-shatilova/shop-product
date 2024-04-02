import { BlockButton } from '../block-button/BlockButton'
import * as S from './Main.styles'

export const Main = () => {
  return (
    <S.Main>
      <S.UnderHeaderNav>
        <S.UpperNav>
          <S.UpperNavList>
            <S.UpperNavLink href="#">Каталог</S.UpperNavLink>
          </S.UpperNavList>
          <S.UpperNavList>
            <S.UpperNavLink href="#">Обувь</S.UpperNavLink>
          </S.UpperNavList>
          <S.UpperNavList>
            <S.UpperNavLink href="#">Кроссовки</S.UpperNavLink>
          </S.UpperNavList>
          <S.UpperNavList>
            <S.UpperNavLink href="#">Беговые</S.UpperNavLink>
          </S.UpperNavList>
        </S.UpperNav>
      </S.UnderHeaderNav>
      <S.TitleProduct>КPOCCОВКИ МУЖСКИЕ SKECHERS SUNNY DALE</S.TitleProduct>
      <S.Product>
        <S.ProductCarousel>
          <S.CarouselImg
            src="/img/product-main.png"
            alt="product"
          ></S.CarouselImg>
          <S.CarouselMain>
            <S.CarouseButtonSvg>
              <use xlinkHref="/img/icons/sprite.svg#icon-carouse-start" />
            </S.CarouseButtonSvg>
            <S.CarouselBar>
              <S.CarouselBarImg
                src="/img/product1.png"
                alt="product"
              ></S.CarouselBarImg>
              <S.CarouselBarImg
                src="/img/product2.png"
                alt="product"
              ></S.CarouselBarImg>
              <S.CarouselBarImg
                src="/img/product3.png"
                alt="product"
              ></S.CarouselBarImg>
              <S.CarouselBarImg
                src="/img/product4.png"
                alt="product"
              ></S.CarouselBarImg>
            </S.CarouselBar>
            <S.CarouseButtonSvg>
              <use xlinkHref="/img/icons/sprite.svg#icon-carouse-end" />
            </S.CarouseButtonSvg>
          </S.CarouselMain>
        </S.ProductCarousel>

        <S.ProductContent>
          <S.ContentTop>
            <S.TopBlock>
              <S.BlockPrice>
                <S.PriceWithoutPromo>
                  166 534.00 цена без скидки
                </S.PriceWithoutPromo>
                <S.PriceWithPromo>
                  <S.Price>122 566 ₽</S.Price>
                  <S.PricePromoSvg>
                    <use xlinkHref="/img/icons/sprite.svg#icon-price-promo" />
                  </S.PricePromoSvg>
                </S.PriceWithPromo>
              </S.BlockPrice>
              <S.BlockQuantity>
                <S.Quantity>12 штук в уп.</S.Quantity>
                <S.QuantityOption>
                  <S.OptionToggleSvg>
                    <use xlinkHref="/img/icons/sprite.svg#icon-toggle" />
                  </S.OptionToggleSvg>
                  <S.OptionContent>Заказ упаковкой</S.OptionContent>
                </S.QuantityOption>
              </S.BlockQuantity>
              <S.TopBlockSvg>
                <use xlinkHref="/img/icons/sprite.svg#icon-line-top-block" />
              </S.TopBlockSvg>
              <S.BlockDelivery>
                <S.DeliveryElement>
                  <S.ElContent>Завтра</S.ElContent>
                  <S.ElName>Доставка</S.ElName>
                </S.DeliveryElement>
                <S.DeliveryElement>
                  <S.ElContent>7 шт.</S.ElContent>
                  <S.ElName>Тарасовка</S.ElName>
                </S.DeliveryElement>
                <S.DeliveryElement>
                  <S.ElContent>7 шт.</S.ElContent>
                  <S.ElName>Тарасовка</S.ElName>
                </S.DeliveryElement>
              </S.BlockDelivery>
              <BlockButton />
            </S.TopBlock>
            <S.TopSvg>
              <use xlinkHref="/img/icons/sprite.svg#icon-content-top-line" />
            </S.TopSvg>
            <S.TopProperties>
              <S.PropertiesHeading>Характеристики</S.PropertiesHeading>
              <S.PropertiesBlock>
                <S.PropertiesElement>
                  <S.ElementHeading>ELC00696</S.ElementHeading>
                  <S.ElementContent>Код поставщика</S.ElementContent>
                </S.PropertiesElement>
                <S.PropertiesElement>
                  <S.ElementHeading>ELC00696</S.ElementHeading>
                  <S.ElementContent>Код РАЭК</S.ElementContent>
                </S.PropertiesElement>
                <S.PropertiesElement>
                  <S.ElementHeading>Electric used</S.ElementHeading>
                  <S.ElementContent>Бренд</S.ElementContent>
                </S.PropertiesElement>
                <S.PropertiesElement>
                  <S.ElementHeading>ELC0200000696</S.ElementHeading>
                  <S.ElementContent>Код производителя</S.ElementContent>
                </S.PropertiesElement>
                <S.PropertiesElement>
                  <S.ElementHeading>ELC0200000696</S.ElementHeading>
                  <S.ElementContent>Артикул</S.ElementContent>
                </S.PropertiesElement>
                <S.PropertiesElement>
                  <S.ElementHeading>ELC00696</S.ElementHeading>
                  <S.ElementContent>Код ЕТМ</S.ElementContent>
                </S.PropertiesElement>
                <S.PropertiesElement>
                  <S.ElementHeading>ELC00696</S.ElementHeading>
                  <S.ElementContent>Серия</S.ElementContent>
                </S.PropertiesElement>
              </S.PropertiesBlock>
            </S.TopProperties>
          </S.ContentTop>
          <S.ContentDescription>
            <S.DescriptionHeading>Описание товара</S.DescriptionHeading>
            <S.DescriptionProduct>
              Создание приверженного покупателя специфицирует неопровержимый
              комплексный анализ ситуации. CTR существенно индуцирует из ряда
              вон выходящий SWOT-анализ. Воздействие на потребителя определяет
              возрастающий интеграл по поверхности, что известно даже
              школьникам. Отсюда естественно следует, что коммуникация
              уравновешивает косвенный фактор коммуникации. Поле направлений
              естественно допускает экспериментальный скачок функции, таким
              образом сбылась мечта идиота - утверждение полностью доказано.
              Арифметическая прогрессия притягивает линейно зависимый пул
              лояльных изданий.
            </S.DescriptionProduct>
          </S.ContentDescription>
        </S.ProductContent>
      </S.Product>
    </S.Main>
  )
}
