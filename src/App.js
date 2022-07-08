import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    
    
    super();
    this.state={
      searchString:'',
      family:[
        {
          name:'Vishnu Suvarnan',
          id:'101'
        },
        {
          name:'Veena Suvarnan',
          id:'102'
        },
        {
          name:'Sruthi Suvarnan',
          id:'103'
        },
        {
          name:'Renuka Devi Suvarnan',
          id:'104'
        },
        {
          name:'Santa Kumari Suvarnan',
          id:'105'
        }
      ],
      people:[
    ]
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((Response) => Response.json())
      .then((users) => 
        this.setState(
          () => {
            return { people:users }
          },
          () => {
            // console.log(this.state )
          }
        )
      );
      
  }
  searchFunc = (event) => {
    // console.log(event.target.value)
    const searchString = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {
        searchString
      };
    });
  }
  extraDet = (event) => {
    // console.log(event.target.parentElement.parentElement.parentElement.nextElementSibling)
    event.target.parentElement.parentElement.parentElement.nextElementSibling.style.display="block";

  }
  closeInfo = (event) => {
    // if(event.target=)
    event.target.closest('.show').style.display="none";
    console.log()

  }
  detailsDet = (event) =>{
    const viewInfo = event.target.parentElement.previousElementSibling;
                            // const viewInfo = document.querySelector('.person-info')
                            if(viewInfo.style.opacity == 0)
                            {
                              viewInfo.style.opacity="1"
                              // event.target.style.bottom="60px";
                              event.target.parentElement.classList.add('d-flex')
                              event.target.innerHTML=`Hide Details`
                              
                            }
                            else{
                              viewInfo.style.opacity="0"
                              event.target.parentElement.classList.remove('d-flex')
                              // event.target.style.position="absolute";
                              event.target.style.bottom="100px";
                              event.target.innerHTML=`Show Details`
                            }
  }
  render()
  {  
    
    const filterList = this.state.people.filter((people) => {
      return people.name.toLocaleLowerCase().includes(this.state.searchString);
    });
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <h1>Family</h1> 
          {this.state.family.map((family) => {
            return(
              <div key={family.id}>
                  <h3>{family.name}</h3>
              </div>
            );
          })} */}
          {/* <br></br> */}
          <div class="circle"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
        <div class="circle4"></div>
        <div class="circle5"></div>
            <h1>People</h1> 
            <div class="search">
              <input placeholder="Enter" className='search-box' type='search-box' onChange={this.searchFunc}/>
              <svg class="search-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g id="search"><path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z"/></g></svg>
            </div>
            <div class="person-wrapper">
              {filterList.map((people) => {
                return(
                  
                  <><div class="person-box">
                    <div key={people.id}>
                      <h2>{people.name}</h2>
                      <div class="person-info">
                        <h5>{people.email}</h5>
                        <h5>{people.phone}</h5>
                        <h5>{people.address.city}</h5>
                      </div>
                      <div class="cta-btn">
                        <button class="btn-extra" onClick={this.extraDet}> Show More</button>
                        <button class="btn-info" onClick={this.detailsDet}> Show Details</button>
                      </div>
                    </div>
                  </div><div class="show">
                      <div class="show--box">
                        
                        <div class="info-wrapper">
                          <h2 class="name"> Name : {people.name}</h2>
                          <h5 class="username">Username : {people.username}</h5>
                          <h5 class="email">Email : {people.email}</h5>
                          <h5 class="phone"> Phone : {people.phone}</h5>
                          <h5 class="website">Website : {people.website}</h5>
                          <h5 class="addrs">Address : {people.address.street}, {people.address.suite}, {people.address.city}, {people.address.zipcode}</h5>
                          <h5 class="company">Work Place : {people.company.name}, {people.company.bs}  </h5>
                          <button onClick={this.closeInfo} class="btn-close">
                            <svg ><g><polyline fill="none" points="   649,137.999 675,137.999 675,155.999 661,155.999  " stroke="#FFFFFF"  /><polyline fill="none" points="   653,155.999 649,155.999 649,141.999  " stroke="#FFFFFF"   /><polyline fill="none" points="   661,156 653,162 653,156  " stroke="#FFFFFF"   /></g><g><path d="M11.312,12.766c0.194,0.195,0.449,0.292,0.704,0.292c0.255,0,0.51-0.097,0.704-0.292c0.389-0.389,0.389-1.02,0-1.409   L4.755,3.384c-0.389-0.389-1.019-0.389-1.408,0s-0.389,1.02,0,1.409L11.312,12.766z"/><path d="M17.407,16.048L28.652,4.793c0.389-0.389,0.389-1.02,0-1.409c-0.389-0.389-1.019-0.561-1.408-0.171L15.296,15   c0,0-0.296,0-0.296,0s0,0.345,0,0.345L3.2,27.303c-0.389,0.389-0.315,1.02,0.073,1.409c0.194,0.195,0.486,0.292,0.741,0.292   s0.528-0.097,0.722-0.292L15.99,17.458l11.249,11.255c0.194,0.195,0.452,0.292,0.706,0.292s0.511-0.097,0.705-0.292   c0.389-0.389,0.39-1.02,0.001-1.409L17.407,16.048z"/></g></svg>
                        </button>
                          <button  class="btn-close2" onClick={this.closeInfo}>Close</button>
                        </div>
                      </div>
                    </div></>
                  
                );
              })}
            </div>
        </div>
        
      </div>
    );
  }
}

export default App;
