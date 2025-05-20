import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true); // true = login, false = register
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const resetForm = () => {
    setNome("");
    setEmail("");
    setPassword("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const url = isLogin
        ? "http://localhost:3005/user/login"
        : "http://localhost:3005/user";

      const bodyData = isLogin
        ? { email, password }
        : { nome, email, password };

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || "Errore nel login/registrazione");
      }

      const data = await response.json();

      // Salva utente e token nel context
      login(data.user, data.token);

      // Reindirizza alla home
      navigate("/");

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h2>{isLogin ? "Accedi" : "Registrati"}</h2>

      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">{isLogin ? "Login" : "Registrati"}</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <p style={{ marginTop: 20 }}>
        {isLogin ? (
          <>
            Non hai un account?{" "}
            <button
              type="button"
              onClick={() => {
                setIsLogin(false);
                resetForm();
              }}
            >
              Registrati
            </button>
          </>
        ) : (
          <>
            Hai già un account?{" "}
            <button
              type="button"
              onClick={() => {
                setIsLogin(true);
                resetForm();
              }}
            >
              Accedi
            </button>
          </>
        )}
      </p>
    </div>
  );
}
