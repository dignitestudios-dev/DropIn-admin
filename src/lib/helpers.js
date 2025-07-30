// All the helper functions should must be there.
// The functions that you're using multiple times must be there.
// e.g. formatDateToMMDDYYYY, formatEpochToMMDDYYYY, etc.
import moment from "moment";

export const dateFormate = (date) => {
   return moment(date).format("YYYY-MM-DD");
    
}
export const formatTimeTo12Hour = (timeString) => {
    return moment(timeString, "HH:mm").format("h:mm A");
  };
  export const formatToMonthAbbreviation = (date) => {
    return moment(date).format("MMM");
  };
  
  // For day of the month like 01, 16, 29, etc.
  export const formatToDay = (date) => {
    return moment(date).format("DD");
  };
  export const formatToFullMonthYearWithDay = (date) => {
    return moment(date).format("dddd, MMMM YYYY");
  };
  export const formatTimeRangeTo12Hour = (start, end) => {
    const startFormatted = moment(start, "HH:mm").format("hh:mma");
    const endFormatted = moment(end, "HH:mm").format("h:mma");
  
    return `${startFormatted} - ${endFormatted}`;
  };