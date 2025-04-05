import './Header.css';

import { Container } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { css } from '@emotion/react';

import Burger from '../Icons/Burger';
import Emoji from '../Icons/Emoji';
import Marked from '../Icons/Marked';
import People from '../Icons/People';
import LogoPot from '../Logo/LogoPot';
import LogoText from '../Logo/LogoText';

const customStyles = css`
    @media (max-width: 768px) {
        display: block;
    }
    @media (min-width: 769px) {
        display: none;
    }
`;

const personalInfoStyles = css`
    @media (max-width: 768px) {
        display: none;
    }
    @media (min-width: 769px) {
        display: block;
    }
`;

const mainTextStyles = css`
    @media (max-width: 768px) {
        display: none;
    }
    @media (min-width: 769px) {
        display: block;
    }
`;

const logoStyle = css`
    @media (max-width: 360px) {
        display: none;
    }
`;

export default function Header() {
    return (
        <Container as='header' maxW='1920px' h='80px' margin='auto' bg='#ffffd3;'>
            <Flex alignItems='center' justifyContent='space-between'>
                <Flex pl='17px' w='256px'>
                    <Flex h='80px' alignItems='center'>
                        <Flex marginRight='2px' alignItems='flex-end'>
                            <Icon as={LogoPot} />
                        </Flex>
                        <Flex css={logoStyle} alignItems='flex-end'>
                            <Icon as={LogoText} />
                        </Flex>
                    </Flex>
                </Flex>
                <Box css={mainTextStyles} flexGrow='1'>
                    <Flex justifyContent='flex-start' alignItems='center' h='80px'>
                        <Text className='header-text'>Главная</Text>
                    </Flex>
                </Box>

                <Flex css={personalInfoStyles} maxW='500px' marginRight='63px'>
                    <Flex>
                        <Box pl='53px' pr='12px'>
                            <img src='/images/avatar.png' alt='avatar' />
                        </Box>
                        <Box>
                            <Text as='p' className='name-text'>
                                Екатерина Константинопольская
                            </Text>
                            <Text
                                as='p'
                                fontFamily='Inter, sans-serif'
                                fontWeight='400'
                                fontSize='14px'
                                lineHeight='143%'
                                color='rgba(0,0,0, 0.64)'
                            >
                                @bake_and_pie
                            </Text>
                        </Box>
                    </Flex>
                </Flex>

                <Flex css={customStyles} marginRight='20px'>
                    <Flex>
                        <Flex>
                            <Flex className='info'>
                                <Flex p='0 8px' justifyContent='center' alignItems='center'>
                                    <Icon as={Marked} />
                                    <Text className='info-text'>185</Text>
                                </Flex>
                                <Flex p='0 8px' justifyContent='center' alignItems='center'>
                                    <Icon as={People} />
                                    <Text className='info-text'>589</Text>
                                </Flex>
                                <Flex p='0 8px' justifyContent='center' alignItems='center'>
                                    <Icon as={Emoji} />
                                    <Text className='info-text'>587</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex className='burger'>
                            <Icon as={Burger} />
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Container>
    );
}
