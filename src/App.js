import React from 'react'
import "./index.css"

function App() {
  return (
    <div className='container'>
        <Container />
    </div>
  )
}
const Container =()=>{
    return(

    <div >
        {/* image */}
        <section className='container-image'>

        </section>


        {/* avatar */}
        <section className='avatar'>
            
        </section>


        {/* info */}
        <section className='info'>
            <h3>Ayeni Opeyemi <span>26</span></h3>
            <p>Lagos,Nigeria</p>
        </section>


        {/* stats */}
        <div className='stats'>
            <Stats header={'80k'} subhead={'Followers'} />
            <Stats header={'803k'} subhead={'likes'} />
            <Stats header={'1.4k'} subhead={'Photo'} />
        </div>
    </div>
    )
}

const Stats =({header,subhead})=>{
    return (
        <div className={"stats-child"}>
            <h2>{header}</h2>
            <p className='stats-paragraph'>{subhead}</p>
        </div>
    )
}

export default App