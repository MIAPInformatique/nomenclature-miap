import { useState} from "preact/hooks";

export function App(props) {
  const [activeItem, setActiveItem] = useState(null);
  const [activeBrand, setActiveBrand] = useState(null);
  const [activeSexe, setActiveSexe] = useState(null);
  // const [inputValue, setInputValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const initialInputValue = {
    companyName: "Miap Informatique",
    postNumber: "1",
    brandName: "Custom",
    firstName: "v",
    lastName: "k"
  };

  const [values, setValues] = useState(initialInputValue);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const handleBrandClick = (index) => {
    setActiveBrand(index);
  };

  const handleSexeClick = (index) => {
    setActiveSexe(index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });

    console.log(value);
  };

  const handleAlertToggle = () => {
    setShowAlert(!showAlert);
    navigator.clipboard.writeText(document.querySelector('#result').innerText);
    const audio = new Audio('/pop.mp3');
    audio.play();
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };


  let type, marque, sexe;

  return (
    <>
      <div className="flex items-center px-4 pt-5 container mx-auto">
        <img src="/favicon.png" alt="" className="h-12 w-12" />
        <h1 className="ml-1.5 title">Nomenclature Miap</h1>
      </div>
      <article className="container mx-auto px-4 flex flex-wrap items-center sm:gap-10">
        <div>
          <label className="label mt-10">
            <h2 className="label-text text-xl">Type de poste</h2>
          </label>
          <ul className="menu bg-base-100 w-56 rounded-box  ">
            <li>
              <a
                className={activeItem === 0 ? "active" : ""}
                onClick={() => handleItemClick(0)}
              >
                {" "}
                <i class="fa-solid fa-computer"></i> Fixe
              </a>
            </li>
            <li>
              <a
                className={activeItem === 1 ? "active" : ""}
                onClick={() => handleItemClick(1)}
              >
                {" "}
                <i class="fa-solid fa-laptop"></i> Portable
              </a>
            </li>
            <li>
              <a
                className={activeItem === 2 ? "active" : ""}
                onClick={() => handleItemClick(2)}
              >
                {" "}
                <i class="fa-solid fa-server"></i>Serveur
              </a>
            </li>
            <li>
              <a
                className={activeItem === 3 ? "active" : ""}
                onClick={() => handleItemClick(3)}
              >
                {" "}
                <i class="fa-brands fa-apple"></i>Mac
              </a>
            </li>
          </ul>
        </div>

        <div>
          <label className="label mt-10">
            <h2 className="label-text text-xl">Nom de la société</h2>
          </label>
          <input
            type="text"
            placeholder="Miap Informatique.."
            // className="  input w-full max-w-xs"
            className="  input w-full max-w-xs" onInput={handleInputChange} name="companyName"
          />
          <label data-tip="hello" className="label mt-10">
            <h2 className="label-text text-xl">Numéro du poste</h2>
          </label>
          <input
            type="number"
            placeholder="1"
            min={1}
            max={99}
            onInput={handleInputChange} name="postNumber"
            className="input  "
          />
        </div>

        <div>
          <label className="label mt-10">
            <h2 className="label-text text-xl">Marque du poste</h2>
          </label>
          <ul className="menu bg-base-100 w-56 rounded-box  ">
            <li>
              <a
                className={activeBrand === 0 ? "active" : ""}
                onClick={() => handleBrandClick(0)}
              >
                {" "}
                Asus
              </a>
            </li>
            <li>
              <a
                className={activeBrand === 1 ? "active" : ""}
                onClick={() => handleBrandClick(1)}
              >
                {" "}
                Dell
              </a>
            </li>
            <li>
              <a
                className={activeBrand === 2 ? "active" : ""}
                onClick={() => handleBrandClick(2)}
              >
                {" "}
                No name
              </a>
            </li>
            <li>
            
            {/* {activeBrand === 3 ? (
              <input name="firstName" type="text"
              id="autreMarque"
              placeholder="Autre.."
              className="input w-full max-w-xs" onInput={handleChange} />
              ) : (
                <a onClick={() => handleBrandClick(3)}>Autre..</a>
              )} */}


              {activeBrand === 3 ? (
              <input type="text"
              id="autreMarque"
              placeholder="Autre.."
              className="input w-full max-w-xs" onInput={handleInputChange} name="brandName" />
              ) : (
                <a onClick={() => handleBrandClick(3)}>Autre..</a>
              )}
            </li>
          </ul>
        </div>

        <div>
          <label className="label mt-10">
            <h2 className="label-text text-xl">Prénom</h2>
          </label>
          <input
            type="text"
            placeholder="Erwan.."
            onInput={handleInputChange} name="firstName"
            className="  input w-full max-w-xs"
          />
          <label className="label mt-10">
            <h2 className="label-text text-xl">Nom</h2>
          </label>
          <input
            type="text"
            placeholder="Cloux.."
            onInput={handleInputChange} name="lastName"
            className="  input w-full max-w-xs"
          />
        </div>

        <div>
          <label className="label mt-10">
            <h2 className="label-text text-xl">Sexe de l'utilisaeur</h2>
          </label>
          <ul className="menu bg-base-100 w-56 rounded-box  ">
            <li>
              <a
                className={activeSexe === 0 ? "active" : ""}
                onClick={() => handleSexeClick(0)}
              >
                {" "}
                <i class="fa-solid fa-mars"></i> Homme
              </a>
            </li>
            <li>
              <a
                className={activeSexe === 1 ? "active" : ""}
                onClick={() => handleSexeClick(1)}
              >
                {" "}
                <i class="fa-solid fa-venus"></i> Femme
              </a>
            </li>
          </ul>
        </div>
      </article>

      <div className="navbar bg-base-100 container mx-auto mt-10 rounded-box">
        <a className="btn btn-ghost normal-case text-xl" onClick={handleAlertToggle} id="result" >
        {
            (type =
              activeItem === 0
                ? "F"
                : activeItem === 1
                ? "P"
                : activeItem === 2
                ? "S"
                : activeItem === 3
                ? "M"
                : "F")
          }
          {'-'}
          {values.companyName.substring(0, 2).toUpperCase()}
          {values.postNumber}


          {
            (marque =
              activeBrand === 0
                ? "AS"
                : activeBrand === 1
                ? "DE"
                : activeBrand === 2
                ? "NO"
                : activeBrand === 3
                ? values.brandName.substring(0, 2).toUpperCase()
                : "AS")
          }
          {(values.firstName.toLowerCase().charCodeAt(0) - 96).toString().padStart(2, '0')}
          {'-'}
          {(values.lastName.toLowerCase().charCodeAt(0) - 96).toString().padStart(2, '0')}
          {
            (sexe =
              activeSexe === 0
                ? "H"
                : activeSexe === 1
                ? "F"
                : "H")
          }

          {Math.floor(Math.random() * 9) + 1}

        </a>
      </div>
      <div className={`alert alert-success shadow-lg absolute top-0 right-0 w-96 mt-5 mr-2 ${showAlert ? 'blockAlert' : 'hiddenAlert'}` }>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Nom du poste copié !</span>
        </div>
      </div>
    </>
  );
}