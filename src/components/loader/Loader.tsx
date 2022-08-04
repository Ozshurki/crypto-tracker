import React from "react";
import {motion} from "framer-motion";
import {LoaderS} from "./Loader.Style";

const loaderContainerVariants = {
    start: {
        transition: {
            staggerChildren: 0.1
        }
    },
    end: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const loaderDotVariants = {
    start: {
        y: "0%"
    },
    end: {
        y: "200%"
    }
};

const loaderDotTransition = {
    duration: 0.4,
    yoyo: Infinity,
    ease: "easeInOut"
};

const Loader: React.FC = () => {
    return (
        <LoaderS as={motion.div}
                    variants={loaderContainerVariants}
                    initial="start"
                    animate="end">
            <motion.span className="loader-dot"
                         variants={loaderDotVariants}
                         transition={loaderDotTransition}/>
            <motion.span className="loader-dot"
                         variants={loaderDotVariants}
                         transition={loaderDotTransition}/>
            <motion.span className="loader-dot"
                         variants={loaderDotVariants}
                         transition={loaderDotTransition}/>
        </LoaderS>
    );
};
export default Loader;