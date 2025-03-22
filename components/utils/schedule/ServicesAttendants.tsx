"use client";
import { useState } from "react";
import ListInput from "../ListInput";

export interface iServiceAttendants {
  service: string;
  employees: string[];
}

export default function ServicesAttendants({
  getData,
  servicesList,
  employeesList,
  selectedEmployee,
  selectedService
}: {
  servicesList: string[];
  selectedService: string;
  employeesList: string[];
  selectedEmployee: string;
  getData:  (key: string, value: string) => void;
}) {
  return (
    <div>
      <div>
        <p className="text-white text-lg">serviço</p>
        <ListInput
          optionsList={servicesList}
          selectedValue={selectedService}
          getSelectedOption={getData}
          name="selectedService"

        />
      </div>
      <div>
        <p className="text-white text-lg">atendente</p>
        <ListInput
          name="selectedEmployee"
          optionsList={employeesList}
          selectedValue={selectedEmployee}
          getSelectedOption={getData}
        />
      </div>
    </div>
  );
}
