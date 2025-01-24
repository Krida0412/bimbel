'use client';
import { Button, Flex, Heading, Text, keyframes } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import HeroBottomSVG from './HeroBottomSVG';
import { StargateColors } from '#/src/utils/Colors';
import { LuZap } from 'react-icons/lu';

const words = ['Bimbel Privat', 'Belajar Nyaman', 'Hasil Maksimal'];

const Header = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Flex
      as={motion.div}
      initial="initial"
      animate="animate"
      minH="100svh"
      bg={
        'linear-gradient(120deg,#70A4D4 0%,#ca71ff 20%,#8469cc 30%,#48B9E6 50%,#8469cc 70%,#9F70D4 100%)'
      }
      bgSize={'200% 200%'}
      animation={`${bgAnimation} 20s ease-in-out alternate infinite`}
      position={'relative'}
      align={'center'}
      justify={'center'}
      direction={'column'}
      px={2}
    >
      <Heading
        fontSize={{
          base: 48,
          md: 64,
          lg: 84,
        }}
        color={StargateColors.white}
        lineHeight={1}
        textAlign={'center'}
      >
        Lagi Cari
      </Heading>
      <AnimatePresence initial={false} mode="wait">
        <Heading
          as={motion.h1}
          fontSize={{
            base: 44,
            md: 64,
            lg: 84,
          }}
          key={index} // Gunakan index sebagai kunci
          color={StargateColors.white}
          lineHeight={1}
          initial={{ opacity: 0.2, filter: 'blur(4px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0.2, filter: 'blur(4px)' }}
        >
          {words[index]}
        </Heading>
      </AnimatePresence>
      <Flex bg={'#ffffff50'} px={4} py={2} rounded={'full'} mb={5} mt={6}>
        <Text color={StargateColors.white} fontSize={'xs'}>
          Kami siap mendampingi perjalanan belajar Anda
        </Text>
      </Flex>
      <Button
        leftIcon={<LuZap />}
        as={motion.a}
        href={'https://wa.me/62882007994613?text=Saya%20berminat%20untuk%20mengikuti%20bimble%20kak!'} // Ganti nomor dengan nomor Anda
        whileHover={{ scale: 1.1 }}
        size={'lg'}
        mt={5}
        gap={2}
        cursor={'pointer'}
        bg={StargateColors.primary}
        color={'white'}
        _hover={{ bg: StargateColors.primary }}
        target="_blank" // Membuka WhatsApp di tab baru
        rel="noopener noreferrer" // Tambahkan keamanan saat membuka link eksternal
      >
        Yuk, Mulai Belajar!
      </Button>
      <HeroBottomSVG />
    </Flex>
  );
};

const bgAnimation = keyframes`
  0% {
    background-position: 0% 100%
  }

  to {
    background-position: 100% 100%
  }
`;

export default Header;
