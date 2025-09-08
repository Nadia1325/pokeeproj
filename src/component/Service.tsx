import pic from '../assets/pic.jpg'
function Service() {
   
  
    return (
      <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      <h1 className="text-4xl font-bold mb-6">Our Services</h1>
      <ul className="space-y-4 text-gray-700">
        <li> Trendy Youth Clothing</li>
        <li> Eco-Friendly Fashion</li>
        <li>Affordable Styles</li>
      </ul>
    </div>
    <div className='w-40 h-11'>  <img src={pic} alt='fashion'/></div>
    <div className='w-40 h-11'>  <img src={pic} alt='fashion'/></div>
    <div className='w-40 h-11'>  <img src={pic} alt='fashion'/></div>
  
  </>
    
    );
  }
  
  export default Service;
  
        
       
            
    