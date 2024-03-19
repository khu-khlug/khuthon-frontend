"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Event } from "@khlug/types/Event";
import { createEvent } from "@khlug/util/createEvent";
import Spinner from "@khlug/components/Spinner/Spinner";

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

export default function EventProvider({ children }: Props) {
  const [event, setEvent] = useState<Event>();

  useEffect(() => {
    createEvent().then(setEvent);
  }, []);

  return event ? (
    <EventContext.Provider value={event}>{children}</EventContext.Provider>
  ) : (
    <Spinner />
  );
}

export function useEvent(): Event {
  return useContext(EventContext);
}
