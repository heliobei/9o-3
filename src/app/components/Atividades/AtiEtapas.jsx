'use client'
import React from "react";



export default function AtiEtapas() {
  return (
    <div className="py-8">
      <div className="container mx-auto max-w-7xl pb-8">
        <h1 className="font-bold text-2xl md:text-4xl sm:text-3xl text-slate-800 py-4 pt-8 text-center">Localizando-se no Ciclo de Projetos</h1>
        <p className="text-lg mt-4 py-4 text-slate-600 p-4">
        Chegamos nas Etapas 4 e 5 do Ciclo de Projetos, onde os primeiros resultados dos projetos começam a surgir e precisamos avaliá-los. Para te ajudar a compreender as atividades a serem desenvolvidas, vamos retomar o Ciclo de Projetos.
        </p>

      </div>
      
      <div className="container mx-auto max-w-5xl flex mt-8">
          
          <div className="w-1/3 max-w-[260px] py-4">
            <img
              src="images/educador3.png"
              alt="Imagem"
              className="w-full h-auto"
            />
          </div>

          
          <div className="w-2/3 px-4 m-4 py-4">
            <h1 className="font-bold text-2xl text-slate-800 mb-4">
              Avaliando no Ciclo de Projeto do Educador
            </h1>
            <p className="text-base text-slate-600 py-2">
            À medida que os alunos desenvolvem atividades didáticas e aquelas relacionadas ao projeto coletivo, o professor inicia o processo de avaliação, averiguando se os conteúdos foram aprendidos e o grau de desenvolvimento dos alunos. Para isso, é necessário fazer uso de um plano de avaliação que englobe a diversidade de tarefas executadas.
            </p>
          </div>
      </div>

      <div className="container mx-auto max-w-5xl flex mt-8">
          

          <div className="w-2/3 px-4 m-4 py-4">
                <h1 className="font-bold text-2xl text-slate-800 mb-4">
                Avaliando no Ciclo de Projeto Coletivo
                </h1>
                <p className="text-base text-slate-600 py-2">
                As ações para alcançar os objetivos do projeto coletivo já estão a todo vapor. Junto do plano de monitoramento, os alunos devem avaliar o andamento das atividades e se é necessário algum ajuste de rota.
                </p>
              
               
          </div>
          
          <div className="w-1/3 max-w-[280px] py-4">
            <img
              src="images/coletivo3.png"
              alt="Imagem"
              className="w-full h-auto"
            />
          </div>

          
          
      </div>
    
    </div>
  );
}
