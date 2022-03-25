import axios from 'axios'
import React, { useState } from 'react'
import TextBox from './TextBox'
// @ts-ignore
import { AwesomeButton } from 'react-awesome-button'
import ResultList from './ResultList'

const Horoscope = () => {
  const [sun, setSun] = useState<string>("")
  const [moon, setMoon] = useState<string>("")
  const [rising, setRising] = useState<string>("")

  const [horoscope, setHoroscope] = useState<Array<string>>([])

  const requestHoroscope = () => {
    const toSend = {
        //TODO: Pass in the values for the data. Follow the format the route expects!
        sun: sun,
        moon: moon,
        rising: rising,
    };

    const config = {
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
        }
    }

    //Install and import axios!
    //TODO: Fill in 1) location for request 2) your data 3) configuration
    axios.post("http://localhost:4567/horoscope", toSend, config)
    .then(response => {
        console.log(response.data);
        const data: string[] = response.data["horoscope"]
        //TODO: Go to the Main.java in the server from the stencil, and find what field name you should put here.
        //Note: It is very important that you understand how this is set up and why it works!
        setHoroscope(data);
    })
    .catch(error => {
        console.log(error);
    });
  }


  return (
    <div>
      <h1>Horoscope</h1>
      <TextBox labelText='Enter Sun Sign' change={setSun}/>
      <TextBox labelText='Enter Moon Sign' change={setMoon}/>
      <TextBox labelText='Enter Rising Sign' change={setRising}/>
      <AwesomeButton onPress={() => requestHoroscope()}>Submit</AwesomeButton>
      <ResultList items={horoscope} />
    </div>
  )

}

export default Horoscope