import styles from "../styles/Index.module.scss";
import Link from "next/link";
// import { name } from './../.next/server/app/page';
export default function Page() {
  return (
    <>
      <div className={styles.profile}>
        <div className={styles["profile-text"]}>
          <h1 className={styles.title}>Hello, Drawing Queen!</h1>

          {/* <Link href="/room">Gå til et rum</Link> */}

          <form action="/room" method="post">
            <input type="text" name="name" placeholder="Navn" />

            <div className={styles.color}>
              <svg
                className={styles["profile-icon"]}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                version="1.1"
              >
                <path
                  //   fill="#686d78"
                  d="M0 1024v-72.874521c0-149.917478 93.497315-353.841814 241.330575-402.948929l9.031614-2.998349 4.497524 8.117483a316.618401 316.618401 0 0 0 33.201237 48.485506l10.567354 12.688138-16.088705 4.387828c-118.178851 32.579628-201.986378 215.917734-206.88612 332.341454h872.519723c-4.899742-116.387154-99.457449-299.834957-217.6363-332.341454l-16.088705-4.387828 10.457658-12.578442a316.874358 316.874358 0 0 0 33.201237-48.485507l4.497524-8.117483 8.921918 2.888654c147.979521 49.107115 252.300146 252.994886 252.300147 402.948929V1024H0z m511.91334-365.652386a246.888491 246.888491 0 0 1-255.95667-255.95667V256.129989a246.888491 246.888491 0 0 1 255.95667-255.95667 246.888491 246.888491 0 0 1 255.956671 255.95667v146.260955a246.888491 246.888491 0 0 1-255.956671 255.95667z m182.826193-402.217625A182.826193 182.826193 0 1 0 329.087147 256.129989v146.260955a182.826193 182.826193 0 1 0 365.652386 0V256.129989z"
                />
              </svg>
              <label for="colors">Vælg farve:</label>
              <input type="color" id="colors"></input>
            </div>

            <input className={styles.btn} type="submit" value="Start" />
          </form>
        </div>
      </div>
    </>
  );
}
