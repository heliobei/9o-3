import React from 'react';
import { GiShinyApple } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";
import { IoRocket } from "react-icons/io5";

const RecCards = () => {
  return (
    <div className='max-w-7xl mx-auto'>
        <div className="py-16 bg-slate-100 overflow-hidden">
          <div className="container m-auto px-6 space-y-8 text-slate-700 md:px-12">
            <div>
              
              <h2 className="mt-4 text-2xl text-slate-900 font-bold md:text-4xl">Recursos</h2>
            </div>
            <div className="pb-8 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                <div className="relative p-8 space-y-8">
                    <GiShinyApple className='text-3xl text-slate-800 hover:text-primary'/>
                  <div className="space-y-2">
                    <h5 className="text-xl pb-4 font-bold text-primary transition group-hover:text-primary">Para o professor</h5>
                    <p className="text-sm text-gray-600">
                      <a 
                        href="https://www.google.com/url?q=https%3A%2F%2Fblog.qinetwork.com.br%2Fgoogle-sites-em-sala-de-aula-dicas-para-professores%2F&sa=D&sntz=1&usg=AOvVaw1HCx4zpDeNI5M3JjZTIF3K" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className='underline text-slate-700 hover:text-primary-focus'>Google sites em sala de aula: Dicas para professores
                      </a>
                    </p>
                    <p className="text-sm text-gray-600">
                      <a 
                        href="https://www.google.com/url?q=https%3A%2F%2Fgetedu.com.br%2F2021%2F01%2F31%2Fgoogle-sites-como-utilizar-em-sua-escola-2%2F&sa=D&sntz=1&usg=AOvVaw1Px_z_jlVVsHuucq9C5_6U" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className='underline text-slate-700 hover:text-primary-focus'>Google sites: como utilizar em sua escola?
                      </a>
                    </p>
                  </div>
                  
                </div>
              </div>
              
              <div className="relative group pb-4 bg-white transition hover:z-[1] hover:shadow-2xl">
                <div className="relative p-8 space-y-8">
                    <PiStudentBold className='text-3xl text-slate-800 hover:text-primary'/>
                  <div className="space-y-2">
                    <h5 className="text-xl pb-4 font-bold text-primary transition group-hover:text-primary">Para o estudante</h5>
                   
                    <p className="text-sm text-gray-600">
                      <a 
                        href="https://www.youtube.com/watch?v=PrS0s_M9jmo" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className='underline text-slate-700 hover:text-primary-focus'>Uso pedagógico do Google Sites
                      </a>
                    </p>
                    
                    <p className="text-sm text-gray-600">
                      <a 
                        href="https://www.youtube.com/watch?v=SG3gWnTklBw" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className='underline text-slate-700 hover:text-primary-focus'>Como criar interação e produção de conteúdos pelos alunos
                      </a>
                    </p>
                  </div>
                  
                </div>
              </div>

              <div className="relative group pb-4 bg-white transition hover:z-[1] hover:shadow-2xl">
                <div className="relative p-8 space-y-8">
                    <IoRocket className='text-3xl text-slate-800 hover:text-primary'/>
                  <div className="space-y-2">
                    <h5 className="text-xl pb-4 font-bold text-primary transition group-hover:text-primary">Para saber mais</h5>
                    
                    <p className="text-sm text-gray-600">
                      <a 
                        href="https://www.youtube.com/watch?v=Vop9q8xdDts" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className='underline text-slate-700 hover:text-primary-focus'>Surpreenda-se com o poder do Google Sites em sala de aula


                      </a>
                    </p>

                    <p className="text-sm text-gray-600">
                      <a 
                        href="https://www.youtube.com/watch?v=kX6rFqRn8D8" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className='underline text-slate-700 hover:text-primary-focus'>Como usar o Google Sites em sala de aula
                      </a>
                    </p>

                    <p className="text-sm text-gray-600">
                      <a 
                        href="https://www.google.com/url?q=https%3A%2F%2Fsites.google.com%2Fsee.pb.gov.br%2Fprof-seect-pb%2Fideias-de-uso-on-line&sa=D&sntz=1&usg=AOvVaw163w-wFTCC-9x-brlZZTKi" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className='underline text-slate-700 hover:text-primary-focus'>Ideias de uso on-line
                      </a>
                    </p>

                  </div>
                  
                </div>
              </div>
              
            </div>
          </div>
        </div>
    </div>
  );
};

export default RecCards;

