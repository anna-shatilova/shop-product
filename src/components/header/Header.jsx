import * as S from './Header.styles'

export const Header = () => {
  return (
    <>
      <S.Header>
        <S.HeaderTop>
          <S.HeaderLogo href="./index.html">
            <S.LogoImg
              src="/img/logo.svg"
              alt="logo"
            />
          </S.HeaderLogo>
          <S.HeaderButton>
            <S.ButtonSvg>
              <use xlinkHref="/img/icons/sprite.svg#icon-menu" />
            </S.ButtonSvg>
            <S.ButtonText>Меню</S.ButtonText>
          </S.HeaderButton>
          <S.HeaderSearch>
            <S.SearchInput
              type="search"
              placeholder="Название запроса"
              name="search"
            />
            <S.SearchSvgClose>
              <use xlinkHref="/img/icons/sprite.svg#icon-close" />
            </S.SearchSvgClose>
            <S.SearchSvg>
              <use xlinkHref="/img/icons/sprite.svg#icon-search" />
            </S.SearchSvg>
          </S.HeaderSearch>
          <S.HeaderGroupSvg>
            <S.SvgBell>
              <use xlinkHref="/img/icons/sprite.svg#icon-bell" />
            </S.SvgBell>
            <S.SvgLine>
              <use xlinkHref="/img/icons/sprite.svg#icon-line" />
            </S.SvgLine>
            <S.SvgLike>
              <use xlinkHref="/img/icons/sprite.svg#icon-like" />
            </S.SvgLike>
          </S.HeaderGroupSvg>
          <S.HeaderButtonCart>
            <S.ButtonSvgCart>
              <use xlinkHref="/img/icons/sprite.svg#icon-cart" />
            </S.ButtonSvgCart>
            <S.ButtonTextCart>144 235₽</S.ButtonTextCart>
          </S.HeaderButtonCart>
          <S.HeaderUserBlock>
            <S.UserImg src={'/img/user-avatar.png'}></S.UserImg>
            <S.UserName>Ермаков Е.</S.UserName>
            <S.UserOptionsSvg>
              <use xlinkHref="/img/icons/sprite.svg#icon-arrow" />
            </S.UserOptionsSvg>
          </S.HeaderUserBlock>
        </S.HeaderTop>
        <S.HeaderLineSvg>
          <use xlinkHref="/img/icons/sprite.svg#icon-header-line" />
        </S.HeaderLineSvg>
        <S.HeaderNav>
          <S.NavMenu>
            <S.MenuList>
              <S.MenuItem key={1}>
                <S.MenuLink href="#">Мои заказы</S.MenuLink>
              </S.MenuItem>
              <S.MenuItem key={2}>
                <S.MenuLink href="#">Сотрудники</S.MenuLink>
              </S.MenuItem>
              <S.MenuItem key={3}>
                <S.MenuLink href="#">Шаблоны заказов</S.MenuLink>
              </S.MenuItem>
              <S.MenuItem key={4}>
                <S.MenuLink href="#">Обращения</S.MenuLink>
              </S.MenuItem>
            </S.MenuList>
          </S.NavMenu>

          <S.NavBlock>
            <S.ButtonNav>
              <S.ButtonNavSvg>
                <use xlinkHref="/img/icons/sprite.svg#icon-message-circle" />
              </S.ButtonNavSvg>
              <S.ButtonNavText>Ваш менеджер</S.ButtonNavText>
            </S.ButtonNav>
            <S.ElementPromoNav>
              <S.PromoSvg>
                <use xlinkHref="/img/icons/sprite.svg#icon-promo" />
              </S.PromoSvg>
              <S.PromoText>Акции</S.PromoText>
            </S.ElementPromoNav>
            <S.ElementNav>Блог</S.ElementNav>
          </S.NavBlock>
        </S.HeaderNav>
        <S.HeaderLineSvg>
          <use xlinkHref="/img/icons/sprite.svg#icon-header-line" />
        </S.HeaderLineSvg>
      </S.Header>
    </>
  )
}

