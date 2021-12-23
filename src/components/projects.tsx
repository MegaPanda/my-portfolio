import { Box, BoxProps, Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp, faArrowCircleDown, faArrowCircleLeft, faArrowCircleRight, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import mosaic from "./pixil-frame-0.png";
import carbCyclingPlanner from "./carb-cycling-planner.jpg";
import fluffyShop from "./fluffy-shop.jpg"

const MotionBox = motion<BoxProps>(Box);
const arrowUp = () => <Box fontSize="24px"><FontAwesomeIcon icon={faArrowCircleUp} style={{ borderRadius: 50, backgroundColor: "white" }} /></Box>
const arrowDown = () => <Box fontSize="24px"><FontAwesomeIcon icon={faArrowCircleDown} style={{ borderRadius: 50, backgroundColor: "white" }} /></Box>
const arrowLeft = () => <Box fontSize="24px"><FontAwesomeIcon icon={faArrowCircleLeft} style={{ borderRadius: 50, backgroundColor: "white" }} /></Box>
const arrowRight = () => <Box fontSize="24px"><FontAwesomeIcon icon={faArrowCircleRight} style={{ borderRadius: 50, backgroundColor: "white" }} /></Box>
const comboWButton = () => <Box w="24px" h="24px" borderRadius={50} m="auto" bgColor="green.600" pt="1px" fontSize="20px" color="gray.50" fontWeight="bold">W</Box>
const comboAButton = () => <Box w="24px" h="24px" borderRadius={50} m="auto" bgColor="red.600" fontSize="20px" color="gray.50" fontWeight="bold">A</Box>
const comboSButton = () => <Box w="24px" h="24px" borderRadius={50} m="auto" bgColor="yellow.400" fontSize="20px" color="gray.50" fontWeight="bold">S</Box>
const comboDButton = () => <Box w="24px" h="24px" borderRadius={50} m="auto" bgColor="blue.500" fontSize="20px" color="gray.50" fontWeight="bold">D</Box>
const githubIcon = () => <FontAwesomeIcon icon={faGithub} size="lg" />
const toolText = (text: string) => <Text mt="6px" color="orange.400" fontSize={["12px", "16px"]} fontWeight="bold"  lineHeight={["12px", "16px"]} whiteSpace="pre-line">{text}</Text>

function Projects() {
    return (
        <Box w="100%" minH="100vh" bgColor="blue.800" roundedBottom="3xl" position="relative" overflow="hidden">
            {/*
            <Box w={["30px", null, "60px"]} h="100%" position="absolute" top="0" right="calc(10% - 20px)"
            bgImage={mosaic} opacity={0.9} bgRepeat="repeat-y" bgSize={["60px", null, "90px"]}
            />
            */}
            <Box w="100%" maxW="1024px" m="auto" pt="100px" pb={["220px", "300px"]} position="relative">
                <Box>
                    <Text py="10px" ml={["-4px", "-8px"]} fontSize={["45px", "65px", "84px"]} fontWeight="extrabold" color="cyan.100">PLAYGROUND.</Text>
                </Box>
                <Flex direction="column" gap="60px">
                    <Box w={["320px", "450px", "600px"]} p="20px" pb="100px" bgColor="white" 
                    rounded="lg" roundedLeft={["none", null, null, "lg"]} position="relative">
                        <Flex fontSize="20px" fontWeight="black" justifyContent="space-between">
                            <Text pl={[null, "20px"]}>Carb Cycling Planner</Text>
                            <MotionBox whileHover={{ scale: 1.2 }}>
                                <Box as="a" target="_blank" href="https://github.com/MegaPanda/carb-cycling-planner" cursor="pointer">
                                    {githubIcon()}
                                </Box>
                            </MotionBox>
                        </Flex>
                        <Flex py="20px" direction={["column", null, "row"]} gap={["20px", "40px"]} justifyContent="center" alignItems="center">
                            <MotionBox whileHover={{ scale: 1.1 }} position="relative">
                                <Box as="a" target="_blank" href="https://carb-cycling-planner.web.app" cursor="pointer">
                                    <Image src={carbCyclingPlanner} alt="Carb Cycling Planner"
                                    boxSize={["240px", "360px", "250px"]} objectFit="cover" objectPosition="center top" 
                                    border="2px solid #CBD5E0" borderRadius="md" />
                                    <FontAwesomeIcon icon={faExternalLinkAlt} color="#4A5568" size="lg"
                                    style={{ position: "absolute", bottom: "10px", right: "10px" }}/>
                                </Box>
                            </MotionBox>
                            <Box>
                                <Text w={["240px", "360px", "250px"]} fontSize={["12px", "14px"]} textAlign="justify" fontWeight="medium" lineHeight="short">
                                    A web app for easy planning and tracking your carb cycling diet. Calculate your TDEE,
                                    set up your goal, and choose between high-mid-low carb to know your daily targeting 
                                    micros. Search or simply create your own food data to keep your diet diary on track.
                                    The app will automatically calculate the consumed calories and visualize your progress.
                                </Text>
                            </Box>
                        </Flex>
                        <Flex position="absolute" bottom="14px" right={["-4px", "0"]} textAlign="center" lineHeight="none">
                            <Box w={["45px", "60px", "80px"]}>
                                {arrowUp()}
                                {toolText("Type\nScript")}
                            </Box>
                            <Box w={["45px", "60px", "80px"]}>
                                {arrowDown()}
                                {toolText("React")}
                            </Box>
                            <Box w={["45px", "60px", "80px"]}>
                                <Box fontSize="24px"><FontAwesomeIcon icon={faArrowCircleDown} transform={{ rotate: -45 }} style={{ borderRadius: 50, backgroundColor: "white" }} /></Box>
                                {toolText("Redux")}
                            </Box>
                            <Box w={["45px", "65px", "80px"]}>
                                {arrowRight()}
                                {toolText("React \n Router")}
                            </Box>
                            <Box w={["50px", "70px", "80px"]}>
                                <Box>
                                    {comboWButton()}
                                </Box>
                                {toolText("styled \n com-\nponents")}
                            </Box>
                            <Box w={["50px", "70px", "80px"]}>
                                <Box>
                                    {comboWButton()}
                                </Box>
                                {toolText("Firebase \n Auth.")}
                            </Box>
                            <Box w={["45px", "60px", "80px"]}>
                                <Box>
                                    {comboDButton()}
                                </Box>
                                {toolText("Fire\nstore")}
                            </Box>
                        </Flex>
                    </Box>
                    <Box w={["320px", "450px", "600px"]} p="20px" pb="100px" bgColor="white"
                    rounded="lg" roundedRight={["none", null, null, "lg"]} alignSelf="end" position="relative">
                        <Flex fontSize="20px" fontWeight="black" justifyContent="space-between">
                            <Text pl={["20px", "100px", "20px"]}>Panda the Trumpeter</Text>
                            <MotionBox whileHover={{ scale: 1.2 }}>
                                <Box as="a" target="_blank" href="-------" cursor="pointer">
                                    {githubIcon()}
                                </Box>
                            </MotionBox>
                        </Flex>
                        <Flex py="20px" direction={["column", null, "row"]} gap={["20px", "40px"]} justifyContent="center" alignItems="center">
                            <MotionBox whileHover={{ scale: 1.1 }} position="relative">
                                <Box as="a" target="_blank" href="-------" cursor="pointer">
                                    <Image src={carbCyclingPlanner} alt="Carb Cycling Planner"
                                    boxSize={["240px", "360px", "250px"]} objectFit="cover" objectPosition="center top" 
                                    border="2px solid #CBD5E0" borderRadius="md" />
                                    <FontAwesomeIcon icon={faExternalLinkAlt} color="#4A5568" size="lg"
                                    style={{ position: "absolute", bottom: "10px", right: "10px" }}/>
                                </Box>
                            </MotionBox>
                            <Box>
                                <Text w={["240px", "360px", "250px"]} fontSize={["12px", "14px"]} textAlign="justify" fontWeight="medium" lineHeight="short">
                                    A web app for easy planning and tracking your carb cycling diet. Calculate your TDEE,
                                    set up your goal, and choose between high-mid-low carb to know your daily targeting 
                                    micros. Search or simply create your own food data to keep your diet diary on track.
                                    The app will automatically calculate the consumed calories and visualize your progress.
                                </Text>
                            </Box>
                        </Flex>
                        <Flex position="absolute" bottom="8px" left="12px" textAlign="center" lineHeight="none">
                            <Box w={["50px", "65px", "80px"]}>
                                <Box>
                                    {comboAButton()}
                                </Box>
                                {toolText("Tone.js")}
                            </Box>
                            <Box w={["50px", "65px", "80px"]}>
                                {arrowRight()}
                                {toolText("Java\nScript")}
                            </Box>
                            <Box w={["50px", "65px", "80px"]}>
                                {arrowRight()}
                                {toolText("React")}
                            </Box>
                            <Box w={["50px", "65px", "80px"]}>
                                <Box>
                                    {comboSButton()}
                                </Box>
                                {toolText("React \n Three \n Fiber")}
                            </Box>
                            <Box w={["50px", "65px", "80px"]}>
                                <Box>
                                    {comboDButton()}
                                </Box>
                                {toolText("Drei")}
                            </Box>
                        </Flex>
                    </Box>
                    <Box w={["320px", "450px", "600px"]} p="20px" pb="100px" bgColor="white" 
                    rounded="lg" roundedLeft={["none", null, null, "lg"]} position="relative">
                        <Flex fontSize="20px" fontWeight="black" justifyContent="space-between">
                            <Text pl={[null, "20px"]}>Fluffy T-Shirt Shop</Text>
                            <MotionBox whileHover={{ scale: 1.2 }}>
                                <Box as="a" target="_blank" href="https://github.com/MegaPanda/react-shopping-site" cursor="pointer">
                                    {githubIcon()}
                                </Box>
                            </MotionBox>
                        </Flex>
                        <Flex py="20px" direction={["column", null, "row"]} gap={["20px", "40px"]} justifyContent="center" alignItems="center">
                            <MotionBox whileHover={{ scale: 1.1 }} position="relative">
                                <Box as="a" target="_blank" href="https://megapanda.github.io/react-shopping-site/" cursor="pointer">
                                    <Image src={fluffyShop} alt="Fluffy T-shirt Shop"
                                    boxSize={["240px", "360px", "250px"]} objectFit="cover" objectPosition="center top" 
                                    border="2px solid #1A202C" borderRadius="md" />
                                    <FontAwesomeIcon icon={faExternalLinkAlt} color="white" size="lg"
                                    style={{ position: "absolute", bottom: "10px", right: "10px" }}/>
                                </Box>
                            </MotionBox>
                            <Box>
                                <Text w={["240px", "360px", "250px"]} fontSize={["12px", "14px"]} textAlign="justify" fontWeight="medium" lineHeight="short">
                                    Fluffy T-Shirt Shop is a single-page, user-friendly shopping website built with 
                                    TypeScript and React. It's fully responsive with the help of the utility-first
                                    CSS framework Tailwind. Firebase's Realtime Database is deployed for data-fetching
                                    and storing customers' order information.
                                </Text>
                            </Box>
                        </Flex>
                        <Flex position="absolute" bottom="14px" right="0" textAlign="center" lineHeight="none">
                            <Box w={["50px", "65px", "80px"]}>
                                {arrowDown()}
                                {toolText("Type\nScript")}
                            </Box>
                            <Box w={["50px", "65px", "80px"]}>
                            <Box fontSize="24px"><FontAwesomeIcon icon={faArrowCircleDown} transform={{ rotate: -45 }} style={{ borderRadius: 50, backgroundColor: "white" }} /></Box>
                                {toolText("React")}
                            </Box>
                            <Box w={["50px", "65px", "80px"]}>
                                {arrowRight()}
                                {toolText("Redux")}
                            </Box>
                            <Box w={["50px", "70px", "80px"]}>
                            <Box fontSize="24px"><FontAwesomeIcon icon={faArrowCircleRight} transform={{ rotate: -45 }} style={{ borderRadius: 50, backgroundColor: "white" }} /></Box>
                                {toolText("React \n Router")}
                            </Box>
                            <Box w={["52px", "70px", "80px"]}>
                                {arrowUp()}
                                {toolText("Tailwind")}
                            </Box>
                            <Box w={["60px", "80px", "80px"]}>
                                <Box>
                                    {comboAButton()}
                                </Box>
                                {toolText("Firebase")}
                            </Box>
                        </Flex>
                    </Box >
                </Flex>
                <Grid w="100%" position="absolute" bottom="90px"
                templateColumns="repeat(10, 1fr)" justifyItems="center" alignItems="center"
                fontFamily="'Press Start 2P', cursive" fontSize={["24px", "42px", "60px"]} color="cyan.100">
                <Text>&#8593;</Text>
                <Text>&#8593;</Text>
                <Text>&#8595;</Text>
                <Text>&#8595;</Text>
                <Text transform="rotate(90deg)">&#8595;</Text>
                <Text transform="rotate(90deg)">&#8593;</Text>
                <Text transform="rotate(90deg)">&#8595;</Text>
                <Text transform="rotate(90deg)">&#8593;</Text>
                <Text color="yellow.400">B</Text>
                <Text color="red.600">A</Text>
                </Grid>
            </Box>
            <Box w="40px" h="40px" position="absolute" left="calc(50% - 20px)" bottom="40px" bgColor="gray.800" rounded="lg" />
            <Box w="60px" h="30px" position="absolute" left="calc(50% - 60px)" bottom="10px" bgColor="gray.800" rounded="lg" />
            <Box w="60px" h="30px" position="absolute" left="calc(50%)" bottom="10px" bgColor="gray.800" rounded="lg" />
            <Box w="30px" h="30px" position="absolute" left="calc(50% - 15px)" bottom="10px" bgColor="gray.300" rounded="full" />
        </Box>
    )
};

export default Projects;

