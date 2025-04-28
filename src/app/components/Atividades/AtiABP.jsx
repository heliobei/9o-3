import React from 'react';
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3, TbCircleNumber4, TbCircleNumber5, TbCircleNumber6 } from "react-icons/tb";

const AtiABP = () => {
  return (
    <div className='bg-slate-600 py-8'>
        <div className="flex flex-col max-w-7xl mx-auto md:flex-row items-center justify-center sm:p-8">
        
            <div className="md:w-1/2 md:ml-4">
                <h2 className="mb-16 text-4xl text-white font-bold px-8 ">Avaliação na Aprendizagem Baseada em Projetos (ABP)</h2>
                <p className='text-white px-8'>
                O processo de avaliação dentro da ABP é mais reflexivo quando comparado à maneira mais tradicional de avaliação. Na maneira tradicional é necessário aferir o quanto do conteúdo programado foi fixado pelos estudantes, enquanto na ABP deve-se também considerar fatores como engajamento, competências socioemocionais e habilidades sociais. Veja abaixo um resumo do funcionamento da ABP:
                </p>
            </div>

            
            <div className="p-8 md:w-1/2 mb-4 md:mb-0">
                <img
                className="w-full h-full object-cover rounded-md"
                src="/images/professor.jpg"  // Substitua pelo caminho da sua imagem
                alt="Descrição da Imagem"
                />
            </div>
        </div>

        <div className='py-8'>
            <div className="grid grid-cols-1 mx-auto max-w-7xl md:grid-cols-6">
                
                
                <div className='bg-slate-700 p-6 rounded-lg border border-slate-500 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg hover:scale-105 transition-all duration-300'>
                    <div className="flex items-end justify-end">
                        <TbCircleNumber1 className="text-4xl text-yellow-400 mb-4" />
                    </div>
                    
                    <p className='text-sm text-white text-left pb-4'>Os alunos são apresentados a problemas reais e devem propor uma solução.</p>
                </div>

                <div className='bg-slate-700 p-6 rounded-lg border border-slate-500 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg hover:scale-105 transition-all duration-300'>
                    <div className="flex items-end justify-end">
                        <TbCircleNumber2  className="text-4xl text-orange-400 mb-4" />
                    </div>
                    
                    <p className='text-sm text-white text-left pb-4'>Os alunos devem planejar as ações a serem desenvolvidas.</p>
                </div>

                <div className='bg-slate-700 p-6 rounded-lg border border-slate-500 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg hover:scale-105 transition-all duration-300'>
                    <div className="flex items-end justify-end">
                        <TbCircleNumber3 className="text-4xl text-orange-500 mb-4" />
                    </div>
                    
                    <p className='text-sm text-white text-left'>Os alunos produzem e avaliam os artefatos do projeto.</p>
                </div>

                <div className='bg-slate-700 p-6 rounded-lg border border-slate-500 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg hover:scale-105 transition-all duration-300'>
                    <div className="flex items-end justify-end">
                        <TbCircleNumber4 className="text-4xl text-orange-600 mb-4" />
                    </div>
                    
                    <p className='text-sm text-white text-left'>Os alunos complementam as pesquisas já feitas.</p>
                </div>

                <div className='bg-slate-700 p-6 rounded-lg border border-slate-500 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg hover:scale-105 transition-all duration-300'>
                    <div className="flex items-end justify-end">
                        <TbCircleNumber5 className="text-4xl text-red-500 mb-4" />
                    </div>
                    
                    <p className='text-sm text-white text-left'>Os alunos planejam e desenvolvem a apresentação final.</p>
                </div>

                <div className='bg-slate-700 p-6 rounded-lg border border-slate-500 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg hover:scale-105 transition-all duration-300'>
                    <div className="flex items-end justify-end">
                        <TbCircleNumber6 className="text-4xl text-red-600 mb-4" />
                    </div>
                    
                    <p className='text-sm text-white text-left'>Os alunos avaliam e apresentam os resultados do projeto.</p>
                </div>

                
            </div>
        </div>
        <p className='text-white px-8 max-w-7xl mx-auto text-center font-semibold py-8'>A avaliação na ABP envolve notas atribuídas ao grupo e individualmente baseadas nos artefatos, mas também do próprio desenvolvimento individual de cada estudante.</p>
    </div>
    
  );
};

export default AtiABP;
