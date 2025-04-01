"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async () => {
    setError(null);

    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    const data = await res.json();

    if (res.ok) {
      router.push("/admin");
    } else {
      setError(data.message || "Clave incorrecta");
    }
  };

  return (
    <div>
      <h1>Acceso de Administrador</h1>
      <input
        type="password"
        placeholder="Ingrese clave de administrador"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Ingresar</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
