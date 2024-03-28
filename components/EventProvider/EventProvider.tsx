"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Event } from "@khlug/types/Event";
import { createEvent } from "@khlug/util/createEvent";
import Spinner from "@khlug/components/Spinner/Spinner";
import { useGlobalSpinner } from "../GlobalSpinnerProvider/GlobalSpinnerProvider";

type Props = {
  children: React.ReactNode;
};

const defaultEvent: Event = {
  registerStartAt: new Date(),
  registerEndAt: new Date(),
  registerRange: "BEFORE",
  eventStartAt: new Date(),
  eventEndAt: new Date(),
  eventRange: "BEFORE",
  judgeStartAt: new Date(),
  judgeEndAt: new Date(),
  judgeRange: "BEFORE",
};

const EventContext = createContext<Event>(defaultEvent);
const SpinnerContext = "Khuthon/EventLoader" as const;

export default function EventProvider({ children }: Props) {
  const [event, setEvent] = useState<Event>();
  const [addContext, removeContext] = useGlobalSpinner();

  useEffect(() => {
    addContext(SpinnerContext);
    createEvent().then((event) => {
      setEvent(event);
      removeContext(SpinnerContext);
    });
  }, [addContext, removeContext]);

  return (
    event && (
      <EventContext.Provider value={event}>{children}</EventContext.Provider>
    )
  );
}

export function useEvent(): Event {
  return useContext(EventContext);
}
