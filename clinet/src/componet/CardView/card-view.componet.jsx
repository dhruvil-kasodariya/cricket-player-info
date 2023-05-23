import "./card-view.style.scss";
const CardView = ({ player }) => {
  const { role } = player;
  return (
    <div id="cards">
      <figure
        className={
          role === "BATSMEN"
            ? "card card--fire"
            : role === "ALL ROUNDER"
            ? "card card--water"
            : role === "WICKET KEEPER"
            ? "card card--normal"
            : role === "BOWLER"
            ? "card card--grass"
            : "card card--ice"
        }
      >
        <figcaption className="card__caption">
          <h1 className="card__name">{player.name}</h1>

          <h3 className="card__type">{player.role}</h3>

          <table className="card__stats">
            <tbody>
              <tr>
                <th>Batting Style :</th>
                <td>{player.battingStyle}</td>
              </tr>
              <tr>
                <th>Bowling Style :</th>
                <td>{player.bowlingStyle || "-"}</td>
              </tr>
            </tbody>
          </table>
        </figcaption>
      </figure>
    </div>
  );
};

export default CardView;

// <div id="cards">
// <figure className="card card--normal">
//   <div className="card__image-container">
//     <img
//       src="https://cdn.bulbagarden.net/upload/thumb/e/e2/133Eevee.png/1200px-133Eevee.png"
//       alt="Eevee"
//       className="card__image"
//     />
//   </div>

//   <figcaption className="card__caption">
//     <h1 className="card__name">{player.name}</h1>

//     <h3 className="card__type">normal</h3>

//     <table className="card__stats">
//       <tbody>
//         <tr>
//           <th>HP</th>
//           <td>55</td>
//         </tr>
//         <tr>
//           <th>Attack</th>
//           <td>55</td>
//         </tr>

//         <tr>
//           <th>Defense</th>
//           <td>50</td>
//         </tr>

//         <tr>
//           <th>Special Attack</th>
//           <td>45</td>
//         </tr>
//         <tr>
//           <th>Special Defense</th>
//           <td>65</td>
//         </tr>
//         <tr>
//           <th>Speed</th>
//           <td>55</td>
//         </tr>
//       </tbody>
//     </table>

//     <div className="card__abilities">
//       <h4 className="card__ability">
//         <span className="card__label">Ability</span>
//         Run Away
//       </h4>
//       <h4 className="card__ability">
//         <span className="card__label">Hidden Ability</span>
//         Anticipation
//       </h4>
//     </div>
//   </figcaption>
// </figure>
// </div>
