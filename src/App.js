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
        {
          id:'101',
          name:'Harry James Potter',
          image:'https://media.contentapi.ea.com/content/dam/gin/images/2017/01/harry-potter-goblet-of-fire-key-art.jpg.adapt.crop191x100.628p.jpg',
          house:'Gryffindor',
          website:'https://harrypotter.fandom.com/wiki/Harry_Potter',
          desc:'Harry James[58] Potter (b. 31 July 1980)[1] was an English half-blood[2] wizard, and one of the most famous wizards of modern times. The only child and son of James and Lily Potter (née Evans), Harry\'s birth was overshadowed by a prophecy, naming either himself or Neville Longbottom as the one with the power to vanquish Lord Voldemort, the most powerful and feared Dark Wizard in the world. After half of the prophecy was reported to Voldemort, courtesy of Severus Snape, Harry was chosen as the target due to his many similarities with the Dark Lord. In turn, this caused the Potter family to go into hiding.',
        },{
          id:'102',
          name:'Hermione Jean Granger',
          image:'https://sites.psu.edu/cassandrasmith/wp-content/uploads/sites/5522/2013/10/hermione3.jpg',
          house:'Gryffindor',
          website:'https://harrypotter.fandom.com/wiki/Hermione_Granger',
          desc:'Minister Hermione Jean[23] Granger (b. 19 September, 1979)[1] was an English Muggle-born[3] witch born to Mr and Mrs Granger. At the age of eleven, she learned about her magical nature and was accepted into Hogwarts School of Witchcraft and Wizardry. Hermione began attending Hogwarts in 1991 and was Sorted into Gryffindor House. She possessed a brilliant academic mind and proved to be a gifted student in almost every subject that she studied, to the point where she was nearly made a Ravenclaw by the Sorting Hat.',
        },{
          id:'103',
          name:'Ronald \'Ron\' Weasley',
          image:'https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/happy-birthday-rupert-grint-4-times-the-actors-character-ron-weasley-was-the-hero-we-needed-in-harry-potter.jpg',
          house:'Gryffindor',
          website:'https://harrypotter.fandom.com/wiki/Ronald_Weasley',
          desc:'Ronald Bilius[26] "Ron" Weasley (b. 1 March, 1980) was an English pure-blood[2] wizard, the sixth and youngest son of Arthur and Molly Weasley (née Prewett). He was also the younger brother of Bill, Charlie, Percy, Fred, George, and the elder brother of Ginny. Ron and his siblings lived at the The Burrow, on the outskirts of Ottery St Catchpole, Devon.',
        },{
          id:'104',
          name:'Professor Albus Dumbledore',
          image:'https://images.immediate.co.uk/production/volatile/sites/3/2017/10/dumbledore-c475b3b.jpg?quality=90&resize=768,574',
          house:'Gryffindor',
          website:'https://harrypotter.fandom.com/wiki/Albus_Dumbledore',
          desc:'Professor Albus Percival Wulfric Brian Dumbledore, O.M. (First Class), Grand Sorc., D. Wiz., X.J. (sorc.), S. of Mag.Q.[25] (c. Summer[1] 1881[3] – 30 June, 1997)[3] was an English half-blood wizard. He was the Defence Against the Dark Arts Professor, later the Transfiguration Professor, and later the Headmaster of Hogwarts School of Witchcraft and Wizardry. He also served as Supreme Mugwump of the International Confederation of Wizards (?–1995) and Chief Warlock of the Wizengamot (?–1995; 1996–1997). A Muggle-supporting wizard, though the complete opposite in his earlier years, he was considered to have been the greatest wizard of modern times, perhaps of all time.',
        },{
          id:'105',
          name:'Professor Rubeus Hagrid',
          image:'http://pm1.narvii.com/6364/82b2cc1dc54f77217a83bb4770c5aabb40800684_00.jpg',
          house:'Gryffindor',
          website:'https://harrypotter.fandom.com/wiki/Rubeus_Hagrid',
          desc:'Professor Rubeus Hagrid (b. 6 December 1928)[11][12] was an English half-giant wizard, son of Mr Hagrid and the giantess Fridwulfa, and elder half-brother of the giant Grawp. Hagrid stood at eleven feet, six inches tall.[5]',
        },{
          id:'106',
          name:'Professor Severus Snape',
          image:'http://images6.fanpop.com/image/photos/37300000/Severus-Snape-severus-snape-37306849-764-538.jpg',
          house:'Slytherin',
          website:'https://harrypotter.fandom.com/wiki/Severus_Snape',
          desc:'Professor Severus Snape (9 January, 1960[1] – 2 May, 1998)[2] was an English half-blood[3] wizard serving as Potions Master (1981-1996), Head of Slytherin House (1981-1997), Defence Against the Dark Arts professor (1996-1997), and Headmaster (1997-1998) of the Hogwarts School of Witchcraft and Wizardry as well as a member of the Order of the Phoenix and a Death Eater. His double life played an extremely important role in both of the Wizarding Wars against Voldemort.',
        },{
          id:'107',
          name:'Lily J. Potter',
          image:'https://images.jedessine.com/_uploads/_tiny_galerie/20130728/vign-lily-potter-1-cep_lw2.jpg',
          house:'Gryffindor',
          website:'https://harrypotter.fandom.com/wiki/Lily_J._Potter',
          desc:'Lily J.[8] Potter (née Evans) (30 January,[1] 1960–31 October, 1981) was an English Muggle-born[3] witch, the younger daughter of Mr and Mrs Evans, and the younger sister of Petunia Evans. She learned of her magical nature as a child, after Severus Snape recognised her as a witch and told her of the existence of magic. Lily attended Hogwarts School of Witchcraft and Wizardry from 1971-1978. She was Sorted into Gryffindor House and was a member of the Slug Club. In her seventh year she was made Head Girl and began dating James Potter.',
        },{
          id:'108',
          name:'Lord Voldermod',
          image:'https://images.immediate.co.uk/production/volatile/sites/3/2017/03/132972.1c2796ba-54f0-40ab-b5be-d43978dcb1f5.jpg?quality=90&resize=620,413',
          house:'Slytherin',
          website:'https://harrypotter.fandom.com/wiki/Tom_Riddle',
          desc:'Tom Marvolo Riddle (31 December 1926[18] – 2 May 1998), later known as Lord Voldemort or, alternatively as You-Know-Who, the Dark Lord, or He-Who-Must-Not-Be-Named was an English half-blood[3] wizard considered to have been the most powerful and dangerous Dark Wizard of all time.[19][20] He was amongst the greatest wizards to have ever lived, often considered more powerful or equal to Albus Dumbledore.[21][22][23] The only child and son of Tom and Merope Riddle (née Gaunt), Riddle was raised in the Muggle-run Wool\'s Orphanage after his father abandoned his new family on the streets of London when the influence of her magic was lifted, and his mother died moments after giving birth to and naming him after his father and maternal grandfather, Marvolo Gaunt.',
        },{
          id:'109',
          name:'Luna Lovegood',
          image:'https://i.pinimg.com/736x/de/2e/76/de2e76814f0ed8c29efe05c93ee25b37.jpg',
          house:'Ravenclaw',
          website:'https://harrypotter.fandom.com/wiki/Luna_Lovegood',
          desc:'Luna Scamander[16] (née Lovegood) (b. 13 February, 1981)[1] was a witch and the only child and daughter of Xenophilius and Pandora Lovegood. Her mother accidentally died while experimenting with spells when Luna was nine and thus Luna was raised by her father, editor of the magazine The Quibbler, in a rook-like house near the village of Ottery St Catchpole in Devon.',
        }
        
    ]
    };
  }
  // componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((Response) => Response.json())
  //     .then((users) => 
  //       this.setState(
  //         () => {
  //           return { people:users }
  //         },
  //         () => {
  //           // console.log(this.state )
  //         }
  //       )
  //     );
      
  // }
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
    console.log(event.target)
                            // const viewInfo = document.querySelector('.person-info')
                            if(viewInfo.style.opacity == 0)
                            {
                              viewInfo.style.opacity="1"
                              // event.target.style.bottom="60px";
                              event.target.parentElement.classList.add('d-flex')
                              event.target.innerHTML=`Hide Details`
                              console.log(document.querySelector('.btn-info'))
                              
                               event.target.parentElement.parentElement.firstChild.style.height='140px'
                              
                            }
                            else{
                              viewInfo.style.opacity="0"
                              event.target.parentElement.classList.remove('d-flex')
                              // event.target.style.position="absolute";
                              event.target.style.bottom="10px";
                              event.target.parentElement.parentElement.firstChild.style.height='250px'
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
          {/* <div class="circle"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
        <div class="circle4"></div>
        <div class="circle5"></div> */}
            <h1>Harry Potter</h1> 
            <div class="search">
              <input placeholder="Enter" className='search-box' type='search-box' onChange={this.searchFunc}/>
              <svg class="search-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g id="search"><path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z"/></g></svg>
            </div>
            <div class="person-wrapper">
              {filterList.map((people) => {
                return(
                  
                  <><div class="person-box">
                    <div key={people.id}>
                      <img src={people.image} class="person-img"></img>
                      <h2>{people.img}</h2>
                      <div class="person-info">
                        <h2>{people.name}</h2>
                        <h5>{people.house}</h5>
                      </div>
                      <div class="cta-btn">
                        <button class="btn-extra" onClick={this.extraDet}> Show More</button>
                        <button class="btn-info" onClick={this.detailsDet}> Show Details</button>
                      </div>
                    </div>
                  </div><div class="show">
                      <div class="show--box">
                        
                        <div class="info-wrapper">
                          <img src={people.image} class="person-img"/>
                          <h2 class="name">{people.name}</h2>
                          <h5 class="person-house">{people.house}</h5>
                          <h5 class="person-desc"> {people.desc}</h5>
                          <a href={people.website} class="people-website">Click me to know more.</a>
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
