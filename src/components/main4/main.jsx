/*import { useState, useEffect } from "react";*/

import Header from "./header/header"
import MainFirstScreen from "./scr1/first";
import MainSecondScreen from "./scr2/screen2";
import MainLead from "./scr3_lead/lead";
import MainFourScreen from "./scr4_etap/screen4";
import MainEighthScreen from "./scr5_about/screen5";
import MainNinthScreen from "./scr6_map/screen6";
import MainFooter from "./scr7_footer/footer";


function Main () {

return(    
<>
<Header/>
<MainFirstScreen/>
<MainSecondScreen/>
<MainLead/>
<MainFourScreen/>
<MainEighthScreen/>
<MainNinthScreen/>
<MainFooter/>
</>
)}

export default Main; 