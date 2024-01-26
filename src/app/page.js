import Image from "next/image";
import styles from "./page.module.css";
import Foto from "./components/foto";
import Text from "./components/text";

export default function Home() {
  const urll="https://pokeapi.co/api/v2/pokemon/2";
  return (
    <main className={styles.main}>
      <Foto url={urll}/>
      <Text url={urll}/>
    </main>
  );
}
