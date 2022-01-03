import { Box, Text, Grid, BoxProps, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion<BoxProps>(Box);

function About() {
    return (
        <Box w="100%" pt="80px" bg="linear-gradient(180deg, #2D3748 30%, white 30%)">
            <MotionBox maxW="1024px" m="auto" display="flex" flexDirection="column" pr={["0px", "10px", "40px"]} position="relative"
            initial={{ overflow: "hidden" }}  whileInView={{ overflow: "visible", transition: { delay: 0.5, duration: 0.1 } }}
            viewport={{ once: true }}
            >
                
                <MotionBox position="absolute" bottom="-20px" right={["240px", "250px", "280px"]}
                sx={{ writingMode: "vertical-rl" }}
                fontSize="150px" fontWeight="bold" letterSpacing="-8px" color="orange.400" zIndex={8}
                initial={{ rotate: "180deg", opacity: 0, translateY: "200px" }}
                whileInView={{ translateY: 0, opacity: 1, transition: { duration: 0.5 } }}
                viewport={{ once: true }}
                >
                    <Text>COOKBOOK.</Text>
                </MotionBox>
                
                <MotionBox zIndex={10} w="300px" p="30px 20px" ml="auto" mb="80px" bgColor="white" rounded="lg" boxShadow="md"
                initial={{ translateX: "150px" }} whileInView={{ translateX: 0, transition: { duration: 0.5 } }}
                viewport={{ once: true }}
                >
                    <Text fontSize="30px" fontWeight="black" lineHeight="6">
                        ARTISAN TOP-SHELF COPPER-BOTTOMED WEILUN-Y FRONT-END BABY WIZARD
                    </Text>
                    <Text pt="32px" pb="8px" fontSize="20px" fontWeight="extrabold">INGREDIENTS:</Text>
                    <Grid templateColumns="repeat(2, 1fr)" gap={2} px="8px" fontSize={14}>
                        <Text>&#9679; JavaScript</Text>
                        <Text>&#9679; TypeScript</Text>
                        <Text>&#9679; React</Text>
                        <Text>&#9679; Redux</Text>
                        <Text>&#9679; React Router</Text>
                        <Text>&#9679; Tailwind</Text>
                        <Text>&#9679; styled components</Text>
                        <Text>&#9679; Firebase</Text>
                    </Grid>
                    <Text pt="32px" pb="8px" fontSize="20px" fontWeight="extrabold">RECIPE:</Text>
                    <Grid gap={4} px="8px" fontSize="16px" fontWeight={400} textAlign="justify" >
                        <Text>
                            I'm a passionate linguist currently polishing my new pots and pans - programming 
                            languages. After years of marinating in IT translation, including tech specs, 
                            game localization and UI/UX features, I'm now baking the computer scripts to 
                            the visualization of user interface. 
                        </Text>
                        <Text>
                            My crafting specialty is front-end development, particularly the combination of 
                            <strong> React's ecosystem </strong>with <strong>TypeScript</strong>. I have a 
                            keen eye for intuitive, user-friendly web design thanks to my previous works in 
                            the UI/UX fields, and being a translator allows me to brew the essence of story-
                            telling into plating compelling visual experience.
                        </Text>
                        <Text>
                            As a gourmet of words and narratives, plus a gamer at heart, I'm dedicated to 
                            creating accessible, fun and interactive digital experiences with a chef's kiss
                            to visual features. 
                        </Text>
                    </Grid>
                </MotionBox>
                <Image src="/weilunma.jpg" alt="Wei-Lun Ma" position="absolute" zIndex={20} right="20px" bottom="-30px"
                boxSize="150px" rounded="full"
                />
            </MotionBox>
        </Box>
    )
};

export default About;