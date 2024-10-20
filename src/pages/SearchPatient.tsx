import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";

const options = [
  { label: "200311513520 Chiranga Shalitha", id: 1 },
  { label: "200346546546 Nisala Develigoda", id: 2 },
  { label: "200356756745 Chathusha Mendis", id: 3 },
  { label: "200456756757 Seneli Jayasinghe", id: 4 },
];

const RegisterNewPatient: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [popUpOpen, setPopUpOpen] = useState(false);

  const onSearch = () => {
    const lowerSearch = search.toLocaleLowerCase();
    const filtered = options
      .filter((option) =>
        option.label.toLocaleLowerCase().includes(lowerSearch)
      )
      .sort((prev, next) => {
        const cB1 = prev.label.toLocaleLowerCase().indexOf(lowerSearch);
        const cB2 = next.label.toLocaleLowerCase().indexOf(lowerSearch);
        return cB1 - cB2;
      });

    setFilteredOptions(filtered);
  };

  useEffect(() => {
    onSearch();
  }, [search]);

  return (
    <Box
      sx={{
        flexGrow: 1,
        // bgcolor: "#F5F9FF",
        minHeight: "100vh",
        padding: 5,
      }}
    >
      <div>
        <div className="py-4 mb-5">
          <h2>Find Existing Patient</h2>
        </div>

        <div className="flex gap-x-4">
          <div className="flex-auto">
            <label
              htmlFor="search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <SearchIcon />
              </div>
              <input
                type="search"
                id="search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:ring-1 outline-none"
                placeholder="Search"
                required
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setPopUpOpen(true)}
                onBlur={() => setPopUpOpen(false)}
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
              {popUpOpen && (
                <div className="absolute w-full top-full px-5 py-5 shadow-xl rounded-md flex flex-col gap-y-2">
                  {filteredOptions.map((option, index) => (
                    <li key={index} className="list-none">
                      {option.label}
                    </li>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default RegisterNewPatient;
