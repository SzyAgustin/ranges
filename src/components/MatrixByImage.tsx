import React from 'react'
import BBvsBTN from '../images/BBvsBTN.PNG'
import BBvsMP from '../images/BB vs MP.PNG'
import BBvsCO from '../images/BB vs CO.PNG'
import BBvsUTG from '../images/BB vs UTG.PNG'
import BBvsSB from '../images/BB vs SB.PNG'
import BTNvsCO from '../images/BTN 3BET vs CO.PNG'
import BTNvsUTG from '../images/BTN 3BET vs UTG.PNG'
import BTNvsMP from '../images/BTN 3BET vs MP.PNG'
import BTNvsSB from '../images/BTN vs 3BET IP.PNG'
import BTNvsBB from '../images/BTN vs 3BET IP.PNG'
import BTNOR from '../images/BTN OR.PNG'
import SBvsUTG from '../images/SB 3BET vs UTG.PNG'
import SBvsMP from '../images/SB 3BET vs MP.PNG'
import SBvsCO from '../images/SB 3BET vs CO.PNG'
import SBvsBTN from '../images/SB 3BET vs BTN.PNG'
import SBvsBB from '../images/SB vs 3BET OOP.PNG'
import SBOR from '../images/SB OR.PNG'
import COvsUTG from '../images/CO 3BET vs UTG.PNG'
import COvsMP from '../images/CO 3BET vs MP.PNG'
import COvsBTN from '../images/CO vs 3BET OOP.PNG'
import COvsSB from '../images/CO vs 3BET IP.PNG'
import COvsBB from '../images/CO vs 3BET IP.PNG'
import COOR from '../images/CO OR.PNG'
import MPvsUTG from '../images/MP 3BET vs UTG.PNG'
import MPvsCO from '../images/MP vs 3BET OOP.PNG'
import MPvsBTN from '../images/MP vs 3BET OOP.PNG'
import MPvsSB from '../images/MP vs 3BET IP.PNG'
import MPvsBB from '../images/MP vs 3BET IP.PNG'
import MPOR from '../images/MP OR.PNG'
import UTGvsMP from '../images/UTG vs 3BET OOP.PNG'
import UTGvsCO from '../images/UTG vs 3BET OOP.PNG'
import UTGvsBTN from '../images/UTG vs 3BET OOP.PNG'
import UTGvsSB from '../images/UTG vs 3BET IP.PNG'
import UTGvsBB from '../images/UTG vs 3BET IP.PNG'
import UTGOR from '../images/UTG OR.PNG'
import Black from '../images/black.png'

interface MatrixByImageProps {
    yourPosition: string,
    opponentPosition: string
}

const MatrixByImage = ({yourPosition, opponentPosition}: MatrixByImageProps) => {
    const getImg = () => {
        if (yourPosition === "BB" && opponentPosition === "UTG") return BBvsUTG;
        if (yourPosition === "BB" && opponentPosition === "MP") return BBvsMP;
        if (yourPosition === "BB" && opponentPosition === "CO") return BBvsCO;
        if (yourPosition === "BB" && opponentPosition === "BTN") return BBvsBTN;
        if (yourPosition === "BB" && opponentPosition === "SB") return BBvsSB;
        if (yourPosition === "SB" && opponentPosition === "UTG") return SBvsUTG;
        if (yourPosition === "SB" && opponentPosition === "MP") return SBvsMP;
        if (yourPosition === "SB" && opponentPosition === "CO") return SBvsCO;
        if (yourPosition === "SB" && opponentPosition === "BTN") return SBvsBTN;
        if (yourPosition === "SB" && opponentPosition === "BB") return SBvsBB;
        if (yourPosition === "SB" && opponentPosition === "") return SBOR;
        if (yourPosition === "BTN" && opponentPosition === "UTG") return BTNvsUTG;
        if (yourPosition === "BTN" && opponentPosition === "MP") return BTNvsMP;
        if (yourPosition === "BTN" && opponentPosition === "CO") return BTNvsCO;
        if (yourPosition === "BTN" && opponentPosition === "SB") return BTNvsSB;
        if (yourPosition === "BTN" && opponentPosition === "BB") return BTNvsBB;
        if (yourPosition === "BTN" && opponentPosition === "") return BTNOR;
        if (yourPosition === "CO" && opponentPosition === "UTG") return COvsUTG;
        if (yourPosition === "CO" && opponentPosition === "MP") return COvsMP;
        if (yourPosition === "CO" && opponentPosition === "BTN") return COvsBTN;
        if (yourPosition === "CO" && opponentPosition === "SB") return COvsSB;
        if (yourPosition === "CO" && opponentPosition === "BB") return COvsBB;
        if (yourPosition === "CO" && opponentPosition === "") return COOR;
        if (yourPosition === "MP" && opponentPosition === "UTG") return MPvsUTG;
        if (yourPosition === "MP" && opponentPosition === "CO") return MPvsCO;
        if (yourPosition === "MP" && opponentPosition === "BTN") return MPvsBTN;
        if (yourPosition === "MP" && opponentPosition === "SB") return MPvsSB;
        if (yourPosition === "MP" && opponentPosition === "BB") return MPvsBB;
        if (yourPosition === "MP" && opponentPosition === "") return MPOR;
        if (yourPosition === "UTG" && opponentPosition === "MP") return UTGvsMP;
        if (yourPosition === "UTG" && opponentPosition === "CO") return UTGvsCO;
        if (yourPosition === "UTG" && opponentPosition === "BTN") return UTGvsBTN;
        if (yourPosition === "UTG" && opponentPosition === "SB") return UTGvsSB;
        if (yourPosition === "UTG" && opponentPosition === "BB") return UTGvsBB;
        if (yourPosition === "UTG" && opponentPosition === "") return UTGOR;
        return Black;
    }

  return (
    <div>
        <img src={getImg()} alt="matrix" />
    </div>
  )
}

export default MatrixByImage