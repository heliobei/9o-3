import React from 'react'
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3 } from 'react-icons/tb'
function RecPodcast() {
    return (
        <div className='bg-slate-600 py-8'>
            <div className="flex flex-col max-w-7xl mx-auto md:flex-row items-center justify-center sm:p-8">
            
                <div className="md:w-1/2 md:ml-4">
                    <h2 className="mb-16 text-4xl text-white font-bold px-8 ">Podcast</h2>
                    <p className='text-white px-8'>
                    PODCAST é uma mídia em formato de áudio cujo objetivo é transmitir informação e contribuir para a criatividade, para a oralidade e para o espírito colaborativo dos envolvidos. O educador pode auxiliar os estudantes a criar um roteiro para o podcast proposto na atividade sugerida, além de incentivar diferentes formatos, como história, entrevista, bate-papo, educativo, etc. Você pode ler mais sobre cada tipo {' '}
                <a
                  href="https://www.google.com/url?q=https%3A%2F%2Ffeedgurus.com%2Ftipos-de-podcast%2F&sa=D&sntz=1&usg=AOvVaw0p1kS6oac0vH4mgpA6oNts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-200 underline"
                >
                  neste site
                </a>{' '}, ou fornecer o link para que os alunos pesquisem os diferentes formatos e escolham um que mais gostem.
                    </p>
                </div>
    
                
                <div className="p-8 md:w-1/2 mb-4 md:mb-0">
                    <img
                    className="w-full h-full object-cover rounded-md"
                    src="/images/podcast.jpg"  // Substitua pelo caminho da sua imagem
                    alt="podast acontecendo com fundo desfocado"
                    />
                </div>
            </div>
    
            <div className='py-8'>
                
                <h2 className='text-3xl text-white flex justify-center pb-8 font-semibold'>Sugestão de atividade</h2>
                
                <div className="grid grid-cols-1 mx-auto max-w-7xl md:grid-cols-3">
                    
                    
                    <div className='bg-white p-6 rounded-lg border border-slate-300 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg hover:scale-105 transition-all duration-300'>
                        <div className="flex items-end justify-end">
                            <TbCircleNumber1 className="text-4xl text-primary mb-4" />
                        </div>
                        
                        <p className='text-sm text-slate-800 text-left  pb-4'>
                        A terceira parte do Livro do Estudante trata da desigualdade econômica. Sugerimos que, em duplas, os estudantes gravem um podcast sobre o assunto.
                        </p>
                        <p className='text-sm text-slate-800 text-left pb-4'>
                        Nele, os jovens devem investigar as origens da desigualdade econômica e social no Brasil e apresentar propostas e medidas para combatê-la, ao mesmo tempo que aprendem conceitos básicos como o cálculo do produto interno bruto (PIB) de um país.
                        </p>
                        <p className='text-sm text-slate-800 text-left pb-4'>Você pode encontrar todas essas informações e mais sugestões nas páginas 26 e 27 do <a
                            href="https://drive.google.com/file/d/1u8r8ISblSZ4lj8iCGw7ZyPc39ueHDjbJ/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-800 hover:text-purple-800 underline"
                            >
                            Caderno do Educador
                            </a>{''}.</p>
                    </div>
    
                    <div className='bg-white p-6 rounded-lg border border-slate-300 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg hover:scale-105 transition-all duration-300'>
                        <div className="flex items-end justify-end">
                            <TbCircleNumber2  className="text-4xl text-primary mb-4" />
                        </div>
                        
                        <p className='text-sm font-semibold text-slate-900 text-left pb-4'>Sugira ao alunos trazer as seguintes informações:</p>
                        <p className='text-sm text-slate-800 text-left pb-4'>• Quão ruim é a desigualdade econômica para nossa sociedade?</p>
                        <p className='text-sm text-slate-800 text-left pb-4'>• Como combatê-la? </p>
                        <p className='text-sm text-slate-800 text-left pb-4'>• Como é realizado o cálculo da riqueza de um país, o produto interno bruto (PIB).</p>
                        <p className='text-sm text-slate-800 text-left pb-4'>• Os estudantes podem optar por entrevistar familiares e conhecidos. Para isso, precisam criar perguntas claras e objetivas sobre o tema.</p>
                        
                    </div>
    
                    <div className='bg-white p-6 rounded-lg border border-slate-300 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg hover:scale-105 transition-all duration-300'>
                        <div className="flex items-end justify-end">
                            <TbCircleNumber3 className="text-4xl text-primary mb-4" />
                        </div>
                        
                        <p className='text-sm text-slate-800 text-left pb-4'>• O podcast pode ter até sete minutos de duração.</p>
                        <p className='text-sm text-slate-800 text-left pb-4'>• Lembre-os de que o podcast é destinado ao público geral, ou seja, será ouvido por diferentes pessoas, inclusive por aquelas que não têm conhecimento de conceitos de Educação Financeira e Matemática.</p>
                        <p className='text-sm text-slate-800 text-left pb-4'>• Ressalte que um podcast deve ter começo, meio e fim, ou seja, o que está sendo discutido deve observar uma ordem lógica.</p>
                        <p className='text-sm text-slate-800 text-left pb-4'>• Se necessário, revisite o capítulo 7 do Livro do Estudante e utilize-o para verificar se os alunos compreenderam os temas tratados na atividade.</p>
                    </div>
    
                    
                </div>
            </div>
            <p className='text-white px-8 max-w-7xl mx-auto text-center font-semibold py-8'>Nessa atividade, os alunos atuarão como protagonistas na construção do conhecimento. Oriente-os sobre algumas características de podcasts: eles devem ser coerentes e ter começo, meio e fim. A locução deve fornecer uma ordem lógica para o que está sendo discutido. Elencar exemplos práticos de Educação Financeira e Matemática é uma boa estratégia para explicar e relacionar esses conceitos.</p>
        </div>
        
      );
    };

export default RecPodcast