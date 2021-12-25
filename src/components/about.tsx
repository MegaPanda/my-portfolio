import { Box, Text, Grid, BoxProps } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion<BoxProps>(Box);

function About() {
    return (
        <Box w="100%" pt="80px" bg="linear-gradient(180deg, #2D3748 30%, white 30%)">
            <MotionBox maxW="1024px" m="auto" display="flex" pr={["0px", "10px", "40px"]} pb="50px" position="relative"
            initial={{ overflow: "hidden" }}  whileInView={{ overflow: "visible", transition: { delay: 0.5, duration: 0.1 } }}
            viewport={{ once: true }}
            >
                
                <MotionBox position="absolute" bottom="-20px" right={["250px", "270px", "calc(300px)"]}
                sx={{ writingMode: "vertical-rl" }}
                fontSize="110px" fontWeight="bold" letterSpacing="-10px" color="orange.400" zIndex={8}
                initial={{ rotate: "180deg", opacity: 0, translateY: "200px" }}
                whileInView={{ translateY: 0, opacity: 1, transition: { duration: 0.5 } }}
                viewport={{ once: true }}
                >
                    <Text>COOKBOOK.</Text>
                </MotionBox>
                
                <MotionBox zIndex={10} w="300px" p="30px 20px" ml="auto" bgColor="white" rounded="lg" boxShadow="md"
                initial={{ translateX: "150px" }} whileInView={{ translateX: 0, transition: { duration: 0.5 } }}
                viewport={{ once: true }}
                >
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
                </MotionBox>
            </MotionBox>
        </Box>
    )
};

export default About;