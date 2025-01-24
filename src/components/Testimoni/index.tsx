'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Box,
  Flex,
  Avatar,
  Text,
  Heading,
  Icon,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { AiFillStar } from 'react-icons/ai';

interface TestimonialProps {
  name: string;
  avatar: string;
  message: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  name,
  avatar,
  message,
  rating,
}) => {
  return (
    <Flex
      direction="column"
      p={8}
      bg="white"
      borderRadius="lg"
      boxShadow="lg"
      maxW="sm"
      minH="300px" // Memberikan tinggi minimum agar ukuran konsisten
      mx="auto"
      textAlign="center"
      transition="all 0.3s ease"
      data-aos="fade-up" // Menambahkan AOS untuk efek animasi
    >
      {/* Avatar */}
      <Avatar size="xl" src={avatar} mb={4} mx="auto" />

      {/* Name */}
      <Heading size="md" fontWeight="bold" color="gray.700">
        {name}
      </Heading>

      {/* Rating */}
      <Flex justify="center" align="center" mt={2}>
        {Array.from({ length: 5 }, (_, i) => (
          <Icon
            key={i}
            as={AiFillStar}
            color={i < rating ? 'yellow.400' : 'gray.300'}
          />
        ))}
      </Flex>

      {/* Message */}
      <Text fontSize="sm" color="gray.600" mt={4}>
        "{message}"
      </Text>
    </Flex>
  );
};

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi
      once: false, // Animasi hanya terjadi sekali
    });
  }, []);

  const testimonials = [
    {
      name: 'Andi Pratama',
      avatar: '/images/testimoni/1.jpg',
      message:
        'Sangat membantu anak saya dalam memahami materi pelajaran! Tutor yang ramah dan profesional.',
      rating: 5,
    },
    {
      name: 'Siti Nurhaliza',
      avatar: '/images/testimoni/1.jpg',
      message:
        'Pengalaman belajar yang menyenangkan. Jadwal fleksibel dan materi sangat interaktif.',
      rating: 4,
    },
    {
      name: 'Budi Santoso',
      avatar: '/images/testimoni/1.jpg',
      message:
        'Layanan yang luar biasa. Konsultasi personal sangat membantu meningkatkan performa belajar.',
      rating: 5,
    },
  ];

  return (
    <Box py={16} px={4} bg="white">
      <VStack spacing={4} mb={12} data-aos="fade-down">
        <Heading
          textAlign="center"
          fontSize={{ base: '2xl', md: '4xl' }}
          fontWeight="bold"
          color="gray.800"
        >
          Apa Kata Mereka?
        </Heading>
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          color="gray.600"
          maxW="3xl"
          textAlign="center"
        >
          Testimoni dari para siswa dan orang tua tentang pengalaman mereka
          menggunakan layanan kami.
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={8}
        justify="center"
        align="center"
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            avatar={testimonial.avatar}
            message={testimonial.message}
            rating={testimonial.rating}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default Testimonials;
