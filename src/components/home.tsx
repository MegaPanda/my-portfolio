import { Box, Text } from "@chakra-ui/react";

function Home() {
    return (
        <Box w="100%" h="100vh" position="relative">
            <Box position="absolute" bottom="0" w="100%" h="80px" bgColor="gray.800" roundedTop="2xl" />
            <Box w="100%" maxW="1024px" h="100%" m="auto"
            display="flex" flexDirection="column" justifyContent="end" position="relative" overflow="hidden">
                <Box pl={[5, 16]}>
                    <Text>
                        <Text as="span" fontSize={32} fontFamily="'Noto Serif TC', serif" fontWeight="bold">馬偉倫</Text>
                        <Text as="span" fontSize={16} fontWeight="semibold" pl={4}>/mǎ, wěi lún/</Text>
                        <Text as="span" fontSize={16} fontWeight="bold" fontStyle="italic" pl={4}>n.</Text>
                    </Text>
                    <Box pl={1}>
                        <Box display="inline-block" w={2} h={2} bgColor="gray.800" mr={2} />
                        A language enthusiast, a story-teller,
                    </Box>
                </Box>
                <Box h="80px">
                    <Text pl={[5, 16]} color="orange.400" fontWeight="bold">and a front-end developer.</Text>
                </Box>
                <Box position="absolute" top="0" right={["16px", "26px"]} w="30px" h="20%" zIndex={-2} bgColor="blue.800" />
                <Box position="absolute" bottom="70px" right={["-45px", "-60px"]} zIndex={-1} sx={{ writingMode: "vertical-lr" }}>
                    <Text fontSize={["90px", "120px"]} fontWeight="bold" color="gray.300">Research.</Text>
                </Box>
            </Box>
        </Box>
    )
};

export default Home;