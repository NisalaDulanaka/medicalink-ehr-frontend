import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Avatar } from "@mui/material";
import { R4 } from "@ahryman40k/ts-fhir-types";
import { IPatientSearchRequest } from "../models/patientModels";
import { searchPatients } from "../services/patientServices";
import Cookies from "js-cookie";

let searchKeyWords: string[] = [];

const RegisterNewPatient: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [searchParams, setSearchParams] = useState<IPatientSearchRequest>({
    filters: { name: search },
    sortField: "name",
  });
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [patientList, setPatientList] = useState<R4.IPatient[]>([]);

  useEffect(() => {
    const tempHistory = Cookies.get("search_history");
    if (tempHistory) {
      searchKeyWords = JSON.parse(tempHistory);
      setSearchHistory(searchKeyWords);
    }
  }, []);

  const addToSearchHistory = (keyWord: string) => {
    if (searchHistory.includes(keyWord)) {
      return;
    }
    if (searchKeyWords.length == 3) {
      searchKeyWords.shift();
    }
    searchKeyWords.push(keyWord);
    setSearchHistory([...searchKeyWords]);
    Cookies.set("search_history", JSON.stringify(searchKeyWords),{
      expires: 3,
    });
  };

  const onKeyDown = () => {
    const lowerSearch = search.toLocaleLowerCase();
    const filtered = searchKeyWords
      .filter((option) => option.toLocaleLowerCase().includes(lowerSearch))
      .sort((prev, next) => {
        const cB1 = prev.toLocaleLowerCase().indexOf(lowerSearch);
        const cB2 = next.toLocaleLowerCase().indexOf(lowerSearch);
        return cB1 - cB2;
      });

    setSearchHistory(filtered);
  };

  const onSearch = async () => {
    console.log(searchParams);
    setIsSearching(true);
    const response = await searchPatients(searchParams);
    setPatientList(response || []);
    setIsSearching(false);

    addToSearchHistory(search);
  };

  useEffect(() => {
    onKeyDown();
  }, [search]);

  return (
    <div className="px-6 md:px-8 py-8">
      <div className="py-3 mb-2">
        <h2 className="text-lg font-semibold">Find Existing Patient</h2>
      </div>

      <div className="flex gap-x-3 mb-5">
        <div className="flex-auto lg:flex-initial relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <SearchIcon color="primary" />
          </div>
          <input
            type="search"
            id="search"
            className="block w-full lg:w-[500px] pe-4 py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-md focus:ring-blue-500 focus:ring-1 outline-none"
            placeholder="Search"
            required
            autoComplete="off"
            onChange={(e) => {
              searchParams.filters = {
                [searchParams.sortField || "name"]: e.target.value,
              };
              setSearch(e.target.value);
              setSearchParams({
                ...searchParams,
              });
            }}
            onFocus={() => setPopUpOpen(true)}
            onBlur={() => setPopUpOpen(false)}
          />
          {popUpOpen && (
            <div className="absolute !z-[1000] w-full top-full px-5 py-5 shadow-xl rounded-md flex flex-col gap-y-2 text-gray-500 bg-white">
              {searchHistory.map((option, index) => (
                <li key={index} className="list-none">
                  {option}
                </li>
              ))}
            </div>
          )}
        </div>
        <div className="relative">
          <select
            className="appearance-none w-[100px] h-full pe-8 border border-gray-300 rounded-md text-sm px-3 focus:ring-blue-500 focus:ring-1 outline-none"
            onChange={(e) => {
              searchParams.sortField = e.target.value;
              searchParams.filters = {
                [e.target.value]: search,
              };
              setSearchParams({ ...searchParams });
            }}
          >
            <option value="name">Name</option>
            <option value="nic">NIC</option>
            <option value="address">Address</option>
          </select>
          <div className="absolute top-1/2 translate-y-[-50%] right-[5%]">
            <UnfoldMoreIcon fontSize="small" />
          </div>
        </div>
        <button
          className="bg-[#3772e7] text-white px-5 rounded-md"
          onClick={() => onSearch()}
        >
          Search
        </button>
      </div>

      <div className="pt-3">
        <h2>
          {isSearching ? (
            "Searching for patients..."
          ) : (
            <>
              Search Results -{" "}
              <span className="text-sm text-gray-500">
                Found {patientList.length} results
              </span>
            </>
          )}
        </h2>

        <div className="pt-4 flex flex-col gap-y-2">
          {isSearching ? (
            <div>searching...</div>
          ) : (
            patientList.map((patient, index) => {
              const name = patient.name ? patient.name[0] : {};
              const given = name.given ? name.given[0] : "N/A";
              const family = name.family ? name.family : "N/A";

              return (
                <div
                  key={index}
                  className="flex items-center gap-x-3 py-3 px-3 select-none border rounded-md hover:bg-gray-100"
                >
                  <Avatar>{given.charAt(0)}</Avatar>
                  <div>
                    <h2>{given + " " + family}</h2>
                    <h3 className="text-xs text-gray-600">
                      Identifier -{" "}
                      {patient.identifier ? patient.identifier[0].value : "N/A"}
                    </h3>
                  </div>

                  <div>
                    <h3 className="text-xs text-gray-600">
                      Address -{" "}
                      {patient.address ? patient.address[0].district : "N/A"}
                    </h3>
                    <h3 className="text-xs text-gray-600">
                      Birth Date - {patient.birthDate || "N/A"}
                    </h3>
                  </div>

                  <button className="ms-auto flex items-center gap-x-1 bg-blue-500 py-1 px-3 rounded-md">
                    <span className="text-sm leading-4">View More</span>
                    <NavigateNextIcon />
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterNewPatient;
