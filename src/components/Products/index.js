import React ,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import ProductCard from '../ProductCard'
import Filters from '../Filters'
import './index.css'

const plantDetails=[
    {
        id:uuidv4(),
        name:"Monsterra",
        imgUrl:"https://res.cloudinary.com/drmbcia6x/image/upload/v1729426113/e1ce63ff429a0c018fd6e2e5dd614458_vgbpqb.png",
        price:300,
    },
    {
        id:uuidv4(),
        name:"Variageted",
        imgUrl:"https://res.cloudinary.com/drmbcia6x/image/upload/v1729430341/7973d62829a030074ad8b6ad34_eqakjk.png",
        price:289,
    }
    ,
    {
        id:uuidv4(),
        name:"Snake plant",
        imgUrl:"https://res.cloudinary.com/drmbcia6x/image/upload/v1729430341/daa994fdb511faa82ea79a5ef58fbb1a_qoybqp.png",
        price:429,
    },
    {
        id:uuidv4(),
        name:"Monsterra",
        imgUrl:"https://res.cloudinary.com/drmbcia6x/image/upload/v1729426113/e1ce63ff429a0c018fd6e2e5dd614458_vgbpqb.png",
        price:300,
    },
    {
        id:uuidv4(),
        name:"Variageted",
        imgUrl:"https://res.cloudinary.com/drmbcia6x/image/upload/v1729426113/e1ce63ff429a0c018fd6e2e5dd614458_vgbpqb.png",
        price:289,
    }
    ,
    {
        id:uuidv4(),
        name:"Snake plant",
        imgUrl:"https://res.cloudinary.com/drmbcia6x/image/upload/v1729426113/e1ce63ff429a0c018fd6e2e5dd614458_vgbpqb.png",
        price:429,
    }
]
const Products = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3; 
    const totalPages = Math.ceil(plantDetails.length / itemsPerPage);
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = plantDetails.slice(indexOfFirstItem, indexOfLastItem);
  
    
    const handlePageChange = (pageNum) => setCurrentPage(pageNum);
  
    return (
      <div className='products-container'>
        <div className='plant-pot-container'>
          <button type="button" className='plants'>Plants</button>
          <button type='button'>Pots</button>
        </div>
        <p className='plant-para'>
          Plants make for the best house companions, suitable for all your moods and every aesthetic.<br />
          Ugaoo brings you the widest variety of plants to choose from so you can buy plants online from the comfort of your home!
        </p>
        <div className='filteringg'>
            <Filters/>
            <div>
            <ul className='plant-list-container'>
          {currentItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
        <div className='pagination'>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={currentPage === i + 1 ? 'active' : ''}
            >
              {i + 1}
            </button>
          ))}
        </div>
            </div>
        </div>
        
        
  
       
        
      </div>
    );
  };
  
  export default Products;