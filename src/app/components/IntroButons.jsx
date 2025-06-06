import { CgWebsite } from "react-icons/cg";

function IntroButons() {
  const sites = [
    { name: 'Site 1', url: 'https://9oano.beieducacaopedagogico.com/' },
    { name: 'Site 2', url: 'https://9oano-2.beieducacaopedagogico.com/' },
    { name: 'Site 4', url: 'https://9oano-4.beieducacaopedagogico.com/' }
  ];

  const openWebsite = (url) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <h1 className="text-3xl font-bold p-12 text-center text-slate-700">Acesso aos sites</h1>
      <div className="flex justify-center space-x-16 pb-8">
        {sites.map((site) => (
          <button
            key={site.name}
            className="flex items-center justify-center btn btn-primary text-white"
            onClick={() => openWebsite(site.url)}
          >
            <CgWebsite size={24} className="mr-2" />
            {site.name}
          </button>
        ))}
      </div>
    </>
  );
}

export default IntroButons;