import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countryDetailAction } from "../redux/actions/country-detail.actions";
import NavBar from "../components/nav-bar";
import Spinner from "react-bootstrap/Spinner";
import { AppDispatch, RootState } from "../redux/store";

const CountryDetail = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { alphaCode } = useParams();
  const { loading, error, countryDetail } = useSelector(
    (state: RootState) => state.countryDetail
  );

  useEffect(() => {
    if (alphaCode) {
      dispatch(countryDetailAction(alphaCode));
    }
  }, []);

  const getCurrencies = () => {
    if (countryDetail) {
      let entryvalues = Object.values(countryDetail?.currencies);
      return entryvalues.map((val: any, index) => {
        let item = `${val.name} - ${val.symbol}`;
        return <div key={index}>{item} </div>;
      });
    } else {
      return null;
    }
  };

  const getLanguages = () => {
    if (countryDetail) {
      let entryvalues = Object.values(countryDetail?.languages);
      return <span>{entryvalues.join(" | ")}</span>;
    } else {
      return null;
    }
  };

  const getFlags = () => {
    if (countryDetail?.flags?.svg) {
      return (
        <img
          className="w-full"
          src={countryDetail?.flags?.svg}
          alt={countryDetail?.flags?.svg}
        />
      );
    } else if (countryDetail?.flags?.png) {
      return (
        <img
          className="w-full"
          src={countryDetail?.flags?.png}
          alt={countryDetail?.flags?.svg}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      {loading ? (
        <div className="h-96 flex justify-center items-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <div className="flex items-center justify-center p-10 ">
          <table className="w-[600px] border-collapse border border-slate-500  shadow-md dark:bg-gray-800 dark:border-gray-700">
            <thead>
              <tr>
                <th className="border border-slate-600 p-4 ">Common Name</th>
                <td className="border border-slate-700 p-4">
                  {countryDetail?.name?.common}
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border border-slate-600 p-4">Official Name</th>

                <td className="border border-slate-700 p-4">
                  {countryDetail?.name?.official}
                </td>
              </tr>
              <tr>
                <th className="border border-slate-600 p-4">Currencies</th>
                <td className="border border-slate-700 p-4 ">
                  {getCurrencies()}
                </td>
              </tr>
              <tr>
                <th className="border border-slate-600 p-4">Languages</th>
                <td className="border border-slate-700 p-4">
                  {getLanguages()}
                </td>
              </tr>

              <tr>
                <th className="border border-slate-600 p-4">Flag</th>
                <td className="border-slate-700 p-4">{getFlags()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CountryDetail;
