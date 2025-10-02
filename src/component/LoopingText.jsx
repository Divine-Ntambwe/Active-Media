import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    whiteSpace: "pre",
  },
  text: {
    fontFamily: "monospace",
    fontSize: "11px",
    letterSpacing: "1px",
  },
};

export default function LoopingText({ text, duration = 4000 }) {
  const [display, setDisplay] = useState("");
  const [isDecrypting, setIsDecrypting] = useState(true);

  useEffect(() => {
    let interval;
    let i = 0;
    const chars = "!@#$%^&*()_+-={}[]<>?/";

    const decrypt = () => {
      interval = setInterval(() => {
        setDisplay((prev) =>
          text
            .split("")
            .map((char, index) => (index <= i ? char : chars[Math.floor(Math.random() * chars.length)]))
            .join("")
        );
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setTimeout(() => setIsDecrypting(false), 1000);
        }
      }, duration / text.length);
    };

    const encrypt = () => {
      interval = setInterval(() => {
        setDisplay((prev) =>
          prev
            .split("")
            .map((char, index) => (index >= i ? chars[Math.floor(Math.random() * chars.length)] : char))
            .join("")
        );
        i--;
        if (i < 0) {
          clearInterval(interval);
          setTimeout(() => setIsDecrypting(true), 1000);
        }
      }, duration / text.length);
    };

    if (isDecrypting) {
      i = 0;
      decrypt();
    } else {
      i = text.length - 1;
      encrypt();
    }

    return () => clearInterval(interval);
  }, [isDecrypting, text, duration]);

  return (
    <motion.div style={styles.wrapper}>
      <span style={styles.text}>{display}</span>
    </motion.div>
  );
}
