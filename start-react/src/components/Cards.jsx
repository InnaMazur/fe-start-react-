import React , {useState} from 'react';

function Cards(props) {

       const [cards, setCards] = useState([
                {
                  title: "Free",
                  price: "$0/mo",
                  users: "10 users included",
                  storage: "2 GB of storage",
                  support: "Email support",
                  buttonText: "Sign up for free",
                  buttonStyle: "btn-outline-primary"
                },
                {
                  title: "Pro",
                  price: "$15/mo",
                  users: "20 users included",
                  storage: "10 GB of storage",
                  support: "Priority email support",
                  buttonText: "Get started",
                  buttonStyle: "btn-primary"
                },
                {
                  title: "Enterprise",
                  price: "$29/mo",
                  users: "30 users included",
                  storage: "15 GB of storage",
                  support: "Phone and email support",
                  buttonText: "Contact us",
                buttonStyle: "btn-outline-primary"
               
                }
              ]);
            
              const handleDelete = () => {
                setCards(cards.filter((card, index) => index !== 0));
              };
            
    return (
        <div>
        < div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
               {cards.map((card, index) => (
             <div className="col"key={index} > 
           
            <div className="card mb-4 rounded-3 shadow-sm"> 
         
         <div className="card-header py-3"> 
            <h4 className="my-0 fw-normal">{card.title}</h4>
             </div> 
      <div className="card-body"> 
        <h1 className="card-title pricing-card-title"> {card.price}<small className="text-body-secondary fw-light">/mo</small></h1> 
         <ul className="list-unstyled mt-3 mb-4"> 
            <li>{card.users}</li>
         <li>{card.storage}</li>
        <li>{card.support}</li> 
        <li>Help center access</li>
         </ul>
          <button type="button" 
          className={`w-100 btn btn-lg ${card.buttonStyle}`}
          >{card.buttonText}
          </button> 
           </div>
       
           </div>  
           </div>   
      
             ))}
   
   </div> 
        <button className="btn btn-danger mt-4 px-5"
                  onClick={handleDelete} >
                  Delete
                </button>
        
        </div> 
    );
}

export default Cards;