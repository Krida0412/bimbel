'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { StargateColors } from '#/src/utils/Colors';
import { Flex, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';

const Functions = () => {
  // Inisialisasi AOS saat komponen di-mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi
      once: false, // Animasi hanya terjadi sekali saat elemen pertama kali terlihat
    });
  }, []);

  const GridItemStyles = {
    color: 'white',
    rounded: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    w: '100%',
    h: '100%',
    minH: {
      base: '150px',
      md: '300px',
    },
    transition: 'all 0.25s ease',
    _hover: {
      shadow: 'md',
    },
  };

  return (
    <Flex
      id="functions"
      direction={'column'}
      justify={'center'}
      align={'center'}
      my={24}
      px={2}
      maxW={1200}
      mx={'auto'}
    >
      <Grid
        templateRows="repeat(3, 1fr)"
        templateColumns={{
          base: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
        gap={4}
        w={'100%'}
      >
        <GridItem
          colSpan={2}
          rowSpan={1}
          {...GridItemStyles}
          bgImage={"url('/images/testimoni/q1.jpg')"}
          bgColor={StargateColors.lightGrey}
          bgSize={'cover'}
          bgRepeat={'no-repeat'}
          bgPosition={'center'}
          data-aos="fade-up" // Efek AOS
        ></GridItem>
        <GridItem
          colSpan={1}
          rowSpan={1}
          {...GridItemStyles}
          bgImage={"url('/images/testimoni/1.jpg')"}
          bgSize={'cover'}
          bgRepeat={'no-repeat'}
          bgPosition={'center'}
          data-aos="fade-left" // Efek AOS
        ></GridItem>
        <GridItem
          colSpan={1}
          rowSpan={{
            base: 1,
            md: 2,
          }}
          {...GridItemStyles}
          bgImage={'url(https://i.imgur.com/9Zphp8f.png)'}
          bgSize={'contain'}
          bgRepeat={'no-repeat'}
          bgPosition={'bottom'}
          bgColor={'#282c34'}
          data-aos="zoom-in" // Efek AOS
        ></GridItem>
        <GridItem
          colSpan={1}
          rowSpan={1}
          {...GridItemStyles}
          bgImage={"url('/images/testimoni/2a.jpg')"}
          bgSize={'cover'}
          bgRepeat={'no-repeat'}
          bgPosition={'center'}
          bgColor={'#70115C'}
          data-aos="fade-right" // Efek AOS
        ></GridItem>
        <GridItem
          colSpan={1}
          rowSpan={1}
          {...GridItemStyles}
          bgImage={'url(https://i.imgur.com/gwFRoJ8.png)'}
          bgSize={'cover'}
          bgRepeat={'no-repeat'}
          bgPosition={'center'}
          bgColor={'#262626'}
          data-aos="fade-up" // Efek AOS
        ></GridItem>
        <GridItem
          colSpan={2}
          rowSpan={1}
          {...GridItemStyles}
          bgImage={'url(https://i.imgur.com/qLIEuPn.png)'}
          bgSize={'contain'}
          bgRepeat={'no-repeat'}
          bgPosition={'center'}
          bgColor={StargateColors.lightGrey}
          data-aos="zoom-in" // Efek AOS
        ></GridItem>
      </Grid>
    </Flex>
  );
};

export default Functions;
