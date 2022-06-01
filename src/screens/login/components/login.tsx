import {Wrapper, Input} from "./login.styled";
import {Grid} from "@mui/material";
import { useCallback, useEffect, useState } from "react";

export default function Form () {
    const[data, setData] = useState ({
        email: '',
        password: ''
    })

const handleChange = useCallback (
    ({target}: any) => {
        setData(prevData => ({
            ...prevData,
            [target.name]: target.value
        }))
 
},
    [setData]
)

useEffect (
    () => {
        console.log(data)
    },
    [data]
)

    return (
        <Wrapper container justifyContent= 'center' alignContent= 'center' >
            <Grid xs={2} container justifyContent= 'center' alignContent= 'center'>
            <Input 
            type='email' 
            name='email' 
            placeholder= 'email'
            onChange={handleChange}/>
            <Input 
            type='password' 
            name='password' 
            placeholder= 'senha'
            onChange={handleChange}/>

            
            </Grid>
        </Wrapper>
    )
}


