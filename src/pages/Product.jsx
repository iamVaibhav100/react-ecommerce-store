import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 75vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;

const Title = styled.h1`
  font-weight: 300;
`;

const Desc = styled.p``;

const Price = styled.span`
  font-weight: 200;
  font-size: 30px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 3px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 7px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/cXFnLLV/3.png" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            euismod, nisl eget consectetur sagittis, nisl libero aliquet nunc,
            euismod aliquam nisl eros eu Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Donec euismod, nisl eget consectetur sagittis, nisl
            libero aliquet nunc, euismod aliquam nisl eros eu
          </Desc>
          <Price>$ 25</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color: </FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="blue" />
              <FilterColor color="pink" />
            </Filter>
            <Filter>
              <FilterTitle>Size: </FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
