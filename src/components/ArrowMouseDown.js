import React from "react";

import {chakra, shouldForwardProp,} from '@chakra-ui/react'
import {motion, isValidMotionProp} from 'framer-motion'

import { VscArrowDown,} from "react-icons/vsc";
import { RiArrowDownSLine,} from "react-icons/ri";

const ChakraBox = chakra (motion.div,{
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});


function ArrowMoveDown (){
    return(
        <ChakraBox
            animate={{
                scale: [1, 2, 2, 1, 1],
            }}
            transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop"
            }}
        >
            <RiArrowDownSLine size={25}/>
        </ChakraBox>
    );
}
export default ArrowMoveDown;