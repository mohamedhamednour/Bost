import React from "react";
import '../App.css';
import image from './img/bosta.png'
import { useContext ,useRef} from "react";
import { IoSearch } from "react-icons/io5";
import AuthContext from './useContext';
import { useTranslation } from "react-i18next";
import { Link  ,useNavigate} from "react-router-dom"




const Navbar = (perpos) => {
  const [t, i18n] = useTranslation()


  // used store context 
  const { handelApi, handelinpt, handelarabic, handeleng ,styleDir } = useContext(AuthContext);


  return (
    <>
      <nav  id="navbarr"  class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
        <Link class="navbar-brand" to="/">{t('bosta')}</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span style={{ color: "red" }} class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">{t('home')}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">{t('Pricing')}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">{t('ContactSales')}</a>
              </li>

            </ul>
            <span class="navbar-text">

              <ul class="navbar-nav">
                <li class="nav-item dropdown">

                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {t('trakin')}
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">

                    <h2 style={{ color: 'red' }}><strong>{t('trakin')}</strong></h2>
                    <h5>{t('number')}</h5>
                    <input  onKeyDown={handelApi} onChange={handelinpt} /><button onClick={handelApi}> <IoSearch /></button>
                  </ul>
                </li>
                <li class="nav-item">
                <Link class="nav-link "  to="/sign_in">{t('sign')}</Link>
                  {/* <a class="nav-link " href="#"> {t('sign')}</a> */}
                </li>
                <li class="nav-item">
                  <a onClick={handelarabic} id="navarabic" class="nav-link" href="#">عريي</a>
                </li>
                <li class="nav-item">
                  <a onClick={handeleng} href="#" id="navEng">ENG</a>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </nav>   
      </>
  );
};

export default Navbar;