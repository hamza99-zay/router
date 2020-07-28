import React from 'react'
import "./Components.css"


function Home() {
    return (
        <div className="Main">
           <div class="columns">
  <ul class="price">
    <li class="header">Basic</li>
    <li class="grey">$ 9.99 / year</li>
    <li>HD Resolution</li>
    <li>Display on 1 screens in the same time</li>
    <li>Only Films and Series</li>


  </ul>
</div>

<div class="columns">
  <ul class="price">
    <li class="header">Pro</li>
    <li class="grey">$ 24.99 / year</li>
    <li>2K Resolution</li>
    <li>Display on 2 screens in the same time</li>
    <li>Films,Series and IPtv</li>

  </ul>
</div>

<div class="columns">
  <ul class="price">
    <li class="header">Premium</li>
    <li class="grey">$ 49.99 / year</li>
    <li>4K Resolution</li>
    <li>Display on 4 screens in the same time</li>
    <li>Films,Series,IPtv and LIVE Streaming</li>

    
  </ul>
</div>

        </div>
    )
}

export default Home