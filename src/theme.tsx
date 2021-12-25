import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        global: {
            body: {
                fontFamily: "'Barlow Condensed', sans-serif"
            }
        }
    }
});

export default theme;