import styled from "styled-components";
import { NavigateBeforeOutlined, NavigateNextOutlined } from "@material-ui/icons";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    background-color: white;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(0vw)
`

const SlideContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`

const ImageContainer = styled.div`
    flex:1;
    height: 100%;
`

const InfoContainer = styled.div`
    flex:1;
    padding: 50px;
`

const Title = styled.h1`
    font-size: 70px;
`

const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Image = styled.img`
    height: 80%;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState;
    const handleClick = (direction) => {

    }
    return (
        <Container>
            <Arrow direction = "left" onClick={()=>handleClick("left")}>
                <NavigateBeforeOutlined/>
            </Arrow>
            <Wrapper>
                <SlideContainer bg = "D1FFBD">
                    <ImageContainer>
                        <Image src="https://starbuckscitymugs.files.wordpress.com/2017/12/oregon2.jpg?w=2000&h="/>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>Now On Sale</Title>
                        <Description>Get yours now</Description>
                        <Button>BUY NOW</Button>
                    </InfoContainer>
                </SlideContainer>
                <SlideContainer bg = "D1FFBD">
                    <ImageContainer>
                        <Image src="https://starbuckscitymugs.files.wordpress.com/2017/12/oregon2.jpg?w=2000&h="/>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>Enjoyed A Recent Vacation</Title>
                        <Description>Buy one to Accommerate that Trip</Description>
                        <Button>BUY NOW</Button>
                    </InfoContainer>
                </SlideContainer>
            </Wrapper>
            <Arrow direction = "right" onClick={()=>handleClick("right")}>
                <NavigateNextOutlined/>
            </Arrow>
        </Container>
    );
};

export default Slider