import Link from "next/link";

export default function Home() {
  return (
    <main style={styles.container}>
      <h1>Mini Social App</h1>
      <p>Connect. Share. Engage.</p>

      <div style={styles.buttonGroup}>
        <Link href="/login">
          <button style={styles.button}>Login</button>
        </Link>

        <Link href="/signup">
          <button style={styles.button}>Signup</button>
        </Link>
      </div>
    </main>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  },

  buttonGroup: {
    display: "flex",
    gap: "10px",
  },

  button: {
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "16px",
  },
};
