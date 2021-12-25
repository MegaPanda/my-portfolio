import { Box, BoxProps, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion<BoxProps>(Box);

function Home() {
    return (
        <Box w="100%" h="100vh" position="relative">
            <MotionBox position="absolute" bottom="0" w="100%" bgColor="gray.800"
            h="0" animate={{ height: "200px", transition: { delay: 1, duration: 1 } }} />
            <Box w="100%" maxW="1024px" h="100%" m="auto"
            display="flex" flexDirection="column" justifyContent="end" position="relative" overflow="hidden">
                <Box pl={[5, 16]} >
                    <MotionBox opacity={0} animate={{ opacity: 1, transition: { duration: 2 } }}>
                        <Text as="span" fontSize={32} fontFamily="'Noto Serif TC', serif" fontWeight="bold">馬偉倫</Text>
                        <Text as="span" fontSize={16} fontWeight="semibold" pl={4}>/mǎ, wěi lún/</Text>
                        <Text as="span" fontSize={16} fontWeight="bold" fontStyle="italic" pl={4}>n.</Text>
                    </MotionBox>
                    <MotionBox pl={1} opacity={0} animate={{ opacity: 1, transition: { duration: 2 } }}>
                        <Box display="inline-block" w={2} h={2} bgColor="gray.800" mr={2} />
                        A language enthusiast, a story-teller,
                    </MotionBox>
                </Box>
                <MotionBox pl={[5, 16]} color="orange.400" fontWeight="bold" h="200px"
                initial={{ translateY: "100%" }} animate={{ translateY: 0, transition: { delay: 1, duration: 1 } }}>
                    and a front-end developer.
                </MotionBox>
                <MotionBox position="absolute" top="0" right={["16px", "26px"]} w="30px" zIndex={-2} bgColor="gray.800" 
                h="0" animate={{ height: "20%", transition: { delay: 1, duration: 1 } }}/>
                <Box position="absolute" bottom="190px" right={["-45px", "-60px"]} zIndex={-1} sx={{ writingMode: "vertical-lr" }}>
                    <Text fontSize={["90px", "120px"]} fontWeight="bold" color="gray.300">Research.</Text>
                </Box>
            </Box>
        </Box>
    )
};

export default Home;