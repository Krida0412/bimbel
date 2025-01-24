'use client';
import { StargateColors } from '#/src/utils/Colors';
import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import FooterTopSVG from './FooterTopSVG';
import FooterBg from './FooterBg';
import { LuArrowRight } from 'react-icons/lu';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <Flex
      py={32}
      position={'relative'}
      justify={'center'}
      align={'center'}
      direction={'column'}
      id="footer"
    >
      <FooterTopSVG />
      <FooterBg />
      <Flex mt={16} direction={'column'} align={'center'} px={2}>
        <Heading
          fontSize={{
            base: 72,
            md: 96,
          }}
          textAlign={'center'}
          color="transparent"
          maxW={500}
          fontWeight={800}
          style={{
            backgroundImage: 'linear-gradient(315deg, #ffffff 60%, #000000)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
          }}
        >
          Tunggu Apalagi?
        </Heading>

        <Button
          rightIcon={<LuArrowRight />}
          as={motion.a}
          // href={'https://github.com/kisbalazspatrik/nextjs-saas-landing'}
          target="_b"
          whileHover={{ scale: 1.1 }}
          size={'lg'}
          mt={5}
          gap={2}
          cursor={'pointer'}
        >
          Hubungi Kami
        </Button>
      </Flex>

      <Flex mt={32}>
        <Text color={StargateColors.white}>
          @ 2025 - Kitabisa. All rights reserved.
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
