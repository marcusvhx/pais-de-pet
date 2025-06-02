import { iScheduleData } from "@/components/schedule/Schedule";
import React, { createContext, useContext, useState } from "react";

const ScheduleContext = createContext(null);

export function ScheduleProvider(children:React.ReactNode) {
    const [scheduleData,setScheduleData] = useState<iScheduleData>({clientName:"",petKind:"",petName:"",selectedEmployee:"",selectedService:""})
}

export function useSchedule() {
    const context = useContext(ScheduleContext);
    if (!context) {
        throw new Error("useSchedule must be used within a ScheduleProvider");
    }
    return context;
}