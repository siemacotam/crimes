import LoginPanel from "../LoginPanel/LoginPanel";

const Register = () => {
  return (
    <div className="register">
      <h2 className="home__title text-center">Rejestracja konta</h2>
      <p className="register__text">
        Od rozpoczęcia przygody dzieli Cię już tylko jeden krok. Załóż konto i
        rywalizuj z innymi graczami o miano mafioso nr.1. Zawieraj sojusze,
        walcz i zbieraj punkty respektu i wygraj atrakcyjne nagrody.
      </p>
      <LoginPanel register={true} />
    </div>
  );
};

export default Register;
