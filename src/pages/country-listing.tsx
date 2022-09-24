import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countryAction } from "../store/actions/country.actions";
import { Modal, Button } from "react-bootstrap";
import { BsFillEyeFill } from "react-icons/bs";
import { Names } from "../models/country-response";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/layouts/header/nav-bar";
import Spinner from "react-bootstrap/Spinner";
import { AppDispatch, RootState } from "../store";

const CountryListing = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [country, setCountry] = useState<Names>({ common: "", official: "" });

  const handleClose = () => setShow(false);
  const handleShow = (country) => {
    setCountry({
      common: country.name.common,
      official: country.name.official,
    });
    setShow(true);
  };
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, countries } = useSelector(
    (state: RootState) => state.country
  );

  useEffect(() => {
    dispatch(countryAction());
  }, []);

  const goToDetail = (cca3: string) => {
    navigate(`/details/${cca3}`);
  };

  return (
    <div className=" justify-center">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Country Names</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {country?.common} - {country?.official}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="p-4 justify-center items-center">
        {loading ? (
          <div className="h-96 flex justify-center items-center">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <table className="table-auto w-full ">
            <thead>
              <tr>
                <th>CCA2</th>
                <th>Common Name,</th>
                <th>Capital</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {countries?.length > 0 &&
                countries.map((item, index): any => (
                  <tr key={index}>
                    <td>{item.cca2}</td>
                    <td
                      className="cursor-pointer"
                      onClick={() => handleShow(item)}
                    >
                      {item.name.common}
                    </td>
                    <td>{item.capital}</td>
                    <td>
                      <button
                        onClick={() => goToDetail(item.cca3)}
                        className="px-2 py-2"
                        type="button"
                      >
                        <BsFillEyeFill size={20} className="text-primary" />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default CountryListing;
