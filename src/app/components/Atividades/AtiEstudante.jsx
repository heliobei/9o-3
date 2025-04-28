import React from 'react';
import {Accordion, AccordionItem} from "@nextui-org/react";

const AtiEstudante = () => {
  return (
    <>
        <div className='pt-8'>
            <div className="flex flex-col max-w-7xl mx-auto md:flex-row items-center justify-center p-8">
                
                <div className="md:w-1/2 mb-4 md:mb-0">
                    <img
                    src="/images/students.jpg"
                    alt="Imagem"
                    className="w-full h-full object-cover rounded-md"
                    />
                </div>

                
                <div className="px-4 md:w-1/2 md:ml-4">
                    <h1 className="text-slate-800 text-2xl md:text-4xl font-bold mb-4">Atribuindo a nota final e individual do aluno</h1>
                    <p className="text-slate-700 py-2">Considerando todas as opções dadas acima, identificamos várias opções para a atribuição de notas no projeto desenvolvido.</p>
                    <p className='py-2 text-slate-700'>Para a atribuição de uma nota final a um aluno, o professor e a professora devem considerar que a maior parte do trabalho é desenvolvida de maneira cooperativa, mas que parte do trabalho elaborada nos artefatos é individual. Então, sugere-se a combinação de notas individuais e coletivas para compor a menção final individual de cada aluno.</p>
                </div>
            </div>

            
        </div>

        
    </>
    
  );
};

export default AtiEstudante;

