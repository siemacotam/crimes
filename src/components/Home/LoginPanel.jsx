import { useContext, useState } from "react";
import { StoreContext } from "../../store/StoreProvider";
import { validateEmail } from "../../functions/validateEmail";

const LoginPanel = () => {
  const { users, setActiveUser, setIsLoggedIn } = useContext(StoreContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validateMessage, setValidateMessage] = useState("");

  const handleOnChangeEmail = (event) => setEmail(event.target.value);
  const handleOnChangePassword = (event) => setPassword(event.target.value);

  const resetStateOfInputs = () => {
    setEmail("");
    setPassword("");
    setValidateMessage("");
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    const userEmail = users.filter(
      (user) => user.email === email && user.email
    );
    const userPassword = users.filter(
      (userPassword) => userPassword.password === password && userPassword
    );
    let activeUser = users.filter(
      (user) => user.email === email && user.password === password && user
    );
    if (userEmail.length && userPassword.length && activeUser) {
      if (validateEmail(email)) {
        setActiveUser(activeUser[0]);
        setIsLoggedIn(true);
        resetStateOfInputs();
      } else {
        alert("niepoprawny adres email");
      }
    } else {
      setValidateMessage("Niepoprawny adres email lub hasło. spróbuj ponownie");
    }
  };

  const validateMessageInfo = validateMessage.length ? (
    <p className="validate-info text-red text-small text-center">
      {validateMessage}
    </p>
  ) : null;

  return (
    <>
      <form onSubmit={handleOnSubmit} className="form border">
        <div className="form__element">
          <label className="formElement__label">Email</label>
          <input
            onChange={handleOnChangeEmail}
            value={email}
            type="text"
            className="form__input"
            aria-describedby="email"
            placeholder="Wpisz swój adres email"
          />
        </div>
        <div className="form__element">
          <label className="formElement__label">Hasło</label>
          <input
            onChange={handleOnChangePassword}
            type="password"
            value={password}
            className="form__input"
            aria-describedby="password"
            placeholder="Hasło"
          />
          {validateMessageInfo}
        </div>
        <button type="submit" className="form__button">
          Zaloguj się
        </button>
        <p className="form__question text-bold text-center">
          Nie masz jeszcze konta ? Zarejestuj się w 5 minut
        </p>
      </form>
    </>
  );
};

export default LoginPanel;
