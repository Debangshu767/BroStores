import React from 'react'
import { FaCalculator, FaHome, FaRing, FaTshirt} from 'react-icons/fa'
import { GiAmpleDress } from 'react-icons/gi'

function Icons({category}) {

  switch(category) {
    case 'electronics' : {
        return <FaCalculator />
    }
    case 'jewelery' : {
        return < FaRing />
    }
    case "men's clothing" : {
        return < FaTshirt />
    }
    case "women's clothing" : {
        return < GiAmpleDress />
    }
    case "Home" : {
        return < FaHome />
    }
  }
}

export default Icons