import { Box, Heading, HStack, Stack, Text, VStack, Link } from '@chakra-ui/react';
import Image from 'next/image';

function App() {
  return (
    <Stack h="100vh" w="100%" bg="gray.900" p={['10', '20', '24']}>
      <Stack
        direction={['column-reverse', 'row']}
        justifyContent={['start', 'center']}
        alignItems={['start', 'center']}
      >
        <Box w={['100%', '60%']}>
          <VStack color="yellow" align="start" pb={['5', '10']}>
            <Heading as="h1" size={['xl', '2xl', '3xl']}>
              Hi there 👋, I&apos;m Migue,
            </Heading>
            <Heading as="h2" size={['md', 'lg', 'xl']}>
              Frontend Developer
            </Heading>
          </VStack>
          <VStack color="white" marginStart="0">
            <Text fontSize={['md', 'lg', '2xl']}>
              Based in Cartagena, Colombia.
              <br />I am a Systems Engineer. I&apos;ve been working on the frontend for a little
              over five years, specifically in JavaScript, TypeScript, React and NextJS.
            </Text>
          </VStack>
        </Box>
        <Box w={['100%', '40%']}>
          <Image src="/images/frontend.png" alt="Frontend Developer" width={1000} height={1000} />
        </Box>
      </Stack>
      <HStack color="yellow" alignSelf="center" pt="10" fontSize="15">
        <Link>
          <a
            href="https://www.linkedin.com/in/miguemartelo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </Link>
        <Link>
          <a href="https://twitter.com/MigueMartelo31" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </Link>
        <Link>
          <a href="https://github.com/miguemartelo" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </Link>
        <Link>
          <a href="/curriculumMigueMartelo.pdf" target="_blank" rel="noopener noreferrer" download>
            Curriculum
          </a>
        </Link>
      </HStack>
    </Stack>
  );
}

export default App;
