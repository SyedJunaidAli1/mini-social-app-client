"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <nav style={styles.nav}>
      <h2 style={{ cursor: "pointer" }} onClick={() => router.push("/feed")}>
        MiniSocial
      </h2>

      <div style={styles.links}>
        <Link href="/feed">Feed</Link>

        <button onClick={logout} style={styles.logout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    borderBottom: "1px solid #ddd",
    alignItems: "center",
  },

  links: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },

  logout: {
    padding: "6px 12px",
    cursor: "pointer",
  },
};
