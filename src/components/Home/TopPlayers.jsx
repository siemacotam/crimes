const TopPlayers = () => {
  return (
    <div className="home__topPlayers">
      <p className="text-bold">Top gracze</p>
      <table>
        <thead>
          <tr>
            <th>M-ce</th>
            <th>Uzytkownik</th>
            <th>Respekt</th>
          </tr>
        </thead>
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
      </table>
    </div>
  );
};

export default TopPlayers;
