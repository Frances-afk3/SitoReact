import { Form } from "react-router-dom";

export default function Pacchetti() {
  const Pacchetto = {
    avatar: "https://robohash.org/you.png?size=200x200",
  };

  return (
      <main className="container">
          <div className="bg-body-tertiary p-5 rounded">
              <h2 className="text-center">Benvenuto nella sezione Pacchetti</h2>
              {/* Puoi aggiungere il contenuto del tuo album qui */}
          </div>
      </main>
  );
}
