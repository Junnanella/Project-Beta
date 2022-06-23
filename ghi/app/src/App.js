import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import ManufacturerList from "./inventory_components/ManufacturersList";
import ManufacturerForm from "./inventory_components/ManufacturerForm";
import VehicleList from "./inventory_components/VehiclesList";
import VehicleForm from "./inventory_components/VehicleForm";
import AutomobileList from "./inventory_components/AutomobileList";
import AutomobileForm from "./inventory_components/AutomobileForm";

// import Services components

// import Sales components
import CreateSalesPerson from "./sales_components/SalesPersonForm";
import CreateSalesRecord from "./sales_components/SalesRecordForm";
import { CreateTechnicianForm } from "./services_components/TechnicianForm";
import { CreateCustomer, CustomerForm } from "./sales_components/CustomerForm";

// 🚨🚨🚨 Import sales history class or function🚨🚨🚨
// 🚨🚨🚨 Then add route in the return of App function🚨🚨🚨

function App(props) {
  const { manufacturers } = props.manufacturers;
  const { models: vehicles } = props.vehicles;
  const { autos: automobiles } = props.automobiles;

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="manufacturers/"
            element={<ManufacturerList manufacturers={manufacturers} />}
          />
          <Route path="manufacturers/new/" element={<ManufacturerForm />} />
          <Route
            path="vehicles/"
            element={<VehicleList vehicles={vehicles} />}
          />
          <Route path="vehicles/new/" element={<VehicleForm />} />
          <Route
            path="automobiles/"
            element={<AutomobileList automobiles={automobiles} />}
          />
          <Route path="automobiles/new/" element={<AutomobileForm />} />
          <Route path="salesperson/new/" element={<CreateSalesPerson />} />
          <Route path="customer/new/" element={<CustomerForm />} />
          <Route path="sales_record/new/" element={<CreateSalesRecord />} />
          <Route path="technicians/new/" element={<CreateTechnicianForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
