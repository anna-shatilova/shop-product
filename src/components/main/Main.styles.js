import styled from 'styled-components'

export const Main = styled.main`
  max-width: 1600px;
  margin: 0 auto;
`

export const UnderHeaderNav = styled.div`
  margin-top: 32px;
  margin-right: 24px;
  margin-left: 24px;
  margin-bottom: 24px;
`

export const UpperNav = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

export const UpperNavList = styled.li`
  &:not(:last-child):after {
    content: '/';
    padding: 0 4px 0 8px;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: #828ead;
  }
`

export const UpperNavLink = styled.a`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #828ead;

  &:hover {
    text-decoration: underline;
  }
`

export const TitleProduct = styled.h2`
  margin-left: 24px;
  font-family: 'Gotham Pro';
  font-size: 32px;
  font-weight: 400;
  line-height: 32px;
  color: #071435;
`
export const Product = styled.div`
  display: flex;
  gap: 48px;
  padding: 32px 24px 32px 24px;
`
export const ProductFoto = styled.div``
export const ProductCarousel = styled.div``
export const CarouselImg = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 16px;
`
export const CarouselMain = styled.div`
  display: flex;
  gap: 16px;
  padding-top: 24px;
`

export const CarouseButtonSvg = styled.svg`
  width: 38px;
  height: 64px;
`
export const CarouselBar = styled.div`
  display: flex;
  gap: 12px;
`
export const CarouselBarImg = styled.img`
  width: 64px;
  height: 64px;
`

export const ProductContent = styled.div``

export const ContentTop = styled.div`
  display: flex;
  gap: 48px;
  margin-top: 24px;
  margin-bottom: 48px;
`

export const TopBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 372px;
`

export const BlockPrice = styled.div``
export const PriceWithoutPromo = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #ff3d71;
  margin-bottom: 24px;
`

export const PriceWithPromo = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`

export const Price = styled.p`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0.01em;
`

export const PricePromoSvg = styled.svg`
  width: 53px;
  height: 22px;
  border-radius: 4px;
`

export const BlockQuantity = styled.div`
  display: flex;
  gap: 16px;
`

export const Quantity = styled.button`
  width: 111px;
  height: 26px;
  border-radius: 8px;
  background: #f2f5f9;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  color: #828ead;
`

export const QuantityOption = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-end;
`
export const OptionToggleSvg = styled.svg`
  width: 40px;
  height: 24px;
  border-radius: 32px;
`
export const OptionContent = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
`
export const TopBlockSvg = styled.svg`
  width: 372px;
  height: 0px;
  border: 1px solid #e2e4f0;
`
export const BlockDelivery = styled.div`
  display: flex;
  gap: 16px;
`

export const DeliveryElement = styled.div`
  width: 113.33px;
  height: 40px;
`
export const ElContent = styled.p`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 4px;
`

export const ElName = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #828ead;
`

export const TopSvg = styled.svg`
  border: 1px solid #e2e4f0;
  width: 0;
  height: 312px;
`

export const TopProperties = styled.div`
  margin-top: 9px;
  margin-bottom: 9px;
`
export const PropertiesHeading = styled.h4`
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 32px;
`

export const PropertiesBlock = styled.div`
  height: 248px;
  display: flex;
  flex-direction: column;
  column-gap: 32px;
  row-gap: 24px;
  flex-wrap: wrap;
`

export const PropertiesElement = styled.div`
  display: flex;
  flex-direction: column;
  width: 302px;
  height: 44px;
  gap: 8px;
`

export const ElementHeading = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
`

export const ElementContent = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #828ead;
`

export const ContentDescription = styled.div``

export const DescriptionHeading = styled.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 28px;
  margin-bottom: 24px;
`

export const DescriptionProduct = styled.p`
  width: 1104px;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
`
