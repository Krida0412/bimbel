'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IconType } from 'react-icons';
import { StargateColors } from '#/src/utils/Colors';
import { Flex, Grid, Heading, Icon, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import {
  LuBot,
  LuCreditCard,
  LuGauge,
  LuLanguages,
  LuLayoutTemplate,
  LuLifeBuoy,
} from 'react-icons/lu';

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Animasi akan diulang setiap kali elemen muncul di viewport
    });
  }, []);

  return (
    <Flex
      id="features"
      direction={'column'}
      justify={'center'}
      align={'center'}
      my={24}
      px={2}
      maxW={1200}
      mx={'auto'}
    >
      <Heading
        fontSize={{
          base: 32,
          md: 48,
        }}
        textAlign={'center'}
        data-aos="fade-right"
      >
        Mengapa Memilih Kami?
      </Heading>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          xl: 'repeat(3, 1fr)',
        }}
        gap={10}
        my={10}
        data-aos="fade-up"
      >
        {Cards.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            aosEffect={index % 2 === 0 ? 'zoom-in' : 'fade-up'}
          >
            {card.text}
          </Card>
        ))}
      </Grid>
    </Flex>
  );
};

interface CardProps {
  icon: IconType; // Pastikan tipe 'IconType' dari react-icons
  title: string;
  children: ReactNode;
  aosEffect?: string;
}

const Card = ({ icon, title, children, aosEffect }: CardProps) => (
  <Flex
    maxW={350}
    role="group"
    data-aos={aosEffect}
  >
    <Icon
      as={icon} // Gunakan 'as' untuk IconType dari react-icons
      fontSize={48}
      mr={5}
      p={2}
      bg={StargateColors.lightGrey}
      rounded={'md'}
      strokeWidth={1.5}
      transition={'all 0.25s ease'}
      _groupHover={{
        bg: StargateColors.black,
        color: StargateColors.white,
        shadow: 'dark-lg',
        transform: 'scale(1.1)',
      }}
    />
    <Flex direction={'column'} gap={1}>
      <Heading fontSize={'xl'}>{title}</Heading>
      <Text fontSize={'small'} color={StargateColors.grey}>
        {children}
      </Text>
    </Flex>
  </Flex>
);

const Cards = [
  {
    icon: LuBot,
    title: 'Tutor Berpengalaman',
    text: 'Didampingi oleh tutor profesional yang berpengalaman, kami fokus memberikan pembelajaran yang personal dan efektif.',
  },
  {
    icon: LuGauge,
    title: 'Pendekatan Fleksibel',
    text: 'Metode pembelajaran yang disesuaikan dengan kebutuhan dan gaya belajar siswa untuk hasil yang optimal.',
  },
  {
    icon: LuCreditCard,
    title: 'Harga Transparan',
    text: 'Nikmati layanan berkualitas dengan harga yang jelas dan sesuai kebutuhan Anda tanpa biaya tersembunyi.',
  },
  {
    icon: LuLanguages,
    title: 'Materi Interaktif',
    text: 'Materi belajar yang menarik dan mudah dipahami, dirancang untuk meningkatkan motivasi siswa.',
  },
  {
    icon: LuLayoutTemplate,
    title: 'Jadwal Fleksibel',
    text: 'Atur jadwal belajar sesuai dengan waktu yang Anda inginkan, baik untuk pagi, siang, maupun malam.',
  },
  {
    icon: LuLifeBuoy,
    title: 'Layanan Konsultasi',
    text: 'Diskusi dan konsultasi personal untuk memahami kebutuhan belajar siswa secara mendalam.',
  },
];

export default Features;
