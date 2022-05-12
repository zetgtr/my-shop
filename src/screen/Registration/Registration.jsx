import React, {useState} from "react";
import { ContentReg } from "../../Components/Registration/ContentReg"
import { RegHeader } from "../../Components/Registration/RegHeader"

export const Registration = () => {
    const [sengIn, setSengIn] = useState(false);
    const hendleChengeSangIn = () => {
        setSengIn(!sengIn);
      };
    return (
        <>
        <RegHeader sengIn={sengIn}/>
        <ContentReg hendleChengeSangIn={hendleChengeSangIn} sengIn={sengIn}/>
        </>
    )
}