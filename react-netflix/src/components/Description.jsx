import React from 'react';
import NetflixComponent from './NetflixComponent.jsx';

const Description = () => {
    const h1 = {
        color: 'white',
        fontSize: '64px',
         fontWeight:'800px',
        lineHeight: '77px',
        letterSpacing:' 5.5',
        textAlign: 'lef',
        marginBottom: '17px',
        marginTop:'15px',
    }
    const description = {
        marginTop:'15px',
        marginBottom:'0',
        color:' rgb(167, 166, 166)',
    fontSize: '24px',
    lineHeight: '29px',
    letterSpacing: '0%',
    textAlign: 'left',
    width:' 864px',
    paddingBottom: '40px',
    }
    return (
        <>
        <h1 style={h1}>
            Stranger Things
        </h1>
        {/* <h1 style={h1}>
<NetflixComponent title='Somethings' ></NetflixComponent>
        </h1> */}
        
        <div className="film-info" style={{display:'flex', alignItems:'center', fontWeight:'500', color:'white', fontSize:'30px',  lineSpacing:'0',  gap:'20px'  }} >
                
            <div className="film-info-item" style={{paddingLeft:'0',paddingRight:'20px',borderRight:'3px solid white' }} >
                 2019 
            </div>

            {/* <div className="film-info-item" style={{paddingLeft:'0',paddingRight:'20px',borderRight:'3px solid white' }}>
                <NetflixComponent year='2025'></NetflixComponent>
            </div> */}
            <div >
                 DIRECTOR:
                <span className='film-info span' style={{display:'inline-block', fontWeight:'400',fontsize:'29px', color:'grey' }} >
                    Shawn Levy 
                     </span>

                     {/* <span className='film-info span' style={{display:'inline-block', fontWeight:'400',fontsize:'29px', color:'grey' }} >
                        <NetflixComponent name='Wilson and co'></NetflixComponent>
                     </span> */}
            </div>
            <div className="film-info-item-2" style={{paddingLeft:'20px', paddingRight:'0', borderLeft:'3px solid white' }} >
                seasons:
                <span className='film-info span' style={{display:'inline-block', fontWeight:'400',fontsize:'29px', color:'grey' }} >
                    3 (5 Episodes)
                </span>

                {/* <span className='film-info span' style={{display:'inline-block', fontWeight:'400',fontsize:'29px', color:'grey' }} >
                    <NetflixComponent season=' 2 Episodes'></NetflixComponent>
                </span> */}
            </div>
        </div>
        <p style={description}>
            In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.
        </p>

        {/* <p style={description}>
            <NetflixComponent description='Info about description'></NetflixComponent>
        </p> */}
        </>

    );
};

export default Description;