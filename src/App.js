import React, { Component } from 'react';
import './App.css';

class App extends Component {
  

  MouseMove = (e)=> {
        var wrapper = document.getElementById('wrapper');
        var topLayer = wrapper.querySelector('.top');
        var handle = wrapper.querySelector('.handle');
        var skew = 0;
        var delta = 0;

         if(wrapper.className.indexOf('skewed') != -1){
           skew = 1000;
          }
        delta = (e.clientX - window.innerWidth / 2) * 0.5;
      
        handle.style.left = e.clientX + delta + 'px';

        topLayer.style.width= e.clientX + skew + delta + 'px';
  }



  render() {
    return (
      <section id="wrapper" className="skewed" onMouseMove={this.MouseMove}>

          <div className="layer bottom">
            <div className="content-wrap">
              <div className="content-body">
                <h1>Look Sharp</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quisquam temporibus dolore vero reiciendis atque debitis. Sequi at consequatur deserunt?</p>
              </div>
              <img src={require("./img/home.jpg")} alt=""/>
            </div>
          </div>

          <div className="layer top">
              <div className="content-wrap">
                <div className="content-body">
                  <h1>Stay Cool</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quisquam temporibus dolore vero reiciendis atque debitis. Sequi at consequatur deserunt?</p>
                </div>
                <img src={require("./img/homebanner.png")} alt=""/>
              </div>
            </div>

       <div className="handle"></div>

  </section>
    );
  }
}

export default App;
