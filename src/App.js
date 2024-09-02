function App() {
  return (
    <div className="">
      <img src="/front.png" alt="Placeholder Image" className="w-full h-auto" />
      <Page2 />
      <Page3 />
    </div>
  );
}

function Page2() {
  return (
    <div className="grid grid-cols-10">
      <div className="col-span-7 py-40 px-40 flex flex-col gap-10">
        <div className="text-3xl">
          Lombard Insurance Company Limited is a registered Financial Services
          Provider
        </div>
        <div className="text-3xl">SECTIONS TO BE COMPLETED</div>
        <div className="text-3xl">
          In order for us to Provide the best possible quote to suit the needs
          of your organization, we ask you complete the necessary sections and
          sign the declaration form.
        </div>
        <div className="text-3xl">
          <div>DOMESTIC POLICY</div>
          <div>Section A</div>
          <div>Section B</div>
        </div>
        <div className="text-3xl">
          <div>EXPORT POLICY</div>
          <div>Section A</div>
          <div>Section B</div>
        </div>

        <div className="text-3xl">BROKER NOMINATIONS</div>

        <div className="text-3xl font-semibold">
          NAME AND ADDRESS OF BROKER:
        </div>

        <textarea
          className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out resize-none"
          rows="5"
          placeholder=""
        />
        <img
          src="/bottom.png"
          alt="Placeholder Image"
          className="w-full h-auto"
        />
      </div>
      <div className="col-span-3  ">
        <img
          src="/side.png"
          alt="Placeholder Image"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}

function Page3() {
  return (
    <div className="flex flex-col gap-10 p-20">
      <div className="text-green-400 font-semibold text-4xl">SECTION A</div>
      <div className="text-green-400 border-b-2 border-green-400 text-3xl">
        Information for the Client
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4 border-b-2 border-b-gray-400">
          <label className="font-medium text-gray-700 w-48">
            Register Name
          </label>
          <input
            type="text"
            className="flex-grow focus:outline-none focus:border-gray-500 text-lg"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-4 border-b-2 border-b-gray-400">
            <label className="font-medium text-gray-700 w-48">
              Trading Name
            </label>
            <input
              type="text"
              className="flex-grow focus:outline-none focus:border-gray-500 text-lg"
            />
          </div>
          <div className="flex items-center gap-4 border-b-2 border-b-gray-400">
            <label className="font-medium text-gray-700 w-48">
              Registration no.
            </label>
            <input
              type="text"
              className="flex-grow focus:outline-none focus:border-gray-500 text-lg"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 border-b-2 border-b-gray-400">
          <label className="font-medium text-gray-700 w-48">
            Physical Address
          </label>
          <input
            type="text"
            className="flex-grow focus:outline-none focus:border-gray-500 text-lg"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-4 border-b-2 border-b-gray-400">
            <label className="font-medium text-gray-700 w-48">
              Postal Address
            </label>
            <input
              type="text"
              className="flex-grow focus:outline-none focus:border-gray-500 text-lg"
            />
          </div>
          <div className="flex items-center gap-4 border-b-2 border-b-gray-400">
            <label className="font-medium text-gray-700 w-48">
              Postal Code
            </label>
            <input
              type="text"
              className="flex-grow focus:outline-none focus:border-gray-500 text-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-4 border-b-2 border-b-gray-400">
            <label className="font-medium text-gray-700 w-48">
              Telephone No.
            </label>
            <input
              type="text"
              className="flex-grow focus:outline-none focus:border-gray-500 text-lg"
            />
          </div>
          <div className="flex items-center gap-4 border-b-2 border-b-gray-400">
            <label className="font-medium text-gray-700 w-48">Fax no.</label>
            <input
              type="text"
              className="flex-grow focus:outline-none focus:border-gray-500 text-lg"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 border-b-2 border-b-gray-400">
          <label className="font-medium text-gray-700 w-48">Contact Name</label>
          <input
            type="text"
            className="flex-grow focus:outline-none focus:border-gray-500 text-lg"
          />
        </div>

        <div className="flex items-center gap-4 border-b-2 border-b-gray-400">
          <label className="font-medium text-gray-700 w-48"></label>
          <input
            type="text"
            className="flex-grow focus:outline-none focus:border-gray-500 text-lg"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-4 border-b-2 border-b-gray-400">
            <label className="font-medium text-gray-700 w-48">Position</label>
            <input
              type="text"
              className="flex-grow focus:outline-none focus:border-gray-500 text-lg"
            />
          </div>
          <div className="flex items-center gap-4 border-b-2 border-b-gray-400">
            <label className="font-medium text-gray-700 w-48">Email</label>
            <input
              type="email"
              className="flex-grow focus:outline-none focus:border-gray-500 text-lg"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 border-b-2 border-b-gray-400">
          <label className="font-medium text-gray-700 w-48">
            Date Established
          </label>
          <input
            type="date"
            className="flex-grow focus:outline-none focus:border-gray-500 text-lg"
          />
        </div>
      </div>

      <div className="text-green-400 border-b-2 border-green-400 text-3xl">
        YOUR BUSINESS ACTIVITY
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4 border-b-2 border-b-gray-400">
          <label className="font-medium text-gray-700 w-48">
            Description of goods
          </label>
          <input
            type="text"
            className="flex-grow focus:outline-none focus:border-gray-500 text-lg"
          />
        </div>
        <div className="flex items-center gap-4 border-b-2 border-b-gray-400">
          <label className="font-medium text-gray-700 w-48">
            Main Business activity
          </label>
          <input
            type="text"
            className="flex-grow focus:outline-none focus:border-gray-500 text-lg"
          />
        </div>
        <div className="flex items-center gap-4 border-b-2 border-b-gray-400">
          <label className="font-medium text-gray-700 w-48">
            Are you a Manufacturer
          </label>
          <input
            type="checkbox"
            className="w-6 h-6 border-r-4 border-b-4 border-green-500 focus:outline-none"
          />
          <label className="font-medium text-gray-700 w-48">Wholesaler</label>
          <input
            type="checkbox"
            className="w-6 h-6 border-r-4 border-b-4 border-green-500 focus:outline-none"
          />

          <label className="font-medium text-gray-700 w-48">Retailer</label>
          <input
            type="checkbox"
            className="w-6 h-6 border-r-4 border-b-4 border-green-500 focus:outline-none"
          />

          <label className="font-medium text-gray-700 w-48">Distributer</label>
          <input
            type="checkbox"
            className="w-6 h-6 border-r-4 border-b-4 border-green-500 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
