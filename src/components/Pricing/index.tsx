'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { StargateColors } from '#/src/utils/Colors';
import { Button, Flex, Heading, Icon, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LuCheck } from 'react-icons/lu';

const Pricing = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,
    });
  }, []);
  const [currentBilling, setCurrentBilling] = useState('sd'); // Default "sd"

  const plans = [
    {
      name: 'Matematika',
      originalPrice:
        currentBilling === 'sd'
          ? 'Rp 60.000/sesi'
          : currentBilling === 'smp'
          ? 'Rp 70.000/sesi'
          : 'Rp 85.000/sesi',
      price:
        currentBilling === 'sd'
          ? 'Rp 40.000/sesi'
          : currentBilling === 'smp'
          ? 'Rp 50.000/sesi'
          : 'Rp 55.000/sesi',
      features:
        currentBilling === 'sd'
          ? [
              'Latihan berhitung sederhana',
              'Video pembelajaran angka',
              'Permainan interaktif angka',
              'Pengenalan geometri dasar',
            ]
          : currentBilling === 'smp'
          ? [
              'Pembahasan aljabar dan geometri',
              'Latihan soal dengan pembahasan',
              'Video konsep matematika menengah',
              'Grafik hasil kemajuan siswa',
            ]
          : [
              'Latihan soal kalkulus dan statistik',
              'Video pembelajaran lanjutan',
              'Latihan simulasi ujian matematika',
              'Analisis nilai dengan grafik interaktif',
            ],
    },
    {
      name: 'Mengaji',
      originalPrice:
        currentBilling === 'sd'
          ? 'Rp 60.000/sesi'
          : currentBilling === 'smp'
          ? 'Rp 70.000/sesi'
          : 'Rp 85.000/sesi',
      price:
        currentBilling === 'sd'
          ? 'Rp 40.000/sesi'
          : currentBilling === 'smp'
          ? 'Rp 50.000/sesi'
          : 'Rp 55.000/sesi',
      features:
        currentBilling === 'sd'
          ? [
              'Pengenalan huruf hijaiyah',
              'Video belajar bacaan sholat',
              'Doa-doa harian pendek',
              "Latihan membaca Iqro'",
            ]
          : currentBilling === 'smp'
          ? [
              'Tajwid lanjutan',
              'Hafalan surat-surat pendek',
              "Tes bacaan Al-Qur'an",
              "Penilaian interaktif membaca Al-Qur'an",
            ]
          : [
              'Hafalan surat pilihan',
              'Kursus pengenalan tafsir sederhana',
              'Simulasi tes tajwid',
              'Latihan hafalan dengan mentor online',
            ],
    },
    {
      name: 'Bahasa Arab',
      originalPrice:
        currentBilling === 'sd'
          ? 'Rp 60.000/sesi'
          : currentBilling === 'smp'
          ? 'Rp 70.000/sesi'
          : 'Rp 85.000/sesi',
      price:
        currentBilling === 'sd'
          ? 'Rp 40.000/sesi'
          : currentBilling === 'smp'
          ? 'Rp 50.000/sesi'
          : 'Rp 55.000/sesi',
      features:
        currentBilling === 'sd'
          ? [
              'Belajar kosa kata dasar',
              'Video pengenalan huruf hijaiyah',
              'Latihan membaca sederhana',
              'Permainan interaktif huruf Arab',
            ]
          : currentBilling === 'smp'
          ? [
              'Latihan menulis huruf Arab',
              'Latihan percakapan sederhana',
              'Kamus digital untuk kosa kata',
              'Tes kemampuan menulis Arab',
            ]
          : [
              'Pelajaran tata bahasa (nahwu/shorof)',
              'Latihan menulis karangan pendek',
              'Latihan percakapan tingkat lanjut',
              'Tes pemahaman teks Bahasa Arab',
            ],
    },
  ];

  return (
    <Flex
      id="pricing"
      direction={'column'}
      justify={'center'}
      align={'center'}
      my={24}
      pt={6}
      pb={{ base: 6, md: 12 }}
      px={{ base: 6, md: 10 }}
      maxW={1200}
      mx={{ base: 2, xl: 'auto' }}
      border={`1px solid ${StargateColors.lightBg}`}
      borderRadius={24}
      data-aos="fade-up"
    >
      <Heading textAlign={'center'} px={2}>
        Program Pilihan
      </Heading>
      <Flex
        mt={6}
        gap={2}
        p={2}
        borderRadius={16}
        border={`1px solid ${StargateColors.lightBg}`}
      >
        {['sd', 'smp', 'umum'].map((level) => (
          <Flex
            key={level}
            cursor={'pointer'}
            onClick={() => setCurrentBilling(level)}
            px={4}
            py={2}
            borderRadius={12}
            transition={'all 0.25s ease'}
            {...(currentBilling === level && {
              bgColor: StargateColors.black,
            })}
          >
            <Text
              fontWeight={'bold'}
              fontSize={'sm'}
              color={
                currentBilling === level
                  ? StargateColors.white
                  : StargateColors.grey
              }
            >
              {level.toUpperCase()}
            </Text>
          </Flex>
        ))}
      </Flex>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={6}
        w={'100%'}
        mt={6}
        justify={currentBilling === 'umum' ? 'center' : 'space-between'} // Atur justify
      >
        <AnimatePresence mode="wait">
          {(currentBilling === 'umum'
            ? plans.filter(
                (plan) =>
                  plan.name === 'Mengaji' || plan.name === 'Bahasa Arab',
              ) 
            : plans
          ).map((plan) => (
            <Flex
              as={motion.div}
              key={`${plan.name}-${currentBilling}`}
              p={4}
              direction={'column'}
              maxW={{ base: '100%', md: '30%' }}
              border={`1px solid ${StargateColors.lightBg}`}
              borderRadius={18}
              color={StargateColors.black}
              initial={{ opacity: 0.1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -80, scale: 0.95 }}
              transition={'all 0.25s ease'}
              _hover={{
                transform: { base: 'none', md: 'scale(1.02)' }, 
                transition: 'transform 0.3s ease-in-out',
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
              }}
            >
              <Text
                as="h3"
                fontSize="xl"
                textAlign="center"
                fontWeight="bold"
                mb={4}
                color={StargateColors.grey}
              >
                {plan.name}
              </Text>
              <Stack mb={4} textAlign="center">
                <Text
                  fontSize="lg"
                  color="red.500"
                  textDecoration="line-through"
                  fontWeight="bold"
                >
                  {plan.originalPrice}
                </Text>
                <Heading
                  fontSize={{
                    base: '3xl',
                    md: '4xl',
                  }}
                  color="black.500"
                  fontWeight="bold"
                >
                  {plan.price}
                </Heading>
              </Stack>
              <Stack spacing={3} mb={6}>
                {plan.features.map((feature) => (
                  <Flex
                    align={'flex-start'}
                    key={`${feature}-${currentBilling}`}
                  >
                    <Flex
                      bg={`${StargateColors.primary}25`}
                      mr={2}
                      borderRadius={'full'}
                      p={1}
                    >
                      <Icon as={LuCheck} color={StargateColors.primary} />
                    </Flex>
                    <Text>{feature}</Text>
                  </Flex>
                ))}
              </Stack>
              <Button
                mt={'auto'}
                w="full"
                bg={StargateColors.darkBg}
                color="white"
                _hover={{
                  bg: StargateColors.primary,
                  opacity: 0.8,
                }}
              >
                Pilih {plan.name}
              </Button>
            </Flex>
          ))}
        </AnimatePresence>
      </Stack>
    </Flex>
  );
};

export default Pricing;
