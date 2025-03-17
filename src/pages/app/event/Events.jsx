import EventFilter from "../../../components/app/event/EventFilter";
import EventList from "../../../components/app/event/EventList";

export default function Event() {
  return (
    <div className="h-[calc(90%)-2rem]">
      <div className="flex justify-between  flex-col sm:flex-row items-start sm:items-center" >
        <h3 className="font-[500] text-[28px] text-white">Events</h3>
        <EventFilter />
      </div>

      <EventList />
    </div>
  );
}
