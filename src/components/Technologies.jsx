import React from 'react';
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { RiJavascriptLine } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiReactjsLine } from 'react-icons/ri';
import { SiPostman } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { SiFirebase } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { SiNetlify } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { motion } from "framer-motion";

const inconVariants = (duration) => ({
    initial: {y: -10},
    animate:{
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    }
     

})
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1
        whileInView={{opacity:1, y:0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration:1.5}}
        className='my-20 text-center text-4xl'>Technologies</motion.h1>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={inconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoHtml5 className='text-7xl' style={{color: "#f06529"}}/>
            </motion.div>
            <motion.div 
            variants={inconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoCss3 className='text-7xl' style={{color: "#264de4"}}/>
            </motion.div>
            <motion.div 
            variants={inconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className='text-7xl' style={{color: "#6d28d9"}}/>
            </motion.div>
            <motion.div 
            variants={inconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaBootstrap className='text-7xl' style={{color: "#0d6efd"}}/>
            </motion.div>
            <motion.div 
            variants={inconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiJavascriptLine className='text-7xl' style={{color: "#F0DB4F"}}/>
            </motion.div>
            <motion.div 
            variants={inconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className='text-7xl text-cyan-400'  />
            </motion.div>
            <motion.div 
            variants={inconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPostman className='text-7xl 'style={{color: "#ef5b25 "}}/>
            </motion.div>
            <motion.div 
            variants={inconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGitAlt className='text-7xl ' style={{color: "#f34f29  "}}/>
            </motion.div>
            <motion.div 
            variants={inconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoGithub className='text-7xl '/> 
            </motion.div>
            <motion.div 
            variants={inconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiFirebase className='text-7xl ' style={{color: "#FFA611"}}/>
            </motion.div>
            <motion.div 
            variants={inconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className='text-7xl ' style={{color: "#68a063"}}/>
            </motion.div>
            <motion.div
            variants={inconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className='text-7xl ' style={{color: "#00758f"}}/>
            </motion.div>
            <motion.div 
            variants={inconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className='text-7xl ' style={{color: "#00758f"}}/>
            </motion.div>
            <motion.div
            variants={inconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiNetlify className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div
            variants={inconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoVercel className='text-7xl text-cyan-400'/>
            </motion.div>
            
        </motion.div>
    </div>
  )
}

export default Technologies;