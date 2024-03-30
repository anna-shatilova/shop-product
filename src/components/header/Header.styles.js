import styled from 'styled-components'
import { Button } from '../../App.styles'

export const Header = styled.header``

export const HeaderTop = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
`

export const HeaderLogo = styled.a``

export const LogoImg = styled.img`
  width: 144px;
  height: 28px;
  margin-top: 10px;
  margin-left: 24px;
`

export const HeaderButton = styled(Button)`
  width: 128px;
  height: 48px;
  display: flex;
  gap: 12px;
`

export const ButtonSvg = styled.svg`
  width: 24px;
  height: 24px;
`

export const ButtonText = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
  margin-top: 5px;
`

export const HeaderSearch = styled.div`
  display: flex;
  align-items: center;
`

export const SearchInput = styled.input`
  position: relative;
  width: 731px;
  height: 48px;
  padding: 8px 12px 8px 16px;
  border-radius: 8px;
  border: 1px solid #e1e5eb;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;

  &:hover {
    border: 1px solid #828ead;
  }
  &:focus {
    border: 2px solid #1551e5;
    box-shadow: 0px 0px 6px 0px #bac4e0;
  }
`

export const SearchSvg = styled.svg`
  position: absolute;
  width: 24px;
  height: 24px;
  margin-left: 695px;
`

export const SearchSvgClose = styled(SearchSvg)`
  margin-left: 659px;
`

export const HeaderGroupSvg = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`

export const SvgBell = styled.svg`
  width: 32px;
  height: 32px;
`

export const SvgLine = styled.svg`
  width: 0px;
  height: 48px;
  border: 1px solid #e2e4f0;
`

export const SvgLike = styled.svg`
  width: 32px;
  height: 32px;
`

export const HeaderButtonCart = styled.button`
  width: 148px;
  height: 48px;
  padding: 12px 24px 12px 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 8px;
  background: #f2f6ff;
`

export const ButtonSvgCart = styled.svg`
  width: 24px;
  height: 24px;
`

export const ButtonTextCart = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  color: #1551e5;
`

export const HeaderUserBlock = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`

export const UserImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 8px;
`

export const UserName = styled.div`
  font-family: 'Gotham Pro';
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  color: #071435;
`

export const UserOptionsSvg = styled.svg`
  width: 24px;
  height: 24px;
`

export const HeaderLineSvg = styled.svg`
  width: 1600px;
  height: 0px;
  border: 1px solid #e2e4f0;
`

export const HeaderNav = styled.nav`
  height: 56px;
  padding: 20px 0px 20px 24px;
  display: flex;
  justify-content: space-between;
`

export const NavMenu = styled.div`
`

export const MenuList = styled.ul`
  display: flex;
  gap: 24px;
  align-items: center;
`

export const MenuItem = styled.li``

export const MenuLink = styled.a`
  font-family: 'Gotham Pro';
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  color: #071435;
`

export const NavBlock = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`

export const ButtonNav = styled.button`
  width: 159px;
  height: 32px;
  padding: 8px 12px 8px 12px;
  border-radius: 4px;
  background: #f2f6ff;
  display: flex;
  gap: 8px;
`
export const ButtonNavSvg = styled.svg`
  width: 16px;
  height: 16px;
`

export const ButtonNavText = styled.div`
  font-family: 'Gotham Pro';
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  color: #1551e5;
`
export const ElementPromoNav = styled.div`
  width: 79px;
  height: 16px;
  display: flex;
  gap: 16px;
`
export const PromoSvg = styled.svg`
  width: 16px;
  height: 16px;
`

export const PromoText = styled.div`
  font-family: 'Gotham Pro';
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  color: #1551e5;
`

export const ElementNav = styled.div`
  font-family: 'Gotham Pro';
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  color: #1551e5;
`
