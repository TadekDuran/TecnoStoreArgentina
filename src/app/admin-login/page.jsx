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
    <div className="min-h-screen flex items-center justify-center bg-primary-background">
      <div className="w-full max-w-md p-8 space-y-8 bg-secondary-background rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary-text">Acceso de Administrador</h1>
          <p className="mt-2 text-secondary-text">Ingrese sus credenciales para continuar</p>
        </div>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-primary-text">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              placeholder="Ingrese clave de administrador"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              autoComplete="current-password"
            />
          </div>
  
          <button
            onClick={handleLogin}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-button-text bg-tertiary-background hover:bg-tertiary-background-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Ingresar
          </button>
  
          {error && (
            <div className="text-center py-2 px-4 bg-tertiary-background text-red-600 rounded-md">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
