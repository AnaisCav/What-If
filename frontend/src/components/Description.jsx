import Histoire from "./Histoire";

const Description = ({ labyrintheToggle }) => {
  const openModal = () => {
    window.histoire.showModal();
  };

  return (
    <div
      id="description"
      className={`"text-black mt-8 lg:mt-20 py-8 mx-4 lg:mx-16 px-4 lg:px-16 border-2 border-accent rounded-2xl" ${
        labyrintheToggle && "animate-spin-slow"
      }`}
    >
      <h1 className="font-megrim text-4xl lg:text-5xl font-bold lg:px-16 mb-4 text-center lg:text-left">
        Notre histoire
      </h1>
      <div className="rounded-box font-roboto text-lg lg:text-2xl">
        <p>
          Il y avait une époque où la Terre était le berceau de l&apos;humanité,
          mais une terrible épidémie avait changé le cours de l&apos;histoire.
          Une maladie inconnue s&apos;était répandue rapidement, mettant en
          danger la vie de millions de personnes. Les gouvernements et les
          scientifiques du monde entier s&apos;étaient efforcés de trouver un
          remède, mais leurs efforts étaient vains. La Terre ne pouvait plus
          être le foyer des humains.
        </p>
        <p className="hidden lg:flex">
          Les dirigeants mondiaux avaient pris la décision audacieuse de
          chercher une nouvelle planète habitable. Après de nombreuses années de
          recherche et de préparation, l&apos;humanité s&apos;était lancée dans
          un voyage épique à travers l&apos;espace. À bord de vastes vaisseaux
          spatiaux, les survivants avaient quitté la Terre pour chercher refuge
          ailleurs. Ils avaient emporté avec eux les connaissances accumulées au
          fil des siècles, ainsi que des échantillons de la biodiversité
          terrestre, dans l&apos;espoir de préserver leur patrimoine culturel et
          biologique. Le voyage spatial était long et périlleux.
        </p>
        <p className="hidden lg:flex">
          Pendant le trajet, certains passagers avaient contracté
          d&apos;étranges maladies dues aux conditions inhabituelles de
          l&apos;espace. Les médecins et les chercheurs à bord des vaisseaux
          avaient eu du mal à comprendre ces affections mystérieuses.
        </p>
      </div>
      <button
        onClick={openModal}
        className="font-megrim lg:text-xl font-bold text-right w-full mt-8"
      >
        En savoir plus &gt;&gt;
      </button>
      <Histoire labyrintheToggle={labyrintheToggle} />
    </div>
  );
};

export default Description;
