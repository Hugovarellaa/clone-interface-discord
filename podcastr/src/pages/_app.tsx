import "../styles/global.scss";
import { Header } from "../components/Header";
import { Player } from "../components/Player";
import styles from '../styles/app.module.scss';
import { PlayerContext } from "../contexts/PlayerContext";

export default function MyApp({ Component, pageProps }) {
  return (
    <PlayerContext.Provider value={''}>
    <div className={styles.appWrapper}>
      <main>
      <Header />
      <Component {...pageProps} />
      </main>
      <Player />
    </div>
    </PlayerContext.Provider >
  );
}
