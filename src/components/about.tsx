import { Box, Text, Flex, Grid } from "@chakra-ui/react";

function About() {
    return (
        <Box w="100%" pt="80px" bg="linear-gradient(180deg, #1A202C 30%, white 30%)">
            <Box maxW="1024px" m="auto" display="flex" pr={["10px", null, "40px"]} pb="50px" position="relative">
                <Box position="absolute" bottom="-20px" right={["270px", null, "calc(300px)"]} zIndex={8}
                sx={{ writingMode: "vertical-rl" }} transform="rotate(180deg)"
                fontSize="110px" fontWeight="bold" letterSpacing="-10px" color="orange.400"
                >
                    <Text>COOKBOOK.</Text>
                </Box>
                <Box zIndex={10} w={300} p="30px 20px" mt="auto" ml="auto" bgColor="white" rounded="2xl" boxShadow="md">
                    <Text fontSize={20} fontWeight="black" lineHeight="5">
                        ARTISAN TOP-SHELF COPPER-BOTTOMED WEILUN-Y FRONT-END BABY WIZARD
                    </Text>
                    <Text pt="32px" pb="8px" fontSize={16} fontWeight="extrabold">INGREDIENTS:</Text>
                    <Grid templateColumns="repeat(2, 1fr)" gap={2} px="8px" fontSize={12}>
                        <Text>&#9679; JavaScript</Text>
                        <Text>&#9679; TypeScript</Text>
                        <Text>&#9679; React</Text>
                        <Text>&#9679; Redux/RTK</Text>
                        <Text>&#9679; React Router</Text>
                        <Text>&#9679; Tailwind</Text>
                        <Text>&#9679; styled components</Text>
                        <Text>&#9679; Firebase</Text>
                    </Grid>
                    <Text pt="32px" pb="8px" fontSize={16} fontWeight="extrabold">INSTRUCTIONS:</Text>
                    <Grid templateColumns="repeat(1, 1fr)" gap={4} px="8px" fontSize={14} textAlign="justify" lineHeight="5">
                        <Text>
                            1. Marinate <Text as="span" fontStyle="italic">WEILUN</Text> in tech translator for three years.
                        </Text>
                        <Text>
                            2. Turn on the VS Code, toss in the finely cured <Text as="span" fontWeight="bold">TypeScript</Text> on top of <Text as="span" fontWeight="bold">JavaScript</Text>.
                        </Text>
                        <Text>
                            3. Mix <Text as="span" fontWeight="bold">React</Text> with slices of <Text as="span" fontWeight="bold">Redux</Text> and wrap them with <Text as="span" fontWeight="bold">React Router</Text>.
                        </Text>
                        <Text>
                            4. Vigorously combine everything with Google and StackOverflow.
                        </Text>
                        <Text>
                            5. Season with <Text as="span" fontWeight="bold">Tailwind</Text> and <Text as="span" fontWeight="bold">styled components</Text>.
                        </Text>
                        <Text>
                            6. Place it on <Text as="span" fontWeight="bold">Firebase</Text> and <Text as="span" fontStyle="italic">WEILUN</Text> is ready for npm run build!
                        </Text>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
};

export default About;