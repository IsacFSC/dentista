import { clinicHours } from "@/data/clinicHours";

const weekMap = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
] as const;

export function getClinicStatus() {
  const now = new Date();

  const dayKey = weekMap[now.getDay()];
  const currentDay = clinicHours[dayKey];

  if (!currentDay.open || !currentDay.close) {
    return getNextOpening(now.getDay());
  }

  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const openMinutes =
    Number(currentDay.open.split(":")[0]) * 60 +
    Number(currentDay.open.split(":")[1]);

  const closeMinutes =
    Number(currentDay.close.split(":")[0]) * 60 +
    Number(currentDay.close.split(":")[1]);

  if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
    return {
      isOpen: true,
      message: "Aberto agora",
    };
  }

  return getNextOpening(now.getDay());
}

function getNextOpening(currentDayIndex: number) {
  for (let i = 1; i <= 7; i++) {
    const nextIndex = (currentDayIndex + i) % 7;

    const dayKey = weekMap[nextIndex];
    const day = clinicHours[dayKey];

    if (day.open) {
      return {
        isOpen: false,
        message: `Abre ${day.label} às ${day.open}`,
      };
    }
  }

  return {
    isOpen: false,
    message: "Fechado",
  };
}
