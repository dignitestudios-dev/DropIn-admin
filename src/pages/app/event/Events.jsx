import EventFilter from "../../../components/app/Event/EventFilter";
import EventList from "../../../components/app/Event/EventList";

export default function Event() {
  return (
    <div className="h-[calc(90%)-2rem]">
      <div className="flex justify-between items-center" >
        <h3 className="font-[500] text-[28px] text-white">Events</h3>
        <EventFilter />
      </div>

      <EventList />
    </div>
  );
}
