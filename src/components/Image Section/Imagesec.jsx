import React from 'react'
import './Imagesec.css';
import tree1 from '../../Assets/tree1.png';
export default function Imagesec() {
    return (
            <div className="background">
              <div className='left-side'>
                <span className='text' > Buy your dream plants</span>
                  <div className='belowtext'>
                    <div className='textWrapper'>  
                      <span className='text50' >50+</span>
                      <span className='textin50'>Plant Species</span>
                    </div>
                    <div className='pipe'>|</div>
                    <div className='textWrapper'>
                      <span className='text100'>100+</span>
                      <span className='textin100'>Customers</span>
                    </div>
                  </div>
                  <div className='searchBar'>
                    <span className='icon'></span>
                    <input type="text" placeholder="What are You looking for?"/>
                  </div>
              </div>
              <div className='right-side'>
                <div className='blackSpot-container'>
                  <div className='blackSpot'>
                  </div>
                  <div className='treeImage'>
                       <img src={tree1} className='tree' />
                    </div> 
                </div>  
              </div>
            </div>
          );
  }
