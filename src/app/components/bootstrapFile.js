"use client"
import { useEffect } from "react"

export default function Bootstrap(){
    useEffect(()=>{
        require('bootstrap/dist/js/bootstrap.min.js')
      })
    return(
        null
    )
}
