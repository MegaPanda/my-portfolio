import { Box, BoxProps, Flex, Image, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const MotionBox = motion<BoxProps>(Box);

function Projects() {
    const comboButton = (color: string, text: string, rotate?: string) => {
        return (
            <Flex w="24px" h="24px" rounded="full" m="auto" bgColor={color} fontFamily="'Press Start 2P', cursive">
                <Box w="13px" h="14px" m="auto" color="gray.50" fontSize="14px" fontWeight="bold" transform={rotate ? rotate : "none"}>{text}</Box>
            </Flex>
        )
    };
    const aButton = comboButton("red.600", "A");
    const bButton = comboButton("yellow.400", "B");
    const xButton = comboButton("blue.500", "X");
    const yButton = comboButton("green.600", "Y");
    const upButton = comboButton("black", "↑");
    const downButton = comboButton("black", "↓");
    const leftButton = comboButton("black", "↓", "rotate(90deg)");
    const rightButton = comboButton("black", "↑", "rotate(90deg)");
    const comboChild = (children: JSX.Element) => {
        return (
            <MotionBox variants={combo}>{children}</MotionBox>
        )
    };
    const githubIcon = () => <FontAwesomeIcon icon={faGithub} size="lg" />
    const comboText = (text: string) => <Text mt="6px" color="orange.400" fontSize={["10px", "12px"]} fontWeight="semibold" lineHeight={["10px", "12px"]} whiteSpace="pre-line">{text}</Text>
    
    const comboContainer = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };
    const combo = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transform: ["scale(5)", "scale(1.2)", "scale(1)"], transition: { duration: 0.1 } }
    };
    const projectInView = { scale: 1, transition: { delay: 0.2, type: "spring", bounce: 0.5 } };
    

    return (
        <Box w="100%" minH="100vh" bgColor="gray.700" position="relative" overflow="hidden">
            <Box w="100%" maxW="1024px" m="auto" pt="80px" pb={["120px", "150px"]} position="relative">
                <Box>
                    <Text py="10px" fontFamily="'Press Start 2P', cursive"
                    fontSize={["29px", "42px", "64px"]} fontWeight="extrabold" color="cyan.100">PLAYGROUND.</Text>
                </Box>
                <Flex px={[null, null, "20px"]} direction="column" gap="60px">

                    {/* project no.1 */}
                    <MotionBox w={["85%", "450px", "600px"]} m={["auto", null, "unset"]} p="20px" 
                    bgColor="white" rounded="lg" position="relative"
                    initial={{ scale: 0.7 }} whileInView={projectInView} viewport={{ once: true }}>
                        <Flex fontSize="20px" fontWeight="extrabold" justifyContent="space-between">
                            <Text pl={[null, "20px"]}>Carb Cycling Planner</Text>
                            <MotionBox whileHover={{ scale: 1.2 }}>
                                <Box as="a" target="_blank" href="https://github.com/MegaPanda/carb-cycling-planner" cursor="pointer">
                                    {githubIcon()}
                                </Box>
                            </MotionBox>
                        </Flex>
                        <Flex py="20px" direction={["column", null, "row"]} gap={["20px", null, "40px"]} justifyContent="center" alignItems="center">
                            <MotionBox whileHover={{ scale: 1.1 }} position="relative">
                                <Box as="a" target="_blank" href="https://carb-cycling-planner.web.app" cursor="pointer">
                                    <Image src="/carb-cycling-planner.jpg" alt="Carb Cycling Planner"
                                    boxSize={["240px", "300px", "250px"]} objectFit="cover" objectPosition="center top" 
                                    border="2px solid #CBD5E0" borderRadius="md" />
                                    <FontAwesomeIcon icon={faExternalLinkAlt} color="#4A5568" size="lg"
                                    style={{ position: "absolute", bottom: "10px", right: "10px" }}/>
                                </Box>
                            </MotionBox>
                            <Box>
                                <Text w={["240px", "320px", "250px"]} fontSize="16px" textAlign="justify" fontWeight="medium" lineHeight="short">
                                    A web app for easy planning and tracking your carb cycling diet. Calculate your TDEE,
                                    set up your goal, and choose between high-mid-low carb to know your daily targeting 
                                    micros. Search or simply create your own food data to keep your diet diary on track.
                                    The app will automatically calculate the consumed calories and visualize your progress.
                                </Text>
                            </Box>
                        </Flex>
                        <Flex gap={["8px", "20px", "40px"]} justifyContent="center" textAlign="center" lineHeight="none">
                            <Box>
                                {downButton}
                                {comboText("Type\nScript")}
                            </Box>
                            <Box>
                                {downButton}
                                {comboText("React")}
                            </Box>
                            <Box>
                                {comboButton("black", "↓", "rotate(45deg)")}
                                {comboText("Redux")}
                            </Box>
                            <Box>
                                {leftButton}
                                {comboText("React \n Router")}
                            </Box>
                            <Box>
                                {yButton}
                                {comboText("styled \n com-\nponents")}
                            </Box>
                            <Box>
                                {yButton}
                                {comboText("Firebase \n Auth.")}
                            </Box>
                            <Box>
                                {xButton}
                                {comboText("Fire\nstore")}
                            </Box>
                        </Flex>
                    </MotionBox>

                    {/* project no.2 */}
                    <MotionBox w={["85%", "450px", "600px"]} m={["auto", null, "unset"]} p="20px" 
                    bgColor="white" rounded="lg" alignSelf="end" position="relative"
                    initial={{ scale: 0.7 }} whileInView={projectInView} viewport={{ once: true }}>
                        <Flex fontSize="20px" fontWeight="extrabold" justifyContent="space-between">
                            <Text pl={[null, "20px"]}>Synthing Panda</Text>
                            <MotionBox whileHover={{ scale: 1.2 }}>
                                <Box as="a" target="_blank" href="https://github.com/MegaPanda/synthing-panda" cursor="pointer">
                                    {githubIcon()}
                                </Box>
                            </MotionBox>
                        </Flex>
                        <Flex py="20px" direction={["column", null, "row"]} gap={["20px",null, "40px"]} justifyContent="center" alignItems="center">
                            <MotionBox whileHover={{ scale: 1.1 }} position="relative">
                                <Box as="a" target="_blank" href="https://synthing-panda.netlify.app/" cursor="pointer">
                                    <Image src="/synthing-panda.jpg" alt="Synthing Panda"
                                    boxSize={["240px", "300px", "250px"]} objectFit="cover" objectPosition="center top" 
                                    border="2px solid #CBD5E0" borderRadius="md" />
                                    <FontAwesomeIcon icon={faExternalLinkAlt} color="white" size="lg"
                                    style={{ position: "absolute", bottom: "10px", right: "10px" }}/>
                                </Box>
                            </MotionBox>
                            <Box>
                                <Text w={["240px", "320px", "250px"]} fontSize={["14px", "16px"]} textAlign="justify" fontWeight="medium" lineHeight="short">
                                    Inspired by Google Arts &amp; Culture's Blob Opera, this small, fun, interactive piece  
                                    is built with Three.js for 3D animation and Tone.js for web audio processing. The 3D
                                    panda model is created with Blender.
                                </Text>
                            </Box>
                        </Flex>
                        <Flex gap={["20px", "30px", "40px"]} justifyContent="center" textAlign="center" lineHeight="none">
                            <Box>
                                {aButton}
                                {comboText("Tone.js")}
                            </Box>
                            <Box>
                                {rightButton}
                                {comboText("Java\nScript")}
                            </Box>
                            <Box>
                                {rightButton}
                                {comboText("React")}
                            </Box>
                            <Box>
                                {bButton}
                                {comboText("React \n Three \n Fiber")}
                            </Box>
                            <Box>
                                {xButton}
                                {comboText("Drei")}
                            </Box>
                        </Flex>
                    </MotionBox>

                    {/* project no.3 */}
                    <MotionBox w={["85%", "450px", "600px"]} m={["auto", null, "unset"]} p="20px" 
                    bgColor="white" rounded="lg" position="relative"
                    initial={{ scale: 0.7 }} whileInView={projectInView} viewport={{ once: true }}>
                        <Flex fontSize="20px" fontWeight="extrabold" justifyContent="space-between">
                            <Text pl={[null, "20px"]}>Fluffy T-Shirt Shop</Text>
                            <MotionBox whileHover={{ scale: 1.2 }}>
                                <Box as="a" target="_blank" href="https://github.com/MegaPanda/fluffy-tshirt-shop" cursor="pointer">
                                    {githubIcon()}
                                </Box>
                            </MotionBox>
                        </Flex>
                        <Flex py="20px" direction={["column", null, "row"]} gap={["20px", null, "40px"]} justifyContent="center" alignItems="center">
                            <MotionBox whileHover={{ scale: 1.1 }} position="relative">
                                <Box as="a" target="_blank" href="https://megapanda.github.io/fluffy-tshirt-shop/" cursor="pointer">
                                    <Image src="/fluffy-shop.jpg" alt="Fluffy T-shirt Shop"
                                    boxSize={["240px", "300px", "250px"]} objectFit="cover" objectPosition="center top" 
                                    border="2px solid #1A202C" borderRadius="md" />
                                    <FontAwesomeIcon icon={faExternalLinkAlt} color="white" size="lg"
                                    style={{ position: "absolute", bottom: "10px", right: "10px" }}/>
                                </Box>
                            </MotionBox>
                            <Box>
                                <Text w={["240px", "320px", "250px"]} fontSize={["14px", "16px"]} textAlign="justify" fontWeight="medium" lineHeight="short">
                                    Fluffy T-Shirt Shop is a single-page, user-friendly shopping website built with 
                                    TypeScript and React. It's fully responsive with the help of the CSS framework 
                                    Tailwind. Firebase Realtime Database is deployed for data-fetching and storing
                                    customers' order information.
                                </Text>
                            </Box>
                        </Flex>
                        <Flex gap={["8px", "20px", "40px"]} justifyContent="center" textAlign="center" lineHeight="none">
                            <Box>
                                {downButton}
                                {comboText("Type\nScript")}
                            </Box>
                            <Box>
                                {comboButton("black", "↑", "rotate(135deg)")}
                                {comboText("React")}
                            </Box>
                            <Box>
                                {rightButton}
                                {comboText("Redux")}
                            </Box>
                            <Box>
                                {comboButton("black", "↑", "rotate(45deg)")}
                                {comboText("React \n Router")}
                            </Box>
                            <Box>
                                {upButton}
                                {comboText("Tailwind")}
                            </Box>
                            <Box>
                                {aButton}
                                {comboText("Firebase")}
                            </Box>
                        </Flex>
                    </MotionBox>
                </Flex>
                {/* section divider */}
                <Box height={["120px", "150px"]} />
                {/* konami cheat code */}
                <MotionBox display="flex" m="auto" lineHeight="none" 
                transform={["scale(1.5)", "scale(2)", "scale(2.5)"]} justifyContent="center" gap={{ md: "8px" }}
                variants={comboContainer} initial="hidden" whileInView="show" viewport={{ once: true }}
                >
                    {comboChild(upButton)}
                    {comboChild(upButton)}
                    {comboChild(downButton)}
                    {comboChild(downButton)}
                    {comboChild(leftButton)}
                    {comboChild(rightButton)}
                    {comboChild(leftButton)}
                    {comboChild(rightButton)}
                    {comboChild(bButton)}
                    {comboChild(aButton)}
                </MotionBox>
            </Box>

            {/* direction pad */}
            <Box w="40px" h="40px" position="absolute" left="calc(50% - 20px)" bottom="40px" bgColor="gray.800" rounded="lg" />
            <Box w="60px" h="30px" position="absolute" left="calc(50% - 60px)" bottom="10px" bgColor="gray.800" rounded="lg" />
            <Box w="60px" h="30px" position="absolute" left="calc(50%)" bottom="10px" bgColor="gray.800" rounded="lg" />
            <Box w="30px" h="30px" position="absolute" left="calc(50% - 15px)" bottom="10px" bgColor="gray.300" rounded="full" />
        </Box>
    )
};

export default Projects;

