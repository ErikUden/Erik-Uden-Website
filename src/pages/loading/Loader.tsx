import { Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const Loader = () => {
  return (
    <Flex minH={"100vh"} w={"full"} align={"center"} justify={"center"}>
      <motion.div
        animate={{
          rotate: [0, 375, 360],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            bounce: 0.5,
          },
        }}
      >
        <Image src={"/assets/Fediverse-Logo.svg"} h={"128px"} />
      </motion.div>
    </Flex>
  );
};
