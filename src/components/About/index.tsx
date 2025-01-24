'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Flex,
  Box,
  Text,
  Image,
  Heading,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react';
import { LuCheck } from 'react-icons/lu';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 500, once: true }); // Inisialisasi AOS dengan durasi 1000ms dan animasi hanya terjadi sekali
  }, []);

  return (
    <Flex
      id="about"
      direction={{ base: 'column', md: 'row' }}
      align="center"
      justify="center"
      my={24}
      pb={{
        base: 6,
        md: 12,
      }}
      px={{
        base: 6,
        md: 24,
      }}
      pt={12}
      bg="white"
      color="gray.800"
    >
      {/* Bagian Gambar */}
      <Box
        flex={1}
        mr={{ md: 8 }}
        mb={{ base: 8, md: 0 }}
        data-aos="zoom-in-right" // Gambar akan muncul dari kanan
      >
        <Image
          src="/images/mengajar1.jpg" // Gunakan jalur absolut
          alt="Tentang Kami"
          borderRadius="lg"
          boxShadow="lg"
          objectFit="cover"
          w="100%"
        />
      </Box>

      {/* Bagian Teks */}
      <Box
        flex={1}
        data-aos="fade-up" // Teks akan muncul dari kiri
      >
        <Heading
          as="h2"
          size="lg"
          fontWeight="bold"
          mb={4}
          textAlign={{ base: 'center', md: 'left' }}
        >
          Tentang Kami
        </Heading>
        <Text fontSize="md" color="gray.600" mb={6} textAlign="justify">
          Kami adalah perusahaan bimbingan belajar yang berkomitmen untuk
          membantu siswa mencapai potensi terbaiknya. Dengan pendekatan inovatif
          dan tutor berpengalaman, kami memberikan pengalaman belajar yang
          menyenangkan dan efektif.
        </Text>
        <List spacing={4}>
          <ListItem>
            <ListIcon as={LuCheck} color="green.500" />
            Program belajar yang dirancang sesuai kebutuhan siswa.
          </ListItem>
          <ListItem>
            <ListIcon as={LuCheck} color="green.500" />
            Tutor berpengalaman dan bersertifikat.
          </ListItem>
          <ListItem>
            <ListIcon as={LuCheck} color="green.500" />
            Materi interaktif dan menyenangkan.
          </ListItem>
          <ListItem>
            <ListIcon as={LuCheck} color="green.500" />
            Layanan konsultasi belajar secara personal.
          </ListItem>
        </List>
        <Button
          mt={6}
          bg="green.500"
          color="white"
          _hover={{ bg: 'green.600' }}
          size="lg"
        >
          Pelajari Lebih Lanjut
        </Button>
      </Box>
    </Flex>
  );
};

export default About;
