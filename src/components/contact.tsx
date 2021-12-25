import { Box, Text, Flex, BoxProps } from "@chakra-ui/react";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useAnimation, useTransform, useViewportScroll } from "framer-motion";
import { useEffect } from "react";

const MotionBox = motion<BoxProps>(Box);

function Contact() {
    const { scrollYProgress } = useViewportScroll();
    const connectY = useTransform(scrollYProgress, [0.85, 1], [0, -200]);
    const controls = useAnimation();
    const iconPulse = {
        hidden: { borderColor: "#EDF2F7", color: "white", transform: "scale(1)", boxShadow: "0 0 0 0 rgba(246, 173, 85, 0)" },
        show: { 
            borderColor: ["#F6AD55", "#F6AD55"], 
            color: "#2C5282",
            transform: ["scale(0.95)", "scale(1)", "scale(0.95)"],         
            boxShadow: ["0 0 0 0 rgba(246, 173, 85, 0.7)", "0 0 0 120px rgba(246, 173, 85, 0)", "0 0 0 0 rgba(246, 173, 85, 0)"],
            transition: { repeat: Infinity, duration: 2 }
        }
    };
    const connectText = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    };
    const lyricsPopup = {
        hidden: { height: 0 },
        show: { height: "40%" }
    };
    const lyricsBox = {
        show: { translateY: ["130%", "-100%"], transition: { repeat: Infinity, duration: 8 } }
    };
    
    useEffect(() => {
        function playAnimation() {
            const progress = scrollYProgress.get();
            if (progress > 0.99) {
                controls.start("show");
            } else {
                controls.start("hidden");
            }
        };
        const unsubscribe = scrollYProgress.onChange(playAnimation);

        return () => unsubscribe();
    }, []);

    return (
        <Box w="100%" h="100vh" display="flex" flexDirection="column" alignItems="center" position="relative">
            {/* social icons with pulse effect */}
            <MotionBox w={["380px", "420px"]} h={["380px", "420px"]} borderWidth="14px" rounded="full" 
            position="absolute" top="15%"
            display="flex" gap="46px" alignItems="center" justifyContent="center"
            animate={controls} variants={iconPulse}
            >
                <Box as="a" target="_blank" href="mailto:weilunma@gmail.com" cursor="pointer">
                    <FontAwesomeIcon icon={faEnvelopeSquare} size="7x" />
                </Box>
                <Box as="a" target="_blank" href="https://www.linkedin.com/in/weilunma/" cursor="pointer">
                    <FontAwesomeIcon icon={faLinkedin} size="7x" />
                </Box>
            </MotionBox>
            {/* keypad down */}
            <Box zIndex={2} w="40px" h="40px" position="absolute" top="-10px" bgColor="gray.800" rounded="lg" />
            <Flex w="100%" maxW="1024px" flex={1} direction="column" justifyContent="space-between" alignItems="center">
                <MotionBox pt="30px" position="relative" initial={{ translateY: 180 }} style={{ y: connectY }}>
                    <Box w="25px" h="5px" m="auto" bgColor="gray.300" roundedTop="sm" />
                    <Box w="30px" h="30px" m="auto" bgColor="gray.800" roundedTop="sm" />
                    <Box as="span" pb="10px" px={["24px", "32px"]} fontSize={["60px", "80px"]} fontWeight="bold" textDecoration="underline"
                    bgColor="white" borderWidth="12px" borderStyle="solid" borderColor="gray.800" rounded="full"
                    >
                        <MotionBox as="span" animate={controls} variants={connectText}>Connect.</MotionBox>    
                    </Box>
                </MotionBox>
                
                <MotionBox w="100%" maxW="480px" roundedTop="3xl" bgColor="gray.800" color="white"
                pt="40px" fontSize={["24px", "30px"]} position="relative" overflow="hidden"
                _after={{
                    content: `""`,
                    position: "absolute",
                    top: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(180deg, rgba(26,32,44,1) 10%, rgba(26,32,44,0) 35%, rgba(26,32,44,0) 70%, rgba(26,32,44,1) 90%)",
                }}
                animate={controls} variants={lyricsPopup}>
                    <MotionBox zIndex={10} w={["250px", "320px"]} m="auto" animate={controls} variants={lyricsBox} >
                        <MotionBox >Hey, I just met you,</MotionBox>
                        <MotionBox >no, it's not crazy</MotionBox>
                        <MotionBox >And here's my handles,</MotionBox>
                        <MotionBox >so write me maybe!</MotionBox>
                    </MotionBox>
                </MotionBox>
            </Flex>
            
        </Box>
    )
};

export default Contact;