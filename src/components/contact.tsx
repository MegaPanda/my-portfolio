import { Box, Text, Flex } from "@chakra-ui/react";

function Contact() {
    return (
        <Box w="100%" h="100vh" display="flex" flexDirection="column" alignItems="center" position="relative">
            <Box w="40px" h="40px" position="absolute" top="-10px" bgColor="gray.800" rounded="lg" />
            <Flex w="100%" maxW="1024px" flex={1} direction="column" justifyContent="space-between" alignItems="center">
                <Box pt="30px">
                    <Text as="span" pb="10px" px={["24px", "32px"]} fontSize={["60px", "80px"]} fontWeight="bold" textDecoration="underline"
                    borderWidth="12px" borderStyle="solid" borderColor="gray.800" rounded="full">
                        Connect.
                    </Text>
                </Box>
                <Box w="100%" maxW="480px" h="40%" roundedTop="3xl" bgColor="gray.800" color="white"
                py="40px" fontSize={["24px", "30px"]} overflow="hidden">
                    <Box w={["240px", "300px"]} m="auto">
                        <Text>Hey, I just met you,</Text>
                        <Text>and no, it's not crazy</Text>
                        <Text>Yes here's my handles,</Text>
                        <Text>so write me maybe!</Text>
                    </Box>
                </Box>
            </Flex>
            
        </Box>
    )
};

export default Contact;