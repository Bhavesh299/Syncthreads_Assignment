import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setdata } from '../Redux/action'

export const Dashboard = () => {
    const cityname=["Mumbai","Pune","Nagpur","Delhi","Hydrabad","Chennai","Wardha","Bhusawal"]
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [city, setCity] = useState('')
  let key = '84e270f970a83172aa187868316821fa'
  const name = useSelector((state) => state.Map.userId)
  const getMap = (city) => {
    
     
         axios
            .get(
              `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`,
            )
            .then((res) => {
              console.log(res.data)
              dispatch(setdata(res.data))
              navigate("/map")
            })
            .catch((err) => {
              console.log(err)
            })
    
  }
  useEffect(() => {
    getMap(city)
  }, [city])
  return (
    <div>
        {cityname.map((e)=>{
            console.log(e)
               return(
                <div className=''>
                       {name==null ? <div
                    onClick={() => {
                     alert("You Have Not Logged In, Please Login")
                    }}
                  >
                   {e}
                  </div>:<div
                    onClick={() => {
                      setCity(e)
                    }}
                  >
                  {e}
                  </div>}
                </div>
             
               )
        })}
       
   
      
     
    </div>
  )
}
