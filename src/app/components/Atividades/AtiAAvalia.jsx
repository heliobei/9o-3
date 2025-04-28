function AtiAvalia() {

    return (
      <div className="relative w-full">
        {/* Camada com gradiente e opacidade */}
        <div className="absolute inset-0 bg-gradient-to-bl from-primary to-primary-focus opacity-50"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('images/avalia.jpg')",
          }}
        ></div>
  
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-focus opacity-70"></div>
  
        {/* Conteúdo sobreposto */}
        <div className="relative z-10 text-white text-center py-20 max-w-5xl mx-auto">
          <div className='border-white border-1 rounded-xl p-4 m-4'>
              <h1 className="text-3xl font-bold mb-4 pt-8 px-8">A avaliação no programa “Aprendendo a Lidar com Dinheiro”</h1>
              <p className="p-8 pb-8">
              A aplicação do programa prevê que sejam ensinados conteúdos de matemática e Educação Financeira atrelados a aplicação de pequenos projetos coletivos. Com essa premissa, o processo avaliativo deve englobar as duas frentes: avaliação de conteúdos e avaliação do projeto.
              </p>
              
          </div>
          
        </div>
      </div>
    );
  };
  
  export default AtiAvalia