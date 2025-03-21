"use client";
import { useState } from "react";
import ListInput from "../ListInput";

export interface iServiceAttendants {
  service: string;
  employees: string[];
}

export default function ServicesAttendants({
  selectedEmployee,
  selectedService,
  getSelectedEnployee,
  getSelectedService,
  servicesList,
  employeesList,
}: {
  selectedService: string;
  selectedEmployee: string;
  getSelectedService: (value: string) => void;
  getSelectedEnployee: (value: string) => void;
  servicesList: string[];
  employeesList: string[];
}) {
  return (
    <div>
      <div>
        <p className="text-white text-lg">serviço</p>
        <ListInput
          optionsList={servicesList}
          selectedValue={selectedService}
          getSelectedOption={getSelectedService}
        />
      </div>
      <div>
        <p className="text-white text-lg">atendente</p>
        <ListInput
          optionsList={employeesList}
          selectedValue={selectedEmployee}
          getSelectedOption={getSelectedEnployee}
        />
      </div>
    </div>
  );
}
