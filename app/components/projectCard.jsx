import { motion } from "framer-motion";

export default function projectCard(props) {
    const color = props.color;
    return (
        <motion.div
                        initial={{ opacity: 0, x: 0 }}
                        animate={{scale:1}}
                        whileInView={{opacity: 1}}
                    >
        <div>
            <img src={color} width="400px"/>
        </div>
        </motion.div>
    )
}