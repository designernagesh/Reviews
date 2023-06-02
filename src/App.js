import data from './data/data';
import { useState } from 'react';
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs';
import { Container, Heading, Flex, Box, Image, Text, Button } from '@chakra-ui/react';
import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';

function App() {
  const [ index, setIndex ] = useState(0);

  const checkNumber = (number) => {
    if( number > data.length - 1 ) {
      return 0;
    }
    if( number < 0 ) {
      return data.length - 1;
    } 
    return number;
  }

  const prevReview = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex)
    });
  }
  
  const nextReview = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex)
    });
  }

  const randomReview = () => {
    let randomNumber = Math.floor(Math.random() * data.length);
    if( randomNumber === index ){
      randomNumber = index + 1;
    }
    console.log(randomNumber);
    setIndex(checkNumber(randomNumber));
  }
  return (
    <Container maxW='4xl'>
      <Heading as='h1' align='center' my='30px'>Reviews</Heading>
      <Flex alignItems='center' mb='20px'>
        <Button variant='link' onClick={ prevReview } fontSize='32px' mr='20px'> <BsFillArrowLeftSquareFill /> </Button>
        <Box boxShadow='lg' p='6' rounded='md' bg='white'>
            {
              <Box key={data[index].id} align='center'>
                <Image
                  borderRadius='full'
                  w='150px'
                  h='150px'
                  objectFit='cover'
                  src={data[index].image}
                  alt={data[index].name}
                  mb='20px'
                />
                <Heading as='h5' mb='5px' fontSize='16px' textTransform='capitalize'>{data[index].name}</Heading>
                <Text fontWeight='bold' mb='5px' color='gray.500'>{data[index].job}</Text>
                <Text>{data[index].text}</Text>
              </Box>
            }
        </Box>
        <Button variant='link' onClick={ nextReview } fontSize='32px' ml='20px'> <BsFillArrowRightSquareFill /> </Button>
      </Flex>

      <Flex justifyContent='center'>
        <Button onClick={ randomReview }> Random Review </Button>
      </Flex>
    </Container>
  );
}

export default App;
