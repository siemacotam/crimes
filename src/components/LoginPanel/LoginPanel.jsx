import { useContext, useState } from "react";
import { StoreContext } from "../../store/StoreProvider";
import { validateEmail } from "../../functions/validateEmail";
import { Link } from "react-router-dom";

const LoginPanel = ({ register }) => {
  const { users, setUsers, setActiveUser, setIsLoggedIn } =
    useContext(StoreContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [checkedValidate, setCheckedValidate] = useState(true);
  const [validateMessage, setValidateMessage] = useState("");

  const handleOnChangeEmail = (event) => setEmail(event.target.value);
  const handleOnChangePassword = (event) => setPassword(event.target.value);
  const handleChecked = (event) => setIsChecked(event.target.checked);
  const resetStateOfInputs = () => {
    setEmail("");
    setPassword("");
    setValidateMessage("");
    register && setIsChecked(false);
  };

  const handleLogin = () => {
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

  const handleRegister = () => {
    const userEmail = users.filter(
      (user) => user.email === email && user.email
    );
    if (userEmail.length) {
      setValidateMessage("Wybrany adres email jest już w bazie danych");
      return;
    }
    setValidateMessage("");
    if (email.length && password.length) {
      if (!isChecked) {
        setCheckedValidate(false);
      } else {
        if (validateEmail(email)) {
          const newUser = {
            email: email,
            password: password,
          };
          const newUsersList = [...users];
          newUsersList.push(newUser);
          setUsers(newUsersList);
          setActiveUser(newUser);
          setIsLoggedIn(true);
          resetStateOfInputs();
          setCheckedValidate(true);
        } else {
          setValidateMessage("Niepoprawny format email");
        }
      }
    } else {
      setValidateMessage("Niepoprawny adres email lub hasło. spróbuj ponownie");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    register ? handleRegister() : handleLogin();
  };

  const homePanel = (
    <>
      <p className="form__question text-bold text-center">
        Nie masz jeszcze konta ? Zarejestuj się w 5 minut
      </p>
      <Link className="btn" to="/register">
        Zarejestruj
      </Link>
    </>
  );

  const termsCheckbox = (
    <div className="form__element">
      <label className="form__label form__label--flex">
        <input
          type="checkbox"
          className="form__input--checkbox"
          onChange={handleChecked}
          checked={isChecked}
        />
        <p>
          Akceptuję warunki rejestracji oraz reguły gry, oram mam skończone 18
          lat lub posiadam pozwolenie prawnych opiekunów na grę. *
        </p>
      </label>
      {!checkedValidate && (
        <p className="validate-info text-red">* Warunek konieczny </p>
      )}
    </div>
  );

  const buttonLabel = register
    ? "Załóż konto i zacznij przygodę !"
    : "Zaloguj się";

  const validateMessageInfo = validateMessage.length ? (
    <p className="validate-info text-red">{validateMessage}</p>
  ) : null;

  return (
    <>
      <form onSubmit={handleSubmit} className="form border">
        <div className="form__element">
          <label className="form__label">Email</label>
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
          <label className="form__label">Hasło</label>
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
        {register && termsCheckbox}
        <button type="submit" className="btn">
          {buttonLabel}
        </button>
        {!register && homePanel}
      </form>
    </>
  );
};

export default LoginPanel;
