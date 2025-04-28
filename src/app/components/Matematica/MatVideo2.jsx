'use client'
import React from 'react';
import ReactPlayer from 'react-player';



function MatVideo2() {
    return (
        <div className='max-w-7xl mx-auto py-12'>
          <div className=" p-4 ">
            
    
            <div className="p-4 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 pr-8">
                    <ReactPlayer url='https://youtu.be/GIzwKJL33_g' width="100%" />
                </div>
              <div className="w-full md:w-1/2 pr-4">
                
                <div className=" mb-4">
                    <h1 className="text-4xl font-bold text-slate-700">Medidas de tendência central e de dispersão</h1>
                </div>
                <h1 className=" text-slate-700 mb-4 pr-8">A professora Gis traz, de uma forma muito rápida, como calcular as medidas de tendência central de um conjunto de dados. Vale a pena conferir.</h1>
              </div>
              
            </div>
          </div>
        
        </div>
      );
    }

export default MatVideo2