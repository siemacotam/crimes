const TopPlayers = () => {
  return (
    <div className="home__topPlayers">
      <h4 className="home__subtitle text-bold">Top gracze</h4>
      <table>
        <thead>
          <tr>
            <th>M-ce</th>
            <th>Uzytkownik</th>
            <th>Respekt</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Maria</td>
            <td>100</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Francisco</td>
            <td>80</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Jacob</td>
            <td>60</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TopPlayers;
