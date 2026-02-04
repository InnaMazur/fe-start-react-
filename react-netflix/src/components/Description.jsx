import React from 'react';

const Description = () => {
    const h1 = {
        color: 'grey',
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
        
        <div className="film-info" style={{display:'flex', alignItems:'center', fontWeight:'500', color:'grey', fontSize:'30px',  lineSpacing:'0',  gap:'20px'  }} >
                
            <div className="film-info-item" style={{paddingLeft:'0',paddingRight:'20px',borderRight:'3px solid grey' }} >
                 2019 
            </div>
            <div > DIRECTOR:
                <span className='film-info span' style={{display:'inline-block', fontWeight:'400',fontsize:'29px', color:'grey' }} >
                    Shawn Levy 
                     </span>
            </div>
            <div className="film-info-item-2" style={{paddingLeft:'20px', paddingRight:'0', borderLeft:'3px solid grey' }} >
                seasons:
                <span className='film-info span' style={{display:'inline-block', fontWeight:'400',fontsize:'29px', color:'grey' }} >
                    3 (5 Episodes)

                </span>
            </div>
        </div>
        <p style={description}>
            In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.
        </p>
        </>

    );
};

export default Description;