'use client'
import Image from "next/image";
import HomePage from "../Pages/home";
import Navbar from "@/components/navbar";
import { frame, motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      animate={{ y: 5 }}
      transition={{ ease: "easeOut", duration: .25 }}
    >
      <Navbar />
      <HomePage />
    </motion.div>
  );
}
