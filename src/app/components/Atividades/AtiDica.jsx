import React from 'react'

function AtiDica() {
    return (
        <div className="bg-primary">
          <div className="flex items-center justify-center p-8">
            <div className="attention-box text-white text-center text-lg max-w-5xl mx-auto border-2 rounded-xl p-8 m-8">
              <p>
              Relembre{' '}
                <a
                  href="https://drive.google.com/file/d/11qW2hmv48jgPEKPBS6Wvt5MFE9oD9T7G/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-200 underline"
                >
                  aqui
                </a>{' '}o exemplo de planejamento de PPDA do livro e as estratégias de avaliação nele descritas. E confira {' '}
                <a
                  href="https://drive.google.com/file/d/1wILJae2XUfTOMCbHDwCPHKYSUApw0Nq2/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-200 underline"
                >
                  aqui
                </a>{' '}um exemplo de tabela para avaliação de um PPDA.</p>
            </div>
          </div>
        </div>
      );
    }

export default AtiDica