/*import { useState, useEffect } from "react";*/

import Header from "../header/header"
import MainFirstScreen from "./screen1/first";
import MainSecondScreen from "./screen2/screen2";
import MainThirdScreen from "./screen3/screen3";
import MainLead from "./lead/lead";
import MainSixthScreen from "./screen6/screen6";
import MainEighthScreen from "./screen8/screen8";
import MainNinthScreen from "./screen9/screen9";
import MainElevenScreen from "./screen11/screen11";
import MainFooter from "./footer/footer";


function Main () {

return(    
<>
<Header/>
<MainFirstScreen/>
<MainSecondScreen/>
<MainLead/>

<MainSixthScreen/>
{/*<MainThirdScreen/>
<MainElevenScreen/>
*/}
<MainEighthScreen/>
<MainNinthScreen/>
<MainFooter/>
</>
)}

export default Main;