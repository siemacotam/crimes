const Competition = () => {
  const prices = {
    bestUserPrices: [
      { position: 1, cash: 300, credits: 1000 },
      { position: 2, cash: 250, credits: 800 },
      { position: 3, cash: 200, credits: 600 },
      { position: 4, cash: 150, credits: 400 },
      { position: 5, cash: 100, credits: 200 },
    ],
    bestKillerPrices: [
      { position: 1, cash: 300, credits: 1000 },
      { position: 2, cash: 250, credits: 800 },
      { position: 3, cash: 200, credits: 600 },
      { position: 4, cash: 150, credits: 400 },
      { position: 5, cash: 100, credits: 200 },
    ],
  };

  const showPrices = (whichPrice) => {
    return (
      whichPrice &&
      whichPrice.map((i) => {
        return (
          <p key={i.position}>
            <span className="text-bold">#{i.position}</span>: {i.cash} Eur lub{" "}
            {i.credits} kredytów
          </p>
        );
      })
    );
  };

  const { bestUserPrices, bestKillerPrices } = prices;

  return (
    <div className="home__competition">
      <h3 className="home__subtitle text-center">Konkurs !</h3>
      <p className="home__text">
        Wygraj nargody razem z nami! Z każdym zakupem w grze pula nagród
        zostanie zwiększona. W obecnej edycji do wygrania nastepujące przedmioty
        :
      </p>
      <p className="home__subtitle">Dla najlepszych graczy :</p>
      {showPrices(bestUserPrices)}
      <p className="home__subtitle">Dla najlepszych zabójców :</p>
      {showPrices(bestKillerPrices)}
    </div>
  );
};

export default Competition;
