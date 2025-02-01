import React from "react";
import PartModal from "../../Components/Modals/AddPartsModal";
import { CarAdmin } from "../Components/CarAdmin";
import PartAdmin from "../Components/Partadmin";
import UpdatePartModal from "../../Components/Modals/UpdatePartsModal";

function PartsAdminPage() {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow-md h-full">
          {/* Header Section */}
          <div className="p-4 sm:p-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
              <h2 className="text-2xl font-semibold text-gray-800">
                Parts Inventory
              </h2>
              <PartModal />
            </div>
          </div>

          {/* Main Content Section */}
          <div className="p-4 sm:p-6">
            <div className="overflow-x-auto bg-white rounded-lg">
              <PartAdmin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartsAdminPage;
